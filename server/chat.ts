export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
};

const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const DEFAULT_MODEL = process.env.OPENAI_MODEL || "gpt-5-mini";
const MAX_TURNS = 10;

const assistantInstructions = `
You are the Inobux AI concierge. Help visitors understand Inobux services, projects, blog topics, workflows, and how to get in touch.

Inobux offers:
- Web Development
- Mobile App Development
- Data Science & Analytics
- AI Development
- UI/UX Design
- ERP Solutions
- CRM Development

Selected projects:
- NearBux Platform
- EnzoCoolCalc Mobile App
- Go Gantabya Web Platform
- Go Gantabya Mobile App
- Pragya Refrigeration
- Kapable Kreation Web

Operating details:
- Global remote-first delivery
- Response time within 24 hours
- Primary contact: info@inobux.com

Style rules:
- Be concise, confident, and helpful.
- Focus on business value and practical next steps.
- If the visitor asks for pricing or timelines, explain that scope matters and suggest contacting info@inobux.com.
- If the question is outside Inobux services, answer briefly and steer back to relevant capabilities.
- Do not invent unsupported claims, client results, addresses, or phone numbers.
`.trim();

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function extractAssistantText(payload: Record<string, unknown>) {
  if (typeof payload.output_text === "string" && payload.output_text.trim()) {
    return payload.output_text.trim();
  }

  const output = Array.isArray(payload.output) ? payload.output : [];
  for (const item of output) {
    if (!item || typeof item !== "object") continue;
    const content = Array.isArray((item as { content?: unknown[] }).content)
      ? ((item as { content?: unknown[] }).content as unknown[])
      : [];

    for (const block of content) {
      if (!block || typeof block !== "object") continue;
      const typedBlock = block as { type?: unknown; text?: unknown };
      if (typedBlock.type === "output_text" && typeof typedBlock.text === "string") {
        return typedBlock.text.trim();
      }
    }
  }

  return "";
}

function sanitizeMessages(body: ChatRequestBody) {
  if (!Array.isArray(body.messages)) return [];

  return body.messages
    .filter((message): message is ChatMessage => {
      if (!message || typeof message !== "object") return false;
      if (message.role !== "user" && message.role !== "assistant") return false;
      return typeof message.content === "string" && message.content.trim().length > 0;
    })
    .slice(-MAX_TURNS)
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, 4000),
    }));
}

export async function handleChatHttpRequest(request: Request) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return json(
      {
        error:
          "Chatbot is not configured yet. Add OPENAI_API_KEY in your deployment environment to enable live AI responses.",
      },
      500,
    );
  }

  let body: ChatRequestBody;
  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const messages = sanitizeMessages(body);
  if (messages.length === 0) {
    return json({ error: "At least one message is required" }, 400);
  }

  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: DEFAULT_MODEL,
      instructions: assistantInstructions,
      input: messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as Record<string, unknown>;

  if (!response.ok) {
    const apiError =
      typeof payload.error === "object" && payload.error && "message" in payload.error
        ? String((payload.error as { message?: unknown }).message || "OpenAI request failed")
        : "OpenAI request failed";

    return json({ error: apiError }, response.status);
  }

  const message = extractAssistantText(payload);
  if (!message) {
    return json({ error: "The AI service returned an empty response." }, 502);
  }

  return json({ message, model: DEFAULT_MODEL });
}

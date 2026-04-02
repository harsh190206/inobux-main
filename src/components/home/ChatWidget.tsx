import { FormEvent, startTransition, useEffect, useRef, useState } from "react";
import { Bot, Loader2, MessageSquareText, Send, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const starterPrompts = [
  "What services would fit my startup?",
  "Can Inobux build an AI chatbot?",
  "How fast can your team respond?",
];

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi, I’m the Inobux AI assistant. Ask about services, project fit, AI integrations, or the best way to start your build.",
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen]);

  const submitPrompt = async (prompt: string) => {
    const content = prompt.trim();
    if (!content || isLoading) return;

    const nextMessages = [...messages, { role: "user" as const, content }];
    startTransition(() => {
      setMessages(nextMessages);
      setInput("");
    });
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(payload.error || "The AI assistant is temporarily unavailable.");
      }

      startTransition(() => {
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content: payload.message || "I couldn't generate a reply just now.",
          },
        ]);
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "The AI assistant is temporarily unavailable.";
      startTransition(() => {
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content: `${message} You can still reach the team directly at info@inobux.com.`,
          },
        ]);
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitPrompt(input);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
        {isOpen && (
          <div className="glass-panel w-[min(92vw,24rem)] overflow-hidden rounded-[1.75rem] border border-primary/20 shadow-[0_28px_120px_-34px_rgba(0,174,225,0.55)]">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Inobux AI Concierge</p>
                  <p className="text-xs text-muted-foreground">Live Responses API integration</p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div
              ref={viewportRef}
              className="max-h-[26rem] space-y-4 overflow-y-auto px-4 py-4 scrollbar-hide"
            >
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                      message.role === "assistant"
                        ? "bg-white/6 text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border/60 px-4 pb-4 pt-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {starterPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                    onClick={() => void submitPrompt(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form className="space-y-3" onSubmit={handleSubmit}>
                <Textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about services, timelines, AI integrations, or projects..."
                  className="min-h-[90px] resize-none rounded-3xl border-white/10 bg-white/5 px-4 py-3 text-sm"
                />
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-primary via-primary to-primary-glow text-primary-foreground shadow-[0_16px_40px_-18px_rgba(0,174,225,0.7)]"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        )}

        <Button
          type="button"
          size="lg"
          onClick={() => setIsOpen((current) => !current)}
          className="group h-14 rounded-full bg-gradient-to-r from-primary via-primary to-primary-glow px-5 text-primary-foreground shadow-[0_20px_50px_-20px_rgba(0,174,225,0.85)]"
        >
          {isOpen ? <X className="h-5 w-5" /> : <MessageSquareText className="h-5 w-5" />}
          <span>{isOpen ? "Close AI Chat" : "Ask Inobux AI"}</span>
          <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        </Button>
      </div>
    </>
  );
};

export default ChatWidget;

import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { handleChatHttpRequest } from "./server/chat";

const chatApiPlugin = (): Plugin => ({
  name: "chat-api-dev-middleware",
  configureServer(server) {
    server.middlewares.use("/api/chat", async (req, res) => {
      const host = req.headers.host || "localhost:8080";
      const origin = `${server.config.server.https ? "https" : "http"}://${host}`;
      const body =
        req.method === "POST"
          ? await new Promise<string>((resolve, reject) => {
              let data = "";
              req.on("data", (chunk) => {
                data += chunk;
              });
              req.on("end", () => resolve(data));
              req.on("error", reject);
            })
          : undefined;

      const request = new Request(`${origin}${req.url}`, {
        method: req.method,
        headers: req.headers as HeadersInit,
        body,
      });

      const response = await handleChatHttpRequest(request);
      res.statusCode = response.status;
      response.headers.forEach((value, key) => {
        res.setHeader(key, value);
      });
      res.end(await response.text());
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), chatApiPlugin(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: ["chrome90", "edge90", "firefox90", "safari15"],
      cssTarget: "safari15",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("react-router-dom") || id.includes("next-themes")) {
              return "react-vendor";
            }

            if (id.includes("node_modules/three")) {
              return "three-vendor";
            }

            if (id.includes("node_modules/gsap")) {
              return "gsap-vendor";
            }

            if (id.includes("@radix-ui") || id.includes("@tanstack/react-query") || id.includes("node_modules/lucide-react")) {
              return "ui-vendor";
            }

            return undefined;
          },
        },
      },
    },
  };
});

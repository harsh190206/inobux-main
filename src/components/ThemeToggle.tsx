import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (mounted ? resolvedTheme : "dark") === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-11 rounded-full border border-white/10 bg-white/5 px-3 text-foreground backdrop-blur-md hover:bg-white/10"
      aria-label="Toggle light and dark mode"
    >
      <span
        className={`absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-primary/15 transition-all duration-500 ${
          isDark ? "left-1" : "left-[calc(50%)]"
        }`}
      />
      <span className={`relative z-10 flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold transition ${isDark ? "text-primary" : "text-muted-foreground"}`}>
        <Moon className="h-4 w-4" />
        Dark
      </span>
      <span className={`relative z-10 flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold transition ${isDark ? "text-muted-foreground" : "text-primary"}`}>
        <Sun className="h-4 w-4" />
        Light
      </span>
    </Button>
  );
};

export default ThemeToggle;

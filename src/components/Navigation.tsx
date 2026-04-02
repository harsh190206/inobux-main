import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems } from "@/data/siteContent";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = sectionId === "home" ? document.body : document.getElementById(sectionId);
    if (!target) return;

    const top =
      sectionId === "home"
        ? 0
        : target.getBoundingClientRect().top + window.scrollY - 92;

    window.scrollTo({ top, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
          isScrolled
            ? "glass-panel border-primary/20 shadow-[0_18px_60px_-24px_rgba(0,174,225,0.6)]"
            : "border-white/10 bg-black/25 backdrop-blur-md"
        }`}
        aria-label="Primary"
      >
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 rounded-full px-2 py-1 text-left transition hover:bg-white/5"
          aria-label="Go to home section"
        >
          <div className="relative shine-border rounded-2xl p-[1px]">
            <div className="glass-panel rounded-2xl px-1 py-1">
              <img
                src="/logo1.png"
                alt="Inobux Logo"
                className="h-10 w-auto rounded-xl object-contain sm:h-11"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/80">Future-ready</p>
            <p className="text-sm text-muted-foreground">Designing, building, and scaling digital products</p>
          </div>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden rounded-full bg-gradient-to-r from-primary via-primary to-primary-glow px-5 text-primary-foreground shadow-[0_16px_40px_-18px_rgba(0,174,225,0.75)] md:inline-flex"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-primary/20 bg-background/90 p-4 shadow-[0_20px_70px_-30px_rgba(0,174,225,0.6)] backdrop-blur-xl lg:hidden">
          <div className="mb-4 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Explore Inobux</p>
              <p className="text-xs text-muted-foreground">Immersive product, AI, and systems engineering</p>
            </div>
            <ThemeToggle />
          </div>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-left text-sm text-foreground transition hover:border-primary/30 hover:bg-primary/10"
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button
            onClick={() => scrollToSection("contact")}
            className="mt-4 w-full rounded-full bg-gradient-to-r from-primary via-primary to-primary-glow text-primary-foreground"
          >
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navigation;

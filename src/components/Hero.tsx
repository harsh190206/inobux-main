import { ArrowRight, Bot, Globe2, Layers3, Sparkles } from "lucide-react";
import { Suspense, lazy, useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { companyStats, services } from "@/data/siteContent";
import heroWorkspace from "@/assets/hero-tech-workspace.jpg";

const GlobeCanvas = lazy(() => import("@/components/home/GlobeCanvas"));

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - 92;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24"
    >
      <AnimatedShaderBackground />
      <div className="aurora-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="floating-orb left-[4%] top-28 h-52 w-52 bg-primary/20" />
      <div className="floating-orb bottom-16 right-[8%] h-64 w-64 bg-primary-glow/20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div className="space-y-8">
          <div data-hero-reveal className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary/90 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Immersive Digital Systems
          </div>

          <div className="space-y-5">
            <h1
              data-hero-reveal
              className="max-w-3xl text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-7xl"
            >
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-white bg-clip-text text-transparent">
                Expert IT Solutions
              </span>
            </h1>
            <p
              data-hero-reveal
              className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              InoBux delivers cutting-edge web development, mobile apps, data science, and
              UI/UX design services. We turn your ideas into powerful digital experiences that
              drive growth.
            </p>
          </div>

          <div data-hero-reveal className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-gradient-to-r from-primary via-primary to-primary-glow px-7 text-primary-foreground shadow-[0_24px_60px_-24px_rgba(0,174,225,0.9)]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="rounded-full border-primary/25 bg-black/20 px-7 backdrop-blur-md"
            >
              Explore Services
            </Button>
          </div>

          <div data-hero-reveal className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {companyStats.map((item) => (
              <div
                key={item.label}
                className="glass-panel rounded-[1.5rem] px-4 py-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>

          <div data-hero-reveal className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="glass-panel rounded-[1.75rem] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-primary/80">Live Delivery Stack</p>
                  <h2 className="mt-2 text-xl font-semibold text-foreground">Futuristic products with business-ready foundations</h2>
                </div>
                <Layers3 className="h-9 w-9 text-primary" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {services.slice(0, 5).map((service) => (
                  <span
                    key={service.key}
                    className="rounded-full border border-primary/15 bg-primary/8 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {service.title}
                  </span>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
              <img
                src={heroWorkspace}
                alt="Modern tech workspace for digital product delivery"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </article>
          </div>
        </div>

        <div data-hero-reveal className="relative">
          <div className="absolute inset-6 rounded-[2.5rem] bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-4 sm:p-6">
            <Suspense
              fallback={
                <div className="relative h-[380px] w-full overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,225,0.16),transparent_40%),linear-gradient(145deg,rgba(8,18,34,0.82),rgba(6,11,20,0.68))] sm:h-[460px] lg:h-[540px]" />
              }
            >
              <GlobeCanvas />
            </Suspense>

            <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md sm:left-6 sm:top-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Global Remote Delivery</p>
                  <p className="text-xs text-muted-foreground">From product strategy to launch support</p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-4 right-4 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md sm:bottom-6 sm:right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">AI + Automation Ready</p>
                  <p className="text-xs text-muted-foreground">Chatbots, models, and smart workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

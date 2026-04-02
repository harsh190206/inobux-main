import { ArrowRight, BarChart3, Bot, BrainCircuit, Building2, Code2, Palette, Smartphone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/home/SectionHeader";
import { services } from "@/data/siteContent";

const serviceIcons = {
  web: Code2,
  mobile: Smartphone,
  data: BarChart3,
  ai: BrainCircuit,
  design: Palette,
  erp: Building2,
  crm: Users,
} as const;

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - 92;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const operationsSolutions = services.filter((service) => service.image);

  return (
    <section id="services" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="page-shell flex flex-col gap-14">
        <SectionHeader
          eyebrow="Capabilities"
          title="A layered service architecture for product growth, automation, and scale"
          description="We keep every service from your current website, then present it in a sharper, more premium structure built for decision-makers, operators, and founders."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.key as keyof typeof serviceIcons] || Bot;

              return (
                <article
                  key={service.key}
                  className="depth-card group rounded-[2rem] p-5 sm:p-6"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-70`} aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-black/25 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                    <ul className="mt-5 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="space-y-6">
            <div className="glass-panel overflow-hidden rounded-[2rem] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Featured Tracks</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">Operational systems and AI experiences that work together</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                The new layout turns your service offering into a clearer decision path: customer-facing products, internal systems, and AI-powered automation all sit in one connected story.
              </p>
              <div className="mt-6 grid gap-4">
                {operationsSolutions.map((service) => (
                  <article
                    key={service.key}
                    className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-4">
                      <p className="text-sm font-semibold text-foreground">{service.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Why Teams Choose Inobux</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                <li>Modern frontend, backend, AI, and systems work under one roof.</li>
                <li>Design and engineering are structured for performance, SEO, and accessibility from day one.</li>
                <li>Projects stay maintainable because the stack is organized around reusable content and scalable components.</li>
              </ul>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-primary via-primary to-primary-glow text-primary-foreground"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Services;

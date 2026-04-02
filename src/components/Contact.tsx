import { ArrowRight, Bot, Clock, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/home/SectionHeader";
import { processSteps, trustPoints } from "@/data/siteContent";

const gmailProjectLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=Project%20Inquiry&body=Hi%20Inobux%20Team,%0A%0AI%20am%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20Details:%0A-%20Service%20needed:%20%0A-%20Timeline:%20%0A-%20Budget%20range:%20%0A-%20Additional%20details:%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="floating-orb left-[-5%] top-24 h-72 w-72 bg-primary/18" />
      <div className="floating-orb bottom-10 right-[-5%] h-80 w-80 bg-primary-glow/18" />

      <div className="page-shell flex flex-col gap-14">
        <SectionHeader
          eyebrow="Get In Touch"
          title="A high-conviction contact experience with clear next steps and fast response cues"
          description="Ready to transform your business with cutting-edge IT solutions? Let's discuss your project and bring your vision to life."
        />

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <Card className="glass-panel rounded-[2rem] border-primary/15">
              <CardContent className="space-y-6 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email Us</p>
                    <a href="mailto:info@inobux.com" className="mt-1 inline-block text-sm text-muted-foreground transition hover:text-primary">
                      info@inobux.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Response Time</p>
                    <p className="mt-1 text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Global Services</p>
                    <p className="mt-1 text-sm text-muted-foreground">Remote-first, worldwide delivery</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/10 bg-black/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Why Choose Inobux?</p>
                <ul className="mt-5 space-y-4">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-panel relative overflow-hidden rounded-[2.5rem] border-primary/15">
            <div className="glow-line" aria-hidden="true" />
            <CardContent className="relative space-y-8 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Launch the conversation</p>
                  <h3 className="mt-3 text-3xl font-semibold text-foreground">Ready to start?</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                    Click below to send your project details directly through Gmail, or use the live AI assistant for instant guidance before reaching out.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-primary/20 bg-primary/10 p-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">AI Concierge Active</p>
                      <p className="text-xs text-muted-foreground">Live assistant in the bottom-right corner</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-primary via-primary to-primary-glow py-7 text-base text-primary-foreground shadow-[0_22px_70px_-28px_rgba(0,174,225,0.85)]"
              >
                <a href={gmailProjectLink} target="_blank" rel="noreferrer">
                  <Mail className="h-5 w-5" />
                  Send Email via Gmail
                </a>
              </Button>

              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5">
                  <p className="text-sm font-semibold text-foreground">What Happens Next?</p>
                  <div className="mt-5 space-y-4">
                    {processSteps.map((step, index) => (
                      <div key={step} className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-7 text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5">
                  <p className="text-sm font-semibold text-foreground">Best Fit Projects</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "High-performance websites",
                      "Cross-platform mobile apps",
                      "Custom CRM / ERP systems",
                      "AI assistants and automation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.25rem] border border-primary/15 bg-primary/8 px-4 py-4 text-sm text-foreground/90"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href="mailto:info@inobux.com"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-glow"
                  >
                    Email the team directly
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

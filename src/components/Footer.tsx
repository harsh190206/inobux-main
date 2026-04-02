import { Clock, Mail, MapPin } from "lucide-react";
import { navItems, services } from "@/data/siteContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/30 px-4 py-12 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="relative shine-border rounded-2xl p-[1px]">
              <div className="glass-panel rounded-2xl px-1 py-1">
                <img
                  src="/logo1.png"
                  alt="Inobux Logo"
                  className="h-11 w-auto rounded-xl object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary/80">Inobux</p>
              <p className="text-sm text-muted-foreground">Future-ready product engineering</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            Expert IT solutions for modern businesses. We specialize in web development, mobile
            apps, data science, AI development, ERP systems, CRM platforms, and UI/UX design.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {services.map((service) => (
              <li key={service.key}>
                <a href="#services" className="transition hover:text-primary">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground">Navigation</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground">Contact</h2>
          <div className="mt-5 space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href="mailto:info@inobux.com" className="transition hover:text-primary">
                info@inobux.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-primary" />
              <span>Within 24 hours</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>Remote-first, worldwide delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="page-shell mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {currentYear} InoBux. All rights reserved. Built for performance, visibility, and growth.</p>
        <p>Semantic structure, optimized metadata, and scalable frontend architecture included.</p>
      </div>
    </footer>
  );
};

export default Footer;

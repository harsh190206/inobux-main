import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import ChatWidget from "@/components/home/ChatWidget";
import { siteConfig } from "@/config/site.js";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 32,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title={siteConfig.defaultTitle}
        description="Inobux designs and builds immersive, high-performance digital products including AI solutions, web platforms, mobile apps, ERP systems, CRM development, analytics, and UI/UX."
        canonicalPath="/"
        keywords={siteConfig.defaultKeywords}
      />
      <Navigation />
      <main id="main-content" className="relative overflow-hidden">
        <Hero />
        <div data-parallax className="pointer-events-none absolute left-0 top-[28rem] h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;

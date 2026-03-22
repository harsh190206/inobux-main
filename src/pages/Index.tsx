import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    if (window.innerWidth <= 768) return;

    gsap.fromTo(
      content,
      { y: 0 },
      {
        y: 0,
        scrollTrigger: {
          trigger: content,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title="Inobux | Web Development, Mobile Apps, Data Science & UI/UX"
        description="Inobux delivers modern web applications, mobile apps, and data science solutions backed by a design-first approach. Explore services, portfolio, and blog insights."
        canonicalPath="/"
      />
      <Navigation />
      <Hero />
      <div ref={contentRef} className="relative z-20 bg-background md:sticky-none">
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    gsap.fromTo(
      content,
      { y: "100vh" },
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
      <Navigation />
      <Hero />
      <div ref={contentRef} className="relative z-20 bg-background">
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

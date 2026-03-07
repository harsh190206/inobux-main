import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      });
      gsap.from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });
      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center relative overflow-hidden sticky top-0">
      <AnimatedShaderBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 ref={titleRef} className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-[0_0_30px_rgba(38,193,231,0.5)]">
                Transform Your Business with   
                <span className="bg-gradient-to-r ml-3 from-primary to-primary-glow bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(38,193,231,0.6)]">
                   Expert IT Solutions
                </span>
              </h1>
              <p ref={descRef} className="text-xl text-muted-foreground max-w-2xl mx-auto drop-shadow-[0_0_20px_rgba(38,193,231,0.3)]">
                InoBux delivers cutting-edge web development, mobile apps, data science, and UI/UX design services. 
                We turn your ideas into powerful digital experiences that drive growth.
              </p>
            </div>

            <div ref={buttonsRef} className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_40px_rgba(38,193,231,0.6)] shadow-[0_0_20px_rgba(38,193,231,0.4)] hover:scale-110 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToServices}
                className="border-primary/20 hover:bg-primary/5 hover:shadow-[0_0_30px_rgba(38,193,231,0.4)] hover:scale-110 transition-all duration-300"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
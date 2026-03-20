import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, BarChart3, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    const cards = gsap.utils.toArray(cardsRef.current.children);
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out"
      });
    });
  }, []);

  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern Frameworks"],
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and native development for iOS and Android.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Data Science & Analytics",
      description: "Transform your data into actionable insights with machine learning, analytics, and visualization.",
      features: ["Data Analysis", "Machine Learning", "Predictive Models", "Custom Dashboards"],
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences for your audience.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Our <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive IT solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card-shadow transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-shadow transition-all duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow hover:scale-110 transition-all duration-300"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
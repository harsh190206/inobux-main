import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const isMobile = window.innerWidth <= 768;
    let animationFrameId: number;
    let isPaused = false;
    const speed = 1.5;

    const scroll = () => {
      if (!scrollContainer || isPaused) return;
      scrollContainer.scrollLeft += speed;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    if (!isMobile) animationFrameId = requestAnimationFrame(scroll);

    const pause = () => { isPaused = true; };
    const resume = () => { if (!isPaused) return; isPaused = false; animationFrameId = requestAnimationFrame(scroll); };

    scrollContainer.addEventListener("mouseenter", pause);
    scrollContainer.addEventListener("mouseleave", resume);
    scrollContainer.addEventListener("touchstart", pause, { passive: true });
    scrollContainer.addEventListener("touchend", resume, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", pause);
      scrollContainer.removeEventListener("mouseleave", resume);
      scrollContainer.removeEventListener("touchstart", pause);
      scrollContainer.removeEventListener("touchend", resume);
    };
  }, []);

  const projects = [
    {
      title: "NearBux Platform",
      description: "A comprehensive business networking platform that connects local businesses and freelancers, featuring real-time messaging, project management, and payment processing.",
      image: "/nearbux.png",
      tags: ["React", "Node.js", "MongoDB", "Real-time"],
      category: "Web Development"
    },
    {
      title: "EnzoCoolCalc Mobile App",
      description: "Cross-platform calculator application built with React Native, featuring advanced mathematical functions, history tracking, and customizable themes.",
      image: "/enzo.png",
      tags: ["React Native", "JavaScript", "Cross-Platform", "Mobile"],
      category: "Mobile Development"
    },
    {
      title: "Go Gantabya Web Platform",
      description: "Modern bus booking web application enabling users to search routes, compare prices, book tickets, and manage reservations with real-time seat availability and secure payment integration.",
      image: "/GoGantabya.png",
      tags: ["React", "TypeScript", "Payment Gateway", "Real-time"],
      category: "Web Development",
      link: "https://gogantabya.com"
    },
    {
      title: "Go Gantabya Mobile App",
      description: "Feature-rich mobile application for seamless bus ticket booking on-the-go, with live tracking, push notifications, digital tickets, and offline access to booking history.",
      image: "/GoGantabya.png",
      tags: ["React Native", "Mobile", "GPS Tracking", "Offline Mode"],
      category: "Mobile Development",
      link: "https://gogantabya.com"
    },
    {
      title: "Pragya Refrigeration",
      description: "Desktop application for automated serial number generation and management, streamlining inventory tracking and product identification with batch processing and export capabilities.",
      image: "/Pragya.svg",
      tags: ["Electron", "Desktop", "Automation", "Database"],
      category: "Desktop Application",
      link: "https://pragyarefrigeration.in/"
    },
    {
      title: "Kapable Kreation Web",
      description: "Modern e-commerce landing page for a clothing shopping website, featuring elegant product showcases, smooth animations, and conversion-optimized design for fashion retail.",
      image: "/kapable.png",
      tags: ["React", "E-commerce", "Landing Page", "Fashion"],
      category: "Web Development",
      link: "https://www.kapablekreation.com/home"
    },
    {
      title: "Enterprise ERP System",
      description: "Full-featured Enterprise Resource Planning system with modules for inventory management, HR, payroll, accounting, and real-time reporting dashboards for streamlined business operations.",
      image: "/ERP.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "ERP"],
      category: "Enterprise Software"
    },
    {
      title: "CRM Platform",
      description: "Customer Relationship Management platform with lead tracking, sales pipeline management, automated follow-ups, analytics, and team collaboration tools to boost sales performance.",
      image: "/CRM.jpg",
      tags: ["React", "TypeScript", "CRM", "Analytics"],
      category: "Enterprise Software"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Featured <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world solutions we've delivered for businesses across industries.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide mb-12"
          style={{ maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {[...projects, ...projects].map((project, index) => (
            <Card key={index} className="group flex-shrink-0 w-[280px] sm:w-[400px] snap-start overflow-hidden hover:shadow-card-shadow transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-contain bg-gradient-to-br from-primary/5 to-primary-glow/5 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <div 
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                      onClick={() => {
                        if (project.title === "NearBux Platform") {
                          window.open('https://nearbux.com', '_blank');
                        } else if (project.title === "EnzoCoolCalc Mobile App") {
                          window.open('https://pragyarefrigeration.in/', '_blank');
                        } else if (project.link) {
                          window.open(project.link, '_blank');
                        }
                      }}
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to bring your vision to life?
          </p>
          <p className="text-2xl font-semibold text-primary">
            Let's create your success story together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
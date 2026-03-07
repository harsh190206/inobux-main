import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Inobux Logo" 
                className="h-12 w-12 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              InoBux
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-shadow"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/40 backdrop-blur-xl border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Blog
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-primary to-primary-glow"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
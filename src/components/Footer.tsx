import { Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Inobux Logo" 
                  className="h-12 w-12 object-contain rounded-lg shadow-lg" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                InoBux
              </span>
            </div>
            <p className="text-muted-foreground">
              Expert IT solutions for modern businesses. We specialize in web development, mobile apps, data science, and UI/UX design.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Data Science</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:info@inobux.com" 
                  className="text-muted-foreground hover:text-primary transition-colors text-base underline decoration-black/30 hover:decoration-black"
                >
                  info@inobux.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>24h Response Time</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Global Services</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; {currentYear} InoBux. All rights reserved. Built with expertise and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
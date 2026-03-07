import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import pwaDevelopment from "@/assets/blog/pwa-development.jpg";

const ProgressiveWebAppsFuture = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button onClick={() => navigate('/')} variant="ghost" className="mb-6 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl mb-8">
              <img src={pwaDevelopment} alt="Progressive Web Apps: The Future of Web" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Progressive Web Apps: The Future of Web</h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2"><Calendar className="h-4 w-4" /><span>Nov 22, 2023</span></div>
                  <div className="flex items-center space-x-2"><Clock className="h-4 w-4" /><span>7 min read</span></div>
                  <div className="flex items-center space-x-2"><User className="h-4 w-4" /><span>Inobux Web Team</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 shadow-lg">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Progressive Web Apps represent the future of web development, combining the best of web and mobile applications. Discover how PWAs deliver app-like experiences through web technologies.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">What Makes PWAs Special</h2>
              <p className="mb-6 leading-relaxed">
                PWAs use modern web capabilities to deliver app-like user experiences. They're progressive, responsive, connectivity-independent, app-like, fresh, safe, discoverable, re-engageable, installable, and linkable. Service workers enable offline functionality and background synchronization.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Key Technologies</h2>
              <p className="mb-6 leading-relaxed">
                Service Workers handle caching, background sync, and push notifications. Web App Manifest provides metadata for installation. HTTPS ensures security. Modern APIs like Web Push, Background Sync, and Web Share enable native-like features. IndexedDB provides client-side storage.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Business Benefits</h2>
              <p className="mb-6 leading-relaxed">
                PWAs reduce development costs by maintaining a single codebase for web and mobile. They improve user engagement through push notifications and offline access. Installation prompts increase user retention. Faster loading and better performance boost conversions.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Build Your PWA?</h3>
                <p className="text-muted-foreground mb-4">
                  Let Inobux help you create a Progressive Web App that delivers exceptional user experiences across all devices.
                </p>
                <Button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=PWA%20Development&body=Hi%20Inobux%20Team,%0A%0AI%27m%20interested%20in%20building%20a%20Progressive%20Web%20App.%0A%0ABest%20regards', '_blank')}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
                >
                  Start Your PWA Project
                </Button>
              </div>
            </div>
          </div>
        </article>

        <div className="text-center mt-12">
          <Button onClick={() => navigate('/')} size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Main Site
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgressiveWebAppsFuture;

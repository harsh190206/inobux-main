import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ShoppingCart, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ecommerceDev from "@/assets/blog/ecommerce-development.jpg";

const EcommerceDevelopmentPractices = () => {
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
              <img src={ecommerceDev} alt="E-commerce Development Best Practices" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">E-commerce Development Best Practices</h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2"><Calendar className="h-4 w-4" /><span>Dec 3, 2023</span></div>
                  <div className="flex items-center space-x-2"><Clock className="h-4 w-4" /><span>9 min read</span></div>
                  <div className="flex items-center space-x-2"><User className="h-4 w-4" /><span>Inobux E-commerce Team</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 shadow-lg">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Building a successful e-commerce platform requires more than just a shopping cart. Here are the essential practices for creating high-converting online stores that scale with your business.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Performance Optimization</h2>
              <p className="mb-6 leading-relaxed">
                Site speed directly impacts conversion rates. Optimize images, implement lazy loading, use CDNs, and minimize JavaScript bundles. Every second of delay can cost you 7% in conversions. Tools like Google PageSpeed Insights and GTmetrix help identify performance bottlenecks.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Security and Trust</h2>
              <p className="mb-6 leading-relaxed">
                Implement SSL certificates, secure payment gateways, and regular security audits. Display trust badges, customer reviews, and clear return policies. PCI compliance is mandatory for processing credit cards. Use secure authentication and protect customer data at all costs.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Mobile-First Experience</h2>
              <p className="mb-6 leading-relaxed">
                Over 70% of e-commerce traffic comes from mobile devices. Design mobile-first with touch-friendly interfaces, simplified checkout processes, and mobile payment options like Apple Pay and Google Pay. Test extensively on real devices across different screen sizes.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Build Your E-commerce Success?</h3>
                <p className="text-muted-foreground mb-4">
                  Let Inobux help you create a high-converting e-commerce platform that drives sales and scales with your business growth.
                </p>
                <Button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=E-commerce%20Project&body=Hi%20Inobux%20Team,%0A%0AI%27m%20interested%20in%20building%20an%20e-commerce%20platform.%0A%0ABest%20regards', '_blank')}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
                >
                  Start Your E-commerce Project
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

export default EcommerceDevelopmentPractices;

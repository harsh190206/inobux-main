import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import digitalMarketing from "@/assets/blog/digital-marketing.jpg";

const DigitalMarketingITServices = () => {
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
              <img src={digitalMarketing} alt="Digital Marketing for IT Services" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Digital Marketing for IT Services</h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2"><Calendar className="h-4 w-4" /><span>Nov 28, 2023</span></div>
                  <div className="flex items-center space-x-2"><Clock className="h-4 w-4" /><span>6 min read</span></div>
                  <div className="flex items-center space-x-2"><User className="h-4 w-4" /><span>Inobux Marketing Team</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 shadow-lg">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Marketing IT services requires a unique approach that builds trust, demonstrates expertise, and attracts high-quality clients. Here are proven strategies to grow your IT service business.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Content Marketing Strategy</h2>
              <p className="mb-6 leading-relaxed">
                Create valuable content that showcases your expertise. Write technical blogs, create case studies, and share insights about industry trends. This positions you as a thought leader and improves search engine rankings. Focus on solving real problems your target audience faces.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">SEO for Technical Services</h2>
              <p className="mb-6 leading-relaxed">
                Optimize for local and technical keywords. Target phrases like "web development services," "mobile app development," and location-specific terms. Create service pages for each offering with detailed descriptions and case studies. Technical SEO is crucial for IT service websites.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Social Proof and Case Studies</h2>
              <p className="mb-6 leading-relaxed">
                Display client testimonials, case studies, and project portfolios prominently. Before-and-after comparisons, metrics improvements, and client success stories build credibility. Video testimonials are particularly powerful for IT services.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Scale Your IT Business?</h3>
                <p className="text-muted-foreground mb-4">
                  Let Inobux help you develop a digital marketing strategy that attracts high-quality clients and grows your IT service business.
                </p>
                <Button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=Marketing%20Strategy%20Consultation&body=Hi%20Inobux%20Team,%0A%0AI%27m%20interested%20in%20growing%20my%20IT%20service%20business.%0A%0ABest%20regards', '_blank')}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
                >
                  Grow Your Business
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

export default DigitalMarketingITServices;

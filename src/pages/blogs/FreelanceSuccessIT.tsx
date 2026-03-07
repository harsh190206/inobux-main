import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import freelanceSuccess from "@/assets/blog/freelance-success.jpg";

const FreelanceSuccessIT = () => {
  const navigate = useNavigate();

  const strategies = [
    "Build a strong online presence and portfolio",
    "Specialize in high-demand technologies",
    "Maintain excellent client communication",
    "Set competitive yet profitable rates",
    "Deliver projects on time and exceed expectations",
    "Continuously upgrade your skills and certifications"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl mb-8">
              <img 
                src={freelanceSuccess} 
                alt="The Ultimate Guide to Freelance Success in IT"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  The Ultimate Guide to Freelance Success in IT
                </h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 12, 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Inobux Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 shadow-lg">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The freelance IT market is booming, but success requires more than just technical skills. Here's your comprehensive guide to building a thriving freelance career in the competitive IT industry.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Why Freelancing in IT is Lucrative</h2>
              <p className="mb-6 leading-relaxed">
                The IT industry offers incredible opportunities for freelancers. With the rise of remote work, digital transformation, and the gig economy, businesses are increasingly turning to freelance professionals for specialized skills and flexible solutions. The demand for web developers, mobile app developers, data scientists, and UI/UX designers has never been higher.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Key Strategies for Success</h2>
              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <ul className="space-y-3">
                  {strategies.map((strategy, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{strategy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6">Building Your Technical Foundation</h2>
              <p className="mb-6 leading-relaxed">
                Success starts with mastering in-demand technologies. Focus on modern frameworks like React, Vue.js, or Angular for frontend development. For backend, consider Node.js, Python, or Go. Mobile developers should master React Native or Flutter for cross-platform development. Data scientists need expertise in Python, R, and machine learning frameworks.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Creating an Outstanding Portfolio</h2>
              <p className="mb-6 leading-relaxed">
                Your portfolio is your most powerful marketing tool. Include 3-5 high-quality projects that showcase different skills and technologies. For each project, explain the problem you solved, the technologies used, and the impact created. Include live demos and GitHub links whenever possible. Make sure your portfolio website itself demonstrates your technical abilities.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Pricing Your Services Strategically</h2>
              <p className="mb-6 leading-relaxed">
                Research market rates for your skills and experience level. Consider value-based pricing for complex projects where you can demonstrate clear ROI. Start with competitive rates to build your reputation, then gradually increase as you gain experience and testimonials. Don't undervalue your work – quality developers command premium rates.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Client Communication Excellence</h2>
              <p className="mb-6 leading-relaxed">
                Clear, professional communication sets you apart from the competition. Respond to inquiries promptly, ask clarifying questions, and provide regular project updates. Use project management tools to keep clients informed about progress. Set clear expectations about timelines, deliverables, and revision policies upfront.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Scaling Your Freelance Business</h2>
              <p className="mb-6 leading-relaxed">
                As you grow, consider specializing in a niche where you can become the go-to expert. Build long-term relationships with clients who provide recurring work. Create passive income streams through digital products, courses, or SaaS tools. Consider partnering with other freelancers to handle larger projects.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Common Pitfalls to Avoid</h2>
              <p className="mb-8 leading-relaxed">
                Don't take on projects outside your expertise just for quick money. Avoid clients who are unwilling to pay fair rates or respect your time. Never start work without a clear contract and payment terms. Don't neglect your professional development – the IT industry evolves rapidly, and staying current is crucial for long-term success.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Launch Your Freelance Career?</h3>
                <p className="text-muted-foreground mb-4">
                  At Inobux, we understand the freelance journey because we've been there. Whether you need mentorship, want to collaborate on projects, or are looking for freelance opportunities, we're here to support your success.
                </p>
                <Button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=Freelance%20Career%20Discussion&body=Hi%20Inobux%20Team,%0A%0AI%20read%20your%20guide%20about%20freelance%20success%20and%20would%20like%20to%20discuss%20opportunities%20or%20get%20advice.%0A%0ALooking%20forward%20to%20connecting.%0A%0ABest%20regards', '_blank')}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
                >
                  Connect With Us
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Main Site
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreelanceSuccessIT;

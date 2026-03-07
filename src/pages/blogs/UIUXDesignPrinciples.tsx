import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import uiUxDesign from "@/assets/blog/ui-ux-design.jpg";

const UIUXDesignPrinciples = () => {
  const navigate = useNavigate();

  const principles = [
    {
      title: "User-Centered Design",
      description: "Always prioritize user needs and behaviors over aesthetic preferences"
    },
    {
      title: "Consistency",
      description: "Maintain consistent patterns, colors, and interactions throughout the interface"
    },
    {
      title: "Accessibility",
      description: "Design for all users, including those with disabilities and different devices"
    },
    {
      title: "Simplicity",
      description: "Remove unnecessary elements and focus on core functionality"
    },
    {
      title: "Visual Hierarchy",
      description: "Guide users' attention through strategic use of size, color, and spacing"
    },
    {
      title: "Feedback & Response",
      description: "Provide immediate feedback for user actions and system status"
    }
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
                src={uiUxDesign} 
                alt="UI/UX Design Principles That Convert"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  UI/UX Design Principles That Convert
                </h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 10, 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>6 min read</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Inobux Design Team</span>
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
                Great UI/UX design isn't just about making things look beautiful—it's about creating interfaces that drive business results. Here are the fundamental principles that separate converting designs from pretty pictures.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">The Psychology of User Behavior</h2>
              <p className="mb-6 leading-relaxed">
                Understanding how users think and behave is the foundation of effective design. Users scan rather than read, they're impatient, and they make decisions based on emotions first, then justify with logic. Your design should accommodate these natural tendencies, not fight against them.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Core Design Principles for Conversion</h2>
              <div className="grid gap-6 mb-8">
                {principles.map((principle, index) => (
                  <div key={index} className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10">
                    <div className="flex items-start space-x-4">
                      <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">{principle.title}</h3>
                        <p className="text-muted-foreground">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6">Color Psychology and Brand Trust</h2>
              <p className="mb-6 leading-relaxed">
                Colors evoke emotions and influence behavior. Blue builds trust and is perfect for financial services. Green suggests growth and is ideal for environmental or health brands. Orange creates urgency and works well for call-to-action buttons. However, context and cultural considerations are crucial when making color decisions.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Typography That Converts</h2>
              <p className="mb-6 leading-relaxed">
                Typography is more than just choosing pretty fonts. It's about creating a hierarchy that guides users through your content. Use size, weight, and spacing to establish importance. Ensure readability across all devices and screen sizes. Limit yourself to 2-3 font families maximum to maintain consistency and avoid visual chaos.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">The Power of White Space</h2>
              <p className="mb-6 leading-relaxed">
                White space (or negative space) is not wasted space—it's a powerful design tool. It improves readability, creates focus, and makes interfaces feel more premium. Don't try to cram everything above the fold. Give your important elements room to breathe, and users will be more likely to engage with them.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Mobile-First Design Strategy</h2>
              <p className="mb-6 leading-relaxed">
                With mobile traffic dominating web usage, designing for mobile first is no longer optional. Start your design process with the smallest screen and work your way up. This ensures your core content and functionality work perfectly on all devices, rather than trying to squeeze desktop designs into mobile screens.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Testing and Iteration</h2>
              <p className="mb-6 leading-relaxed">
                The best designs are data-driven. Use A/B testing to validate design decisions. Heat mapping tools can show you where users actually click and scroll. User testing reveals pain points you might have missed. Remember, your first design is rarely your best design—iteration is key to optimization.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Conversion-Focused Call-to-Actions</h2>
              <p className="mb-8 leading-relaxed">
                Your call-to-action (CTA) buttons are where design meets business results. Make them visually distinct, use action-oriented language, and place them strategically throughout the user journey. Test different colors, sizes, and copy to find what resonates with your specific audience.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Transform Your User Experience?</h3>
                <p className="text-muted-foreground mb-4">
                  At Inobux, we combine beautiful design with conversion optimization to create interfaces that both users and businesses love. Whether you need a complete redesign or optimization of existing interfaces, our design team is ready to help.
                </p>
                <Button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=UI/UX%20Design%20Project&body=Hi%20Inobux%20Team,%0A%0AI%20read%20your%20article%20about%20UI/UX%20design%20principles%20and%20I%27m%20interested%20in%20improving%20my%20user%20experience.%0A%0ALooking%20forward%20to%20discussing%20this%20further.%0A%0ABest%20regards', '_blank')}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
                >
                  Start Your Design Project
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

export default UIUXDesignPrinciples;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-40 relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        {/* Top Header Area */}
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight">
            Get In <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge IT solutions? Let's discuss your project and bring your vision to life.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-5 gap-20 items-start">
          
          {/* LEFT COLUMN - Trust & Credibility */}
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Let's Start a Conversation</h3>
              <p className="text-muted-foreground/60 leading-relaxed">
                We're here to help you succeed. Whether you need a custom web application, mobile app, data analytics solution, or UI/UX design, our team is ready to deliver exceptional results.
              </p>
            </div>

            {/* Contact Info Items */}
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h4 className="font-semibold">Email Us</h4>
                  <Button
                    onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com', '_blank')}
                    variant="ghost"
                    className="h-auto p-0 text-muted-foreground/60 hover:text-primary transition-colors"
                  >
                    info@inobux.com
                  </Button>
                </div>
              </div>

              <div className="h-px bg-border/30"></div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="font-semibold">Response Time</h4>
                  <p className="text-muted-foreground/60 text-sm">Within 24 hours</p>
                </div>
              </div>

              <div className="h-px bg-border/30"></div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="font-semibold">Global Services</h4>
                  <p className="text-muted-foreground/60 text-sm">Remote-first, worldwide delivery</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-6 pt-8">
              <h4 className="font-semibold text-lg">Why Choose InoBux?</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-muted-foreground/60">
                  <span className="text-primary text-base">✓</span>
                  <span>Expert team with 5+ years experience</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground/60">
                  <span className="text-primary text-base">✓</span>
                  <span>Modern technologies and best practices</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground/60">
                  <span className="text-primary text-base">✓</span>
                  <span>Transparent communication and regular updates</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground/60">
                  <span className="text-primary text-base">✓</span>
                  <span>Competitive pricing and flexible engagement models</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground/60">
                  <span className="text-primary text-base">✓</span>
                  <span>Post-launch support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN - Main Conversion Card */}
          <div className="lg:col-span-3">
            <Card className="bg-card/20 backdrop-blur-2xl border-border/20 shadow-2xl">
              <CardContent className="p-12 space-y-10">
                {/* Card Header */}
                <div className="space-y-4 text-center">
                  <h3 className="text-3xl font-bold">Ready to Start?</h3>
                  <p className="text-muted-foreground/60 leading-relaxed max-w-md mx-auto">
                    Click the button below to send us an email directly through Gmail and let's discuss your project.
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=Project%20Inquiry&body=Hi%20Inobux%20Team,%0A%0AI%20am%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20Details:%0A-%20Service%20needed:%20%0A-%20Timeline:%20%0A-%20Budget%20range:%20%0A-%20Additional%20details:%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards', '_blank')}
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300 text-lg py-7 rounded-xl"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Send Email via Gmail
                </Button>

                {/* Process Steps */}
                <div className="pt-8">
                  <h4 className="font-semibold text-center mb-10">What Happens Next?</h4>
                  
                  <div className="relative space-y-8">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[15px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50"></div>

                    {/* Step 1 */}
                    <div className="flex items-start gap-6 relative">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0 relative z-10">
                        1
                      </div>
                      <div className="pt-1">
                        <p className="text-sm text-muted-foreground/70 leading-relaxed">
                          Send us an email with your project details
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-6 relative">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0 relative z-10">
                        2
                      </div>
                      <div className="pt-1">
                        <p className="text-sm text-muted-foreground/70 leading-relaxed">
                          We'll respond within 24 hours with questions and initial ideas
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-6 relative">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0 relative z-10">
                        3
                      </div>
                      <div className="pt-1">
                        <p className="text-sm text-muted-foreground/70 leading-relaxed">
                          Schedule a call to discuss your project in detail
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start gap-6 relative">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0 relative z-10">
                        4
                      </div>
                      <div className="pt-1">
                        <p className="text-sm text-muted-foreground/70 leading-relaxed">
                          Receive a detailed proposal and timeline
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

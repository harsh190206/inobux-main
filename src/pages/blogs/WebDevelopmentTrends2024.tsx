import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import webDevTrends from "@/assets/blog/web-development-trends.jpg";

const WebDevelopmentTrends2024 = () => {
  const navigate = useNavigate();

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
                src={webDevTrends} 
                alt="Latest Web Development Trends for 2024"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Latest Web Development Trends for 2024
                </h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 15, 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
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
                The web development landscape is constantly evolving, and 2024 brings exciting new technologies and frameworks that are reshaping how we build digital experiences. Let's explore the cutting-edge trends that every developer should know.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">1. AI-Powered Development Tools</h2>
              <p className="mb-6 leading-relaxed">
                Artificial Intelligence is revolutionizing the development process. Tools like GitHub Copilot, ChatGPT, and specialized AI assistants are helping developers write code faster and more efficiently. These tools can generate boilerplate code, suggest optimizations, and even help debug complex issues.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">2. Edge Computing and Serverless Architecture</h2>
              <p className="mb-6 leading-relaxed">
                Edge computing is bringing computation closer to users, resulting in faster load times and better user experiences. Serverless architectures are becoming more mainstream, allowing developers to focus on code rather than infrastructure management. Platforms like Vercel, Netlify, and Cloudflare Workers are leading this transformation.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">3. Advanced JavaScript Frameworks</h2>
              <p className="mb-6 leading-relaxed">
                React continues to dominate, but new frameworks like Svelte, SolidJS, and Qwik are gaining traction. These frameworks offer improved performance, smaller bundle sizes, and better developer experiences. The focus is shifting towards frameworks that can deliver lightning-fast applications with minimal overhead.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">4. Web Assembly (WASM) Integration</h2>
              <p className="mb-6 leading-relaxed">
                WebAssembly is enabling high-performance applications in the browser by allowing languages like Rust, C++, and Go to run alongside JavaScript. This opens up possibilities for complex applications like video editing, 3D rendering, and scientific computing to run directly in web browsers.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">5. Progressive Web Apps (PWAs) 2.0</h2>
              <p className="mb-6 leading-relaxed">
                PWAs are evolving with new capabilities that blur the line between web and native applications. Features like advanced offline functionality, push notifications, and device integration are making PWAs a viable alternative to traditional mobile apps for many use cases.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">6. Enhanced Developer Experience (DX)</h2>
              <p className="mb-6 leading-relaxed">
                Tools and frameworks are increasingly focusing on developer experience. Hot reloading, better error messages, improved debugging tools, and streamlined deployment processes are becoming standard expectations. The goal is to make development faster, more enjoyable, and less error-prone.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Future Outlook</h2>
              <p className="mb-8 leading-relaxed">
                As we move through 2024, the focus will be on creating more performant, accessible, and user-friendly web applications. The trends mentioned above are not just passing fads but fundamental shifts that will shape the future of web development for years to come.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Modernize Your Web Presence?</h3>
                <p className="text-muted-foreground mb-4">
                  At Inobux, we stay ahead of the latest web development trends to deliver cutting-edge solutions for our clients. Whether you need a modern web application, PWA, or want to leverage the latest technologies, we're here to help.
                </p>
                <Button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=Web%20Development%20Project%20Inquiry&body=Hi%20Inobux%20Team,%0A%0AI%20read%20your%20blog%20about%20web%20development%20trends%20and%20I%27m%20interested%20in%20discussing%20a%20project.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards', '_blank')}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
                >
                  Start Your Project
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

export default WebDevelopmentTrends2024;

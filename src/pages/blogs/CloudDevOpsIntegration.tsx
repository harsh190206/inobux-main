import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cloudDevOps from "@/assets/blog/cloud-devops.jpg";

const CloudDevOpsIntegration = () => {
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
              <img src={cloudDevOps} alt="Cloud Computing and DevOps Integration" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cloud Computing and DevOps Integration</h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2"><Calendar className="h-4 w-4" /><span>Nov 30, 2023</span></div>
                  <div className="flex items-center space-x-2"><Clock className="h-4 w-4" /><span>8 min read</span></div>
                  <div className="flex items-center space-x-2"><User className="h-4 w-4" /><span>Inobux DevOps Team</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 shadow-lg">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Modern development workflows demand seamless integration between cloud infrastructure and DevOps practices. Here's how to streamline your development process with cloud-native DevOps solutions.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">CI/CD Pipeline Automation</h2>
              <p className="mb-6 leading-relaxed">
                Implement continuous integration and deployment pipelines using tools like GitHub Actions, GitLab CI, or Jenkins. Automate testing, building, and deployment processes to reduce manual errors and accelerate delivery cycles. Cloud platforms like AWS, Azure, and GCP provide integrated CI/CD services.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Infrastructure as Code</h2>
              <p className="mb-6 leading-relaxed">
                Manage infrastructure using code with tools like Terraform, CloudFormation, or Pulumi. This ensures reproducible environments, version control for infrastructure changes, and easier scaling. Infrastructure as Code eliminates configuration drift and enables consistent deployments across environments.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Containerization and Orchestration</h2>
              <p className="mb-6 leading-relaxed">
                Docker containers provide consistent environments across development, testing, and production. Kubernetes orchestrates container deployments, handles scaling, and manages service discovery. Cloud-managed Kubernetes services like EKS, AKS, and GKE simplify container orchestration.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Modernize Your Infrastructure?</h3>
                <p className="text-muted-foreground mb-4">
                  Let Inobux help you implement cloud-native DevOps practices that accelerate development and improve reliability.
                </p>
                <Button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=DevOps%20Consultation&body=Hi%20Inobux%20Team,%0A%0AI%27m%20interested%20in%20modernizing%20our%20DevOps%20practices.%0A%0ABest%20regards', '_blank')}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
                >
                  Start Your DevOps Journey
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

export default CloudDevOpsIntegration;

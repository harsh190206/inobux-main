import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aiMachineLearning from "@/assets/blog/ai-machine-learning.jpg";

const AIMachineLearningApplications = () => {
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
              <img src={aiMachineLearning} alt="AI and Machine Learning Applications" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">AI and Machine Learning Applications</h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2"><Calendar className="h-4 w-4" /><span>Nov 25, 2023</span></div>
                  <div className="flex items-center space-x-2"><Clock className="h-4 w-4" /><span>11 min read</span></div>
                  <div className="flex items-center space-x-2"><User className="h-4 w-4" /><span>Inobux AI Team</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 shadow-lg">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Artificial Intelligence and Machine Learning are transforming industries and creating new opportunities for businesses. Explore practical applications and implementation strategies for AI/ML solutions.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Natural Language Processing</h2>
              <p className="mb-6 leading-relaxed">
                NLP powers chatbots, sentiment analysis, and content generation. Businesses use NLP for customer service automation, social media monitoring, and document processing. Modern transformers like GPT and BERT enable sophisticated language understanding and generation.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Computer Vision Applications</h2>
              <p className="mb-6 leading-relaxed">
                Computer vision enables image recognition, object detection, and automated quality control. Applications include medical imaging analysis, autonomous vehicles, retail inventory management, and security surveillance. Deep learning models like CNNs have revolutionized image processing capabilities.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Predictive Analytics</h2>
              <p className="mb-6 leading-relaxed">
                Machine learning models predict customer behavior, equipment failures, and market trends. Businesses use predictive analytics for demand forecasting, preventive maintenance, fraud detection, and personalized recommendations. Time series analysis and ensemble methods provide robust predictions.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Implement AI Solutions?</h3>
                <p className="text-muted-foreground mb-4">
                  Let InoBux help you identify AI opportunities and implement machine learning solutions that drive business value.
                </p>
                <Button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=AI%20Project%20Consultation&body=Hi%20Inobux%20Team,%0A%0AI%27m%20interested%20in%20exploring%20AI%20solutions%20for%20my%20business.%0A%0ABest%20regards', '_blank')}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
                >
                  Explore AI Solutions
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

export default AIMachineLearningApplications;

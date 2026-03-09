import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

// Import blog images
import webDevTrends from "@/assets/blog/web-development-trends.jpg";
import freelanceSuccess from "@/assets/blog/freelance-success.jpg";
import uiUxDesign from "@/assets/blog/ui-ux-design.jpg";
import reactNativeApps from "@/assets/blog/react-native-apps.jpg";
import dataAnalytics from "@/assets/blog/data-analytics.jpg";
import ecommerceDev from "@/assets/blog/ecommerce-development.jpg";
import cloudDevOps from "@/assets/blog/cloud-devops.jpg";
import digitalMarketing from "@/assets/blog/digital-marketing.jpg";
import aiMachineLearning from "@/assets/blog/ai-machine-learning.jpg";
import pwaDevelopment from "@/assets/blog/pwa-development.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const scrollContainer = scrollRef.current;
  if (!scrollContainer) return;

  let animationFrameId: number;
  let isPaused = false;
  const speed = 1.5; // adjust speed here

  const scroll = () => {
    if (!scrollContainer || isPaused) return;

    scrollContainer.scrollLeft += speed;

    // Reset when first half is fully scrolled
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
      scrollContainer.scrollLeft = 0;
    }

    animationFrameId = requestAnimationFrame(scroll);
  };

  animationFrameId = requestAnimationFrame(scroll);

  const handleMouseEnter = () => {
    isPaused = true;
  };

  const handleMouseLeave = () => {
    if (!isPaused) return;
    isPaused = false;
    animationFrameId = requestAnimationFrame(scroll);
  };

  scrollContainer.addEventListener("mouseenter", handleMouseEnter);
  scrollContainer.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    cancelAnimationFrame(animationFrameId);
    scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
    scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);

  const blogPosts = [
    {
      title: "Latest Web Development Trends for 2024",
      excerpt: "Discover the cutting-edge technologies and frameworks that are shaping the future of web development.",
      image: webDevTrends,
      category: "Web Development",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      slug: "web-development-trends-2024"
    },
    {
      title: "The Ultimate Guide to Freelance Success in IT",
      excerpt: "Learn proven strategies to build a thriving freelance career in the competitive IT industry.",
      image: freelanceSuccess, 
      category: "Freelancing",
      date: "Dec 12, 2023",
      readTime: "8 min read",
      slug: "freelance-success-it"
    },
    {
      title: "UI/UX Design Principles That Convert",
      excerpt: "Master the art of creating user interfaces that not only look great but also drive business results.",
      image: uiUxDesign,
      category: "Design",
      date: "Dec 10, 2023", 
      readTime: "6 min read",
      slug: "ui-ux-design-principles"
    },
    {
      title: "Building Cross-Platform Apps with React Native",
      excerpt: "A comprehensive guide to developing mobile applications that work seamlessly across iOS and Android.",
      image: reactNativeApps,
      category: "Mobile Development",
      date: "Dec 8, 2023",
      readTime: "10 min read",
      slug: "react-native-cross-platform"
    },
    {
      title: "Data Analytics for Business Growth",
      excerpt: "Transform your business data into actionable insights that drive growth and improve decision-making.",
      image: dataAnalytics,
      category: "Data Science",
      date: "Dec 5, 2023",
      readTime: "7 min read",
      slug: "data-analytics-business-growth"
    },
    {
      title: "E-commerce Development Best Practices",
      excerpt: "Essential tips and strategies for building high-converting online stores that scale with your business.",
      image: ecommerceDev,
      category: "E-commerce",
      date: "Dec 3, 2023",
      readTime: "9 min read",
      slug: "ecommerce-development-practices"
    },
    {
      title: "Cloud Computing and DevOps Integration",
      excerpt: "Streamline your development workflow with modern cloud infrastructure and DevOps methodologies.",
      image: cloudDevOps,
      category: "DevOps",
      date: "Nov 30, 2023",
      readTime: "8 min read",
      slug: "cloud-devops-integration"
    },
    {
      title: "Digital Marketing for IT Services",
      excerpt: "Effective marketing strategies to grow your IT service business and attract high-quality clients.",
      image: digitalMarketing,
      category: "Marketing",
      date: "Nov 28, 2023",
      readTime: "6 min read",
      slug: "digital-marketing-it-services"
    },
    {
      title: "AI and Machine Learning Applications",
      excerpt: "Explore practical applications of artificial intelligence and machine learning in business solutions.",
      image: aiMachineLearning,
      category: "AI/ML",
      date: "Nov 25, 2023",
      readTime: "11 min read",
      slug: "ai-machine-learning-applications"
    },
    {
      title: "Progressive Web Apps: The Future of Web",
      excerpt: "Learn how PWAs combine the best of web and mobile apps to deliver exceptional user experiences.",
      image: pwaDevelopment,
      category: "Web Development",
      date: "Nov 22, 2023",
      readTime: "7 min read",
      slug: "progressive-web-apps-future"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Latest <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of technology and freelancing.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide mb-12"
          style={{ maxWidth: '1114px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {[...blogPosts, ...blogPosts].map((post, index) => (
            <Card key={index} className="group flex-shrink-0 w-[350px] snap-start overflow-hidden hover:shadow-card-shadow transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="space-y-3">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary-glow hover:scale-105 transition-all duration-300"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to transform your business with cutting-edge technology?
          </p>
          <Button 
            size="lg"
            onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=Project%20Inquiry&body=Hi%20Inobux%20Team,%0A%0AI%20am%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards', '_blank')}
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow transition-all duration-300"
          >
            Let's Build Something Amazing Together!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
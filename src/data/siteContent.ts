import aiMachineLearning from "@/assets/blog/ai-machine-learning.jpg";
import cloudDevOps from "@/assets/blog/cloud-devops.jpg";
import dataAnalytics from "@/assets/blog/data-analytics.jpg";
import digitalMarketing from "@/assets/blog/digital-marketing.jpg";
import ecommerceDev from "@/assets/blog/ecommerce-development.jpg";
import freelanceSuccess from "@/assets/blog/freelance-success.jpg";
import pwaDevelopment from "@/assets/blog/pwa-development.jpg";
import reactNativeApps from "@/assets/blog/react-native-apps.jpg";
import uiUxDesign from "@/assets/blog/ui-ux-design.jpg";
import webDevTrends from "@/assets/blog/web-development-trends.jpg";

export type SectionId = "home" | "services" | "portfolio" | "blog" | "contact";

export const navItems: { label: string; id: SectionId }[] = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "portfolio" },
  { label: "Insights", id: "blog" },
  { label: "Contact", id: "contact" },
];

export type Service = {
  key: string;
  title: string;
  description: string;
  features: string[];
  accent: string;
  image?: string;
};

export const services: Service[] = [
  {
    key: "web",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern Frameworks"],
    accent: "from-sky-400/20 via-cyan-500/10 to-transparent",
  },
  {
    key: "mobile",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native and native development for iOS and Android.",
    features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    accent: "from-cyan-400/20 via-blue-500/10 to-transparent",
  },
  {
    key: "data",
    title: "Data Science & Analytics",
    description:
      "Transform your data into actionable insights with machine learning, analytics, and visualization.",
    features: ["Data Analysis", "Machine Learning", "Predictive Models", "Custom Dashboards"],
    accent: "from-emerald-400/18 via-cyan-500/10 to-transparent",
  },
  {
    key: "ai",
    title: "AI Development",
    description:
      "Intelligent AI solutions using modern frameworks and APIs to automate, analyze, and scale your business.",
    features: [
      "AI-Powered Automation",
      "Machine Learning Models",
      "Smart Chatbots Integration (like ChatGPT)",
      "Data-Driven Insights",
    ],
    accent: "from-violet-400/14 via-sky-500/14 to-transparent",
  },
  {
    key: "design",
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive and engaging digital experiences for your audience.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    accent: "from-amber-300/18 via-cyan-500/10 to-transparent",
  },
  {
    key: "erp",
    title: "ERP Solutions",
    description:
      "End-to-end Enterprise Resource Planning systems to unify your business operations, from inventory and HR to accounting and reporting.",
    features: ["Inventory Management", "HR & Payroll", "Accounting", "Real-time Dashboards"],
    accent: "from-blue-400/18 via-sky-500/10 to-transparent",
    image: "/ERP.jpg",
  },
  {
    key: "crm",
    title: "CRM Development",
    description:
      "Custom Customer Relationship Management platforms to manage leads, automate follow-ups, and drive sales growth with actionable insights.",
    features: ["Lead Tracking", "Sales Pipeline", "Automated Follow-ups", "Team Collaboration"],
    accent: "from-cyan-500/20 via-indigo-500/10 to-transparent",
    image: "/CRM.jpg",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "NearBux Platform",
    description:
      "A comprehensive business networking platform that connects local businesses and freelancers, featuring real-time messaging, project management, and payment processing.",
    image: "/nearbux.png",
    tags: ["React", "Node.js", "MongoDB", "Real-time"],
    category: "Web Development",
    link: "https://nearbux.com",
  },
  {
    title: "EnzoCoolCalc Mobile App",
    description:
      "Cross-platform calculator application built with React Native, featuring advanced mathematical functions, history tracking, and customizable themes.",
    image: "/enzo.png",
    tags: ["React Native", "JavaScript", "Cross-Platform", "Mobile"],
    category: "Mobile Development",
    link: "https://pragyarefrigeration.in/",
  },
  {
    title: "Go Gantabya Web Platform",
    description:
      "Modern bus booking web application enabling users to search routes, compare prices, book tickets, and manage reservations with real-time seat availability and secure payment integration.",
    image: "/GoGantabya.png",
    tags: ["React", "TypeScript", "Payment Gateway", "Real-time"],
    category: "Web Development",
    link: "https://gogantabya.com",
  },
  {
    title: "Go Gantabya Mobile App",
    description:
      "Feature-rich mobile application for seamless bus ticket booking on-the-go, with live tracking, push notifications, digital tickets, and offline access to booking history.",
    image: "/GoGantabya.png",
    tags: ["React Native", "Mobile", "GPS Tracking", "Offline Mode"],
    category: "Mobile Development",
    link: "https://gogantabya.com",
  },
  {
    title: "Pragya Refrigeration",
    description:
      "Desktop application for automated serial number generation and management, streamlining inventory tracking and product identification with batch processing and export capabilities.",
    image: "/Pragya.svg",
    tags: ["Electron", "Desktop", "Automation", "Database"],
    category: "Desktop Application",
    link: "https://pragyarefrigeration.in/",
  },
  {
    title: "Kapable Kreation Web",
    description:
      "Modern e-commerce landing page for a clothing shopping website, featuring elegant product showcases, smooth animations, and conversion-optimized design for fashion retail.",
    image: "/kapable.png",
    tags: ["React", "E-commerce", "Landing Page", "Fashion"],
    category: "Web Development",
    link: "https://www.kapablekreation.com/home",
  },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Latest Web Development Trends for 2024",
    excerpt:
      "Discover the cutting-edge technologies and frameworks that are shaping the future of web development.",
    image: webDevTrends,
    category: "Web Development",
    date: "Dec 15, 2023",
    readTime: "5 min read",
    slug: "web-development-trends-2024",
  },
  {
    title: "The Ultimate Guide to Freelance Success in IT",
    excerpt:
      "Learn proven strategies to build a thriving freelance career in the competitive IT industry.",
    image: freelanceSuccess,
    category: "Freelancing",
    date: "Dec 12, 2023",
    readTime: "8 min read",
    slug: "freelance-success-it",
  },
  {
    title: "UI/UX Design Principles That Convert",
    excerpt:
      "Master the art of creating user interfaces that not only look great but also drive business results.",
    image: uiUxDesign,
    category: "Design",
    date: "Dec 10, 2023",
    readTime: "6 min read",
    slug: "ui-ux-design-principles",
  },
  {
    title: "Building Cross-Platform Apps with React Native",
    excerpt:
      "A comprehensive guide to developing mobile applications that work seamlessly across iOS and Android.",
    image: reactNativeApps,
    category: "Mobile Development",
    date: "Dec 8, 2023",
    readTime: "10 min read",
    slug: "react-native-cross-platform",
  },
  {
    title: "Data Analytics for Business Growth",
    excerpt:
      "Transform your business data into actionable insights that drive growth and improve decision-making.",
    image: dataAnalytics,
    category: "Data Science",
    date: "Dec 5, 2023",
    readTime: "7 min read",
    slug: "data-analytics-business-growth",
  },
  {
    title: "E-commerce Development Best Practices",
    excerpt:
      "Essential tips and strategies for building high-converting online stores that scale with your business.",
    image: ecommerceDev,
    category: "E-commerce",
    date: "Dec 3, 2023",
    readTime: "9 min read",
    slug: "ecommerce-development-practices",
  },
  {
    title: "Cloud Computing and DevOps Integration",
    excerpt:
      "Streamline your development workflow with modern cloud infrastructure and DevOps methodologies.",
    image: cloudDevOps,
    category: "DevOps",
    date: "Nov 30, 2023",
    readTime: "8 min read",
    slug: "cloud-devops-integration",
  },
  {
    title: "Digital Marketing for IT Services",
    excerpt:
      "Effective marketing strategies to grow your IT service business and attract high-quality clients.",
    image: digitalMarketing,
    category: "Marketing",
    date: "Nov 28, 2023",
    readTime: "6 min read",
    slug: "digital-marketing-it-services",
  },
  {
    title: "AI and Machine Learning Applications",
    excerpt:
      "Explore practical applications of artificial intelligence and machine learning in business solutions.",
    image: aiMachineLearning,
    category: "AI/ML",
    date: "Nov 25, 2023",
    readTime: "11 min read",
    slug: "ai-machine-learning-applications",
  },
  {
    title: "Progressive Web Apps: The Future of Web",
    excerpt:
      "Learn how PWAs combine the best of web and mobile apps to deliver exceptional user experiences.",
    image: pwaDevelopment,
    category: "Web Development",
    date: "Nov 22, 2023",
    readTime: "7 min read",
    slug: "progressive-web-apps-future",
  },
];

export const companyStats = [
  { label: "Response Time", value: "24h" },
  { label: "Core Services", value: "7" },
  { label: "Delivery Style", value: "Global" },
  { label: "Build Focus", value: "SEO + UX" },
];

export const trustPoints = [
  "Expert team with 5+ years experience",
  "Modern technologies and best practices",
  "Transparent communication and regular updates",
  "Competitive pricing and flexible engagement models",
  "Post-launch support and maintenance",
];

export const processSteps = [
  "Send us an email with your project details",
  "We'll respond within 24 hours with questions and initial ideas",
  "Schedule a call to discuss your project in detail",
  "Receive a detailed proposal and timeline",
];

export const structuredServiceTypes = services.map((service) => service.title);

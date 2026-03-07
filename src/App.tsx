import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Blog imports
import WebDevelopmentTrends2024 from "./pages/blogs/WebDevelopmentTrends2024";
import FreelanceSuccessIT from "./pages/blogs/FreelanceSuccessIT";
import UIUXDesignPrinciples from "./pages/blogs/UIUXDesignPrinciples";
import ReactNativeCrossPlatform from "./pages/blogs/ReactNativeCrossPlatform";
import DataAnalyticsBusinessGrowth from "./pages/blogs/DataAnalyticsBusinessGrowth";
import EcommerceDevelopmentPractices from "./pages/blogs/EcommerceDevelopmentPractices";
import CloudDevOpsIntegration from "./pages/blogs/CloudDevOpsIntegration";
import DigitalMarketingITServices from "./pages/blogs/DigitalMarketingITServices";
import AIMachineLearningApplications from "./pages/blogs/AIMachineLearningApplications";
import ProgressiveWebAppsFuture from "./pages/blogs/ProgressiveWebAppsFuture";

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    gsap.to("body", {
      scrollBehavior: "smooth"
    });
    document.documentElement.classList.add('dark');
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Blog Routes */}
            <Route path="/blog/web-development-trends-2024" element={<WebDevelopmentTrends2024 />} />
            <Route path="/blog/freelance-success-it" element={<FreelanceSuccessIT />} />
            <Route path="/blog/ui-ux-design-principles" element={<UIUXDesignPrinciples />} />
            <Route path="/blog/react-native-cross-platform" element={<ReactNativeCrossPlatform />} />
            <Route path="/blog/data-analytics-business-growth" element={<DataAnalyticsBusinessGrowth />} />
            <Route path="/blog/ecommerce-development-practices" element={<EcommerceDevelopmentPractices />} />
            <Route path="/blog/cloud-devops-integration" element={<CloudDevOpsIntegration />} />
            <Route path="/blog/digital-marketing-it-services" element={<DigitalMarketingITServices />} />
            <Route path="/blog/ai-machine-learning-applications" element={<AIMachineLearningApplications />} />
            <Route path="/blog/progressive-web-apps-future" element={<ProgressiveWebAppsFuture />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Suspense, lazy } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const WebDevelopmentTrends2024 = lazy(() => import("./pages/blogs/WebDevelopmentTrends2024"));
const FreelanceSuccessIT = lazy(() => import("./pages/blogs/FreelanceSuccessIT"));
const UIUXDesignPrinciples = lazy(() => import("./pages/blogs/UIUXDesignPrinciples"));
const ReactNativeCrossPlatform = lazy(() => import("./pages/blogs/ReactNativeCrossPlatform"));
const DataAnalyticsBusinessGrowth = lazy(() => import("./pages/blogs/DataAnalyticsBusinessGrowth"));
const EcommerceDevelopmentPractices = lazy(() => import("./pages/blogs/EcommerceDevelopmentPractices"));
const CloudDevOpsIntegration = lazy(() => import("./pages/blogs/CloudDevOpsIntegration"));
const DigitalMarketingITServices = lazy(() => import("./pages/blogs/DigitalMarketingITServices"));
const AIMachineLearningApplications = lazy(() => import("./pages/blogs/AIMachineLearningApplications"));
const ProgressiveWebAppsFuture = lazy(() => import("./pages/blogs/ProgressiveWebAppsFuture"));

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
                Loading...
              </div>
            }
          >
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;

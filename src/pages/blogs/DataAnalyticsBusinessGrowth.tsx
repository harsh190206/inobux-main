import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, BarChart3, TrendingUp, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dataAnalytics from "@/assets/blog/data-analytics.jpg";

const DataAnalyticsBusinessGrowth = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Data-Driven Decisions",
      description: "Make informed business decisions based on concrete data rather than gut feelings"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Identify Growth Opportunities",
      description: "Discover hidden patterns and trends that reveal new revenue streams"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Optimize Performance",
      description: "Pinpoint inefficiencies and optimize operations for better ROI"
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
                src={dataAnalytics} 
                alt="Data Analytics for Business Growth"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Data Analytics for Business Growth
                </h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 5, 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>7 min read</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Inobux Data Team</span>
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
                In today's data-driven world, businesses that leverage analytics effectively gain a significant competitive advantage. Here's how to transform your raw data into actionable insights that drive measurable growth.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">The Power of Data Analytics</h2>
              <div className="grid gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6">Building Your Analytics Foundation</h2>
              <p className="mb-6 leading-relaxed">
                Start by identifying your key business metrics and KPIs. What drives revenue in your business? Customer acquisition cost, lifetime value, conversion rates, and churn rates are fundamental metrics for most businesses. Establish baseline measurements and set up proper tracking systems to capture clean, reliable data.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Essential Analytics Tools and Technologies</h2>
              <p className="mb-6 leading-relaxed">
                Google Analytics provides comprehensive web analytics, while tools like Mixpanel or Amplitude offer advanced event tracking. For business intelligence, consider Tableau, Power BI, or Looker. Python and R remain popular for custom analysis, with libraries like Pandas, NumPy, and Scikit-learn enabling sophisticated data science workflows.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Customer Behavior Analysis</h2>
              <p className="mb-6 leading-relaxed">
                Understanding customer behavior is crucial for growth. Analyze user journeys to identify friction points and optimization opportunities. Cohort analysis reveals retention patterns, while funnel analysis shows where customers drop off. Heat mapping tools provide insights into how users interact with your website or application.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Predictive Analytics for Proactive Growth</h2>
              <p className="mb-6 leading-relaxed">
                Move beyond descriptive analytics to predictive modeling. Machine learning algorithms can forecast customer churn, predict sales trends, and identify high-value prospects. Start with simple regression models and gradually incorporate more sophisticated techniques like random forests or neural networks as your data science capabilities mature.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">A/B Testing and Experimentation</h2>
              <p className="mb-6 leading-relaxed">
                Systematic experimentation is essential for data-driven growth. A/B testing allows you to validate hypotheses and measure the impact of changes. Test one variable at a time, ensure statistical significance, and run tests long enough to account for weekly patterns. Tools like Optimizely, VWO, or Google Optimize can streamline your experimentation process.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Real-Time Dashboards and Reporting</h2>
              <p className="mb-6 leading-relaxed">
                Create executive dashboards that provide real-time visibility into key metrics. Automated reporting saves time and ensures stakeholders stay informed. Set up alerts for significant changes or threshold breaches. Remember, the best dashboard is one that's actually used—prioritize clarity and actionability over complexity.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Data Quality and Governance</h2>
              <p className="mb-6 leading-relaxed">
                Poor data quality leads to poor decisions. Implement data validation rules, regular audits, and cleaning processes. Establish data governance policies that define data ownership, access controls, and quality standards. Remember: garbage in, garbage out—invest in data quality from the beginning.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Measuring ROI of Analytics Initiatives</h2>
              <p className="mb-8 leading-relaxed">
                Track the business impact of your analytics investments. Calculate the value generated from optimization projects, improved decision-making, and operational efficiencies. This helps justify continued investment in analytics capabilities and demonstrates the tangible value of data-driven approaches to skeptical stakeholders.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Unlock Your Data's Potential?</h3>
                <p className="text-muted-foreground mb-4">
                  At Inobux, we help businesses transform their data into competitive advantages. From setting up analytics infrastructure to building predictive models and custom dashboards, our data science team can help you make better decisions and drive growth.
                </p>
                <Button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=Data%20Analytics%20Project&body=Hi%20Inobux%20Team,%0A%0AI%20read%20your%20article%20about%20data%20analytics%20and%20I%27m%20interested%20in%20leveraging%20data%20for%20business%20growth.%0A%0ALooking%20forward%20to%20discussing%20my%20data%20needs.%0A%0ABest%20regards', '_blank')}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
                >
                  Start Your Analytics Journey
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

export default DataAnalyticsBusinessGrowth;

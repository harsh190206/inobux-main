import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Smartphone, Code, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import reactNativeApps from "@/assets/blog/react-native-apps.jpg";

const ReactNativeCrossPlatform = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Single Codebase",
      description: "Write once, run everywhere - iOS, Android, and even web with React Native Web"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Fast Development",
      description: "Hot reloading and shared business logic dramatically reduce development time"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Native Performance",
      description: "Access native APIs and achieve near-native performance for most use cases"
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
                src={reactNativeApps} 
                alt="Building Cross-Platform Apps with React Native"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Building Cross-Platform Apps with React Native
                </h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 8, 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>10 min read</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Inobux Mobile Team</span>
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
                React Native has revolutionized mobile app development by enabling developers to create high-quality mobile applications for both iOS and Android using a single codebase. Here's your comprehensive guide to mastering cross-platform development.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Why Choose React Native?</h2>
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

              <h2 className="text-2xl font-bold text-primary mb-6">Getting Started with React Native</h2>
              <p className="mb-6 leading-relaxed">
                Setting up React Native is straightforward with the React Native CLI or Expo CLI. For beginners, Expo provides a managed workflow with built-in tools and services. For more control over native modules and custom configurations, the React Native CLI offers a bare workflow. Choose based on your project requirements and complexity.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Core Components and Navigation</h2>
              <p className="mb-6 leading-relaxed">
                React Native provides a rich set of built-in components like View, Text, ScrollView, and FlatList that translate to native iOS and Android components. For navigation, React Navigation is the gold standard, offering stack, tab, and drawer navigators that feel native on both platforms while maintaining shared logic.
              </p>

              <div className="bg-gray-900 rounded-lg p-6 mb-8 overflow-x-auto">
                <code className="text-green-400 text-sm">
                  <pre>{`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MyComponent;`}</pre>
                </code>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6">State Management and Data Flow</h2>
              <p className="mb-6 leading-relaxed">
                For state management, you can use React's built-in hooks for simple scenarios, or adopt Redux, Zustand, or Context API for more complex applications. AsyncStorage handles local data persistence, while libraries like React Query or SWR manage server state and caching efficiently.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Styling and Responsive Design</h2>
              <p className="mb-6 leading-relaxed">
                React Native uses a CSS-like styling system with Flexbox for layouts. Create responsive designs using Dimensions API, screen size calculations, and platform-specific styles. Libraries like styled-components or NativeBase can enhance your styling workflow and provide pre-built components.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Native Modules and Third-Party Libraries</h2>
              <p className="mb-6 leading-relaxed">
                The React Native ecosystem is rich with libraries for everything from animations (Reanimated) to maps (react-native-maps) and cameras (react-native-camera). When existing libraries don't meet your needs, you can create custom native modules to bridge native iOS and Android functionality.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Performance Optimization</h2>
              <p className="mb-6 leading-relaxed">
                Optimize performance by using FlatList for large datasets, implementing proper image caching, minimizing bridge communication, and leveraging tools like Flipper for debugging. React Native's new architecture (Fabric and TurboModules) further improves performance by reducing bridge overhead.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Testing and Deployment</h2>
              <p className="mb-6 leading-relaxed">
                Implement comprehensive testing with Jest for unit tests, Detox for end-to-end testing, and React Native Testing Library for component testing. For deployment, use EAS Build for streamlined builds and over-the-air updates with CodePush or EAS Update for instant app updates without app store approval.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">Common Pitfalls and Best Practices</h2>
              <p className="mb-8 leading-relaxed">
                Avoid over-engineering by starting simple and adding complexity as needed. Don't ignore platform-specific design guidelines—users expect iOS and Android apps to feel native. Always test on real devices, not just simulators. Keep your React Native version updated and regularly audit dependencies for security and performance improvements.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h3 className="text-xl font-bold mb-4">Ready to Build Your Mobile App?</h3>
                <p className="text-muted-foreground mb-4">
                  At Inobux, we specialize in React Native development and have built numerous successful cross-platform applications. Whether you're starting from scratch or need to optimize an existing app, our mobile development team is here to help you succeed.
                </p>
                <Button 
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=Mobile%20App%20Development%20Project&body=Hi%20Inobux%20Team,%0A%0AI%20read%20your%20React%20Native%20guide%20and%20I%27m%20interested%20in%20building%20a%20mobile%20app.%0A%0ALooking%20forward%20to%20discussing%20my%20project.%0A%0ABest%20regards', '_blank')}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow"
                >
                  Start Your Mobile Project
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

export default ReactNativeCrossPlatform;

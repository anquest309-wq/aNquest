import React from 'react';
import { Apple, Smartphone, Code2, Layers, Monitor, Settings } from 'lucide-react';

const AppDevelopment = () => {
  const services = [
    {
      title: "iOS Development",
      description: "Native iOS applications built with Swift and SwiftUI. We create apps that leverage the full power of Apple's ecosystem and deliver exceptional user experiences.",
      icon: Apple,
      bgImage: "https://images.unsplash.com/photo-1621931801226-7d50d7689e4d?w=800&auto=format&fit=crop",
      features: [
        "Swift & SwiftUI",
        "Objective-C",
        "iOS SDK",
        "App Store Optimization",
        "Apple Guidelines Compliance"
      ]
    },
    {
      title: "Android Development",
      description: "Native Android applications built with Kotlin and Java. We create apps that work seamlessly across all Android devices and versions.",
      icon: Smartphone,
      bgImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop",
      features: [
        "Kotlin & Java",
        "Android SDK",
        "Material Design",
        "Google Play Store",
        "Android Guidelines"
      ]
    },
    {
      title: "React Native Development",
      description: "Cross-platform mobile apps built with React Native. One codebase for both iOS and Android platforms, reducing development time and costs.",
      icon: Code2,
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
      features: [
        "Cross-Platform Apps",
        "JavaScript/TypeScript",
        "Native Performance",
        "Code Reusability",
        "Faster Development"
      ]
    },
    {
      title: "Flutter Development",
      description: "Beautiful, fast mobile apps built with Google's Flutter framework. Create stunning UIs with native performance across platforms.",
      icon: Layers,
      bgImage: "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=800&auto=format&fit=crop",
      features: [
        "Dart Programming",
        "Material Design",
        "Cupertino Widgets",
        "Hot Reload",
        "Google Support"
      ]
    },
    {
      title: "Cross-Platform Development",
      description: "Develop once, deploy everywhere. We create apps that work seamlessly across iOS, Android, and web platforms with shared codebases.",
      icon: Monitor,
      bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
      features: [
        "Single Codebase",
        "Multiple Platforms",
        "Cost Effective",
        "Faster Time to Market",
        "Consistent UI/UX"
      ]
    },
    {
      title: "App Maintenance",
      description: "Keep your mobile apps running smoothly with our comprehensive maintenance and support services. Regular updates and bug fixes included.",
      icon: Settings,
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      features: [
        "Regular Updates",
        "Bug Fixes",
        "Performance Optimization",
        "Security Patches",
        "24/7 Support"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan."
    },
    {
      number: "2",
      title: "Design & Prototyping",
      description: "We create wireframes and prototypes for your app."
    },
    {
      number: "3",
      title: "Development & Testing",
      description: "We build your app with rigorous testing at every step."
    },
    {
      number: "4",
      title: "Launch & Support",
      description: "We deploy your app and provide ongoing support."
    }
  ];

  return (
    <div className="min-h-screen theme-bg-secondary">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 md:py-40 theme-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold theme-text-primary mb-6 leading-tight">
              Mobile <span className="theme-accent-primary">App Development</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl theme-text-secondary mb-8 leading-relaxed px-4">
              We create powerful, user-friendly mobile applications for iOS and Android platforms. 
              From concept to deployment, we deliver apps that engage users and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            Our Mobile App Development Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="group theme-card rounded-2xl theme-shadow-primary overflow-hidden transition-all duration-500 hover:theme-shadow-secondary hover:scale-105 relative flex flex-col"
                >
                  {/* Background Image - Shows on Hover */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  
                  <div className="relative p-6 sm:p-8 flex flex-col items-center text-center flex-grow">
                    {/* Icon Container - Centered */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 theme-bg-tertiary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 theme-accent-primary" />
                    </div>

                    {/* Title - Centered */}
                    <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-4">
                      {service.title}
                    </h3>
                    
                    {/* Description - Centered */}
                    <p className="theme-text-secondary mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List - Centered */}
                    <ul className="theme-text-muted space-y-2 mt-auto  flex flex-col items-start justify-start">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <span className="theme-accent-primary mr-2">•</span>
                          <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            Our App Development Process
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="theme-card rounded-2xl p-6 sm:p-8 text-center hover:theme-shadow-secondary transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 theme-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white font-bold text-2xl sm:text-3xl">{step.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold theme-text-primary mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="theme-text-secondary text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Why Choose Our App Development?
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed">
              We deliver high-quality mobile apps that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: "Native Performance", description: "Lightning-fast apps with smooth animations" },
              { title: "User-Centric Design", description: "Intuitive interfaces that users love" },
              { title: "Scalable Architecture", description: "Built to grow with your business" },
              { title: "Ongoing Support", description: "Continuous maintenance and updates" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="theme-card rounded-2xl p-6 sm:p-8 text-center hover:theme-shadow-secondary transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 theme-bg-tertiary rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full theme-gradient-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold theme-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="theme-text-secondary text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
     

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-gradient-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your app idea and create a mobile solution that engages users and drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="/contacts"
                className="bg-white theme-accent-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
              >
                Start Your App Project
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:theme-accent-primary transition-all duration-300 text-base sm:text-lg hover:scale-105"
              >
                View Our Apps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
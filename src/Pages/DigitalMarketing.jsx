import React from 'react';
import { Target, TrendingUp, Users, BarChart3, Smartphone, Globe, Mail, Share2, Eye, MousePointer, Zap, Award } from 'lucide-react';
import { buildUrl } from '../utils/urlUtils';

const DigitalMarketing = () => {
  const services = [
    {
      icon: Target,
      title: "Social Media Marketing",
      description: "Build your brand presence across all major social platforms with engaging content and strategic campaigns.",
      features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Social Advertising"]
    },
    {
      icon: TrendingUp,
      title: "Google Ads Management",
      description: "Maximize your ROI with expertly managed Google Ads campaigns that drive qualified traffic to your business.",
      features: ["Campaign Optimization", "Keyword Research", "Ad Copy Creation", "Performance Tracking"]
    },
    {
      icon: Users,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that convert prospects into loyal customers.",
      features: ["Email Automation", "Segmentation", "A/B Testing", "Analytics & Reporting"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and detailed reports on your marketing performance.",
      features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Monthly Reports"]
    },
    {
      icon: Smartphone,
      title: "Mobile Marketing",
      description: "Reach your audience on mobile devices with SMS marketing, mobile apps, and responsive campaigns.",
      features: ["SMS Campaigns", "Mobile App Marketing", "Push Notifications", "Mobile Optimization"]
    },
    {
      icon: Globe,
      title: "Content Marketing",
      description: "Create valuable, relevant content that attracts and engages your target audience across all channels.",
      features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy"]
    }
  ];

  const strategies = [
    {
      icon: Eye,
      title: "Brand Awareness",
      description: "Increase visibility and recognition of your brand across digital channels",
      metrics: "85% increase in brand mentions"
    },
    {
      icon: MousePointer,
      title: "Lead Generation",
      description: "Attract and convert prospects into qualified leads for your business",
      metrics: "300% more qualified leads"
    },
    {
      icon: Zap,
      title: "Sales Conversion",
      description: "Turn leads into customers with optimized conversion funnels",
      metrics: "250% improvement in conversion rates"
    },
    {
      icon: Award,
      title: "Customer Retention",
      description: "Build lasting relationships and increase customer lifetime value",
      metrics: "180% increase in customer retention"
    }
  ];

  const platforms = [
    { name: "Facebook", icon: "📘", reach: "2.9B users", description: "Social media marketing and advertising" },
    { name: "Instagram", icon: "📷", reach: "1.4B users", description: "Visual content and influencer marketing" },
    { name: "LinkedIn", icon: "💼", reach: "800M users", description: "B2B marketing and professional networking" },
    { name: "Twitter", icon: "🐦", reach: "400M users", description: "Real-time engagement and brand monitoring" },
    { name: "TikTok", icon: "🎵", reach: "1B users", description: "Short-form video content marketing" },
    { name: "YouTube", icon: "📺", reach: "2.3B users", description: "Video marketing and advertising" },
    { name: "Google Ads", icon: "🔍", reach: "8.5B searches/day", description: "Search and display advertising" },
    { name: "Email", icon: "📧", reach: "4B users", description: "Direct marketing and automation" }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="theme-gradient-primary  py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Digital <span className="theme-accent-primary">Marketing</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl theme-text-secondary mb-8 leading-relaxed">
              Drive growth and maximize your online presence with our comprehensive digital marketing strategies
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                Multi-Platform Strategy
              </span>
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                Data-Driven Results
              </span>
              <span className="theme-bg-tertiary theme-text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium">
                ROI Focused
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Our Digital Marketing <span className="theme-accent-primary">Services</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions designed to grow your business and maximize your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 theme-bg-tertiary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 theme-accent-primary" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="theme-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm theme-text-muted">
                        <div className="w-2 h-2 theme-accent-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marketing Strategies Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Marketing <span className="theme-accent-primary">Strategies</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              Proven strategies that deliver measurable results across all digital channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {strategies.map((strategy, index) => {
              const IconComponent = strategy.icon;
              return (
                <div key={index} className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 theme-bg-tertiary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 theme-accent-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold theme-text-primary mb-4">
                    {strategy.title}
                  </h3>
                  
                  <p className="theme-text-secondary mb-4 leading-relaxed">
                    {strategy.description}
                  </p>
                  
                  <div className="text-lg font-bold theme-accent-primary">
                    {strategy.metrics}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Marketing <span className="theme-accent-primary">Platforms</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              We manage your presence across all major digital marketing platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="theme-card rounded-xl theme-shadow-primary p-4 sm:p-6 text-center group hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {platform.icon}
                </div>
                
                <h3 className="text-sm sm:text-base font-bold theme-text-primary mb-2">
                  {platform.name}
                </h3>
                
                <p className="text-xs sm:text-sm theme-accent-primary font-semibold mb-2">
                  {platform.reach}
                </p>
                
                <p className="text-xs theme-text-muted leading-relaxed">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Proven <span className="theme-accent-primary">Results</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed">
              Our digital marketing campaigns deliver measurable results that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">350%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Increase in Website Traffic</h3>
              <p className="theme-text-secondary">Average traffic growth across all client campaigns</p>
            </div>
            
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">280%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">ROI Improvement</h3>
              <p className="theme-text-secondary">Average return on investment for marketing spend</p>
            </div>
            
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">420%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Lead Generation</h3>
              <p className="theme-text-secondary">Increase in qualified leads for our clients</p>
            </div>
            
            <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl font-bold theme-accent-primary mb-4">95%</div>
              <h3 className="text-xl font-bold theme-text-primary mb-2">Client Satisfaction</h3>
              <p className="theme-text-secondary">Client retention and satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-gradient-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-white/90">Dominate Digital?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives real results and grows your business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href={buildUrl('/contacts')}
                className="bg-white theme-accent-primary font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 text-lg hover:scale-105"
              >
                Start Marketing Campaign
              </a>
              <a
                href={buildUrl('/contacts')}
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:theme-accent-primary transition-all duration-200 text-lg hover:scale-105"
              >
                Get Free Audit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;

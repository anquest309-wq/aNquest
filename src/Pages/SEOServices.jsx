import React from 'react';
import { BarChart3, Search, FileText, Link2, MapPin, PenTool, TrendingUp, Target, Zap } from 'lucide-react';

const SEOServices = () => {
  const services = [
    {
      title: "SEO Audit & Analysis",
      description: "Comprehensive analysis of your website's SEO performance. We identify issues and opportunities to improve your search engine rankings.",
      icon: BarChart3,
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      features: [
        "Technical SEO Audit",
        "Content Analysis",
        "Site Speed Optimization",
        "Mobile-First Analysis",
        "Competitor Research"
      ]
    },
    {
      title: "Keyword Research",
      description: "Strategic keyword research to identify the best opportunities for your business. We find high-value keywords that drive qualified traffic.",
      icon: Search,
      bgImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&auto=format&fit=crop",
      features: [
        "Long-tail Keywords",
        "Local SEO Keywords",
        "Competitor Analysis",
        "Search Volume Analysis",
        "Keyword Difficulty Assessment"
      ]
    },
    {
      title: "On-Page SEO",
      description: "Optimize your website's content and structure for better search engine visibility. We ensure every page is optimized for maximum impact.",
      icon: FileText,
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      features: [
        "Title Tags & Meta Descriptions",
        "Header Structure (H1-H6)",
        "Internal Linking",
        "Image Optimization",
        "Content Optimization"
      ]
    },
    {
      title: "Off-Page SEO",
      description: "Build authority and credibility through strategic link building and digital PR. We help establish your brand as an industry leader.",
      icon: Link2,
      bgImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop",
      features: [
        "Link Building",
        "Digital PR",
        "Guest Posting",
        "Social Media Signals",
        "Brand Mentions"
      ]
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your area. We optimize your business for 'near me' searches and local directories.",
      icon: MapPin,
      bgImage: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=800&auto=format&fit=crop",
      features: [
        "Google My Business",
        "Local Citations",
        "Local Keywords",
        "Reviews Management",
        "Local Content"
      ]
    },
    {
      title: "Content Marketing",
      description: "Create valuable, engaging content that attracts and converts your target audience. We develop content strategies that drive results.",
      icon: PenTool,
      bgImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&auto=format&fit=crop",
      features: [
        "Blog Writing",
        "Content Strategy",
        "Copywriting",
        "Video Content",
        "Infographics"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Research & Analysis",
      description: "We analyze your current SEO status and identify opportunities."
    },
    {
      number: "2",
      title: "Strategy Development",
      description: "We create a customized SEO strategy for your business."
    },
    {
      number: "3",
      title: "Implementation",
      description: "We implement the strategy with ongoing optimization."
    },
    {
      number: "4",
      title: "Monitoring & Reporting",
      description: "We track progress and provide detailed reports."
    }
  ];

  const results = [
    { percentage: "300%", title: "Increase in Organic Traffic", description: "Average increase in organic search traffic within 6 months" },
    { percentage: "85%", title: "Keyword Ranking Improvement", description: "Percentage of targeted keywords ranking in top 10" },
    { percentage: "250%", title: "ROI Improvement", description: "Average return on investment for SEO campaigns" }
  ];

  return (
    <div className="min-h-screen theme-bg-secondary">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 md:py-40 theme-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold theme-text-primary mb-6 leading-tight">
              SEO & <span className="theme-accent-primary">Digital Marketing</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl theme-text-secondary mb-8 leading-relaxed px-4">
              Boost your online visibility and drive more traffic to your website with our comprehensive 
              SEO and digital marketing services. We help businesses rank higher and grow faster.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            Our SEO & Digital Marketing Services
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
                    <ul className="theme-text-muted space-y-2 mt-auto flex flex-col items-start justify-start">
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

      {/* SEO Process */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            Our SEO Process
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

      {/* Results Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            SEO Results You Can Expect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {results.map((result, index) => (
              <div 
                key={index} 
                className="theme-card rounded-2xl p-6 sm:p-8 text-center hover:theme-shadow-secondary transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-accent-primary mb-4">
                  {result.percentage}
                </div>
                <h3 className="text-lg sm:text-xl font-bold theme-text-primary mb-3">
                  {result.title}
                </h3>
                <p className="theme-text-secondary text-sm sm:text-base leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Why Choose Our SEO Services?
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed">
              We deliver measurable results that grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: TrendingUp, title: "Proven Results", description: "Track record of delivering consistent ranking improvements" },
              { icon: Target, title: "Targeted Strategy", description: "Customized SEO plans tailored to your business goals" },
              { icon: Zap, title: "Fast Implementation", description: "Quick turnaround on optimization recommendations" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="theme-card rounded-2xl p-6 sm:p-8 text-center hover:theme-shadow-secondary transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 theme-bg-tertiary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 theme-accent-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold theme-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="theme-text-secondary text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-gradient-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Dominate <span className="text-white/90">Search Results?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your SEO goals and create a strategy that drives more traffic and conversions to your website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="/contacts"
                className="bg-white theme-accent-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
              >
                Get Your SEO Audit
              </a>
              <a
                href="/contacts"
                className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:theme-accent-primary transition-all duration-300 text-base sm:text-lg hover:scale-105"
              >
                Start SEO Campaign
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;
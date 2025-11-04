import React from 'react';
import { DollarSign, Target, TrendingUp, BarChart3, Search, MousePointerClick, Zap, CheckCircle, Users, Filter, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import CircleSquareBgAnimation from '../Components/Bg-animation-template/CircleSquareBgAnimation';

const PayPerClickPPCServices = () => {
  const { theme } = useTheme();

  const getThemeColor = () => {
    if (theme === 'light') {
      return '#2d65bc';
    } else if (theme === 'dark') {
      return '#ffffff';
    }
    return '#2d65bc';
  };

  // Get CTA background based on theme
  const getCTABackground = () => {
    if (theme === 'light') {
      return 'linear-gradient(135deg, #2d65bc, #1e4a8e)';
    } else if (theme === 'dark') {
      return 'linear-gradient(135deg, #1a1a1a, #000000)';
    }
    return 'linear-gradient(135deg, #2d65bc, #1e4a8e)';
  };

  // Get CTA text color based on theme
  const getCTATextColor = () => {
    return 'text-white';
  };
  const services = [
    {
      title: "Google Ads Management",
      description: "Create and manage high-performing Google Ads campaigns that drive qualified traffic and maximize your return on ad spend.",
      icon: Search,
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      features: [
        "Search Campaigns",
        "Display Advertising",
        "Shopping Ads",
        "YouTube Ads",
        "Performance Max"
      ]
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Leverage social media advertising to reach your target audience on Facebook, Instagram, and Meta platforms.",
      icon: Users,
      bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
      features: [
        "Social Media Ads",
        "Audience Targeting",
        "Carousel Ads",
        "Video Ads",
        "Retargeting"
      ]
    },
    {
      title: "Microsoft Advertising",
      description: "Expand your reach with Microsoft Advertising (formerly Bing Ads) to target audiences across Microsoft's network.",
      icon: Globe,
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
      features: [
        "Bing Search Ads",
        "LinkedIn Integration",
        "Cross-Platform Reach",
        "Lower Competition",
        "Professional Audience"
      ]
    },
    {
      title: "PPC Strategy & Planning",
      description: "Develop comprehensive PPC strategies aligned with your business goals. We analyze market opportunities and create data-driven plans.",
      icon: Target,
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      features: [
        "Keyword Research",
        "Competitor Analysis",
        "Budget Allocation",
        "Campaign Structure",
        "Performance Forecasting"
      ]
    },
    {
      title: "Landing Page Optimization",
      description: "Create high-converting landing pages that turn PPC traffic into customers. We optimize for conversion rate and user experience.",
      icon: MousePointerClick,
      bgImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
      features: [
        "Conversion Optimization",
        "A/B Testing",
        "Mobile Optimization",
        "Fast Load Times",
        "Clear CTAs"
      ]
    },
    {
      title: "PPC Analytics & Reporting",
      description: "Track and analyze your PPC performance with detailed reports. Understand what's working and optimize for better results.",
      icon: BarChart3,
      bgImage: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&auto=format&fit=crop",
      features: [
        "Performance Dashboards",
        "ROI Tracking",
        "Conversion Attribution",
        "Cost Analysis",
        "Monthly Reports"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Audit & Strategy",
      description: "We analyze your goals and create a custom PPC strategy."
    },
    {
      number: "2",
      title: "Campaign Setup",
      description: "We set up and launch your PPC campaigns across platforms."
    },
    {
      number: "3",
      title: "Optimization",
      description: "We continuously optimize campaigns for better performance."
    },
    {
      number: "4",
      title: "Scale & Grow",
      description: "We scale successful campaigns and expand reach."
    }
  ];

  const results = [
    { percentage: "400%", title: "Average ROI", description: "Return on investment for our PPC campaigns" },
    { percentage: "50%", title: "Lower Cost Per Click", description: "Average reduction in CPC through optimization" },
    { percentage: "300%", title: "Increase in Conversions", description: "Average improvement in conversion rates" }
  ];

  const benefits = [
    { icon: DollarSign, title: "Cost-Effective", description: "Pay only when users click on your ads" },
    { icon: Target, title: "Precise Targeting", description: "Reach exactly the right audience at the right time" },
    { icon: Zap, title: "Fast Results", description: "See immediate traffic and leads from day one" }
  ];

  return (
    <div className="min-h-screen theme-bg-primary pt-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden sm:py-8">
        <CircleSquareBgAnimation/>
       
        
        <div className="container mx-auto px-4 sm:px-6 pt-32 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 theme-text-primary">
              Pay Per Click (PPC) <span style={{ color: '#2d65bc' }}>Services</span>
            </h1>
            <p className="text-xl sm:text-2xl theme-text-secondary mb-4 max-w-3xl mx-auto leading-relaxed">
            Drive traffic and boost conversions with targeted PPC campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/request-a-quote"
                className="bg-[#2d65bc] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#1a4a8a] transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
              >
                Get Started
              </Link>
              <Link
                to="/contacts"
                className="border-2 border-[#2d65bc] text-[#2d65bc] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#2d65bc] hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-8 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-40 right-20 w-56 h-56 rounded-full opacity-7 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-60 left-1/4 w-48 h-48 rounded-full opacity-6 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-60 right-1/3 w-48 h-48 rounded-full opacity-8 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-80 left-1/2 w-28 h-28 rounded-full opacity-5 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-32 left-1/3 w-32 h-32 opacity-7 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-32 right-1/4 w-36 h-36 opacity-8 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-70 left-1/2 w-24 h-24 opacity-6 animate-rotate-fast" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-40 right-1/4 w-0 h-0 opacity-7 animate-bounce-slow" style={{ borderLeft: '45px solid transparent', borderRight: '45px solid transparent', borderBottom: `78px solid ${getThemeColor()}` }}></div>
          <div className="absolute top-1/4 right-1/4 w-80 h-80 opacity-9 animate-blob-slow" style={{ backgroundColor: getThemeColor(), borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%' }}></div>
          <div className="absolute top-1/2 left-1/4 w-68 h-68 rounded-full opacity-8 animate-pulse-slow" style={{ background: `radial-gradient(circle, ${getThemeColor()}, transparent)` }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            Our PPC Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="group theme-card rounded-2xl theme-shadow-primary overflow-hidden transition-all duration-500 hover:theme-shadow-secondary hover:scale-105 relative flex flex-col"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  <div className="relative p-6 sm:p-8 flex flex-col items-center text-center flex-grow">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: '#2d65bc' }}>
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="theme-text-secondary mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="theme-text-muted space-y-2 mt-auto flex flex-col items-start justify-start w-full">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="mr-2" style={{ color: '#2d65bc' }}>•</span>
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

      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-9 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-60 left-1/3 w-48 h-48 rounded-full opacity-7 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-80 right-1/4 w-32 h-32 rounded-full opacity-6 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-40 left-1/4 w-36 h-36 opacity-8 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-32 right-1/3 w-32 h-32 opacity-7 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-32 right-1/4 w-0 h-0 opacity-8 animate-bounce-slow" style={{ borderLeft: '50px solid transparent', borderRight: '50px solid transparent', borderBottom: `87px solid ${getThemeColor()}` }}></div>
          <div className="absolute top-1/4 left-1/2 w-88 h-88 opacity-10 animate-blob-slow" style={{ backgroundColor: getThemeColor(), borderRadius: '30% 70% 50% 50% / 60% 40% 60% 40%' }}></div>
          <div className="absolute top-1/2 right-1/4 w-76 h-76 rounded-full opacity-9 animate-pulse-medium" style={{ background: `radial-gradient(circle, ${getThemeColor()}, transparent)` }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            Our PPC Process
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

      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 right-10 w-68 h-68 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-76 h-76 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-60 left-1/4 w-52 h-52 rounded-full opacity-7 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-80 right-1/3 w-36 h-36 rounded-full opacity-6 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-40 left-1/3 w-40 h-40 opacity-8 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-32 left-1/4 w-0 h-0 opacity-7 animate-bounce-medium" style={{ borderLeft: '48px solid transparent', borderRight: '48px solid transparent', borderBottom: `83px solid ${getThemeColor()}` }}></div>
          <div className="absolute top-1/3 right-1/4 w-84 h-84 opacity-9 animate-blob-medium" style={{ backgroundColor: getThemeColor(), borderRadius: '50% 50% 60% 40% / 40% 60% 50% 50%' }}></div>
          <div className="absolute top-1/2 left-1/4 w-70 h-70 rounded-full opacity-8 animate-pulse-slow" style={{ background: `radial-gradient(circle, ${getThemeColor()}, transparent)` }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            PPC Results You Can Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {results.map((result, index) => (
              <div 
                key={index} 
                className="theme-card rounded-2xl p-6 sm:p-8 text-center hover:theme-shadow-secondary transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#2d65bc' }}>
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

      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-70 h-70 rounded-full opacity-9 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-40 right-20 w-62 h-62 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-74 h-74 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-60 right-1/4 w-46 h-46 rounded-full opacity-7 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-80 left-1/2 w-30 h-30 rounded-full opacity-6 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-32 right-1/3 w-34 h-34 opacity-8 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-32 left-1/4 w-38 h-38 opacity-7 animate-rotate-fast" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-70 left-1/2 w-26 h-26 opacity-6 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-40 left-1/4 w-0 h-0 opacity-8 animate-bounce-slow" style={{ borderLeft: '52px solid transparent', borderRight: '52px solid transparent', borderBottom: `90px solid ${getThemeColor()}` }}></div>
          <div className="absolute top-1/4 left-1/2 w-86 h-86 opacity-10 animate-blob-slow" style={{ backgroundColor: getThemeColor(), borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-9 animate-pulse-medium" style={{ background: `radial-gradient(circle, ${getThemeColor()}, transparent)` }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Why Choose Our PPC Services?
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed">
              Expert PPC management that maximizes your ROI
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="theme-card rounded-2xl p-6 sm:p-8 text-center hover:theme-shadow-secondary transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#2d65bc' }}>
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
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

      <section className="py-5 sm:py-4 lg:py-5 relative overflow-hidden" style={{ background: getCTABackground() }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-48 h-48 bg-white/15 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-44 h-44 bg-white/12 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-40 left-20 w-56 h-56 bg-white/15 rounded-full animate-float-fast"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/18 rounded-full animate-float-slow"></div>
          <div className="absolute top-60 left-1/4 w-28 h-28 bg-white/15 opacity-90 animate-rotate-slow" style={{ transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-60 right-1/3 w-32 h-32 bg-white/14 opacity-90 animate-rotate-fast" style={{ transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-32 right-1/4 w-0 h-0 opacity-15 animate-bounce-slow" style={{ borderLeft: '45px solid transparent', borderRight: '45px solid transparent', borderBottom: '78px solid rgba(255, 255, 255, 0.2)' }}></div>
          <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-white/12 rounded-full animate-blob-slow"></div>
          <div className="absolute bottom-1/4 right-1/2 w-80 h-80 bg-white/15 rounded-full animate-blob-medium"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/14 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-white/12 rounded-full animate-pulse-medium"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ${getCTATextColor()}`}>
              Ready to Drive More <span className="opacity-90">Traffic & Sales?</span>
            </h2>
            <p className={`text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed ${getCTATextColor()} opacity-90`}>
              Let's create PPC campaigns that deliver immediate results. Get started with a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                to="/request-a-quote"
                className="bg-white text-gray-800 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
              >
                Get Your Free PPC Audit
              </Link>
              <Link
                to="/contacts"
                className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:text-gray-800 transition-all duration-300 text-base sm:text-lg hover:scale-105"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayPerClickPPCServices;


import React from 'react';
import { Search, TrendingUp, FileText, Link2, BarChart3, Zap, Target, CheckCircle, Globe, Layers, Users, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';

const SearchEngineOptimizationServices = () => {
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
      title: "Technical SEO",
      description: "Improve your website's technical foundation for better search engine crawling, indexing, and ranking performance.",
      icon: Layers,
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
      features: [
        "Site Speed Optimization",
        "Mobile Responsiveness",
        "Schema Markup",
        "XML Sitemaps",
        "Canonical Tags"
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

  const benefits = [
    { icon: TrendingUp, title: "Proven Results", description: "Track record of delivering consistent ranking improvements" },
    { icon: Target, title: "Targeted Strategy", description: "Customized SEO plans tailored to your business goals" },
    { icon: Zap, title: "Fast Implementation", description: "Quick turnaround on optimization recommendations" }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotateSlow {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes rotateMedium {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes rotateFast {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounceMedium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes blobSlow {
          0%, 100% {
            border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
            transform: translateY(0px);
          }
          50% {
            border-radius: 30% 70% 50% 50% / 60% 40% 60% 40%;
            transform: translateY(-20px);
          }
        }
        @keyframes blobMedium {
          0%, 100% {
            border-radius: 30% 70% 50% 50% / 60% 40% 60% 40%;
            transform: translateY(0px);
          }
          50% {
            border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
            transform: translateY(-15px);
          }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        @keyframes pulseMedium {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.08); opacity: 0.25; }
        }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 6s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 4s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotateSlow 12s linear infinite; }
        .animate-rotate-medium { animation: rotateMedium 10s linear infinite; }
        .animate-rotate-fast { animation: rotateFast 8s linear infinite; }
        .animate-bounce-slow { animation: bounceSlow 5s ease-in-out infinite; }
        .animate-bounce-medium { animation: bounceMedium 4s ease-in-out infinite; }
        .animate-blob-slow { animation: blobSlow 10s ease-in-out infinite; }
        .animate-blob-medium { animation: blobMedium 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulseMedium 3s ease-in-out infinite; }
      `}</style>
      <section className="py-20 sm:py-32 md:py-40 theme-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Big Circles */}
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-32 right-20 w-64 h-64 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-12 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 right-10 w-56 h-56 rounded-full opacity-9 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Medium Circles */}
          <div className="absolute top-60 left-1/4 w-48 h-48 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-80 right-1/3 w-40 h-40 rounded-full opacity-7 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-60 left-1/3 w-52 h-52 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Small Circles */}
          <div className="absolute top-40 left-1/2 w-24 h-24 rounded-full opacity-6 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-80 right-1/4 w-32 h-32 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Big Squares */}
          <div className="absolute top-20 left-1/3 w-36 h-36 opacity-8 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-60 right-1/4 w-32 h-32 opacity-7 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 opacity-9 animate-rotate-fast" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Medium Squares */}
          <div className="absolute top-80 left-1/2 w-24 h-24 opacity-6 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-60 right-1/3 w-28 h-28 opacity-8 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Small Squares */}
          <div className="absolute top-50 left-1/5 w-16 h-16 opacity-5 animate-rotate-fast" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Big Triangles */}
          <div className="absolute top-32 right-1/4 w-0 h-0 opacity-8 animate-bounce-slow" style={{ 
            borderLeft: '60px solid transparent',
            borderRight: '60px solid transparent',
            borderBottom: `104px solid ${getThemeColor()}`
          }}></div>
          <div className="absolute bottom-32 left-1/4 w-0 h-0 opacity-7 animate-bounce-medium" style={{ 
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            borderBottom: `87px solid ${getThemeColor()}`
          }}></div>
          {/* Medium Triangles */}
          <div className="absolute top-70 right-1/2 w-0 h-0 opacity-6 animate-bounce-slow" style={{ 
            borderLeft: '35px solid transparent',
            borderRight: '35px solid transparent',
            borderBottom: `61px solid ${getThemeColor()}`
          }}></div>
          {/* Big Blobs */}
          <div className="absolute top-1/4 left-1/2 w-96 h-96 opacity-8 animate-blob-slow" style={{ 
            backgroundColor: getThemeColor(),
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
          }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-88 h-88 opacity-10 animate-blob-medium" style={{ 
            backgroundColor: getThemeColor(),
            borderRadius: '30% 70% 50% 50% / 60% 40% 60% 40%'
          }}></div>
          {/* Medium Blobs */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 opacity-7 animate-blob-slow" style={{ 
            backgroundColor: getThemeColor(),
            borderRadius: '50% 50% 60% 40% / 40% 60% 50% 50%'
          }}></div>
          {/* Big Orbs */}
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full opacity-9 animate-pulse-slow" style={{ 
            background: `radial-gradient(circle, ${getThemeColor()}, transparent)`
          }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 animate-pulse-medium" style={{ 
            background: `radial-gradient(circle, ${getThemeColor()}, transparent)`
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold theme-text-primary mb-6 leading-tight">
              Search Engine Optimization <span style={{ color: '#2d65bc' }}>Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl theme-text-secondary mb-8 leading-relaxed px-4">
              Boost your online visibility and drive more traffic to your website with our comprehensive 
              SEO services. We help businesses rank higher and grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          {/* Big Circles */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-8 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-40 right-20 w-56 h-56 rounded-full opacity-7 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Medium Circles */}
          <div className="absolute top-60 left-1/4 w-48 h-48 rounded-full opacity-6 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-60 right-1/3 w-48 h-48 rounded-full opacity-8 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Small Circles */}
          <div className="absolute top-80 left-1/2 w-28 h-28 rounded-full opacity-5 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Big Squares */}
          <div className="absolute top-32 left-1/3 w-32 h-32 opacity-7 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-32 right-1/4 w-36 h-36 opacity-8 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Medium Squares */}
          <div className="absolute top-70 left-1/2 w-24 h-24 opacity-6 animate-rotate-fast" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Big Triangles */}
          <div className="absolute top-40 right-1/4 w-0 h-0 opacity-7 animate-bounce-slow" style={{ 
            borderLeft: '45px solid transparent',
            borderRight: '45px solid transparent',
            borderBottom: `78px solid ${getThemeColor()}`
          }}></div>
          {/* Big Blobs */}
          <div className="absolute top-1/4 right-1/4 w-80 h-80 opacity-9 animate-blob-slow" style={{ 
            backgroundColor: getThemeColor(),
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
          }}></div>
          {/* Big Orbs */}
          <div className="absolute top-1/2 left-1/4 w-68 h-68 rounded-full opacity-8 animate-pulse-slow" style={{ 
            background: `radial-gradient(circle, ${getThemeColor()}, transparent)`
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            Our SEO Services
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 theme-bg-tertiary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
          {/* Big Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-9 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Medium Circles */}
          <div className="absolute top-60 left-1/3 w-48 h-48 rounded-full opacity-7 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Small Circles */}
          <div className="absolute top-80 right-1/4 w-32 h-32 rounded-full opacity-6 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Big Squares */}
          <div className="absolute top-40 left-1/4 w-36 h-36 opacity-8 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-32 right-1/3 w-32 h-32 opacity-7 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Big Triangles */}
          <div className="absolute top-32 right-1/4 w-0 h-0 opacity-8 animate-bounce-slow" style={{ 
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            borderBottom: `87px solid ${getThemeColor()}`
          }}></div>
          {/* Big Blobs */}
          <div className="absolute top-1/4 left-1/2 w-88 h-88 opacity-10 animate-blob-slow" style={{ 
            backgroundColor: getThemeColor(),
            borderRadius: '30% 70% 50% 50% / 60% 40% 60% 40%'
          }}></div>
          {/* Big Orbs */}
          <div className="absolute top-1/2 right-1/4 w-76 h-76 rounded-full opacity-9 animate-pulse-medium" style={{ 
            background: `radial-gradient(circle, ${getThemeColor()}, transparent)`
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Big Circles */}
          <div className="absolute top-20 right-10 w-68 h-68 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-76 h-76 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Medium Circles */}
          <div className="absolute top-60 left-1/4 w-52 h-52 rounded-full opacity-7 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Small Circles */}
          <div className="absolute bottom-80 right-1/3 w-36 h-36 rounded-full opacity-6 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Big Squares */}
          <div className="absolute top-40 left-1/3 w-40 h-40 opacity-8 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Big Triangles */}
          <div className="absolute bottom-32 left-1/4 w-0 h-0 opacity-7 animate-bounce-medium" style={{ 
            borderLeft: '48px solid transparent',
            borderRight: '48px solid transparent',
            borderBottom: `83px solid ${getThemeColor()}`
          }}></div>
          {/* Big Blobs */}
          <div className="absolute top-1/3 right-1/4 w-84 h-84 opacity-9 animate-blob-medium" style={{ 
            backgroundColor: getThemeColor(),
            borderRadius: '50% 50% 60% 40% / 40% 60% 50% 50%'
          }}></div>
          {/* Big Orbs */}
          <div className="absolute top-1/2 left-1/4 w-70 h-70 rounded-full opacity-8 animate-pulse-slow" style={{ 
            background: `radial-gradient(circle, ${getThemeColor()}, transparent)`
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            SEO Results You Can Expect
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
          {/* Big Circles */}
          <div className="absolute top-20 left-10 w-70 h-70 rounded-full opacity-9 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-40 right-20 w-62 h-62 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-74 h-74 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Medium Circles */}
          <div className="absolute top-60 right-1/4 w-46 h-46 rounded-full opacity-7 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Small Circles */}
          <div className="absolute bottom-80 left-1/2 w-30 h-30 rounded-full opacity-6 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Big Squares */}
          <div className="absolute top-32 right-1/3 w-34 h-34 opacity-8 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-32 left-1/4 w-38 h-38 opacity-7 animate-rotate-fast" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Medium Squares */}
          <div className="absolute top-70 left-1/2 w-26 h-26 opacity-6 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Big Triangles */}
          <div className="absolute top-40 left-1/4 w-0 h-0 opacity-8 animate-bounce-slow" style={{ 
            borderLeft: '52px solid transparent',
            borderRight: '52px solid transparent',
            borderBottom: `90px solid ${getThemeColor()}`
          }}></div>
          {/* Big Blobs */}
          <div className="absolute top-1/4 left-1/2 w-86 h-86 opacity-10 animate-blob-slow" style={{ 
            backgroundColor: getThemeColor(),
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
          }}></div>
          {/* Big Orbs */}
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-9 animate-pulse-medium" style={{ 
            background: `radial-gradient(circle, ${getThemeColor()}, transparent)`
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Why Choose Our SEO Services?
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed">
              We deliver measurable results that grow your business
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
          {/* Big White Circles */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-white/15 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-44 h-44 bg-white/12 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-40 left-20 w-56 h-56 bg-white/15 rounded-full animate-float-fast"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/18 rounded-full animate-float-slow"></div>
          {/* Big White Squares */}
          <div className="absolute top-60 left-1/4 w-28 h-28 bg-white/15 opacity-90 animate-rotate-slow" style={{ transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-60 right-1/3 w-32 h-32 bg-white/14 opacity-90 animate-rotate-fast" style={{ transform: 'rotate(45deg)' }}></div>
          {/* Big White Triangles */}
          <div className="absolute top-32 right-1/4 w-0 h-0 opacity-15 animate-bounce-slow" style={{ 
            borderLeft: '45px solid transparent',
            borderRight: '45px solid transparent',
            borderBottom: '78px solid rgba(255, 255, 255, 0.2)'
          }}></div>
          {/* Big White Blobs */}
          <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-white/12 rounded-full animate-blob-slow"></div>
          <div className="absolute bottom-1/4 right-1/2 w-80 h-80 bg-white/15 rounded-full animate-blob-medium"></div>
          {/* Big White Orbs */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/14 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-white/12 rounded-full animate-pulse-medium"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight ${getCTATextColor()}`}>
              Ready to Dominate <span className="opacity-90">Search Results?</span>
            </h2>
            <p className={`text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed ${getCTATextColor()} opacity-90`}>
              Let's discuss your SEO goals and create a strategy that drives more traffic and conversions to your website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                to="/request-a-quote"
                className="bg-white text-gray-800 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
              >
                Get Your SEO Audit
              </Link>
              <Link
                to="/contacts"
                className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:text-gray-800 transition-all duration-300 text-base sm:text-lg hover:scale-105"
              >
                Start SEO Campaign
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchEngineOptimizationServices;


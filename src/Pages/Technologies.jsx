import React, { useState } from 'react';
import { Code, Server, Database, Smartphone, Cloud, Wrench, Zap, Shield, Globe, Sparkles, ArrowRight, ChevronRight, Monitor, Layers, FileCode, Palette, Settings, GitBranch } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';

// Gradient Background Component
const GradientBg = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>
);

// Animated Background Component
const AnimatedBg = ({ theme }) => {
  const getThemeColor = () => {
    if (theme === 'light') {
      return '#2d65bc';
    } else if (theme === 'dark') {
      return '#ffffff';
    }
    return '#2d65bc';
  };

  const themeColor = getThemeColor();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: themeColor }}></div>
      <div className="absolute top-40 right-20 w-40 h-40 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: themeColor }}></div>
      <div className="absolute bottom-40 left-20 w-52 h-52 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: themeColor }}></div>
      <div className="absolute top-1/2 right-10 w-36 h-36 rounded-full opacity-8 animate-float-slow" style={{ backgroundColor: themeColor, animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-1/4 w-44 h-44 rounded-full opacity-10 animate-float-medium" style={{ backgroundColor: themeColor, animationDelay: '2s' }}></div>
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center theme-gradient-primary overflow-hidden">
    <GradientBg />
    
    {/* Floating Elements */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        ></div>
      ))}
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="theme-text-primary text-sm font-medium">50+ Modern Technologies</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold theme-text-primary mb-6 leading-tight">
          Technology
          <span className="block" style={{ color: '#2d65bc' }}>
            Excellence
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl theme-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          Building tomorrow's digital experiences with cutting-edge technology stacks that scale
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#stack" className="group text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 hover:bg-[#1a4a8a]" style={{ backgroundColor: '#2d65bc' }}>
            Explore Stack
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#benefits" className="text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a4a8a] transition-all duration-300 border-2 border-[#2d65bc]" style={{ backgroundColor: '#2d65bc' }}>
            Learn More
          </a>
        </div>
      </div>
    </div>
    
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
    `}</style>
  </section>
  );
};

// Category Showcase Section
const CategoryShowcase = ({ onSelectCategory }) => {
  const { theme } = useTheme();
  const [_hoveredIndex, setHoveredIndex] = useState(null);

  // Get theme-based color - always use blue for icons
  const getThemeColor = () => {
    return '#2d65bc';
  };

  const categoryData = [
    { name: 'Frontend', icon: Code, description: 'Modern UI & UX' },
    { name: 'Backend', icon: Server, description: 'Robust APIs' },
    { name: 'Database', icon: Database, description: 'Data Solutions' },
    { name: 'Mobile', icon: Smartphone, description: 'Native & Cross-platform' },
    { name: 'Cloud', icon: Cloud, description: 'Scalable Infrastructure' },
    { name: 'Tools', icon: Wrench, description: 'Dev Ecosystem' }
  ];

  return (
    <section id="stack" className="py-32 theme-bg-primary relative overflow-hidden">
      <AnimatedBg theme={theme} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 theme-text-primary px-4 py-2 rounded-full mb-6 font-medium" style={{ backgroundColor: '#2d65bc20', color: '#2d65bc' }}>
            <Globe className="w-4 h-4" />
            Full Stack Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold theme-text-primary mb-6">
            Our Technology
            <span className="block" style={{ color: '#2d65bc' }}>
              Categories
            </span>
          </h2>
          <p className="text-xl theme-text-secondary max-w-2xl mx-auto">
            Comprehensive solutions across the entire development spectrum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categoryData.map((category, index) => {
            const Icon = category.icon;
            const themeColor = getThemeColor();
            return (
              <div
                key={category.name}
                className="group relative theme-card rounded-3xl theme-shadow-primary p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectCategory(category.name)}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: themeColor }}
                ></div>
                
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: themeColor }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold theme-text-primary mb-2">{category.name}</h3>
                <p className="theme-text-secondary mb-4">{category.description}</p>
                
                <div className="flex items-center font-semibold group-hover:gap-2 transition-all duration-300" style={{ color: themeColor }}>
                  <span>Explore</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Horizontal Scroll Tech Stack Section
const HorizontalTechStack = ({ technologies, activeCategory }) => {
  const { theme } = useTheme();

  const filteredTechs = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  // Get theme-based colors - always use blue for icons and buttons
  const getThemeColor = () => {
    return '#2d65bc';
  };

  // Get technology-specific icons
  const getTechIcon = (techName, category) => {
    const iconMap = {
      'React.js': Code,
      'Next.js': Monitor,
      'Vue.js': Layers,
      'Angular': FileCode,
      'TypeScript': Code,
      'Tailwind CSS': Palette,
      'Node.js': Server,
      'Express.js': Server,
      'Python': Code,
      'Django': Server,
      'FastAPI': Server,
      'PHP': Code,
      'MongoDB': Database,
      'PostgreSQL': Database,
      'MySQL': Database,
      'Redis': Database,
      'Firebase': Database,
      'Supabase': Database,
      'React Native': Smartphone,
      'Flutter': Smartphone,
      'Ionic': Smartphone,
      'Expo': Smartphone,
      'Swift': Smartphone,
      'Kotlin': Smartphone,
      'AWS': Cloud,
      'Vercel': Cloud,
      'Netlify': Cloud,
      'Docker': Cloud,
      'GitHub Actions': Cloud,
      'Heroku': Cloud,
      'Git': GitBranch,
      'Webpack': Settings,
      'GSAP': Wrench,
      'Framer Motion': Wrench,
      'Swiper': Wrench,
      'Chart.js': Wrench
    };
    
    return iconMap[techName] || iconMap[category] || Code;
  };

  return (
    <section className="py-32 theme-bg-primary relative overflow-hidden">
      <AnimatedBg theme={theme} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold theme-text-primary mb-6">
            Technology Stack
          </h2>
          <p className="text-xl theme-text-secondary max-w-2xl mx-auto">
            Swipe through our comprehensive technology arsenal
          </p>
        </div>

        <div className="relative">
          {/* Single Row with All Technologies */}
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-6 min-w-max px-4">
              {filteredTechs.map((tech, index) => {
                const IconComponent = getTechIcon(tech.name, tech.category);
                const themeColor = getThemeColor();
                
                return (
                  <div
                    key={index}
                    className="group relative w-80 theme-card rounded-2xl p-6 theme-shadow-primary hover:shadow-xl transition-all duration-500 hover:scale-105 flex-shrink-0 border theme-border-primary"
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-500"
                      style={{ backgroundColor: themeColor }}
                    ></div>
                    
                    <div className="relative text-center">
                      <div 
                        className="w-16 h-16 rounded-xl shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto"
                        style={{ backgroundColor: themeColor }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h4 className="text-xl font-bold theme-text-primary mb-3">{tech.name}</h4>
                      <p className="theme-text-secondary text-sm leading-relaxed mb-6 px-2">{tech.description}</p>
                      
                      <div className="flex items-center justify-center">
                        <span 
                          className="text-xs font-semibold text-white px-4 py-2 rounded-full inline-flex items-center gap-2"
                          style={{ backgroundColor: themeColor }}
                        >
                          {tech.category}
                          <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-all duration-300" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(filteredTechs.length / 4) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full theme-border-secondary opacity-50"
                style={{ backgroundColor: getThemeColor() }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .overflow-x-auto {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Custom scrollbar for desktop */
        @media (min-width: 768px) {
          .scrollbar-hide::-webkit-scrollbar {
            height: 4px;
            display: block;
          }
          .scrollbar-hide::-webkit-scrollbar-track {
            background: var(--bg-secondary);
            border-radius: 2px;
          }
          .scrollbar-hide::-webkit-scrollbar-thumb {
            background: var(--accent-primary);
            border-radius: 2px;
          }
          .scrollbar-hide::-webkit-scrollbar-thumb:hover {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const { theme } = useTheme();
  
  // Always use blue for icon backgrounds
  const getThemeColor = () => {
    return '#2d65bc';
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with modern frameworks and best practices'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with industry-standard protocols'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Infrastructure that grows with your business worldwide'
    }
  ];

  const themeColor = getThemeColor();

  return (
    <section id="benefits" className="py-32 theme-bg-primary relative overflow-hidden">
      <AnimatedBg theme={theme} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold theme-text-primary mb-6">
            Why Choose Our Stack?
          </h2>
          <p className="text-xl theme-text-secondary max-w-2xl mx-auto">
            Built for performance, security, and scale from day one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group theme-card rounded-3xl theme-shadow-primary p-8 border theme-border-primary hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: themeColor }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold theme-text-primary mb-4">{benefit.title}</h3>
                <p className="theme-text-secondary leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-3 sm:py-3 md:py-3 lg:py-4 theme-gradient-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-white/15 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-white/12 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-white/10 rounded-full animate-float-medium" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-44 h-44 bg-white/12 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
            Ready to Build Something
            <span className="block">Extraordinary?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
            Let's leverage our technology expertise to transform your vision into reality
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <a
              href="/contacts"
              className="group text-white px-6 py-3 sm:px-8 sm:py-3 md:px-7 md:py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg w-full sm:w-auto hover:bg-[#1a4a8a]"
              style={{ backgroundColor: '#2d65bc' }}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/portfolio"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 md:px-7 md:py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300 border-2 border-white/20 text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const technologies = [
    { name: "React.js", description: "Modern UI library for interactive interfaces", category: "Frontend" },
    { name: "Next.js", description: "Full-stack React framework for production", category: "Frontend" },
    { name: "Vue.js", description: "Progressive JavaScript framework", category: "Frontend" },
    { name: "Angular", description: "Platform for building web applications", category: "Frontend" },
    { name: "TypeScript", description: "Typed superset of JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework", category: "Frontend" },
    
    { name: "Node.js", description: "JavaScript runtime for server-side", category: "Backend" },
    { name: "Express.js", description: "Fast web framework for Node.js", category: "Backend" },
    { name: "Python", description: "Versatile programming language", category: "Backend" },
    { name: "Django", description: "High-level Python web framework", category: "Backend" },
    { name: "FastAPI", description: "Modern fast web framework", category: "Backend" },
    { name: "PHP", description: "Server-side scripting language", category: "Backend" },
    
    { name: "MongoDB", description: "NoSQL document database", category: "Database" },
    { name: "PostgreSQL", description: "Advanced relational database", category: "Database" },
    { name: "MySQL", description: "Popular relational database", category: "Database" },
    { name: "Redis", description: "In-memory data structure store", category: "Database" },
    { name: "Firebase", description: "Google's mobile platform", category: "Database" },
    { name: "Supabase", description: "Open source Firebase alternative", category: "Database" },
    
    { name: "React Native", description: "Cross-platform mobile development", category: "Mobile" },
    { name: "Flutter", description: "Google's UI toolkit", category: "Mobile" },
    { name: "Ionic", description: "Cross-platform framework", category: "Mobile" },
    { name: "Expo", description: "Platform for universal React apps", category: "Mobile" },
    { name: "Swift", description: "Apple's iOS programming language", category: "Mobile" },
    { name: "Kotlin", description: "Modern Android language", category: "Mobile" },
    
    { name: "AWS", description: "Amazon Web Services platform", category: "Cloud" },
    { name: "Vercel", description: "Platform for frontend developers", category: "Cloud" },
    { name: "Netlify", description: "Platform for web developers", category: "Cloud" },
    { name: "Docker", description: "Containerization platform", category: "Cloud" },
    { name: "GitHub Actions", description: "CI/CD automation platform", category: "Cloud" },
    { name: "Heroku", description: "Cloud deployment platform", category: "Cloud" },
    
    { name: "Git", description: "Version control system", category: "Tools" },
    { name: "Webpack", description: "Module bundler for JavaScript", category: "Tools" },
    { name: "GSAP", description: "Professional animation library", category: "Tools" },
    { name: "Framer Motion", description: "Motion library for React", category: "Tools" },
    { name: "Swiper", description: "Modern touch slider", category: "Tools" },
    { name: "Chart.js", description: "Flexible charting library", category: "Tools" }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <HeroSection />
      <CategoryShowcase 
        onSelectCategory={setActiveCategory}
      />
      <HorizontalTechStack 
        technologies={technologies}
        activeCategory={activeCategory}
      />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default Technologies;
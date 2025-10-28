import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Smartphone, Cloud, Wrench, Zap, Shield, Globe, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';

// Gradient Background Component
const GradientBg = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>
);

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
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
          <span className="text-white/90 text-sm font-medium">50+ Modern Technologies</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Technology
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Excellence
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Building tomorrow's digital experiences with cutting-edge technology stacks that scale
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#stack" className="group bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2">
            Explore Stack
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#benefits" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
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

// Category Showcase Section
const CategoryShowcase = ({ categories, onSelectCategory }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categoryData = [
    { name: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-500', description: 'Modern UI & UX' },
    { name: 'Backend', icon: Server, color: 'from-purple-500 to-pink-500', description: 'Robust APIs' },
    { name: 'Database', icon: Database, color: 'from-green-500 to-emerald-500', description: 'Data Solutions' },
    { name: 'Mobile', icon: Smartphone, color: 'from-orange-500 to-red-500', description: 'Native & Cross-platform' },
    { name: 'Cloud', icon: Cloud, color: 'from-indigo-500 to-blue-500', description: 'Scalable Infrastructure' },
    { name: 'Tools', icon: Wrench, color: 'from-yellow-500 to-orange-500', description: 'Dev Ecosystem' }
  ];

  return (
    <section id="stack" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6 font-medium">
            <Globe className="w-4 h-4" />
            Full Stack Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Our Technology
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions across the entire development spectrum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categoryData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectCategory(category.name)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{category.name}</h3>
                <p className="text-slate-600 mb-4">{category.description}</p>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all duration-300">
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
  const [scrollPosition, setScrollPosition] = useState(0);

  const filteredTechs = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  // Get category color mapping
  const getCategoryColor = (category) => {
    const colorMap = {
      'Frontend': 'from-blue-500 to-cyan-500',
      'Backend': 'from-purple-500 to-pink-500', 
      'Database': 'from-green-500 to-emerald-500',
      'Mobile': 'from-orange-500 to-red-500',
      'Cloud': 'from-indigo-500 to-blue-500',
      'Tools': 'from-yellow-500 to-orange-500'
    };
    return colorMap[category] || 'from-blue-500 to-purple-500';
  };

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Swipe through our comprehensive technology arsenal
          </p>
        </div>

        <div className="relative">
          {/* Single Row with All Technologies */}
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-6 min-w-max px-4">
              {filteredTechs.map((tech, index) => (
                <div
                  key={index}
                  className="group relative w-80 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 flex-shrink-0 border border-slate-200/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(tech.category)} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-500`}></div>
                  
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(tech.category)} shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-6 h-6 bg-white rounded-md opacity-90"></div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{tech.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(tech.category)} px-3 py-1 rounded-full`}>
                        {tech.category}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(filteredTechs.length / 4) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-slate-300 opacity-50"
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
            background: #f1f5f9;
            border-radius: 2px;
          }
          .scrollbar-hide::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            border-radius: 2px;
          }
          .scrollbar-hide::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(90deg, #2563eb, #7c3aed);
          }
        }
      `}</style>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with modern frameworks and best practices',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with industry-standard protocols',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Infrastructure that grows with your business worldwide',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="benefits" className="py-32 bg-slate-900 relative overflow-hidden">
      <GradientBg />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why Choose Our Stack?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Built for performance, security, and scale from day one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Ready to Build Something
          <span className="block">Extraordinary?</span>
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Let's leverage our technology expertise to transform your vision into reality
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contacts"
            className="group bg-white text-blue-600 px-10 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/portfolio"
            className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  </section>
);

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

  const categories = ['Frontend', 'Backend', 'Database', 'Mobile', 'Cloud', 'Tools'];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CategoryShowcase 
        categories={categories} 
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
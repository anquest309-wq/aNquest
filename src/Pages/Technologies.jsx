import React, { useState } from 'react';
import { Code, Server, Database, Smartphone, Cloud, Wrench, Zap, Shield, Globe, Sparkles, ArrowRight, ChevronRight, Monitor, Layers, FileCode, Palette, Settings, GitBranch } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionsBgAnimation from '../Components/Bg-animation-template/SectionsBgAnimation';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import MinimalBgAnimation from '../Components/Bg-animation-template/MinimalBgAnimation';
import CircleSquareBgAnimation from '../Components/Bg-animation-template/CircleSquareBgAnimation';
import DenseBgAnimation from '../Components/Bg-animation-template/DenseBgAnimation';
import  CTABgAnimation from '../Components/Bg-animation-template/CTABgAnimation'
import 'swiper/css/navigation';

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
    <section className="relative py-10 pt-38 flex items-center justify-center theme-gradient-primary overflow-hidden">
    <CircleSquareBgAnimation/>
    
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
       
        
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold theme-text-primary mb-6 leading-tight">
  Technology{" "}
  <span className="inline" style={{ color: '#2d65bc' }}>
    Excellence
  </span>
</h1>

        
        <p className="text-xl md:text-2xl theme-text-secondary mb-5 max-w-3xl mx-auto leading-relaxed">
          Building tomorrow's digital experiences with cutting-edge technology stacks that scale
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#stack" className="group text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 hover:bg-[#1a4a8a]" style={{ backgroundColor: '#2d65bc' }}>
            Explore Stack
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#benefits" className="text-[#2d65bc] bg-white px-8 py-4 rounded-full font-semibold hover:bg-[#2d65bc] hover:text-white transition-all duration-300 border-2 border-[#2d65bc]">
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
    <section id="stack" className="py-10  theme-bg-primary relative overflow-hidden">
      <AnimatedBg theme={theme} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold theme-text-primary mb-3">
            Our Technology
            <span className="block" style={{ color: '#2d65bc' }}>
              Categories
            </span>
          </h2>
          <p className="text-xl theme-text-secondary max-w-2xl mx-auto">
            Comprehensive solutions across the entire development spectrum
          </p>
        </div>

        {/* Horizontal Swipable Row with Swiper */}
        <div className=" -mx-4 px-4 ">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            className="categorySwiper"
          >
            {categoryData.map((category, index) => {
              const Icon = category.icon;
              const themeColor = getThemeColor();
              return (
                <SwiperSlide key={category.name}>
                  <div
                    className="group relative theme-card rounded-3xl theme-shadow-primary p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden flex-shrink-0 w-80 md:w-80 flex flex-col items-center justify-center text-center mx-auto"
                    style={{
                      border: `2px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(45, 101, 188, 0.1)'}`,
                      background: theme === 'dark' 
                        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)'
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => onSelectCategory(category.name)}
                  >
                  {/* Decorative Background Gradient */}
                  <div 
                    className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-3xl"
                    style={{ 
                      background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)`
                    }}
                  ></div>
                  
                  {/* Hover Background Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ backgroundColor: themeColor }}
                  ></div>
                  
                  {/* Icon Container with Enhanced Styling */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${themeColor} 0%, #1e4a8e 100%)`,
                        boxShadow: `0 10px 30px ${themeColor}40`
                      }}
                    >
                      <Icon className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    {/* Icon Glow Effect */}
                    <div 
                      className="absolute inset-0 w-20 h-20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                      style={{ 
                        background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)`
                      }}
                    ></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <h3 className="text-2xl md:text-3xl font-bold theme-text-primary mb-3 group-hover:text-[#2d65bc] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="theme-text-secondary mb-6 text-base md:text-lg leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Explore Button */}
                    <div className="flex items-center justify-center font-semibold group-hover:gap-3 transition-all duration-300" style={{ color: themeColor }}>
                      <span className="text-base md:text-lg">Explore</span>
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      border: `2px solid ${themeColor}`,
                      boxShadow: `0 0 40px ${themeColor}50, inset 0 0 40px ${themeColor}20`
                    }}
                  ></div>
                  
                  {/* Bottom Accent Line */}
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 rounded-full transition-all duration-500 group-hover:w-24"
                    style={{ backgroundColor: themeColor }}
                  ></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      
      {/* Custom Swiper Styles */}
      <style>{`
        .categorySwiper {
          padding: 20px 0 40px 0;
        }
        
        .categorySwiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        @media (max-width: 768px) {
          .categorySwiper {
            overflow: visible;
          }
        }
      `}</style>
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

  // Get technology-specific logo images
  const getTechLogo = (techName) => {
    const logoMap = {
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      'Supabase': 'https://cdn.simpleicons.org/supabase/3ECF8E',
      'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'Ionic': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      'Expo': 'https://cdn.simpleicons.org/expo/000020',
      'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
      'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      'Vercel': 'https://cdn.simpleicons.org/vercel/000000',
      'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'GitHub Actions': 'https://cdn.simpleicons.org/githubactions/2088FF',
      'Heroku': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
      'GSAP': 'https://cdn.simpleicons.org/gsap/88CE02',
      'Framer Motion': 'https://cdn.simpleicons.org/framermotion/0055FF',
      'Swiper': 'https://cdn.simpleicons.org/swiper/6332F6',
      'Chart.js': 'https://cdn.simpleicons.org/chartdotjs/FF6384'
    };
    
    return logoMap[techName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
  };

  return (
    <section className="py-3 theme-bg-primary relative overflow-hidden ">
      {/* <MinimalBgAnimation /> */}
      <DenseBgAnimation />
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
          {/* Swiper with All Technologies */}
          <div >
            <Swiper
              modules={[Autoplay]}
              grabCursor={true}
              slidesPerView="auto"
              spaceBetween={24}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 24,
                },
              }}
              className="techStackSwiper"
            >
              {filteredTechs.map((tech, index) => {
                const techLogo = getTechLogo(tech.name);
                const themeColor = getThemeColor();
                
                return (
                  <SwiperSlide key={index}>
                    <div className="group relative w-80 theme-card rounded-2xl p-6 theme-shadow-primary hover:shadow-xl transition-all duration-500 hover:scale-105 flex-shrink-0 border theme-border-primary mx-auto">
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-500"
                        style={{ backgroundColor: themeColor }}
                      ></div>
                      
                      <div className="relative text-center">
                        <div 
                          className="w-16 h-16 rounded-xl shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto bg-white p-2"
                        >
                          <img 
                            src={techLogo} 
                            alt={tech.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                              // Fallback to a colored square if image fails to load
                              e.target.style.display = 'none';
                              const fallback = document.createElement('div');
                              fallback.className = 'w-full h-full';
                              fallback.style.backgroundColor = themeColor;
                              fallback.style.borderRadius = '4px';
                              e.target.parentElement.appendChild(fallback);
                            }}
                          />
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      
      <style>{`
        .techStackSwiper {
          padding: 10px 0 30px 0;
        }
        
        .techStackSwiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
        }
        
        @media (max-width: 768px) {
          .techStackSwiper {
            overflow: visible;
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
    <section id="benefits" className="py-5 theme-bg-primary relative overflow-hidden">
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
     
      {/* Floating Elements */}
      <CTABgAnimation/>
      
      
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
              className="group text-black bg-white px-6 py-3 sm:px-8 sm:py-3 md:px-7 md:py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg w-full sm:w-auto hover:bg-[#f3f4f7]"
              
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/portfolio"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 md:px-7 md:py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 border-2 border-white/20 text-sm sm:text-base md:text-lg w-full sm:w-auto"
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
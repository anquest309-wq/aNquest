import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
// import { MinimalBgAnimation } from '../Components/Bg-animation-template';
import DenseBgAnimation from '../Components/Bg-animation-template/DenseBgAnimation';import LargeShapesBgAnimation from '../Components/Bg-animation-template/LargeShapesBgAnimation';
import CornerStructureBgAnimation from '../Components/Bg-animation-template/CornerStructureBgAnimation';
import GridStructureBgAnimation from '../Components/Bg-animation-template/GridStructureBgAnimation';
import MinimalBigShapesAnimation from '../Components/Bg-animation-template/MinimalBigShapesAnimation';
import CTABgAnimation from '../Components/Bg-animation-template/CTABgAnimation';
import SectionsBgAnimation from '../Components/Bg-animation-template/SectionsBgAnimation';
const About = () => {
  const { theme } = useTheme();

  // Get hover text color based on theme
  const getHoverTextColor = () => {
    if (theme === 'light') {
      return '#2d65bc';
    } else if (theme === 'dark') {
      return '#000000';
    }
    return '#2d65bc';
  };

  // Get stats number color based on theme
  const getStatsColor = () => {
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
    if (theme === 'light') {
      return 'text-white';
    } else if (theme === 'dark') {
      return 'text-white';
    }
    return 'text-white';
  };

  // Get CTA border color based on theme
  const getCTABorderColor = () => {
    if (theme === 'light') {
      return 'border-white';
    } else if (theme === 'dark') {
      return 'border-white';
    }
    return 'border-white';
  };
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "3500+", label: "Happy Clients" },
    { number: "20+", label: "Years Experience" },
    { number: "100+", label: "Team Members" }
  ];

  // Background images for hero carousel
  const heroImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80'
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality",
      description: "We deliver nothing but the highest quality work that exceeds expectations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Team Work",
      description: "Collaboration is at the heart of everything we do."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Commitment",
      description: "We are committed to your success and go the extra mile."
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1500}
            className="w-full h-full"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Background Animation Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: '#2d65bc' }}></div>
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: '#2d65bc' }}></div>
          <div className="absolute bottom-40 left-20 w-52 h-52 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: '#2d65bc' }}></div>
        </div>
        
        {/* Content - Centered */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Building Digital <span style={{ color: '#2d65bc' }}>Excellence</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking digital solutions company dedicated to transforming your ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: '#2d65bc' }}></div>
          <div className="absolute bottom-40 right-20 w-28 h-28 sm:w-40 sm:h-40 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: '#2d65bc' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-52 sm:h-52 rounded-full opacity-5 animate-float-fast" style={{ backgroundColor: '#2d65bc' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                <div className="theme-card rounded-xl sm:rounded-2xl theme-shadow-primary p-4 sm:p-6 lg:p-8 text-center h-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    border: `2px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(45, 101, 188, 0.1)'}`,
                    background: theme === 'dark' 
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)'
                  }}
                >
                  {/* Decorative Icon Background */}
                  <div 
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: getStatsColor() }}
                  ></div>
                  
                  {/* Number */}
                  <div 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 relative z-10 transition-all duration-300 group-hover:scale-110" 
                    style={{ color: getStatsColor() }}
                  >
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm sm:text-base md:text-lg theme-text-secondary font-medium relative z-10 group-hover:theme-text-primary transition-colors duration-300 leading-tight">
                    {stat.label}
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div 
                    className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      border: `2px solid ${getStatsColor()}`,
                      boxShadow: `0 0 20px ${getStatsColor()}40`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        {/* Background Animation */}
        <DenseBgAnimation />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-12 lg:mb-16">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
                  Who We <span style={{ color: '#2d65bc' }}>Are</span>
                </h2>
                <p className="text-base sm:text-lg theme-text-secondary mb-3 sm:mb-4 leading-relaxed">
                  At aNquest, we specialize in creating cutting-edge digital solutions across web development, mobile applications, digital marketing, and business automation.
                </p>
                <p className="text-base sm:text-lg theme-text-secondary leading-relaxed">
                  With over 15 years of experience, we deliver scalable, high-performance solutions that drive your business forward.
                </p>
              </div>
              <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
                  alt="Our Team" 
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl animate-image-float" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 order-2 lg:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" 
                  alt="Our Mission" 
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl animate-image-float-delayed" 
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
                  Our <span style={{ color: '#2d65bc' }}>Mission</span>
                </h2>
                <p className="text-base sm:text-lg theme-text-secondary mb-3 sm:mb-4 leading-relaxed">
                  Our mission is to empower businesses with innovative digital solutions that drive growth and success.
                </p>
                <p className="text-base sm:text-lg theme-text-secondary leading-relaxed">
                  We believe in building long-term partnerships and delivering value that goes beyond just code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        {/* Enhanced Background Animation */}
        <SectionsBgAnimation />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4">
              Our <span style={{ color: '#2d65bc' }}>Values</span>
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                <div 
                  className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 text-center h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                  style={{
                    border: `2px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(45, 101, 188, 0.1)'}`,
                    background: theme === 'dark' 
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)'
                  }}
                >
                  {/* Decorative Background Gradient */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"
                    style={{ 
                      background: `radial-gradient(circle, #2d65bc 0%, transparent 70%)`
                    }}
                  ></div>
                  
                  {/* Icon Container with Enhanced Styling */}
                  <div className="relative z-10 mb-6">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, #2d65bc 0%, #1e4a8e 100%)`,
                        boxShadow: theme === 'dark' 
                          ? '0 10px 30px rgba(45, 101, 188, 0.3)' 
                          : '0 10px 30px rgba(45, 101, 188, 0.2)'
                      }}
                    >
                      <div className="text-white transition-transform duration-300 group-hover:scale-110">
                        {value.icon}
                      </div>
                    </div>
                    
                    {/* Icon Glow Effect */}
                    <div 
                      className="absolute inset-0 w-20 h-20 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                      style={{ 
                        background: `radial-gradient(circle, #2d65bc 0%, transparent 70%)`
                      }}
                    ></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-3 relative z-10 transition-colors duration-300 group-hover:text-[#2d65bc]">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="theme-text-secondary text-sm sm:text-base leading-relaxed relative z-10 transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Hover Border Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      border: `2px solid #2d65bc`,
                      boxShadow: `0 0 30px rgba(45, 101, 188, 0.4), inset 0 0 30px rgba(45, 101, 188, 0.1)`
                    }}
                  ></div>
                  
                  {/* Bottom Accent Line */}
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full transition-all duration-500 group-hover:w-20"
                    style={{ backgroundColor: '#2d65bc' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 sm:py-4 lg:py-5 relative overflow-hidden" style={{ background: getCTABackground() }}>
      <CTABgAnimation/>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${getCTATextColor()}`}>
              Ready to Work <span className="opacity-90">Together?</span>
            </h2>
            <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${getCTATextColor()} opacity-90`}>
              Let's discuss how we can bring your vision to life with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacts" className="bg-white text-gray-800 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 text-lg hover:scale-105">
                Get In Touch
              </a>
              <a 
                href="/#services" 
                className={`border-2 ${getCTABorderColor()} ${getCTATextColor()} font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-gray-800 transition-all duration-200 text-lg hover:scale-105 services-hover-text`}
                style={{ ['--hover-color']: getHoverTextColor() }}
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom styles for hover effect and image animations */}
      <style>{`
        .services-hover-text:hover {
          color: var(--hover-color) !important;
        }
        
        @keyframes imageFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(0.5deg);
          }
          50% {
            transform: translateY(-15px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-0.5deg);
          }
        }
        
        @keyframes imageFloatDelayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-12px) rotate(-0.5deg);
          }
          50% {
            transform: translateY(-18px) rotate(0deg);
          }
          75% {
            transform: translateY(-12px) rotate(0.5deg);
          }
        }
        
        .animate-image-float {
          animation: imageFloat 6s ease-in-out infinite;
        }
        
        .animate-image-float-delayed {
          animation: imageFloatDelayed 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;


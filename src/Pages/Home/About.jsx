import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../Context/ThemeContext'


export default function About() {
  const { theme } = useTheme();
  
  // Generate CTA background style based on theme (similar to navbar)
  const getCtaStyle = () => {
    if (theme === 'light') {
      return 'bg-gradient-to-r from-white to-[#2d65bc]';
    } else if (theme === 'dark') {
      return 'bg-gradient-to-r from-white to-[#1a1a1a]';
    } else if (theme === 'green') {
      return 'bg-gradient-to-r from-white to-[#064e3b]';
    }
    return 'bg-gradient-to-r from-white to-[#2d65bc]';
  };
  
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    support: 0
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          startCounting()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const startCounting = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const targets = {
      projects: 150,
      clients: 80,
      years: 5,
      support: 24
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      
      setCounts({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        support: Math.floor(targets.support * progress)
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, stepDuration)
  }
  return (
    <section className="py-16 lg:py-24 theme-bg-primary overflow-hidden relative">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Particle System */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-particle-1"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full opacity-30 animate-particle-2"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-500 rounded-full opacity-35 animate-particle-1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-particle-2"></div>
        </div>

        {/* Floating Shapes - Top Area */}
        <div className="absolute top-8 left-1/6 w-14 h-14 bg-blue-400 opacity-20 animate-float transform rotate-30" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute top-12 right-1/4 w-12 h-12 bg-green-500 opacity-25 animate-float-delayed rounded-full"></div>
        <div className="absolute top-6 left-2/3 w-10 h-10 bg-blue-500 opacity-15 animate-float-slow transform rotate-60"></div>
        
        {/* Floating Shapes - Center Area */}
        <div className="absolute top-1/2 left-1/8 w-16 h-16 bg-green-400 opacity-20 animate-float transform rotate-45" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
        <div className="absolute top-1/2 right-1/5 w-14 h-14 bg-blue-400 opacity-25 animate-float-delayed" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-green-500 opacity-15 animate-float-slow transform rotate-75"></div>
        
        {/* Floating Shapes - Bottom Area */}
        <div className="absolute bottom-20 left-1/5 w-18 h-18 bg-blue-400 opacity-20 animate-float transform rotate-30" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute bottom-16 right-1/5 w-16 h-16 bg-green-500 opacity-25 animate-float-delayed rounded-full"></div>
        <div className="absolute bottom-12 left-3/4 w-14 h-14 bg-blue-500 opacity-15 animate-float-slow transform rotate-60"></div>
        
        {/* Additional Diverse Shapes */}
        <div className="absolute top-1/6 left-1/3 w-8 h-8 bg-green-400 opacity-20 animate-float" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute top-2/3 right-1/6 w-6 h-6 bg-blue-500 opacity-25 animate-float-delayed transform rotate-45" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
        <div className="absolute bottom-1/6 left-1/2 w-10 h-10 bg-green-500 opacity-15 animate-float-slow" style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'}}></div>
        
        {/* Extra Small Shapes for More Coverage */}
        <div className="absolute top-1/5 right-1/3 w-4 h-4 bg-blue-400 opacity-30 animate-float transform rotate-90 rounded-full"></div>
        <div className="absolute top-3/5 left-1/4 w-5 h-5 bg-green-500 opacity-25 animate-float-delayed" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute bottom-1/5 right-1/4 w-6 h-6 bg-blue-500 opacity-20 animate-float-slow transform rotate-30" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
        <div className="absolute top-1/4 right-1/8 w-7 h-7 bg-green-400 opacity-25 animate-float transform rotate-60"></div>
        <div className="absolute bottom-1/4 left-1/8 w-5 h-5 bg-blue-400 opacity-30 animate-float-delayed rounded-full"></div>
        <div className="absolute top-4/5 left-1/3 w-4 h-4 bg-green-500 opacity-20 animate-float-slow transform rotate-45" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary mb-6 relative">
                About <span className="theme-accent-primary">aNquest</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{background: 'linear-gradient(135deg, #2d65bc, #2d65bc)'}}></div>
              </h2>
            </div>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in">
              We are a leading IT solutions provider dedicated to transforming businesses through innovative technology and exceptional service delivery.
            </p>
          </div>

          {/* Section 1 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="animate-slide-in-left">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="theme-accent-primary font-semibold text-sm uppercase tracking-wider">About Featured Product aNquest</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold theme-text-primary leading-tight">
                  Leading Digital Solutions 
                  <span className="theme-accent-primary"> Company</span>
                </h3>
                <p className="text-lg theme-text-secondary leading-relaxed">
                  We specialize in delivering cutting-edge digital solutions that drive business growth and innovation. Our team of experts combines technical excellence with creative vision to transform your ideas into reality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="theme-text-secondary text-sm">Custom Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="theme-text-secondary text-sm">Cloud Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="theme-text-secondary text-sm">AI Integration</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="IT Solutions"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Section 2 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24" ref={sectionRef}>
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="IT Solutions"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="theme-accent-primary font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold theme-text-primary leading-tight">
                  Comprehensive IT 
                  <span className="theme-accent-primary"> Services</span>
                </h3>
                <p className="text-lg theme-text-secondary leading-relaxed">
                  From web development to mobile applications, we provide end-to-end IT solutions tailored to your business needs. Our expertise spans across multiple technologies and platforms.
                </p>
                
                {/* Statistics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold theme-accent-primary mb-2">{counts.projects}+</div>
                    <div className="theme-text-secondary text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold theme-accent-primary mb-2">{counts.clients}+</div>
                    <div className="theme-text-secondary text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold theme-accent-primary mb-2">{counts.years}+</div>
                    <div className="theme-text-secondary text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold theme-accent-primary mb-2">{counts.support}/7</div>
                    <div className="theme-text-secondary text-sm">Support Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="animate-slide-in-left">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="theme-accent-primary font-semibold text-sm uppercase tracking-wider">Our Innovation</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold theme-text-primary leading-tight">
                  Cutting-Edge Technology 
                  <span className="theme-accent-primary"> Solutions</span>
                </h3>
                <p className="text-lg theme-text-secondary leading-relaxed">
                  We leverage the latest technologies including AI, machine learning, and cloud computing to deliver innovative solutions that give your business a competitive edge.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="theme-text-primary font-semibold">Advanced Analytics</h4>
                      <p className="theme-text-secondary text-sm">Data-driven insights for better decision making</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="theme-text-primary font-semibold">Scalable Architecture</h4>
                      <p className="theme-text-secondary text-sm">Solutions that grow with your business</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="theme-text-primary font-semibold">Security First</h4>
                      <p className="theme-text-secondary text-sm">Enterprise-grade security for all solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="IT Solutions"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center ${getCtaStyle()} rounded-3xl p-8 lg:p-12 relative overflow-hidden animate-fade-in shadow-2xl`}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 right-8 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
              <div className="absolute bottom-6 left-12 w-12 h-12 bg-white/15 rounded-full animate-float-delayed"></div>
              <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/20 rounded-full animate-float-slow"></div>
              <div className="absolute bottom-8 right-16 w-10 h-10 bg-white/10 rounded-full animate-float"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative IT solutions can help your business achieve its goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#2d65bc] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#2d65bc]/90 hover:shadow-lg transition-all duration-300 text-sm sm:text-base transform hover:scale-105 active:scale-95">
                  Get Started Today
                </button>
                <button className="border-2 border-gray-700 text-gray-700 bg-white/80 font-bold py-4 px-8 rounded-xl hover:bg-gray-700 hover:text-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base transform hover:scale-105 active:scale-95">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(90deg);
          }
        }
        
        @keyframes particle1 {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes particle2 {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-25px) scale(1.1);
            opacity: 0.6;
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-slide-in-right {
          animation: slideInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 10s ease-in-out infinite;
        }
        
        .animate-particle-1 {
          animation: particle1 4s ease-in-out infinite;
        }
        
        .animate-particle-2 {
          animation: particle2 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
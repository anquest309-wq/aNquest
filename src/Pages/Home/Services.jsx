import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../Context/ThemeContext'

export default function Services() {
  const { theme } = useTheme();
  
  // Generate statistics section background style based on theme (similar to navbar)
  const getStatsStyle = () => {
    if (theme === 'light') {
      return 'bg-gradient-to-r from-white to-[#2d65bc]';
    } else if (theme === 'dark') {
      return 'bg-gradient-to-r from-white to-[#1a1a1a]';
    } else if (theme === 'green') {
      return 'bg-gradient-to-r from-white to-[#064e3b]';
    }
    return 'bg-gradient-to-r from-white to-[#2d65bc]';
  };
  const [_hoveredService, setHoveredService] = useState(null)
  const [counts, setCounts] = useState({
    clients: 0,
    satisfaction: 0,
    employees: 0,
    awards: 0
  })
  const statsRef = useRef(null)

  const services = [
    {
      id: 1,
      number: "01",
      title: "Web Development",
      description: "We create responsive, scalable web applications using React, Vue.js, Angular, Node.js, Python, and PHP. From e-commerce platforms to custom web solutions."
    },
    {
      id: 2,
      number: "02", 
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps using React Native, Flutter, Swift, and Kotlin. iOS and Android apps that deliver exceptional user experiences."
    },
    {
      id: 3,
      number: "03",
      title: "Full-Stack Development", 
      description: "Complete end-to-end solutions with frontend, backend, database design, and API development using modern technologies and best practices."
    },
    {
      id: 4,
      number: "04",
      title: "SEO & Digital Marketing",
      description: "Comprehensive SEO strategies, content marketing, and digital presence optimization to boost your online visibility and drive organic traffic."
    }
  ]

  const stats = [
    { value: 150, label: "Projects Completed", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 15, label: "Expert Developers", suffix: "+" },
    { value: 5, label: "Years Experience", suffix: "+" }
  ]

  const startCounting = () => {
    const targetValues = { clients: 549, satisfaction: 100, employees: 836, awards: 67 }
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounts({
        clients: Math.floor(targetValues.clients * progress),
        satisfaction: Math.floor(targetValues.satisfaction * progress),
        employees: Math.floor(targetValues.employees * progress),
        awards: Math.floor(targetValues.awards * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targetValues)
      }
    }, stepDuration)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting()
          }
        })
      },
      { threshold: 0.5 }
    )

    const currentRef = statsRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section className="py-16 lg:py-24 theme-bg-primary relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Floating Circles */}
         <div className="absolute top-20 left-10 w-32 h-32 theme-animation-primary rounded-full animate-float-slow"></div>
         <div className="absolute top-40 right-20 w-24 h-24 theme-animation-secondary opacity-20 animate-float-delayed transform rotate-45"></div>
         <div className="absolute bottom-20 left-1/4 w-28 h-28 theme-animation-primary rounded-full animate-float"></div>
         <div className="absolute bottom-40 right-1/3 w-20 h-20 theme-animation-secondary opacity-20 animate-float-slow transform rotate-12"></div>
         
         {/* Additional Floating Shapes */}
         <div className="absolute top-32 left-1/3 w-16 h-16 theme-animation-tertiary animate-float-delayed-slow transform rotate-45"></div>
         <div className="absolute top-60 right-1/4 w-20 h-20 theme-animation-primary animate-float-slow rounded-full"></div>
         <div className="absolute bottom-32 left-1/6 w-14 h-14 theme-animation-secondary animate-float transform rotate-12"></div>
         <div className="absolute bottom-60 right-1/6 w-18 h-18 theme-animation-tertiary animate-float-delayed rounded-full"></div>
         
         {/* Triangle Shapes */}
         <div className="absolute top-16 left-1/5 w-0 h-0 border-l-8 border-r-8 border-b-14 border-transparent theme-animation-border animate-float-slow"></div>
         <div className="absolute top-48 right-1/5 w-0 h-0 border-l-10 border-r-10 border-b-18 border-transparent theme-animation-line animate-float-delayed"></div>
         <div className="absolute bottom-16 left-1/4 w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent theme-animation-border animate-float"></div>
         <div className="absolute bottom-48 right-1/3 w-0 h-0 border-l-12 border-r-12 border-b-20 border-transparent theme-animation-line animate-float-slow"></div>
         
         {/* Square Shapes */}
         <div className="absolute top-24 left-1/8 w-12 h-12 theme-animation-primary animate-float-delayed transform rotate-45"></div>
         <div className="absolute top-52 right-1/8 w-16 h-16 theme-animation-secondary animate-float-slow transform rotate-12"></div>
         <div className="absolute bottom-24 left-1/7 w-14 h-14 theme-animation-tertiary animate-float transform rotate-45"></div>
         <div className="absolute bottom-52 right-1/7 w-10 h-10 theme-animation-primary animate-float-delayed-slow transform rotate-12"></div>
         
         {/* Hexagon Shapes */}
         <div className="absolute top-28 left-1/12 w-16 h-16 theme-animation-secondary animate-float-slow" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
         <div className="absolute top-56 right-1/12 w-14 h-14 theme-animation-primary animate-float-delayed" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
         <div className="absolute bottom-28 left-1/10 w-12 h-12 theme-animation-tertiary animate-float" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
         <div className="absolute bottom-56 right-1/10 w-18 h-18 theme-animation-secondary animate-float-slow" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
         
         {/* Star Shapes */}
         <div className="absolute top-36 left-1/9 w-10 h-10 theme-animation-primary animate-float-delayed" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
         <div className="absolute top-64 right-1/9 w-8 h-8 theme-animation-secondary animate-float-slow" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
         <div className="absolute bottom-36 left-1/11 w-12 h-12 theme-animation-tertiary animate-float" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
         <div className="absolute bottom-64 right-1/11 w-6 h-6 theme-animation-primary animate-float-delayed-slow" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
         
         {/* Diamond Shapes */}
         <div className="absolute top-44 left-1/13 w-14 h-14 theme-animation-secondary animate-float-slow transform rotate-45"></div>
         <div className="absolute top-72 right-1/13 w-12 h-12 theme-animation-primary animate-float-delayed transform rotate-45"></div>
         <div className="absolute bottom-44 left-1/14 w-16 h-16 theme-animation-tertiary animate-float transform rotate-45"></div>
         <div className="absolute bottom-72 right-1/14 w-8 h-8 theme-animation-secondary animate-float-slow transform rotate-45"></div>
         
         {/* Gradient Orbs */}
         <div className="absolute top-40 left-1/6 w-40 h-40 theme-animation-primary rounded-full blur-xl animate-pulse-slow"></div>
         <div className="absolute bottom-40 right-1/6 w-36 h-36 theme-animation-secondary rounded-full blur-xl animate-pulse-delayed"></div>
         <div className="absolute top-1/2 left-1/2 w-32 h-32 theme-animation-tertiary rounded-full blur-xl animate-pulse-slow"></div>
         
         {/* Grid Pattern */}
         <div className="absolute inset-0 opacity-5">
           <div className="absolute top-0 left-0 w-full h-full" style={{
             backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(45, 101, 188, 0.3) 1px, transparent 0)',
             backgroundSize: '20px 20px'
           }}></div>
         </div>
         
         {/* Animated Lines */}
         <div className="absolute top-1/4 left-0 w-full h-px theme-animation-line animate-line-move"></div>
         <div className="absolute top-3/4 left-0 w-full h-px theme-animation-border animate-line-move-delayed"></div>
         
         {/* Floating Particles */}
         <div className="absolute top-1/3 left-1/4 w-2 h-2 theme-animation-primary rounded-full animate-particle-float"></div>
         <div className="absolute top-2/3 right-1/4 w-3 h-3 theme-animation-secondary rounded-full animate-particle-float-delayed"></div>
         <div className="absolute bottom-1/3 left-1/3 w-1 h-1 theme-animation-tertiary rounded-full animate-particle-float-slow"></div>
         <div className="absolute bottom-2/3 right-1/3 w-2 h-2 theme-animation-primary rounded-full animate-particle-float"></div>
         
         {/* Center Animated Shapes */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           {/* Large Central Circle */}
           <div className="absolute w-32 h-32 theme-animation-primary rounded-full animate-center-pulse opacity-20"></div>
           <div className="absolute w-24 h-24 theme-animation-secondary rounded-full animate-center-float opacity-30 transform translate-x-8 translate-y-4"></div>
           <div className="absolute w-16 h-16 theme-animation-tertiary rounded-full animate-center-pulse opacity-25 transform -translate-x-6 -translate-y-8"></div>
           
           {/* Rotating Squares */}
           <div className="absolute w-20 h-20 theme-animation-primary animate-center-rotate opacity-15 transform translate-x-12 -translate-y-12"></div>
           <div className="absolute w-14 h-14 theme-animation-secondary animate-center-float opacity-20 transform -translate-x-14 translate-y-10"></div>
           <div className="absolute w-10 h-10 theme-animation-tertiary animate-center-rotate opacity-25 transform translate-x-6 translate-y-16"></div>
           
           {/* Floating Triangles */}
           <div className="absolute w-0 h-0 border-l-12 border-r-12 border-b-20 border-transparent theme-animation-border animate-float-slow transform translate-x-16 -translate-y-6"></div>
           <div className="absolute w-0 h-0 border-l-8 border-r-8 border-b-14 border-transparent theme-animation-line animate-float-delayed transform -translate-x-18 translate-y-8"></div>
           <div className="absolute w-0 h-0 border-l-6 border-r-6 border-b-10 border-transparent theme-animation-primary animate-float transform translate-x-4 translate-y-20"></div>
           
           {/* Hexagon Shapes */}
           <div className="absolute w-18 h-18 theme-animation-secondary animate-float-slow opacity-20 transform translate-x-20 translate-y-4" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
           <div className="absolute w-12 h-12 theme-animation-primary animate-float-delayed opacity-25 transform -translate-x-16 -translate-y-12" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
           <div className="absolute w-8 h-8 theme-animation-tertiary animate-float opacity-30 transform translate-x-8 translate-y-24" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
           
           {/* Star Shapes */}
           <div className="absolute w-16 h-16 theme-animation-primary animate-float-delayed opacity-15 transform translate-x-24 -translate-y-16" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
           <div className="absolute w-10 h-10 theme-animation-secondary animate-float-slow opacity-20 transform -translate-x-20 translate-y-12" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
           <div className="absolute w-6 h-6 theme-animation-tertiary animate-float opacity-25 transform translate-x-12 translate-y-28" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
           
           {/* Diamond Shapes */}
           <div className="absolute w-14 h-14 theme-animation-secondary animate-center-rotate opacity-20 transform translate-x-28 translate-y-2"></div>
           <div className="absolute w-8 h-8 theme-animation-primary animate-center-float opacity-25 transform -translate-x-22 -translate-y-14"></div>
           <div className="absolute w-6 h-6 theme-animation-tertiary animate-center-pulse opacity-30 transform translate-x-16 translate-y-32"></div>
           
           {/* Blob Shapes */}
           <div className="absolute w-22 h-22 theme-animation-primary animate-blob-slow opacity-15 transform translate-x-32 -translate-y-8"></div>
           <div className="absolute w-16 h-16 theme-animation-secondary animate-blob-medium opacity-20 transform -translate-x-24 translate-y-16"></div>
           <div className="absolute w-12 h-12 theme-animation-tertiary animate-blob-slow opacity-25 transform translate-x-20 translate-y-36"></div>
         </div>
       </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Services Section */}
          <div className="mb-20">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary leading-tight">
                  Expert Development & 
                  <span className="theme-accent-primary"> SEO Solutions</span>
                </h2>
              </div>
              <button className="theme-bg-primary theme-text-primary font-bold py-4 px-8 rounded-xl hover:theme-accent-primary transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent-primary)]/25 flex items-center gap-2 self-start lg:self-center">
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                 <div
                   key={service.id}
                   className="group relative theme-bg-tertiary backdrop-blur-sm rounded-2xl p-6 lg:p-8 theme-border-primary hover:theme-accent-primary transition-all duration-500 transform hover:scale-[1.02] hover:theme-bg-secondary"
                   onMouseEnter={() => setHoveredService(service.id)}
                   onMouseLeave={() => setHoveredService(null)}
                   style={{
                     animationDelay: `${index * 0.1}s`
                   }}
                 >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Number and Title */}
                    <div className="flex items-center gap-4 lg:w-1/3">
                      <div className="w-12 h-12 theme-accent-primary theme-text-primary rounded-full flex items-center justify-center font-bold text-lg">
                        {service.number}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold theme-text-primary group-hover:theme-accent-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="lg:w-1/2">
                      <p className="theme-text-secondary leading-relaxed group-hover:theme-text-primary transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="lg:w-1/6 flex justify-end">
                      <button className="w-12 h-12 border-2 theme-accent-primary theme-text-primary rounded-full flex items-center justify-center hover:theme-bg-primary hover:theme-accent-primary transition-all duration-300 transform hover:scale-110 hover:rotate-45">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 theme-service-hover-border transition-all duration-500 group-hover:w-full rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div 
            ref={statsRef}
            className={`${getStatsStyle()} backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden`}
          >
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/15 rounded-full animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/20 rounded-full animate-float-slow"></div>
              <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-white/10 rounded-full animate-float"></div>
              <div className="absolute top-1/4 right-1/3 w-10 h-10 bg-white/15 rounded-full animate-float-delayed"></div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2 animate-count-up group-hover:text-[#2d65bc] transition-colors duration-300">
                      {index === 0 && counts.clients}
                      {index === 1 && counts.satisfaction}
                      {index === 2 && counts.employees}
                      {index === 3 && counts.awards}
                      {stat.suffix}
                    </div>
                    <div className="text-gray-700 text-sm lg:text-base font-medium group-hover:text-gray-800 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }
        
        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-180deg);
          }
        }
        
         @keyframes float {
           0%, 100% {
             transform: translateY(0px);
           }
           50% {
             transform: translateY(-10px);
           }
         }
         
         @keyframes floatDelayedSlow {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
           }
           50% {
             transform: translateY(25px) rotate(180deg);
           }
         }
         
         @keyframes pulseSlow {
           0%, 100% {
             opacity: 0.3;
             transform: scale(1);
           }
           50% {
             opacity: 0.6;
             transform: scale(1.1);
           }
         }
         
         @keyframes pulseDelayed {
           0%, 100% {
             opacity: 0.2;
             transform: scale(1);
           }
           50% {
             opacity: 0.5;
             transform: scale(1.2);
           }
         }
         
         @keyframes lineMove {
           0% {
             transform: translateX(-100%);
           }
           100% {
             transform: translateX(100%);
           }
         }
         
         @keyframes lineMoveDelayed {
           0% {
             transform: translateX(100%);
           }
           100% {
             transform: translateX(-100%);
           }
         }
         
         @keyframes particleFloat {
           0%, 100% {
             transform: translateY(0px) translateX(0px);
             opacity: 0.3;
           }
           25% {
             transform: translateY(-20px) translateX(10px);
             opacity: 0.6;
           }
           50% {
             transform: translateY(-30px) translateX(-5px);
             opacity: 0.8;
           }
           75% {
             transform: translateY(-15px) translateX(15px);
             opacity: 0.4;
           }
         }
         
         @keyframes particleFloatDelayed {
           0%, 100% {
             transform: translateY(0px) translateX(0px);
             opacity: 0.2;
           }
           25% {
             transform: translateY(15px) translateX(-10px);
             opacity: 0.5;
           }
           50% {
             transform: translateY(25px) translateX(5px);
             opacity: 0.7;
           }
           75% {
             transform: translateY(10px) translateX(-15px);
             opacity: 0.3;
           }
         }
         
         @keyframes particleFloatSlow {
           0%, 100% {
             transform: translateY(0px) translateX(0px);
             opacity: 0.4;
           }
           33% {
             transform: translateY(-25px) translateX(8px);
             opacity: 0.8;
           }
           66% {
             transform: translateY(-35px) translateX(-8px);
             opacity: 0.6;
           }
         }
         
         @keyframes countUp {
           from {
             opacity: 0;
             transform: translateY(20px);
           }
           to {
             opacity: 1;
             transform: translateY(0);
           }
         }
        
        .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: floatDelayed 10s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
         .animate-count-up {
           animation: countUp 0.8s ease-out;
         }
         
         .animate-float-delayed-slow {
           animation: floatDelayedSlow 12s ease-in-out infinite;
         }
         
         .animate-pulse-slow {
           animation: pulseSlow 4s ease-in-out infinite;
         }
         
         .animate-pulse-delayed {
           animation: pulseDelayed 6s ease-in-out infinite;
         }
         
         .animate-line-move {
           animation: lineMove 8s linear infinite;
         }
         
         .animate-line-move-delayed {
           animation: lineMoveDelayed 10s linear infinite;
         }
         
         .animate-particle-float {
           animation: particleFloat 6s ease-in-out infinite;
         }
         
         .animate-particle-float-delayed {
           animation: particleFloatDelayed 8s ease-in-out infinite;
         }
         
         .animate-particle-float-slow {
           animation: particleFloatSlow 10s ease-in-out infinite;
         }
        
         /* Staggered service animations */
         .group {
           animation: fadeInUp 0.8s ease-out forwards;
           
         }
         
         /* Ensure content is always visible */
         .group * {
           opacity: 1 !important;
           visibility: visible !important;
         }
         
         .group:hover * {
           opacity: 1 !important;
           visibility: visible !important;
         }
      `}</style>
    </section>
  )
}

import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../Context/ThemeContext'
import GeometricBgAnimation from '../../Components/Bg-animation-template/GeometricBgAnimation';

export default function Services() {
  const { theme } = useTheme();
  
  // Generate statistics section background style based on theme (similar to navbar)
  const getStatsStyle = () => {
    if (theme === 'light') {
      return { background: 'linear-gradient(to right, white 0%, #f0f0f0 50%, #2d65bc 100%)' };
    } else if (theme === 'dark') {
      return { background: 'linear-gradient(to right, white 0%, #f0f0f0 50%, #1a1a1a 100%)' };
    }
    return { background: 'linear-gradient(to right, white 0%, #f0f0f0 50%, #2d65bc 100%)' };
  };

  // Get hover border color based on theme
  const getHoverBorderColor = () => {
    if (theme === 'light') {
      return '#2d65bc';
    } else if (theme === 'dark') {
      return '#ffffff';
    }
    return '#2d65bc';
  };
  const [hoveredService, setHoveredService] = useState(null)
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
  // const themeColor = getThemeColor();
  return (
    <section className="py-16 lg:py-24 theme-bg-primary relative overflow-hidden">
       {/* Background Animation Elements */}
       {/* <ParticlesBgAnimation /> */}
       <GeometricBgAnimation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Services Section */}
          <div className="mb-20">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
              <div className="mb-6 lg:mb-0">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-text-primary leading-tight">
                  Expert Development & 
                  <span style={{ color: '#2d65bc' }}> SEO Solutions</span>
                </h2>
              </div>
              <button className="theme-bg-primary theme-text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#2d65bc]/25 flex items-center gap-2 self-start lg:self-center" style={{ '--hover-color': '#2d65bc' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2d65bc'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
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
                   className="group relative theme-bg-tertiary backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-500 transform hover:scale-[1.02] hover:theme-bg-secondary"
                   onMouseEnter={() => setHoveredService(service.id)}
                   onMouseLeave={() => setHoveredService(null)}
                   style={{
                     animationDelay: `${index * 0.1}s`,
                     border: hoveredService === service.id ? `2px solid ${getHoverBorderColor()}` : '2px solid transparent',
                     transition: 'border-color 0.3s ease',
                   }}
                 >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Number and Title */}
                    <div className="flex items-center gap-4 lg:w-1/3">
                      <div className="w-12 h-12 theme-text-primary rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: '#2d65bc' }}>
                        {service.number}
                      </div>
                      <h3 
                        className="text-xl lg:text-2xl font-bold theme-text-primary transition-colors duration-300"
                        style={{ color: hoveredService === service.id ? '#2d65bc' : '' }}
                      >
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
                      <button
                        type="button"
                        aria-label={`Learn more about ${service.title}`}
                        className="w-12 h-12 border-2 theme-text-primary rounded-full flex items-center justify-center hover:theme-bg-primary transition-all duration-300 transform hover:scale-110 hover:rotate-45"
                        style={{ borderColor: '#2d65bc' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#2d65bc'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div 
                    className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full rounded-full"
                    style={{ backgroundColor: getHoverBorderColor() }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div 
            ref={statsRef}
            className="backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            style={getStatsStyle()}
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
                    <div 
                      className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2 animate-count-up transition-colors duration-300"
                    >
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
       
       .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-float-slow {
          animation: floatSlow 10s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-particle-1 {
          animation: particle1 4s ease-in-out infinite;
        }
        
        .animate-particle-2 {
          animation: particle2 5s ease-in-out infinite;
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

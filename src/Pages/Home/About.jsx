import React, { useState, useEffect, useRef } from 'react'


export default function About() {
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
    <section className="py-16 lg:py-24  overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes - Top Row */}
        <div className="absolute top-10 left-5 w-20 h-20 bg-green-300 rounded-full opacity-25 animate-float-slow"></div>
        <div className="absolute top-20 left-1/4 w-16 h-16 bg-blue-300 opacity-20 animate-float-delayed transform rotate-45"></div>
        <div className="absolute top-15 left-1/2 w-0 h-0 border-l-12 border-r-12 border-b-20 border-transparent border-b-purple-300 opacity-30 animate-float"></div>
        <div className="absolute top-25 left-3/4 w-18 h-18 bg-orange-300 opacity-25 animate-float-slow transform rotate-12"></div>
        <div className="absolute top-12 right-5 w-22 h-22 bg-pink-300 opacity-20 animate-float-delayed-slow transform rotate-45"></div>
        
        {/* Floating Shapes - Middle Row */}
        <div className="absolute top-1/3 left-8 w-28 h-28 bg-green-300 opacity-30 animate-float-delayed transform rotate-45"></div>
        <div className="absolute top-1/3 left-1/3 w-14 h-14 bg-blue-300 rounded-full opacity-25 animate-float-slow"></div>
        <div className="absolute top-1/3 left-2/3 w-0 h-0 border-l-13 border-r-13 border-b-26 border-transparent border-b-purple-300 opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-8 w-20 h-20 bg-orange-300 opacity-30 animate-float-delayed-slow transform rotate-12"></div>
        
        {/* Floating Shapes - Lower Middle Row */}
        <div className="absolute top-2/3 left-12 w-32 h-32 bg-green-300 opacity-25 animate-float-slow transform rotate-45"></div>
        <div className="absolute top-2/3 left-1/4 w-18 h-18 bg-blue-300 rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute top-2/3 left-1/2 w-0 h-0 border-l-12 border-r-12 border-b-24 border-transparent border-b-purple-300 opacity-20 animate-float"></div>
        <div className="absolute top-2/3 left-3/4 w-16 h-16 bg-orange-300 opacity-25 animate-float-slow transform rotate-12"></div>
        <div className="absolute top-2/3 right-12 w-30 h-30 bg-pink-300 opacity-20 animate-float-delayed-slow transform rotate-45"></div>
        
        {/* Floating Shapes - Bottom Row */}
        <div className="absolute bottom-20 left-6 w-22 h-22 bg-green-300 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-30 left-1/3 w-20 h-20 bg-blue-300 opacity-25 animate-float-slow transform rotate-45"></div>
        <div className="absolute bottom-25 left-2/3 w-0 h-0 border-l-13 border-r-13 border-b-26 border-transparent border-b-purple-300 opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-35 right-6 w-18 h-18 bg-orange-300 opacity-30 animate-float-slow transform rotate-12"></div>
        <div className="absolute bottom-15 right-1/4 w-24 h-24 bg-pink-300 opacity-25 animate-float-delayed-slow transform rotate-45"></div>
        
        {/* Additional Small Floating Elements */}
        <div className="absolute top-1/4 left-1/6 w-12 h-12 bg-cyan-300 opacity-15 animate-float transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/8 w-0 h-0 border-l-5 border-r-5 border-b-10 border-transparent border-b-indigo-300 opacity-20 animate-float-slow"></div>
        <div className="absolute top-3/4 left-1/5 w-14 h-14 bg-teal-300 rounded-full opacity-25 animate-float-delayed"></div>
        <div className="absolute top-1/6 right-1/6 w-16 h-16 bg-rose-300 opacity-15 animate-float-slow transform rotate-12"></div>
        <div className="absolute top-5/6 right-1/5 w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent border-b-emerald-300 opacity-20 animate-float-delayed-slow"></div>
        
        {/* Hexagon Shapes */}
        <div className="absolute top-1/5 left-1/12 w-16 h-16 bg-gradient-to-r from-green-300 to-blue-300 opacity-20 animate-float-slow" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute top-3/5 right-1/12 w-14 h-14 bg-gradient-to-r from-purple-300 to-pink-300 opacity-25 animate-float-delayed" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        
        {/* Star Shapes */}
        <div className="absolute top-2/5 left-1/10 w-12 h-12 bg-gradient-to-r from-orange-300 to-red-300 opacity-20 animate-float" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute bottom-1/5 right-1/10 w-10 h-10 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-25 animate-float-slow" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        
        {/* Diamond Shapes */}
        <div className="absolute top-1/6 right-1/8 w-18 h-18 bg-gradient-to-r from-emerald-300 to-teal-300 opacity-15 animate-float-delayed transform rotate-45"></div>
        <div className="absolute bottom-1/6 left-1/8 w-16 h-16 bg-gradient-to-r from-rose-300 to-pink-300 opacity-20 animate-float-slow transform rotate-45"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-32 right-10 w-40 h-40 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-10 w-36 h-36 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl animate-pulse-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-orange-200/15 to-red-200/15 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse-delayed"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-60 left-1/3 w-16 h-16 bg-gradient-to-r from-green-300/10 to-blue-300/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-300/10 to-orange-300/10 rotate-12 animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/6 w-14 h-14 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rotate-30 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/6 w-10 h-10 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rotate-60 animate-bounce-slow"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative">
                About <span className="text-green-400">Featured Product aNquest</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              We are a leading IT solutions provider dedicated to transforming businesses through innovative technology and exceptional service delivery.
            </p>
          </div>

          {/* Section 1 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="animate-slide-in-left">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">About Featured Product aNquest</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Leading Digital Solutions 
                  <span className="text-green-400"> Company</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  aNquest is a premier development company specializing in web applications, mobile apps, and SEO services. We master modern development frameworks and technologies to deliver cutting-edge solutions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 font-medium">Modern Development Stack</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="IT Team Working"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl animate-image-float"
                />
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
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl animate-image-float-delayed"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Enterprise Solutions & 
                  <span className="text-blue-400"> Digital Marketing</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  From frontend web applications to backend APIs, mobile app development, and comprehensive SEO strategies - we provide end-to-end digital solutions using the latest technologies and best practices.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-green-400 mb-2 animate-count-up">
                      {counts.projects}+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Web & App Projects</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-blue-400 mb-2 animate-count-up">
                      {counts.clients}+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Satisfied Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-purple-400 mb-2 animate-count-up">
                      {counts.years}+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-orange-400 mb-2 animate-count-up">
                      {counts.support}/7
                    </div>
                    <div className="text-sm text-gray-600 font-medium">24/7 Support</div>
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
                  <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Our Innovation</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Digital Innovation & 
                  <span className="text-purple-400"> Business Solutions</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We leverage cutting-edge technologies and innovative approaches to create digital solutions that transform businesses. Our team combines creativity with technical expertise to deliver exceptional results that drive growth and success.
                </p>
                
                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-medium">Custom Digital Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-medium">Scalable Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-medium">Performance Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-medium">24/7 Technical Support</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Digital Innovation"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl animate-image-float"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-400  to-green-600 rounded-3xl p-8 lg:p-12 relative overflow-hidden animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT solutions can help your business achieve its goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-400 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-green-400 transition-all duration-300 text-sm sm:text-base transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style >{`
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
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(-5deg);
          }
        }
        
        @keyframes imageGlow {
          0%, 100% {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          50% {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(34, 197, 94, 0.3);
          }
        }
        
        @keyframes imageFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(0.5deg);
          }
          50% {
            transform: translateY(-12px) rotate(0deg);
          }
          75% {
            transform: translateY(-8px) rotate(-0.5deg);
          }
        }
        
        @keyframes imageFloatDelayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(-0.5deg);
          }
          50% {
            transform: translateY(-15px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(0.5deg);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-slide-in-right {
          animation: slideInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-fade-in {
          animation: fadeIn 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: floatDelayed 4s ease-in-out infinite;
        }
        
        .animate-image-glow {
          animation: imageGlow 3s ease-in-out infinite;
        }
        
        .animate-image-float {
          animation: imageFloat 6s ease-in-out infinite;
        }
        
        .animate-image-float-delayed {
          animation: imageFloatDelayed 8s ease-in-out infinite;
        }
        
        /* Enhanced shadow for depth */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.4);
        }
        
        /* Counting animation */
        .animate-count-up {
          animation: countUp 0.5s ease-out;
        }
        
        @keyframes countUp {
          from {
            transform: scale(0.8);
            opacity: 0.7;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        /* Background Animations */
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes floatDelayedSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(25px) rotate(-180deg);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
        
        @keyframes pulseDelayed {
          0%, 100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.25;
          }
        }
        
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-15px) rotate(12deg);
          }
        }
        
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        
        .animate-float-delayed-slow {
          animation: floatDelayedSlow 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        
        .animate-pulse-delayed {
          animation: pulseDelayed 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

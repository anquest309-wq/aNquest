import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'



// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import About from './Home/About'
import Projects from './Home/Projects'
import Services from './Home/Services'
import Pricing from './Home/Pricing'
import Testimonial from './Home/Testimonial'
import Footer from '../Components/Footer'
import GifCarousel from '../Components/GifCarousel'
import TypingAnimation from '../Components/TypingAnimation'




export default function Home() {
  // Enhanced smooth scrolling effect
  useEffect(() => {
    // Add enhanced smooth scrolling CSS
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth !important;
        scroll-snap-type: y proximity;
        scroll-snap-stop: always;
        scroll-padding-top: 80px;
      }
      
      body {
        scroll-behavior: smooth !important;
        overflow-x: hidden;
        scroll-snap-type: y proximity;
        scroll-snap-stop: always;
        -webkit-overflow-scrolling: touch;
      }
      
      * {
        scroll-behavior: smooth !important;
        scroll-snap-type: y proximity;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Enhanced smooth scrolling for webkit browsers */
      @media (prefers-reduced-motion: no-preference) {
        html {
          scroll-behavior: smooth !important;
          scroll-snap-type: y proximity;
        }
        
        body {
          scroll-behavior: smooth !important;
          scroll-snap-type: y proximity;
        }
        
        * {
          scroll-behavior: smooth !important;
          scroll-snap-type: y proximity;
        }
      }
      
      /* Custom smooth scrolling for better control */
      .smooth-scroll {
        scroll-behavior: smooth !important;
        scroll-snap-type: y proximity;
        scroll-snap-stop: always;
        -webkit-overflow-scrolling: touch;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Enhanced momentum scrolling */
      .momentum-scroll {
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: y proximity;
        scroll-snap-stop: always;
      }
    `;
    document.head.appendChild(style);

    // Enhanced scroll snap with JavaScript
    let isScrolling = false;
    let scrollTimeout;
    let lastScrollTime = 0;

    const smoothScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < 16) return; // 60fps throttling
      
      lastScrollTime = now;
      
      if (isScrolling) return;
      
      isScrolling = true;
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };

    // Add scroll event listener with passive for better performance
    window.addEventListener('scroll', smoothScroll, { passive: true });
    
    // Add wheel event listener for smoother scrolling
    window.addEventListener('wheel', smoothScroll, { passive: true });
    
    // Enhanced scroll snap behavior
    const handleScrollSnap = () => {
      const sections = document.querySelectorAll('.scroll-snap-section');
      const scrollPosition = window.scrollY;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          section.classList.add('active-section');
        } else {
          section.classList.remove('active-section');
        }
      });
    };

    // Add scroll snap event listener
    window.addEventListener('scroll', handleScrollSnap, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', smoothScroll);
      window.removeEventListener('wheel', smoothScroll);
      window.removeEventListener('scroll', handleScrollSnap);
      document.head.removeChild(style);
    };
  }, []);

  

  return (
    <div className="relative min-h-screen overflow-hidden smooth-scroll momentum-scroll theme-transition">

      {/* Hero Section with Animation */}
        <section className="relative h-screen w-full scroll-snap-section theme-hero overflow-hidden">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Circles */}
            <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20 animate-float-slow" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <div className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-15 animate-float-medium" style={{ backgroundColor: 'var(--accent-secondary)' }}></div>
            <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full opacity-25 animate-float-slow" style={{ backgroundColor: 'var(--accent-secondary)' }}></div>
            
            {/* Floating Squares */}
            <div className="absolute top-60 left-1/4 w-8 h-8 opacity-20 animate-rotate-slow" style={{ backgroundColor: 'var(--accent-primary)', transform: 'rotate(45deg)' }}></div>
            <div className="absolute top-80 right-1/3 w-6 h-6 opacity-15 animate-rotate-medium" style={{ backgroundColor: 'var(--accent-secondary)', transform: 'rotate(45deg)' }}></div>
            <div className="absolute bottom-60 left-1/3 w-10 h-10 opacity-10 animate-rotate-fast" style={{ backgroundColor: 'var(--accent-primary)', transform: 'rotate(45deg)' }}></div>
            
            {/* Floating Triangles */}
            <div className="absolute top-32 right-1/4 w-0 h-0 opacity-20 animate-bounce-slow" style={{ 
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderBottom: '26px solid var(--accent-primary)'
            }}></div>
            <div className="absolute bottom-32 left-1/4 w-0 h-0 opacity-15 animate-bounce-medium" style={{ 
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderBottom: '20px solid var(--accent-secondary)'
            }}></div>
            
            {/* Organic Blob Shapes */}
            <div className="absolute top-1/4 left-1/2 w-32 h-32 opacity-5 animate-blob-slow" style={{ 
              background: 'var(--gradient-accent)',
              borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
            }}></div>
            <div className="absolute bottom-1/4 right-1/2 w-40 h-40 opacity-8 animate-blob-medium" style={{ 
              background: 'var(--gradient-accent)',
              borderRadius: '30% 70% 50% 50% / 60% 40% 60% 40%'
            }}></div>
            
            {/* Gradient Orbs */}
            <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full opacity-20 animate-pulse-slow" style={{ 
              background: 'radial-gradient(circle, var(--accent-primary), transparent)'
            }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full opacity-15 animate-pulse-medium" style={{ 
              background: 'radial-gradient(circle, var(--accent-secondary), transparent)'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-18 h-full relative z-10">
            <div className="flex items-center h-full gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
              <div className="max-w-2xl">
                {/* Animated Headline */}
                <TypingAnimation />
                
                {/* Description */}
                  <p className="text-lg sm:text-xl theme-text-secondary leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                    aNquest specializes in creating cutting-edge digital solutions across web development, mobile applications, digital marketing, and business automation. We deliver scalable, high-performance solutions that drive your business forward.
                </p>
                
                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                  {/* Our Services Button */}
                  <a 
                    href="#services"
                    className="hero-button-primary font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 text-center"
                    style={{
                      backgroundColor: 'var(--theme-button-bg)',
                      color: 'var(--theme-button-text)',
                      border: '2px solid var(--theme-button-border)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Our Services
                    </span>
                  </a>
                  
                  {/* Contact Us Button */}
                  <Link 
                    to="/contacts"
                    className="hero-button-secondary font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 text-center"
                    style={{
                      backgroundColor: 'var(--theme-button-secondary-bg)',
                      color: 'var(--theme-button-secondary-text)',
                      border: '2px solid var(--theme-button-secondary-border)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Us
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            
              {/* Right Side - GIF Carousel */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <GifCarousel />
            </div>
          </div>
        </div>
      </section>






{/* About Section */}
<section className="scroll-snap-section theme-section">
  <About/>
</section>

{/* Services Section */}
<section id="services" className="scroll-snap-section theme-section-alt">
  <Services/>
</section>

{/* Projects Section */}
<section className="scroll-snap-section theme-section">
  <Projects/>
</section>



{/* Testimonial Section */}
<section className="scroll-snap-section theme-section-alt">
  <Testimonial/>
</section>











      {/* Custom Swiper Styles */}
      <style >{`
        .swiper-pagination-bullet-custom {
          width: 32px;
          height: 4px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 2px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: white;
          width: 32px;
        }
        
        .swiper-button-prev-custom:after,
        .swiper-button-next-custom:after {
          display: none;
        }

        /* Button Animation Enhancements */
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(20, 184, 166, 0);
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .group:hover {
          animation: pulse-glow 2s infinite;
        }

        /* Smooth entrance animation for buttons */
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }

        /* Enhanced Scroll Snap Animation */
        html {
          scroll-behavior: smooth !important;
          scroll-snap-type: y mandatory;
          scroll-snap-stop: always;
          scroll-padding-top: 80px;
        }
        
        body {
          scroll-behavior: smooth !important;
          overflow-x: hidden;
          scroll-snap-type: y mandatory;
          scroll-snap-stop: always;
          -webkit-overflow-scrolling: touch;
        }
        
        * {
          scroll-behavior: smooth !important;
        }
        
        /* Scroll snap sections */
        .scroll-snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          min-height: 100vh;
          scroll-behavior: smooth;
        }
        
        /* Enhanced smooth scroll for better performance */
        .smooth-scroll {
          scroll-behavior: smooth !important;
          scroll-snap-type: y mandatory;
          scroll-snap-stop: always;
          -webkit-overflow-scrolling: touch;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Momentum scrolling for ultra-smooth feel */
        .momentum-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: y mandatory;
          scroll-snap-stop: always;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Smooth transitions for all elements */
        * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Enhanced scroll momentum with snap */
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth !important;
            scroll-snap-type: y mandatory;
            scroll-snap-stop: always;
          }
          
          body {
            scroll-behavior: smooth !important;
            scroll-snap-type: y mandatory;
            scroll-snap-stop: always;
          }
          
          .scroll-snap-section {
            scroll-snap-align: start;
            scroll-snap-stop: always;
          }
        }
        
        /* Custom scroll snap animation */
        @keyframes scrollSnap {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        /* Apply scroll snap animation */
        .scroll-snap-section {
          animation: scrollSnap 0.3s ease-out;
        }
        
        /* Enhanced typing animation effects */
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
          }
          50% {
            text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
          }
        }
        
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Animation classes */
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        /* Hero Button Hover Effects */
        .hero-button-primary:hover {
          background: linear-gradient(135deg, var(--theme-button-bg), var(--accent-primary)) !important;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 25px rgba(45, 101, 188, 0.3), 0 0 20px rgba(45, 101, 188, 0.2);
        }
        
        .hero-button-secondary:hover {
          background: linear-gradient(135deg, var(--theme-button-secondary-bg), var(--accent-secondary)) !important;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 25px rgba(45, 101, 188, 0.2), 0 0 15px rgba(45, 101, 188, 0.15);
        }
        
        .hero-button-primary:active,
        .hero-button-secondary:active {
          transform: translateY(0) scale(0.98);
        }
        
        /* Smooth hover transitions for button icons */
        .hero-button-primary:hover svg,
        .hero-button-secondary:hover svg {
          transform: translateX(2px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  )
}

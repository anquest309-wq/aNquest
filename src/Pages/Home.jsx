import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import slide1 from "../assets/slider-banner-1.jpg"
import slide2 from "../assets/slider-banner-2.jpg"

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

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Expert Web & App Development Solutions",
      description: "Anquest Media specializes in creating cutting-edge web applications and mobile apps using modern technologies like React, Node.js, Python, and more. We deliver scalable, high-performance solutions that drive your business forward."
    },
    {
      id: 2,
      image: slide2,
      title: "Full-Stack Development & SEO Excellence",
      description: "From frontend to backend development, we master all programming languages including JavaScript, Python, Java, PHP, and more. Plus, our SEO experts ensure your digital presence ranks at the top."
    }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden smooth-scroll momentum-scroll">
      {/* Hero Section with Swiper */}
      <section className="relative h-screen w-full scroll-snap-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                {/* Background Image */}
                <div 
                  className="h-full w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`
                  }}
                />
                <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>

                {/* Main Content */}
                <div className="absolute inset-0 z-10 flex items-center">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl  pl-10 md:pl-20">
                      {/* Headline */}
                      <h1 className="text-3xl  sm:text-4xl md:text-5xl  font-bold text-white  mb-6">
                        {/* {slide.title.split(' ').map((word, index) => (
                          <span key={index}>
                            {word}
                            {index < slide.title.split(' ').length - 1 && <br />}
                          </span>
                        ))} */}

                        {slide.title}
                      </h1>
                      
                      {/* Description */}
                      <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-8 max-w-2xl">
                        {slide.description}
                      </p>
                      
                      {/* Call to Action Buttons */}
                      <div className="flex flex-col sm:flex-row justify-start  sm:gap-6">
                        {/* Our Services Button */}
                        <button className="group bg-green-500 hover:bg-green-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 active:scale-95">
                          <span className="relative z-10">Our Services</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        
                        {/* Play Video Button */}
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"></div>
      </section>






{/* About Section */}
<section className="scroll-snap-section">
  <About/>
</section>

{/* Services Section */}
<section className="scroll-snap-section">
  <Services/>
</section>

{/* Projects Section */}
<section className="scroll-snap-section">
  <Projects/>
</section>

{/* Pricing Section */}
<section className="scroll-snap-section">
  <Pricing/>
</section>

{/* Testimonial Section */}
<section className="scroll-snap-section">
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
      `}</style>
    </div>
  )
}

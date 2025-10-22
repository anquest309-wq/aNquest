import React from 'react'
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
    <div className="relative min-h-screen overflow-hidden  ">
      {/* Hero Section with Swiper */}
      <section className="relative h-screen w-full">
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
                      <h1 className="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white  mb-6">
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






<About/>
<Services/>
<Projects/>
<Pricing/>
<Testimonial/>











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
      `}</style>
    </div>
  )
}

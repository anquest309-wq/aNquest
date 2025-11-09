import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SectionsBgAnimation from "../../Components/Bg-animation-template/SectionsBgAnimation";
// import DenseBgAnimation from "../../Components/Bg-animation-template/DenseBgAnimation";
const projects = [
  {
    title: "E-Commerce Platform",
    subtitle: "React & Node.js",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
  },
  {
    title: "Mobile Banking App",
    subtitle: "React Native & Python",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
  },
  {
    title: "SaaS Dashboard",
    subtitle: "Vue.js & Laravel",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800",
  },
  {
    title: "Food Delivery App",
    subtitle: "Flutter & Firebase",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
  },
  {
    title: "Portfolio Website",
    subtitle: "Next.js & Tailwind",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
];

const Projects = () => {
  return (
    <div className="py-20 theme-bg-primary relative overflow-hidden">
      {/* Background Animations */}
      <SectionsBgAnimation />
      {/* <DenseBgAnimation /> */}
      {/* ==== Header ==== */}
      <div className="text-center mb-8 md:mb-12 px-4 relative z-10">
        <button className="theme-text-primary px-4 md:px-6 py-2 rounded-md font-semibold text-sm md:text-base" style={{ backgroundColor: '#2d65bc' }}>
          Recent Projects
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 md:mt-6 theme-text-primary px-2">
          We've Completed <span style={{ color: '#2d65bc' }}>150+</span> Development Projects
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-2 theme-text-secondary px-2">
          Explore Our Development Portfolio
        </p>
      </div>

       {/* ==== Swiper Section ==== */}
       <div className="relative z-10">
         <Swiper
           modules={[Pagination, Autoplay, Navigation]}
           pagination={{ 
             clickable: true,
             el: '.swiper-pagination-custom',
             bulletClass: 'swiper-pagination-bullet-custom',
             bulletActiveClass: 'swiper-pagination-bullet-active-custom',
           }}
           slidesPerView={3}
           spaceBetween={30}
           loop={true}
           grabCursor={true}
           allowTouchMove={true}
           touchRatio={1}
           touchAngle={45}
           speed={800}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
             pauseOnMouseEnter: true,
           }}
           breakpoints={{
             0: {
               slidesPerView: 1,
               spaceBetween: 0,
               centeredSlides: true,
             },
             768: {
               slidesPerView: 2,
               spaceBetween: 25,
               centeredSlides: false,
             },
             1024: {
               slidesPerView: 3,
               spaceBetween: 30,
               centeredSlides: true,
             },
           }}
           className="max-w-2xl md:max-w-6xl mx-auto px-4"
         >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  isActive
                    ? "scale-100 md:scale-110 shadow-2xl z-10 opacity-100"
                    : "hidden md:block md:scale-90 md:opacity-60"
                }`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover"
                />

                {/* Blue Top Overlay for Non-Active (Desktop only) */}
                {!isActive && (
                  <div className="hidden md:block absolute top-8 left-14 theme-bg-primary theme-text-primary py-3 px-6 rounded-md">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm">{project.subtitle}</p>
                  </div>
                )}

                {/* Info Overlay for Active (Mobile) */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
                    <h3 className="font-bold text-lg text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-white/90">{project.subtitle}</p>
                  </div>
                )}

                {/* Desktop Overlay for Active (Optional - uncomment if needed) */}
                {/* {isActive && (
                  <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 theme-accent-primary theme-text-primary py-3 px-4 rounded-xl text-center shadow-2xl">
                    <h3 className="font-bold text-md mb-1">{project.title}</h3>
                  </div>
                )} */}
              </div>
            )}
          </SwiperSlide>
         ))}
         </Swiper>
         
         {/* Custom Pagination Dots */}
         <div className="swiper-pagination-custom flex justify-center mt-6 md:mt-8 gap-3 px-4"></div>
       </div>
       
       {/* CSS Animations */}
       <style>{`
         @keyframes float {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
           }
           50% {
             transform: translateY(-20px) rotate(180deg);
           }
         }
         
         @keyframes float-delayed {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
           }
           50% {
             transform: translateY(-15px) rotate(-180deg);
           }
         }
         
         @keyframes float-slow {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
           }
           50% {
             transform: translateY(-25px) rotate(90deg);
           }
         }
         
         @keyframes float-delayed-slow {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
           }
           50% {
             transform: translateY(-18px) rotate(-90deg);
           }
         }
         
         @keyframes triangle-float {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
           }
           50% {
             transform: translateY(-12px) rotate(120deg);
           }
         }
         
         @keyframes triangle-float-delayed {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
           }
           50% {
             transform: translateY(-15px) rotate(-120deg);
           }
         }
         
         @keyframes square-float {
           0%, 100% {
             transform: translateY(0px) rotate(45deg);
           }
           50% {
             transform: translateY(-20px) rotate(225deg);
           }
         }
         
         @keyframes square-float-delayed {
           0%, 100% {
             transform: translateY(0px) rotate(45deg);
           }
           50% {
             transform: translateY(-18px) rotate(225deg);
           }
         }
         
         @keyframes diamond-float {
           0%, 100% {
             transform: translateY(0px) rotate(45deg);
           }
           50% {
             transform: translateY(-22px) rotate(225deg);
           }
         }
         
         @keyframes diamond-float-delayed {
           0%, 100% {
             transform: translateY(0px) rotate(45deg);
           }
           50% {
             transform: translateY(-16px) rotate(225deg);
           }
         }
         
         @keyframes orb-float {
           0%, 100% {
             transform: translateY(0px) scale(1);
           }
           50% {
             transform: translateY(-30px) scale(1.1);
           }
         }
         
         @keyframes orb-float-delayed {
           0%, 100% {
             transform: translateY(0px) scale(1);
           }
           50% {
             transform: translateY(-25px) scale(1.05);
           }
         }
         
         @keyframes line-move {
           0% {
             transform: translateX(-100%);
           }
           100% {
             transform: translateX(100vw);
           }
         }
         
         @keyframes line-move-delayed {
           0% {
             transform: translateX(100%);
           }
           100% {
             transform: translateX(-100vw);
           }
         }
         
         @keyframes particle-float {
           0%, 100% {
             transform: translateY(0px) translateX(0px);
           }
           25% {
             transform: translateY(-10px) translateX(5px);
           }
           50% {
             transform: translateY(-20px) translateX(0px);
           }
           75% {
             transform: translateY(-10px) translateX(-5px);
           }
         }
         
         @keyframes particle-float-delayed {
           0%, 100% {
             transform: translateY(0px) translateX(0px);
           }
           25% {
             transform: translateY(-8px) translateX(-3px);
           }
           50% {
             transform: translateY(-16px) translateX(0px);
           }
           75% {
             transform: translateY(-8px) translateX(3px);
           }
         }
         
         @keyframes particle-float-slow {
           0%, 100% {
             transform: translateY(0px) translateX(0px);
           }
           25% {
             transform: translateY(-6px) translateX(4px);
           }
           50% {
             transform: translateY(-12px) translateX(0px);
           }
           75% {
             transform: translateY(-6px) translateX(-4px);
           }
         }
         
         @keyframes particle-float-delayed-slow {
           0%, 100% {
             transform: translateY(0px) translateX(0px);
           }
           25% {
             transform: translateY(-7px) translateX(-2px);
           }
           50% {
             transform: translateY(-14px) translateX(0px);
           }
           75% {
             transform: translateY(-7px) translateX(2px);
           }
         }
         
         @keyframes hexagon-float {
           0%, 100% {
             transform: translateY(0px) rotate(30deg);
           }
           50% {
             transform: translateY(-18px) rotate(210deg);
           }
         }
         
         @keyframes hexagon-float-delayed {
           0%, 100% {
             transform: translateY(0px) rotate(30deg);
           }
           50% {
             transform: translateY(-22px) rotate(210deg);
           }
         }
         
         @keyframes star-float {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
           }
           50% {
             transform: translateY(-14px) rotate(180deg);
           }
         }
         
         @keyframes star-float-delayed {
           0%, 100% {
             transform: translateY(0px) rotate(0deg);
           }
           50% {
             transform: translateY(-16px) rotate(-180deg);
           }
         }
         
         .animate-float {
           animation: float 6s ease-in-out infinite;
         }
         
         .animate-float-delayed {
           animation: float-delayed 7s ease-in-out infinite;
         }
         
         .animate-float-slow {
           animation: float-slow 8s ease-in-out infinite;
         }
         
         .animate-float-delayed-slow {
           animation: float-delayed-slow 9s ease-in-out infinite;
         }
         
         .animate-triangle-float {
           animation: triangle-float 5s ease-in-out infinite;
         }
         
         .animate-triangle-float-delayed {
           animation: triangle-float-delayed 6s ease-in-out infinite;
         }
         
         .animate-square-float {
           animation: square-float 7s ease-in-out infinite;
         }
         
         .animate-square-float-delayed {
           animation: square-float-delayed 8s ease-in-out infinite;
         }
         
         .animate-diamond-float {
           animation: diamond-float 6s ease-in-out infinite;
         }
         
         .animate-diamond-float-delayed {
           animation: diamond-float-delayed 7s ease-in-out infinite;
         }
         
         .animate-orb-float {
           animation: orb-float 10s ease-in-out infinite;
         }
         
         .animate-orb-float-delayed {
           animation: orb-float-delayed 12s ease-in-out infinite;
         }
         
         .animate-line-move {
           animation: line-move 15s linear infinite;
         }
         
         .animate-line-move-delayed {
           animation: line-move-delayed 18s linear infinite;
         }
         
         .animate-particle-float {
           animation: particle-float 4s ease-in-out infinite;
         }
         
         .animate-particle-float-delayed {
           animation: particle-float-delayed 5s ease-in-out infinite;
         }
         
         .animate-particle-float-slow {
           animation: particle-float-slow 6s ease-in-out infinite;
         }
         
         .animate-particle-float-delayed-slow {
           animation: particle-float-delayed-slow 7s ease-in-out infinite;
         }
         
         .animate-hexagon-float {
           animation: hexagon-float 8s ease-in-out infinite;
         }
         
         .animate-hexagon-float-delayed {
           animation: hexagon-float-delayed 9s ease-in-out infinite;
         }
         
         .animate-star-float {
           animation: star-float 6s ease-in-out infinite;
         }
         
         .animate-star-float-delayed {
           animation: star-float-delayed 7s ease-in-out infinite;
         }
       `}</style>
     </div>
   );
 };

export default Projects;

// Custom CSS for pagination dots
const styles = `
  .swiper-pagination-custom {
    position: static !important;
    margin-top: 2rem;
  }
  
  .swiper-pagination-bullet-custom {
    width: 12px;
    height: 12px;
    background: var(--text-secondary);
    opacity: 1;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    pointer-events: auto;
    position: relative;
    z-index: 10;
  }
  
  .swiper-pagination-bullet-custom:hover {
    background: #2d65bc;
    transform: scale(1.3);
  }
  
  .swiper-pagination-bullet-active-custom {
    background: #2d65bc;
    transform: scale(1.4);
    box-shadow: 0 0 10px rgba(45, 101, 188, 0.5);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

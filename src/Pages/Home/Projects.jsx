import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    title: "Food Delivery App",
    subtitle: "Flutter & Firebase",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
  },
  {
    title: "Portfolio Website",
    subtitle: "Next.js & Tailwind",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8b6ef3?w=800",
  },
];

const Projects = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full animate-float"></div>
        <div className="absolute top-40 right-24 w-20 h-20 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-24 left-1/3 w-28 h-28 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-40 right-1/4 w-22 h-22 bg-gradient-to-r from-pink-400/15 to-green-400/15 rounded-full animate-float-delayed-slow"></div>
        
        {/* Floating Triangles */}
        <div className="absolute top-1/3 left-1/4 w-0 h-0 border-l-10 border-r-10 border-b-16 border-l-transparent border-r-transparent border-b-green-400/15 animate-triangle-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-blue-400/15 animate-triangle-float-delayed"></div>
        
        {/* Floating Squares */}
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-green-400/10 to-blue-400/10 rotate-45 animate-square-float"></div>
        <div className="absolute bottom-1/4 right-20 w-18 h-18 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rotate-45 animate-square-float-delayed"></div>
        
        {/* Floating Diamonds */}
        <div className="absolute top-24 right-1/2 w-20 h-20 bg-gradient-to-r from-purple-400/15 to-pink-400/15 transform rotate-45 animate-diamond-float"></div>
        <div className="absolute bottom-24 left-1/2 w-24 h-24 bg-gradient-to-r from-pink-400/15 to-green-400/15 transform rotate-45 animate-diamond-float-delayed"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-16 w-36 h-36 bg-gradient-to-r from-green-400/8 to-blue-400/8 rounded-full blur-xl animate-orb-float"></div>
        <div className="absolute bottom-1/4 left-16 w-32 h-32 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-xl animate-orb-float-delayed"></div>
        
        {/* Floating Lines */}
        <div className="absolute top-1/2 left-0 w-48 h-1 bg-gradient-to-r from-transparent via-green-400/25 to-transparent animate-line-move"></div>
        <div className="absolute bottom-1/3 right-0 w-40 h-1 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent animate-line-move-delayed"></div>
        
        {/* Particle Effects */}
        <div className="absolute top-20 left-1/2 w-3 h-3 bg-green-400/35 rounded-full animate-particle-float"></div>
        <div className="absolute top-32 right-1/3 w-4 h-4 bg-blue-400/35 rounded-full animate-particle-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-purple-400/35 rounded-full animate-particle-float-slow"></div>
        <div className="absolute bottom-32 right-1/2 w-4 h-4 bg-pink-400/35 rounded-full animate-particle-float-delayed-slow"></div>
        
        {/* Hexagon Shapes */}
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-r from-green-400/12 to-blue-400/12 transform rotate-30 animate-hexagon-float"></div>
        <div className="absolute bottom-1/3 right-1/2 w-20 h-20 bg-gradient-to-r from-blue-400/12 to-purple-400/12 transform rotate-30 animate-hexagon-float-delayed"></div>
        
        {/* Star Shapes */}
        <div className="absolute top-1/2 right-1/4 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-green-400/20 animate-star-float"></div>
        <div className="absolute bottom-1/2 left-1/4 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-blue-400/20 animate-star-float-delayed"></div>
      </div>
      {/* ==== Header ==== */}
      <div className="text-center mb-12 relative z-10">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold">
          Recent Projects
        </button>
        <h2 className="text-4xl font-bold mt-6">
          We've Completed <span className="text-green-500">150+</span> Development Projects
        </h2>
        <p className="text-2xl font-semibold mt-2 text-gray-800">
          Explore Our Development Portfolio
        </p>
      </div>

       {/* ==== Swiper Section ==== */}
       <div className="relative z-10">
         <Swiper
           modules={[Pagination, Autoplay]}
           pagination={{ 
             clickable: true,
             el: '.swiper-pagination-custom',
             bulletClass: 'swiper-pagination-bullet-custom',
             bulletActiveClass: 'swiper-pagination-bullet-active-custom',
           }}
           slidesPerView={3}
           spaceBetween={30}
           centeredSlides={true}
           loop={true}
           grabCursor={true}
           speed={800}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
           }}
           breakpoints={{
             0: {
               slidesPerView: 3,
               spaceBetween: 15,
             },
             768: {
               slidesPerView: 3,
               spaceBetween: 25,
             },
             1024: {
               slidesPerView: 3,
               spaceBetween: 30,
             },
           }}
           className="max-w-6xl mx-auto"
         >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div
                className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  isActive
                    ? "scale-110 shadow-2xl z-10"
                    : "scale-90 opacity-60"
                }`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />

                {/* Blue Top Overlay for Non-Active */}
                {!isActive && (
                  <div className="absolute top-4 left-4 bg-blue-900 text-white py-3 px-6 rounded-md">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm">{project.subtitle}</p>
                  </div>
                )}

                {/* Green Bottom Overlay for Active */}
                {isActive && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-white py-3 px-4 rounded-xl text-center shadow-2xl transform scale-105">
                    <h3 className="font-bold text-md mb-1">{project.title}</h3>
                    <p className="text-base font-semibold">Read More →</p>
                  </div>
                )}
              </div>
            )}
          </SwiperSlide>
         ))}
         </Swiper>
         
         {/* Custom Pagination Dots */}
         <div className="swiper-pagination-custom flex justify-center mt-8 gap-3"></div>
       </div>
       
       {/* CSS Animations */}
       <style >{`
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
    background: #9CA3AF;
    opacity: 1;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .swiper-pagination-bullet-active-custom {
    background: #10B981;
    transform: scale(1.2);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

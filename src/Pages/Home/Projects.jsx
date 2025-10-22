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
    <div className="py-20 bg-gradient-to-b from-white to-pink-50">
      {/* ==== Header ==== */}
      <div className="text-center mb-12">
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
       <div className="relative">
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

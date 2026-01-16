import React, { useState, useEffect, useRef } from "react";
import CircleSquareBgAnimation from "../../Components/Bg-animation-template/CircleSquareBgAnimation";
import { useTheme } from "../../Context/ThemeContext";


const testimonials = [
  {
    company: "Real Estate CRM",
    feedback:
      "aNquest's CRM reorganized our entire sales pipeline. The automated lead assignment and mobile access allow our agents to close deals while on the go. It is the backbone of our agency now.",
    name: "Rohit Verma",
    position: "Noida",
    img: "/blankclientprofile.webp",
  },
  {
    company: "Hospital CRM",
    feedback:
      "aNquest delivered a Hospital Management System that is not only secure but incredibly easy for our doctors to use. Patient record retrieval time has dropped by 50%.",
    name: "Dr. Anjali Mehta",
    position: "Visakhapatnam",
    img: "/blankclientprofile.webp",
  },
  {
    company: "Web Development",
    feedback:
      "We hired aNquest for Web Development, and the results were stellar. They built a blazing fast site that integrates seamlessly with our backend tools. Our online conversions doubled within a month.",
    name: "Reeva Rathod",
    position: "Mumbai",
    img: "/blankclientprofile.webp",
  },
  {
    company: "Corporate Consultants",
    feedback:
      "The workflow automation in their CRM is a game-changer. We automated our invoicing and follow-up emails, saving our admin team. Highly recommended for service businesses.",
    name: "Mithesh Gera",
    position: "Delhi",
    img: "/blankclientprofile.webp",
  },
  {
    company: "Logistics Firm",
    feedback:
      "A rare combination of powerful CRM logic and beautiful Web Design. They built us a custom dashboard that tracks our fleet in real-time and looks professional. The support team is also very responsive.",
    name: "Arjun Patel",
    position: "Chandigarh",
    img: "/blankclientprofile.webp",
  },
];


const Testimonial = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.offsetWidth || 0;
      const gap = 40; // gap-10 = 40px
      const scrollAmount = cardWidth + gap;
      
      if (currentIndex < testimonials.length - 1) {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(prev => prev + 1);
      } else {
        // Loop back to start
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentIndex(0);
      }
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.offsetWidth || 0;
      const gap = 40;
      const scrollAmount = cardWidth + gap;
      
      if (currentIndex > 0) {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setCurrentIndex(prev => prev - 1);
      } else {
        // Loop to end
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        scrollRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
        setCurrentIndex(testimonials.length - 1);
      }
    }
  };

  const handleDotClick = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.offsetWidth || 0;
      const gap = 40;
      const scrollAmount = (cardWidth + gap) * index;
      
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex(index);
      setIsAutoPlaying(false);
      
      // Resume auto-play after 10 seconds
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  return (
    <section 
      className="py-10 md:py-10 lg:py-15 xl:py-16 min-h-[500px] md:min-h-[600px] lg:min-h-[600px] theme-bg-primary relative flex flex-col justify-center" 
      style={{ '--accent-blue': '#2d65bc' }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute inset-0 z-0">
        <CircleSquareBgAnimation theme={theme} containerType="absolute" />
      </div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-3 lg:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl poiret-one-regular-bold theme-text-primary mb-12">
          Client <span style={{ color: '#2d65bc' }}>Testimonials</span>
        </h2>

        {/* ===== Carousel Container ===== */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02] ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                : 'bg-white hover:bg-gray-100 text-gray-800'
            }`}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02] ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                : 'bg-white hover:bg-gray-100 text-gray-800'
            }`}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container with Horizontal Scroll */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden gap-10 pb-4 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative theme-bg-primary rounded-3xl shadow-md transition-all duration-500 text-left overflow-hidden transform hover:scale-[1.01] hover:-translate-y-2 flex-shrink-0 w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] snap-center"
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-2 theme-gradient-accent rounded-t-3xl group-hover:h-3 transition-all duration-300"></div>
              
              {/* Floating Background Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" style={{ backgroundColor: '#ffffff' }}></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" style={{ backgroundColor: '#ffffff' }}></div>

              {/* Card Content */}
              <div className="p-3 lg:p-8 mt-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="theme-gradient-accent p-2 rounded-lg group-hover:scale-[1.02] group-hover:rotate-12 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12c0 4.992 3.657 9.128 8.438 9.879-.116-.839-.222-2.126.046-3.047.243-.847 1.57-5.392 1.57-5.392s-.4-.8-.4-1.983c0-1.858 1.078-3.248 2.421-3.248 1.142 0 1.692.857 1.692 1.883 0 1.147-.729 2.86-1.104 4.449-.315 1.333.666 2.42 1.975 2.42 2.371 0 3.972-3.037 3.972-6.627C20.64 6.597 16.914 2 12 2z" />
                    </svg>
                  </div>
                  <h3 
                    className="text-lg poiret-one-regular-bold theme-text-primary transition-colors duration-300 testimonial-company"
                  >
                    {item.company}
                  </h3>
                </div>

                <p className="theme-text-secondary mb-6 italic leading-relaxed group-hover:theme-text-primary transition-colors duration-300">
                  "{item.feedback}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h4 className="text-lg poiret-one-regular-bold theme-text-primary transition-colors duration-300 testimonial-name">
                      {item.name}
                    </h4>
                    <p className="theme-text-secondary text-sm group-hover:theme-text-primary transition-colors duration-300">{item.position}</p>
                  </div>
                 
                </div>
              </div>
              
              {/* Quote Icon Animation */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 theme-gradient-accent rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-8 h-3'
                    : 'w-3 h-3 hover:scale-110'
                }`}
                style={{
                  backgroundColor: currentIndex === index ? '#2d65bc' : isDarkMode ? '#4b5563' : '#d1d5db'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
      {/* CSS Animations */}
      <style>{`
        .testimonial-company {
          color: inherit;
        }
        .group:hover .testimonial-company {
          color: var(--accent-blue, #2d65bc);
        }
        .testimonial-name {
          color: inherit;
        }
        .group:hover .testimonial-name {
          color: var(--accent-blue, #2d65bc);
        }
        `}</style>
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
      `}</style>
    </section>
  );
};

export default Testimonial;

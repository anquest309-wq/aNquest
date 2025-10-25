import React from "react";

const testimonials = [
  {
    company: "E-Commerce Solutions Inc",
    feedback:
      "aNquest delivered an exceptional e-commerce platform with modern web technologies. The development team was professional, responsive, and delivered ahead of schedule. Our online sales increased by 300%!",
    name: "Sarah Johnson",
    position: "CEO - E-Commerce Solutions",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    company: "FinTech Innovations",
    feedback:
      "The mobile banking app developed by aNquest exceeded our expectations. Their expertise in mobile development and backend integration was outstanding. Highly recommended for fintech projects!",
    name: "Michael Chen",
    position: "CTO - FinTech Innovations",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    company: "StartupHub Technologies",
    feedback:
      "From web development to SEO optimization, aNquest provided comprehensive digital solutions. Our website now ranks #1 on Google and our user engagement has tripled. Amazing work!",
    name: "Emily Rodriguez",
    position: "Founder - StartupHub",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 theme-bg-primary relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 theme-animation-primary rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 theme-animation-secondary rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 theme-animation-tertiary rounded-full animate-float-slow"></div>
        <div className="absolute bottom-32 right-1/3 w-18 h-18 theme-animation-primary rounded-full animate-float-delayed-slow"></div>
        
        {/* Floating Triangles */}
        <div className="absolute top-1/4 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent theme-animation-border animate-triangle-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-10 border-r-10 border-b-16 border-l-transparent border-r-transparent theme-animation-line animate-triangle-float-delayed"></div>
        
        {/* Floating Squares */}
        <div className="absolute top-1/2 left-16 w-12 h-12 theme-animation-primary rotate-45 animate-square-float"></div>
        <div className="absolute bottom-1/3 right-16 w-14 h-14 theme-animation-secondary rotate-45 animate-square-float-delayed"></div>
        
        {/* Floating Diamonds */}
        <div className="absolute top-20 right-1/2 w-16 h-16 theme-animation-tertiary transform rotate-45 animate-diamond-float"></div>
        <div className="absolute bottom-20 left-1/2 w-20 h-20 theme-animation-primary transform rotate-45 animate-diamond-float-delayed"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 right-10 w-32 h-32 theme-animation-primary rounded-full blur-xl animate-orb-float"></div>
        <div className="absolute bottom-1/3 left-10 w-28 h-28 theme-animation-secondary rounded-full blur-xl animate-orb-float-delayed"></div>
        
        {/* Floating Lines */}
        <div className="absolute top-1/2 left-0 w-40 h-1 theme-animation-line animate-line-move"></div>
        <div className="absolute bottom-1/3 right-0 w-32 h-1 theme-animation-border animate-line-move-delayed"></div>
        
        {/* Particle Effects */}
        <div className="absolute top-16 left-1/2 w-2 h-2 theme-animation-primary rounded-full animate-particle-float"></div>
        <div className="absolute top-24 right-1/3 w-3 h-3 theme-animation-secondary rounded-full animate-particle-float-delayed"></div>
        <div className="absolute bottom-16 left-1/3 w-2 h-2 theme-animation-tertiary rounded-full animate-particle-float-slow"></div>
        <div className="absolute bottom-24 right-1/2 w-3 h-3 theme-animation-primary rounded-full animate-particle-float-delayed-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-extrabold theme-text-primary mb-12">
          Client <span className="theme-accent-primary">Testimonials</span>
        </h2>

        {/* ===== Cards Container ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative theme-bg-primary rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 text-left overflow-hidden transform hover:scale-105 hover:-translate-y-2"
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-2 theme-gradient-accent rounded-t-3xl group-hover:h-3 transition-all duration-300"></div>
              
              {/* Floating Background Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 theme-animation-primary rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 theme-animation-secondary rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>

              {/* Card Content */}
              <div className="p-8 mt-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="theme-gradient-accent p-2 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12c0 4.992 3.657 9.128 8.438 9.879-.116-.839-.222-2.126.046-3.047.243-.847 1.57-5.392 1.57-5.392s-.4-.8-.4-1.983c0-1.858 1.078-3.248 2.421-3.248 1.142 0 1.692.857 1.692 1.883 0 1.147-.729 2.86-1.104 4.449-.315 1.333.666 2.42 1.975 2.42 2.371 0 3.972-3.037 3.972-6.627C20.64 6.597 16.914 2 12 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold theme-text-primary group-hover:theme-accent-primary transition-colors duration-300">
                    {item.company}
                  </h3>
                </div>

                <p className="theme-text-secondary mb-6 italic leading-relaxed group-hover:theme-text-primary transition-colors duration-300">
                  "{item.feedback}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h4 className="text-lg font-semibold theme-text-primary group-hover:theme-accent-primary transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="theme-text-secondary text-sm group-hover:theme-text-primary transition-colors duration-300">{item.position}</p>
                  </div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 theme-accent-primary group-hover:theme-accent-secondary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  />
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

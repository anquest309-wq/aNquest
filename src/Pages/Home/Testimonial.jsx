import React from "react";

const testimonials = [
  {
    company: "E-Commerce Solutions Inc",
    feedback:
      "Anquest Media delivered an exceptional e-commerce platform using React and Node.js. The development team was professional, responsive, and delivered ahead of schedule. Our online sales increased by 300%!",
    name: "Sarah Johnson",
    position: "CEO - E-Commerce Solutions",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    company: "FinTech Innovations",
    feedback:
      "The mobile banking app developed by Anquest Media exceeded our expectations. Their expertise in React Native and Python backend integration was outstanding. Highly recommended for fintech projects!",
    name: "Michael Chen",
    position: "CTO - FinTech Innovations",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    company: "StartupHub Technologies",
    feedback:
      "From web development to SEO optimization, Anquest Media provided comprehensive digital solutions. Our website now ranks #1 on Google and our user engagement has tripled. Amazing work!",
    name: "Emily Rodriguez",
    position: "Founder - StartupHub",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
          Client <span className="text-purple-600">Testimonials</span>
        </h2>

        {/* ===== Cards Container ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 text-left overflow-hidden transform hover:scale-105 hover:-translate-y-2"
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-t-3xl group-hover:h-3 transition-all duration-300"></div>
              
              {/* Floating Background Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>

              {/* Card Content */}
              <div className="p-8 mt-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-tr from-purple-500 to-blue-400 p-2 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12c0 4.992 3.657 9.128 8.438 9.879-.116-.839-.222-2.126.046-3.047.243-.847 1.57-5.392 1.57-5.392s-.4-.8-.4-1.983c0-1.858 1.078-3.248 2.421-3.248 1.142 0 1.692.857 1.692 1.883 0 1.147-.729 2.86-1.104 4.449-.315 1.333.666 2.42 1.975 2.42 2.371 0 3.972-3.037 3.972-6.627C20.64 6.597 16.914 2 12 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {item.company}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 italic leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  "{item.feedback}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">{item.position}</p>
                  </div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-400 group-hover:border-purple-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Quote Icon Animation */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

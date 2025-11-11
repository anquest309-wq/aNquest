import React from 'react';
import { Code, Server, Layers, ShoppingCart, FileText, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import CircleSquareBgAnimation from '../Components/Bg-animation-template/CircleSquareBgAnimation';
import { buildUrl } from '../utils/urlUtils';
import SEO from '../Components/SEO';

const WebDevelopment = () => {
  const { theme } = useTheme();

  const getThemeColor = () => {
    if (theme === 'light') {
      return '#2d65bc';
    } else if (theme === 'dark') {
      return '#ffffff';
    }
    return '#2d65bc';
  };
  const services = [
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with React, Vue.js, and Angular. We create engaging user experiences that work perfectly across all devices.",
      icon: Code,
      bgImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
      features: [
        "React & Next.js Development",
        "Vue.js & Nuxt.js",
        "Angular Applications",
        "Responsive Design",
        "UI/UX Implementation"
      ]
    },
    {
      title: "Backend Development",
      description: "Robust server-side applications and APIs built with Node.js, Python, and PHP. We ensure your backend is scalable, secure, and performant.",
      icon: Server,
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
      features: [
        "Node.js & Express",
        "Python & Django",
        "PHP & Laravel",
        "RESTful APIs",
        "Database Design"
      ]
    },
    {
      title: "Full-Stack Development",
      description: "Complete web solutions from frontend to backend. We handle every aspect of your web application development for a seamless end-to-end experience.",
      icon: Layers,
      bgImage: "https://images.unsplash.com/photo-1537884944318-390069bb8665?w=800&auto=format&fit=crop",
      features: [
        "End-to-End Solutions",
        "MERN Stack",
        "MEAN Stack",
        "Database Integration",
        "Deployment & DevOps"
      ]
    },
    {
      title: "E-Commerce Development",
      description: "Powerful online stores and e-commerce platforms that drive sales and provide exceptional shopping experiences for your customers.",
      icon: ShoppingCart,
      bgImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
      features: [
        "Custom E-Commerce Sites",
        "WooCommerce Development",
        "Shopify Customization",
        "Payment Integration",
        "Inventory Management"
      ]
    },
    {
      title: "CMS Development",
      description: "Content management systems that make it easy to update and manage your website content without technical knowledge.",
      icon: FileText,
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      features: [
        "WordPress Development",
        "Custom CMS Solutions",
        "Headless CMS",
        "Content Management",
        "Admin Panel Design"
      ]
    },
    {
      title: "Progressive Web Apps",
      description: "Modern web applications that work like native apps with offline capabilities, push notifications, and app-like experiences.",
      icon: Smartphone,
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
      features: [
        "PWA Development",
        "Offline Functionality",
        "Push Notifications",
        "App-like Experience",
        "Cross-Platform"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Web Development Services | aNquest Media"
        description="Partner with aNquest Media for full-stack web development services that deliver fast, secure, and scalable digital experiences."
        canonicalUrl="https://anquestmedia.com/web-development"
      />
    <div className="min-h-screen theme-bg-primary pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden sm:py-8">
        <CircleSquareBgAnimation/>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-52 h-52 rounded-full opacity-8 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 pt-22 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 theme-text-primary">
              Web <span style={{ color: '#2d65bc' }}>Development</span> Services
            </h1>
            <p className="text-xl sm:text-2xl theme-text-secondary mb-4 max-w-3xl mx-auto leading-relaxed">
              We create stunning, responsive websites and web applications using modern technologies. 
              From simple landing pages to complex web platforms, we deliver exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to={buildUrl('/request-a-quote')}
                className="bg-[#2d65bc] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#1a4a8a] transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
              >
                Get Started
              </Link>
              <Link 
                to={buildUrl('/contacts')}
                className="border-2 border-[#2d65bc] text-[#2d65bc] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#2d65bc] hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">
            Our Web Development Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="group theme-card rounded-2xl theme-shadow-primary overflow-hidden transition-all duration-500 hover:theme-shadow-secondary hover:scale-105 relative flex flex-col"
                >
                  {/* Background Image - Shows on Hover */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  
                  <div className="relative p-6 sm:p-8 flex flex-col flex-grow">
                    {/* Icon Container - Centered */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 theme-bg-tertiary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 theme-accent-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-4 text-center">
                      {service.title}
                    </h3>
                    
                    <p className="theme-text-secondary mb-6 leading-relaxed text-center">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="theme-text-muted space-y-2 mt-auto  flex flex-col items-center justify-center">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="theme-accent-primary mr-2 mt-1 flex-shrink-0">•</span>
                          <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-4 sm:mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed">
              We deliver exceptional web solutions that drive results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: "Expert Team", description: "Experienced developers with proven track records" },
              { title: "Modern Tech", description: "Latest frameworks and best practices" },
              { title: "Fast Delivery", description: "On-time project completion guaranteed" },
              { title: "24/7 Support", description: "Round-the-clock assistance and maintenance" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="theme-card rounded-2xl p-6 sm:p-8 text-center hover:theme-shadow-secondary transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 theme-bg-tertiary rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl theme-accent-primary font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold theme-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="theme-text-secondary text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-gradient-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Build Your Web Solution?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and create a custom web solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="/contacts"
                className="bg-white theme-accent-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
              >
                Get Started Today
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:text-accent-primary hover:theme-accent-primary transition-all duration-300 text-base sm:text-lg hover:scale-105"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default WebDevelopment;
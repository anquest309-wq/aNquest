import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const Products = () => {
  const { theme } = useTheme();

  // Get theme-based colors
  const getThemeColor = () => {
    if (theme === 'light') {
      return '#2d65bc';
    } else if (theme === 'dark') {
      return '#ffffff';
    } else if (theme === 'green') {
      return '#064e3b';
    }
    return '#2d65bc';
  };

  const products = [
    {
      id: 1,
      name: "Custom Web Applications",
      description: "Tailored web solutions built with modern technologies to meet your specific business needs.",
      features: ["React/Next.js", "Node.js Backend", "Database Integration", "Responsive Design"],
      category: "Web Development",
      price: "Starting at $2,999"
    },
    {
      id: 2,
      name: "Mobile App Solutions",
      description: "Cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
      category: "Mobile Development",
      price: "Starting at $4,999"
    },
    {
      id: 3,
      name: "E-commerce Platforms",
      description: "Complete e-commerce solutions with payment integration and inventory management.",
      features: ["Shopping Cart", "Payment Gateway", "Admin Panel", "SEO Optimized"],
      category: "E-commerce",
      price: "Starting at $3,999"
    },
    {
      id: 4,
      name: "Digital Marketing Suite",
      description: "Comprehensive digital marketing services to boost your online presence.",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "Analytics"],
      category: "Digital Marketing",
      price: "Starting at $999/month"
    },
    {
      id: 5,
      name: "Business Automation Tools",
      description: "AI-powered automation solutions to streamline your business processes.",
      features: ["Workflow Automation", "AI Integration", "Data Analytics", "Custom Dashboards"],
      category: "Automation",
      price: "Starting at $1,999"
    },
    {
      id: 6,
      name: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      features: ["AWS/Azure Setup", "CI/CD Pipeline", "Monitoring", "Security"],
      category: "Cloud Services",
      price: "Starting at $1,499"
    }
  ];

  return (
    <div className="min-h-screen theme-bg-primary">
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotateSlow {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes rotateMedium {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes rotateFast {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounceMedium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes blobSlow {
          0%, 100% {
            border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
            transform: translateY(0px);
          }
          50% {
            border-radius: 30% 70% 50% 50% / 60% 40% 60% 40%;
            transform: translateY(-20px);
          }
        }
        @keyframes blobMedium {
          0%, 100% {
            border-radius: 30% 70% 50% 50% / 60% 40% 60% 40%;
            transform: translateY(0px);
          }
          50% {
            border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
            transform: translateY(-15px);
          }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        @keyframes pulseMedium {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.08); opacity: 0.25; }
        }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 6s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 4s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotateSlow 12s linear infinite; }
        .animate-rotate-medium { animation: rotateMedium 10s linear infinite; }
        .animate-rotate-fast { animation: rotateFast 8s linear infinite; }
        .animate-bounce-slow { animation: bounceSlow 5s ease-in-out infinite; }
        .animate-bounce-medium { animation: bounceMedium 4s ease-in-out infinite; }
        .animate-blob-slow { animation: blobSlow 10s ease-in-out infinite; }
        .animate-blob-medium { animation: blobMedium 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulseMedium 3s ease-in-out infinite; }
      `}</style>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 theme-gradient-primary">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Big Circles */}
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-32 right-20 w-64 h-64 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-12 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 right-10 w-56 h-56 rounded-full opacity-9 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Medium Circles */}
          <div className="absolute top-60 left-1/4 w-48 h-48 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-80 right-1/3 w-40 h-40 rounded-full opacity-7 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Small Circles */}
          <div className="absolute top-40 left-1/2 w-24 h-24 rounded-full opacity-6 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Big Squares */}
          <div className="absolute top-20 left-1/3 w-36 h-36 opacity-8 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-40 right-1/4 w-32 h-32 opacity-7 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Medium Squares */}
          <div className="absolute top-80 left-1/2 w-24 h-24 opacity-6 animate-rotate-fast" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Big Triangles */}
          <div className="absolute top-32 right-1/4 w-0 h-0 opacity-8 animate-bounce-slow" style={{ 
            borderLeft: '60px solid transparent',
            borderRight: '60px solid transparent',
            borderBottom: `104px solid ${getThemeColor()}`
          }}></div>
          <div className="absolute bottom-32 left-1/4 w-0 h-0 opacity-7 animate-bounce-medium" style={{ 
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            borderBottom: `87px solid ${getThemeColor()}`
          }}></div>
          {/* Big Blobs */}
          <div className="absolute top-1/4 left-1/2 w-96 h-96 opacity-8 animate-blob-slow" style={{ 
            backgroundColor: getThemeColor(),
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
          }}></div>
          {/* Big Orbs */}
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full opacity-9 animate-pulse-slow" style={{ 
            background: `radial-gradient(circle, ${getThemeColor()}, transparent)`
          }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 animate-pulse-medium" style={{ 
            background: `radial-gradient(circle, ${getThemeColor()}, transparent)`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 theme-bg-tertiary rounded-full mb-6">
              <span className="text-sm font-medium" style={{ color: getThemeColor() }}>Digital Solutions</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 theme-text-primary">
              Our <span style={{ color: getThemeColor() }}>Products</span>
            </h1>
            <p className="text-xl sm:text-2xl theme-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our range of digital products and solutions designed to transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 sm:py-20 lg:py-24 theme-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Big Circles */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-8 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute top-40 right-20 w-56 h-56 rounded-full opacity-7 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full opacity-10 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Medium Circles */}
          <div className="absolute top-60 left-1/4 w-48 h-48 rounded-full opacity-6 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
          {/* Big Squares */}
          <div className="absolute top-32 left-1/3 w-32 h-32 opacity-7 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-32 right-1/4 w-36 h-36 opacity-8 animate-rotate-medium" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
          {/* Big Triangles */}
          <div className="absolute top-40 right-1/4 w-0 h-0 opacity-7 animate-bounce-slow" style={{ 
            borderLeft: '45px solid transparent',
            borderRight: '45px solid transparent',
            borderBottom: `78px solid ${getThemeColor()}`
          }}></div>
          {/* Big Blobs */}
          <div className="absolute top-1/4 right-1/4 w-80 h-80 opacity-9 animate-blob-slow" style={{ 
            backgroundColor: getThemeColor(),
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
          }}></div>
          {/* Big Orbs */}
          <div className="absolute top-1/2 left-1/4 w-68 h-68 rounded-full opacity-8 animate-pulse-slow" style={{ 
            background: `radial-gradient(circle, ${getThemeColor()}, transparent)`
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="theme-card rounded-3xl theme-shadow-primary p-8 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Background Gradient Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ backgroundColor: getThemeColor() }}
                  ></div>
                  
                  <div className="relative z-10">
                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: `${getThemeColor()}20`, color: getThemeColor() }}>
                      {product.category}
                    </div>
                    
                    {/* Product Name */}
                    <h3 className="text-2xl font-bold theme-text-primary mb-4">
                      {product.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="theme-text-secondary mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold theme-text-primary mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center theme-text-secondary">
                            <svg className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: getThemeColor() }} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold" style={{ color: getThemeColor() }}>
                        {product.price}
                      </div>
                      <button 
                        className="px-6 py-2 rounded-full font-semibold text-white hover:scale-105 transition-all duration-200"
                        style={{ backgroundColor: getThemeColor() }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 lg:py-4 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${getThemeColor()}, ${getThemeColor()}CC)` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Big White Circles */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-white/15 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-44 h-44 bg-white/12 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-40 left-20 w-56 h-56 bg-white/15 rounded-full animate-float-fast"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/18 rounded-full animate-float-slow"></div>
          {/* Big White Squares */}
          <div className="absolute top-60 left-1/4 w-28 h-28 bg-white/15 opacity-90 animate-rotate-slow" style={{ transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-60 right-1/3 w-32 h-32 bg-white/14 opacity-90 animate-rotate-fast" style={{ transform: 'rotate(45deg)' }}></div>
          {/* Big White Triangles */}
          <div className="absolute top-32 right-1/4 w-0 h-0 opacity-15 animate-bounce-slow" style={{ 
            borderLeft: '45px solid transparent',
            borderRight: '45px solid transparent',
            borderBottom: '78px solid rgba(255, 255, 255, 0.2)'
          }}></div>
          {/* Big White Blobs */}
          <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-white/12 rounded-full animate-blob-slow"></div>
          <div className="absolute bottom-1/4 right-1/2 w-80 h-80 bg-white/15 rounded-full animate-blob-medium"></div>
          {/* Big White Orbs */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/14 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-white/12 rounded-full animate-pulse-medium"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need a <span className="text-white/90">Custom Solution?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a tailored solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105">
                Request a Quote
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-gray-800 transition-all duration-200 hover:scale-105">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

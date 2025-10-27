import React, { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        { name: "Basic Web Development", included: true },
        { name: "Responsive Design", included: true },
        { name: "SEO Optimization", included: false },
        { name: "Mobile App Development", included: false },
      ],
    },
    {
      name: "Professional",
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        { name: "Full-Stack Web Development", included: true },
        { name: "Mobile App Development", included: true },
        { name: "Advanced SEO Services", included: true },
        { name: "24/7 Support", included: true },
      ],
    },
  ];

  return (
    <div className="theme-bg-secondary py-20 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 theme-bg-tertiary rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 theme-bg-tertiary opacity-20 animate-float-delayed transform rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 theme-bg-tertiary rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 theme-bg-tertiary opacity-20 animate-float-slow transform rotate-12"></div>
        
        {/* Additional Floating Shapes */}
        <div className="absolute top-32 left-1/3 w-16 h-16 theme-gradient-accent animate-float-delayed-slow transform rotate-45"></div>
        <div className="absolute top-60 right-1/4 w-20 h-20 theme-gradient-accent animate-float-slow rounded-full"></div>
        <div className="absolute bottom-32 left-1/6 w-14 h-14 theme-gradient-accent animate-float transform rotate-12"></div>
        <div className="absolute bottom-60 right-1/6 w-18 h-18 theme-gradient-accent animate-float-delayed rounded-full"></div>
        
        {/* Triangle Shapes */}
        <div className="absolute top-16 left-1/5 w-0 h-0 border-l-8 border-r-8 border-b-14 border-transparent border-b-green-300/20 animate-float-slow"></div>
        <div className="absolute top-48 right-1/5 w-0 h-0 border-l-10 border-r-10 border-b-18 border-transparent theme-border-primary animate-float-delayed"></div>
        <div className="absolute bottom-16 left-1/4 w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent theme-border-primary animate-float"></div>
        <div className="absolute bottom-48 right-1/3 w-0 h-0 border-l-12 border-r-12 border-b-20 border-transparent theme-border-primary animate-float-slow"></div>
        
        {/* Square Shapes */}
        <div className="absolute top-24 left-1/8 w-12 h-12 theme-gradient-accent animate-float-delayed transform rotate-45"></div>
        <div className="absolute top-52 right-1/8 w-16 h-16 theme-gradient-accent animate-float-slow transform rotate-12"></div>
        <div className="absolute bottom-24 left-1/7 w-14 h-14 theme-gradient-accent animate-float transform rotate-45"></div>
        <div className="absolute bottom-52 right-1/7 w-10 h-10 theme-gradient-accent animate-float-delayed-slow transform rotate-12"></div>
        
        {/* Hexagon Shapes */}
        <div className="absolute top-28 left-1/12 w-16 h-16 theme-gradient-accent animate-float-slow" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute top-56 right-1/12 w-14 h-14 theme-gradient-accent animate-float-delayed" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute bottom-28 left-1/10 w-12 h-12 theme-gradient-accent animate-float" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute bottom-56 right-1/10 w-18 h-18 theme-gradient-accent animate-float-slow" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        
        {/* Star Shapes */}
        <div className="absolute top-36 left-1/9 w-10 h-10 theme-gradient-accent animate-float-delayed" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute top-64 right-1/9 w-8 h-8 theme-gradient-accent animate-float-slow" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute bottom-36 left-1/11 w-12 h-12 theme-gradient-accent animate-float" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute bottom-64 right-1/11 w-6 h-6 theme-gradient-accent animate-float-delayed-slow" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        
        {/* Diamond Shapes */}
        <div className="absolute top-44 left-1/13 w-14 h-14 theme-gradient-accent animate-float-slow transform rotate-45"></div>
        <div className="absolute top-72 right-1/13 w-12 h-12 theme-gradient-accent animate-float-delayed transform rotate-45"></div>
        <div className="absolute bottom-44 left-1/14 w-16 h-16 theme-gradient-accent animate-float transform rotate-45"></div>
        <div className="absolute bottom-72 right-1/14 w-8 h-8 theme-gradient-accent animate-float-slow transform rotate-45"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-40 left-1/6 w-40 h-40 bg-gradient-to-r from-green-300/8 to-red-300/8 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-1/6 w-36 h-36 bg-gradient-to-r from-blue-300/5 to-blue-500/8 rounded-full blur-xl animate-pulse-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-green-300/6 to-emerald-300/6 rounded-full blur-xl animate-pulse-slow"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-300/20 to-transparent animate-line-move"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/15 to-transparent animate-line-move-delayed"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-300/30 rounded-full animate-particle-float"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-blue-300/20 rounded-full animate-particle-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-green-300/40 rounded-full animate-particle-float-slow"></div>
        <div className="absolute bottom-2/3 right-1/3 w-2 h-2 bg-purple-300/25 rounded-full animate-particle-float"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* ====== Heading ====== */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-extrabold theme-text-primary leading-tight">
              Development Service <span className="theme-accent-primary">Packages</span>
            </h2>
            <p className="theme-text-secondary mt-4 text-lg">
              Choose the perfect development package for your project. From basic web development to full-stack solutions with mobile apps and SEO services.
            </p>
          </div>

          {/* ====== Toggle Switch ====== */}
          <div className="flex items-center space-x-4">
            <span
              className={`font-semibold ${
                !isYearly ? "text-black" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <div
              className="w-16 h-8 flex items-center bg-white border border-green-400 rounded-full cursor-pointer transition-all duration-300"
              onClick={() => setIsYearly(!isYearly)}
            >
              <div
                className={`w-6 h-6 bg-green-500 rounded-full shadow-md transform transition-transform duration-300 ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`font-semibold ${
                  isYearly ? "text-black" : "text-gray-400"
                }`}
              >
                Yearly
              </span>
              <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Recommended
              </div>
            </div>
          </div>
        </div>

        {/* ====== Pricing Cards ====== */}
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden ${
                index === 0 
                  ? "border-gray-200 hover:border-green-300" 
                  : "border-green-200 hover:border-green-400"
              }`}
            >
              {/* Professional Header */}
              <div className={`px-8 py-6 ${
                index === 0 
                  ? "bg-gray-50" 
                  : "bg-gradient-to-r from-green-50 to-green-100"
              }`}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-lg text-gray-500 font-normal">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {isYearly ? "Save 20% with yearly billing" : "Monthly billing"}
                  </p>
                </div>
              </div>

              {/* Features Section */}
              <div className="px-8 py-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                  What's Included
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between py-2"
                    >
                      <span className="text-gray-700 text-sm">{feature.name}</span>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.included 
                          ? "bg-green-100" 
                          : "bg-gray-100"
                      }`}>
                        {feature.included ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="px-8 pb-8">
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg ${
                    index === 0
                      ? "bg-gray-800 hover:bg-gray-900"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>

              {/* Popular Badge for Advanced Plan */}
              {index === 1 && (
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

// Custom CSS for background animations
const styles = `
  @keyframes floatSlow {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-15px) rotate(180deg);
    }
  }
  
  @keyframes floatDelayed {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(20px) rotate(-180deg);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes floatDelayedSlow {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(25px) rotate(180deg);
    }
  }
  
  @keyframes pulseSlow {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }
  
  @keyframes pulseDelayed {
    0%, 100% {
      opacity: 0.2;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }
  
  @keyframes lineMove {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  @keyframes lineMoveDelayed {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  @keyframes particleFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
      opacity: 0.3;
    }
    25% {
      transform: translateY(-20px) translateX(10px);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-30px) translateX(-5px);
      opacity: 0.8;
    }
    75% {
      transform: translateY(-15px) translateX(15px);
      opacity: 0.4;
    }
  }
  
  @keyframes particleFloatDelayed {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
      opacity: 0.2;
    }
    25% {
      transform: translateY(15px) translateX(-10px);
      opacity: 0.5;
    }
    50% {
      transform: translateY(25px) translateX(5px);
      opacity: 0.7;
    }
    75% {
      transform: translateY(10px) translateX(-15px);
      opacity: 0.3;
    }
  }
  
  @keyframes particleFloatSlow {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
      opacity: 0.4;
    }
    33% {
      transform: translateY(-25px) translateX(8px);
      opacity: 0.8;
    }
    66% {
      transform: translateY(-35px) translateX(-8px);
      opacity: 0.6;
    }
  }
  
  .animate-float-slow {
    animation: floatSlow 8s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: floatDelayed 10s ease-in-out infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed-slow {
    animation: floatDelayedSlow 12s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulseSlow 4s ease-in-out infinite;
  }
  
  .animate-pulse-delayed {
    animation: pulseDelayed 6s ease-in-out infinite;
  }
  
  .animate-line-move {
    animation: lineMove 8s linear infinite;
  }
  
  .animate-line-move-delayed {
    animation: lineMoveDelayed 10s linear infinite;
  }
  
  .animate-particle-float {
    animation: particleFloat 6s ease-in-out infinite;
  }
  
  .animate-particle-float-delayed {
    animation: particleFloatDelayed 8s ease-in-out infinite;
  }
  
  .animate-particle-float-slow {
    animation: particleFloatSlow 10s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

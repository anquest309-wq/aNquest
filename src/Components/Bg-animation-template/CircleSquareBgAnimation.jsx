import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const CircleSquareBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <>
      <style>{`
        @keyframes squareFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(45deg);
          }
          25% {
            transform: translateY(-15px) translateX(5px) rotate(50deg);
          }
          50% {
            transform: translateY(-25px) translateX(0px) rotate(45deg);
          }
          75% {
            transform: translateY(-15px) translateX(-5px) rotate(40deg);
          }
        }
        
        @keyframes squareFloatDelayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(45deg);
          }
          25% {
            transform: translateY(-18px) translateX(-6px) rotate(40deg);
          }
          50% {
            transform: translateY(-28px) translateX(0px) rotate(45deg);
          }
          75% {
            transform: translateY(-18px) translateX(6px) rotate(50deg);
          }
        }
        
        @keyframes squareFloatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(45deg);
          }
          33% {
            transform: translateY(-12px) translateX(4px) rotate(48deg);
          }
          66% {
            transform: translateY(-20px) translateX(-4px) rotate(42deg);
          }
        }
        
        @keyframes squareCoordination {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(45deg) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(8px) rotate(50deg) scale(1.05);
          }
          50% {
            transform: translateY(-30px) translateX(0px) rotate(45deg) scale(1);
          }
          75% {
            transform: translateY(-20px) translateX(-8px) rotate(40deg) scale(0.95);
          }
        }
        
        .animate-square-float {
          animation: squareFloat 6s ease-in-out infinite;
        }
        
        .animate-square-float-delayed {
          animation: squareFloatDelayed 7s ease-in-out infinite;
        }
        
        .animate-square-float-slow {
          animation: squareFloatSlow 8s ease-in-out infinite;
        }
        
        .animate-square-coordination {
          animation: squareCoordination 9s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Big Circles on Left and Right Sides */}
      <div className="absolute top-1/4 -left-24 md:-left-32 lg:-left-40 w-96 md:w-[500px] lg:w-[600px] h-96 md:h-[500px] lg:h-[600px] rounded-full animate-float-slow opacity-10" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 -right-24 md:-right-32 lg:-right-40 w-96 md:w-[500px] lg:w-[600px] h-96 md:h-[500px] lg:h-[600px] rounded-full animate-float-medium opacity-10" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Additional Large Circles on Left Side */}
      <div className="absolute top-1/2 -left-16 md:-left-20 lg:-left-28 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 rounded-full animate-float-delayed opacity-8" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 -left-12 md:-left-16 lg:-left-20 w-56 md:w-72 lg:w-80 h-56 md:h-72 lg:h-80 rounded-full animate-float opacity-7" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Additional Large Circles on Right Side */}
      <div className="absolute top-1/3 -right-16 md:-right-20 lg:-right-28 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 rounded-full animate-float-slow opacity-8" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/2 -right-12 md:-right-16 lg:-right-20 w-56 md:w-72 lg:w-80 h-56 md:h-72 lg:h-80 rounded-full animate-float-delayed opacity-7" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Squares After Circles - Left Side with Floating Animations */}
      <div className="absolute top-10 left-8 md:left-96 w-20 md:w-28 lg:w-32 h-20 md:h-28 lg:h-32 animate-square-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      {/* <div className="absolute top-40 left-16 md:left-44 w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 animate-square-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div> */}
      <div className="absolute top-60 left-12 md:left-20 lg:left-28 w-18 md:w-24 lg:w-28 h-18 md:h-24 lg:h-28 animate-square-float-slow opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
       
      {/* Squares After Circles - Right Side with Floating Animations */}
      <div className="absolute top-7 right-8 md:right-96 w-20 md:w-28 lg:w-32 h-20 md:h-28 lg:h-32 animate-square-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-44 right-16 md:right-24 lg:right-32 w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 animate-square-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-64 right-12 md:right-20 lg:right-28 w-18 md:w-24 lg:w-28 h-18 md:h-24 lg:h-28 animate-square-float-slow opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
     
      {/* Center Squares with Coordinated Movement */}
    
      
      
    </div>
    </>
  );
};

export default CircleSquareBgAnimation;



import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const MinimalBigShapesAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <>
      <style>{`
        @keyframes circleExpand {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.18;
          }
        }
        
        @keyframes circleSlowRotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(360deg) scale(1.1);
          }
        }
        
        @keyframes squareRise {
          0%, 100% {
            transform: translateY(0px) rotate(45deg) scale(1);
          }
          50% {
            transform: translateY(-60px) rotate(225deg) scale(1.2);
          }
        }
        
        @keyframes squareSway {
          0%, 100% {
            transform: translateX(0px) translateY(0px) rotate(45deg);
          }
          25% {
            transform: translateX(30px) translateY(-30px) rotate(90deg);
          }
          50% {
            transform: translateX(0px) translateY(-50px) rotate(135deg);
          }
          75% {
            transform: translateX(-30px) translateY(-30px) rotate(180deg);
          }
        }
        
        @keyframes squareFlow {
          0% {
            transform: translateY(0px) translateX(0px) rotate(45deg) scale(1);
          }
          33% {
            transform: translateY(-45px) translateX(20px) rotate(135deg) scale(1.15);
          }
          66% {
            transform: translateY(-30px) translateX(-20px) rotate(225deg) scale(0.9);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(315deg) scale(1);
          }
        }
        
        .animate-circle-expand {
          animation: circleExpand 10s ease-in-out infinite;
        }
        
        .animate-circle-slow-rotate {
          animation: circleSlowRotate 25s linear infinite;
        }
        
        .animate-square-rise {
          animation: squareRise 8s ease-in-out infinite;
        }
        
        .animate-square-sway {
          animation: squareSway 12s ease-in-out infinite;
        }
        
        .animate-square-flow {
          animation: squareFlow 14s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Big Circles on Left and Right Sides - Minimal but Large */}
        <div className="absolute top-1/4 -left-32 md:-left-48 lg:-left-64 w-[500px] md:w-[700px] lg:w-[800px] h-[500px] md:h-[700px] lg:h-[800px] rounded-full animate-circle-expand opacity-10" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
        <div className="absolute bottom-1/4 -right-32 md:-right-48 lg:-right-64 w-[500px] md:w-[700px] lg:w-[800px] h-[500px] md:h-[700px] lg:h-[800px] rounded-full animate-circle-slow-rotate opacity-10" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
        
        {/* Minimal Big Squares - Left Side */}
        <div className="absolute top-1/3 left-12 md:left-24 lg:left-32 w-32 md:w-48 lg:w-56 h-32 md:h-48 lg:h-56 rotate-45 animate-square-rise opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
        {/* <div className="absolute bottom-1/3 left-16 md:left-28 lg:left-36 w-28 md:w-40 lg:w-48 h-28 md:h-40 lg:h-48 rotate-45 animate-square-sway opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div> */}
        
        {/* Minimal Big Squares - Right Side */}
        <div className="absolute top-1/2 right-12 md:right-24 lg:right-32 w-32 md:w-48 lg:w-56 h-32 md:h-48 lg:h-56 rotate-45 animate-square-flow opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
        {/* <div className="absolute bottom-1/4 right-16 md:right-28 lg:right-36 w-28 md:w-40 lg:w-48 h-28 md:h-40 lg:h-48 rotate-45 animate-square-rise opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none', animationDelay: '3s' }}></div> */}
        
        {/* Center Large Square - Single Focal Point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 md:w-36 lg:w-44 h-24 md:h-36 lg:h-44 rotate-45 animate-square-flow opacity-12" style={{ backgroundColor: shapeColor, boxShadow: 'none', animationDelay: '1.5s' }}></div>
      </div>
    </>
  );
};

export default MinimalBigShapesAnimation;


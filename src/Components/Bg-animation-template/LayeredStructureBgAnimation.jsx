import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const LayeredStructureBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1 - Very Large Background Shapes */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full animate-float opacity-8" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full animate-float-delayed opacity-10" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Layer 2 - Large Middle Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 transform rotate-45 animate-diamond-float opacity-12" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 transform rotate-45 animate-diamond-float-delayed opacity-14" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Layer 3 - Medium Shapes */}
      <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full animate-float-slow opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-56 h-56 rounded-full animate-float-delayed-slow opacity-17" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Layer 4 - Geometric Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 transform rotate-30 animate-hexagon-float opacity-18" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 transform rotate-45 animate-square-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Layer 5 - Small Accent Shapes */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 transform rotate-45 animate-diamond-float opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-36 h-36 rounded-full animate-float opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-3/4 right-1/3 w-44 h-44 transform rotate-45 animate-square-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-3/4 left-1/3 w-38 h-38 transform rotate-30 animate-hexagon-float-delayed opacity-23" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      
      {/* Layer 6 - Tiny Particles */}
      <div className="absolute top-1/5 left-1/5 w-4 h-4 rounded-full animate-particle-float opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-2/5 right-1/5 w-5 h-5 rounded-full animate-particle-float-delayed opacity-32" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/5 left-2/5 w-4 h-4 rounded-full animate-particle-float-slow opacity-28" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-2/5 right-2/5 w-5 h-5 rounded-full animate-particle-float-delayed-slow opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
    </div>
  );
};

export default LayeredStructureBgAnimation;


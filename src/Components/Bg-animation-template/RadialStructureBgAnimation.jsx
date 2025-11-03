import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const RadialStructureBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Center Large Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full animate-float opacity-10" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Radial Circles - Layer 1 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full animate-float-delayed opacity-12" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full animate-float-slow opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Radial Elements - Top */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-40 h-40 transform rotate-45 animate-diamond-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-20 border-r-20 border-b-32 border-transparent animate-triangle-float opacity-18" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Radial Elements - Bottom */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-40 h-40 transform rotate-45 animate-diamond-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-20 border-r-20 border-t-32 border-transparent animate-triangle-float-delayed opacity-18" style={{ borderTopColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Radial Elements - Left */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-36 h-36 rounded-full animate-float opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-28 h-28 transform rotate-45 animate-square-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Radial Elements - Right */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-36 h-36 rounded-full animate-float-delayed opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-28 h-28 transform rotate-45 animate-square-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Diagonal Radial Elements */}
      <div className="absolute top-1/3 left-1/3 w-32 h-32 transform rotate-30 animate-hexagon-float opacity-18" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute top-2/3 right-1/3 w-32 h-32 transform rotate-30 animate-hexagon-float-delayed opacity-18" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 left-2/3 w-32 h-32 transform rotate-30 animate-hexagon-float opacity-18" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute top-2/3 left-2/3 w-32 h-32 transform rotate-30 animate-hexagon-float-delayed opacity-18" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
    </div>
  );
};

export default RadialStructureBgAnimation;


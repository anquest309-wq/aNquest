import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const MinimalBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Minimal Floating Circles */}
      <div className="absolute top-20 left-20 w-20 h-20 rounded-full animate-float opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full animate-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full animate-float-slow opacity-10" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Minimal Geometric Shapes */}
      <div className="absolute top-1/3 left-1/4 w-12 h-12 rotate-45 animate-square-float opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-14 h-14 transform rotate-45 animate-diamond-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Minimal Particles */}
      <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full animate-particle-float opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full animate-particle-float-delayed opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
    </div>
  );
};

export default MinimalBgAnimation;


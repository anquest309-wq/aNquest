import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const GeometricBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric Squares */}
      <div className="absolute top-16 left-16 w-16 h-16 rotate-45 animate-square-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-32 right-20 w-18 h-18 rotate-45 animate-square-float-delayed opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-24 left-1/4 w-14 h-14 rotate-45 animate-square-float-slow opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-40 right-1/3 w-20 h-20 rotate-45 animate-square-float-delayed-slow opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Geometric Diamonds */}
      <div className="absolute top-24 right-1/2 w-20 h-20 transform rotate-45 animate-diamond-float opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-40 left-1/3 w-22 h-22 transform rotate-45 animate-diamond-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-24 right-1/4 w-18 h-18 transform rotate-45 animate-diamond-float opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-40 left-1/2 w-16 h-16 transform rotate-45 animate-diamond-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Geometric Hexagons */}
      <div className="absolute top-1/3 left-1/4 w-16 h-16 transform rotate-30 animate-hexagon-float opacity-20" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 right-1/4 w-18 h-18 transform rotate-30 animate-hexagon-float-delayed opacity-25" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-14 h-14 transform rotate-30 animate-hexagon-float opacity-15" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/2 right-1/3 w-20 h-20 transform rotate-30 animate-hexagon-float-delayed opacity-20" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      
      {/* Geometric Triangles */}
      <div className="absolute top-1/4 left-1/5 w-0 h-0 border-l-8 border-r-8 border-b-14 border-transparent animate-triangle-float opacity-20" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-3/4 right-1/5 w-0 h-0 border-l-10 border-r-10 border-b-16 border-transparent animate-triangle-float-delayed opacity-25" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 left-1/5 w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent animate-triangle-float opacity-15" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-3/4 right-1/4 w-0 h-0 border-l-12 border-r-12 border-b-20 border-transparent animate-triangle-float-delayed opacity-22" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
    </div>
  );
};

export default GeometricBgAnimation;


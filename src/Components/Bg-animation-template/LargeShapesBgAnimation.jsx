import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const LargeShapesBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Very Large Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full animate-float opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full animate-float-delayed opacity-12" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full animate-float-slow opacity-10" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-1/4 w-68 h-68 rounded-full animate-float-delayed-slow opacity-13" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Very Large Squares */}
      <div className="absolute top-1/4 left-0 w-56 h-56 rotate-45 animate-square-float opacity-12" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 rotate-45 animate-square-float-delayed opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rotate-45 animate-square-float-slow opacity-10" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Very Large Diamonds */}
      <div className="absolute top-1/3 right-1/4 w-52 h-52 transform rotate-45 animate-diamond-float opacity-14" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-58 h-58 transform rotate-45 animate-diamond-float-delayed opacity-11" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Very Large Hexagons */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 transform rotate-30 animate-hexagon-float opacity-12" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-1/2 w-64 h-64 transform rotate-30 animate-hexagon-float-delayed opacity-13" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      
      {/* Very Large Triangles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-32 border-r-32 border-b-56 border-transparent animate-triangle-float opacity-12" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 right-1/2 w-0 h-0 border-l-28 border-r-28 border-b-48 border-transparent animate-triangle-float-delayed opacity-15" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
    </div>
  );
};

export default LargeShapesBgAnimation;


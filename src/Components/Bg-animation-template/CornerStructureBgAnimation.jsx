import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const CornerStructureBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-Left Corner - Large Shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full animate-float opacity-12" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 left-0 w-64 h-64 transform rotate-45 animate-square-float-delayed opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 left-0 w-56 h-56 transform rotate-45 animate-diamond-float opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 left-0 w-0 h-0 border-l-32 border-r-32 border-b-56 border-transparent animate-triangle-float opacity-16" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Top-Right Corner - Large Shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full animate-float-delayed opacity-12" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 transform rotate-45 animate-square-float opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 right-0 w-56 h-56 transform rotate-45 animate-diamond-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 right-0 w-0 h-0 border-l-32 border-r-32 border-b-56 border-transparent animate-triangle-float-delayed opacity-16" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Bottom-Left Corner - Large Shapes */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full animate-float-slow opacity-12" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 transform rotate-45 animate-square-float-delayed opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 transform rotate-45 animate-diamond-float opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-32 border-r-32 border-t-56 border-transparent animate-triangle-float opacity-16" style={{ borderTopColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Bottom-Right Corner - Large Shapes */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full animate-float-delayed-slow opacity-12" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 transform rotate-45 animate-square-float opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 transform rotate-45 animate-diamond-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-0 w-0 h-0 border-l-32 border-r-32 border-t-56 border-transparent animate-triangle-float-delayed opacity-16" style={{ borderTopColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Center Large Hexagon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 transform rotate-30 animate-hexagon-float opacity-10" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
    </div>
  );
};

export default CornerStructureBgAnimation;


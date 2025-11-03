import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const ZigzagStructureBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Zigzag Pattern - Left to Right Diagonal */}
      <div className="absolute top-0 left-0 w-48 h-48 transform rotate-45 animate-diamond-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/6 right-1/6 w-52 h-52 transform rotate-45 animate-diamond-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-2/6 left-1/3 w-48 h-48 transform rotate-45 animate-diamond-float opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-3/6 right-2/3 w-56 h-56 transform rotate-45 animate-diamond-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-4/6 left-2/3 w-48 h-48 transform rotate-45 animate-diamond-float opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-5/6 right-1/3 w-52 h-52 transform rotate-45 animate-diamond-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Zigzag Pattern - Right to Left Diagonal */}
      <div className="absolute top-0 right-0 w-48 h-48 transform -rotate-45 animate-square-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/6 left-1/6 w-52 h-52 transform -rotate-45 animate-square-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-2/6 right-1/3 w-48 h-48 transform -rotate-45 animate-square-float opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-3/6 left-2/3 w-56 h-56 transform -rotate-45 animate-square-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-4/6 right-2/3 w-48 h-48 transform -rotate-45 animate-square-float opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-5/6 left-1/3 w-52 h-52 transform -rotate-45 animate-square-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Connecting Triangles */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-16 border-r-16 border-b-28 border-transparent animate-triangle-float opacity-18" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-3/6 right-1/2 w-0 h-0 border-l-18 border-r-18 border-b-30 border-transparent animate-triangle-float-delayed opacity-20" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-5/6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-16 border-r-16 border-b-28 border-transparent animate-triangle-float opacity-18" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
    </div>
  );
};

export default ZigzagStructureBgAnimation;


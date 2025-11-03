import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const GridStructureBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern - Top Row */}
      <div className="absolute top-10 left-10 w-20 h-20 rotate-45 animate-square-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-10 left-1/4 w-20 h-20 rotate-45 animate-square-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-10 left-1/2 w-20 h-20 rotate-45 animate-square-float opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-10 left-3/4 w-20 h-20 rotate-45 animate-square-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Grid Pattern - Middle Row */}
      <div className="absolute top-1/2 left-10 w-24 h-24 transform rotate-45 animate-diamond-float opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 transform rotate-45 animate-diamond-float-delayed opacity-23" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 transform rotate-45 animate-diamond-float opacity-27" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-3/4 w-24 h-24 transform rotate-45 animate-diamond-float-delayed opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Grid Pattern - Bottom Row */}
      <div className="absolute bottom-10 right-10 w-18 h-18 rounded-full animate-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-10 right-1/4 w-18 h-18 rounded-full animate-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-10 right-1/2 w-18 h-18 rounded-full animate-float opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-10 right-3/4 w-18 h-18 rounded-full animate-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Vertical Grid Lines */}
      <div className="absolute top-0 left-1/4 w-1 h-full animate-line-move opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 left-1/2 w-1 h-full animate-line-move-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 left-3/4 w-1 h-full animate-line-move opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Horizontal Grid Lines */}
      <div className="absolute top-1/3 left-0 w-full h-1 animate-line-move opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-2/3 left-0 w-full h-1 animate-line-move-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
    </div>
  );
};

export default GridStructureBgAnimation;


import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const WaveStructureBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wave Pattern - Top Wave */}
      <div className="absolute top-0 left-0 w-48 h-48 rounded-full animate-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 left-1/6 w-52 h-52 rounded-full animate-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 left-1/3 w-48 h-48 rounded-full animate-float opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 left-1/2 w-56 h-56 rounded-full animate-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 left-2/3 w-48 h-48 rounded-full animate-float opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-0 left-5/6 w-52 h-52 rounded-full animate-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Wave Pattern - Middle Wave */}
      <div className="absolute top-1/2 left-0 w-44 h-44 transform rotate-45 animate-diamond-float opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/6 w-48 h-48 transform rotate-45 animate-diamond-float-delayed opacity-23" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/3 w-44 h-44 transform rotate-45 animate-diamond-float opacity-27" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/2 w-50 h-50 transform rotate-45 animate-diamond-float-delayed opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-2/3 w-44 h-44 transform rotate-45 animate-diamond-float opacity-23" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-5/6 w-48 h-48 transform rotate-45 animate-diamond-float-delayed opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Wave Pattern - Bottom Wave */}
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full animate-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-1/6 w-52 h-52 rounded-full animate-float-delayed opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full animate-float opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-1/2 w-56 h-56 rounded-full animate-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-2/3 w-48 h-48 rounded-full animate-float opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-0 right-5/6 w-52 h-52 rounded-full animate-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Connecting Lines */}
      <div className="absolute top-1/4 left-0 w-full h-1 animate-line-move opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-3/4 left-0 w-full h-1 animate-line-move-delayed opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
    </div>
  );
};

export default WaveStructureBgAnimation;


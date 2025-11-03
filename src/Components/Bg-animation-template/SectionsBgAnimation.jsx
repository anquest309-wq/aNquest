import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const SectionsBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Circles */}
      <div className="absolute top-16 left-16 w-24 h-24 rounded-full animate-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-40 right-24 w-20 h-20 rounded-full animate-float-delayed opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-24 left-1/3 w-28 h-28 rounded-full animate-float-slow opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-40 right-1/4 w-22 h-22 rounded-full animate-float-delayed-slow opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Floating Triangles */}
      <div className="absolute top-1/3 left-1/4 w-0 h-0 border-l-10 border-r-10 border-b-16 border-transparent animate-triangle-float opacity-20" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-0 h-0 border-l-12 border-r-12 border-b-20 border-transparent animate-triangle-float-delayed opacity-25" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Floating Squares */}
      <div className="absolute top-1/2 left-20 w-16 h-16 rotate-45 animate-square-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 right-20 w-18 h-18 rotate-45 animate-square-float-delayed opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Floating Diamonds */}
      <div className="absolute top-24 right-1/2 w-20 h-20 transform rotate-45 animate-diamond-float opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-24 left-1/2 w-24 h-24 transform rotate-45 animate-diamond-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-16 w-36 h-36 rounded-full animate-orb-float opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 left-16 w-32 h-32 rounded-full animate-orb-float-delayed opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Floating Lines */}
      <div className="absolute top-1/2 left-0 w-48 h-1 animate-line-move opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 right-0 w-40 h-1 animate-line-move-delayed opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Particle Effects */}
      <div className="absolute top-20 left-1/2 w-3 h-3 rounded-full animate-particle-float opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-32 right-1/3 w-4 h-4 rounded-full animate-particle-float-delayed opacity-35" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-20 left-1/3 w-3 h-3 rounded-full animate-particle-float-slow opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-32 right-1/2 w-4 h-4 rounded-full animate-particle-float-delayed-slow opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Hexagon Shapes */}
      <div className="absolute top-1/3 left-1/2 w-16 h-16 transform rotate-30 animate-hexagon-float opacity-20" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 right-1/2 w-20 h-20 transform rotate-30 animate-hexagon-float-delayed opacity-15" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      
      {/* Star Shapes */}
      <div className="absolute top-1/2 right-1/4 w-0 h-0 border-l-6 border-r-6 border-b-10 border-transparent animate-star-float opacity-20" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/2 left-1/4 w-0 h-0 border-l-8 border-r-8 border-b-12 border-transparent animate-star-float-delayed opacity-25" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
    </div>
  );
};

export default SectionsBgAnimation;


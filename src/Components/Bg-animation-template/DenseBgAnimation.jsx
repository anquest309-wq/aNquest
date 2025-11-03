import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const DenseBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dense Floating Circles */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full animate-float opacity-20 " style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-24 right-16 w-16 h-16 rounded-full animate-float-delayed opacity-25 " style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-36 left-1/4 w-24 h-24 rounded-full animate-float-slow opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-20 left-1/5 w-22 h-22 rounded-full animate-float-delayed-slow opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-32 right-1/3 w-18 h-18 rounded-full animate-float opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Dense Floating Triangles */}
      <div className="absolute top-1/4 left-1/5 w-0 h-0 border-l-8 border-r-8 border-b-14 border-transparent animate-triangle-float opacity-20" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 right-1/4 w-0 h-0 border-l-10 border-r-10 border-b-16 border-transparent animate-triangle-float-delayed opacity-25" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent animate-triangle-float opacity-15" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Dense Floating Squares */}
      <div className="absolute top-1/3 left-16 w-14 h-14 rotate-45 animate-square-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-2/3 right-20 w-16 h-16 rotate-45 animate-square-float-delayed opacity-15" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-12 h-12 rotate-45 animate-square-float opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Dense Floating Diamonds */}
      <div className="absolute top-16 right-1/3 w-18 h-18 transform rotate-45 animate-diamond-float opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-40 left-1/2 w-20 h-20 transform rotate-45 animate-diamond-float-delayed opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-24 right-1/2 w-16 h-16 transform rotate-45 animate-diamond-float opacity-22" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Dense Gradient Orbs */}
      <div className="absolute top-1/3 right-12 w-32 h-32 rounded-full animate-orb-float opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 left-12 w-28 h-28 rounded-full animate-orb-float-delayed opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full animate-orb-float opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Dense Floating Lines */}
      <div className="absolute top-1/3 left-0 w-52 h-1 animate-line-move opacity-20" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 right-0 w-44 h-1 animate-line-move-delayed opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-2/3 left-0 w-36 h-1 animate-line-move opacity-18" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Dense Particle Effects */}
      <div className="absolute top-16 left-1/3 w-2 h-2 rounded-full animate-particle-float opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-28 right-1/4 w-3 h-3 rounded-full animate-particle-float-delayed opacity-35" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-44 left-1/2 w-2 h-2 rounded-full animate-particle-float-slow opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-16 left-1/4 w-3 h-3 rounded-full animate-particle-float-delayed-slow opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-28 right-1/3 w-2 h-2 rounded-full animate-particle-float opacity-28" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Dense Hexagon Shapes */}
      <div className="absolute top-1/4 left-1/3 w-14 h-14 transform rotate-30 animate-hexagon-float opacity-20" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute top-3/4 right-1/3 w-18 h-18 transform rotate-30 animate-hexagon-float-delayed opacity-15" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-12 h-12 transform rotate-30 animate-hexagon-float opacity-18" style={{ backgroundColor: shapeColor, clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'none' }}></div>
      
      {/* Dense Star Shapes */}
      <div className="absolute top-1/2 right-1/5 w-0 h-0 border-l-5 border-r-5 border-b-8 border-transparent animate-star-float opacity-20" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/2 left-1/5 w-0 h-0 border-l-7 border-r-7 border-b-11 border-transparent animate-star-float-delayed opacity-25" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/4 right-1/2 w-0 h-0 border-l-6 border-r-6 border-b-9 border-transparent animate-star-float opacity-18" style={{ borderBottomColor: shapeColor, boxShadow: 'none' }}></div>
    </div>
  );
};

export default DenseBgAnimation;


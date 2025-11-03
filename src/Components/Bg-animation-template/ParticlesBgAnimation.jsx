import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

const ParticlesBgAnimation = ({ color }) => {
  const { theme } = useTheme();
  
  // Get color based on theme: blue for light, white for dark
  const shapeColor = color || (theme === 'light' ? '#2d65bc' : '#ffffff');
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Particle Effects - Multiple Sizes */}
      <div className="absolute top-12 left-12 w-2 h-2 rounded-full animate-particle-float opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-20 right-16 w-3 h-3 rounded-full animate-particle-float-delayed opacity-35" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-32 left-1/4 w-2 h-2 rounded-full animate-particle-float-slow opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-44 right-1/3 w-4 h-4 rounded-full animate-particle-float-delayed-slow opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-56 left-1/2 w-2 h-2 rounded-full animate-particle-float opacity-28" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-64 right-1/4 w-3 h-3 rounded-full animate-particle-float-delayed opacity-32" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full animate-particle-float opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-20 left-16 w-2 h-2 rounded-full animate-particle-float-delayed opacity-35" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-32 right-1/4 w-4 h-4 rounded-full animate-particle-float-slow opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-44 left-1/3 w-2 h-2 rounded-full animate-particle-float-delayed-slow opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-56 right-1/2 w-3 h-3 rounded-full animate-particle-float opacity-28" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-64 left-1/4 w-2 h-2 rounded-full animate-particle-float-delayed opacity-32" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      
      {/* Medium Particles */}
      <div className="absolute top-1/3 left-1/5 w-3 h-3 rounded-full animate-particle-float opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-1/2 right-1/5 w-4 h-4 rounded-full animate-particle-float-delayed opacity-35" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full animate-particle-float-slow opacity-25" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/3 right-1/5 w-3 h-3 rounded-full animate-particle-float-delayed-slow opacity-30" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-1/2 left-1/5 w-4 h-4 rounded-full animate-particle-float opacity-28" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
      <div className="absolute bottom-2/3 right-1/3 w-2 h-2 rounded-full animate-particle-float-delayed opacity-32" style={{ backgroundColor: shapeColor, boxShadow: 'none' }}></div>
    </div>
  );
};

export default ParticlesBgAnimation;


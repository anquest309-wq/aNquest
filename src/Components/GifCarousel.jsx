import React, { useState, useEffect } from 'react';
import { useTheme } from '../Context/ThemeContext';

const GifCarousel = () => {
  const { theme } = useTheme();
  const [currentGifType, setCurrentGifType] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // GIF configurations - 2 types with 3 variants each
  const gifConfigs = [
    {
      type: 'development',
      name: 'Digital Development',
      description: 'Showcasing our digital development expertise',
      variants: {
        dark: 'https://ik.imagekit.io/oumqzmi0d/Home%20Section%20Animation/Landscape%20mode.gif?updatedAt=1761304071185', // Dark theme GIF
        // light: 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif', // Light theme GIF
        light: 'https://ik.imagekit.io/oumqzmi0d/Home%20Section%20Animation/phone-animation-white.gif?updatedAt=1761291931533', // Light theme GIF
        green: 'https://ik.imagekit.io/oumqzmi0d/Home%20Section%20Animation/phone-animetion-green.gif?updatedAt=1761291931495' // Green theme GIF
      }
    },
    {
      type: 'technology',
      name: 'Business Innovation',
      description: 'Cutting-edge business solutions in action',
      variants: {
        light: 'https://ik.imagekit.io/oumqzmi0d/Home%20Section%20Animation/officie-animation-black.gif?updatedAt=1761291931245', // Dark theme GIF
        dark: 'https://ik.imagekit.io/oumqzmi0d/Home%20Section%20Animation/Telecommuting%20(3).gif?updatedAt=1761300419983', // Light theme GIF
        green: 'https://ik.imagekit.io/oumqzmi0d/Home%20Section%20Animation/officie-animation-orange.gif?updatedAt=1761291931142' // Green theme GIF
      }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentGifType(prev => (prev + 1) % gifConfigs.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50); // Small delay after fade completes
      }, 1000); // Half of transition duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, gifConfigs.length]);

  // Handle theme changes with smooth transition
  useEffect(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 2000); // Match fade animation duration
  }, [theme]);

  const getCurrentGif = () => {
    const currentConfig = gifConfigs[currentGifType];
    return currentConfig.variants[theme] || currentConfig.variants.dark;
  };

//   const handleGifTypeChange = (index) => {
//     setCurrentGifType(index);
//     setIsAutoPlaying(false);
//     // Resume auto-play after 10 seconds
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 lg:pt-20">
      {/* GIF Display */}
      <div className="relative w-full max-w-2xl h-80 lg:h-[70vh] mb-4 lg:mb-6 rounded-xl overflow-hidden group flex items-center justify-center">
        <img
          src={getCurrentGif()}
          alt={`${gifConfigs[currentGifType].name} - ${theme} theme`}
          className={`w-auto h-auto max-w-full max-h-full object-contain transition-all duration-[2000ms] ease-in-out group-hover:scale-105 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
          style={{
            filter: theme === 'dark' ? 'brightness(1) contrast(1) saturate(1)' : 
                    theme === 'light' ? 'brightness(1) contrast(1) saturate(1)' : 
                    'brightness(1) contrast(1) saturate(1)',
            transition: 'opacity 2000ms ease-in-out, transform 2000ms ease-in-out'
          }}
        />
      </div>
    </div>
  );
};

export default GifCarousel;

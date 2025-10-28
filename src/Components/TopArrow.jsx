import React, { useState, useEffect } from 'react';
import { useTheme } from '../Context/ThemeContext';

export default function TopArrow() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  
  // Generate TopArrow background style based on theme
  const getArrowStyle = () => {
    if (theme === 'light') {
      return 'bg-gradient-to-r from-white to-[#2d65bc] hover:from-[#f8fafc] hover:to-[#1d4ed8] text-gray-800 border border-gray-200 backdrop-blur-sm';
    } else if (theme === 'dark') {
      return 'bg-gradient-to-r from-white to-[#1a1a1a] hover:from-[#f8fafc] hover:to-[#111111] text-gray-800 border border-gray-200 backdrop-blur-sm';
    } else if (theme === 'green') {
      return 'bg-gradient-to-r from-white to-[#064e3b] hover:from-[#f8fafc] hover:to-[#052e16] text-gray-800 border border-gray-200 backdrop-blur-sm';
    }
    return 'bg-gradient-to-r from-white to-[#2d65bc] hover:from-[#f8fafc] hover:to-[#1d4ed8] text-gray-800 border border-gray-200 backdrop-blur-sm';
  };

  // Show/hide arrow based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 ${getArrowStyle()} p-4 rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#2d65bc]/25 transition-all duration-300 transform hover:scale-110 active:scale-95 animate-bounce group`}
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}

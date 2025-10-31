import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../Context/ThemeContext';

const TypingAnimation = () => {
  const { theme } = useTheme();

  // Get theme-based color
  const getThemeColor = () => {
    if (theme === 'light') {
      return '#2d65bc';
    } else if (theme === 'dark') {
      return '#ffffff';
    }
    return '#2d65bc';
  };

  // Add internal styles for animations
  const animationStyles = `
    @keyframes slideInLeftInternal {
      0% {
        opacity: 0;
        transform: translateX(-50px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .animate-slide-in-left-internal {
      animation: slideInLeftInternal 0.8s ease-out;
    }
  `;

  // Inject styles if not already present
  React.useEffect(() => {
    const styleId = 'typing-animation-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = animationStyles;
      document.head.appendChild(style);
    }
  }, [animationStyles]);
  
  const titles = useMemo(() => [
    {
      text: "Expert Digital Solutions & ",
      coloredWord: "Innovation"
    },
    {
      text: "Modern Web Development & ",
      coloredWord: "Design"
    },
    {
      text: "Advanced Mobile Apps & ",
      coloredWord: "Solutions"
    },
    {
      text: "Digital Marketing & ",
      coloredWord: "Growth"
    },
    {
      text: "AI-Powered Business ",
      coloredWord: "Automation"
    }
  ], []);

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [displayedColoredWord, setDisplayedColoredWord] = useState('');
  const [isTypingText, setIsTypingText] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const fullText = currentTitle.text;
    const coloredWord = currentTitle.coloredWord;
    
    let timeout;

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    if (!isDeleting) {
      if (isTypingText) {
        // Typing the main text
        if (displayedText.length < fullText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(fullText.slice(0, displayedText.length + 1));
          }, 80);
        } else {
          // Main text complete, start typing colored word
          setIsTypingText(false);
        }
      } else {
        // Typing the colored word
        if (displayedColoredWord.length < coloredWord.length) {
          timeout = setTimeout(() => {
            setDisplayedColoredWord(coloredWord.slice(0, displayedColoredWord.length + 1));
          }, 100);
        } else {
          // Both texts complete, wait then start deleting
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      }
    } else {
      // Deleting phase
      if (displayedColoredWord.length > 0) {
        // Delete colored word first
        timeout = setTimeout(() => {
          setDisplayedColoredWord(displayedColoredWord.slice(0, -1));
        }, 50);
      } else if (displayedText.length > 0) {
        // Delete main text
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
      } else {
        // Everything deleted, move to next title
        setIsDeleting(false);
        setIsTypingText(true);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [displayedText, displayedColoredWord, isTypingText, isDeleting, currentTitleIndex, titles]);

  const themeColor = getThemeColor();

  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary flex items-center justify-center leading-tight min-h-[180px] md:min-h-[180px] lg:min-h-[200px]   animate-slide-in-left-internal">
      <span className="inline-block">
        {displayedText}
        <span 
          style={{ 
            color: themeColor,
            textShadow: displayedColoredWord.length > 0 ? `0 0 10px ${themeColor}40, 0 0 20px ${themeColor}20` : 'none'
          }}
          className="font-extrabold transition-all duration-300"
        >
          {displayedColoredWord}
        </span>
        <span 
          className={`inline-block w-1 h-8 md:h-10 lg:h-12 ml-1 bg-current animate-pulse ${showCursor ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundColor: displayedColoredWord.length > 0 ? themeColor : 'currentColor',
            transition: 'opacity 0.1s ease-in-out'
          }}
        />
      </span>
    </h1>
  );
};

export default TypingAnimation;

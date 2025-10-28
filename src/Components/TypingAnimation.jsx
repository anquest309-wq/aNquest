import React, { useState, useEffect, useMemo } from 'react';

const TypingAnimation = () => {
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
      coloredWord: "Innovation",
      color: "#2d65bc"
    },
    {
      text: "Modern Web Development & ",
      coloredWord: "Design",
      color: "#10b981"
    },
    {
      text: "Advanced Mobile Apps & ",
      coloredWord: "Solutions",
      color: "#8b5cf6"
    },
    {
      text: "Digital Marketing & ",
      coloredWord: "Growth",
      color: "#f59e0b"
    },
    {
      text: "AI-Powered Business ",
      coloredWord: "Automation",
      color: "#ef4444"
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

  const currentTitle = titles[currentTitleIndex];

  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6 leading-tight min-h-[180px] md:min-h-[200px] lg:min-h-[240px] animate-slide-in-left-internal">
      <span className="inline-block">
        {displayedText}
        <span 
          style={{ 
            color: currentTitle.color,
            textShadow: displayedColoredWord.length > 0 ? `0 0 10px ${currentTitle.color}40, 0 0 20px ${currentTitle.color}20` : 'none'
          }}
          className="font-extrabold transition-all duration-300"
        >
          {displayedColoredWord}
        </span>
        <span 
          className={`inline-block w-1 h-8 md:h-10 lg:h-12 ml-1 bg-current animate-pulse ${showCursor ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundColor: displayedColoredWord.length > 0 ? currentTitle.color : 'currentColor',
            transition: 'opacity 0.1s ease-in-out'
          }}
        />
      </span>
    </h1>
  );
};

export default TypingAnimation;

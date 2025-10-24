import React, { createContext, useContext, useState, useEffect } from 'react';

// Theme context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, [theme]);

  // Apply theme to document
  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-dark', 'theme-light', 'theme-green');
    
    // Add new theme class
    root.classList.add(`theme-${newTheme}`);
    
    // Update CSS custom properties
    const themes = {
      dark: {
        '--bg-primary': '#1a1a1a',
        '--bg-secondary': '#2d2d2d',
        '--bg-tertiary': '#3a3a3a',
        '--text-primary': '#ffffff',
        '--text-secondary': '#e5e5e5',
        '--text-muted': '#a0a0a0',
        '--accent-primary': '#10b981',
        '--accent-secondary': '#059669',
        '--border-primary': '#404040',
        '--border-secondary': '#525252',
        '--shadow-primary': 'rgba(0, 0, 0, 0.3)',
        '--shadow-secondary': 'rgba(0, 0, 0, 0.5)',
        '--gradient-primary': 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
        '--gradient-secondary': 'linear-gradient(135deg, #2d2d2d, #3a3a3a)',
        '--gradient-accent': 'linear-gradient(135deg, #10b981, #059669)',
      },
      light: {
        '--bg-primary': '#ffffff',
        '--bg-secondary': '#f8fafc',
        '--bg-tertiary': '#f1f5f9',
        '--text-primary': '#1a1a1a',
        '--text-secondary': '#374151',
        '--text-muted': '#6b7280',
        '--accent-primary': '#3b82f6',
        '--accent-secondary': '#2563eb',
        '--border-primary': '#e5e7eb',
        '--border-secondary': '#d1d5db',
        '--shadow-primary': 'rgba(0, 0, 0, 0.1)',
        '--shadow-secondary': 'rgba(0, 0, 0, 0.2)',
        '--gradient-primary': 'linear-gradient(135deg, #ffffff, #f8fafc)',
        '--gradient-secondary': 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
        '--gradient-accent': 'linear-gradient(135deg, #3b82f6, #2563eb)',
      },
      green: {
        '--bg-primary': '#064e3b',
        '--bg-secondary': '#065f46',
        '--bg-tertiary': '#047857',
        '--text-primary': '#ffffff',
        '--text-secondary': '#d1fae5',
        '--text-muted': '#a7f3d0',
        '--accent-primary': '#10b981',
        '--accent-secondary': '#059669',
        '--border-primary': '#047857',
        '--border-secondary': '#059669',
        '--shadow-primary': 'rgba(16, 185, 129, 0.3)',
        '--shadow-secondary': 'rgba(16, 185, 129, 0.5)',
        '--gradient-primary': 'linear-gradient(135deg, #064e3b, #065f46)',
        '--gradient-secondary': 'linear-gradient(135deg, #065f46, #047857)',
        '--gradient-accent': 'linear-gradient(135deg, #10b981, #059669)',
      }
    };

    const currentTheme = themes[newTheme];
    Object.entries(currentTheme).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;

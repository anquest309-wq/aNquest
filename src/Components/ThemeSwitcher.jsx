import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    changeTheme(nextTheme);
  };

  const Icon =
    theme === 'light'
      ? () => (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )
      : () => (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        );

  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        backgroundColor: isLight ? '#2d65bc' : 'var(--bg-secondary)',
        color: isLight ? '#ffffff' : 'var(--text-primary)',
        border: `1px solid ${isLight ? '#2d65bc' : 'var(--border-primary)'}`,
        boxShadow: '0 2px 8px var(--shadow-primary)'
      }}
      aria-label="Toggle theme"
    >
      <Icon />
    </button>
  );
};

export default ThemeSwitcher;

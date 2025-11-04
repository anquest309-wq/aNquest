import React, { useState } from 'react';
import { useTheme } from '../Context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: 'dark',
      name: 'Dark',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      
    },
    {
      id: 'light',
      name: 'Light',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ),
      
    },
  ];

  const currentTheme = themes.find(t => t.id === theme);

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 sm:space-x-2 px-2  py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-primary)',
          boxShadow: '0 2px 8px var(--shadow-primary)'
        }}
      >
        <span className="flex items-center justify-center">{currentTheme?.icon}</span>
        <span className="font-medium text-xs sm:text-sm">{currentTheme?.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Theme Dropdown */}
      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 w-56 sm:w-64 rounded-lg shadow-lg z-50 overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-primary)',
            boxShadow: '0 8px 32px var(--shadow-secondary)'
          }}
        >
          <div className="p-2">
            <div className="text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
              Choose Theme
            </div>
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => {
                  changeTheme(themeOption.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 ${
                  theme === themeOption.id ? 'ring-2 ring-offset-2' : ''
                }`}
                style={{
                  backgroundColor: theme === themeOption.id ? '#2d65bc' : 'transparent',
                  color: theme === themeOption.id ? 'white' : 'var(--text-primary)',
                  ringColor: '#2d65bc',
                  ringOffsetColor: 'var(--bg-primary)'
                }}
                onMouseEnter={(e) => {
                  if (theme !== themeOption.id) {
                    e.currentTarget.style.backgroundColor = 'rgba(45, 101, 188, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (theme !== themeOption.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span className="flex items-center justify-center">{themeOption.icon}</span>
                <div className="flex-1 text-left">
                  <div className="font-medium">{themeOption.name}</div>
                </div>
                {theme === themeOption.id && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          
          {/* Preview Section */}
          <div className="border-t p-3" style={{ borderColor: 'var(--border-primary)' }}>
            <div className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
              Preview
            </div>
            <div className="flex space-x-2">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => changeTheme(themeOption.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                    theme === themeOption.id ? 'ring-2 ring-offset-1' : ''
                  }`}
                  style={{
                    backgroundColor: themeOption.id === 'dark' ? '#1a1a1a' : '#ffffff',
                    color: themeOption.id === 'light' ? '#1a1a1a' : '#ffffff',
                    border: themeOption.id === 'light' ? '1px solid #e5e7eb' : 'none',
                    ringColor: '#2d65bc',
                    ringOffsetColor: 'var(--bg-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = '2px solid #2d65bc';
                  }}
                  onMouseLeave={(e) => {
                    if (themeOption.id === 'light') {
                      e.currentTarget.style.border = '1px solid #e5e7eb';
                    } else {
                      e.currentTarget.style.border = 'none';
                    }
                  }}
                >
                  {themeOption.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';
import { buildUrl } from '../utils/urlUtils';

const NotFound = () => {
  const { theme } = useTheme();

  const getThemeColor = () => {
    if (theme === 'light') {
      return '#2d65bc';
    } else if (theme === 'dark') {
      return '#ffffff';
    }
    return '#2d65bc';
  };

  return (
    <div className="min-h-screen theme-bg-primary flex items-center justify-center relative overflow-hidden">
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotateSlow {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 6s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 4s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotateSlow 12s linear infinite; }
        .animate-bounce-slow { animation: bounceSlow 5s ease-in-out infinite; }
      `}</style>
      
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Big Circles */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
        <div className="absolute top-32 right-20 w-64 h-64 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-12 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
        <div className="absolute bottom-40 right-10 w-56 h-56 rounded-full opacity-9 animate-float-slow" style={{ backgroundColor: getThemeColor() }}></div>
        {/* Medium Circles */}
        <div className="absolute top-60 left-1/4 w-48 h-48 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: getThemeColor() }}></div>
        <div className="absolute top-80 right-1/3 w-40 h-40 rounded-full opacity-7 animate-float-fast" style={{ backgroundColor: getThemeColor() }}></div>
        {/* Big Squares */}
        <div className="absolute top-20 left-1/3 w-36 h-36 opacity-8 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
        <div className="absolute top-60 right-1/4 w-32 h-32 opacity-7 animate-rotate-slow" style={{ backgroundColor: getThemeColor(), transform: 'rotate(45deg)' }}></div>
        {/* Big Triangles */}
        <div className="absolute top-32 right-1/4 w-0 h-0 opacity-8 animate-bounce-slow" style={{ 
          borderLeft: '60px solid transparent',
          borderRight: '60px solid transparent',
          borderBottom: `104px solid ${getThemeColor()}`
        }}></div>
        <div className="absolute bottom-32 left-1/4 w-0 h-0 opacity-7 animate-bounce-slow" style={{ 
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderBottom: `87px solid ${getThemeColor()}`
        }}></div>
      </div>

      <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold theme-accent-primary leading-none mb-4" style={{
              textShadow: `0 0 40px ${getThemeColor()}40, 0 0 80px ${getThemeColor()}20`
            }}>
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold theme-text-primary mb-6">
              Page Not Found
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl theme-text-secondary mb-4 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-base sm:text-lg theme-text-muted max-w-xl mx-auto">
              It might have been moved, deleted, or you may have entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to={buildUrl('/')}
              className="bg-[#2d65bc] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#1a4a8a] transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border-2 border-[#2d65bc] text-[#2d65bc] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#2d65bc] hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="theme-card rounded-2xl theme-shadow-primary p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold theme-text-primary mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to={buildUrl('/about')}
                className="theme-bg-tertiary hover:theme-bg-secondary rounded-lg p-4 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="theme-text-primary font-semibold">About Us</span>
              </Link>
              <Link
                to={buildUrl('/services')}
                className="theme-bg-tertiary hover:theme-bg-secondary rounded-lg p-4 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="theme-text-primary font-semibold">Services</span>
              </Link>
              <Link
                to={buildUrl('/technologies')}
                className="theme-bg-tertiary hover:theme-bg-secondary rounded-lg p-4 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="theme-text-primary font-semibold">Technologies</span>
              </Link>
              <Link
                to={buildUrl('/contacts')}
                className="theme-bg-tertiary hover:theme-bg-secondary rounded-lg p-4 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="theme-text-primary font-semibold">Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Search Icon Decoration */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-24 theme-accent-primary rounded-full flex items-center justify-center animate-float-slow opacity-20">
              <Search className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


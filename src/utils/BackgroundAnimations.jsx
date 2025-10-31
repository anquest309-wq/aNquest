import React from 'react';

export const AnimationStyles = () => (
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
    @keyframes rotateMedium {
      0% { transform: rotate(45deg); }
      100% { transform: rotate(405deg); }
    }
    @keyframes rotateFast {
      0% { transform: rotate(45deg); }
      100% { transform: rotate(405deg); }
    }
    @keyframes bounceSlow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    @keyframes bounceMedium {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    @keyframes blobSlow {
      0%, 100% {
        border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
        transform: translateY(0px);
      }
      50% {
        border-radius: 30% 70% 50% 50% / 60% 40% 60% 40%;
        transform: translateY(-20px);
      }
    }
    @keyframes blobMedium {
      0%, 100% {
        border-radius: 30% 70% 50% 50% / 60% 40% 60% 40%;
        transform: translateY(0px);
      }
      50% {
        border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
        transform: translateY(-15px);
      }
    }
    @keyframes pulseSlow {
      0%, 100% { transform: scale(1); opacity: 0.2; }
      50% { transform: scale(1.1); opacity: 0.3; }
    }
    @keyframes pulseMedium {
      0%, 100% { transform: scale(1); opacity: 0.15; }
      50% { transform: scale(1.08); opacity: 0.25; }
    }
    .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
    .animate-float-medium { animation: floatMedium 6s ease-in-out infinite; }
    .animate-float-fast { animation: floatFast 4s ease-in-out infinite; }
    .animate-rotate-slow { animation: rotateSlow 12s linear infinite; }
    .animate-rotate-medium { animation: rotateMedium 10s linear infinite; }
    .animate-rotate-fast { animation: rotateFast 8s linear infinite; }
    .animate-bounce-slow { animation: bounceSlow 5s ease-in-out infinite; }
    .animate-bounce-medium { animation: bounceMedium 4s ease-in-out infinite; }
    .animate-blob-slow { animation: blobSlow 10s ease-in-out infinite; }
    .animate-blob-medium { animation: blobMedium 8s ease-in-out infinite; }
    .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
    .animate-pulse-medium { animation: pulseMedium 3s ease-in-out infinite; }
  `}</style>
);

export const BackgroundShapes = ({ themeColor, section = 'hero' }) => {
  const shapes = {
    hero: (
      <>
        {/* Big Circles */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute top-32 right-20 w-64 h-64 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-12 animate-float-fast" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute bottom-40 right-10 w-56 h-56 rounded-full opacity-9 animate-float-slow" style={{ backgroundColor: themeColor }}></div>
        {/* Medium Circles */}
        <div className="absolute top-60 left-1/4 w-48 h-48 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute top-80 right-1/3 w-40 h-40 rounded-full opacity-7 animate-float-fast" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute bottom-60 left-1/3 w-52 h-52 rounded-full opacity-10 animate-float-slow" style={{ backgroundColor: themeColor }}></div>
        {/* Small Circles */}
        <div className="absolute top-40 left-1/2 w-24 h-24 rounded-full opacity-6 animate-float-fast" style={{ backgroundColor: themeColor }}></div>
        <div className="absolute bottom-80 right-1/4 w-32 h-32 rounded-full opacity-8 animate-float-medium" style={{ backgroundColor: themeColor }}></div>
        {/* Big Squares */}
        <div className="absolute top-20 left-1/3 w-36 h-36 opacity-8 animate-rotate-slow" style={{ backgroundColor: themeColor, transform: 'rotate(45deg)' }}></div>
        <div className="absolute top-60 right-1/4 w-32 h-32 opacity-7 animate-rotate-medium" style={{ backgroundColor: themeColor, transform: 'rotate(45deg)' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 opacity-9 animate-rotate-fast" style={{ backgroundColor: themeColor, transform: 'rotate(45deg)' }}></div>
        {/* Medium Squares */}
        <div className="absolute top-80 left-1/2 w-24 h-24 opacity-6 animate-rotate-medium" style={{ backgroundColor: themeColor, transform: 'rotate(45deg)' }}></div>
        <div className="absolute bottom-60 right-1/3 w-28 h-28 opacity-8 animate-rotate-slow" style={{ backgroundColor: themeColor, transform: 'rotate(45deg)' }}></div>
        {/* Small Squares */}
        <div className="absolute top-50 left-1/5 w-16 h-16 opacity-5 animate-rotate-fast" style={{ backgroundColor: themeColor, transform: 'rotate(45deg)' }}></div>
        {/* Big Triangles */}
        <div className="absolute top-32 right-1/4 w-0 h-0 opacity-8 animate-bounce-slow" style={{ 
          borderLeft: '60px solid transparent',
          borderRight: '60px solid transparent',
          borderBottom: `104px solid ${themeColor}`
        }}></div>
        <div className="absolute bottom-32 left-1/4 w-0 h-0 opacity-7 animate-bounce-medium" style={{ 
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderBottom: `87px solid ${themeColor}`
        }}></div>
        {/* Medium Triangles */}
        <div className="absolute top-70 right-1/2 w-0 h-0 opacity-6 animate-bounce-slow" style={{ 
          borderLeft: '35px solid transparent',
          borderRight: '35px solid transparent',
          borderBottom: `61px solid ${themeColor}`
        }}></div>
        {/* Big Blobs */}
        <div className="absolute top-1/4 left-1/2 w-96 h-96 opacity-8 animate-blob-slow" style={{ 
          backgroundColor: themeColor,
          borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%'
        }}></div>
        <div className="absolute bottom-1/4 right-1/2 w-88 h-88 opacity-10 animate-blob-medium" style={{ 
          backgroundColor: themeColor,
          borderRadius: '30% 70% 50% 50% / 60% 40% 60% 40%'
        }}></div>
        {/* Medium Blobs */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 opacity-7 animate-blob-slow" style={{ 
          backgroundColor: themeColor,
          borderRadius: '50% 50% 60% 40% / 40% 60% 50% 50%'
        }}></div>
        {/* Big Orbs */}
        <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full opacity-9 animate-pulse-slow" style={{ 
          background: `radial-gradient(circle, ${themeColor}, transparent)`
        }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 animate-pulse-medium" style={{ 
          background: `radial-gradient(circle, ${themeColor}, transparent)`
        }}></div>
      </>
    ),
    // Add more section variations as needed
  };

  return <>{shapes[section] || shapes.hero}</>;
};


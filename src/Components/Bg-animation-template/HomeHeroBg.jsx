import React, { useMemo } from "react";

const COLORS = [
  "rgba(45, 101, 188, 0.6)",
  "rgba(59, 130, 246, 0.6)",
  "rgba(99, 102, 241, 0.6)",
  "rgba(14, 165, 233, 0.6)"
];

const HomeHeroBg = () => {
  //  Generate colors ONCE per mount
  const shapeColors = useMemo(
    () => Array.from({ length: 12 }, () =>
      COLORS[Math.floor(Math.random() * COLORS.length)]
    ),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20 animate-float-slow"
        style={{ backgroundColor: shapeColors[0] }} />

      <div className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-15 animate-float-medium"
        style={{ backgroundColor: shapeColors[1] }} />

      <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full opacity-10 animate-float-fast"
        style={{ backgroundColor: shapeColors[2] }} />

      <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full opacity-25 animate-float-slow"
        style={{ backgroundColor: shapeColors[3] }} />

      {/* Floating Squares */}
      <div className="absolute top-60 left-1/4 w-8 h-8 opacity-20 animate-rotate-slow"
        style={{ backgroundColor: shapeColors[4], transform: "rotate(45deg)" }} />

      <div className="absolute top-80 right-1/3 w-6 h-6 opacity-15 animate-rotate-medium"
        style={{ backgroundColor: shapeColors[5], transform: "rotate(45deg)" }} />

      <div className="absolute bottom-60 left-1/3 w-10 h-10 opacity-10 animate-rotate-fast"
        style={{ backgroundColor: shapeColors[6], transform: "rotate(45deg)" }} />

      {/* Floating Triangles */}
      <div className="absolute top-32 right-1/4 opacity-20 animate-bounce-slow"
        style={{
          width: 0,
          height: 0,
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderBottom: `26px solid ${shapeColors[7]}`
        }} />

      <div className="absolute bottom-32 left-1/4 opacity-15 animate-bounce-medium"
        style={{
          width: 0,
          height: 0,
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderBottom: `20px solid ${shapeColors[8]}`
        }} />

      {/* Organic Blob Shapes */}
      <div className="absolute top-1/4 left-1/2 w-32 h-32 opacity-5 animate-blob-slow"
        style={{
          backgroundColor: shapeColors[9],
          borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%"
        }} />

      <div className="absolute bottom-1/4 right-1/2 w-40 h-40 opacity-8 animate-blob-medium"
        style={{
          backgroundColor: shapeColors[10],
          borderRadius: "30% 70% 50% 50% / 60% 40% 60% 40%"
        }} />

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full opacity-20 animate-pulse-slow"
        style={{
          background: `radial-gradient(circle, ${shapeColors[11]}, transparent)`
        }} />

      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full opacity-15 animate-pulse-medium"
        style={{
          background: `radial-gradient(circle, ${shapeColors[1]}, transparent)`
        }} />

    </div>
  );
};

export default React.memo(HomeHeroBg);

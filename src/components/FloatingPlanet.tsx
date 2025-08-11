import React from 'react';

interface FloatingPlanetProps {
  size: string;
  color: string;
  position: string;
  animationDelay: string;
}

const FloatingPlanet: React.FC<FloatingPlanetProps> = ({ size, color, position, animationDelay }) => {
  return (
    <div
      className={`absolute ${size} ${color} ${position} rounded-full animate-float opacity-60 pointer-events-none`}
      style={{
        animationDelay,
        boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.3), 0 0 30px rgba(100,255,255,0.3)'
      }}
    >
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
    </div>
  );
};

export default FloatingPlanet;
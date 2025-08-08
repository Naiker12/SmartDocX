import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none bg-black overflow-hidden">
      <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_80%)] animate-pulse blur-2xl opacity-40"></div>
    </div>
  );
};

export default AnimatedBackground;

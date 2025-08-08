import React from 'react';

const Vortex = ({
  backgroundColor = "black",
  className = "",
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full ${className}`}
      style={{
        background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, ${backgroundColor} 100%)`,
        maskImage:
          "radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%)",
      }}
    />
  );
};

export default Vortex;

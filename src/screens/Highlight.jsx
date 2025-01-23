import React, { useState } from "react";
import "./landing.css";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center group ${containerClassName}`}
      onMouseMove={handleMouseMove}
    >
      <div className="background-dot" />
      <div
        className="highlight-mask permanent"
        style={{
          maskImage: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      />
      <div className={`relative z-20 ${className}`}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}) => {
  return (
    <span className={`highlight permanent ${className}`}>
      {children}
    </span>
  );
};

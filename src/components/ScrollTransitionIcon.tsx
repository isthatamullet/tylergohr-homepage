import React from 'react';
import { useParallax } from 'react-scroll-parallax';

const ScrollTransitionIcon: React.FC = () => {
  const parallax = useParallax({
    translateX: [-100, 100], // Moves from left to right
  });

  return (
    <div ref={parallax.ref} className="relative w-16 h-16 mx-auto">
      {/* File Icon */}
      <svg
        className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
      </svg>

      {/* Play Icon */}
      <svg
        className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M8 5v14l11-7L8 5z" />
      </svg>
    </div>
  );
};

export default ScrollTransitionIcon;
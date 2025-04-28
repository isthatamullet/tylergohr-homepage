import React, { useState } from 'react';

interface Sphere {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  depth: number;
}

interface ParallaxSpheresProps {
  count?: number;
  scrollProgress: number;
}

const ParallaxSpheres: React.FC<ParallaxSpheresProps> = ({ count = 15, scrollProgress }) => {
  const [spheres] = useState<Sphere[]>(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 150 + Math.random() * 300, // Increased base size
      color: [
        'from-teal-500/60 to-teal-500/40',
        'from-gold-500/60 to-gold-500/40',
        'from-mint-500/60 to-mint-500/40',
        'from-accent-blue/60 to-accent-blue/40',
        'from-accent-green/60 to-accent-green/40',
      ][Math.floor(Math.random() * 5)],
      depth: 0.8 + Math.random() * 2, // Increased depth range for stronger parallax
    }))
  );

  return (
    <>
      {spheres.map((sphere) => (
        <div
          key={sphere.id}
          className={`absolute rounded-full bg-gradient-to-br ${sphere.color} blur-2xl`}
          style={{
            left: `${sphere.x}%`,
            top: `${sphere.y}%`,
            width: sphere.size,
            height: sphere.size,
            transform: `translateY(${scrollProgress * 125 * sphere.depth}px)`, // Increased multiplier for stronger effect
            transition: 'transform 0.1s linear',
            opacity: 0.9, // Increased opacity
            mixBlendMode: 'screen',
            willChange: 'transform',
          }}
        />
      ))}
    </>
  );
};

export default ParallaxSpheres;
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { throttle } from '../utils/throttle';

interface StreamElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  isLine: boolean;
  isActive: boolean;
  angle: number;
  opacity: number;
  scale: number;
}

interface DataStreamProps {
  isVisible: boolean;
  scrollProgress: number;
}

const ELEMENT_POOL_SIZE = 50;
const ANIMATION_FPS = 60;
const FRAME_TIME = 1000 / ANIMATION_FPS;

const DataStream: React.FC<DataStreamProps> = ({ isVisible, scrollProgress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastFrameTimeRef = useRef<number>(0);
  const [elements, setElements] = useState<StreamElement[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const speedMultiplier = useRef(1);

  // Initialize element pool with optimized properties
  useEffect(() => {
    const generateElements = (count: number) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (i % 2 === 0 ? 4 : 8) + (i % 2 === 0 ? 2 : 4),
        speed: 0.5 + Math.random() * 1.5,
        isLine: i % 2 === 0,
        isActive: false,
        angle: Math.random() * 360,
        opacity: 0.6,
        scale: 1,
      }));
    };

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const elementCount = Math.min(mediaQuery.matches ? 35 : 50, ELEMENT_POOL_SIZE);
    setElements(generateElements(elementCount));

    const handleResize = throttle(() => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    }, 150);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update animation speed based on scroll progress
  useEffect(() => {
    if (isVisible) {
      speedMultiplier.current = 1 + (scrollProgress * 0.2);
    }
  }, [isVisible, scrollProgress]);

  const updatePositions = useCallback((timestamp: number) => {
    if (timestamp - lastFrameTimeRef.current < FRAME_TIME) {
      animationRef.current = requestAnimationFrame(updatePositions);
      return;
    }
    lastFrameTimeRef.current = timestamp;

    setElements(prevElements => 
      prevElements.map(element => {
        if (element.isActive) {
          const targetScale = 1.2;
          const targetOpacity = 1;
          return {
            ...element,
            scale: element.scale + (targetScale - element.scale) * 0.1,
            opacity: element.opacity + (targetOpacity - element.opacity) * 0.1,
          };
        }

        // Calculate smooth circular motion with dynamic speed
        const newAngle = element.angle + (element.speed * speedMultiplier.current);
        const radius = Math.min(dimensions.width, dimensions.height) * 0.4;
        const angleRad = (newAngle + scrollProgress * 15) * Math.PI / 180;
        
        return {
          ...element,
          angle: newAngle,
          x: 50 + Math.cos(angleRad) * radius / dimensions.width * 100,
          y: 50 + Math.sin(angleRad) * radius / dimensions.height * 100,
          scale: 0.95 + (scrollProgress * 0.1),
          opacity: 0.8 + (scrollProgress * 0.2),
        };
      })
    );

    animationRef.current = requestAnimationFrame(updatePositions);
  }, [dimensions, scrollProgress]);

  useEffect(() => {
    if (isVisible) {
      animationRef.current = requestAnimationFrame(updatePositions);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, updatePositions]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[60vh] bg-black/10 backdrop-blur-sm rounded-xl overflow-hidden"
      style={{ 
        contain: 'strict',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      {elements.map(element => (
        <div
          key={element.id}
          className={`absolute cursor-pointer transition-transform duration-300 ease-out
            ${element.isActive ? 'bg-teal' : 'bg-white/60'}
            ${element.isLine ? 'rounded-sm' : 'rounded-full'}
          `}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.isLine ? `${element.size * 2}px` : `${element.size}px`,
            height: element.isLine ? '2px' : `${element.size}px`,
            opacity: element.opacity,
            transform: `
              translate(-50%, -50%)
              rotate(${element.angle}deg)
              scale(${element.scale})
              translateZ(0)
            `,
            willChange: 'transform, opacity',
            touchAction: 'none',
            transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      ))}
    </div>
  );
};

export default DataStream;
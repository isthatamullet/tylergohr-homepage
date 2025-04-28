import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fadeThreshold = viewportHeight * 0.3;
      
      // Calculate opacity based on scroll position
      const newOpacity = Math.max(0, 1 - (scrollPosition / fadeThreshold));
      setOpacity(newOpacity);
      setIsVisible(scrollPosition < viewportHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render if not visible
  if (!isVisible || opacity <= 0) return null;

  return (
    <div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 animate-bounce-gentle pointer-events-none"
      style={{ 
        opacity,
        transition: 'opacity 0.3s ease-out',
        willChange: 'opacity, transform'
      }}
    >
      <ChevronDown 
        size={32} 
        className="text-teal"
        style={{ 
          filter: 'drop-shadow(0 0 8px rgba(100, 255, 218, 0.3))'
        }}
      />
    </div>
  );
};

export default ScrollIndicator;
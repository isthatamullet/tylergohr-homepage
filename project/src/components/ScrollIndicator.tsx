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

      const newOpacity = Math.max(0, 1 - (scrollPosition / fadeThreshold));
      setOpacity(newOpacity);
      setIsVisible(scrollPosition < viewportHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call handler once initially in case user loads already scrolled down
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render if not visible or fully faded
  if (!isVisible || opacity <= 0) return null;

  return (
    <div
      // --- UPDATED className for alternative centering ---
      className="fixed bottom-8 left-0 right-0 w-8 mx-auto z-40 animate-bounce-gentle pointer-events-none"
      // -------------------------------------------------
      style={{
        opacity,
        transition: 'opacity 0.3s ease-out',
        willChange: 'opacity' // Removed transform from willChange as it's not animated here
      }}
    >
      {/* Ensure icon itself fills the div or is centered if needed */}
      <ChevronDown
        size={32} // w-8 h-8
        className="text-teal block" // Added 'block' just in case
        style={{
          filter: 'drop-shadow(0 0 8px rgba(100, 255, 218, 0.3))'
        }}
      />
    </div>
  );
};

export default ScrollIndicator;
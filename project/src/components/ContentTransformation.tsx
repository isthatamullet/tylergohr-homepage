import React, { useRef, useEffect, useState } from 'react';
// No Link import needed
import DataStream from './DataStream';

const ContentTransformation: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // REMOVED contentRef
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  // REMOVED contentHeight state
  // REMOVED isMobile state

  // Simplified Effect for Intersection Observer (visibility) & Scroll Progress ONLY
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Observe visibility
    );

    const handleScroll = () => {
        // Scroll progress calculation remains the same
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        setScrollProgress(progress);
    };

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      intersectionObserver.observe(currentSectionRef);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Cleanup function
    return () => {
      if (currentSectionRef) {
        intersectionObserver.unobserve(currentSectionRef);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  // Run only once on mount
  }, []); // Dependency array is empty

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="py-32 bg-navy-light relative overflow-hidden content-visibility-auto mb-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/50 via-transparent to-navy-light/80 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-20">
            <span className="text-white">Content </span>
            <span className="text-teal">Transformation</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto relative z-20">
            Watch as chaotic digital assets transform into organized, structured content ready for multi-platform delivery.
          </p>
        </div>

        {/* Using original gap-8 */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Data Stream Component Container */}
          <div
            // --- UPDATED className: Simpler, uses fixed height on md+ ---
            className={`relative w-full transition-opacity duration-500 ease-out
                      md:w-[45%] lg:w-[40%]
                      min-w-[300px] max-w-[600px] // Keep width constraints
                      order-2 md:order-1
                      aspect-square md:aspect-auto // Square mobile, auto ratio desktop
                      md:sticky // Sticky positioning medium and up
                      md:h-[500px] lg:h-[550px] // *** ADDED Fixed heights for md and lg ***
                      md:self-start // Prevent stretching on desktop flex row
                    `}
            // -----------------------------------------------------------
            // --- UPDATED style: Removed height property ---
            style={{
              // height removed - letting classes handle it
              position: 'sticky', // Keep sticky
              top: '6rem', // Keep sticky top offset
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            }}
            // -------------------------------------------
          >
            <div className="relative h-full"> {/* h-full should work with fixed parent height */}
              <DataStream isVisible={isVisible} scrollProgress={scrollProgress} />
            </div>
          </div>

          {/* Content Section (No longer needs ref for height) */}
          <div
            // ref={contentRef} // Removed ref
            className="w-full md:w-[55%] lg:w-1/2 md:ml-8 order-1 md:order-2 relative z-20"
          >
            <div className="bg-navy-light/95 backdrop-blur-md p-6 rounded-xl lg:bg-transparent lg:p-0">
               {/* ... Text Content ... */}
               <h3 className="text-2xl font-bold mb-4 text-white">Digital Order in Motion</h3>
               <p className="text-gray-300 mb-6">...</p>
               <ul className="space-y-4 mb-8">...</ul>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTransformation;
import React, { useRef, useEffect, useState } from 'react';
import DataStream from './DataStream';

// Helper function to check if mobile (adjust breakpoint if needed)
const isMobileScreen = () => typeof window !== 'undefined' && window.innerWidth < 768; // 768px = md breakpoint

const ContentTransformation: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  // --- Re-introduce isMobile state ---
  const [isMobile, setIsMobile] = useState(isMobileScreen());
  // -----------------------------------

  // --- Re-introduce effect to handle screen resize ---
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileScreen());
      // No need to recalculate height here, ResizeObserver handles it
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // ---------------------------------------------

  // --- Effect for observers and height calculation via ResizeObserver ---
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Use a small threshold for visibility
    );

    const handleScroll = () => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        setScrollProgress(progress);
    };

    // --- ResizeObserver setup remains the same ---
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const height = entry.contentRect.height;
            // Only update if height is significantly different (optional optimization)
            setContentHeight(currentHeight => Math.abs(currentHeight - height) > 1 ? height : currentHeight);
        }
    });
    // ------------------------------------------

    const currentSectionRef = sectionRef.current;
    const currentContentRef = contentRef.current;

    if (currentSectionRef) {
      intersectionObserver.observe(currentSectionRef);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Observe contentRef for size changes
    if (currentContentRef) {
        resizeObserver.observe(currentContentRef);
        // Set initial height
        setContentHeight(currentContentRef.offsetHeight);
    }

    // Cleanup function
    return () => {
      if (currentSectionRef) {
        intersectionObserver.unobserve(currentSectionRef);
      }
      if (currentContentRef) {
          resizeObserver.unobserve(currentContentRef); // Use unobserve
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
           {/* ... Headings ... */}
           <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-20">
            <span className="text-white">Content </span>
            <span className="text-teal">Transformation</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto relative z-20">...</p>
        </div>

        {/* Using original gap-8 */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Data Stream Component Container */}
          <div
            // Apply aspect-square on mobile, undo on md. Apply sticky on md.
            className={`relative w-full transition-opacity duration-500 ease-out // Removed duration-700 for potentially faster style application
                      md:w-[45%] lg:w-[40%]
                      min-w-[300px] max-w-[600px] // Constrain min/max width
                      order-2 md:order-1
                      aspect-square md:aspect-auto // Control aspect ratio responsively
                      md:sticky // Sticky only on medium+
                    `}
            // Apply height style ONLY when NOT mobile. Let aspect-square work on mobile.
            style={{
              height: !isMobile && contentHeight > 0 ? `${contentHeight}px` : undefined, // Conditional Height
              position: 'sticky', // Keep sticky, browser ignores if not applicable
              top: '6rem',
              opacity: isVisible ? 1 : 0,
              // Keep transform for entry animation
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            <div className="relative h-full">
              <DataStream isVisible={isVisible} scrollProgress={scrollProgress} />
            </div>
          </div>

          {/* Content Section (Observed by ResizeObserver) */}
          <div
            ref={contentRef}
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
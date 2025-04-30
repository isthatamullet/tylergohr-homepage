import React, { useRef, useEffect, useState } from 'react';
// No Link import needed
import DataStream from './DataStream';

// Helper function removed as state was removed

const ContentTransformation: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  // Removed isMobile state and contentHeight state

  // Simplified Effect for Intersection Observer (visibility) & Scroll Progress ONLY
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const handleScroll = () => {
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
    return () => {
      if (currentSectionRef) {
        intersectionObserver.unobserve(currentSectionRef);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run only once on mount

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="py-32 bg-navy-light relative overflow-hidden mb-16" // Removed content-visibility-auto
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

        {/* Original gap-8 */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Data Stream Component Container */}
          <div
            // --- CORRECTED className (invalid comment removed) ---
            className={`relative w-full transition-opacity duration-500 ease-out
                      md:w-[45%] lg:w-[40%]
                      min-w-[300px] max-w-[600px]
                      order-2 md:order-1
                      aspect-square md:aspect-auto
                      md:h-[500px] lg:h-[550px]
                      md:sticky
                      md:self-start
                      -mt-24 md:mt-0
                    `}
            // --------------------------------------------------
            style={{
              position: 'sticky',
              top: '6rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            <div className="relative h-full bg-black/10 backdrop-blur-sm rounded-xl overflow-hidden flex items-center justify-center">
              <DataStream isVisible={isVisible} scrollProgress={scrollProgress} />
            </div>
          </div>

          {/* Content Section */}
          <div
            className="w-full md:w-[55%] lg:w-1/2 md:ml-8 order-1 md:order-2 relative z-20"
          >
            <div className="bg-navy-light/95 backdrop-blur-md p-6 rounded-xl lg:bg-transparent lg:p-0">
               {/* --- RESTORED Content --- */}
               <h3 className="text-2xl font-bold mb-4 text-white">Digital Order in Motion</h3>
               <p className="text-gray-300 mb-6">
                 Our content transformation process brings structure and organization to your digital assets. We implement:
               </p>
               <ul className="space-y-4 mb-8">
                 {[
                   'Intelligent metadata schemas for enhanced discoverability',
                   'Cross-platform delivery pipelines optimized for performance',
                   'AI-powered automated tagging systems',
                   'Structured content organization frameworks',
                   'Real-time content synchronization',
                   'Advanced search and filtering capabilities'
                 ].map((item, index) => (
                   <li key={index} className="flex items-start">
                     <div className="h-6 w-6 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center mr-3 mt-0.5">
                       <div className="h-2 w-2 rounded-full bg-teal"></div>
                     </div>
                     <span className="text-gray-200">{item}</span>
                   </li>
                 ))}
               </ul>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                 <div className="bg-navy/30 backdrop-blur-sm rounded-lg p-4 border border-teal/20">
                   <h4 className="text-teal font-semibold mb-2">Efficiency Gains</h4>
                   <p className="text-gray-300 text-sm">Reduce content processing time by up to 60% through automated workflows and intelligent organization.</p>
                 </div>
                 <div className="bg-navy/30 backdrop-blur-sm rounded-lg p-4 border border-teal/20">
                   <h4 className="text-teal font-semibold mb-2">Quality Assurance</h4>
                   <p className="text-gray-300 text-sm">Ensure consistent metadata application and content structure across all platforms.</p>
                 </div>
               </div>
               {/* ----------------------- */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTransformation;
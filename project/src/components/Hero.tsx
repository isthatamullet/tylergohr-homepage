import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Added Link import

const Hero: React.FC = () => {
  const panelsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
       if (!panelsRef.current) return;
      const panels = panelsRef.current.querySelectorAll('.interactive-panel');
      const rect = panelsRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      panels.forEach((panel, index) => {
        const depth = (index + 1) * 5;
        const moveX = (x - 0.5) * depth;
        const moveY = (y - 0.5) * depth;
        (panel as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    const handleScroll = () => {
       if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollDistance = Math.min(viewportHeight, Math.max(0, -rect.top));
      const progress = scrollDistance / viewportHeight;
      setScrollProgress(progress);
    };

    const container = panelsRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen w-full relative overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-light opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(64,158,255,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Text Content */}
          <div className="lg:pr-8 relative z-10 transition-all duration-300 ease-out pt-32 md:pt-24 lg:pt-0 -mt-12 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-300">
              <span className="text-white">Behind the Screens:</span><br />
              <span className="text-teal">The Art</span>{' '}
              <span className="text-teal">of</span>{' '}
              <span className="text-gold">Digital Order</span>
            </h1>
            <p className="text-gray-300 text-lg mb-4 max-w-xl transition-all duration-300 md:text-xl lg:text-lg pr-4 md:pr-8 lg:pr-0">
              Expertly crafted content organization and distribution systems that transform digital chaos into seamless experiences.
            </p>
            <div className="inline-block px-4 py-1 mb-8 rounded-full bg-teal/10 border border-teal/20">
              <span className="text-gold font-medium text-sm tracking-wide flex items-center">
                <span className="w-2 h-2 bg-gold rounded-full mr-2 animate-pulse"></span>
                Emmy Award Winner
              </span>
            </div>

            {/* --- UPDATED Button Container Div --- */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* ------------------------------------ */}
              {/* --- UPDATED to use Link --- */}
              <Link
                to="/#services"
                className="px-6 py-3 bg-teal text-navy font-medium rounded-md hover:bg-teal-dark transition-all duration-300 shadow-lg shadow-teal/20"
              >
                Explore Services
              </Link>
              <Link
                to="/#contact"
                className="px-6 py-3 bg-transparent border border-teal text-teal font-medium rounded-md hover:bg-teal/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
              {/* --------------------------- */}
            </div>
          </div>

          {/* Animation Container */}
          <div
            ref={panelsRef}
            // Using original height classes
            className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center transition-all duration-700 ease-out -mt-16 md:mt-0 lg:mt-0"
            style={{
              transform: `scale(${1 + scrollProgress * 0.3})`,
              opacity: 1 - scrollProgress * 0.5,
              zIndex: 0
            }}
          >
            {/* Inner elements */}
            <div className="interactive-panel absolute w-[70%] h-[70%] bg-accent-blue/20 rounded-xl border border-accent-blue/30 shadow-xl backdrop-blur-sm transition-transform duration-700 ease-out"></div>
            <div className="interactive-panel absolute w-[80%] h-[80%] bg-accent-green/20 rounded-xl border border-accent-green/30 shadow-xl backdrop-blur-sm transition-transform duration-700 ease-out"></div>
            <div className="interactive-panel absolute w-[90%] h-[90%] bg-accent-red/20 rounded-xl border border-accent-red/30 shadow-xl backdrop-blur-sm transition-transform duration-700 ease-out"></div>
            <div className="absolute inset-10 grid grid-cols-3 grid-rows-3 gap-3 opacity-90">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={`rounded-md border ${i % 3 === 0 ? 'border-accent-red/50 bg-accent-red/10' : i % 3 === 1 ? 'border-accent-green/50 bg-accent-green/10' : 'border-accent-blue/50 bg-accent-blue/10'} animate-pulse-slow`} style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
            <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-lg bg-teal/30 border border-teal/50 animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-16 h-8 rounded-lg bg-gold/20 border border-gold/40 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-8 h-16 rounded-lg bg-accent-green/20 border border-accent-green/40 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useRef, useEffect } from 'react';
import { portfolioItems } from '../data/siteData';
import * as Icons from 'lucide-react';
import ParallaxSpheres from './ParallaxSpheres';

const PortfolioGrid: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={20} /> : null;
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 
        (viewportHeight - rect.top) / (viewportHeight + rect.height)
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,215,0,0.15)_0%,rgba(0,0,0,0)_70%)] z-0"></div>
      
      <ParallaxSpheres scrollProgress={scrollProgress} count={20} />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-accent-blue">Portfolio</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transformative projects that have reshaped content management and distribution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map(item => (
            <div
              key={item.id}
              onClick={() => toggleExpand(item.id)}
              className={`bg-navy-light/70 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-500 group cursor-pointer transform ${
                expandedId === item.id ? 'scale-105 shadow-2xl z-10' : 'hover:scale-102'
              }`}
            >
              <div 
                className="h-48 relative overflow-hidden"
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/20 border border-accent-blue/30 flex items-center justify-center mr-4 text-accent-blue">
                    {getIcon(item.icon)}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-accent-blue transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={`mt-4 space-y-2 transition-all duration-500 ${
                  expandedId === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {item.details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-accent-blue mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
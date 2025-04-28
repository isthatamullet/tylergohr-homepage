import React, { useState, useRef, useEffect } from 'react';
import { experiences } from '../data/siteData';
import * as Icons from 'lucide-react';
import ParallaxSpheres from './ParallaxSpheres';

const ExperienceGrid: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={24} /> : null;
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
    <section ref={sectionRef} id="experience" className="py-20 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.1)_0%,rgba(0,0,0,0)_50%)] z-0"></div>
      
      <ParallaxSpheres scrollProgress={scrollProgress} />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Industry </span>
            <span className="text-gold">Experience</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Proven expertise with leading media and entertainment companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map(exp => (
            <div
              key={exp.id}
              onClick={() => toggleExpand(exp.id)}
              className={`bg-navy/80 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-500 group cursor-pointer transform ${
                expandedId === exp.id ? 'scale-105 shadow-2xl z-10' : 'hover:scale-102'
              }`}
            >
              <div className={`h-3 w-full bg-${exp.color}`}></div>
              <div className="p-6">
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-lg bg-${exp.color}/20 border border-${exp.color}/30 flex items-center justify-center mr-4 text-${exp.color} group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(exp.icon)}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-gold transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-teal mb-4 text-sm">
                      {exp.role}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {exp.description}
                </p>

                <div className={`mt-4 space-y-2 transition-all duration-500 ${
                  expandedId === exp.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {exp.details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`h-2 w-2 rounded-full bg-${exp.color} mt-2 mr-3 flex-shrink-0`}></div>
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

export default ExperienceGrid;
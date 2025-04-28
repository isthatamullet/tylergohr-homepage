import React, { useState, useRef, useEffect } from 'react';
import { services } from '../data/siteData';
import * as Icons from 'lucide-react';
import ParallaxSpheres from './ParallaxSpheres';

const ServicesGrid: React.FC = () => {
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
    <section ref={sectionRef} id="services" className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(100,255,218,0.1)_0%,rgba(0,0,0,0)_50%)] z-0"></div>
      
      <ParallaxSpheres scrollProgress={scrollProgress} />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-teal">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital content solutions designed to bring order and efficiency to your media ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.id}
              onClick={() => toggleExpand(service.id)}
              className={`bg-navy-light/70 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-teal/30 transition-all duration-300 shadow-lg hover:shadow-teal/5 group cursor-pointer transform ${
                expandedId === service.id ? 'scale-105 shadow-teal/20 z-10' : 'hover:scale-102'
              }`}
            >
              <div className={`w-14 h-14 rounded-lg bg-${service.color}/10 border border-${service.color}/30 flex items-center justify-center mb-6 text-${service.color} group-hover:bg-${service.color}/20 transition-all duration-300`}>
                {getIcon(service.icon)}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>

              <div className={`mt-4 space-y-2 transition-all duration-500 ${
                expandedId === service.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                {service.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`h-2 w-2 rounded-full bg-${service.color} mt-2 mr-3 flex-shrink-0`}></div>
                    <p className="text-gray-300 text-sm">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
import React from 'react';
import { experiences } from '../data/siteData';
import * as Icons from 'lucide-react';

const ExperienceGrid: React.FC = () => {
  // Dynamic icon rendering
  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={24} /> : null;
  };

  return (
    <section id="experience" className="py-20 bg-navy-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.1)_0%,rgba(0,0,0,0)_50%)] z-0"></div>
      
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
              className="bg-navy/80 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-white/10 hover:border-gold/30"
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
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-gold hover:text-gold-light transition-colors duration-300"
                >
                  Learn more <Icons.ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;
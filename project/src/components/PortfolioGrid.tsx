import React, { useState } from 'react';
import { portfolioItems } from '../data/siteData';
import * as Icons from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PortfolioGrid: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={20} /> : null;
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="portfolio" className="py-20 bg-navy relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(33,150,243,0.1)_0%,rgba(0,0,0,0)_70%)] z-0"></div>
      
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
              className={`group relative overflow-hidden rounded-xl transition-all duration-500 ${
                expandedId === item.id ? 'h-auto' : 'h-80'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-75"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                  {getIcon(item.icon)}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-4 max-w-xs">
                  {item.description}
                </p>
                
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="inline-flex items-center text-teal hover:text-teal-light transition-colors duration-300"
                >
                  {expandedId === item.id ? (
                    <>Show Less <ChevronUp size={16} className="ml-1" /></>
                  ) : (
                    <>Learn More <ChevronDown size={16} className="ml-1" /></>
                  )}
                </button>

                <div className={`mt-4 space-y-2 transition-all duration-500 ${
                  expandedId === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {item.details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-3 flex-shrink-0"></div>
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
import React from 'react';
import { portfolioItems } from '../data/siteData';
import * as Icons from 'lucide-react';

const PortfolioGrid: React.FC = () => {
  // Dynamic icon rendering
  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={20} /> : null;
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
              className="group relative h-80 overflow-hidden rounded-xl"
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
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-teal hover:text-teal-light transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  View case study <Icons.ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
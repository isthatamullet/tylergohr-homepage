import React from 'react';
import { trustItems } from '../data/siteData';

const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-navy-light relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light z-0"></div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-white">Trusted by </span>
            <span className="text-teal">Industry Leaders</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Partnering with top media and entertainment companies to deliver exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {trustItems.map(item => (
            <div
              key={item.id}
              className="group flex items-center justify-center"
            >
              <div className="h-20 w-full max-w-[160px] bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center p-4 hover:bg-white/10 transition-all duration-300">
                <span className="text-white font-semibold opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
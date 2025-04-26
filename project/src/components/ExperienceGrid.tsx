import React, { useState } from 'react';
import { experiences } from '../data/siteData'; // Assuming details is now part of ExperienceItem type
import * as Icons from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Define the type explicitly if not already imported and updated in types/index.ts
interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  description: string;
  color: string;
  icon: string;
  details?: string[]; // Added optional details field
}

const ExperienceGrid: React.FC = () => {
  // State to track the ID of the currently expanded card
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Function to get Lucide icon component by name
  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={24} /> : null;
  };

  // Function to toggle the expanded state of a card
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-navy-dark relative">
      {/* Background effect */}
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
          {/* Map through experiences data */}
          {(experiences as ExperienceItem[]).map(exp => (
            // --- CARD CONTAINER ---
            <div
              key={exp.id}
              // Apply base styles, hover effect, and conditional styles for expansion
              className={`bg-navy/80 backdrop-blur-sm rounded-lg overflow-hidden group border border-white/10 hover:border-gold/30 transition-[transform,box-shadow] duration-300 ease-in-out ${ // Define transitions
                expandedId === exp.id
                  ? 'scale-[1.02] shadow-xl z-10' // Expanded: pop out effect (scale, shadow, z-index)
                  : 'scale-100 shadow-md z-0'     // Collapsed: default state
              }`}
            >
              {/* Top color bar */}
              <div className={`h-3 w-full bg-${exp.color}`}></div>

              <div className="p-6">
                <div className="flex items-start">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-${exp.color}/20 border border-${exp.color}/30 flex items-center justify-center mr-4 text-${exp.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {getIcon(exp.icon)}
                  </div>

                  {/* Title and Role */}
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-gold transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-teal mb-4 text-sm">
                      {exp.role}
                    </p>
                  </div>
                </div>

                {/* Initial Description */}
                <p className="text-gray-300 mb-4">
                  {exp.description}
                </p>

                {/* Learn More / Show Less Button */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="inline-flex items-center text-gold hover:text-gold-light transition-colors duration-300"
                  aria-expanded={expandedId === exp.id} // Accessibility
                  aria-controls={`details-${exp.id}`} // Accessibility
                >
                  {expandedId === exp.id ? (
                    <>Show Less <ChevronUp size={16} className="ml-1" /></>
                  ) : (
                    <>Learn More <ChevronDown size={16} className="ml-1" /></>
                  )}
                </button>

                {/* --- EXPANDABLE DETAILS SECTION --- */}
                <div
                  id={`details-${exp.id}`} // Accessibility
                  // Apply transitions and conditional max-height/opacity
                  className={`mt-4 space-y-2 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                    expandedId === exp.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {/* Map through details if they exist */}
                  {exp.details?.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`h-2 w-2 rounded-full bg-${exp.color} mt-2 mr-3 flex-shrink-0`}></div>
                      <p className="text-gray-300 text-sm">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            // --- END CARD CONTAINER ---
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;

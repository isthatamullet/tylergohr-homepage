import React from 'react';
import { skillGroups } from '../data/siteData';
import { Code2, Brain, Workflow, Users } from 'lucide-react';

const SkillsGrid: React.FC = () => {
  const getIcon = (groupId: number) => {
    switch (groupId) {
      case 1:
        return <Brain size={24} />;
      case 2:
        return <Workflow size={24} />;
      case 3:
        return <Code2 size={24} />;
      case 4:
        return <Users size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 bg-navy-light relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(100,255,218,0.1)_0%,rgba(0,0,0,0)_70%)] z-0"></div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Skills & </span>
            <span className="text-mint">Expertise</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive technical and strategic capabilities in digital content management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map(group => (
            <div
              key={group.id}
              className="bg-navy/80 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-mint/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-mint/10 border border-mint/30 flex items-center justify-center mb-6 text-mint">
                {getIcon(group.id)}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                {group.title}
              </h3>
              
              <ul className="space-y-3">
                {group.skills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-mint mt-2 mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
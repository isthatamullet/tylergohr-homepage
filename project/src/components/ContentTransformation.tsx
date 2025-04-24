import React, { useRef, useEffect, useState } from 'react';

const ContentTransformation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const [containerWidth, setContainerWidth] = useState(0);
  
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      
      if (scrollProgress > 0 && scrollProgress < 1) {
        // Adjust grid dimensions based on container width
        const columns = containerWidth < 400 ? 3 : 5;
        const spacing = containerWidth < 400 ? 50 : 80;
        
        elementsRef.current.forEach((element, index) => {
          if (!element) return;
          
          // Calculate grid position
          const col = index % columns;
          const row = Math.floor(index / columns);
          
          // Center grid within container
          const gridX = (col - Math.floor(columns / 2)) * spacing;
          const gridY = (row - 1) * spacing;
          
          // Interpolate between random and grid positions
          const randomX = element.dataset.randomX ? parseFloat(element.dataset.randomX) : 0;
          const randomY = element.dataset.randomY ? parseFloat(element.dataset.randomY) : 0;
          
          const x = randomX + (gridX - randomX) * scrollProgress;
          const y = randomY + (gridY - randomY) * scrollProgress;
          
          // Scale parallax effect based on container width
          const depthScale = containerWidth < 400 ? 0.5 : 1;
          const depth = (index % 3 + 1) * 20 * depthScale;
          const parallaxY = (0.5 - scrollProgress) * depth;
          
          // Adjust scale and rotation based on container width
          const maxScale = containerWidth < 400 ? 1.1 : 1.2;
          const scale = 1 + Math.abs(0.5 - scrollProgress) * (maxScale - 1);
          const rotate = (1 - scrollProgress) * (Math.random() * 360);
          
          element.style.transform = `translate(${x}px, ${y + parallaxY}px) rotate(${rotate}deg) scale(${scale})`;
          element.style.opacity = (0.4 + scrollProgress * 0.6).toString();
        });
      }
    };
    
    // Initialize random positions scaled to container width
    elementsRef.current.forEach((element) => {
      if (!element) return;
      const spreadFactor = containerWidth < 400 ? 150 : 300;
      const randomX = (Math.random() - 0.5) * spreadFactor;
      const randomY = (Math.random() - 0.5) * spreadFactor;
      element.dataset.randomX = randomX.toString();
      element.dataset.randomY = randomY.toString();
      element.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
    });
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerWidth]);
  
  const getElementStyles = (element: { color: string, shape: string, width: number, height: number }) => {
    const baseClasses = `absolute shadow-lg backdrop-blur-sm transition-all duration-700 ease-out`;
    const shapeClass = element.shape === 'circle' ? 'rounded-full' : 'rounded-md';
    const colorClasses = `bg-${element.color}/20 border border-${element.color}/40`;
    
    return `${baseClasses} ${shapeClass} ${colorClasses}`;
  };
  
  const floatingElements = Array.from({ length: 15 }, (_, i) => {
    const colors = ['teal', 'gold', 'accent-green'];
    const shapes = ['square', 'rectangle', 'circle'];
    const color = colors[i % colors.length];
    const shape = shapes[i % shapes.length];
    // Scale base size with container width
    const baseSize = containerWidth < 400 ? 20 : 30;
    const size = baseSize + Math.random() * baseSize;
    const width = shape === 'rectangle' ? size * 1.5 : size;
    const height = shape === 'rectangle' ? size * 0.75 : size;
    
    return { color, shape, width, height, id: i };
  });
  
  return (
    <section id="transformation" className="py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/50 via-transparent to-navy-light/80 z-0"></div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Content </span>
            <span className="text-teal">Transformation</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch as chaotic digital assets transform into organized, structured content ready for multi-platform delivery.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <div 
              ref={containerRef}
              className="relative h-[400px] w-full bg-navy-dark/50 rounded-xl border border-white/10 shadow-lg overflow-hidden flex items-center justify-center group perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-red/10 via-accent-green/10 to-accent-blue/10 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {floatingElements.map((element, index) => (
                <div
                  key={element.id}
                  ref={el => el && (elementsRef.current[index] = el)}
                  className={getElementStyles(element)}
                  style={{
                    width: `${element.width}px`,
                    height: `${element.height}px`,
                    opacity: 0.4,
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-white">Digital Order in Motion</h3>
            <p className="text-gray-300 mb-6">
              Our content transformation process brings structure and organization to your digital assets. We implement:
            </p>
            
            <ul className="space-y-4 mb-8">
              {['Intelligent metadata schemas', 'Cross-platform delivery pipelines', 'Automated tagging systems', 'AI-powered content organization'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-teal"></div>
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTransformation;
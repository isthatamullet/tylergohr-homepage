import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-r from-teal/20 to-teal/5 border border-teal/30">
        <span className="text-white font-semibold text-xl">TG</span>
      </div>
      <span className="ml-2 text-sm font-light tracking-wider hidden sm:inline-block">
        The Art of Digital Order
      </span>
    </a>
  );
};

export default Logo;
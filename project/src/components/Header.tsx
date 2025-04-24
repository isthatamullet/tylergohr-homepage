import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/siteData';
import Logo from './Logo';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={item.href}
                  className={`text-white hover:text-teal transition-colors duration-300 relative px-1 py-2 ${
                    activeSection === item.id ? 'font-semibold' : 'font-normal'
                  }`}
                >
                  {item.title}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal via-gold to-accent-red" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-dark fixed inset-0 z-50 pt-20">
          <nav className="container mx-auto px-6">
            <ul className="flex flex-col space-y-6 text-center">
              {navItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={item.href}
                    className={`text-white text-xl hover:text-teal transition-colors duration-300 block py-2 ${
                      activeSection === item.id ? 'font-semibold' : 'font-normal'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                    {activeSection === item.id && (
                      <span className="block mx-auto mt-1 w-12 h-0.5 bg-gradient-to-r from-teal via-gold to-accent-red" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../data/siteData'; // Assuming format: [{ id: 'home', title: 'Home'}, { id: 'services', title: 'Services'}, ...]
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- This useEffect hook handles scroll detection and mobile menu body lock ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    // This part prevents body scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Ensure body scroll is re-enabled if component unmounts while menu is open
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]); // This hook depends on mobileMenuOpen state
  // ---------------------------------------------------------------------------

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Function to generate correct path for page routes OR homepage sections
  const getPath = (itemId: string): string => {
    if (itemId === 'home') {
      return '/';
    }
    // Other items link to root + hash, e.g., '/#services'
    return `/#${itemId}`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo links to home */}
        <Link to="/" onClick={handleNavClick}>
           <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(item => (
              <li key={item.id}>
                <Link
                  to={getPath(item.id)} // Uses updated getPath
                  className="text-white hover:text-teal transition-colors duration-300 relative px-1 py-2 font-normal"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden w-12 h-12 relative focus:outline-none focus:ring-2 focus:ring-teal rounded-lg bg-transparent"
          onClick={handleMenuToggle}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          style={{ touchAction: 'manipulation' }}
        >
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5">
             <span
               className={`absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ease-in-out ${
                 mobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
               }`}
             />
             <span
               className={`absolute h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${
                 mobileMenuOpen ? 'opacity-0' : 'opacity-100'
               } translate-y-2`}
             />
             <span
               className={`absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ease-in-out ${
                 mobileMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
               }`}
             />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-navy-dark/98 backdrop-blur-lg transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ top: '0', zIndex: 40 }}
      >
        <nav className="container mx-auto px-6 pt-24">
          <ul className="flex flex-col space-y-8 text-center">
            {navItems.map(item => (
              <li key={item.id}>
                <Link
                  to={getPath(item.id)} // Uses updated getPath
                  className="text-white text-2xl hover:text-teal transition-colors duration-300 block py-2 font-normal"
                  onClick={handleNavClick}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
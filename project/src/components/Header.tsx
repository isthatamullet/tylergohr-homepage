import React, { useState, useEffect } from 'react';
// **** ADD THIS IMPORT ****
import { Link } from 'react-router-dom';
import { navItems } from '../data/siteData'; // Assuming this contains [{ id: 'home', title: 'Home' }, { id: 'services', title: 'Services', href: '#services'}, ...]
import Logo from './Logo';

const Header: React.FC = () => {
  // Removed activeSection state, as scroll-spy logic needs rework for multi-page routing
  // const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Removed active section calculation based on scroll - needs rework for multi-page
    };

    // Prevent body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('scroll', handleScroll);
    // Initialize scroll state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = ''; // Ensure overflow is reset on unmount
    };
  }, [mobileMenuOpen]); // Dependency array only includes mobileMenuOpen now

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    // This function closes the mobile menu when a link is clicked
    setMobileMenuOpen(false);
  };

  // Function to generate the correct path for Link 'to' prop
  const getPath = (itemId: string): string => {
    // Assuming 'home' is the id for the home link in your siteData
    return itemId === 'home' ? '/' : `/#${itemId}`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5' // Keep background when mobile menu is open too
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Use Link for the Logo to go home */}
        <Link to="/" onClick={handleNavClick}>
           <Logo />
        </Link>

        {/* Desktop Navigation - Updated to use <Link> */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(item => (
              <li key={item.id}>
                {/* Replace <a> with <Link> and href with to */}
                <Link
                  to={getPath(item.id)}
                  // Removed dynamic class based on activeSection
                  className="text-white hover:text-teal transition-colors duration-300 relative px-1 py-2 font-normal"
                >
                  {item.title}
                  {/* Removed active section underline indicator */}
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
          {/* Hamburger Icon Lines */}
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

      {/* Mobile Menu Overlay - Updated to use <Link> */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-navy-dark/98 backdrop-blur-lg transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ top: '0', zIndex: 40 }} // Ensure overlay is behind the main header content (z-50) but above page content
      >
        <nav className="container mx-auto px-6 pt-24"> {/* Added more top padding */}
          <ul className="flex flex-col space-y-8 text-center">
            {navItems.map(item => (
              <li
                key={item.id}
                // Simplified animation trigger if needed
              >
                {/* Replace <a> with <Link> and href with to */}
                <Link
                  to={getPath(item.id)}
                   // Removed dynamic class based on activeSection
                  className="text-white text-2xl hover:text-teal transition-colors duration-300 block py-2 font-normal"
                  onClick={handleNavClick} // Keep this to close menu on click
                >
                  {item.title}
                   {/* Removed active section underline indicator */}
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

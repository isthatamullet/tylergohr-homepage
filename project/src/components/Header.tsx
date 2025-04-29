import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/siteData';
import { type NavItem } from '../types'; // Ensure path ../types is correct
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>('home');
  const [clickedItemId, setClickedItemId] = useState<string | null>(null);
  const location = useLocation();

  // useEffect for header background visuals
  useEffect(() => {
    const handleScrollVisuals = () => { setScrolled(window.scrollY > 50); };
    if (mobileMenuOpen) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
    window.addEventListener('scroll', handleScrollVisuals);
    handleScrollVisuals();
    return () => {
      window.removeEventListener('scroll', handleScrollVisuals);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // useEffect for Intersection Observer (Active Link Logic)
  useEffect(() => {
    if (location.pathname === '/') {
      const sectionIds = navItems.map(item => item.id);

      // --- UPDATED: Refined observer options for potentially better stability ---
      const observerOptions = {
        root: null, // relative to document viewport
        // Trigger when section enters/leaves a zone starting 10% from viewport top
        // and ending 20% from viewport bottom (adjust % as needed)
        rootMargin: '-10% 0px -20% 0px',
        threshold: 0 // Trigger as soon as any part crosses the margin boundaries
      };
      // ------------------------------------------------------------------------

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        if (clickedItemId !== null) { return; } // Ignore observer during click/scroll action

        const intersectingEntries = entries.filter(entry => entry.isIntersecting);

        if (intersectingEntries.length > 0) {
          // Sort by position on screen (highest first)
          intersectingEntries.sort((a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top
          );
          // Set the highest visible section within the rootMargin as active
          setActiveSectionId(intersectingEntries[0].target.id);
        } else {
          // Fallback to 'home' if near top (adjust threshold if needed)
          if (window.scrollY < window.innerHeight * 0.3) { // Using 30% of viewport height as threshold
            setActiveSectionId('home');
          }
          // If scrolled past last section & nothing intersects the margin, the last ID will persist
        }
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) { observer.observe(element); }
        else { if (id !== 'home') { console.warn(`Observer target element id="${id}" not found.`); } }
      });

      return () => observer.disconnect();
    } else {
      setActiveSectionId(null); // No section active on non-home pages
    }
  }, [location.pathname, clickedItemId]);


  // Toggles mobile menu visibility
  const handleMenuToggle = () => { setMobileMenuOpen(!mobileMenuOpen); };

  // Handler for Home/Logo clicks
  const handleHomeClick = () => {
    setActiveSectionId('home');
    setClickedItemId('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setMobileMenuOpen(false);
      setClickedItemId(null);
    }, 400);
  };

  // Handler for non-Home mobile link clicks
  const handleMobileLinkClick = (item: NavItem) => {
    setActiveSectionId(item.id);
    setClickedItemId(item.id);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setClickedItemId(null);
    }, 400);
  };

  // Generates path for links
  const getPath = (itemId: string): string => {
    if (itemId === 'home') return '/';
    return `/#${itemId}`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <Link to="/" onClick={handleHomeClick}> <Logo /> </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(item => {
              const isActive = item.id === activeSectionId && location.pathname === '/';
              const path = getPath(item.id);
              return (
                <li key={item.id}>
                  <Link
                    to={path}
                    onClick={item.id === 'home' ? handleHomeClick : undefined}
                    className={`text-white hover:text-teal transition-colors duration-300 relative px-1 py-2 font-normal group ${isActive ? 'active-link' : ''}`}
                  >
                    {item.title}
                     <span className={`absolute bottom-0 left-0 block h-0.5 bg-gradient-to-r from-teal-400 via-lime-400 to-orange-500 transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
              );
            })}
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
             <span className={`absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ease-in-out ${ mobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0' }`} />
             <span className={`absolute h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${ mobileMenuOpen ? 'opacity-0' : 'opacity-100' } translate-y-2`} />
             <span className={`absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ease-in-out ${ mobileMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4' }`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-navy-dark/98 backdrop-blur-lg transition-all duration-500 ease-in-out md:hidden ${ mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none' }`}
        style={{ top: '0', zIndex: 40 }}
      >
        <nav className="container mx-auto px-6 pt-24">
          <ul className="flex flex-col items-center space-y-8 text-center">
            {navItems.map(item => {
               const isScrollActive = item.id === activeSectionId && location.pathname === '/';
               const isClickActive = item.id === clickedItemId;
               const path = getPath(item.id);
              return (
              <li key={item.id}>
                <Link
                  to={path}
                  onClick={item.id === 'home' ? handleHomeClick : () => handleMobileLinkClick(item)}
                  className={`
                    text-2xl hover:text-teal transition-colors duration-300 block py-2 font-normal relative group
                    inline-block px-3
                    ${isScrollActive ? 'text-teal font-semibold' : 'text-white'}
                  `}
                >
                  {item.title}
                  {/* Mobile Underline Span based on scroll OR click */}
                  <span className={`
                    absolute bottom-0 left-0 block h-0.5
                    bg-gradient-to-r from-teal-400 via-lime-400 to-orange-500
                    transition-all duration-300 ease-out
                    ${isScrollActive || isClickActive ? 'w-full' : 'w-0'} {/* Use OR condition */}
                  `}></span>
                </Link>
              </li>
              );
           })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
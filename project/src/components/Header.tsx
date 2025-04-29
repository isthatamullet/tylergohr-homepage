import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/siteData';
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>('home');
  const location = useLocation();

  // useEffect for header background and mobile menu body lock
  useEffect(() => {
    const handleScrollVisuals = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
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
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        let foundActive = false;
        // Prioritize entries that are intersecting
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);

        if (intersectingEntries.length > 0) {
            // If multiple are intersecting, maybe pick the one highest on screen?
            // For now, let's take the last one reported as intersecting
            // (A more robust approach might compare boundingClientRect.top)
            setActiveSectionId(intersectingEntries[intersectingEntries.length - 1].target.id);
            foundActive = true;
        }

        // Fallback to 'home' if near top and no specific section is active
        if (!foundActive && window.scrollY < window.innerHeight * 0.5) {
           setActiveSectionId('home');
        }
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        } else {
          // Only warn if it's not the 'home' id, as Hero might not always be mounted/relevant depending on structure
          if (id !== 'home') {
             console.warn(`IntersectionObserver target element with id "${id}" not found.`);
          }
        }
      });

      return () => observer.disconnect();
    } else {
      setActiveSectionId(null);
    }
  }, [location.pathname]);

  const handleMenuToggle = () => { setMobileMenuOpen(!mobileMenuOpen); };
  const handleNavClick = () => { setMobileMenuOpen(false); };

  const getPath = (itemId: string): string => {
    if (itemId === 'home') return '/';
    return `/#${itemId}`;
  };

  return (
    // --- RESTORED header tag attributes ---
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
    {/* ----------------------------------- */}
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <Link to="/" onClick={handleNavClick}> <Logo /> </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(item => {
              const isActive = item.id === activeSectionId && location.pathname === '/';
              return (
                <li key={item.id}>
                  <Link
                    to={getPath(item.id)}
                    className={`text-white hover:text-teal transition-colors duration-300 relative px-1 py-2 font-normal group ${isActive ? 'active-link' : ''}`}
                  >
                    {item.title}
                     <span className={`absolute bottom-0 left-0 block h-0.5 bg-teal transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

         {/* Mobile Menu Toggle Button */}
         {/* --- RESTORED button tag attributes --- */}
         <button
           className="md:hidden w-12 h-12 relative focus:outline-none focus:ring-2 focus:ring-teal rounded-lg bg-transparent"
           onClick={handleMenuToggle}
           aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
           aria-expanded={mobileMenuOpen}
           aria-controls="mobile-menu"
           style={{ touchAction: 'manipulation' }}
         >
         {/* ------------------------------------ */}
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5">
             <span className={`absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ease-in-out ${ mobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0' }`} />
             <span className={`absolute h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${ mobileMenuOpen ? 'opacity-0' : 'opacity-100' } translate-y-2`} />
             <span className={`absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ease-in-out ${ mobileMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4' }`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {/* --- RESTORED div tag attributes --- */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-navy-dark/98 backdrop-blur-lg transition-all duration-500 ease-in-out md:hidden ${ mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none' }`}
        style={{ top: '0', zIndex: 40 }}
      >
      {/* --------------------------------- */}
        <nav className="container mx-auto px-6 pt-24">
          <ul className="flex flex-col space-y-8 text-center">
            {navItems.map(item => {
               const isActive = item.id === activeSectionId && location.pathname === '/';
              return (
              <li key={item.id}>
                <Link
                  to={getPath(item.id)}
                  className={`text-white text-2xl hover:text-teal transition-colors duration-300 block py-2 font-normal ${isActive ? 'text-teal font-semibold' : ''}`}
                  onClick={handleNavClick}
                >
                  {item.title}
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
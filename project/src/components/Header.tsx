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
    handleScrollVisuals(); // Initialize
    return () => {
      window.removeEventListener('scroll', handleScrollVisuals);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]); // End of first useEffect

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
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);

        if (intersectingEntries.length > 0) {
          intersectingEntries.sort((a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveSectionId(intersectingEntries[0].target.id);
        } else {
          if (window.scrollY < window.innerHeight * 0.5) {
            setActiveSectionId('home');
          }
        }
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        } else {
          if (id !== 'home') {
             console.warn(`IntersectionObserver target element with id "${id}" not found.`);
          }
        }
      });

      return () => observer.disconnect();
    } else {
      setActiveSectionId(null);
    }
  }, [location.pathname]); // End of second useEffect

  const handleMenuToggle = () => { setMobileMenuOpen(!mobileMenuOpen); };
  const handleNavClick = () => { setMobileMenuOpen(false); }; // Closes mobile menu

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleNavClick(); // Also close mobile menu
  };

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
                     {/* Desktop underline uses rainbow gradient */}
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
          <ul className="flex flex-col space-y-8 text-center">
            {navItems.map(item => {
               // Static active state based on scroll/observer
               const isActive = item.id === activeSectionId && location.pathname === '/';
               const path = getPath(item.id);
              return (
              <li key={item.id}>
                <Link
                  to={path}
                  // Note: Click animation logic is NOT included in this test version
                  onClick={item.id === 'home' ? handleHomeClick : handleNavClick}
                  // --- UPDATED: TEMPORARY diagnostic style for active mobile link ---
                  className={`text-white text-2xl hover:text-teal transition-colors duration-300 block py-2 font-normal relative group ${isActive ? 'bg-yellow-500 text-black rounded px-2' : ''}`}
                  // -----------------------------------------------------------------
                >
                  {item.title}
                  {/* No underline span here in this test version */}
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
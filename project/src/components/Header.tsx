import React, { useState, useEffect } from 'react'; // Removed useRef
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import { navItems } from '../data/siteData'; // Assuming format: [{ id: 'home', title: 'Home'}, { id: 'services', title: 'Services'}, ...]
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // --- State to track the ID of the currently active section ---
  const [activeSectionId, setActiveSectionId] = useState<string | null>('home'); // Default to 'home'
  // -------------------------------------------------------------

  const location = useLocation(); // Hook to get current page location

  // --- useEffect for header background and mobile menu body lock ---
  // (This is the one we restored - handles visual header changes)
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

    window.addEventListener('scroll', handleScrollVisuals); // Use a different name
    handleScrollVisuals(); // Initialize

    return () => {
      window.removeEventListener('scroll', handleScrollVisuals);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  // ----------------------------------------------------------------

  // --- useEffect for Intersection Observer (Active Link Logic) ---
  useEffect(() => {
    // Only run observer logic if we are on the homepage
    if (location.pathname === '/') {
      const sectionIds = navItems.map(item => item.id); // Get all IDs including 'home' (assuming hero has id="home")

      const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '-30% 0px -70% 0px', // Trigger when element is in a band approx 30% from top
        threshold: 0 // Trigger as soon as any part enters/leaves the margin
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When a section enters the observed area, set it as active
            setActiveSectionId(entry.target.id);
          }
        });
        // NOTE: This simple version sets the *last* intersecting element as active if multiple intersect.
        // More complex logic could be added to prioritize based on ratio or position if needed.

        // Check if scrolled near top (fallback to 'home') - might need adjustment
        if (window.scrollY < window.innerHeight * 0.3) {
             // If scrolled near top, check if hero (home) is intersecting or force home?
             // Re-query hero state specifically or default to home if nothing else is intersecting high up.
             // Let's refine: if no *section specific* entries are intersecting after scroll check, revert to home
             const intersectingSections = entries.filter(e => e.isIntersecting && e.target.id !== 'home');
             if (intersectingSections.length === 0 && window.scrollY < window.innerHeight * 0.3) {
                 setActiveSectionId('home');
             }
        }
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      // Observe all sections corresponding to navItems
      sectionIds.forEach(id => {
        // --- ASSUMPTION: Your Hero component needs id="home" ---
        // --- Or adjust the logic to observe the correct element for 'home' ---
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        } else {
          console.warn(`IntersectionObserver target element with id "${id}" not found.`);
        }
      });

      // Cleanup function: disconnect observer when component unmounts or path changes
      return () => observer.disconnect();

    } else {
      // If not on the homepage, set no section as active (or maybe 'home' if preferred)
      setActiveSectionId(null); // Or 'home' or based on actual route if needed
    }

  }, [location.pathname]); // Re-run effect if the page path changes
  // -------------------------------------------------------------

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Path generation function (remains the same)
  const getPath = (itemId: string): string => {
    if (itemId === 'home') {
      return '/';
    }
    return `/#${itemId}`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <Link to="/" onClick={handleNavClick}>
           <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(item => {
              // --- Check if this nav item is the currently active section ---
              const isActive = item.id === activeSectionId && location.pathname === '/';
              // -------------------------------------------------------------
              return (
                <li key={item.id}>
                  <Link
                    to={getPath(item.id)}
                    // --- Apply conditional styling ---
                    className={`
                      text-white hover:text-teal transition-colors duration-300 relative px-1 py-2 font-normal group
                      ${isActive ? 'active-link' : ''} {/* Base class for active state */}
                    `}
                    // --------------------------------
                  >
                    {item.title}
                     {/* --- Underline Element for Active State --- */}
                     <span className={`
                       absolute bottom-0 left-0 block h-0.5 bg-teal
                       transition-all duration-300 ease-out
                       ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} {/* Animate width */}
                     `}></span>
                     {/* ----------------------------------------- */}
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
           {/* ... hamburger icon lines ... */}
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
               // --- Also check active state for mobile links ---
               const isActive = item.id === activeSectionId && location.pathname === '/';
               // ----------------------------------------------
              return (
              <li key={item.id}>
                <Link
                  to={getPath(item.id)}
                  // --- Apply conditional styling (e.g., text color) ---
                  className={`
                    text-white text-2xl hover:text-teal transition-colors duration-300 block py-2 font-normal
                    ${isActive ? 'text-teal font-semibold' : ''} {/* Example active style */}
                  `}
                  // ----------------------------------------------------
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
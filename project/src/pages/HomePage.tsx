import React, { lazy, Suspense, useEffect } from 'react'; // Added useEffect
import { useLocation } from 'react-router-dom'; // <--- ADDED THIS IMPORT

// Import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentTransformation from '../components/ContentTransformation';
import ScrollIndicator from '../components/ScrollIndicator';

// --- Import ServicesGrid NORMALLY (keep this for now) ---
import ServicesGrid from '../components/ServicesGrid';
// -----------------------------------

// --- Keep others lazy-loaded ---
const ExperienceGrid = lazy(() => import('../components/ExperienceGrid'));
const PortfolioGrid = lazy(() => import('../components/PortfolioGrid'));
const SkillsGrid = lazy(() => import('../components/SkillsGrid'));
const TrustSection = lazy(() => import('../components/TrustSection'));
const CTASection = lazy(() => import('../components/CTASection'));
const Footer = lazy(() => import('../components/Footer'));
// -----------------------------------------

const HomePage: React.FC = () => {
  // --- ADDED: Get location object to access URL hash ---
  const location = useLocation();
  // ----------------------------------------------------

  // --- ADDED: useEffect hook to handle scrolling to hash targets ---
  useEffect(() => {
    // Check if there is a hash in the URL (e.g., #services)
    if (location.hash) {
      // Get the ID from the hash by removing the '#'
      const id = location.hash.substring(1);

      // Use a short timeout before trying to scroll
      // This helps ensure the element exists in the DOM after navigation/render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Scroll the element into view smoothly, aligning to the top
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // 100ms delay, adjust if needed (0 might work too)
    }
  }, [location.hash]); // Re-run this effect only when the hash changes
  // -------------------------------------------------------------

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />
      <Hero />
      <ScrollIndicator />
      <div className="relative">
        <ContentTransformation />

        {/* Render ServicesGrid directly */}
        <ServicesGrid />

        {/* Keep Suspense for the remaining lazy components */}
        <Suspense fallback={<div className="h-screen bg-navy flex items-center justify-center text-white">Loading Content...</div>}>
          <ExperienceGrid />
          <PortfolioGrid />
          <SkillsGrid />
          <TrustSection />
          <CTASection />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
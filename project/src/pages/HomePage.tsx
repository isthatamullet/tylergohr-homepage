import React, { useEffect } from 'react'; // Removed lazy, Suspense if no longer needed
import { useLocation } from 'react-router-dom';

// --- Import ALL components normally ---
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentTransformation from '../components/ContentTransformation';
import ScrollIndicator from '../components/ScrollIndicator';
import ServicesGrid from '../components/ServicesGrid';
import ExperienceGrid from '../components/ExperienceGrid';
import PortfolioGrid from '../components/PortfolioGrid';
import SkillsGrid from '../components/SkillsGrid'; // Assuming this might be linked too? Import normally if so.
import TrustSection from '../components/TrustSection'; // Assuming this might be linked too? Import normally if so.
import CTASection from '../components/CTASection'; // For 'contact' id
import Footer from '../components/Footer';
// ------------------------------------

const HomePage: React.FC = () => {
  const location = useLocation();

  // useEffect hook for manual scrolling (keep this)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />
      {/* --- Ensure Hero has id="home" --- */}
      <Hero />
      {/* -------------------------------- */}
      <ScrollIndicator />
      <div className="relative">
        <ContentTransformation />
        {/* --- Render all components directly (no Suspense needed if nothing is lazy) --- */}
        <ServicesGrid />      {/* id="services" */}
        <ExperienceGrid />  {/* id="experience" */}
        <PortfolioGrid />   {/* id="portfolio" */}
        <SkillsGrid />      {/* needs id="skills" if linked */}
        <TrustSection />    {/* needs id="trust" if linked */}
        <CTASection />      {/* id="contact" */}
        <Footer />
        {/* --------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default HomePage;
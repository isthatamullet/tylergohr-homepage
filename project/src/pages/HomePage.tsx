import React, { lazy, Suspense } from 'react';

// Import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentTransformation from '../components/ContentTransformation';
import ScrollIndicator from '../components/ScrollIndicator';

// --- IMPORT ServicesGrid NORMALLY ---
import ServicesGrid from '../components/ServicesGrid';
// -----------------------------------

// --- Keep others lazy-loaded for now ---
const ExperienceGrid = lazy(() => import('../components/ExperienceGrid'));
const PortfolioGrid = lazy(() => import('../components/PortfolioGrid'));
const SkillsGrid = lazy(() => import('../components/SkillsGrid'));
const TrustSection = lazy(() => import('../components/TrustSection'));
const CTASection = lazy(() => import('../components/CTASection'));
const Footer = lazy(() => import('../components/Footer'));
// -----------------------------------------

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />
      <Hero />
      <ScrollIndicator />
      <div className="relative">
        <ContentTransformation />

        {/* --- Render ServicesGrid directly --- */}
        <ServicesGrid />
        {/* ----------------------------------- */}

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
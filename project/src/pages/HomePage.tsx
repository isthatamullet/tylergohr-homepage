import React, { lazy, Suspense } from 'react';

// Import components using relative paths from src/pages/ to src/components/
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentTransformation from '../components/ContentTransformation';
import ScrollIndicator from '../components/ScrollIndicator';

// Lazy load components (assuming they are below the initial view)
const ServicesGrid = lazy(() => import('../components/ServicesGrid'));
const ExperienceGrid = lazy(() => import('../components/ExperienceGrid'));
const PortfolioGrid = lazy(() => import('../components/PortfolioGrid'));
const SkillsGrid = lazy(() => import('../components/SkillsGrid'));
const TrustSection = lazy(() => import('../components/TrustSection'));
const CTASection = lazy(() => import('../components/CTASection'));
const Footer = lazy(() => import('../components/Footer'));

const HomePage: React.FC = () => {
  // Note: Any useEffect logic from the original App.tsx that was specific
  // to the home page content (like preloading hero images) could be moved here.
  // Global logic (like setting a base document title) might stay in App.tsx.

  return (
    // We keep the main structure that was inside the original App component's return
    <div className="min-h-screen bg-navy text-white">
      <Header />
      <Hero />
      <ScrollIndicator />
      <div className="relative"> {/* This relative container might be important for positioning */}
        <ContentTransformation />
        {/* Suspense handles the loading state for lazy-loaded components */}
        <Suspense fallback={<div className="h-screen bg-navy flex items-center justify-center text-white">Loading Content...</div>}>
          <ServicesGrid />
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

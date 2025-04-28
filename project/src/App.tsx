import React, { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentTransformation from './components/ContentTransformation';
import ScrollIndicator from './components/ScrollIndicator';

// Lazy load components below the fold
const ServicesGrid = lazy(() => import('./components/ServicesGrid'));
const ExperienceGrid = lazy(() => import('./components/ExperienceGrid'));
const PortfolioGrid = lazy(() => import('./components/PortfolioGrid'));
const SkillsGrid = lazy(() => import('./components/SkillsGrid'));
const TrustSection = lazy(() => import('./components/TrustSection'));
const CTASection = lazy(() => import('./components/CTASection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    document.title = 'The Art of Digital Order | TG';
    
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/assets/hero-bg.webp', as: 'image' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
    ];

    preloadLinks.forEach(link => {
      const linkEl = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        if (value) linkEl.setAttribute(key, value);
      });
      document.head.appendChild(linkEl);
    });
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />
      <Hero />
      <ScrollIndicator />
      <div className="relative">
        <ContentTransformation />
        <Suspense fallback={<div className="h-96 bg-navy" />}>
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
}

export default App;
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentTransformation from './components/ContentTransformation';
import ServicesGrid from './components/ServicesGrid';
import ExperienceGrid from './components/ExperienceGrid';
import PortfolioGrid from './components/PortfolioGrid';
import TrustSection from './components/TrustSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'The Art of Digital Order | TG';
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />
      <Hero />
      <ContentTransformation />
      <ServicesGrid />
      <ExperienceGrid />
      <PortfolioGrid />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
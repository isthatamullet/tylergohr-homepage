import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- Import Page Components ---
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

// --- Import Base CSS ---
import './index.css';

// Define repository name for GitHub Pages subdirectory
const repoName = 'tylergohr-homepage';

function App() {
  // --- Global Effects ---
  useEffect(() => {
    document.title = 'The Art of Digital Order | TG';

    const preloadLinks = [
      // --- UPDATED: Added base path to asset ---
      { rel: 'preload', href: `/${repoName}/assets/hero-bg.webp`, as: 'image' },
      // -----------------------------------------
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    ];

    preloadLinks.forEach(link => {
      if (!document.head.querySelector(`link[rel="${link.rel}"][href="${link.href}"]`)) {
          const linkEl = document.createElement('link');
          Object.entries(link).forEach(([key, value]) => {
             if (value !== null && value !== undefined) {
               linkEl.setAttribute(key, String(value));
            }
          });
          document.head.appendChild(linkEl);
      }
    });

  }, []);

  // --- Render Router ---
  return (
    // --- ADDED: basename prop for subdirectory routing ---
    <BrowserRouter basename={`/${repoName}/`}>
    // -----------------------------------------------------
      <Routes>
        {/* Route for the main/home page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the Privacy Policy page */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />

        {/* Route for the Terms of Service page */}
        <Route path="/terms" element={<TermsPage />} />

        {/* Optional: Add a 404 page */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
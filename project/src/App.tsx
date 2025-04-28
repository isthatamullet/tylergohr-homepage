import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- Import Page Components ---
// We import the components that represent entire pages now
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

// --- Import Base CSS ---
// Ensure your main stylesheet is imported
import './index.css';

function App() {
  // --- Global Effects ---
  // This useEffect can stay here if you want the title and preloading
  // to apply broadly as the app loads, regardless of the route.
  useEffect(() => {
    // Set a base title, specific pages could potentially override this later if needed
    document.title = 'The Art of Digital Order | TG';

    // Preload critical resources (ensure paths are correct relative to the public folder)
    const preloadLinks = [
      { rel: 'preload', href: '/assets/hero-bg.webp', as: 'image' }, // Check if '/assets/hero-bg.webp' is the correct final path in your 'dist' or 'public' folder
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }, // Changed crossOrigin to anonymous (common practice)
    ];

    preloadLinks.forEach(link => {
      // Simple check to avoid adding duplicate links if the effect re-runs unexpectedly
      if (!document.head.querySelector(`link[rel="${link.rel}"][href="${link.href}"]`)) {
          const linkEl = document.createElement('link');
          Object.entries(link).forEach(([key, value]) => {
            // Ensure value is treated as string for setAttribute
             if (value !== null && value !== undefined) {
               linkEl.setAttribute(key, String(value));
            }
          });
          document.head.appendChild(linkEl);
      }
    });

    // Optional: Cleanup function if needed, though less critical for head elements usually
    // return () => { ... };

  }, []); // Empty dependency array means this runs once when the App component mounts

  // --- Render Router ---
  // BrowserRouter provides the routing context
  // Routes defines the area where Route matching occurs
  // Route maps a URL path to a specific element (your page component)
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the main/home page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the Privacy Policy page */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />

        {/* Route for the Terms of Service page */}
        <Route path="/terms" element={<TermsPage />} />

        {/* Optional: You could add a 404 "Not Found" page here later */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

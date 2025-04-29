// --- UPDATED: Removed 'React,' as it's not explicitly read ---
import { useEffect } from 'react';
// -----------------------------------------------------------
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- Import Page Components ---
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

// --- Import Base CSS ---
import './index.css';

// --- REMOVED: const repoName = ... ---

function App() {
  // --- Global Effects ---
  useEffect(() => {
    document.title = 'The Art of Digital Order | TG';

    const preloadLinks = [
      // --- REVERTED: Removed base path from asset ---
      { rel: 'preload', href: '/assets/hero-bg.webp', as: 'image' },
      // ---------------------------------------------
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

  }, []); // useEffect still used here

  // --- Render Router ---
  return (
    // --- REMOVED: basename prop (defaults to '/') ---
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
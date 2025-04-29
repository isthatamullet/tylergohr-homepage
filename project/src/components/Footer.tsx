import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-navy-dark border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* --- Top Section: Logo and Social Links --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
             {/* --- ADDED: Link logo to homepage --- */}
             <Link to="/">
                <Logo />
             </Link>
             {/* ------------------------------------- */}
          </div>
          {/* External social links using <a> */}
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/tylergohr/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
            <a href="https://youtube.com/@explicatostudios?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="https://www.instagram.com/harold_n_louise" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
          </div>
        </div>

        {/* --- Bottom Section: Link Columns --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">

          {/* Navigation Links Column */}
          <div>
            <h4 className="text-white font-medium mb-4">Navigate</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Experience', 'Portfolio', 'Contact'].map((item, index) => {
                // --- UPDATED: Ensure paths are '/' or '/#sectionId' ---
                const sectionId = item.toLowerCase();
                const path = item === 'Home' ? '/' : `/#${sectionId}`;
                // ------------------------------------------------------
                return (
                  <li key={index}>
                    <Link to={path} className="text-gray-400 hover:text-teal transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Links Column */}
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {['Content Architecture', 'Metadata Frameworks', 'Multi-Platform Distribution', 'Team Training'].map((item, index) => (
                <li key={index}>
                  {/* --- This link format should work correctly with basename --- */}
                  <Link to="/#services" className="text-gray-400 hover:text-teal transition-colors duration-300">
                    {item}
                  </Link>
                  {/* ------------------------------------------------------------ */}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              {/* --- These links should work correctly with basename --- */}
              <li><Link to="/privacy" className="text-gray-400 hover:text-teal transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-teal transition-colors duration-300">Terms of Service</Link></li>
              {/* ------------------------------------------------------- */}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Meridian, ID</li>
              <li>
                {/* External tel link uses <a> */}
                <a href="tel:+14249011420" className="text-gray-400 hover:text-teal transition-colors duration-300">
                  +1 (424) 901-1420
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Copyright --- */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} The Art of Digital Order. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
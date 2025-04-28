import React from 'react';
// Import Youtube instead of Twitter
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo'; // Assuming Logo component exists

const Footer: React.FC = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-navy-dark border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>

          <div className="flex space-x-6">
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/tylergohr/"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>

            {/* YouTube Link */}
            <a
              href="https://youtube.com/@explicatostudios?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/harold_n_louise"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Navigate</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Experience', 'Portfolio', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-teal transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {['Content Architecture', 'Metadata Frameworks', 'Multi-Platform Distribution', 'Team Training'].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-teal transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links - UPDATED */}
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              {/* Link to internal route /privacy */}
              <li><a href="/privacy" className="text-gray-400 hover:text-teal transition-colors duration-300">Privacy Policy</a></li>
              {/* Link to internal route /terms */}
              <li><a href="/terms" className="text-gray-400 hover:text-teal transition-colors duration-300">Terms of Service</a></li>
              {/* Removed Cookie Policy and GDPR Compliance links */}
            </ul>
          </div>

          {/* Contact Info - Updated */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Meridian, ID</li>
              <li> {/* Clickable Phone Number */}
                <a href="tel:+14249011420" className="text-gray-400 hover:text-teal transition-colors duration-300">
                  +1 (424) 901-1420
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - Updated Year Dynamically */}
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

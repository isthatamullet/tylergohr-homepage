import React from 'react';
// Import Youtube instead of Twitter
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
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

            {/* YouTube Link (Replaced Twitter & added sub_confirmation) */}
            <a
              href="https://youtube.com/@explicatostudios?sub_confirmation=1" // Your YouTube channel URL with parameter
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Security best practice
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="YouTube" // Updated label
            >
              <Youtube size={18} /> {/* YouTube icon */}
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/harold_n_louise"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Instagram"
              target="_blank" // Added for consistency
              rel="noopener noreferrer" // Added for consistency
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Rest of the footer code remains the same... */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
         {/* ... Navigate ... */}
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
         {/* ... Services ... */}
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
         {/* ... Legal ... */}
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-teal transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
         {/* ... Contact ... */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Meridian, ID</li>
<li>
  <a href="tel:+14249011420" className="text-gray-400 hover:text-teal transition-colors duration-300">
    +1 (424) 901-1420
  </a>
</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The Art of Digital Order. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

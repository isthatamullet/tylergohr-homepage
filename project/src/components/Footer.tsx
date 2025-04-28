import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
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
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
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
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Los Angeles, CA</li>
              <li>info@digitalorder.com</li>
              <li>+1 (555) 123-4567</li>
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
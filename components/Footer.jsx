// components/Footer.jsx
import React from 'react';
import { FileText, Globe, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#' },
      { name: 'Templates', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Pricing', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Research Guides', href: '#' },
      { name: 'API Reference', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold font-['Inter']">Manuscriptor</h2>
                <p className="text-teal-300 text-sm">AI-Powered Research Manuscript Tool</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your research workflow with our intelligent manuscript platform. 
              From literature review to final publication draft.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-teal-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Manuscriptor. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-sm text-gray-500">Used by researchers at:</span>
            <div className="flex space-x-4 text-gray-400">
              <span className="text-xs font-medium">Stanford</span>
              <span className="text-xs font-medium">MIT</span>
              <span className="text-xs font-medium">Oxford</span>
              <span className="text-xs font-medium">Nature Labs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
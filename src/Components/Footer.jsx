import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { useTheme } from '../Context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('US');

  // Get footer background color based on theme
  const getFooterBgColor = () => {
    if (theme === 'light') {
      return '#ffffff';
    } else if (theme === 'dark') {
      return '#000000';
    }
    return '#ffffff';
  };

  // Get footer text color based on theme
  const getFooterTextColor = () => {
    if (theme === 'light') {
      return undefined; // Use default theme colors
    } else if (theme === 'dark') {
      return '#ffffff'; // Bright white
    }
    return undefined;
  };

  // Get footer shadow style based on theme
  const getFooterShadow = () => {
    if (theme === 'dark') {
      return '0 4px 6px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(255, 255, 255, 0.06)';
    }
    return '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)';
  };

  const footerTextColor = getFooterTextColor();

  return (
    <footer 
      className="py-8" 
      style={{ 
        backgroundColor: getFooterBgColor(),
        boxShadow: getFooterShadow()
      }}
    >
      <div className="max-w-7xl mx-auto px-6" style={footerTextColor ? { color: footerTextColor } : {}}>
        {/* Top Section - Navigation and Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-stretch">
          {/* Quick Links Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-base font-bold theme-footer-text-primary mb-3">Quick Links</h3>
            <ul className="space-y-1.5 flex-1">
              <li><Link to="/" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">Home</Link></li>
              <li><Link to="/about" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link to="/contacts" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">Contact Us</Link></li>
              <li><Link to="/request-a-quote" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">Request A Quote</Link></li>
            </ul>
          </div>

          {/* Contact Address Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-base font-bold theme-footer-text-primary mb-3">Contact Address</h3>
            
            {/* Tabs */}
            <div className="flex gap-1 mb-2 border-b theme-border-primary">
              <button
                onClick={() => setActiveTab('US')}
                className={`px-3 py-1.5 font-semibold text-xs transition-all duration-300 relative ${
                  activeTab === 'US'
                    ? 'text-[#2d65bc]'
                    : 'theme-footer-text-secondary hover:theme-footer-text-primary'
                }`}
                style={activeTab === 'US' ? {
                  borderBottom: '2px solid #2d65bc',
                  marginBottom: '-2px'
                } : {}}
              >
                US
              </button>
              <button
                onClick={() => setActiveTab('IND')}
                className={`px-3 py-1.5 font-semibold text-xs transition-all duration-300 relative ${
                  activeTab === 'IND'
                    ? 'text-[#2d65bc]'
                    : 'theme-footer-text-secondary hover:theme-footer-text-primary'
                }`}
                style={activeTab === 'IND' ? {
                  borderBottom: '2px solid #2d65bc',
                  marginBottom: '-2px'
                } : {}}
              >
                IND
              </button>
            </div>

            {/* Address Box */}
            <div className="theme-bg-secondary border-2 theme-border-primary rounded-lg p-3 flex-1">
              {activeTab === 'US' ? (
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 theme-footer-icon mt-0.5 flex-shrink-0" />
                    <div className="theme-footer-text-secondary text-xs">
                      <p className="font-semibold theme-footer-text-primary mb-0.5 text-sm">United States</p>
                      <p>618 spink st #2 Wooster Ohio 44691 USA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 theme-footer-icon flex-shrink-0" />
                    <a href="tel:+12343923647" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-xs">
                      +1(234) 392-3647
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 theme-footer-icon flex-shrink-0" />
                    <a href="mailto:info@anquest.com" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-xs">
                      info@anquest.com
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 theme-footer-icon mt-0.5 flex-shrink-0" />
                    <div className="theme-footer-text-secondary text-xs">
                      <p className="font-semibold theme-footer-text-primary mb-0.5 text-sm">India</p>
                      <p>309, 3rd Floor, Orbit Plaza</p>
                      <p>Crossing Republik, Ghaziabad</p>
                      <p>India, 201016</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 theme-footer-icon flex-shrink-0" />
                    <a href="tel:+919266140654" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-xs">
                      +91 92661 40654
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 theme-footer-icon flex-shrink-0" />
                    <a href="mailto:anquest309@gmail.com" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-xs">
                      anquest309@gmail.com
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t theme-border-primary mb-4"></div>

        {/* Bottom Section - Logo, Copyright, and Social Media */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
          {/* Logo */}
          <div className="text-xl font-bold theme-footer-text-primary">
             aNquest 
          </div>

          {/* Copyright */}
          <div className="theme-footer-text-secondary text-center md:text-center text-sm">
            © 2025 aNquest. All Rights Reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-2 justify-center md:justify-end">
            <a href="#" className="w-8 h-8 theme-footer-icon-bg text-white rounded flex items-center justify-center transition-colors duration-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 theme-footer-icon-bg text-white rounded flex items-center justify-center transition-colors duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 theme-footer-icon-bg text-white rounded flex items-center justify-center transition-colors duration-300">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 theme-footer-icon-bg text-white rounded flex items-center justify-center transition-colors duration-300">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom styles for dark theme text */}
      {theme === 'dark' && (
        <style>{`
          footer .theme-footer-text-primary,
          footer .theme-footer-text-secondary,
          footer .theme-footer-icon {
            color: #ffffff !important;
          }
          footer a:hover {
            color: #ffffff !important;
          }
        `}</style>
      )}
    </footer>
  );
};

export default Footer;

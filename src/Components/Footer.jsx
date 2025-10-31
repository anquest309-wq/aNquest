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
      className="py-16" 
      style={{ 
        backgroundColor: getFooterBgColor(),
        boxShadow: getFooterShadow()
      }}
    >
      <div className="max-w-7xl mx-auto px-6" style={footerTextColor ? { color: footerTextColor } : {}}>
        {/* Top Section - Navigation and Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-stretch">
          {/* Services Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-bold theme-footer-text-primary mb-4">Services</h3>
            <ul className="space-y-2 flex-1">
              <li><Link to="/web-development-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Web Development</Link></li>
              <li><Link to="/mobile-app-development-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Mobile App Development</Link></li>
              <li><Link to="/web-design-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Web Design</Link></li>
              <li><Link to="/crm-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">CRM Services</Link></li>
              <li><Link to="/email-marketing-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Email Marketing</Link></li>
              <li><Link to="/search-engine-optimization-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">SEO Services</Link></li>
              <li><Link to="/local-seo-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Local SEO</Link></li>
              <li><Link to="/social-media-optimization-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Social Media Optimization</Link></li>
              
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col h-full ">
            <h3 className="text-lg font-bold theme-footer-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 flex-1">
              <li><Link to="/" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">About Us</Link></li>
              <li><Link to="/technologies" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Technologies</Link></li>
              <li><Link to="/contacts" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/request-a-quote" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Request A Quote</Link></li>
              <li><Link to="/blogs" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Blog</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-bold theme-footer-text-primary mb-4">More Services</h3>
            <ul className="space-y-2 flex-1">
              <li><Link to="/web-development" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Web Development</Link></li>
              <li><Link to="/app-development" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">App Development</Link></li>
              <li><Link to="/seo-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">SEO Services</Link></li>
              <li><Link to="/digital-marketing" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Digital Marketing</Link></li>
              <li><Link to="/ui-ux-design" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">UI/UX Design</Link></li>
              <li><Link to="/e-commerce-solutions" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">E-Commerce Solutions</Link></li>
              <li><Link to="/pay-per-click-ppc-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Pay Per Click (PPC)</Link></li>
              <li><Link to="/online-reputation-management-services" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Reputation Management</Link></li>
            </ul>
          </div>

          {/* Contact Address Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-bold theme-footer-text-primary mb-4">Contact Address</h3>
            
            {/* Tabs */}
            <div className="flex gap-1 mb-3 border-b theme-border-primary">
              <button
                onClick={() => setActiveTab('US')}
                className={`px-4 py-2 font-semibold text-sm transition-all duration-300 relative ${
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
                className={`px-4 py-2 font-semibold text-sm transition-all duration-300 relative ${
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
            <div className="theme-bg-secondary border-2 theme-border-primary rounded-lg p-4 flex-1">
              {activeTab === 'US' ? (
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 theme-footer-icon mt-0.5 flex-shrink-0" />
                    <div className="theme-footer-text-secondary">
                      <p className="font-semibold theme-footer-text-primary mb-1">United States</p>
                      <p>618 spink st #2 Wooster Ohio 44691 USA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 theme-footer-icon flex-shrink-0" />
                    <a href="tel:+12343923647" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">
                      +1(234) 392-3647
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 theme-footer-icon flex-shrink-0" />
                    <a href="mailto:info@anquest.com" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">
                      info@anquest.com
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 theme-footer-icon mt-0.5 flex-shrink-0" />
                    <div className="theme-footer-text-secondary">
                      <p className="font-semibold theme-footer-text-primary mb-1">India</p>
                      <p>309, 3rd Floor, Orbit Plaza</p>
                      <p>Crossing Republik, Ghaziabad</p>
                      <p>India, 201016</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 theme-footer-icon flex-shrink-0" />
                    <a href="tel:+919266140654" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">
                      +91 92661 40654
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 theme-footer-icon flex-shrink-0" />
                    <a href="mailto:anquest309@gmail.com" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">
                      anquest309@gmail.com
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      

        {/* Separator Line */}
        <div className="border-t theme-border-primary mb-8"></div>

        {/* Bottom Section - Logo, Copyright, and Social Media */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="text-2xl font-bold theme-footer-text-primary">
             aNquest 
          </div>

          {/* Copyright */}
          <div className="theme-footer-text-secondary text-center md:text-center">
            © 2025 aNquest. All Rights Reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-3 justify-center md:justify-end">
            <a href="#" className="w-10 h-10 theme-footer-icon-bg text-white rounded flex items-center justify-center transition-colors duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 theme-footer-icon-bg text-white rounded flex items-center justify-center transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 theme-footer-icon-bg text-white rounded flex items-center justify-center transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 theme-footer-icon-bg text-white rounded flex items-center justify-center transition-colors duration-300">
              <Youtube className="w-5 h-5" />
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

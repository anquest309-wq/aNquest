import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Twitter, Youtube, Send, Instagram } from "lucide-react";
import { useTheme } from '../Context/ThemeContext';
import { buildUrl } from '../utils/urlUtils';

const Footer = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer 
      className="py-8" 
      style={{ 
        backgroundColor: getFooterBgColor(),
        boxShadow: getFooterShadow()
      }}
    >
      <div className="max-w-7xl mx-auto px-6" style={footerTextColor ? { color: footerTextColor } : {}}>
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  mb-6">
          {/* Column 1: Company Info with Logo, Description, and Social Media */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="text-xl font-bold theme-footer-text-primary mb-3">
              aNquest.
            </div>
            
            {/* Description */}
            <p className="theme-footer-text-secondary text-sm mb-4 leading-relaxed">
              Our success in creating business solutions is due in part specially to talented committed team.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <a
                href="https://www.facebook.com/anquestmedia1"
                aria-label="Visit aNquest on Facebook"
                title="Facebook"
                className="w-10 h-10 theme-footer-icon-bg text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/anquestmedia"
                aria-label="Visit aNquest on X"
                title="X (Twitter)"
                className="w-10 h-10 theme-footer-icon-bg text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@anquestmedia"
                aria-label="Visit aNquest on YouTube"
                title="YouTube"
                className="w-10 h-10 theme-footer-icon-bg text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/anquestmedia/"
                aria-label="Visit aNquest on Instagram"
                title="Instagram"
                className="w-10 h-10 theme-footer-icon-bg text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold theme-footer-text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to={buildUrl('/crm-services')} className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">
                  CRM Services
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/web-design-services')} className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/web-development-services')} className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/search-engine-optimization-services')} className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/email-marketing-services')} className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">
                  Email Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          
          <div className="flex flex-col ">
            <h3 className="text-base font-bold theme-footer-text-primary mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to={buildUrl('/about')} className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/contacts')} className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/help')} className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">
                  Help & Faqs
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/privacy')} className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={buildUrl('/support')} className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300 text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>


          {/* Column 4: Information - Contact Details */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold theme-footer-text-primary mb-4">Information</h3>
            
            {/* Tabs */}
            <div className="flex gap-1 mb-3 border-b theme-border-primary  w-50">
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

            {/* Address and Contact Details based on active tab */}
            <div className="space-y-2 theme-footer-text-secondary text-sm">
              {activeTab === 'US' ? (
                <>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 theme-footer-icon mt-0.5 flex-shrink-0" />
                    <div>
                      <p>618 spink st #2 Wooster</p>
                      <p>Ohio 44691 USA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 theme-footer-icon flex-shrink-0" />
                    <a href="tel:+12343923647" className="hover:theme-footer-text-primary transition-colors duration-300">
                      +1(234) 392-3647
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 theme-footer-icon flex-shrink-0" />
                    <a href="mailto:info@anquest.com" className="hover:theme-footer-text-primary transition-colors duration-300">
                      info@anquest.com
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 theme-footer-icon mt-0.5 flex-shrink-0" />
                    <div>
                      <p>309, 3rd Floor, Orbit Plaza</p>
                      <p>Crossing Republik, Ghaziabad</p>
                      <p>India, 201016</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 theme-footer-icon flex-shrink-0" />
                    <a href="tel:+919266140654" className="hover:theme-footer-text-primary transition-colors duration-300">
                      +91 92661 40654
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 theme-footer-icon flex-shrink-0" />
                    <a href="mailto:anquest309@gmail.com" className="hover:theme-footer-text-primary transition-colors duration-300">
                      anquest309@gmail.com
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Column 5: Email Subscription */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold theme-footer-text-primary mb-4">Subscribe</h3>
            
            {/* Email Input Form */}
            <form onSubmit={handleSubscribe} className="mb-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="flex-1 px-4 py-2 rounded-lg border theme-border-primary theme-bg-secondary theme-footer-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-[#2d65bc]"
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe to the newsletter"
                  className="w-12 h-10 theme-footer-icon-bg text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:opacity-80"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
            
            {/* Subscription Description */}
            <p className="theme-footer-text-secondary text-sm">
              Subscribe us and get all the benefits from today.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t theme-border-primary mb-4"></div>

        {/* Bottom Section - Copyright */}
        <div className="text-center theme-footer-text-secondary text-sm">
          © 2025 aNquest Media, All Rights Reserved.
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

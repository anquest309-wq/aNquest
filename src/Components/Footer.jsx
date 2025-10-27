import React from "react";
import { MapPin, Mail, Phone, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="theme-footer-bg py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section - Navigation and Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold theme-footer-text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Mobile App Development</a></li>
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Backend Development</a></li>
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">SEO Services</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold theme-footer-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Technologies</a></li>
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-bold theme-footer-text-primary mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">Support</a></li>
            </ul>
          </div>

          {/* Contact Address Column */}
          <div>
            <h3 className="text-lg font-bold theme-footer-text-primary mb-4">Contact Address</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 theme-footer-icon mt-0.5 flex-shrink-0" />
                <div className="theme-footer-text-secondary">
                  <p>123 Tech Street, Silicon Valley</p>
                  <p>California 94000 USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 theme-footer-icon flex-shrink-0" />
                <a href="mailto:info@anquest.com" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">
                  info@anquest.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 theme-footer-icon flex-shrink-0" />
                <a href="tel:+1-555-123-4567" className="theme-footer-text-secondary hover:theme-footer-text-primary transition-colors duration-300">
                  +1-555-123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t theme-border-primary mb-8"></div>

        {/* Bottom Section - Logo, Copyright, and Social Media */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="text-2xl font-bold theme-footer-text-primary">
            ANQUEST 
          </div>

          {/* Copyright */}
          <div className="theme-footer-text-secondary text-center md:text-center">
            © 2024 aNquest. All Rights Reserved.
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
    </footer>
  );
};

export default Footer;

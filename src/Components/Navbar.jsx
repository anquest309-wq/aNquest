import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../Context/ThemeContext";
import { buildUrl } from '../utils/urlUtils';

export default function Navbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Closed by default
  const [clickedDropdown, setClickedDropdown] = useState(null); // No clicked dropdown by default
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Mobile services menu state
  const [isMenuAnimating, setIsMenuAnimating] = useState(false); // For slide animation
  const scrollPositionRef = useRef(0);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      // Trigger animation after a tiny delay to ensure smooth slide-in
      setTimeout(() => setIsMenuAnimating(true), 10);
      setIsServicesOpen(false); // Reset services menu when opening main menu
    } else {
      setIsMenuAnimating(false);
      // Wait for animation to complete before hiding
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  const handleDropdownItemSelect = () => {
    setClickedDropdown(null);
    setActiveDropdown(null);
  };

  const handleDropdownHover = (name) => {
    if (!clickedDropdown) {
      setActiveDropdown(name);
    }
  };

  const handleDropdownLeave = () => {
    if (!clickedDropdown) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (name) => {
    if (clickedDropdown === name) {
      setClickedDropdown(null);
      setActiveDropdown(null);
    } else {
      setClickedDropdown(name);
      setActiveDropdown(name);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (clickedDropdown && !e.target.closest(".dropdown-container")) {
        setClickedDropdown(null);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [clickedDropdown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && isMenuAnimating) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position when menu closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollPositionRef.current);
      };
    }
  }, [isMenuOpen, isMenuAnimating]);

  const dropdownClass = (name) => {
    const isActive = activeDropdown === name;
    return `absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg transform transition-all duration-300 z-50 ${
      isActive
        ? "opacity-100 scale-100 pointer-events-auto block"
        : "opacity-0 scale-95 pointer-events-none hidden"
    }`;
  };

  const getNavbarStyle = () => {
    if (theme === 'light') {
      return 'bg-gradient-to-r from-white to-[#2d65bc]';
    } else if (theme === 'dark') {
      return 'bg-gradient-to-r from-white to-[#1a1a1a]';
    }
    return 'bg-gradient-to-r from-white to-[#1a1a1a]';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${getNavbarStyle()}`}>
      <div className="container mx-auto px-4 sm:px-16  py-2 ">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ===== Left: Logo ===== */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <div className="flex items-center space-x-2">
              <Link to={buildUrl('/')}>
              <div className="w-28 h-28  rounded-full flex items-center justify-center">
              <img src="https://ik.imagekit.io/y7b5pqyxj/anquest__2_-removebg-preview.png?updatedAt=1761570866349" alt="aNquest Logo" />
              </div>
              </Link>
              {/* <span className="text-white font-bold text-xl">
                aNquest 
              </span> */}
            </div>
          </div>

          {/* ===== Center: Navigation ===== */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to={buildUrl('/')} className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base py-3 px-3">
              Home
            </Link>
            
            <Link to={buildUrl('/about')} className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base px-3">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative dropdown-container group"
              onMouseEnter={() => handleDropdownHover("services")}
              onMouseLeave={() => handleDropdownLeave()}
            >
              <button
                className="text-gray-800 font-semibold py-7 px-3 hover:text-[#2d65bc] transition-colors flex items-center space-x-1 text-base"
                onClick={() => handleDropdownClick("services")}
              >
                <span>Services</span>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Services Dropdown */}
              {activeDropdown === "services" && (
                <div className={dropdownClass("services")}>
                  <div className="py-2 bg-[var(--bg-services)]">
                    <Link
                      to={buildUrl('/crm-services')}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                      onClick={handleDropdownItemSelect}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      CRM Services
                    </Link>
                    <Link
                      to={buildUrl('/email-marketing-services')}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                      onClick={handleDropdownItemSelect}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Marketing Services
                    </Link>
                    <Link
                      to={buildUrl('/local-seo-services')}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                      onClick={handleDropdownItemSelect}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Local SEO Services
                    </Link>
                    <Link
                      to={buildUrl('/mobile-app-development-services')}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                      onClick={handleDropdownItemSelect}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                      </svg>
                      Mobile App Development Services
                    </Link>
                    <Link
                      to={buildUrl('/online-reputation-management-services')}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                      onClick={handleDropdownItemSelect}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Online Reputation Management Services
                    </Link>
                    <Link
                      to={buildUrl('/pay-per-click-ppc-services')}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                      onClick={handleDropdownItemSelect}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Pay Per Click (PPC) Services
                    </Link>
                    <Link
                      to={buildUrl('/search-engine-optimization-services')}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                      onClick={handleDropdownItemSelect}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search Engine Optimization Services
                    </Link>
                    <Link
                      to={buildUrl('/social-media-optimization-services')}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                      onClick={handleDropdownItemSelect}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                      </svg>
                      Social Media Optimization Services
                    </Link>
                    <Link
                      to={buildUrl('/web-design-services')}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                      onClick={handleDropdownItemSelect}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                      Web Design Services
                    </Link>
                    <Link
                      to={buildUrl('/web-development-services')}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                      onClick={handleDropdownItemSelect}
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Web Development Services
                    </Link>
                   
                    <div className="border-t border-gray-200 my-2"></div>
                  </div>
                </div>
              )}
              
              {/* Hover Bridge */}
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 w-full h-2 bg-transparent pointer-events-auto"></div>
              )}
            </div>

            <Link to={buildUrl('/technologies')} className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base px-1">
              Technologies
            </Link>
            <Link to={buildUrl('/blogs')} className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base px-3">
              Blogs
            </Link>
            <Link to={buildUrl('/contacts')} className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base px-3">
              Contacts
            </Link>
          </div>

          {/* ===== Right: Theme Switcher + CTA + Hamburger Menu ===== */}
          <div className="flex items-center space-x-4">
            {/* Theme Switcher + CTA - Hidden on mobile, visible on md+ */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Switcher */}
              <div className="theme-switcher-navbar">
                <ThemeSwitcher />
              </div>
              
              <Link to={buildUrl('/request-a-quote')} className="bg-[#2d65bc] hover:bg-[#2d65bc]/90 text-white font-bold py-3 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#2d65bc]/25 active:scale-95">
                Request A Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle - Shows on tablet and mobile, after Request A Quote button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ===== Mobile Menu Overlay & Sidebar ===== */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
                isMenuAnimating ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={toggleMenu}
            ></div>
            
            {/* Sidebar Menu */}
            <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
              isMenuAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}>
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                  <Link to={buildUrl('/')} onClick={toggleMenu}>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        <img 
                          src="https://ik.imagekit.io/y7b5pqyxj/anquest__2_-removebg-preview.png?updatedAt=1761570866349" 
                          alt="aNquest Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">aNquest</div>
                        <div className="text-xs text-gray-500">Think. Code. Deliver.</div>
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:text-gray-600 focus:outline-none transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <Link
                  to={buildUrl('/')} 
                  onClick={toggleMenu}
                  className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 hover:text-[#2d65bc] transition-colors border-b border-gray-200"
                >
                  Home
                </Link>
                
                <Link
                  to={buildUrl('/about')} 
                  onClick={toggleMenu}
                  className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 hover:text-[#2d65bc] transition-colors border-b border-gray-200"
                >
                  About
                </Link>
                
                {/* Services Section - Expandable */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-[#2d65bc] font-semibold hover:bg-gray-50 transition-colors"
                  >
                    <span>Services</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Services Submenu */}
                  {isServicesOpen && (
                    <div className="bg-[#f4f4f5] text-black space-y-1 py-2">
                      <Link 
                        to={buildUrl('/crm-services')} 
                        onClick={toggleMenu}
                        className="block px-6 py-2  hover:text-white hover:bg-[#5a5ab8] transition-colors text-sm"
                      >
                        CRM Services
                      </Link>
                      <Link 
                        to={buildUrl('/email-marketing-services')} 
                        onClick={toggleMenu}
                        className="block px-6 py-2  hover:text-white hover:bg-[#5a5ab8] transition-colors text-sm"
                      >
                        Email Marketing Services
                      </Link>
                      <Link 
                        to={buildUrl('/local-seo-services')} 
                        onClick={toggleMenu}
                        className="block px-6 py-2  hover:text-white hover:bg-[#5a5ab8] transition-colors text-sm"
                      >
                        Local SEO Services
                      </Link>
                      <Link 
                        to={buildUrl('/mobile-app-development-services')} 
                        onClick={toggleMenu}
                        className="block px-6 py-2  hover:text-white hover:bg-[#5a5ab8] transition-colors text-sm"
                      >
                        Mobile App Development Services
                      </Link>
                      <Link 
                        to={buildUrl('/online-reputation-management-services')} 
                        onClick={toggleMenu}
                        className="block px-6 py-2  hover:text-white hover:bg-[#5a5ab8] transition-colors text-sm"
                      >
                        Online Reputation Management Services
                      </Link>
                      <Link 
                        to={buildUrl('/pay-per-click-ppc-services')} 
                        onClick={toggleMenu}
                        className="block px-6 py-2  hover:text-white hover:bg-[#5a5ab8] transition-colors text-sm"
                      >
                        Pay Per Click (PPC) Services
                      </Link>
                      <Link 
                        to={buildUrl('/search-engine-optimization-services')} 
                        onClick={toggleMenu}
                        className="block px-6 py-2  hover:text-white hover:bg-[#5a5ab8] transition-colors text-sm"
                      >
                        Search Engine Optimization Services
                      </Link>
                      <Link 
                        to={buildUrl('/social-media-optimization-services')} 
                        onClick={toggleMenu}
                        className="block px-6 py-2  hover:text-white hover:bg-[#5a5ab8] transition-colors text-sm"
                      >
                        Social Media Optimization Services
                      </Link>
                      <Link 
                        to={buildUrl('/web-design-services')} 
                        onClick={toggleMenu}
                        className="block px-6 py-2  hover:text-white hover:bg-[#5a5ab8] transition-colors text-sm"
                      >
                        Web Design Services
                      </Link>
                      <Link 
                        to={buildUrl('/web-development-services')} 
                        onClick={toggleMenu}
                        className="block px-6 py-2  hover:text-white hover:bg-[#5a5ab8] transition-colors text-sm"
                      >
                        Web Development Services
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link
                  to={buildUrl('/technologies')} 
                  onClick={toggleMenu}
                  className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 hover:text-[#2d65bc] transition-colors border-b border-gray-200"
                >
                  Technologies
                </Link>
                
                <Link
                  to={buildUrl('/blogs')} 
                  onClick={toggleMenu}
                  className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 hover:text-[#2d65bc] transition-colors border-b border-gray-200"
                >
                  Blogs
                </Link>
                
                <Link
                  to={buildUrl('/contacts')} 
                  onClick={toggleMenu}
                  className="block px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 hover:text-[#2d65bc] transition-colors border-b border-gray-200"
                >
                  Contacts
                </Link>
                
                {/* Theme Switcher in Mobile */}
                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="px-4 py-2 font-semibold text-[#2d65bc]">Theme</div>
                  <div className="px-4 pb-3">
                    <div className="theme-switcher-mobile">
                      <ThemeSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

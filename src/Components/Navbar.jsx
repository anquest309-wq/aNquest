import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../Context/ThemeContext";

export default function Navbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Closed by default
  const [clickedDropdown, setClickedDropdown] = useState(null); // No clicked dropdown by default

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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
          {/* ===== Left: Logo + Hamburger ===== */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-gray-800 focus:outline-none"
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

            <div className="flex items-center space-x-2">
              <Link to="/">
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
            <Link to="/" className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base py-3 px-3">
              Home
            </Link>
            
            <Link to="/about" className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base px-3">
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
                      to="/crm-services"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      CRM Services
                    </Link>
                    <Link
                      to="/email-marketing-services"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Marketing Services
                    </Link>
                    <Link
                      to="/local-seo-services"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Local SEO Services
                    </Link>
                    <Link
                      to="/mobile-app-development-services"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                      </svg>
                      Mobile App Development Services
                    </Link>
                    <Link
                      to="/online-reputation-management-services"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Online Reputation Management Services
                    </Link>
                    <Link
                      to="/pay-per-click-ppc-services"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Pay Per Click (PPC) Services
                    </Link>
                    <Link
                      to="/search-engine-optimization-services"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search Engine Optimization Services
                    </Link>
                    <Link
                      to="/social-media-optimization-services"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                      </svg>
                      Social Media Optimization Services
                    </Link>
                    <Link
                      to="/web-design-services"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                      Web Design Services
                    </Link>
                    <Link
                      to="/web-development-services"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
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

            <Link to="/technologies" className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base px-1">
              Technologies
            </Link>
            <Link to="/blogs" className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base px-3">
              Blogs
            </Link>
            <Link to="/contacts" className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base px-3">
              Contacts
            </Link>
          </div>

          {/* ===== Right: Theme Switcher + CTA ===== */}
          <div className="md:flex hidden items-center space-x-4">
            {/* Theme Switcher */}
            <div className="theme-switcher-navbar">
              <ThemeSwitcher />
            </div>
            
            <Link to="/request-a-quote" className="bg-[#2d65bc] hover:bg-[#2d65bc]/90 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#2d65bc]/25 active:scale-95">
              Request A Quote
            </Link>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg text-gray-800 rounded-lg mt-3 p-4 space-y-3 animate-in fade-in duration-300 shadow-lg">
            <Link to="/" className="block font-semibold hover:text-[#2d65bc] py-2 border-b border-gray-300">
              Home
            </Link>
            <Link to="/about" className="block font-semibold hover:text-[#2d65bc] py-2 border-b border-gray-300">
              About
            </Link>
            
            {/* Services Section in Mobile */}
            <div className="border-b  border-gray-300">
              <div className="py-2 font-semibold text-[#2d65bc]">Services</div>
              <div className="ml-4 space-y-2 bg-[#6565c8]">
              <Link to="/crm-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  CRM Services
                </Link>
                <Link to="/email-marketing-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Email Marketing Services
                </Link>
                <Link to="/local-seo-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Local SEO Services
                </Link>
                <Link to="/mobile-app-development-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Mobile App Development Services
                </Link>
                <Link to="/online-reputation-management-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Online Reputation Management Services
                </Link>
                <Link to="/pay-per-click-ppc-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Pay Per Click (PPC) Services
                </Link>
                <Link to="/search-engine-optimization-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Search Engine Optimization Services
                </Link>
                <Link to="/social-media-optimization-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Social Media Optimization Services
                </Link>
                <Link to="/web-design-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Web Design Services
                </Link>
                <Link to="/web-development-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Web Development Services
                </Link>
               
              </div>
            </div>
            
            <Link to="/technologies" className="block font-semibold hover:text-[#2d65bc] py-2 border-b border-gray-300">
              Technologies
            </Link>
            <Link to="/blogs" className="block font-semibold hover:text-[#2d65bc] py-2 border-b border-gray-300">
              Blogs
            </Link>
            <Link to="/contacts" className="block font-semibold hover:text-[#2d65bc] py-2">
              Contacts
            </Link>
            
            {/* Theme Switcher in Mobile */}
            <div className="border-t border-gray-300 pt-3">
              <div className="py-2 font-semibold text-[#2d65bc]">Theme</div>
              <div className="ml-4">
                <div className="theme-switcher-mobile">
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

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
    return `absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg transform transition-all duration-300 z-50 ${
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
    } else if (theme === 'green') {
      return 'bg-gradient-to-r from-white to-[#064e3b]';
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
                  <div className="py-2">
                    <Link
                      to="/web-development"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      Web Development
                    </Link>
                    <Link
                      to="/app-development"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      to="/seo-services"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      SEO Services
                    </Link>
                    <Link
                      to="/digital-marketing"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      to="/ui-ux-design"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      UI/UX Design
                    </Link>
                    <Link
                      to="/e-commerce-solutions"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#2d65bc]/10 hover:text-[#2d65bc] transition-colors"
                    >
                      E-Commerce Solutions
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
            <div className="border-b border-gray-300">
              <div className="py-2 font-semibold text-[#2d65bc]">Services</div>
              <div className="ml-4 space-y-2">
                <Link to="/web-development" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Web Development
                </Link>
                <Link to="/app-development" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Mobile App Development
                </Link>
                <Link to="/seo-services" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  SEO Services
                </Link>
                <Link to="/digital-marketing" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  Digital Marketing
                </Link>
                <Link to="/ui-ux-design" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  UI/UX Design
                </Link>
                <Link to="/e-commerce-solutions" className="block text-gray-700 hover:text-[#2d65bc] py-1 text-sm">
                  E-Commerce Solutions
                </Link>
              </div>
            </div>
            
            <Link to="/technologies" className="block font-semibold hover:text-[#2d65bc] py-2 border-b border-gray-300">
              Technologies
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

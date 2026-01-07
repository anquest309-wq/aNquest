import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../Context/ThemeContext";
import { buildUrl } from '../utils/urlUtils';
import {
  Settings, Cloud, Smartphone,
  CloudCog,
  Database,
  Globe
} from "lucide-react";
import {
  FileSearch,
  Link2,
  MapPin,
  ShoppingCart,
} from "lucide-react";






export default function Navbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Closed by default
  const [clickedDropdown, setClickedDropdown] = useState(null); // No clicked dropdown by default
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Mobile services menu state
  const [isMenuAnimating, setIsMenuAnimating] = useState(false); // For slide animation
  const scrollPositionRef = useRef(0);
  const [isCmsOpen, setIsCmsOpen] = useState(false); // desktop CMS dropdown

  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false); // desktop
  const [isMobileSoftwareOpen, setIsMobileSoftwareOpen] = useState(false); // mobile
  const [isSeoOpen, setIsSeoOpen] = useState(false);        // desktop
  const [isMobileSeoOpen, setIsMobileSeoOpen] = useState(false); // mobile






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
    return `absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg transform transition-all duration-300 z-50 ${isActive
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

  const isDark = theme === "dark";

  const dropdownBg = isDark ? "bg-[#0f172a]" : "bg-white";
  const dropdownText = isDark ? "text-gray-200" : "text-gray-700";
  const dropdownHover = isDark
    ? "hover:bg-white/10 hover:text-white"
    : "hover:bg-[#2d65bc]/10 hover:text-[#2d65bc]";


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
                  <div className={`py-2 ${dropdownBg}`}>


                    {/* CMS SERVICES DROPDOWN */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsCmsOpen(true)}
                      onMouseLeave={() => setIsCmsOpen(false)}
                    >
                      <button
                        className={`w-full flex items-center justify-between px-4 py-2 ${dropdownText} ${dropdownHover}`}

                        type="button"
                      >
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg> CMS Services
                        </span>
                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* CMS SUB MENU */}
                      {isCmsOpen && (
                        <div className={`absolute top-0 left-full ml-1 w-64 rounded-lg shadow-xl z-50 ${dropdownBg}`}>

                          <Link to={buildUrl('/services/crm-services/real-state-crm')} className=" px-4 py-2 flex items-center   hover:bg-[#2d65bc]/10">
                            <Settings size={16} className="mr-2 text-[#2d65bc]" /> Real Estate CRM
                          </Link>
                          <Link to={buildUrl('/services/crm-services/hospital-crm')} className=" px-4 py-2 flex items-center hover:bg-[#2d65bc]/10">
                            <Cloud size={16} className="mr-2 text-[#2d65bc]" />
                            Hospital CRM
                          </Link>

                        </div>
                      )}
                    </div>


                    {/* SOFTWARE SERVICES DROPDOWN */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsSoftwareOpen(true)}
                      onMouseLeave={() => setIsSoftwareOpen(false)}
                    >
                      <button
                        type="button"
                        className={`w-full flex items-center justify-between px-4 py-2  ${dropdownText} ${dropdownHover}`}

                      >
                        <span className="flex items-center">
                          <Settings size={16} className="mr-3 text-[#2d65bc]" />
                          Software Services
                        </span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* SOFTWARE SUB MENU */}
                      {isSoftwareOpen && (
                        <div className={`absolute top-0 left-full ml-1 w-64 rounded-lg shadow-xl z-50 ${dropdownBg}`}>

                          <Link
                            to={buildUrl('/services/software-services/app-development')}
                            className="flex items-center px-4 py-2 hover:bg-[#2d65bc]/10"
                          >
                            <Smartphone size={15} className="mr-2 text-[#2d65bc]" />
                            App Development
                          </Link>

                         

                         

                          <Link
                            to={buildUrl('/services/software-services/web-development')}
                            className="flex items-center px-4 py-2 hover:bg-[#2d65bc]/10"
                          >
                            <Globe size={15} className="mr-2 text-[#2d65bc]" />
                            Web Development
                          </Link>

                        </div>
                      )}

                    </div>



                    {/* SEO SERVICES DROPDOWN */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsSeoOpen(true)}
                      onMouseLeave={() => setIsSeoOpen(false)}
                    >
                      <button
                        type="button"
                        className={`w-full flex items-center justify-between px-4 py-2 ${dropdownText} ${dropdownHover}`}

                      >
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-3 text-[#2d65bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          Digital Marketing
                        </span>

                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* SEO SUB MENU */}
                      {isSeoOpen && (
                        <div className={`absolute top-0 left-full ml-1 w-64 rounded-lg shadow-xl z-50 ${dropdownBg}`}>

                          <Link
                            to={buildUrl('/services/digital-marketing/seo')}
                            className="flex items-center px-4 py-2 hover:bg-[#2d65bc]/10 transition-colors"
                          >
                            <FileSearch size={15} className="mr-2 text-[#2d65bc]" />
                            Search Engine Optimization

                          </Link>

                          <Link
                            to={buildUrl('/services/digital-marketing/social-media-optimization')}
                            className="flex items-center px-4 py-2 hover:bg-[#2d65bc]/10 transition-colors"
                          >
                            <Link2 size={15} className="mr-2 text-[#2d65bc]" />
                            Social Media Marketing
                          </Link>



                         

                        </div>
                      )}

                    </div>





                  </div>
                </div>
              )}

              {/* Hover Bridge */}
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 w-full h-2 bg-transparent pointer-events-auto"></div>
              )}
            </div>


            <Link to={buildUrl('/blogs')} className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base px-3">
              Blogs
            </Link>
            <Link to={buildUrl('/contact-us')} className="text-gray-800 font-semibold hover:text-[#2d65bc] transition-colors text-base px-3">
              Contact Us            </Link>
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
              className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isMenuAnimating ? 'opacity-100' : 'opacity-0'
                }`}
              onClick={toggleMenu}
            ></div>

            {/* Sidebar Menu */}
            <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMenuAnimating ? 'translate-x-0' : 'translate-x-full'
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
                  to={buildUrl('/contact-us')}
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

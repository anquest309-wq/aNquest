import React, { useState, useEffect } from "react";

export default function Navbar() {
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

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 sm:px-6  py-2 ">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ===== Left: Logo + Hamburger ===== */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-green-400 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">
                Anquest Media
              </span>
            </div>
          </div>

          {/* ===== Center: Navigation ===== */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", href: "#" },
              { name: "Web Development", id: "web" },
              { name: "App Development", id: "app" },
              { name: "SEO Services", id: "seo" },
              { name: "Technologies", id: "tech" },
              { name: "Contacts", href: "#" },
            ].map((link) => (
              <div
                key={link.name}
                className={`relative ${
                  link.id ? "dropdown-container" : ""
                } group`}
              >
                <a
                  href={link.href || "#"}
                  className="text-white hover:text-green-400 transition-colors flex items-center space-x-1 text-base"
                  onMouseEnter={() =>
                    link.id && handleDropdownHover(link.id)
                  }
                  onMouseLeave={() => link.id && handleDropdownLeave()}
                  onClick={(e) => {
                    if (link.id) {
                      e.preventDefault();
                      handleDropdownClick(link.id);
                    }
                  }}
                >
                  <span>{link.name}</span>
                  {link.id && (
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
                  )}
                </a>

                {/* Dropdowns */}
                {link.id === "web" && activeDropdown === "web" && (
                  <div className={dropdownClass("web")}>
                    <div className="py-2">
                      {[
                        "Frontend Development",
                        "Backend Development",
                        "Full-Stack Development",
                        "E-Commerce Development",
                        "CMS Development",
                      ].map((item) => (
                        <a
                          key={item}
                          href="/#"
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {link.id === "app" && activeDropdown === "app" && (
                  <div className={dropdownClass("app")}>
                    <div className="py-2">
                      {[
                        "iOS Development",
                        "Android Development",
                        "React Native Development",
                        "Flutter Development",
                        "Cross-Platform Development",
                      ].map((item) => (
                        <a
                          key={item}
                          href="/#"
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {link.id === "seo" && activeDropdown === "seo" && (
                  <div className={dropdownClass("seo")}>
                    <div className="py-2">
                      {[
                        "SEO Audit & Analysis",
                        "Keyword Research",
                        "On-Page SEO",
                        "Off-Page SEO",
                        "Local SEO",
                      ].map((item) => (
                        <a
                          key={item}
                          href="/#"
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {link.id === "tech" && activeDropdown === "tech" && (
                  <div className={dropdownClass("tech")}>
                    <div className="py-2">
                      {[
                        "React Development",
                        "Node.js Development",
                        "Python Development",
                        "PHP Development",
                        "JavaScript Development",
                      ].map((item) => (
                        <a
                          key={item}
                          href="/#"
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ===== Right: CTA ===== */}
          <div className="md:flex hidden  items-center space-x-4">
            <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/25 active:scale-95">
              Request A Quote
            </button>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 text-white rounded-lg mt-3 p-4 space-y-3 animate-in fade-in duration-300">
            <a href="#" className="block hover:text-green-400 py-2 border-b border-gray-700">
              Home
            </a>
            <a href="#" className="block hover:text-green-400 py-2 border-b border-gray-700">
              Web Development
            </a>
            <a href="#" className="block hover:text-green-400 py-2 border-b border-gray-700">
              App Development
            </a>
            <a href="#" className="block hover:text-green-400 py-2 border-b border-gray-700">
              SEO Services
            </a>
            <a href="#" className="block hover:text-green-400 py-2 border-b border-gray-700">
              Technologies
            </a>
            <a href="#" className="block hover:text-green-400 py-2">
              Contacts
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

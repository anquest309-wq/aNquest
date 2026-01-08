import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, TrendingUp, FileText, Link2, BarChart3, Zap, Target, CheckCircle,
  Globe, Layers, Users, PenTool, ArrowRight, ChevronLeft, ChevronRight,
  Activity, Award, Shield, Hash, MousePointer, Smartphone, Layout, Lock
} from 'lucide-react';
import { useTheme } from '../../Context/ThemeContext';
import SEO from '../../Components/SEO';
import CircleSquareBgAnimation from '../../Components/Bg-animation-template/CircleSquareBgAnimation';
import { buildUrl } from '../../utils/urlUtils';
import HomeHeroBg from '../../Components/Bg-animation-template/HomeHeroBg';

// --- NEW SUB-COMPONENT: Interactive SEO Hero Dashboard ---
const SEOHeroDashboard = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const isLight = theme === 'light';

  // Theme configuration
  const themeStyles = {
    blue: { primary: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', light: 'bg-blue-50', darkLight: 'dark:bg-blue-900/30', gradient: 'from-blue-600 to-cyan-500' },
    green: { primary: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', light: 'bg-emerald-50', darkLight: 'dark:bg-emerald-900/30', gradient: 'from-emerald-600 to-teal-500' },
    orange: { primary: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', light: 'bg-orange-50', darkLight: 'dark:bg-orange-900/30', gradient: 'from-orange-500 to-yellow-500' },
    purple: { primary: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600', light: 'bg-purple-50', darkLight: 'dark:bg-purple-900/30', gradient: 'from-purple-600 to-pink-500' },
    indigo: { primary: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-600', light: 'bg-indigo-50', darkLight: 'dark:bg-indigo-900/30', gradient: 'from-indigo-600 to-violet-500' },
  };

  const tabs = [
    { id: 'rankings', label: 'Rankings', icon: Hash, theme: 'blue' },
    { id: 'traffic', label: 'Traffic', icon: TrendingUp, theme: 'green' },
    { id: 'audit', label: 'Health', icon: Activity, theme: 'orange' },
    { id: 'content', label: 'Content', icon: FileText, theme: 'purple' },
    { id: 'backlinks', label: 'Links', icon: Link2, theme: 'indigo' },
  ];

  const currentTheme = themeStyles[tabs[activeTab].theme];

  // Auto-Rotate Logic
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % tabs.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, tabs.length]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const glassClass = isLight ? 'bg-white/80 border-white/60' : 'bg-slate-900/80 border-slate-700/60';
  const textColor = isLight ? 'text-slate-800' : 'text-slate-100';
  const subTextColor = isLight ? 'text-slate-500' : 'text-slate-400';

  return (
    <div
      className="w-full max-w-[600px] h-[380px] relative perspective-hero mx-auto lg:mr-0 display:block"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* 3D Container */}
      <div className={`absolute inset-0 rounded-2xl backdrop-blur-xl border shadow-2xl flex overflow-hidden ${glassClass} transition-all duration-500`}>

        {/* Sidebar - Icon Rail */}
        <div className={`w-16 flex flex-col items-center hidden sm:block py-6 gap-4 border-r border-gray-200/10 z-20 ${isLight ? 'bg-gray-50/50' : 'bg-slate-900/50'}`}>
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-2  text-xs">
            SEO
          </div>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={(e) => { e.stopPropagation(); handleTabClick(index); }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative group ${activeTab === index
                ? `${themeStyles[tab.theme].primary} text-white shadow-lg scale-105`
                : `text-gray-400 ${isLight ? 'hover:bg-gray-200/50' : 'hover:bg-slate-800/50'}`
                }`}
            >
              <tab.icon size={18} />
              {/* Tooltip */}
              <div className="absolute left-14 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none translate-x-2 group-hover:translate-x-0 ">
                {tab.label}
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className={`flex-1 flex flex-col h-full relative ${isLight ? 'bg-white' : 'bg-slate-950'}`}>

          {/* Header Bar */}
          <div className={`h-12 border-b flex items-center px-6 gap-4 backdrop-blur justify-between ${isLight ? 'border-gray-100 bg-gray-50/50' : 'border-slate-800 bg-slate-900/80'}`}>
            <div className="flex gap-4 items-center">
              <div className={`text-xs font-bold ${textColor}`}>Dashboard</div>
              <div className={`h-4 w-[1px] ${isLight ? 'bg-gray-300' : 'bg-slate-700'}`}></div>
              <div className={`text-[10px] font-mono ${currentTheme.text} bg-current/10 px-2 py-0.5 rounded`}>
                {tabs[activeTab].label}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            </div>
          </div>

          {/* Interactive Workspace */}
          <div className="flex-1 overflow-hidden relative p-6">

            {/* TAB 1: RANKINGS (Keyword List) */}
            {activeTab === 0 && (
              <div className="animate-fade-in h-full flex flex-col justify-center space-y-4">
                <div className="flex justify-between items-end mb-1">
                  <div>
                    <div className={`text-[10px] font-bold ${subTextColor} uppercase tracking-wider`}>Keyword Performance</div>
                    <div className={`text-2xl font-bold ${textColor}`}>Top 3 Rankings</div>
                  </div>
                  <div className={`text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded flex items-center gap-1`}>
                    <TrendingUp size={12} /> +12%
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { kw: "seo services", rank: 1, vol: "12k" },
                    { kw: "digital marketing", rank: 3, vol: "45k" },
                    { kw: "web optimization", rank: 2, vol: "8.5k" }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${isLight ? 'border-gray-100 bg-gray-50' : 'border-slate-800 bg-slate-900'} transition-all hover:scale-[1.02]`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full ${currentTheme.light} ${currentTheme.darkLight} ${currentTheme.text} flex items-center justify-center text-xs font-bold`}>{item.rank}</div>
                        <span className={`text-xs font-medium ${textColor}`}>{item.kw}</span>
                      </div>
                      <div className={`text-[10px] ${subTextColor}`}>{item.vol} vol</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: TRAFFIC (Area Chart) */}
            {activeTab === 1 && (
              <div className="animate-fade-in h-full flex flex-col justify-center">
                <div className="mb-6">
                  <div className={`text-[10px] font-bold ${subTextColor} uppercase tracking-wider`}>Organic Sessions</div>
                  <div className={`text-3xl font-bold ${textColor} flex items-end gap-2`}>
                    45,291 <span className="text-xs font-medium text-emerald-500 mb-1 bg-emerald-500/10 px-1.5 py-0.5 rounded">+28%</span>
                  </div>
                </div>

                <div className="relative h-32 w-full flex items-end gap-1.5">
                  {[30, 45, 35, 60, 50, 75, 65, 85, 70, 95, 90, 100].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-sm transition-all duration-500 ${currentTheme.primary} opacity-20 hover:opacity-80`}
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: AUDIT (Health Score) */}
            {activeTab === 2 && (
              <div className="animate-fade-in h-full flex items-center justify-center gap-8">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" className={`${isLight ? 'text-gray-100' : 'text-slate-800'}`} fill="none" />
                    <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" className={`${currentTheme.text}`} fill="none" strokeDasharray="351" strokeDashoffset="35" strokeLinecap="round" />
                  </svg>
                  <div className="absolute text-center">
                    <div className={`text-3xl font-bold ${textColor}`}>92</div>
                    <div className={`text-[10px] ${subTextColor}`}>Health Score</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className={`flex items-center gap-2 text-xs ${textColor}`}>
                    <CheckCircle size={14} className="text-emerald-500" /> Core Web Vitals
                  </div>
                  <div className={`flex items-center gap-2 text-xs ${textColor}`}>
                    <CheckCircle size={14} className="text-emerald-500" /> Mobile Friendly
                  </div>
                  <div className={`flex items-center gap-2 text-xs ${textColor}`}>
                    <CheckCircle size={14} className="text-emerald-500" /> HTTPS Security
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CONTENT (Optimization) */}
            {activeTab === 3 && (
              <div className="animate-fade-in h-full flex flex-col justify-center">
                <div className={`p-5 rounded-xl border ${isLight ? 'border-gray-100' : 'border-slate-800'} relative overflow-hidden shadow-sm`}>
                  <div className="flex justify-between items-center mb-4">
                    <div className={`text-xs font-bold ${textColor}`}>On-Page Analysis</div>
                    <div className={`text-[10px] px-2 py-0.5 rounded-full ${currentTheme.light} ${currentTheme.darkLight} ${currentTheme.text}`}>Readability: A+</div>
                  </div>

                  <div className="space-y-3">
                    <div className={`h-2 w-3/4 ${isLight ? 'bg-gray-100' : 'bg-slate-800'} rounded`}></div>
                    <div className={`h-2 w-full ${isLight ? 'bg-gray-100' : 'bg-slate-800'} rounded`}></div>
                    <div className={`h-2 w-5/6 ${isLight ? 'bg-gray-100' : 'bg-slate-800'} rounded`}></div>
                    <div className="flex gap-2 mt-2">
                      <span className="h-1.5 w-10 bg-purple-400/50 rounded"></span>
                      <span className="h-1.5 w-8 bg-purple-400/50 rounded"></span>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className={`absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-bold ${currentTheme.text}`}>
                    <Zap size={10} /> Content Optimized
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: BACKLINKS (Network) */}
            {activeTab === 4 && (
              <div className="animate-fade-in h-full flex flex-col items-center justify-center">
                <div className="relative w-full h-48 flex items-center justify-center">
                  {/* Central Node */}
                  <div className={`w-14 h-14 rounded-full ${currentTheme.primary} shadow-lg shadow-indigo-500/30 flex items-center justify-center z-10 text-white font-bold text-xs`}>
                    You
                  </div>

                  {/* Satellite Nodes */}
                  {[0, 72, 144, 216, 288].map((deg, i) => (
                    <div
                      key={i}
                      className={`absolute w-8 h-8 ${isLight ? 'bg-white' : 'bg-slate-800'} border ${currentTheme.border} rounded-full flex items-center justify-center shadow-sm animate-float-slow`}
                      style={{
                        transform: `rotate(${deg}deg) translate(80px) rotate(-${deg}deg)`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    >
                      <Globe size={14} className={currentTheme.text} />
                    </div>
                  ))}

                  {/* Connecting Lines (Visual only) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    <circle cx="50%" cy="50%" r="80" stroke={isLight ? "#e2e8f0" : "#334155"} strokeWidth="1" fill="none" strokeDasharray="4 4" />
                  </svg>
                </div>
                <div className="-mt-2 text-center">
                  <p className={`text-xs font-bold ${textColor}`}>High Authority Backlinks</p>
                  <p className={`text-[10px] ${subTextColor}`}>Building your domain authority</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const SearchEngineOptimizationServices = () => {
  const { theme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);
  const testimonialScrollRef = useRef(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true);

  const benefits = [
    {
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      title: "Organic Traffic Growth",
      description: "Drive qualified visitors to your website through strategic SEO optimization and keyword targeting",
      color: "glass-tile",
      bgColor: "glass-tile"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Higher Rankings",
      description: "Dominate search results and outrank competitors with proven white-hat SEO techniques",
      color: "from-purple-500 to-pink-500",
      bgColor: "rgba(168, 85, 247, 0.1)"
    },
    {
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      title: "Better User Experience",
      description: "Improve site speed, mobile responsiveness, and overall usability for maximum engagement",
      color: "from-green-500 to-emerald-500",
      bgColor: "rgba(34, 197, 94, 0.1)"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Long-Term ROI",
      description: "Build sustainable traffic that continues to deliver results and revenue month after month",
      color: "from-orange-500 to-red-500",
      bgColor: "rgba(249, 115, 22, 0.1)"
    }
  ];

  const services = [
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      title: "SEO Audit & Strategy",
      description: "Comprehensive analysis of your website's current SEO health, identifying opportunities and roadblocks. We develop a custom strategy aligned with your business goals and target audience.",
      features: [
        "Technical SEO audit & site health check",
        "Competitor analysis & gap identification",
        "Custom SEO roadmap & implementation plan"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      title: "Keyword Research & Targeting",
      description: "Deep-dive keyword research to identify high-intent search terms that your customers actually use. We target keywords with strong commercial value and achievable rankings.",
      features: [
        "Search intent analysis & keyword mapping",
        "Long-tail keyword opportunities",
        "Competitor keyword gap analysis"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "On-Page Optimization",
      description: "Optimize every element of your web pages for maximum search engine visibility. From meta tags to content structure, we ensure your pages are perfectly optimized.",
      features: [
        "Title tags, meta descriptions & headers",
        "Content optimization & keyword placement",
        "Internal linking & URL structure"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "Technical SEO",
      description: "Ensure search engines can crawl, index, and understand your website perfectly. We fix technical issues that prevent your site from ranking at its full potential.",
      features: [
        "Site speed optimization & Core Web Vitals",
        "Mobile responsiveness & usability",
        "Schema markup & structured data"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      title: "Link Building & Authority",
      description: "Build high-quality backlinks from reputable websites to increase your domain authority and search rankings. We use white-hat strategies for sustainable results.",
      features: [
        "Editorial backlink acquisition",
        "Digital PR & content outreach",
        "Broken link building & resource pages"
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      title: "Content Marketing & SEO",
      description: "Create compelling, SEO-optimized content that attracts organic traffic and engages your audience. From blog posts to landing pages, we craft content that converts.",
      features: [
        "SEO content strategy & planning",
        "Blog writing & article creation",
        "Content refresh & optimization"
      ],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Audit",
      description: "Comprehensive analysis of your website's SEO health and competitor landscape",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 12h6m-6 4h6",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Custom SEO roadmap aligned with your business goals and target audience",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "Execute",
      description: "Implementation of on-page, technical, and off-page SEO optimizations",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      title: "Monitor",
      description: "Continuous tracking, reporting, and optimization for sustained growth",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Director, TechCore Solutions",
      content: "aNquest's SEO services transformed our online presence. We went from page 3 to ranking #1 for our most valuable keywords. Organic traffic increased by 312% in just 8 months!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "James Anderson",
      role: "CEO, GrowthLab Inc",
      content: "The technical SEO audit revealed issues we didn't even know existed. Their team fixed everything and our site speed improved dramatically. Rankings followed suit - we're now dominating our niche.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emily Roberts",
      role: "Founder, Bloom Wellness",
      content: "From keyword research to content optimization, aNquest delivered excellence. We're now getting 2,000+ qualified leads per month from organic search. Best investment we've made!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Michael Chen",
      role: "VP of Marketing, DataFlow Systems",
      content: "Their link building strategy is phenomenal. High-authority backlinks from relevant sites boosted our domain authority from 28 to 52 in one year. Rankings skyrocketed across the board.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      name: "Jennifer Williams",
      role: "Owner, Elite Consultants",
      content: "The monthly SEO reports are incredibly detailed and transparent. We can see exactly what's working and where our traffic is coming from. ROI has been exceptional - 15x our investment!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/72.jpg"
    }
  ];

  // Auto-scroll for testimonials
  useEffect(() => {
    if (!isTestimonialAutoPlaying) return;
    const interval = setInterval(() => {
      if (testimonialScrollRef.current) {
        const cardWidth = testimonialScrollRef.current.children[0]?.offsetWidth || 0;
        const gap = 32;
        const scrollAmount = cardWidth + gap;
        if (currentTestimonialIndex < testimonials.length - 1) {
          testimonialScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          setCurrentTestimonialIndex(prev => prev + 1);
        } else {
          testimonialScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentTestimonialIndex(0);
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentTestimonialIndex, isTestimonialAutoPlaying]);





  return (
    <>
      <SEO
        title="SEO Services - Rank Higher on Google | aNquest Media"
        description="Expert SEO services that drive organic traffic and increase rankings. Technical SEO, keyword research, content optimization, and link building."
        keywords="SEO services, search engine optimization, organic traffic, keyword research, technical SEO, link building, content optimization"
        canonicalUrl="https://anquestmedia.com/seo-services"
      />

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(45, 101, 188, 0.4), 0 0 40px rgba(45, 101, 188, 0.2); 
          }
          50% { 
            box-shadow: 0 0 40px rgba(45, 101, 188, 0.6), 0 0 80px rgba(45, 101, 188, 0.3); 
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .glass-effect {
          background: ${theme === 'light'
          ? 'rgba(255, 255, 255, 0.85)'
          : 'rgba(30, 30, 45, 0.85)'};
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid ${theme === 'light'
          ? 'rgba(45, 101, 188, 0.2)'
          : 'rgba(255, 255, 255, 0.1)'};
        }
        .glass-hero {
          background: ${theme === 'light'
          ? 'rgba(255, 255, 255, 0.7)'
          : 'rgba(26, 26, 40, 0.7)'};
          backdrop-filter: blur(20px);
          border: 1px solid ${theme === 'light'
          ? 'rgba(45, 101, 188, 0.2)'
          : 'rgba(255, 255, 255, 0.1)'};
        }
        .neon-edge {
          box-shadow:
            0 0 10px ${theme === 'light' ? 'rgba(45, 101, 188, 0.3)' : 'rgba(100, 200, 255, 0.4)'},
            0 0 20px ${theme === 'light' ? 'rgba(45, 101, 188, 0.2)' : 'rgba(100, 200, 255, 0.2)'},
            inset 0 0 10px ${theme === 'light' ? 'rgba(45, 101, 188, 0.1)' : 'rgba(100, 200, 255, 0.1)'};
        }
        @keyframes float3d {
          0%, 100% { transform: translate3d(0, 0, 0); }
          25% { transform: translate3d(6px, -6px, 0); }
          50% { transform: translate3d(-8px, -12px, 0); }
          75% { transform: translate3d(4px, -6px, 0); }
        }
        @keyframes floatSlow3d {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }
        .float-3d { animation: float3d 6s ease-in-out infinite; }
        .float-slow-3d { animation: floatSlow3d 8s ease-in-out infinite; }
        .accent-gradient {
          background: linear-gradient(135deg, #2d65bc, #2d65bc, #2d65bc);
          background-size: 200% 200%;
        }
        .neon-pulse-3d {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .perspective-hero { perspective: 2000px; transform-style: preserve-3d; }
        .transform-3d { transform-style: preserve-3d; }
        .tile-3d { transform-style: preserve-3d; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .tile-3d:hover { transform: perspective(1000px) rotateX(2deg) rotateY(2deg) translateZ(10px); }
        .hologram-glow { position: relative; overflow: hidden; }
        .hologram-glow::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,255,255,0.05), rgba(45,101,188,0.08)); transform: rotate(0deg); animation: shimmer 6s linear infinite; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #2d65bc; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      <div className="min-h-screen theme-bg-primary ">

        {/* SIMPLE CENTERED HERO (LIKE MOBILE APPS PAGE) */}
        <section className="relative overflow-hidden h-[600px] flex justify-center items-center    theme-bg-primary">
          <HomeHeroBg theme={theme} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center animate-fade-in">

              <h1 className="text-3xl sm:text-4xl lg:text-5xl poiret-one-regular-bold theme-text-primary mb-6">
                We Build Powerful{" "}
                <span className="text-[#2d65bc]">SEO Solutions</span>
              </h1>

              <p className="text-lg sm:text-xl poiret-one-regular theme-text-secondary max-w-3xl mx-auto leading-relaxed mb-10">
                Data-driven SEO strategies that improve rankings, increase organic traffic,
                and turn search visibility into real business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={buildUrl("/services/digital-marketing/seo/contact-us")}
                  className="bg-[#2d65bc] text-white font-bold py-3 sm:py-4 px-6 sm:px-8
                     rounded-xl hover:bg-[#1a4a8a] transition-all duration-300
                     hover:scale-105 hover:shadow-2xl"
                >
                  Start a Project
                </Link>

                <Link
                  to={buildUrl("/services/digital-marketing/seo/request-a-quote")}
                  className="border-2 border-[#2d65bc] text-[#2d65bc] font-bold
                     py-3 sm:py-4 px-6 sm:px-8 rounded-xl
                     hover:bg-[#2d65bc] hover:text-white
                     transition-all duration-300 hover:scale-105"
                >

                  Talk to Specialist
                </Link>
              </div>

            </div>
          </div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                  bg-[#2d65bc]/10 rounded-full blur-3xl pointer-events-none" />
        </section>


        {/* NEW HIGH-CONVERSION HERO SECTION START */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
          <CircleSquareBgAnimation theme={theme} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">

              {/* Left Column: Conversion Copy */}
              <div className="text-center lg:text-left space-y-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black theme-text-primary leading-tight">
                  Dominate Search Rankings with <span style={{ color: '#2d65bc' }}>Expert SEO</span>
                </h1>

                <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Stop losing customers to competitors. We use data-driven SEO strategies to boost your rankings, drive qualified traffic, and grow your business organically.
                </p>


              </div>

              {/* Right Column: 3D Interactive Dashboard */}
              <div className="display:block relative z-20">
                <div className="relative">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

                  <SEOHeroDashboard />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
        </section>
        {/* HERO SECTION END */}

        {/* Why SEO Section */}
        <section className="py-10 sm:py-10 lg:py-16 theme-bg-secondary relative overflow-hidden">
          <CircleSquareBgAnimation theme={theme} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-2 rounded-full theme-bg-primary mb-4">
                <span className="text-sm font-semibold" style={{ color: '#2d65bc' }}>Why Choose SEO</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                Transform Your <span style={{ color: '#2d65bc' }}>Online Visibility</span>
              </h2>
              <p className="text-lg sm:text-xl theme-text-secondary max-w-6xl mx-auto leading-relaxed">
                SEO isn't just about rankings—it's about connecting with customers who are actively searching for what you offer. Organic search delivers the highest quality traffic and best ROI of any marketing channel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="glass-tile rounded-2xl p-3 lg:p-4 depth-3d hover:scale-102 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(`benefit-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-[#2d65bc] flex items-center justify-center mb-4 ${hoveredCard === `benefit-${index}` ? 'micro-bounce' : ''
                      }`}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold theme-text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm theme-text-secondary">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Detailed Section */}
        <section id='services' className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
          <CircleSquareBgAnimation theme={theme} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-2 rounded-full theme-bg-secondary mb-4">
                <span className="text-sm font-semibold" style={{ color: '#2d65bc' }}>Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                Complete SEO <span style={{ color: '#2d65bc' }}>Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl theme-text-secondary max-w-6xl mx-auto leading-relaxed">
                From technical optimization to content strategy, we offer comprehensive SEO services designed to improve your search visibility and drive sustainable organic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-tile rounded-2xl p-3 lg:p-6 depth-3d hover:scale-102 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#2d65bc] flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold theme-text-primary mb-2">{service.title}</h3>
                      <p className="theme-text-secondary text-sm mb-3">{service.description}</p>
                      {service.features && (
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm theme-text-secondary">
                              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2d65bc' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* <Link
                        to="/contact-us"
                        className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-lg text-white font-semibold text-sm transition-all duration-300 hover:scale-102"
                        style={{ backgroundColor: '#2d65bc' }}
                      >
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-10 sm:py-10 lg:py-16 theme-bg-secondary relative overflow-hidden">
          <CircleSquareBgAnimation theme={theme} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-2 rounded-full theme-bg-primary mb-4">
                <span className="text-sm font-semibold" style={{ color: '#2d65bc' }}>Our Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                Our Path to <span style={{ color: '#2d65bc' }}>Page #1</span>
              </h2>
              <p className="text-lg sm:text-xl theme-text-secondary max-w-6xl mx-auto leading-relaxed">
                A proven 4-step methodology that delivers consistent, sustainable SEO results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="glass-tile rounded-2xl p-3 lg:p-4 depth-3d text-center hover:scale-102 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(`process-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative inline-block mb-4">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-[#2d65bc] flex items-center justify-center mx-auto ${hoveredCard === `process-${index}` ? 'micro-bounce' : ''
                        }`}
                    >
                      <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2d65bc] flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold theme-text-primary mb-3">{step.title}</h3>
                  <p className="text-sm theme-text-secondary">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-10 sm:py-10 lg:py-15 theme-bg-primary relative overflow-hidden">
          <CircleSquareBgAnimation theme={theme} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
            <div className="mx-auto text-center max-w-6xl ">
              <div className="rounded-3xl p-3 sm:p-4 py-4 sm:py-8 lg:py-12 lg:p-4 theme-shadow-primary relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                    Ready to <span style={{ color: '#2d65bc' }}>Rank Higher?</span>
                  </h2>

                  <p className="text-lg sm:text-xl theme-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                    Let's create a winning SEO strategy tailored to your business. Get started with a free consultation and SEO audit today.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/services/digital-marketing/seo/contact-us"
                      className="inline-flex items-center justify-center px-4 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-102 shadow-lg"
                      style={{ backgroundColor: '#2d65bc' }}
                    >
                      Get Free SEO Audit
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link
                      to="/services/digital-marketing/seo/request-a-quote"
                      className="inline-flex items-center justify-center px-4 py-4 font-bold rounded-xl transition-all duration-300 border-2 theme-text-primary theme-border-[#2d65bc]"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes microBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .micro-bounce {
          animation: microBounce 0.8s ease-in-out infinite;
        }
        
        .glass-tile {
          background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 50, 0.85)'};
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid ${theme === 'light' ? 'rgba(45, 101, 188, 0.3)' : 'rgba(100, 200, 255, 0.2)'};
        }
        
        .depth-3d {
          box-shadow: ${theme === 'light'
          ? '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)'
          : '0 10px 40px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)'};
          transform-style: preserve-3d;
        }
        
        .overflow-x-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default SearchEngineOptimizationServices;
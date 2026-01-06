import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  BarChart3,
  Hash,
  MessageCircle,
  Calendar,
  Target,
  Zap,
  CheckCircle,
  Share2,
  Globe,
  PenTool,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../../Context/ThemeContext';
import CircleSquareBgAnimation from '../../Components/Bg-animation-template/CircleSquareBgAnimation';
import SEO from '../../Components/SEO';
import { buildUrl } from '../../utils/urlUtils';
import HomeHeroBg from '../../Components/Bg-animation-template/HomeHeroBg';

const SMOHeroDashboard = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const isLight = theme === 'light';
  const themeStyles = {
    blue: { primary: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', light: 'bg-blue-50', darkLight: 'dark:bg-blue-900/30', gradient: 'from-blue-600 to-cyan-500' },
    green: { primary: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', light: 'bg-emerald-50', darkLight: 'dark:bg-emerald-900/30', gradient: 'from-emerald-600 to-teal-500' },
    orange: { primary: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', light: 'bg-orange-50', darkLight: 'dark:bg-orange-900/30', gradient: 'from-orange-500 to-yellow-500' },
    purple: { primary: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600', light: 'bg-purple-50', darkLight: 'dark:bg-purple-900/30', gradient: 'from-purple-600 to-pink-500' },
    indigo: { primary: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-600', light: 'bg-indigo-50', darkLight: 'dark:bg-indigo-900/30', gradient: 'from-indigo-600 to-violet-500' }
  };
  const tabs = [
    { id: 'engagement', label: 'Engagement', icon: Zap, theme: 'green' },
    { id: 'reach', label: 'Reach', icon: Share2, theme: 'blue' },
    { id: 'community', label: 'Community', icon: MessageCircle, theme: 'orange' },
    { id: 'content', label: 'Content', icon: PenTool, theme: 'purple' },
    { id: 'ads', label: 'Ads', icon: Target, theme: 'indigo' }
  ];
  const currentTheme = themeStyles[tabs[activeTab].theme];
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
    <div className="w-full max-w-[600px] h-[380px] relative perspective-hero mx-auto lg:mr-0 display:block" onMouseEnter={() => setIsAutoPlay(false)} onMouseLeave={() => setIsAutoPlay(true)}>
      <div className={`absolute inset-0 rounded-2xl backdrop-blur-xl border shadow-2xl flex overflow-hidden ${glassClass} transition-all duration-500`}>
        <div className={`w-16 flex flex-col items-center hidden sm:block py-6 gap-4 border-r border-gray-200/10 z-20 ${isLight ? 'bg-gray-50/50' : 'bg-slate-900/50'}`}>
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-2 font-bold text-xs">SMO</div>
          {tabs.map((tab, index) => (
            <button key={tab.id} onClick={(e) => { e.stopPropagation(); handleTabClick(index); }} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative group ${activeTab === index ? `${themeStyles[tab.theme].primary} text-white shadow-lg scale-105` : `text-gray-400 ${isLight ? 'hover:bg-gray-200/50' : 'hover:bg-slate-800/50'}`}`}>
              <tab.icon size={18} />
              <div className="absolute left-14 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none translate-x-2 group-hover:translate-x-0">{tab.label}</div>
            </button>
          ))}
        </div>
        <div className={`flex-1 flex flex-col h-full relative ${isLight ? 'bg-white' : 'bg-slate-950'}`}>
          <div className={`h-12 border-b flex items-center px-6 gap-4 backdrop-blur justify-between ${isLight ? 'border-gray-100 bg-gray-50/50' : 'border-slate-800 bg-slate-900/80'}`}>
            <div className="flex gap-4 items-center">
              <div className={`text-xs font-bold ${textColor}`}>Dashboard</div>
              <div className={`h-4 w-[1px] ${isLight ? 'bg-gray-300' : 'bg-slate-700'}`}></div>
              <div className={`text-[10px] font-mono ${currentTheme.text} bg-current/10 px-2 py-0.5 rounded`}>{tabs[activeTab].label}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden relative p-6">
            {activeTab === 0 && (
              <div className="animate-fade-in h-full flex flex-col justify-center space-y-4">
                <div className="flex justify-between items-end mb-1">
                  <div>
                    <div className={`text-[10px] font-bold ${subTextColor} uppercase tracking-wider`}>Engagement Rate</div>
                    <div className={`text-3xl font-bold ${textColor} flex items-end gap-2`}>4.2% <span className="text-xs font-medium text-emerald-500 mb-1 bg-emerald-500/10 px-1.5 py-0.5 rounded">+12%</span></div>
                  </div>
                </div>
                <div className="relative h-32 w-full flex items-end gap-1.5">
                  {[25, 40, 35, 55, 50, 70, 65, 80, 72, 88, 90, 95].map((h, i) => (
                    <div key={i} className={`flex-1 rounded-t-sm transition-all duration-500 ${currentTheme.primary} opacity-20 hover:opacity-80`} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="animate-fade-in h-full flex flex-col justify-center">
                <div className="mb-6">
                  <div className={`text-[10px] font-bold ${subTextColor} uppercase tracking-wider`}>Organic Reach</div>
                  <div className={`text-3xl font-bold ${textColor} flex items-end gap-2`}>125,430 <span className="text-xs font-medium text-emerald-500 mb-1 bg-emerald-500/10 px-1.5 py-0.5 rounded">+28%</span></div>
                </div>
                <div className="relative h-32 w-full flex items-end gap-1.5">
                  {[30, 45, 35, 60, 50, 75, 65, 85, 70, 95, 90, 100].map((h, i) => (
                    <div key={i} className={`flex-1 rounded-t-sm transition-all duration-500 ${currentTheme.primary} opacity-20 hover:opacity-80`} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="animate-fade-in h-full flex items-center justify-center gap-8">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" className={`${isLight ? 'text-gray-100' : 'text-slate-800'}`} fill="none" />
                    <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" className={`${currentTheme.text}`} fill="none" strokeDasharray="351" strokeDashoffset="60" strokeLinecap="round" />
                  </svg>
                  <div className="absolute text-center">
                    <div className={`text-3xl font-bold ${textColor}`}>82</div>
                    <div className={`text-[10px] ${subTextColor}`}>Community Health</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className={`flex items-center gap-2 text-xs ${textColor}`}><CheckCircle size={14} className="text-emerald-500" /> Response Time</div>
                  <div className={`flex items-center gap-2 text-xs ${textColor}`}><CheckCircle size={14} className="text-emerald-500" /> Inbox Resolutions</div>
                  <div className={`flex items-center gap-2 text-xs ${textColor}`}><CheckCircle size={14} className="text-emerald-500" /> Positive Sentiment</div>
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="animate-fade-in h-full flex flex-col justify-center">
                <div className={`p-5 rounded-xl border ${isLight ? 'border-gray-100' : 'border-slate-800'} relative overflow-hidden shadow-sm`}>
                  <div className="flex justify-between items-center mb-4">
                    <div className={`text-xs font-bold ${textColor}`}>Content Cadence</div>
                    <div className={`text-[10px] px-2 py-0.5 rounded-full ${currentTheme.light} ${currentTheme.darkLight} ${currentTheme.text}`}>Best Times Set</div>
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
                  <div className={`absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-bold ${currentTheme.text}`}><Zap size={10} /> Content Optimized</div>
                </div>
              </div>
            )}
            {activeTab === 4 && (
              <div className="animate-fade-in h-full flex flex-col items-center justify-center">
                <div className="relative w-full h-48 flex items-center justify-center">
                  <div className={`w-14 h-14 rounded-full ${currentTheme.primary} shadow-lg flex items-center justify-center z-10 text-white font-bold text-xs`}>Ads</div>
                  {[0, 72, 144, 216, 288].map((deg, i) => (
                    <div key={i} className={`absolute w-8 h-8 ${isLight ? 'bg-white' : 'bg-slate-800'} border ${currentTheme.border} rounded-full flex items-center justify-center shadow-sm animate-float-slow`} style={{ transform: `rotate(${deg}deg) translate(80px) rotate(-${deg}deg)`, animationDelay: `${i * 0.2}s` }}>
                      <Target size={14} className={currentTheme.text} />
                    </div>
                  ))}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    <circle cx="50%" cy="50%" r="80" stroke={isLight ? '#e2e8f0' : '#334155'} strokeWidth="1" fill="none" strokeDasharray="4 4" />
                  </svg>
                </div>
                <div className="-mt-2 text-center">
                  <p className={`text-xs font-bold ${textColor}`}>Optimized Ad Network</p>
                  <p className={`text-[10px] ${subTextColor}`}>Retargeting and creatives testing</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialMediaOptimizationServices = () => {
  const { theme } = useTheme();





  const services = [
    {
      title: 'Profile Optimization',
      description:
        "Optimize brand profiles across platforms (Facebook, Instagram, LinkedIn, X) to boost discoverability and trust.",
      icon: Users,
      bgImage:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop',
      features: [
        'Bio and handle optimization',
        'Branded visuals and highlights',
        'Link-in-bio strategy',
        'Platform-specific best practices',
        'Compliance and guidelines'
      ]
    },
    {
      title: 'Content Strategy & Scheduling',
      description:
        'Create content calendars and publish consistently with a mix of storytelling, education, and conversion posts.',
      icon: Calendar,
      bgImage:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop',
      features: [
        'Monthly content calendar',
        'Post templates and assets',
        'Best posting times',
        'Series and campaigns',
        'A/B content testing'
      ]
    },
    {
      title: 'Hashtag & Keyword Research',
      description:
        'Identify high-impact hashtags and keywords to increase reach, discovery, and engagement on social platforms.',
      icon: Hash,
      bgImage:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop',
      features: [
        'Trending hashtag sets',
        'Niche keyword clusters',
        'Geo-targeted tags',
        'Branded hashtags',
        'Performance tracking'
      ]
    },
    {
      title: 'Community Engagement',
      description:
        'Build relationships with your audience through replies, DMs, comments, and UGC programs to foster loyalty.',
      icon: MessageCircle,
      bgImage:
        'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop',
      features: [
        'Inbox and comment workflows',
        'UGC curation and reposts',
        'Influencer mentions',
        'Community guidelines',
        'Sentiment tracking'
      ]
    },
    {
      title: 'Paid Social Optimization',
      description:
        'Optimize ad sets for conversion, reach, and engagement across Meta, LinkedIn, TikTok, and more.',
      icon: Target,
      bgImage:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop',
      features: [
        'Audience targeting',
        'Creative testing',
        'Retargeting flows',
        'Conversion tracking',
        'Budget pacing'
      ]
    },
    {
      title: 'Analytics & Reporting',
      description:
        'Measure performance using platform analytics and custom dashboards focused on business outcomes.',
      icon: BarChart3,
      bgImage:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      features: [
        'Engagement rate analysis',
        'Reach and impressions',
        'Follower growth tracking',
        'CTR and conversions',
        'Monthly strategy reviews'
      ]
    }
  ];

  const processSteps = [
    { number: '1', title: 'Audit', description: 'Assess current profiles, content, and performance to identify quick wins.' },
    { number: '2', title: 'Strategy', description: 'Build a tailored content and engagement plan aligned to goals.' },
    { number: '3', title: 'Optimize', description: 'Deploy improvements across profiles, posts, hashtags, and workflows.' },
    { number: '4', title: 'Measure', description: 'Track metrics, iterate monthly, and scale what works.' }
  ];

  const results = [
    { percentage: '+68%', title: 'Engagement Rate', description: 'Average increase across core platforms after 90 days.' },
    { percentage: '+52%', title: 'Organic Reach', description: 'Expanded non-paid visibility with hashtag and content strategy.' },
    { percentage: '+40%', title: 'Follower Growth', description: 'Consistent audience growth from improved content cadence.' }
  ];

  return (
    <>
      <SEO
        title="Social Media Optimization (SMO) Services | aNquest"
        description="Increase engagement, reach, and conversions with data-driven SMO: profile optimization, content strategy, hashtags, community management, and analytics."
        keywords="social media optimization, SMO, engagement rate, hashtag research, content calendar, community management"
        ogType="website"
      />

      <div className="relative">


        <div className="min-h-screen theme-bg-primary relative z-10">
          <section className="relative overflow-hidden h-[550px] flex justify-center items-center py-16 sm:py-18 lg:py-20 theme-bg-primary">

            {/* Background animation */}
            <HomeHeroBg theme={theme} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-5xl mx-auto text-center">

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                  We Build Powerful{" "}
                  <span className="text-[#2d65bc]">Mobile Apps</span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed mb-10">
                  Expert mobile app development using modern technologies. From native iOS &
                  Android to cross-platform solutions, we deliver scalable, high-performance
                  mobile experiences.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={buildUrl("/request-a-quote")}
                    className="bg-[#2d65bc] text-white font-bold
                     py-3 sm:py-4 px-6 sm:px-8
                     rounded-xl transition-all duration-300
                     hover:bg-[#1a4a8a]
                     hover:scale-105 hover:shadow-xl"
                  >
                    Start a Project
                  </Link>

                  <button
                    onClick={() =>
                      document
                        .getElementById("case-studies")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="border-2 border-[#2d65bc] text-[#2d65bc] font-bold
                     py-3 sm:py-4 px-6 sm:px-8
                     rounded-xl transition-all duration-300
                     hover:bg-[#2d65bc] hover:text-white
                     hover:scale-105"
                  >
                    See Case Studies
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* Hero */}
          <section className="py-10 sm:py-12 md:py-16 theme-gradient-primary relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <CircleSquareBgAnimation theme={theme} containerType="absolute" />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                <div className="text-center lg:text-left">
                  {/* <div className="inline-block px-4 py-2 rounded-full theme-bg-secondary mb-4">
                    <span className="text-sm font-semibold" style={{ color: '#2d65bc' }}>Social Media</span>
                  </div> */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold theme-text-primary mb-6 leading-tight">
                    Social Media <span style={{ color: '#2d65bc' }}>Optimization</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl theme-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Grow faster on social with a strategy that blends content, community, and analytics. We turn attention into action across every major platform.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      to={buildUrl('/request-a-quote')}
                      className="group inline-flex items-center justify-center gap-2 bg-[#2d65bc] text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105 theme-shadow-card-hover"
                    >
                      Start Your SMO Plan
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to={buildUrl('/contacts')}
                      className="inline-flex items-center justify-center gap-2 border-2 theme-border-accent theme-text-accent font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <SMOHeroDashboard />
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-10 sm:py-12 lg:py-16 theme-bg-primary relative overflow-hidden">
            <CircleSquareBgAnimation theme={theme} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12 sm:mb-16">
                {/* <div className="inline-block px-4 py-2 rounded-full theme-bg-secondary mb-4">
                  <span className="text-sm font-semibold" style={{ color: '#2d65bc' }}>Our Services</span>
                </div> */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                  Complete SMO <span style={{ color: '#2d65bc' }}>Solutions</span>
                </h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-6xl mx-auto leading-relaxed">
                  From content strategy to analytics, we deliver end-to-end social media optimization tailored to your brand and audience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="rounded-2xl overflow-hidden theme-shadow-card hover:theme-shadow-card-hover transition-all duration-300 hover:scale-[1.02]">
                      <div
                        className="h-40 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.bgImage})` }}
                      />
                      <div className="theme-card p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-[#2d65bc] flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold theme-text-primary">{service.title}</h3>
                            <p className="theme-text-secondary text-sm sm:text-base leading-relaxed">{service.description}</p>
                          </div>
                        </div>

                        <ul className="theme-text-muted space-y-2 mt-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="theme-accent-primary mr-2">•</span>
                              <span className="text-sm sm:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-10 sm:py-12 lg:py-16 theme-bg-primary relative overflow-hidden">
            <CircleSquareBgAnimation theme={theme} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12 sm:mb-16">
                {/* <div className="inline-block px-4 py-2 rounded-full theme-bg-secondary mb-4">
                  <span className="text-sm font-semibold" style={{ color: '#2d65bc' }}>Process</span>
                </div> */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                  Our Path to <span style={{ color: '#2d65bc' }}>Social Growth</span>
                </h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-6xl mx-auto leading-relaxed">
                  A clear 4-step methodology that improves engagement and reach consistently across platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="theme-card rounded-2xl p-6 sm:p-8 text-center hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 theme-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-white font-bold text-2xl sm:text-3xl">{step.number}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold theme-text-primary mb-3 sm:mb-4">{step.title}</h3>
                    <p className="theme-text-secondary text-sm sm:text-base leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="py-10 sm:py-12 lg:py-16 theme-bg-primary relative overflow-hidden">
            <CircleSquareBgAnimation theme={theme} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center theme-text-primary mb-12 sm:mb-16">Results You Can Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {results.map((result, index) => (
                  <div key={index} className="theme-card rounded-2xl p-6 sm:p-8 text-center hover:theme-shadow-secondary transition-all duration-300 hover:scale-105">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#2d65bc' }}>
                      {result.percentage}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold theme-text-primary mb-3">{result.title}</h3>
                    <p className="theme-text-secondary text-sm sm:text-base leading-relaxed">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-10 sm:py-12 lg:py-16 theme-bg-primary relative overflow-hidden">
            <CircleSquareBgAnimation theme={theme} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">Why Choose Our SMO?</h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto leading-relaxed">Turn likes into leads with a strategy that focuses on meaningful outcomes.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: CheckCircle, title: 'Platform Expertise', description: 'Execution across Meta, Instagram, LinkedIn, X, TikTok.' },
                  { icon: Globe, title: 'Audience Growth', description: 'Attract relevant followers with content and engagement.' },
                  { icon: PenTool, title: 'Better Creatives', description: 'Performant visuals and copy tailored to each platform.' },
                  { icon: Target, title: 'Outcome-Focused', description: 'KPIs aligned with business goals and conversions.' },
                  { icon: Zap, title: 'Fast Iteration', description: 'Weekly optimizations based on performance data.' },
                  { icon: Share2, title: 'Amplified Reach', description: 'Hashtag clusters and cross-platform distribution.' }
                ].map((item, index) => (
                  <div key={index} className="theme-card rounded-2xl p-6 sm:p-8 hover:theme-shadow-secondary transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-[#2d65bc] flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold theme-text-primary mb-2">{item.title}</h3>
                    <p className="theme-text-secondary text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-10 sm:py-10 lg:py-15 theme-bg-primary relative overflow-hidden">
            <CircleSquareBgAnimation theme={theme} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
              <div className="mx-auto text-center max-w-6xl">
                <div className="rounded-3xl p-3 sm:p-4 py-4 sm:py-8 lg:py-12 lg:p-4 theme-shadow-primary relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                      Ready to Grow on <span style={{ color: '#2d65bc' }}>Social Media?</span>
                    </h2>

                    <p className="text-lg sm:text-xl theme-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                      Get a tailored SMO strategy and start turning attention into measurable results. Let's build your social presence together!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/contacts"
                        className="inline-flex items-center justify-center px-4 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-102 shadow-lg"
                        style={{ backgroundColor: '#2d65bc' }}
                      >
                        Get Free Consultation
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <Link
                        to="/request-a-quote"
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
      </div>
    </>
  );
};

export default SocialMediaOptimizationServices;

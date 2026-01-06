import React, { useState, useEffect, useRef } from 'react';
import {
  Code, Server, Layers, ShoppingCart, FileText, Smartphone, Zap, Database,
  Globe, Lock, TrendingUp, Users, CheckCircle2, ArrowRight, Star, X, Package,
  ChevronLeft, ChevronRight, Cloud, Brain, ShieldCheck, Layout, GitBranch, Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../Context/ThemeContext';
import CircleSquareBgAnimation from '../../Components/Bg-animation-template/CircleSquareBgAnimation';
import { buildUrl } from '../../utils/urlUtils';
import SEO from '../../Components/SEO';
import HomeHeroBg from '../../Components/Bg-animation-template/HomeHeroBg';

// --- NEW SUB-COMPONENT: Interactive Web Dev Dashboard (Client Friendly) ---
const WebDevHeroDashboard = ({ theme }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const isLight = theme === 'light';

  // Updated Tabs: Translated from Tech terms to Business Value terms
  const tabs = [
    { id: 'frontend', label: 'Speed & Experience', icon: Layout, color: 'text-blue-500' },
    { id: 'backend', label: 'Real-Time Data', icon: Zap, color: 'text-yellow-500' },
    { id: 'mobile', label: 'Mobile Ready', icon: Smartphone, color: 'text-purple-500' },
    { id: 'scaling', label: 'Growth & Scale', icon: TrendingUp, color: 'text-orange-500' },
    { id: 'security', label: 'Data Security', icon: ShieldCheck, color: 'text-green-500' },
  ];

  // Auto-Rotate Logic
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % tabs.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Manual Click Handler
  const handleManualClick = (index) => {
    setActiveTab(index);
    setIsAutoPlay(false);
    // Resume auto-play after 5s of inactivity
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const glassClass = isLight ? 'bg-white/90 border-white/60' : 'bg-slate-900/90 border-slate-700/60';
  const cardBg = isLight ? 'bg-white border-gray-100' : 'bg-slate-800 border-slate-700';
  const textColor = isLight ? 'text-gray-800' : 'text-gray-100';
  const subTextColor = isLight ? 'text-gray-500' : 'text-gray-400';

  return (
    <div
      className="w-full max-w-[650px] h-[450px] relative perspective-hero mx-auto lg:mr-0 display:block"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* 3D Container */}
      <div className={`absolute inset-0 rounded-3xl p-4 backdrop-blur-xl border shadow-2xl transform-3d rotate-y-12 hover:rotate-y-0 transition-all duration-700 ease-out ${glassClass}`}>
        {/* Header */}
        <div className="flex items-center justify-between  pb-4 border-b border-gray-200/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-mono px-2 py-1 rounded-md transition-colors ${!isAutoPlay ? 'text-blue-500 font-bold bg-blue-50' : 'text-gray-400 bg-gray-100/10'}`}>
              {!isAutoPlay ? 'Interactive Mode' : 'Live Preview'}
            </span>
            <div className="text-[10px] font-mono text-gray-400">System: Online</div>
          </div>
        </div>

        <div className="flex h-[calc(100%-60px)] gap-6 border-r border-gray-500/10 ">
          {/* Sidebar */}
          <div className="w-15 flex flex-col gap-1 hidden sm:block border-r border-gray-500/10 p-2 overflow-y-auto custom-scrollbar relative z-50">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={(e) => { e.stopPropagation(); handleManualClick(index); }}
                className={`flex items-center  justify-center space-y-6 mb-2 p-3 rounded-lg transition-all duration-200 group cursor-pointer  ${activeTab === index
                  ? `bg-[#2d65bc] text-white shadow-md transform scale-105`
                  : `text-gray-400  hover:bg-gray-500/10`
                  }`}
                title={tab.label}
              >
                <tab.icon size={20} className={activeTab === index ? 'text-white ' : tab.color} />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 relative overflow-hidden h-full pt-4">

            {/* TAB 1: FRONTEND -> SPEED & EXPERIENCE */}
            {activeTab === 0 && (
              <div className="animate-fade-in space-y-4 h-full flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold">User Experience & Speed</span>
                </div>
                <div className={`p-4 rounded-xl border ${cardBg} relative overflow-hidden`}>
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className={`font-bold ${textColor}`}>Page Load Speed</h3>
                    <span className="text-green-500 font-mono font-bold">0.4 Seconds</span>
                  </div>
                  {/* Simplified Bar Chart representing User Satisfaction */}
                  <div className="flex gap-2 items-end h-16 mb-2">
                    <div className="w-1/3 bg-blue-500/10 h-full rounded-t relative group flex justify-center">
                      <div className="absolute bottom-0 w-full bg-blue-400 h-[60%] rounded-t opacity-50"></div>
                      <span className="absolute -bottom-6 text-[10px]">Competitors</span>
                    </div>
                    <div className="w-1/3 bg-blue-500/10 h-full rounded-t relative group flex justify-center">
                      <div className="absolute bottom-0 w-full bg-blue-500 h-[98%] rounded-t transition-all duration-1000"></div>
                      <span className="absolute -bottom-6 text-[10px] font-bold text-blue-500">Your Site</span>
                    </div>
                    <div className="w-1/3 bg-blue-500/10 h-full rounded-t relative group flex justify-center">
                      <div className="absolute bottom-0 w-full bg-blue-600 h-[100%] rounded-t transition-all duration-1000 delay-100"></div>
                      <span className="absolute -bottom-6 text-[10px]">Google Rank</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className={`p-3 rounded-lg border ${cardBg} flex items-center gap-3`}>
                    <div className="p-1.5 bg-green-100 rounded text-green-600"><CheckCircle2 size={14} /></div>
                    <div>
                      <div className="text-[10px] uppercase text-gray-400">SEO Ready</div>
                      <div className={`font-bold text-xs ${textColor}`}>Rank Higher</div>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg border ${cardBg} flex items-center gap-3`}>
                    <div className="p-1.5 bg-blue-100 rounded text-blue-600"><Users size={14} /></div>
                    <div>
                      <div className="text-[10px] uppercase text-gray-400">Retention</div>
                      <div className={`font-bold text-xs ${textColor}`}>Users Stay</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: BACKEND -> REAL TIME DATA */}
            {activeTab === 1 && (
              <div className="animate-fade-in space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold">Real-Time Business Operations</span>
                </div>

                {/* Simulated Business Activity Feed */}
                <div className={`p-4 rounded-xl border ${cardBg} space-y-3`}>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100/10">
                    <span className={`text-xs font-bold ${subTextColor}`}>Live Activity Feed</span>
                    <span className="text-[10px] text-green-500 animate-pulse">● Live</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 animate-fade-in">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><ShoppingCart size={14} /></div>
                      <div className="flex-1">
                        <p className={`text-xs font-semibold ${textColor}`}>New Order #2841 Received</p>
                        <p className="text-[10px] text-gray-400">Payment processed successfully</p>
                      </div>
                      <span className="text-[10px] text-gray-400">Just now</span>
                    </div>

                    <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Users size={14} /></div>
                      <div className="flex-1">
                        <p className={`text-xs font-semibold ${textColor}`}>New User Registration</p>
                        <p className="text-[10px] text-gray-400">Welcome email sent</p>
                      </div>
                      <span className="text-[10px] text-gray-400">2s ago</span>
                    </div>

                    <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '1s' }}>
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><Globe size={14} /></div>
                      <div className="flex-1">
                        <p className={`text-xs font-semibold ${textColor}`}>Content Updated</p>
                        <p className="text-[10px] text-gray-400">Synced across all devices</p>
                      </div>
                      <span className="text-[10px] text-gray-400">5s ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: MOBILE -> MOBILE READY */}
            {activeTab === 2 && (
              <div className="animate-fade-in flex flex-col justify-center h-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold">Works on Any Device</span>
                </div>
                <div className="flex justify-center mb-4">
                  <div className={`w-32 h-48 border-4 border-gray-700 rounded-[1.5rem] relative bg-gray-900 overflow-hidden shadow-xl transform rotate-3 transition-transform hover:rotate-0`}>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-lg z-20"></div>
                    {/* Screen Content */}
                    <div className="w-full h-full bg-white relative">
                      <div className="h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-b-xl flex items-center justify-center text-white font-bold text-xs">
                        Your Brand App
                      </div>
                      <div className="p-2 space-y-2">
                        <div className="flex gap-2">
                          <div className="h-6 w-6 bg-gray-100 rounded-full"></div>
                          <div className="h-2 bg-gray-100 rounded w-2/3 mt-2"></div>
                        </div>
                        <div className="h-16 bg-gray-100 rounded w-full mt-2 flex items-center justify-center text-[8px] text-gray-400">
                          Perfect Mobile View
                        </div>
                      </div>
                      {/* Install PWA Button */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                        Download App
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center gap-3 mt-2 text-[10px] text-gray-400">
                    <span className="bg-gray-500/10 px-2 py-1 rounded flex items-center gap-1"><CheckCircle2 size={10} /> iOS (iPhone)</span>
                    <span className="bg-gray-500/10 px-2 py-1 rounded flex items-center gap-1"><CheckCircle2 size={10} /> Android</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: DEVOPS -> GROWTH & SCALE */}
            {activeTab === 3 && (
              <div className="animate-fade-in space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold">Built to Scale</span>
                </div>
                <div className={`p-4 rounded-xl border ${cardBg} relative overflow-hidden h-40 flex flex-col justify-end`}>
                  <div className="absolute top-3 left-4">
                    <p className={`text-xs font-bold ${textColor}`}>Traffic Capacity</p>
                    <p className="text-[10px] text-green-500">Auto-scaling enabled</p>
                  </div>

                  {/* Visual Growth Graph */}
                  <div className="flex items-end justify-between h-24 w-full gap-1 px-2">
                    <div className="w-1/6 bg-orange-400/20 h-[20%] rounded-t"></div>
                    <div className="w-1/6 bg-orange-400/30 h-[35%] rounded-t"></div>
                    <div className="w-1/6 bg-orange-400/40 h-[45%] rounded-t"></div>
                    <div className="w-1/6 bg-orange-400/60 h-[60%] rounded-t"></div>
                    <div className="w-1/6 bg-orange-400/80 h-[85%] rounded-t relative">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] px-2 py-0.5 rounded-full whitespace-nowrap">
                        Viral Growth
                      </div>
                    </div>
                    <div className="w-1/6 bg-orange-500 h-[100%] rounded-t"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className={`p-3 rounded-xl border ${cardBg}`}>
                    <Cloud size={20} className="text-blue-500 mb-2" />
                    <div className="text-[10px] text-gray-400">Server Power</div>
                    <div className={`font-bold text-sm ${textColor}`}>Infinite Scale</div>
                  </div>
                  <div className={`p-3 rounded-xl border ${cardBg}`}>
                    <CheckCircle2 size={20} className="text-green-500 mb-2" />
                    <div className="text-[10px] text-gray-400">Reliability</div>
                    <div className={`font-bold text-sm ${textColor}`}>Always Online</div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: SECURITY -> DATA SECURITY */}
            {activeTab === 4 && (
              <div className="animate-fade-in flex flex-col justify-center h-full space-y-4">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 animate-pulse-slow">
                    <ShieldCheck size={36} className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className={`font-bold ${textColor} text-lg`}>Enterprise Security</h4>
                  <p className={`text-xs ${subTextColor}`}>Your customer data is safe</p>
                </div>
                <div className="space-y-2 px-2">
                  <div className={`flex items-center gap-3 text-xs ${textColor} bg-green-500/5 p-2.5 rounded-lg border border-green-500/10`}>
                    <Lock size={14} className="text-green-500" />
                    <div>
                      <p className="font-semibold">Secure Payments</p>
                      <p className="text-[10px] opacity-70">Bank-grade encryption</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 text-xs ${textColor} bg-green-500/5 p-2.5 rounded-lg border border-green-500/10`}>
                    <Users size={14} className="text-green-500" />
                    <div>
                      <p className="font-semibold">Data Privacy</p>
                      <p className="text-[10px] opacity-70">GDPR Compliant protection</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

const WebDevelopment = () => {
  const { theme } = useTheme();
  const scrollRef = useRef(null);
  const testimonialScrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true);

  const typingPhrases = ['Web Apps', 'PWA', 'SaaS', 'E-commerce'];

  // Typing animation effect
  useEffect(() => {
    const phrase = typingPhrases[typingIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= phrase.length) {
        setTypingText(phrase.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTypingIndex((prev) => (prev + 1) % typingPhrases.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [typingIndex]);

  const filters = [
    { id: 'all', label: 'All Services' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ecommerce', label: 'E-commerce' }
  ];

  const services = [
    {
      title: "Frontend Engineering",
      description: "Pixel-perfect, accessible UIs using React / Next.js / TypeScript",
      icon: Code,
      category: 'frontend',
      features: [
        "React & Next.js Development",
        "Vue.js & Nuxt.js",
        "TypeScript Integration",
        "Responsive Design",
        "Performance Optimization"
      ]
    },
    {
      title: "Backend & APIs",
      description: "Scalable APIs, auth, and integrations with Node / Nest / PostgreSQL",
      icon: Server,
      category: 'backend',
      features: [
        "Node.js & Express",
        "NestJS Framework",
        "RESTful & GraphQL APIs",
        "Database Architecture",
        "Authentication & Security"
      ]
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end product delivery, CI/CD and observability",
      icon: Layers,
      category: 'fullstack',
      features: [
        "MERN Stack Solutions",
        "End-to-End Development",
        "CI/CD Pipeline Setup",
        "Cloud Deployment",
        "Monitoring & Logging"
      ]
    },
    {
      title: "E-commerce Platforms",
      description: "Custom stores & headless commerce that convert",
      icon: ShoppingCart,
      category: 'ecommerce',
      features: [
        "Custom E-Commerce Sites",
        "Headless Commerce",
        "Payment Integration",
        "Inventory Management",
        "Analytics & Tracking"
      ]
    },
    {
      title: "SaaS Product Builds",
      description: "Secure, multi-tenant, and scalable SaaS architectures",
      icon: FileText,
      category: 'fullstack',
      features: [
        "Multi-Tenant Architecture",
        "Subscription Management",
        "User Authentication",
        "Admin Dashboards",
        "API Integration"
      ]
    },
    {
      title: "Progressive Web Apps",
      description: "Fast, offline-ready web experiences that feel native",
      icon: Smartphone,
      category: 'mobile',
      features: [
        "PWA Development",
        "Offline Functionality",
        "Push Notifications",
        "App-like Experience",
        "Cross-Platform Support"
      ]
    },
    {
      title: "Platform Integrations",
      description: "Payments, CRMs, analytics, and third-party APIs",
      icon: Globe,
      category: 'backend',
      features: [
        "Payment Gateways",
        "CRM Integration",
        "Analytics Setup",
        "Third-Party APIs",
        "Webhook Management"
      ]
    },
    {
      title: "Performance & Optimization",
      description: "Lighthouse audits, caching, and code splitting",
      icon: Zap,
      category: 'frontend',
      features: [
        "Performance Audits",
        "Code Optimization",
        "Caching Strategies",
        "Lazy Loading",
        "SEO Enhancement"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description: "Goals, users, and technical constraints",
      icon: Users,
      details: "We dive deep into your business objectives, target audience, and technical requirements to create a solid foundation for your project."
    },
    {
      number: "02",
      title: "Plan",
      description: "Architecture, roadmap, and milestones",
      icon: FileText,
      details: "Strategic planning with detailed architecture design, project roadmap, and clear milestones to ensure transparent progress tracking."
    },
    {
      number: "03",
      title: "Build",
      description: "Iterative sprints, tests, and demos",
      icon: Code,
      details: "Agile development with regular sprint cycles, comprehensive testing, and frequent demos to gather feedback and iterate quickly."
    },
    {
      number: "04",
      title: "Optimize",
      description: "Monitoring, performance tuning, and growth",
      icon: TrendingUp,
      details: "Continuous monitoring, performance optimization, and data-driven improvements to ensure your product scales with your business."
    }
  ];

  const caseStudies = [
    {
      title: "SaaS Platform",
      description: "Multi-tenant SaaS application with real-time collaboration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      results: "Successfully launched MVP in 6 months, achieving 3x user growth in first quarter with 99.95% uptime SLA."
    },
    {
      title: "E-commerce Marketplace",
      description: "Headless commerce platform with advanced payment systems",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
      tech: ["Next.js", "Stripe", "MongoDB", "Vercel"],
      results: "Delivered high-performance marketplace with seamless payment integration, doubling revenue and improving conversion by 45%."
    },
    {
      title: "Enterprise Dashboard",
      description: "Real-time analytics platform for enterprise clients",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      tech: ["React", "GraphQL", "Redis", "Docker"],
      results: "Built scalable analytics dashboard processing 10M+ data points daily with sub-2-second load times for 50K+ concurrent users."
    }
  ];

  const techStackData = {
    'Frontend': [
      { name: 'React.js', description: 'Modern UI library for interactive interfaces' },
      { name: 'Next.js', description: 'Full-stack React framework for production' },
      { name: 'Vue.js', description: 'Progressive JavaScript framework' },
      { name: 'TypeScript', description: 'Typed superset of JavaScript' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework' }
    ],
    'Backend': [
      { name: 'Node.js', description: 'JavaScript runtime for server-side' },
      { name: 'Express.js', description: 'Fast web framework for Node.js' },
      { name: 'Django', description: 'High-level Python web framework' },
      { name: 'Go', description: 'Fast compiled programming language' }
    ],
    'Mobile': [
      { name: 'Flutter', description: 'Google\'s UI toolkit for mobile' },
      { name: 'React Native', description: 'Cross-platform mobile development' },
      { name: 'Kotlin', description: 'Modern Android development' },
      { name: 'Swift', description: 'Apple\'s iOS programming language' }
    ],
    'Database': [
      { name: 'MySQL', description: 'Popular relational database' },
      { name: 'PostgreSQL', description: 'Advanced relational database' },
      { name: 'MongoDB', description: 'NoSQL document database' },
      { name: 'Redis', description: 'In-memory data structure store' },
      { name: 'Firebase', description: 'Google\'s mobile platform' },
      { name: 'Supabase', description: 'Open source Firebase alternative' }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', description: 'Amazon Web Services platform' },
      { name: 'Azure', description: 'Microsoft cloud platform' },
      { name: 'GCP', description: 'Google Cloud Platform' },
      { name: 'Docker', description: 'Containerization platform' },
      { name: 'Kubernetes', description: 'Container orchestration' },
      { name: 'CI/CD', description: 'Continuous integration & deployment' }
    ],
    'AI & Automation': [
      { name: 'ChatGPT API', description: 'Advanced language AI integration' },
      { name: 'NLP', description: 'Natural language processing' },
      { name: 'ML Tools', description: 'Machine learning frameworks' },
      { name: 'Custom AI', description: 'Tailored AI solutions' }
    ]
  };

  const pricingModels = [
    {
      title: "Fixed Price",
      description: "Best for well-defined projects with clear scope",
      features: ["Fixed scope & timeline", "Predictable budget", "Milestone-based payments", "Complete documentation"],
      ideal: "MVPs, Landing Pages, Simple Apps"
    },
    {
      title: "Time & Materials",
      description: "Flexible approach for evolving requirements",
      features: ["Hourly/weekly billing", "Flexible scope", "Regular iterations", "Transparent tracking"],
      ideal: "Complex Projects, Ongoing Development"
    },
    {
      title: "Retainer",
      description: "Long-term partnership with dedicated resources",
      features: ["Dedicated team", "Monthly commitment", "Priority support", "Continuous delivery"],
      ideal: "Product Teams, Enterprise Clients"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc",
      content: "aNquest delivered our SaaS platform ahead of schedule. Their expertise in scalable architecture and attention to detail was outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Founder, ShopFlow",
      content: "The e-commerce platform they built exceeded our expectations. Sales increased by 200% in the first quarter after launch.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, DataCo",
      content: "Professional, responsive, and technically excellent. They transformed our complex requirements into an elegant solution.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop"
    },
    {
      name: "David Williams",
      role: "VP Engineering, CloudSync",
      content: "The web application they built is incredibly fast and scalable. Our users love the interface and performance has been flawless.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop"
    },
    {
      name: "Jennifer Lee",
      role: "Founder, EduTech Pro",
      content: "From planning to deployment, aNquest was exceptional. The custom features they developed give us a competitive edge in the market.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop"
    }
  ];

  const getTechLogo = (techName) => {
    const logoMap = {
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
      'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      'Supabase': 'https://cdn.simpleicons.org/supabase/3ECF8E',
      'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
      'AWS': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
      'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      'GCP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      'CI/CD': 'https://cdn.simpleicons.org/githubactions/2088FF',
      'ChatGPT API': 'https://cdn.simpleicons.org/openai/412991',
      'NLP': 'https://cdn.simpleicons.org/python/3776AB',
      'ML Tools': 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    };
    return logoMap[techName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
  };

  const handleTestimonialNext = () => {
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
  };



  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter(service => service.category === activeFilter);

  // Auto slide effect for tech stack
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const scrollContainer = scrollRef.current;
        const cardWidth = 350;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScroll - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-scroll for testimonials
  useEffect(() => {
    if (!isTestimonialAutoPlaying) return;
    const interval = setInterval(() => {
      handleTestimonialNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentTestimonialIndex, isTestimonialAutoPlaying]);

  return (
    <>
      <SEO
        title="Web Development Services — aNquest Media | Scalable Web Solutions"
        description="Scalable web development, SaaS & e-commerce solutions. Fast prototyping, reliable delivery, and production support. Start your project today."
        canonicalUrl="https://anquestmedia.com/web-development"
      />
      <div className="min-h-screen relative overflow-hidden ">
        <div className=" theme-bg-primary relative z-10  ">

          {/* === HERO SECTION START (Updated) === */}
          <section className="relative overflow-hidden h-[550px] flex justify-center items-center  theme-bg-primary py-14 sm:py-16 lg:py-20">
            {/* Background Animation */}
            <HomeHeroBg theme={theme} />

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-5xl mx-auto  text-center animate-fade-scale">

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold theme-text-primary mb-6 leading-tight">
                  We Build Powerful{" "}
                  <span className="text-[#2d65bc]">Mobile Apps</span>
                </h1>

               
               

                {/* Description */}
                <p className="text-base sm:text-lg lg:text-xl theme-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
                  Expert mobile app development using modern technologies.
                  From native iOS & Android to cross-platform solutions,
                  we deliver scalable, high-performance mobile experiences.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={buildUrl("/request-a-quote")}
                    className="bg-[#2d65bc] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl
                     hover:bg-[#1a4a8a] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    Start a Project
                  </Link>

                  <button
                    onClick={() =>
                      document
                        .getElementById("case-studies")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="border-2 border-[#2d65bc] text-[#2d65bc] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl
                     hover:bg-[#2d65bc] hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    See Case Studies
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* === HERO SECTION END === */}


          {/* ===  (CONSISTENT WITH ALL PAGES) === */}
          <section className="relative overflow-hidden h-[550px] flex items-center justify-center pt-20 theme-bg-primary">
            <CircleSquareBgAnimation theme={theme} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                {/* ================= LEFT: CONTENT ================= */}
                <div className="space-y-6">

                  <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold theme-text-primary leading-tight">
                    We Build High-Impact{" "}
                    <span className="text-[#2d65bc]">Web Products</span>
                  </h1>

                  <div className="text-2xl sm:text-3xl font-semibold theme-text-secondary">
                    For{" "}
                    <span className="text-[#2d65bc] font-bold">
                      {typingText}
                      <span className="animate-blink">|</span>
                    </span>
                  </div>

                  <p className="text-base sm:text-lg theme-text-secondary max-w-xl leading-relaxed">
                    Expert full-stack development using modern technologies.
                    From MVP to enterprise-scale platforms, we build fast,
                    secure and scalable digital products.
                  </p>



                </div>

                {/* ================= RIGHT: DASHBOARD ================= */}
                <div className="hidden lg:flex justify-end relative">

                  {/* Decorative blobs */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

                  <WebDevHeroDashboard theme={theme} />
                </div>

              </div>
            </div>
          </section>

          {/* Service Filters */}
          <section className="py-8 sm:py-12 theme-bg-primary border-y theme-border-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`inline-flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id
                      ? 'bg-[#2d65bc] text-white shadow-lg scale-105'
                      : 'theme-bg-secondary theme-text-secondary hover:scale-[1.01]'
                      }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
            <CircleSquareBgAnimation theme={theme} />             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl md:text-4xl  font-bold theme-text-primary mb-4">
                  Our Web Development Services
                </h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto">
                  Comprehensive solutions for modern web applications
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {filteredServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="group min-w-[280px] theme-card rounded-2xl theme-shadow-primary overflow-hidden transition-all duration-500 hover:theme-shadow-secondary hover:-translate-y-2 hover:scale-105 relative flex flex-col animate-fade-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative  p-3 lg:p-6 flex flex-col flex-grow">
                        {/* Icon with Glow */}
                        <div className="flex justify-center mb-6">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-[#2d65bc] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-[#2d65bc] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold theme-text-primary mb-3 text-center">
                          {service.title}
                        </h3>

                        <p className="theme-text-secondary text-sm mb-6 text-center leading-relaxed">
                          {service.description}
                        </p>

                        <ul className="theme-text-muted space-y-2 mt-auto text-sm">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-[#2d65bc] mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          to={buildUrl('/contacts')}
                          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#2d65bc] hover:text-[#1a4a8a] transition-colors group"
                        >
                          Learn more
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
            <CircleSquareBgAnimation theme={theme} />             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl md:text-4xl  font-bold theme-text-primary mb-4">
                  Our Development Process
                </h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto">
                  A proven methodology for delivering exceptional results
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div
                      key={index}
                      className="relative group animate-fade-scale"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="theme-card rounded-2xl  p-3 lg:p-6 h-full hover:theme-shadow-secondary transition-all duration-300 hover:-translate-y-2">
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#2d65bc] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {step.number}
                        </div>

                        <div className="w-14 h-14 rounded-xl bg-[#2d65bc]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-7 h-7 text-[#2d65bc]" />
                        </div>

                        <h3 className="text-xl font-bold theme-text-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm theme-text-secondary mb-3">
                          {step.description}
                        </p>
                        <p className="text-sm theme-text-muted leading-relaxed">
                          {step.details}
                        </p>
                      </div>

                      {/* Connecting Line (except last) */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section id="case-studies" className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
            <CircleSquareBgAnimation theme={theme} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl md:text-4xl  font-bold theme-text-primary mb-4">
                  Success Stories
                </h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto">
                  Real results from real projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {caseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="group theme-card rounded-2xl overflow-hidden theme-shadow-primary hover:theme-shadow-secondary transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-scale"
                    style={{ animationDelay: `${index * 0.15}s` }}
                    onClick={() => setSelectedCase(study)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-3 lg:p-6">
                      <h3 className="text-xl font-bold theme-text-primary mb-2">
                        {study.title}
                      </h3>
                      <p className="theme-text-secondary text-sm mb-4">
                        {study.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs rounded-full theme-bg-tertiary theme-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study Modal */}
          {selectedCase && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setSelectedCase(null)}
            >
              <div
                className="theme-card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 animate-scale-in"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold theme-text-primary">{selectedCase.title}</h3>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="theme-text-secondary hover:theme-text-primary transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />

                <p className="theme-text-secondary mb-6">{selectedCase.description}</p>
                <p className="theme-text-primary mb-4">{selectedCase.results}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedCase.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 rounded-full bg-[#2d65bc] text-white text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}



          {/* Pricing/Engagement Models Section */}
          <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
            <CircleSquareBgAnimation theme={theme} />             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl md:text-4xl  font-bold theme-text-primary mb-4">
                  Engagement Models
                </h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto">
                  Flexible partnerships tailored to your needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingModels.map((model, index) => (
                  <div
                    key={index}
                    className="theme-card rounded-2xl p-3 lg:p-6 theme-shadow-primary hover:theme-shadow-secondary transition-all duration-300 hover:-translate-y-2 animate-fade-scale"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <h3 className="text-2xl font-bold theme-text-primary mb-3">
                      {model.title}
                    </h3>
                    <p className="theme-text-secondary mb-6">
                      {model.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2d65bc] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="theme-text-primary text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t theme-border-primary">
                      <div className="text-sm font-semibold theme-text-secondary mb-2">Ideal for:</div>
                      <div className="text-sm theme-text-primary">{model.ideal}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          {/* <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
             <CircleSquareBgAnimation theme={theme} />             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl md:text-4xl  font-bold theme-text-primary mb-4">
                  Client Testimonials
                </h2>
                <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto">
                  Trusted by businesses worldwide
                </p>
              </div>

              Carousel Container
              <div
                className="relative max-w-6xl mx-auto"
                onMouseEnter={() => setIsTestimonialAutoPlaying(false)}
                onMouseLeave={() => setIsTestimonialAutoPlaying(true)}
              >
                Navigation Buttons
                <button
                  onClick={handleTestimonialPrev}
                  className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full theme-card theme-shadow-primary transition-all duration-300 hover:scale-110 hover:theme-shadow-secondary"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 theme-text-primary" />
                </button>

                <button
                  onClick={handleTestimonialNext}
                  className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full theme-card theme-shadow-primary transition-all duration-300 hover:scale-110 hover:theme-shadow-secondary"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 theme-text-primary" />
                </button>

                Cards Container with Horizontal Scroll
                <div
                  ref={testimonialScrollRef}
                  className="flex overflow-x-hidden gap-8 pb-4 scroll-smooth snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] snap-center theme-card rounded-2xl  p-3 lg:p-6 theme-shadow-primary hover:theme-shadow-secondary transition-all duration-500 hover:-translate-y-2 animate-fade-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      Animated Top Border
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-t-2xl group-hover:h-2 transition-all duration-300"></div>

                      <div className="flex gap-1 mb-4 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="theme-text-primary mb-6 italic relative">
                        <span className="text-4xl text-[#2d65bc] absolute -top-2 -left-2 opacity-50">"</span>
                        <span className="relative z-10">{testimonial.content}</span>
                        <span className="text-4xl text-[#2d65bc] absolute -bottom-6 -right-2 opacity-50">"</span>
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t theme-border-primary">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#2d65bc]/20"
                          loading="lazy"
                        />
                        <div>
                          <div className="font-semibold theme-text-primary">{testimonial.name}</div>
                          <div className="text-sm theme-text-secondary">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                Pagination Dots
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleTestimonialDotClick(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonialIndex === index
                          ? 'bg-[#2d65bc] w-8'
                          : 'bg-gray-400 hover:bg-gray-500'
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section> */}

          <section className="py-10 sm:py-10 lg:py-15 theme-bg-secondary relative overflow-hidden">
            <CircleSquareBgAnimation theme={theme} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
              <div className="mx-auto text-center max-w-6xl">
                <div className="rounded-3xl p-3 sm:p-4 py-4 sm:py-8 lg:py-12 lg:p-4 theme-shadow-primary relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                      Ready to <span style={{ color: '#2d65bc' }}>Elevate Your Brand?</span>
                    </h2>

                    <p className="text-lg sm:text-xl theme-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                      Let's craft a distinctive identity and guidelines for your brand. Get started with a free consultation today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/contacts"
                        className="inline-flex items-center justify-center px-4 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-102 shadow-lg"
                        style={{ backgroundColor: '#2d65bc' }}
                      >
                        Get Free Brand Audit
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

      {/* Custom Animations */}
      <style jsx>{`
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
       
      @keyframes float-medium {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(-8px) translateX(4px); }
      }
       
      @keyframes float-fast {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(3deg); }
      }
       
      @keyframes fade-scale {
        0% { opacity: 0; transform: scale(0.98); }
        100% { opacity: 1; transform: scale(1); }
      }
       
      @keyframes fade-scale-delay {
        0% { opacity: 0; transform: scale(0.98); }
        100% { opacity: 1; transform: scale(1); }
      }
       
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.6; }
      }
       
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
        50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.6); }
      }
       
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
       
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
       
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
       
      @keyframes scale-in {
        from { 
          opacity: 0;
          transform: scale(0.95);
        }
        to { 
          opacity: 1;
          transform: scale(1);
        }
      }
       
      /* Dashboard Specific Animations */
      .perspective-hero { perspective: 2000px; transform-style: preserve-3d; }
      .transform-3d { transform-style: preserve-3d; }
      .custom-scrollbar::-webkit-scrollbar { width: 4px; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background: #2d65bc; border-radius: 4px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
       
      .glass-hero {
          background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(26, 26, 40, 0.7)'};
          backdrop-filter: blur(20px);
          border: 1px solid ${theme === 'light' ? 'rgba(45, 101, 188, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
      }
       
      .neon-edge {
        box-shadow: 0 0 10px ${theme === 'light' ? 'rgba(45, 101, 188, 0.3)' : 'rgba(100, 200, 255, 0.4)'}, inset 0 0 10px ${theme === 'light' ? 'rgba(45, 101, 188, 0.1)' : 'rgba(100, 200, 255, 0.1)'};
      }
       
      .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
      .animate-float-medium { animation: float-medium 8s ease-in-out infinite; }
      .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      .animate-fade-scale { animation: fade-scale 0.6s ease forwards; }
      .animate-fade-scale-delay { animation: fade-scale-delay 0.8s ease forwards 0.3s; opacity: 0; }
      .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
      .animate-blink { animation: blink 1s step-end infinite; }
      .animate-fade-in { animation: fade-in 0.3s ease forwards; }
      .animate-scale-in { animation: scale-in 0.3s ease forwards; }
       
      /* Smooth scroll behavior */
      html { scroll-behavior: smooth; }
      /* Hide scrollbar for testimonial carousel */
      .overflow-x-hidden::-webkit-scrollbar { display: none; }
       
      /* 3D Glass Tile */
      .glass-tile {
         background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 50, 0.85)'};
         backdrop-filter: blur(20px) saturate(180%);
         border: 1px solid ${theme === 'light' ? 'rgba(45, 101, 188, 0.3)' : 'rgba(100, 200, 255, 0.2)'};
      }
      .depth-3d {
         box-shadow: ${theme === 'light' ? '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)' : '0 10px 40px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)'};
         transform-style: preserve-3d;
      }
    `}</style>
    </>
  );
};

export default WebDevelopment;
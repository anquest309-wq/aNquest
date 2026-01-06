import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Apple, Smartphone, Code2, Layers, Settings, CheckCircle2, ArrowRight,
    X, Zap, Shield, Users, FileText,
    TrendingUp, Globe, Lock, Activity,
    Layout, Cloud,
} from 'lucide-react';
import SEO from '../../Components/SEO';
// import CircleSquareBgAnimation from '../../Components/Bg-animation-template/CircleSquareBgAnimation';
import { useTheme } from '../../Context/ThemeContext';
import { buildUrl } from '../../utils/urlUtils';
import HomeHeroBg from '../../Components/Bg-animation-template/HomeHeroBg';
import CircleSquareBgAnimation from '../../Components/Bg-animation-template/CircleSquareBgAnimation';

// --- NEW SUB-COMPONENT: Interactive App Dev Hero Dashboard ---
const AppDevHeroDashboard = ({ theme }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const isLight = theme === 'light';

    // Theme configuration
    const themeStyles = {
        blue: { primary: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', light: 'bg-blue-50', gradient: 'from-blue-600 to-cyan-500' },
        purple: { primary: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600', light: 'bg-purple-50', gradient: 'from-purple-600 to-pink-500' },
        green: { primary: 'bg-green-600', text: 'text-green-600', border: 'border-green-600', light: 'bg-green-50', gradient: 'from-green-600 to-emerald-500' },
        orange: { primary: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', light: 'bg-orange-50', gradient: 'from-orange-500 to-red-500' },
        indigo: { primary: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-600', light: 'bg-indigo-50', gradient: 'from-indigo-600 to-violet-500' },
    };

    // Client-Friendly Tabs
    const tabs = [
        { id: 'ux', label: 'User Experience', icon: Layout, color: 'text-blue-500', theme: 'blue' },
        { id: 'reach', label: 'Universal Reach', icon: Globe, color: 'text-purple-500', theme: 'purple' },
        { id: 'cloud', label: 'Cloud Power', icon: Cloud, color: 'text-orange-500', theme: 'orange' },
        { id: 'secure', label: 'Data Security', icon: Shield, color: 'text-green-500', theme: 'green' },
        { id: 'growth', label: 'Business Growth', icon: TrendingUp, color: 'text-indigo-500', theme: 'indigo' },
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

    const glassClass = isLight ? 'bg-white/95 border-gray-200/50' : 'bg-slate-900/95 border-slate-700/50';
    const cardBg = isLight ? 'bg-white border-gray-200' : 'bg-slate-800 border-slate-700';
    const textColor = isLight ? 'text-gray-800' : 'text-gray-100';
    const subTextColor = isLight ? 'text-gray-600' : 'text-gray-400';

    return (
        <div
            className="w-full max-w-full sm:max-w-[550px] lg:max-w-[600px] h-[350px] sm:h-[420px] lg:h-[400px] relative perspective-hero mx-auto lg:mr-0"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
        >
            {/* 3D Container */}
            <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-5 border-2 shadow-2xl transform-3d sm:hover:scale-[1.02] transition-all duration-700 ease-out ${glassClass}`}>
                {/* Header */}
                <div className="flex items-center justify-between mb-3 sm:mb-5 pb-3 sm:pb-4 border-b border-gray-200/20">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md transition-colors ${!isAutoPlay ? 'text-blue-600 font-bold bg-blue-50' : 'text-gray-400 bg-gray-100/10'}`}>
                            {!isAutoPlay ? 'Interactive' : 'Live'}
                        </span>
                        <div className="text-[9px] sm:text-[10px] font-mono text-gray-400 hidden sm:block">App: Running</div>
                    </div>
                </div>

                <div className="flex h-[calc(100%-48px)] sm:h-[calc(100%-60px)] gap-3 sm:gap-4 p-2 lg:gap-6">
                    {/* Sidebar - Icon Only */}
                    <div className="w-12 sm:w-14 lg:w-16 flex flex-col gap-1.5 sm:gap-2 p-2 border-r border-gray-200/20 pr-2 sm:pr-3 overflow-y-auto custom-scrollbar relative z-50 hidden sm:block">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={(e) => { e.stopPropagation(); handleTabClick(index); }}
                                className={`w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-lg sm:rounded-xl transition-all duration-300 group cursor-pointer relative ${activeTab === index
                                    ? `${currentTheme.primary} text-white shadow-lg scale-105`
                                    : `text-gray-400 ${isLight ? 'hover:bg-gray-100' : 'hover:bg-slate-800'} hover:text-blue-500`
                                    }`}
                                title={tab.label}
                            >
                                <tab.icon size={18} className={`sm:w-5 sm:h-5 ${activeTab === index ? 'text-white' : ''}`} />

                                {/* Tooltip */}
                                {/* <div className="absolute left-full ml-2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                          {tab.label}
                        </div> */}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 relative overflow-hidden h-full pt-1">

                        {/* TAB 1: UX EXPERIENCE (Phone Mockup) */}
                        {activeTab === 0 && (
                            <div className="animate-fade-in h-full flex flex-col items-center justify-center px-2">
                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                    <span className="text-xs sm:text-sm font-bold text-blue-600">Premium User Experience</span>
                                </div>
                                <div className={`w-28 sm:w-36 lg:w-40 h-48 sm:h-56 lg:h-64 border-[3px] sm:border-[4px] border-gray-800 rounded-[1.2rem] sm:rounded-[1.5rem] relative bg-white shadow-2xl overflow-hidden flex flex-col`}>
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-2.5 sm:h-3 bg-gray-800 rounded-b-md z-20"></div>

                                    {/* App Screen */}
                                    <div className="flex-1 bg-gray-50 relative">
                                        <div className="h-12 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-b-xl"></div>
                                        <div className="p-1.5 sm:p-2 -mt-6 sm:-mt-8 space-y-1.5 sm:space-y-2">
                                            <div className="bg-white p-1.5 sm:p-2 rounded-lg shadow-sm flex items-center gap-1.5 sm:gap-2">
                                                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full"></div>
                                                <div className="flex-1 h-1.5 sm:h-2 bg-gray-100 rounded"></div>
                                            </div>
                                            <div className="bg-white p-1.5 sm:p-2 rounded-lg shadow-sm">
                                                <div className="w-full h-12 sm:h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded mb-1.5 sm:mb-2"></div>
                                                <div className="w-2/3 h-1.5 sm:h-2 bg-gray-100 rounded"></div>
                                            </div>
                                            <div className="bg-white p-1.5 sm:p-2 rounded-lg shadow-sm">
                                                <div className="w-1/2 h-1.5 sm:h-2 bg-gray-100 rounded mb-1.5 sm:mb-2"></div>
                                                <div className="flex gap-1">
                                                    <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-100 rounded-full"></div>
                                                    <div className="w-3 sm:w-4 h-3 sm:h-4 bg-green-100 rounded-full"></div>
                                                    <div className="w-3 sm:w-4 h-3 sm:h-4 bg-purple-100 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Floating Button */}
                                        <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-7 sm:w-8 h-7 sm:h-8 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-gray-500">
                                    <span className="flex items-center gap-1"><Zap size={10} className="text-yellow-500" /> Fast</span>
                                    <span className="flex items-center gap-1"><Layout size={10} className="text-blue-500" /> Intuitive</span>
                                </div>
                            </div>
                        )}

                        {/* TAB 2: REACH (Universal) */}
                        {activeTab === 1 && (
                            <div className="animate-fade-in h-full flex flex-col items-center justify-center px-2">
                                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                                    <span className="text-xs sm:text-sm font-bold text-purple-600">One Code, All Devices</span>
                                </div>

                                <div className="relative flex items-center justify-center w-full max-w-[280px] sm:max-w-xs">
                                    {/* Central Codebase */}
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex flex-col items-center justify-center z-10 shadow-xl border-2 border-purple-500">
                                        <Code2 size={24} className="sm:w-7 sm:h-7 text-purple-400 mb-1" />
                                        <span className="text-[8px] text-gray-300">Codebase</span>
                                    </div>

                                    {/* Branches */}
                                    <div className="absolute w-36 sm:w-48 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400"></div>

                                    {/* iOS Endpoint */}
                                    <div className="absolute left-0 w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center shadow-lg animate-float-slow">
                                        <Apple size={18} className="sm:w-5 sm:h-5 text-gray-800" />
                                    </div>

                                    {/* Android Endpoint */}
                                    <div className="absolute right-0 w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center shadow-lg animate-float-medium">
                                        <Smartphone size={18} className="sm:w-5 sm:h-5 text-green-600" />
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-4 text-center">
                                    <div className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border-2 ${isLight ? 'bg-blue-50 border-blue-200' : 'bg-slate-800 border-blue-500/50'}`}>
                                        <p className={`text-[10px] sm:text-xs font-bold ${textColor}`}>iOS Ready</p>
                                    </div>
                                    <div className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border-2 ${isLight ? 'bg-green-50 border-green-200' : 'bg-slate-800 border-green-500/50'}`}>
                                        <p className={`text-[10px] sm:text-xs font-bold ${textColor}`}>Android Ready</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TAB 3: CLOUD (Connectivity) */}
                        {activeTab === 2 && (
                            <div className="animate-fade-in h-full flex flex-col items-center justify-center px-2">
                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                    <span className="text-xs sm:text-sm font-bold text-orange-500">Real-Time Cloud Sync</span>
                                </div>

                                <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
                                    {/* Phone */}
                                    <div className="w-14 h-24 sm:w-16 sm:h-28 border-2 sm:border-[3px] border-gray-800 rounded-lg bg-white flex items-center justify-center relative shadow-lg">
                                        <Activity size={16} className="sm:w-5 sm:h-5 text-orange-500 animate-pulse" />
                                    </div>

                                    {/* Data Stream */}
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse delay-100"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse delay-200"></div>
                                    </div>

                                    {/* Cloud */}
                                    <div className={`w-20 h-14 sm:w-24 sm:h-16 rounded-xl flex flex-col items-center justify-center shadow-lg relative overflow-hidden border-2 ${isLight ? 'bg-blue-50 border-blue-200' : 'bg-slate-800 border-blue-500/50'}`}>
                                        <div className="absolute inset-0 bg-blue-500/5 animate-pulse-slow"></div>
                                        <Cloud size={20} className="sm:w-6 sm:h-6 text-blue-500 mb-1" />
                                        <span className="text-[8px] sm:text-[9px] font-mono text-blue-600">Server Active</span>
                                    </div>
                                </div>

                                <div className="mt-4 sm:mt-6 text-center">
                                    <p className={`text-xs sm:text-sm font-bold ${textColor}`}>Instant Data Sync</p>
                                    <p className={`text-[10px] sm:text-xs ${subTextColor}`}>Offline support enabled</p>
                                </div>
                            </div>
                        )}

                        {/* TAB 4: SECURITY (Shield) */}
                        {activeTab === 3 && (
                            <div className="animate-fade-in h-full flex flex-col items-center justify-center px-2">
                                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                                    <span className="text-xs sm:text-sm font-bold text-green-600">Bank-Grade Security</span>
                                </div>

                                <div className="relative mb-4 sm:mb-6">
                                    <Shield size={56} className="sm:w-16 sm:h-16 text-green-500" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Lock size={20} className="sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                                        256-bit Encrypted
                                    </div>
                                </div>

                                <div className="w-full max-w-[280px] sm:max-w-xs space-y-1.5 sm:space-y-2">
                                    <div className={`flex items-center justify-between p-2 sm:p-2.5 rounded-lg border-2 ${isLight ? 'bg-green-50 border-green-200' : 'bg-green-900/20 border-green-700'}`}>
                                        <span className={`text-[10px] sm:text-xs font-medium ${textColor}`}>User Data Privacy</span>
                                        <CheckCircle2 size={14} className="sm:w-4 sm:h-4 text-green-500" />
                                    </div>
                                    <div className={`flex items-center justify-between p-2 sm:p-2.5 rounded-lg border-2 ${isLight ? 'bg-green-50 border-green-200' : 'bg-green-900/20 border-green-700'}`}>
                                        <span className={`text-[10px] sm:text-xs font-medium ${textColor}`}>Secure Payments</span>
                                        <CheckCircle2 size={14} className="sm:w-4 sm:h-4 text-green-500" />
                                    </div>
                                    <div className={`flex items-center justify-between p-2 sm:p-2.5 rounded-lg border-2 ${isLight ? 'bg-green-50 border-green-200' : 'bg-green-900/20 border-green-700'}`}>
                                        <span className={`text-[10px] sm:text-xs font-medium ${textColor}`}>GDPR Compliant</span>
                                        <CheckCircle2 size={14} className="sm:w-4 sm:h-4 text-green-500" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TAB 5: GROWTH (Analytics) */}
                        {activeTab === 4 && (
                            <div className="animate-fade-in h-full flex flex-col items-center justify-center px-2">
                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                    <span className="text-xs sm:text-sm font-bold text-indigo-600">Business Growth</span>
                                </div>

                                <div className={`w-full max-w-[280px] sm:max-w-xs rounded-xl border-2 p-3 sm:p-4 shadow-lg ${isLight ? 'bg-white border-gray-200' : 'bg-slate-800 border-slate-700'}`}>
                                    <div className="flex justify-between items-end mb-3 sm:mb-4">
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase">Total Users</p>
                                            <p className={`text-xl sm:text-2xl font-bold ${textColor}`}>45.2k</p>
                                        </div>
                                        <div className="text-[10px] sm:text-xs font-bold text-green-500 flex items-center">
                                            <TrendingUp size={12} className="mr-1" /> +24%
                                        </div>
                                    </div>

                                    {/* Simple Bar Chart */}
                                    <div className="flex items-end justify-between gap-1.5 sm:gap-2 h-16 sm:h-20">
                                        <div className={`w-full h-[30%] rounded-t ${isLight ? 'bg-indigo-100' : 'bg-indigo-900/30'}`}></div>
                                        <div className={`w-full h-[50%] rounded-t ${isLight ? 'bg-indigo-100' : 'bg-indigo-900/30'}`}></div>
                                        <div className={`w-full h-[40%] rounded-t ${isLight ? 'bg-indigo-100' : 'bg-indigo-900/30'}`}></div>
                                        <div className={`w-full h-[70%] rounded-t ${isLight ? 'bg-indigo-200' : 'bg-indigo-800/50'}`}></div>
                                        <div className="w-full bg-indigo-500 h-[90%] rounded-t relative group">
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                                Peak
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 sm:mt-4 text-center">
                                    <p className={`text-[10px] sm:text-xs ${subTextColor}`}>Track engagement & retention in real-time</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

const AppDevelopment = () => {
    const { theme } = useTheme();
    const scrollRef = useRef(null);
    const testimonialScrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedCase, setSelectedCase] = useState(null);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true);
    const [typingText, setTypingText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);

    const typingPhrases = ['iOS Apps', 'Android Apps', 'Cross-Platform', 'PWA'];

    // ... (Keep existing useEffect for typing animation) ...
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

    // ... (Keep existing filters, services, processSteps, caseStudies, techStackData, testimonials) ...
    const filters = [
        { id: 'all', label: 'All Services' },
        { id: 'native', label: 'Native' },
        { id: 'cross-platform', label: 'Cross-Platform' },
        { id: 'web', label: 'Web Apps' },
        { id: 'support', label: 'Support' }
    ];

    const services = [
        {
            title: "iOS Development",
            description: "Native iOS applications built with Swift and SwiftUI. We create apps that leverage the full power of Apple's ecosystem.",
            icon: Apple,
            category: 'native',
            features: ["Swift & SwiftUI", "Objective-C Support", "iOS SDK Integration", "App Store Optimization", "Apple Guidelines Compliance"]
        },
        {
            title: "Android Development",
            description: "Native Android applications built with Kotlin and Java. We create apps that work seamlessly across all Android devices.",
            icon: Smartphone,
            category: 'native',
            features: ["Kotlin & Java", "Android SDK", "Material Design", "Google Play Optimization", "Android Guidelines"]
        },
        {
            title: "React Native Development",
            description: "Cross-platform mobile apps built with React Native. One codebase for both iOS and Android platforms.",
            icon: Code2,
            category: 'cross-platform',
            features: ["Cross-Platform Apps", "JavaScript/TypeScript", "Native Performance", "Code Reusability", "Faster Development"]
        },
        {
            title: "Flutter Development",
            description: "Beautiful, fast mobile apps built with Google's Flutter framework. Create stunning UIs with native performance.",
            icon: Layers,
            category: 'cross-platform',
            features: ["Dart Programming", "Material Design", "Cupertino Widgets", "Hot Reload", "Google Support"]
        },
        {
            title: "Progressive Web Apps",
            description: "PWAs that work across all platforms with app-like experiences. Fast, reliable, and engaging.",
            icon: Globe,
            category: 'web',
            features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-Platform", "Fast Loading"]
        },
        {
            title: "App Maintenance",
            description: "Keep your mobile apps running smoothly with comprehensive maintenance and support services.",
            icon: Settings,
            category: 'support',
            features: ["Regular Updates", "Bug Fixes", "Performance Optimization", "Security Patches", "24/7 Support"]
        }
    ];

    const processSteps = [
        { number: "01", title: "Discover", description: "Goals, users, and technical requirements", icon: Users, details: "We dive deep into your business objectives, target audience, and technical requirements to create a solid foundation for your mobile app." },
        { number: "02", title: "Design", description: "UI/UX design, wireframes, and prototypes", icon: FileText, details: "Strategic design planning with detailed wireframes, user flows, and interactive prototypes to ensure an exceptional user experience." },
        { number: "03", title: "Develop", description: "Agile development with regular testing", icon: Code2, details: "Agile development with regular sprint cycles, comprehensive testing, and frequent demos to gather feedback and iterate quickly." },
        { number: "04", title: "Launch", description: "App store deployment and ongoing support", icon: TrendingUp, details: "App store submission, launch support, and continuous monitoring to ensure your app scales with your business needs." }
    ];

    const caseStudies = [
        { title: "Fitness Tracking App", description: "Cross-platform fitness app with real-time tracking and social features", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop", tech: ["React Native", "Firebase", "Node.js", "AWS"], results: "Successfully launched a cross-platform fitness app achieving 500K+ downloads with 4.8★ rating and 200K+ active users." },
        { title: "E-commerce Mobile App", description: "Native iOS and Android shopping app with advanced features", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop", tech: ["Swift", "Kotlin", "Stripe", "MongoDB"], results: "Delivered high-performance e-commerce apps for both platforms, doubling revenue and improving conversion by 60%." },
        { title: "Healthcare Management App", description: "Secure healthcare app with HIPAA compliance and telemedicine features", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop", tech: ["Flutter", "PostgreSQL", "AWS", "HIPAA"], results: "Built secure healthcare management app serving 50K+ patients with 100% HIPAA compliance and 99.9% uptime." }
    ];

    const pricingModels = [
        {
            title: "Fixed Price",
            description: "Best for well-defined projects with clear scope",
            features: ["Fixed scope & timeline", "Predictable budget", "Milestone-based payments", "Complete documentation"],
            ideal: "MVPs, Simple Apps, App Updates"
        },
        {
            title: "Time & Materials",
            description: "Flexible approach for evolving requirements",
            features: ["Hourly/weekly billing", "Flexible scope", "Regular iterations", "Transparent tracking"],
            ideal: "Complex Apps, Ongoing Development"
        },
        {
            title: "Retainer",
            description: "Long-term partnership with dedicated resources",
            features: ["Dedicated team", "Monthly commitment", "Priority support", "Continuous delivery"],
            ideal: "Product Teams, Enterprise Clients"
        }
    ];

    const techStackData = {
        'Native iOS': [{ name: 'Swift', description: 'Modern iOS programming language' }, { name: 'SwiftUI', description: 'Declarative UI framework' }, { name: 'UIKit', description: 'Traditional iOS UI framework' }, { name: 'Core Data', description: 'Data persistence framework' }, { name: 'Xcode', description: 'Apple\'s development IDE' }],
        'Native Android': [{ name: 'Kotlin', description: 'Modern Android language' }, { name: 'Java', description: 'Traditional Android language' }, { name: 'Jetpack Compose', description: 'Modern UI toolkit' }, { name: 'Material Design', description: 'Google\'s design system' }, { name: 'Android Studio', description: 'Official Android IDE' }],
        'Cross-Platform': [{ name: 'React Native', description: 'Facebook\'s mobile framework' }, { name: 'Flutter', description: 'Google\'s UI toolkit' }, { name: 'Ionic', description: 'Hybrid app framework' }, { name: 'Xamarin', description: 'Microsoft\'s framework' }],
        'Backend & APIs': [{ name: 'Node.js', description: 'JavaScript runtime' }, { name: 'Firebase', description: 'Google\'s mobile platform' }, { name: 'AWS Amplify', description: 'AWS mobile backend' }, { name: 'GraphQL', description: 'Query language for APIs' }, { name: 'REST APIs', description: 'RESTful web services' }],
        'Database': [{ name: 'MongoDB', description: 'NoSQL document database' }, { name: 'PostgreSQL', description: 'Advanced relational database' }, { name: 'Firebase Realtime', description: 'Real-time database' }, { name: 'SQLite', description: 'Lightweight database' }],
        'Cloud & DevOps': [{ name: 'AWS', description: 'Amazon cloud services' }, { name: 'Google Cloud', description: 'Google cloud platform' }, { name: 'CI/CD', description: 'Continuous integration' }, { name: 'Docker', description: 'Containerization' }]
    };

    const getTechLogo = (techName) => {
        // ... (Same logo map as before)
        const logoMap = {
            'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
            'SwiftUI': 'https://cdn.simpleicons.org/swift/FA7343',
            'UIKit': 'https://cdn.simpleicons.org/apple/000000',
            'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
            'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
            'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
            'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
            'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            'GraphQL': 'https://cdn.simpleicons.org/graphql/E10098',
            'Ionic': 'https://cdn.simpleicons.org/ionic/3880FF',
            'Xamarin': 'https://cdn.simpleicons.org/xamarin/3498DB'
        };
        return logoMap[techName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
    };

    const testimonials = [
        { name: "Robert Martinez", role: "CEO, FitLife Solutions", content: "aNquest delivered our fitness tracking app ahead of schedule. The React Native app works flawlessly on both iOS and Android. User engagement has increased by 300% since launch!", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop" },
        { name: "Sarah Johnson", role: "Founder, ShopSmart", content: "The e-commerce mobile app they built exceeded our expectations. Sales from mobile increased by 250% in the first quarter. The native performance is outstanding!", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop" },
        { name: "Michael Chen", role: "CTO, HealthCare Plus", content: "Professional, responsive, and technically excellent. They built our healthcare app with complete HIPAA compliance. The Flutter app is beautiful and performs perfectly.", rating: 5, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop" },
        { name: "Emily Davis", role: "Product Manager, TaskFlow", content: "The productivity app aNquest developed is a game-changer. User reviews are consistently 5-star, and app store rankings improved dramatically. Highly recommend their mobile development expertise!", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop" },
        { name: "James Wilson", role: "Founder, FoodDelivery Pro", content: "From concept to launch, aNquest was exceptional. Our food delivery app handles thousands of orders daily with zero issues. The real-time tracking feature is flawless!", rating: 5, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop" }
    ];


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
    }, [currentTestimonialIndex, isTestimonialAutoPlaying, testimonials.length]);







    return (
        <>
            <SEO
                title="Mobile App Development Services | aNquest Media"
                description="Build high-performing iOS and Android applications with aNquest Media's custom app development team. Native and cross-platform solutions."
                canonicalUrl="https://anquestmedia.com/app-development"
            />
            <div className="min-h-screen relative overflow-hidden  ">
                <div className="theme-bg-primary relative z-10  ">

                    {/* === HERO SECTION START (Updated) === */}
                    <section
                        className="relative overflow-hidden flex h-[550px]   items-center justify-center theme-bg-primary"
                        
                    >
                        {/* Background */}
                        <HomeHeroBg theme={theme} />

                        {/* Content */}
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex h-[550px]   items-center justify-center  ">
                            <div className="max-w-4xl mx-auto text-center">

                                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 theme-text-primary leading-tight">
                                    We Build Powerful{" "}
                                    <span className="text-transparent bg-clip-text bg-[#2d65bc]">
                                         Apps
                                    </span>
                                </h1>

                                <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                                    <span className="theme-text-secondary">For</span>
                                    <span className="font-bold min-w-[200px] text-transparent bg-clip-text bg-[#2d65bc]">
                                        {typingText}
                                        <span className="animate-blink">|</span>
                                    </span>
                                </div>

                                <p className="text-lg sm:text-xl theme-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
                                    Expert mobile app development using modern technologies. From native
                                    iOS & Android to cross-platform solutions, we deliver scalable,
                                    high-performance mobile experiences.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to={buildUrl("/request-a-quote")}
                                        className="bg-[#2d65bc] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#1a4a8a] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    >
                                        Start a Project
                                    </Link>

                                    <button
                                        onClick={() =>
                                            document
                                                .getElementById("case-studies")
                                                ?.scrollIntoView({ behavior: "smooth" })
                                        }
                                        className="border-2 border-[#2d65bc] text-[#2d65bc] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#2d65bc] hover:text-white transition-all duration-300 hover:scale-105"
                                    >
                                        See Case Studies
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* === HERO SECTION END === */}


                    <section className="relative py-16 theme-bg-primary">
                    <CircleSquareBgAnimation theme={theme} />    

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                                {/* LEFT */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-bold theme-text-primary">
                                        Powerful App Experiences That{" "}
                                        <span className="text-[#2d65bc]">Scale Your Business</span>
                                    </h2>

                                    <p className="text-lg theme-text-secondary max-w-xl">
                                        We design and develop high-performance mobile applications with
                                        seamless UX, enterprise-grade security, and cloud scalability.
                                    </p>

                                    <ul className="space-y-3 text-sm theme-text-secondary">
                                        <li>✅ iOS, Android & Cross-Platform Apps</li>
                                        <li>✅ Secure, Scalable & Cloud-Ready</li>
                                        <li>✅ Designed for Growth & Performance</li>
                                    </ul>


                                </div>

                                {/* RIGHT — DASHBOARD */}
                                <div className="relative z-30 w-full flex justify-center lg:justify-end overflow-visible">
                                    <div className="relative max-w-[600px] w-full">
                                        <AppDevHeroDashboard theme={theme} />
                                    </div>
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
                        <CircleSquareBgAnimation theme={theme} />    
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl md:text-4xl  font-bold theme-text-primary mb-4">
                                    Our Mobile App Services
                                </h2>
                                <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto">
                                    Comprehensive solutions for every platform
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
                                {services
                                    .filter(service => activeFilter === 'all' || service.category === activeFilter)
                                    .map((service, index) => {
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
                        <CircleSquareBgAnimation theme={theme} />            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-3xl md:text-4xl  font-bold theme-text-primary mb-4">
                                    Our Development Process
                                </h2>
                                <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl mx-auto">
                                    A proven methodology for delivering exceptional mobile apps
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
                                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
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
                                    Real results from real mobile app projects
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

                    {/* Tech Stack Section */}
                    {/* <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
             <CircleSquareBgAnimation theme={theme} />            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center  mx-auto mb-16">
               
                <h2 className="text-3xl md:text-4xl  font-bold theme-text-primary mb-4">
                  Technology <span className="text-transparent bg-clip-text bg-[#2d65bc]">Arsenal</span>
                </h2>
                <p className="text-xl theme-text-secondary">
                  Comprehensive tools and frameworks for every mobile development need
                </p>
              </div>

             
              <div className="relative group/slider" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>

             
                <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleManualScroll('left')}
                    className={`p-4 rounded-full backdrop-blur-lg shadow-xl transition-all duration-300 border ${theme === 'dark'
                      ? 'bg-gray-800/90 border-gray-600 text-gray-200 hover:text-blue-400 hover:bg-gray-700/90'
                      : 'bg-white/95 border-gray-300 text-gray-800 hover:text-blue-600 hover:bg-white shadow-lg'
                      }`}
                  >
                    <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
                  </motion.button>
                </div>
                <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleManualScroll('right')}
                    className={`p-4 rounded-full backdrop-blur-lg shadow-xl transition-all duration-300 border ${theme === 'dark'
                      ? 'bg-gray-800/90 border-gray-600 text-gray-200 hover:text-blue-400 hover:bg-gray-700/90'
                      : 'bg-white/95 border-gray-300 text-gray-800 hover:text-blue-600 hover:bg-white shadow-lg'
                      }`}
                  >
                    <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
                  </motion.button>
                </div>

               
                <div
                  ref={scrollRef}
                  className="flex max-w-7xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide py-8 px-4"
                >
                  {Object.entries(techStackData).map(([category, techs]) => {
                    const categoryIcons = {
                      'Native iOS': Apple,
                      'Native Android': Smartphone,
                      'Cross-Platform': Layers,
                      'Backend & APIs': Cloud,
                      'Database': Database,
                      'Cloud & DevOps': Globe
                    };
                    const CategoryIcon = categoryIcons[category] || Package;

                    return (
                      <div key={category} className="mr-6">
                        <div className="glass-tile rounded-2xl  p-3 lg:p-6 min-w-[300px] shrink-0 snap-center depth-3d float-slow-3d">
                          <h3 className="text-xl font-bold theme-text-primary mb-4 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#2d65bc] to-purple-500 flex items-center justify-center flex-shrink-0">
                              <CategoryIcon className="w-5 h-5 text-white" />
                            </div>
                            {category}
                          </h3>
                          <div className="space-y-3">
                            {techs.map((tech, idx) => (
                              <div
                                key={idx}
                                className="glass-hero rounded-xl p-3 hover:scale-105 transition-transform cursor-pointer"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-white p-1.5 flex items-center justify-center flex-shrink-0">
                                    <img
                                      src={getTechLogo(tech.name)}
                                      alt={tech.name}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-bold theme-text-primary text-sm">{tech.name}</h4>
                                    <p className="theme-text-secondary text-xs">{tech.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section> */}

                    {/* Pricing/Engagement Models Section */}
                    <section className="py-10 sm:py-10 lg:py-16 theme-bg-primary relative overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
             <CircleSquareBgAnimation theme={theme} />            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-t-2xl group-hover:h-2 transition-all duration-300"></div>

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

                    {/* CTA Section */}
                    <section className="py-10 sm:py-10 lg:py-15 theme-bg-secondary relative overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
                            <div className="mx-auto text-center max-w-6xl">
                                <div className="rounded-3xl p-3 sm:p-4 py-4 sm:py-8 lg:py-12 lg:p-4 theme-shadow-primary relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                                            Ready to Build Your <span style={{ color: '#2d65bc' }}>Mobile App?</span>
                                        </h2>

                                        <p className="text-lg sm:text-xl theme-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                                            Let's discuss your app idea and create a mobile solution that engages users and drives business growth. Get started today!
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link
                                                to="/contacts"
                                                className="inline-flex items-center justify-center px-4 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-102 shadow-lg"
                                                style={{ backgroundColor: '#2d65bc' }}
                                            >
                                                Start Your App Project
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
        0%, 100% { box-shadow: 0 0 20px rgba(45, 101, 188, 0.3); }
        50% { box-shadow: 0 0 40px rgba(45, 101, 188, 0.6); }
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
      
      .float-slow-3d {
        animation: float-slow 6s ease-in-out infinite;
      }
      
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `}</style>
        </>
    );
};

export default AppDevelopment;
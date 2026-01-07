import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Building2, Home, Users, TrendingUp, Zap, Database, CheckCircle, ArrowRight,
    Calendar, Globe, ChartLine, UserCheck, MessageSquare, Settings, Bell,
    Phone, Mail, Clock, DollarSign, Activity, Target, Award, Sparkles,
    Layers, Shield, Workflow, Clipboard, Cog, HardDrive, Headphones,
    MapPin, FileText, BarChart3, Key, Wifi, Video, Star, ChevronDown,
    LayoutDashboard, MoreHorizontal, Search, User
} from 'lucide-react';
import { useTheme } from '../../Context/ThemeContext';
import CircleSquareBgAnimation from '../../Components/Bg-animation-template/CircleSquareBgAnimation';
import SEO from '../../Components/SEO';
import { buildUrl } from '../../utils/urlUtils';
import HomeHeroBg from '../../Components/Bg-animation-template/HomeHeroBg';

const RealEstateCRM = () => {
    const { theme } = useTheme();
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [openFAQ, setOpenFAQ] = useState(null);
    const testimonialScrollRef = useRef(null);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Dashboard tab state - moved to parent to persist across re-renders
    const [dashboardTabIndex, setDashboardTabIndex] = useState(0);

    const keyFeatures = [
        {
            icon: Target,
            title: 'Lead Capture & Auto-Follow-ups',
            description: 'Automatically capture leads from portals, websites, and social media with intelligent follow-up sequences.'
        },
        {
            icon: Building2,
            title: 'Property & Project Management',
            description: 'Manage multiple properties, projects, and inventories with real-time availability tracking.'
        },
        {
            icon: TrendingUp,
            title: 'Automated Sales Pipeline',
            description: 'Track deals from inquiry to closure with automated workflow stages and reminders.'
        },
        {
            icon: Users,
            title: 'Broker/Agent Management',
            description: 'Manage your entire sales team, assign leads, track performance, and calculate commissions.'
        },
        {
            icon: MessageSquare,
            title: 'Customer Communication Hub',
            description: 'Centralized WhatsApp, Email, SMS, and Call integration for seamless customer engagement.'
        },
        {
            icon: Calendar,
            title: 'Site Visit Scheduling',
            description: 'Schedule site visits, send automated reminders, and track visit outcomes efficiently.'
        },
        {
            icon: DollarSign,
            title: 'Payment & Booking Management',
            description: 'Handle bookings, payment schedules, EMI tracking, and generate invoices automatically.'
        },
        {
            icon: Bell,
            title: 'CRM Notifications & Alerts',
            description: 'Real-time alerts for new leads, follow-ups, payments, and important milestones.'
        }
    ];

    const crmCategories = [
        {
            icon: Building2,
            title: 'Builder CRM',
            description: 'Complete CRM solution for real estate builders to manage projects, inventory, and sales teams.',
            gradient: 'bg-[#2d65bc]',
            features: ['Project Management', 'Inventory Control', 'Team Dashboard', 'Sales Analytics']
        },
        {
            icon: UserCheck,
            title: 'Broker CRM',
            description: 'Powerful CRM for brokers to manage client relationships, property listings, and commissions.',
            gradient: 'bg-[#2d65bc]',
            features: ['Lead Distribution', 'Commission Tracking', 'Deal Pipeline', 'Client Portal']
        },
        {
            icon: Users,
            title: 'Agent CRM',
            description: 'Mobile-first CRM for individual agents to track leads, schedule visits, and close deals faster.',
            gradient: 'bg-[#2d65bc]',
            features: ['Mobile App', 'Lead Tracking', 'Task Manager', 'Quick Updates']
        },
        {
            icon: Home,
            title: 'Property Management CRM',
            description: 'Comprehensive solution for property managers handling rentals, maintenance, and tenant relations.',
            gradient: 'bg-[#2d65bc]',
            features: ['Tenant Management', 'Maintenance Tracking', 'Rent Collection', 'Document Storage']
        },
        {
            icon: Globe,
            title: 'Real Estate Enterprise CRM',
            description: 'Enterprise-grade CRM for large real estate organizations with multi-location operations.',
            gradient: 'bg-[#2d65bc]',
            features: ['Multi-Branch', 'Role Management', 'Advanced Analytics', 'API Integration']
        },
        {
            icon: Shield,
            title: 'Channel Partner CRM',
            description: 'Specialized CRM for managing channel partners, referrals, and partner performance tracking.',
            gradient: 'bg-[#2d65bc]',
            features: ['Partner Portal', 'Referral Tracking', 'Incentive Management', 'Performance Reports']
        }
    ];

    const problems = [
        { solution: 'Automated lead capture from all sources with instant alerts' },
        { solution: 'AI-powered automated follow-ups via WhatsApp, Email & SMS' },
        { solution: 'Centralized property inventory with real-time availability' },
        { solution: 'Unified dashboard with role-based access and analytics' }
    ];

    const processSteps = [
        {
            number: '01',
            icon: Clipboard,
            title: 'Assessment & Planning',
            description: 'We analyze your real estate business workflow and customize CRM features accordingly.'
        },
        {
            number: '02',
            icon: Cog,
            title: 'System Setup',
            description: 'Configure property listings, sales pipeline, team hierarchy, and integrations.'
        },
        {
            number: '03',
            icon: HardDrive,
            title: 'Data Migration',
            description: 'Securely import existing leads, properties, and customer data into the CRM.'
        },
        {
            number: '04',
            icon: Headphones,
            title: 'Training & Support',
            description: 'Comprehensive training for your team with ongoing technical support.'
        }
    ];

    const benefits = [
        {
            icon: Target,
            title: 'Tailored for Builders & Brokers',
            description: 'Industry-specific features designed for real estate professionals with proven conversion strategies.'
        },
        {
            icon: TrendingUp,
            title: 'High Conversion Optimization',
            description: 'Automated workflows and intelligent lead scoring increase conversion rates by up to 60%.'
        },
        {
            icon: Zap,
            title: 'Marketing + Sales Automation',
            description: 'Unified marketing campaigns, automated nurturing, and sales pipeline management in one platform.'
        },
        {
            icon: BarChart3,
            title: 'Real-time Dashboards',
            description: 'Live analytics on leads, sales, team performance, and revenue with customizable reports.'
        }
    ];

    const testimonials = [
        {
            name: 'Rajesh Sharma',
            position: 'Director - Skyline Developers',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            feedback: 'Our lead conversion increased by 55% within 3 months. The automated follow-ups and WhatsApp integration are game-changers!'
        },
        {
            name: 'Priya Patel',
            position: 'Senior Broker - Prime Properties',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            feedback: 'Managing 100+ properties was chaotic before. Now everything is organized, and my team productivity doubled!'
        },
        {
            name: 'Amit Kumar',
            position: 'CEO - Urban Estates',
            image: 'https://randomuser.me/api/portraits/men/52.jpg',
            feedback: 'Best investment we made! The CRM handles our entire sales operation across 5 cities seamlessly.'
        },
        {
            name: 'Neha Verma',
            position: 'Sales Head - Metro Realty',
            image: 'https://randomuser.me/api/portraits/women/55.jpg',
            feedback: 'Lead tracking and automated follow-ups have transformed our sales process. We closed 40% more deals this quarter!'
        },
        {
            name: 'Sanjay Reddy',
            position: 'Founder - Dream Homes',
            image: 'https://randomuser.me/api/portraits/men/67.jpg',
            feedback: 'The property inventory management and client communication features are outstanding. Highly recommend for any real estate business!'
        }
    ];



    // Auto-scroll functionality for testimonials
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNextTestimonial();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentTestimonialIndex, isAutoPlaying]);

    const handleNextTestimonial = () => {
        if (testimonialScrollRef.current) {
            const cardWidth = testimonialScrollRef.current.children[0]?.offsetWidth || 0;
            const gap = 32; // gap-8 = 32px
            const scrollAmount = cardWidth + gap;

            if (currentTestimonialIndex < testimonials.length - 1) {
                testimonialScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                setCurrentTestimonialIndex(prev => prev + 1);
            } else {
                // Loop back to start
                testimonialScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                setCurrentTestimonialIndex(0);
            }
        }
    };

    const handlePrevTestimonial = () => {
        if (testimonialScrollRef.current) {
            const cardWidth = testimonialScrollRef.current.children[0]?.offsetWidth || 0;
            const gap = 32;
            const scrollAmount = cardWidth + gap;

            if (currentTestimonialIndex > 0) {
                testimonialScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                setCurrentTestimonialIndex(prev => prev - 1);
            } else {
                // Loop to end
                const maxScroll = testimonialScrollRef.current.scrollWidth - testimonialScrollRef.current.clientWidth;
                testimonialScrollRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
                setCurrentTestimonialIndex(testimonials.length - 1);
            }
        }
    };

    const handleTestimonialDotClick = (index) => {
        if (testimonialScrollRef.current) {
            const cardWidth = testimonialScrollRef.current.children[0]?.offsetWidth || 0;
            const gap = 32;
            const scrollAmount = (cardWidth + gap) * index;

            testimonialScrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            setCurrentTestimonialIndex(index);
            setIsAutoPlaying(false);

            // Resume auto-play after 10 seconds
            setTimeout(() => setIsAutoPlaying(true), 10000);
        }
    };

    // Dashboard Preview Component
    const SidebarItem = ({ icon: Icon, active, onClick }) => (
        <button
            onClick={onClick}
            className={`p-3 rounded-xl transition-all duration-300 group relative ${active
                ? 'bg-[#2d65bc] text-white shadow-lg shadow-blue-500/30'
                : `text-gray-400 hover:bg-gray-100 ${theme === 'dark' ? 'hover:bg-slate-800' : ''}`}`}
        >
            <Icon size={20} strokeWidth={active ? 2.5 : 2} />
            {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">View</div>}
        </button>
    );

    const DashboardStatsView = ({ themeTextPrimary, themeTextSecondary }) => {
        const stats = [
            { icon: Target, label: 'Total Leads', value: '1.8K', color: 'from-blue-500 to-cyan-500' },
            { icon: Home, label: 'Properties', value: '234', color: 'from-purple-500 to-pink-500' },
            { icon: Calendar, label: 'Site Visits', value: '89', color: 'from-green-500 to-emerald-500' },
            { icon: DollarSign, label: 'Deals Closed', value: '47', color: 'from-orange-500 to-yellow-500' }
        ];

        return (
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {stats.map((stat, i) => (
                        <div key={i} className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border ${theme === 'light' ? 'bg-white border-gray-100' : 'bg-slate-800 border-slate-700'} shadow-sm`}>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-sm`}>
                                    <stat.icon size={12} className="sm:w-3.5 sm:h-3.5" />
                                </div>
                                <div>
                                    <div className={`text-sm sm:text-lg font-bold ${themeTextPrimary} leading-none`}>{stat.value}</div>
                                    <div className={`text-[9px] sm:text-[10px] mt-0.5 ${themeTextSecondary}`}>{stat.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <h4 className={`text-xs sm:text-sm font-bold ${themeTextPrimary} mb-2 sm:mb-3 px-1`}>Recent Activity</h4>
                    <div className="space-y-1.5 sm:space-y-2">
                        {[
                            { user: 'Sarah J.', action: 'Added new property', time: '2m ago', icon: Home, color: 'text-purple-500 bg-purple-50' },
                            { user: 'Mike C.', action: 'Closed deal #492', time: '1h ago', icon: CheckCircle, color: 'text-green-500 bg-green-50' },
                            { user: 'System', action: 'Daily backup done', time: '4h ago', icon: Clock, color: 'text-gray-500 bg-gray-50' },
                        ].map((item, idx) => (
                            <div key={idx} className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-lg border ${theme === 'light' ? 'bg-white border-gray-100' : 'bg-slate-800 border-slate-700'}`}>
                                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-slate-700' : item.color}`}>
                                    <item.icon size={12} className={`${theme === 'dark' ? 'text-gray-300' : item.color.split(' ')[0]} sm:w-3.5 sm:h-3.5`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className={`text-[10px] sm:text-xs font-semibold ${themeTextPrimary}`}>{item.user}</div>
                                    <div className={`text-[9px] sm:text-[10px] ${themeTextSecondary} truncate`}>{item.action}</div>
                                </div>
                                <span className={`text-[9px] sm:text-[10px] ${themeTextSecondary} hidden sm:inline`}>{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const LeadsTableView = () => {
        const users = [
            { id: 1, name: "Residential Lead A", email: "client.a@example.com", mobile: "+91...234", status: "Hot" },
            { id: 2, name: "Commercial Lead B", email: "client.b@example.com", mobile: "+91...567", status: "Qualified" },
            { id: 3, name: "Investor Lead C", email: "client.c@example.com", mobile: "+91...890", status: "Hot" },
            { id: 4, name: "Property Inquiry D", email: "client.d@example.com", mobile: "+91...123", status: "New" },
            { id: 5, name: "Builder Lead E", email: "client.e@example.com", mobile: "+91...456", status: "Qualified" }
        ];

        const borderColor = theme === 'light' ? 'border-gray-100' : 'border-slate-700';
        const headerColor = theme === 'light' ? 'text-gray-800' : 'text-gray-200';
        const rowHover = theme === 'light' ? 'hover:bg-gray-50' : 'hover:bg-slate-700/50';

        return (
            <div className={`w-full rounded-lg sm:rounded-xl overflow-hidden border ${borderColor} ${theme === 'light' ? 'bg-white' : 'bg-slate-800'} animate-fade-in shadow-sm`}>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                {['Name', 'Status', 'Action'].map((h) => (
                                    <th key={h} className={`py-2 sm:py-3 px-2 sm:px-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${headerColor} border-b-2 border-teal-500`}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                            {users.map((user) => (
                                <tr key={user.id} className={`border-b ${borderColor} ${rowHover} transition-colors`}>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-100/50 flex items-center justify-center text-cyan-600">
                                                <User size={10} strokeWidth={2.5} className="sm:w-3 sm:h-3" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] sm:text-xs font-semibold">{user.name}</span>
                                                <span className="text-[9px] sm:text-[10px] text-gray-400 hidden sm:inline">{user.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                                        <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold border ${user.status === 'Active' ? 'bg-emerald-100/30 text-emerald-500 border-emerald-500/20' : 'bg-gray-100/30 text-gray-500 border-gray-500/20'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                                        <MoreHorizontal size={14} className="text-gray-400 cursor-pointer hover:text-[#2d65bc]" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const PropertiesView = ({ themeTextPrimary }) => (
        <div className="grid grid-cols-1 gap-2 sm:gap-3 animate-fade-in">
            {[
                { title: "Luxury Villa Project", price: "₹2.5Cr", loc: "Premium Location", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" },
                { title: "Modern Apartment", price: "₹85L", loc: "City Center", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80" },
                { title: "Commercial Space", price: "₹1.2Cr", loc: "Business Hub", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80" }
            ].map((prop, i) => (
                <div key={i} className={`flex gap-2 sm:gap-3 p-2 rounded-lg sm:rounded-xl border ${theme === 'light' ? 'bg-white border-gray-100 hover:border-blue-200' : 'bg-slate-800 border-slate-700 hover:border-blue-700'} transition-all cursor-pointer group`}>
                    <img src={prop.img} alt={prop.title} className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div className="flex justify-between items-start">
                            <h4 className={`text-xs sm:text-sm font-bold ${themeTextPrimary} truncate group-hover:text-[#2d65bc] transition-colors`}>{prop.title}</h4>
                            <span className="text-[10px] sm:text-xs font-bold text-emerald-500">{prop.price}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-gray-400">
                            <MapPin size={8} className="sm:w-2.5 sm:h-2.5" />
                            <span className="text-[9px] sm:text-[10px] truncate">{prop.loc}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const AnalyticsView = ({ themeTextPrimary, themeTextSecondary }) => {
        const pieData = [
            { label: 'New Leads', value: 156, color: '#3b82f6', percentage: 30 },
            { label: 'Qualified', value: 234, color: '#10b981', percentage: 45 },
            { label: 'Closed', value: 130, color: '#f59e0b', percentage: 25 }
        ];

        // Calculate pie chart segments
        const total = pieData.reduce((sum, item) => sum + item.value, 0);
        let currentAngle = 0;

        return (
            <div className="space-y-3 sm:space-y-4 animate-fade-in">
                {/* Pie Chart */}
                <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border ${theme === 'light' ? 'bg-white border-gray-100' : 'bg-slate-800 border-slate-700'}`}>
                    <h4 className={`text-xs sm:text-sm font-bold ${themeTextPrimary} mb-3 sm:mb-4`}>System Analytics</h4>

                    <div className="flex flex-col items-center gap-4">
                        {/* SVG Pie Chart */}
                        <svg viewBox="0 0 200 200" className="w-32 h-32 sm:w-40 sm:h-40">
                            {pieData.map((segment, idx) => {
                                const startAngle = currentAngle;
                                const angle = (segment.value / total) * 360;
                                currentAngle += angle;

                                const startRad = (startAngle - 90) * (Math.PI / 180);
                                const endRad = (startAngle + angle - 90) * (Math.PI / 180);

                                const x1 = 100 + 100 * Math.cos(startRad);
                                const y1 = 100 + 100 * Math.sin(startRad);
                                const x2 = 100 + 100 * Math.cos(endRad);
                                const y2 = 100 + 100 * Math.sin(endRad);

                                const largeArc = angle > 180 ? 1 : 0;

                                const pathData = [
                                    `M 100 100`,
                                    `L ${x1} ${y1}`,
                                    `A 100 100 0 ${largeArc} 1 ${x2} ${y2}`,
                                    `Z`
                                ].join(' ');

                                return (
                                    <path
                                        key={idx}
                                        d={pathData}
                                        fill={segment.color}
                                        className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                                    />
                                );
                            })}
                        </svg>

                        {/* Legend */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                            {pieData.map((segment, idx) => (
                                <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                                    <div
                                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                                        style={{ backgroundColor: segment.color }}
                                    />
                                    <span className={`text-[9px] sm:text-[10px] font-medium ${themeTextPrimary}`}>
                                        {segment.label} ({segment.value})
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {[
                        { label: 'Total Users', value: '31', icon: Users, color: 'from-blue-500 to-cyan-500' },
                        { label: 'Active Leads', value: '10', icon: Target, color: 'from-orange-500 to-yellow-500' },
                        { label: 'Conversion', value: '24%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
                        { label: 'Revenue', value: '₹45L', icon: DollarSign, color: 'from-purple-500 to-pink-500' }
                    ].map((metric, idx) => (
                        <div key={idx} className={`p-2 sm:p-3 rounded-lg border ${theme === 'light' ? 'bg-white border-gray-100' : 'bg-slate-800 border-slate-700'}`}>
                            <div className="flex items-center gap-2 mb-1">
                                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                                    <metric.icon size={10} className="text-white sm:w-3 sm:h-3" />
                                </div>
                                <div className={`text-[9px] sm:text-[10px] ${themeTextSecondary}`}>{metric.label}</div>
                            </div>
                            <div className={`text-sm sm:text-lg font-bold ${themeTextPrimary} ml-7 sm:ml-8`}>{metric.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const DashboardHomeView = () => {
        const themeTextPrimary = theme === 'light' ? 'text-gray-900' : 'text-white';
        const themeTextSecondary = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
        const tabs = ['dashboard', 'leads', 'properties', 'analytics'];
        const activeTab = tabs[dashboardTabIndex];

        // Auto-change tabs every 3 seconds
        useEffect(() => {
            const interval = setInterval(() => {
                setDashboardTabIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % 4;
                    console.log('Tab rotation: from', prevIndex, 'to', nextIndex, '=', tabs[nextIndex]);
                    return nextIndex;
                });
            }, 3000);

            return () => clearInterval(interval);
        }, []);

        const handleTabClick = (index) => {
            console.log('Manual click: index', index);
            setDashboardTabIndex(index);
        };

        return (
            <div
                className={`w-full max-w-[700px] h-[400px] sm:h-[500px] max-h-[500px] rounded-[24px] sm:rounded-[32px] overflow-hidden flex flex-col shadow-2xl transition-all duration-500 sm:transform sm:hover:rotate-0 sm:hover:scale-[1.02] border-2 sm:border-4 ${theme === 'light' ? 'bg-[#F3F4F6] border-white' : 'bg-[#0f172a] border-slate-800'}`}
                style={{ transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)', boxShadow: '10px 10px 40px -10px rgba(0,0,0,0.2)' }}
            >
                {/* Top Bar */}
                <div className={`h-12 sm:h-16 px-3 sm:px-6 flex items-center justify-between border-b ${theme === 'light' ? 'bg-white/80 border-gray-200' : 'bg-slate-900/80 border-slate-800'} backdrop-blur-sm z-10`}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white">
                        <img src="https://ik.imagekit.io/y7b5pqyxj/anquest__2_-removebg-preview.png?updatedAt=1761570866349" alt="Profile" className="w-full h-full object-contain" />
                    </div>
                    
                    
                </div>

                {/* Main Layout */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar - Hidden on mobile */}
                    <div className={`hidden sm:flex w-[70px] flex-col items-center py-6 gap-4 border-r ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-slate-900 border-slate-800'}`}>
                        <SidebarItem icon={LayoutDashboard} active={activeTab === 'dashboard'} onClick={() => handleTabClick(0)} />
                        <SidebarItem icon={Users} active={activeTab === 'leads'} onClick={() => handleTabClick(1)} />
                        <SidebarItem icon={Home} active={activeTab === 'properties'} onClick={() => handleTabClick(2)} />
                        <SidebarItem icon={BarChart3} active={activeTab === 'analytics'} onClick={() => handleTabClick(3)} />
                        <div className="mt-auto">
                            <SidebarItem icon={MoreHorizontal} active={false} onClick={() => { }} />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto p-3 sm:p-5 scrollbar-thin scrollbar-thumb-gray-200 relative">
                        <div className="mb-3 sm:mb-4 flex items-center justify-between">
                            <h2 className={`text-base sm:text-xl font-bold ${themeTextPrimary} capitalize`}>
                                {activeTab === 'dashboard' ? 'Overview' : activeTab === 'analytics' ? 'Analytics' : activeTab}
                            </h2>
                            <button className="text-[9px] sm:text-[10px] font-bold text-[#2d65bc] bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                                + Add New
                            </button>
                        </div>

                        <div className="min-h-[150px] sm:min-h-[200px]">
                            {activeTab === 'dashboard' && <DashboardStatsView themeTextPrimary={themeTextPrimary} themeTextSecondary={themeTextSecondary} />}
                            {activeTab === 'leads' && <LeadsTableView />}
                            {activeTab === 'properties' && <PropertiesView themeTextPrimary={themeTextPrimary} />}
                            {activeTab === 'analytics' && <AnalyticsView themeTextPrimary={themeTextPrimary} themeTextSecondary={themeTextSecondary} />}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <SEO
                title="Real Estate CRM Software - Lead Management & Sales Automation | aNquest"
                description="Powerful Real Estate CRM for builders, brokers & agents. Automate lead tracking, property management, site visits & sales pipeline. Increase conversions by 60%."
                keywords="real estate CRM, builder CRM, broker CRM, property management software, lead management system, real estate automation, sales pipeline CRM"
                canonicalUrl="https://anquestmedia.com/services/crm-services/real-estate-crm"
            />

            <style>{`
        @keyframes float3d {
          0%, 100% { transform: translateY(0px) translateZ(0px); }
          50% { transform: translateY(-20px) translateZ(20px); }
        }
        @keyframes floatReverse3d {
          0%, 100% { transform: translateY(0px) translateZ(0px); }
          50% { transform: translateY(20px) translateZ(-20px); }
        }
        @keyframes floatSlow3d {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes tilt3d {
          0%, 100% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg); }
          50% { transform: perspective(1000px) rotateX(2deg) rotateY(-2deg); }
        }
        @keyframes microBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        @keyframes neonPulse3d {
          0%, 100% { 
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 20px 60px rgba(0,0,0,0.3);
          }
          50% { 
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 30px 80px rgba(0,0,0,0.4);
          }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(-10px, -20px) scale(1.2); opacity: 1; }
        }
        .float-3d { animation: float3d 6s ease-in-out infinite; }
        .float-reverse-3d { animation: floatReverse3d 7s ease-in-out infinite; }
        .float-slow-3d { animation: floatSlow3d 8s ease-in-out infinite; }
        .tilt-3d { animation: tilt3d 10s ease-in-out infinite; }
        .micro-bounce { animation: microBounce 3s ease-in-out infinite; }
        .neon-pulse-3d { animation: neonPulse3d 3s ease-in-out infinite; }
        .particle-float { animation: particleFloat 4s ease-in-out infinite; }
        .perspective-hero { perspective: 1500px; transform-style: preserve-3d; }
        .transform-3d { transform-style: preserve-3d; }
        .glass-hero {
          background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(26, 26, 40, 0.7)'};
          backdrop-filter: ;
          border: 1px solid ${theme === 'light' ? 'rgba(45, 101, 188, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
        }
        .glass-tile {
          background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 50, 0.85)'};
          backdrop-filter: saturate(180%);
          border: 1px solid ${theme === 'light' ? 'rgba(45, 101, 188, 0.3)' : 'rgba(100, 200, 255, 0.2)'};
        }
        .depth-3d {
          box-shadow: 0 30px 80px ${theme === 'light' ? 'rgba(45, 101, 188, 0.25)' : 'rgba(0, 0, 0, 0.5)'},
                      0 50px 120px ${theme === 'light' ? 'rgba(45, 101, 188, 0.2)' : 'rgba(0, 0, 0, 0.4)'};
        }
        .neon-edge {
          box-shadow: 0 0 10px ${theme === 'light' ? 'rgba(45, 101, 188, 0.3)' : 'rgba(100, 200, 255, 0.4)'},
                      0 0 20px ${theme === 'light' ? 'rgba(45, 101, 188, 0.2)' : 'rgba(100, 200, 255, 0.2)'};
        }
      `}</style>

            <div className="min-h-screen relative">

                <div className="theme-bg-primary relative z-10">

                    {/* 1️ Hero Section */}
                    <section className="relative overflow-hidden h-[550px] flex items-center justify-center pt-20">
                        {/* Background Animation */}
                        <HomeHeroBg theme={theme} />

                        {/* Content */}
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="max-w-4xl mx-auto text-center">

                                {/* Heading */}
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 theme-text-primary leading-tight">
                                    Smart Real Estate CRM Solutions That{" "}
                                    <span style={{ color: "#2d65bc" }}>Close Deals Faster</span>
                                </h1>

                                {/* Subtitle */}
                                <p className="text-md sm:text-md lg:text-lg theme-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
                                    We are a forward-thinking digital solutions company turning ideas
                                    into powerful, scalable digital products.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to={buildUrl("/request-a-quote")}
                                        className="group px-8 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
                                        style={{
                                            background: "linear-gradient(135deg, #2d65bc, #1e88e5)",
                                        }}
                                    >
                                        Get Started
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    <Link
                                        to={buildUrl("/services/crm-services/real-state-crm/contact-us")}
                                        className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#2d65bc] text-[#2d65bc] hover:bg-[#2d65bc] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        Contact Us
                                        <Phone className="w-5 h-5" />
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                  bg-[#2d65bc]/10 rounded-full blur-3xl pointer-events-none" />
                    </section>






                    {/* Right: 3D Dashboard Mockup */}
                    <section className="py-10 lg:py-16 relative overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                                {/* LEFT SIDE — TEXT CONTENT */}
                                <div className="space-y-6 max-w-xl">
                                    <h2 className="text-3xl md:text-4xl font-bold theme-text-primary leading-tight">
                                        Powerful <span style={{ color: "#2d65bc" }}>Real Estate CRM</span><br />
                                        Built for High Conversion
                                    </h2>

                                    <p className="text-lg theme-text-secondary leading-relaxed">
                                        Manage leads, properties, site visits, sales pipeline and analytics
                                        from a single intelligent dashboard designed for builders, brokers
                                        and agents.
                                    </p>

                                    <ul className="space-y-3">
                                        {[
                                            "Live lead tracking & smart follow-ups",
                                            "Real-time sales & performance analytics",
                                            "Role-based dashboards for teams",
                                            "Automated reminders & notifications",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 mt-1 text-[#2d65bc]" />
                                                <span className="theme-text-primary font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                  
                                </div>

                                {/* RIGHT SIDE — 3D DASHBOARD */}
                                <div className="flex justify-center lg:justify-end">
                                    <DashboardHomeView />
                                </div>

                            </div>
                        </div>
                    </section>




                    {/* 2️⃣ Key Features Section */}
                    <section className="py-10 lg:py-16 relative overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center mb-10 space-y-4">


                                <h2 className="text-3xl md:text-4xl   font-bold theme-text-primary">
                                    Everything You Need to <span style={{ color: '#2d65bc' }}>Scale Your Business</span>
                                </h2>

                                <p className="text-xl theme-text-secondary max-w-3xl mx-auto">
                                    Comprehensive CRM features designed specifically for real estate professionals
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {keyFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="glass-tile rounded-2xl p-3 lg:p-6  hover:scale-105 transition-all duration-300 cursor-pointer"
                                        onMouseEnter={() => setHoveredFeature(index)}
                                        onMouseLeave={() => setHoveredFeature(null)}
                                    >
                                        <div
                                            className={`w-14 h-14 rounded-xl bg-[#2d65bc] flex items-center justify-center mb-4 ${hoveredFeature === index ? 'micro-bounce' : ''
                                                }`}
                                        >
                                            <feature.icon className="text-white" size={28} />
                                        </div>
                                        <h3 className="text-lg font-bold theme-text-primary mb-2">{feature.title}</h3>
                                        <p className="text-sm theme-text-secondary">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3️⃣ Real Estate CRM Categories */}
                    <section className="py-10 lg:py-16 relative overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center mb-10 space-y-4">
                                <h2 className="text-3xl md:text-4xl   font-bold theme-text-primary">
                                    CRM Solutions for <span style={{ color: '#2d65bc' }}>Every Real Estate Role</span>
                                </h2>
                                <p className="text-xl theme-text-secondary max-w-3xl mx-auto">
                                    Specialized CRM platforms tailored for builders, brokers, agents, and property managers
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-hero">
                                {crmCategories.map((category, index) => (
                                    <div
                                        key={index}
                                        className="glass-tile rounded-3xl p-3 lg:p-6 group cursor-pointer relative"
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                        onMouseEnter={() => setHoveredCategory(index)}
                                        onMouseLeave={() => setHoveredCategory(null)}
                                    >
                                        {/* Gradient Overlay */}
                                        <div
                                            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-0 `}
                                        ></div>

                                        {/* Neon Edge */}
                                        <div
                                            className={`absolute inset-0 rounded-3xl  transition-all duration-500`}
                                            style={{
                                                color: theme === 'light' ? '#2d65bc' : '#2d65b',
                                                opacity: hoveredCategory === index ? 1 : 0.3
                                            }}
                                        ></div>

                                        {/* Icon */}
                                        <div className="relative mb-6">
                                            <div
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-500`}
                                            >
                                                <category.icon className="text-white" size={32} />
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold theme-text-primary mb-3">{category.title}</h3>
                                        <p className="theme-text-secondary text-sm mb-4">{category.description}</p>

                                        {/* Features */}
                                        <div className="grid grid-cols-2 gap-2">
                                            {category.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 glass-hero rounded-lg px-3 py-2">
                                                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#2d65bc' }} />
                                                    <span className="text-xs theme-text-primary font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4️⃣ Problem-Solution Section */}
                    <section className="py-10 lg:py-16 relative overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl   font-bold theme-text-primary mb-6">
                                    Problems We <span style={{ color: '#2d65bc' }}>Solve</span>
                                </h2>
                                <p className="text-xl theme-text-secondary max-w-3xl mx-auto">
                                    Transform real estate challenges into growth opportunities
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8  mx-auto">
                                {problems.map((item, index) => (
                                    <div key={index} className="glass-tile rounded-2xl p-3 lg:p-6">
                                        <div className="flex items-start gap-4">
                                            {/* <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <span className="text-2xl">⚠️</span>
                      </div>
                    </div> */}
                                            <div>
                                                <h3 className="text-lg font-bold text-red-500 mb-2">{item.problem}</h3>
                                                <div className="flex items-start gap-2 mt-3">
                                                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-500 mt-1" />
                                                    <p className="theme-text-primary font-medium">{item.solution}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 5️⃣ CRM Implementation Process */}
                    <section className="py-10 lg:py-16 relative overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center mb-10 space-y-4">
                                {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-hero neon-edge mb-4">
                  <Workflow className="w-4 h-4" style={{ color: '#2d65bc' }} />
                  <span className="text-sm font-semibold theme-text-primary">Simple Process</span>
                </div> */}

                                <h2 className="text-3xl md:text-4xl   font-bold theme-text-primary">
                                    Get Started in <span style={{ color: '#2d65bc' }}>4 Easy Steps</span>
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6  mx-auto">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="glass-tile rounded-2xl p-3 lg:p-6 text-center">
                                        <div className="relative inline-block mb-4">
                                            <div className="w-20 h-20 rounded-2xl bg-[#2d65bc] flex items-center justify-center mx-auto micro-bounce">
                                                <step.icon className="text-white" size={36} />
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

                    {/* 6️⃣ Why Choose Our Real Estate CRM */}
                    <section className="py-10 lg:py-16 relative overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl   font-bold theme-text-primary mb-6">
                                    Why Choose Our <span style={{ color: '#2d65bc' }}>Real Estate CRM</span>
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="glass-tile rounded-2xl p-3 lg:p-6 text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-[#2d65bc] flex items-center justify-center mx-auto mb-4">
                                            <benefit.icon className="text-white" size={32} />
                                        </div>
                                        <h3 className="text-lg font-bold theme-text-primary mb-3">{benefit.title}</h3>
                                        <p className="text-sm theme-text-secondary">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 7️⃣ Testimonials Section */}
                    {/* <section
            className="py-10 lg:py-16 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <CircleSquareBgAnimation theme={theme} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl  font-bold theme-text-primary mb-6">
                  What Our <span style={{ color: '#2d65bc' }}>Clients Say</span>
                </h2>
                <p className="text-xl theme-text-secondary">Real results from real estate professionals</p>
              </div>

              
              <div className="relative max-w-6xl mx-auto">
                
                <button
                  onClick={handlePrevTestimonial}
                  className={`absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${theme === 'dark'
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800'
                    }`}
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNextTestimonial}
                  className={`absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${theme === 'dark'
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800'
                    }`}
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                
                <div
                  ref={testimonialScrollRef}
                  className="flex overflow-x-hidden scroll-smooth gap-4 px-0"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="glass-tile rounded-2xl p-3 lg:p-6 min-w-full max-w-[280px] md:min-w-[300px] md:max-w-[350px]  shrink-0"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2"
                          style={{ borderColor: '#2d65bc' }}
                        />
                        <div>
                          <h4 className="font-bold theme-text-primary">{testimonial.name}</h4>
                          <p className="text-sm theme-text-secondary">{testimonial.position}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="theme-text-secondary italic">"{testimonial.feedback}"</p>
                    </div>
                  ))}
                </div>

                
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleTestimonialDotClick(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonialIndex === index
                          ? 'w-8'
                          : 'hover:scale-125'
                        }`}
                      style={{
                        backgroundColor: currentTestimonialIndex === index ? '#2d65bc' : theme === 'dark' ? '#4a5568' : '#cbd5e0'
                      }}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section> */}



                    {/* 9️⃣ Strong CTA Section */}
                    <section className="py-10 sm:py-10 lg:py-15 theme-bg-secondary relative overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
                            <div className="mx-auto text-center max-w-6xl">
                                <div className="rounded-3xl p-3 sm:p-4 py-4 sm:py-8 lg:py-12 lg:p-4 theme-shadow-primary relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                                            Ready to Scale Your <span style={{ color: '#2d65bc' }}>Real Estate Business?</span>
                                        </h2>

                                        <p className="text-lg sm:text-xl theme-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                                            Join 500+ real estate professionals using our CRM to automate sales and increase conversions by 60%. Get started today!
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link
                                                to="/contacts-us"
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

export default RealEstateCRM;

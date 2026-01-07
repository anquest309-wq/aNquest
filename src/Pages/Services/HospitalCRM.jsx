import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Heart, Activity, Users, Calendar, Clock, FileText, Shield, Bell,
    Phone, Mail, DollarSign, BarChart3, TrendingUp, CheckCircle, ArrowRight,
    Stethoscope, Pill, Clipboard, UserCheck, Video, MessageSquare, Settings,
    Award, Sparkles, Layers, Workflow, Cog, HardDrive, Headphones,
    Zap, Database, Star, ChevronDown, Target, Building2, Eye, Droplet,
    LayoutDashboard, MoreHorizontal, Search, User
} from 'lucide-react';
import { useTheme } from '../../Context/ThemeContext';
import CircleSquareBgAnimation from '../../Components/Bg-animation-template/CircleSquareBgAnimation';
import SEO from '../../Components/SEO';
import { buildUrl } from '../../utils/urlUtils';
import HomeHeroBg from '../../Components/Bg-animation-template/HomeHeroBg';

const HospitalCRM = () => {
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
            icon: Users,
            title: 'Patient Management',
            description: 'Centralized patient records with complete medical history, demographics, and treatment tracking.'
        },
        {
            icon: Calendar,
            title: 'Appointment Scheduling & Reminders',
            description: 'Smart scheduling system with automated SMS/WhatsApp reminders to reduce no-shows.'
        },
        {
            icon: Stethoscope,
            title: 'Doctor & Staff Management',
            description: 'Manage doctors, nurses, and staff schedules with role-based access and performance tracking.'
        },
        {
            icon: DollarSign,
            title: 'Billing & Payment Tracking',
            description: 'Automated billing, insurance claims, payment processing, and financial reporting.'
        },
        {
            icon: MessageSquare,
            title: 'Patient Communication Hub',
            description: 'Unified communication via WhatsApp, SMS, Email for appointments, reports, and follow-ups.'
        },
        {
            icon: FileText,
            title: 'Medical Records Integration',
            description: 'Seamless integration with EMR/EHR systems for digital prescriptions and lab reports.'
        },
        {
            icon: Activity,
            title: 'OPD/IPD Workflow Management',
            description: 'Streamlined outpatient and inpatient workflows with admission, discharge, and bed management.'
        },
        {
            icon: BarChart3,
            title: 'Hospital Analytics Dashboard',
            description: 'Real-time insights on patient volume, revenue, doctor performance, and operational metrics.'
        }
    ];

    const crmCategories = [
        {
            icon: Building2,
            title: 'Multispecialty Hospital CRM',
            description: 'Comprehensive CRM for large hospitals managing multiple departments, OPD/IPD, and complex workflows.',
            gradient: 'from-blue-500 to-cyan-500',
            features: ['Department Management', 'Bed Allocation', 'Multi-Location', 'Advanced Analytics']
        },
        {
            icon: Stethoscope,
            title: 'Clinic CRM',
            description: 'Efficient CRM for small to medium clinics with appointment booking, patient records, and billing.',
            gradient: 'from-teal-500 to-green-500',
            features: ['Queue Management', 'Digital Prescriptions', 'Follow-up Reminders', 'Report Integration']
        },
        {
            icon: Activity,
            title: 'Diagnostic Center CRM',
            description: 'Specialized CRM for diagnostic labs with test management, report generation, and delivery tracking.',
            gradient: 'from-purple-500 to-pink-500',
            features: ['Test Booking', 'Sample Tracking', 'Report Generation', 'Home Collection']
        },
        {
            icon: Heart,
            title: 'Nursing Home CRM',
            description: 'Care-focused CRM for nursing homes with resident management, medication tracking, and family communication.',
            gradient: 'from-red-500 to-orange-500',
            features: ['Resident Profiles', 'Medication Schedule', 'Care Plans', 'Family Portal']
        },
        {
            icon: Pill,
            title: 'Dental Clinic CRM',
            description: 'Dental-specific CRM with treatment plans, dental charts, appointment reminders, and payment tracking.',
            gradient: 'from-indigo-500 to-blue-500',
            features: ['Dental Charts', 'Treatment Plans', 'Before/After Photos', 'Insurance Claims']
        },
        {
            icon: Eye,
            title: 'Eye Care CRM',
            description: 'Ophthalmology CRM with vision testing, prescription management, and surgical procedure tracking.',
            gradient: 'from-cyan-500 to-teal-500',
            features: ['Vision Records', 'Prescription History', 'Surgery Scheduling', 'Optical Integration']
        },
        {
            icon: Activity,
            title: 'Physiotherapy Center CRM',
            description: 'Therapy-focused CRM with session tracking, exercise plans, progress monitoring, and billing.',
            gradient: 'from-green-500 to-emerald-500',
            features: ['Session Tracking', 'Exercise Plans', 'Progress Reports', 'Package Management']
        },
        {
            icon: Droplet,
            title: 'Blood Bank CRM',
            description: 'Blood bank management with donor tracking, inventory management, and emergency request handling.',
            gradient: 'from-red-500 to-pink-500',
            features: ['Donor Management', 'Blood Inventory', 'Request Tracking', 'Emergency Alerts']
        }
    ];

    const problems = [
        { solution: 'Automated appointment reminders via SMS/WhatsApp reduce no-shows by 70%' },
        { solution: 'Digital patient records eliminate manual paperwork and improve data accuracy' },
        { solution: 'Centralized communication hub for instant patient-doctor-staff coordination' },
        { solution: 'Automated task distribution and role-based access reduce staff workload by 50%' }
    ];

    const processSteps = [
        {
            number: '01',
            icon: Clipboard,
            title: 'Requirement Analysis',
            description: 'We understand your hospital workflow, departments, and specific requirements for customization.'
        },
        {
            number: '02',
            icon: Cog,
            title: 'CRM Setup & Configuration',
            description: 'Configure patient forms, doctor schedules, billing modules, and department hierarchies.'
        },
        {
            number: '03',
            icon: HardDrive,
            title: 'Data Migration',
            description: 'Securely migrate existing patient records, appointment history, and medical data into the CRM.'
        },
        {
            number: '04',
            icon: Headphones,
            title: 'Training & Support',
            description: 'Comprehensive staff training with ongoing technical support and system maintenance.'
        }
    ];

    const benefits = [
        {
            icon: Heart,
            title: 'Boost Patient Experience',
            description: 'Reduce wait times, streamline communication, and provide personalized care with automated workflows.'
        },
        {
            icon: Zap,
            title: 'Reduce Operational Load',
            description: 'Automate repetitive tasks like appointment booking, billing, and reminders to free up staff time.'
        },
        {
            icon: TrendingUp,
            title: 'Improve Appointment Efficiency',
            description: 'Smart scheduling prevents overbooking, optimizes doctor time, and increases patient throughput by 40%.'
        },
        {
            icon: Shield,
            title: 'Ensure Secure Data Management',
            description: 'HIPAA-compliant security with encrypted storage, access control, and regular backups.'
        }
    ];

    const testimonials = [
        {
            name: 'Dr. Anjali Mehta',
            position: 'Medical Director - City Care Hospital',
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            feedback: 'Our OPD management improved drastically. Appointment no-shows reduced by 65% and staff workload decreased significantly!'
        },
        {
            name: 'Rajesh Kumar',
            position: 'Administrator - MediCare Clinic',
            image: 'https://randomuser.me/api/portraits/men/46.jpg',
            feedback: 'The CRM handles 500+ patients daily seamlessly. Billing, records, and communication are now completely automated!'
        },
        {
            name: 'Dr. Priya Sharma',
            position: 'Owner - Dental Care Center',
            image: 'https://randomuser.me/api/portraits/women/28.jpg',
            feedback: 'Best investment for our clinic! Patient satisfaction increased and our revenue grew by 35% within 6 months.'
        },
        {
            name: 'Amit Patel',
            position: 'Director - HealthPlus Diagnostics',
            image: 'https://randomuser.me/api/portraits/men/52.jpg',
            feedback: 'Report generation and sample tracking are now 100% digital. Our efficiency improved and errors reduced to zero!'
        },
        {
            name: 'Dr. Suresh Rao',
            position: 'Chief Medical Officer - Wellness Hospital',
            image: 'https://randomuser.me/api/portraits/men/71.jpg',
            feedback: 'Patient management and appointment scheduling have never been easier. The system has streamlined our entire workflow beautifully!'
        }
    ];

    const faqs = [
        {
            question: 'Is the Hospital CRM HIPAA compliant and secure?',
            answer: 'Yes, our CRM is fully HIPAA compliant with enterprise-grade security including encrypted data storage, role-based access control, audit trails, and regular security updates to protect patient information.'
        },
        {
            question: 'How does the CRM help with patient management?',
            answer: 'The CRM provides centralized patient records with complete medical history, appointment tracking, treatment plans, billing history, and communication logs—all accessible in one secure platform.'
        },
        {
            question: 'Can it integrate with existing systems (LIS/RIS/ERP)?',
            answer: 'Yes! We provide seamless integration with Laboratory Information Systems (LIS), Radiology Information Systems (RIS), ERP systems, pharmacy software, and other third-party medical applications.'
        },
        {
            question: 'What is the pricing model?',
            answer: 'We offer flexible pricing based on hospital size and features required. Plans start from ₹15,000/month for small clinics to custom enterprise packages for large hospitals. Contact us for detailed pricing.'
        },
        {
            question: 'How long does implementation take?',
            answer: 'Standard implementation takes 10-15 days including data migration, customization, and staff training. Express setup available in 5-7 days for urgent requirements.'
        },
        {
            question: 'What kind of support and training do you provide?',
            answer: 'We provide comprehensive on-site training for all staff, video tutorials, detailed documentation, and 24/7 technical support via phone, email, and WhatsApp. Dedicated account managers for enterprise plans.'
        }
    ];

    // Auto-scroll functionality for testimonials
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNextTestimonial();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentTestimonialIndex, isAutoPlaying]);

    const handleNextTestimonial = () => {
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

    const handlePrevTestimonial = () => {
        if (testimonialScrollRef.current) {
            const cardWidth = testimonialScrollRef.current.children[0]?.offsetWidth || 0;
            const gap = 32;
            const scrollAmount = cardWidth + gap;

            if (currentTestimonialIndex > 0) {
                testimonialScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                setCurrentTestimonialIndex(prev => prev - 1);
            } else {
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

            setTimeout(() => setIsAutoPlaying(true), 10000);
        }
    };

    // Dashboard Preview Components
    const SidebarItem = ({ icon: Icon, active, onClick }) => (
        <button
            onClick={onClick}
            className={`p-3 rounded-xl transition-all duration-300 group relative ${active
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                : `text-gray-400 hover:bg-gray-100 ${theme === 'dark' ? 'hover:bg-slate-800' : ''}`}`}
        >
            <Icon size={20} strokeWidth={active ? 2.5 : 2} />
            {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">View</div>}
        </button>
    );

    const DashboardStatsView = ({ themeTextPrimary, themeTextSecondary }) => {
        const stats = [
            { icon: Users, label: 'New Patients', value: '47', color: 'from-teal-500 to-cyan-500' },
            { icon: Calendar, label: 'Appointments', value: '124', color: 'from-blue-500 to-indigo-500' },
            { icon: Activity, label: 'OPD Active', value: '38', color: 'from-green-500 to-emerald-500' },
            { icon: FileText, label: 'Lab Reports', value: '52', color: 'from-purple-500 to-pink-500' }
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
                            { user: 'Dr. Sharma', action: 'Completed consultation', time: '5m ago', icon: Stethoscope, color: 'text-teal-500 bg-teal-50' },
                            { user: 'Reception', action: 'New appointment booked', time: '12m ago', icon: Calendar, color: 'text-blue-500 bg-blue-50' },
                            { user: 'Lab', action: 'Report generated', time: '20m ago', icon: FileText, color: 'text-green-500 bg-green-50' },
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

    const PatientsTableView = () => {
        const patients = [
            { id: 1, name: "Patient #2024-001", dept: "Cardiology", mobile: "+91...456", status: "Admitted" },
            { id: 2, name: "Patient #2024-002", dept: "Orthopedics", mobile: "+91...789", status: "OPD" },
            { id: 3, name: "Patient #2024-003", dept: "Neurology", mobile: "+91...123", status: "Discharged" },
            { id: 4, name: "Patient #2024-004", dept: "Pediatrics", mobile: "+91...654", status: "Admitted" },
            { id: 5, name: "Patient #2024-005", dept: "General", mobile: "+91...987", status: "OPD" }
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
                                {['Patient', 'Status', 'Action'].map((h) => (
                                    <th key={h} className={`py-2 sm:py-3 px-2 sm:px-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${headerColor} border-b-2 border-teal-500`}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                            {patients.map((patient) => (
                                <tr key={patient.id} className={`border-b ${borderColor} ${rowHover} transition-colors`}>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-100/50 flex items-center justify-center text-teal-600">
                                                <User size={10} strokeWidth={2.5} className="sm:w-3 sm:h-3" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] sm:text-xs font-semibold">{patient.name}</span>
                                                <span className="text-[9px] sm:text-[10px] text-gray-400 hidden sm:inline">{patient.dept}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                                        <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold border ${patient.status === 'Admitted' ? 'bg-blue-100/30 text-blue-500 border-blue-500/20' :
                                            patient.status === 'OPD' ? 'bg-green-100/30 text-green-500 border-green-500/20' :
                                                'bg-gray-100/30 text-gray-500 border-gray-500/20'
                                            }`}>
                                            {patient.status}
                                        </span>
                                    </td>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                                        <MoreHorizontal size={14} className="text-gray-400 cursor-pointer hover:text-teal-500" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const AppointmentsView = ({ themeTextPrimary }) => (
        <div className="grid grid-cols-1 gap-2 sm:gap-3 animate-fade-in">
            {[
                { time: "09:30 AM", doctor: "Cardiologist", patient: "Appointment #301", dept: "Cardiology" },
                { time: "11:00 AM", doctor: "Orthopedist", patient: "Appointment #302", dept: "Orthopedics" },
                { time: "02:15 PM", doctor: "Neurologist", patient: "Appointment #303", dept: "Neurology" }
            ].map((apt, i) => (
                <div key={i} className={`flex gap-2 sm:gap-3 p-2 rounded-lg sm:rounded-xl border ${theme === 'light' ? 'bg-white border-gray-100 hover:border-teal-200' : 'bg-slate-800 border-slate-700 hover:border-teal-700'} transition-all cursor-pointer group`}>
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex flex-col items-center justify-center ${theme === 'light' ? 'bg-teal-50' : 'bg-teal-900/30'}`}>
                        <Clock size={14} className="text-teal-500 sm:w-4 sm:h-4 mb-0.5" />
                        <span className="text-[9px] sm:text-[10px] font-bold text-teal-600">{apt.time}</span>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div className="flex justify-between items-start">
                            <h4 className={`text-xs sm:text-sm font-bold ${themeTextPrimary} truncate group-hover:text-teal-500 transition-colors`}>{apt.patient}</h4>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5 text-gray-400">
                            <Stethoscope size={8} className="sm:w-2.5 sm:h-2.5" />
                            <span className="text-[9px] sm:text-[10px] truncate">{apt.doctor} • {apt.dept}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const AnalyticsView = ({ themeTextPrimary, themeTextSecondary }) => {
        const pieData = [
            { label: 'OPD', value: 15, color: '#14b8a6', percentage: 38 },
            { label: 'IPD', value: 10, color: '#3b82f6', percentage: 25 },
            { label: 'Emergency', value: 15, color: '#f59e0b', percentage: 37 }
        ];

        const total = pieData.reduce((sum, item) => sum + item.value, 0);
        let currentAngle = 0;

        return (
            <div className="space-y-3 sm:space-y-4 animate-fade-in">
                {/* Pie Chart */}
                <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border ${theme === 'light' ? 'bg-white border-gray-100' : 'bg-slate-800 border-slate-700'}`}>
                    <h4 className={`text-xs sm:text-sm font-bold ${themeTextPrimary} mb-3 sm:mb-4`}>Department Analytics</h4>

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
                        { label: 'Total Patients', value: '247', icon: Users, color: 'from-teal-500 to-cyan-500' },
                        { label: "Today's Visits", value: '89', icon: Calendar, color: 'from-blue-500 to-indigo-500' },
                        { label: 'Bed Occupancy', value: '78%', icon: Activity, color: 'from-green-500 to-emerald-500' },
                        { label: 'Prescriptions', value: '156', icon: Pill, color: 'from-purple-500 to-pink-500' }
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
        const tabs = ['dashboard', 'patients', 'appointments', 'analytics'];
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
                        <img src="/logo-anquest+.png" alt="Profile" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 bg-gray-100/50 p-1.5 sm:p-2 rounded-lg w-28 sm:w-40">
                        <Search size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span className="text-[10px] sm:text-xs">Search...</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <Bell size={14} className="text-gray-400 sm:w-4 sm:h-4" />

                    </div>
                </div>

                {/* Main Layout */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar - Hidden on mobile */}
                    <div className={`hidden sm:flex w-[70px] flex-col items-center py-6 gap-4 border-r ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-slate-900 border-slate-800'}`}>
                        <SidebarItem icon={LayoutDashboard} active={activeTab === 'dashboard'} onClick={() => handleTabClick(0)} />
                        <SidebarItem icon={Users} active={activeTab === 'patients'} onClick={() => handleTabClick(1)} />
                        <SidebarItem icon={Calendar} active={activeTab === 'appointments'} onClick={() => handleTabClick(2)} />
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
                            <button className="text-[9px] sm:text-[10px] font-bold text-teal-500 bg-teal-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                                + Add New
                            </button>
                        </div>

                        <div className="min-h-[150px] sm:min-h-[200px]">
                            {activeTab === 'dashboard' && <DashboardStatsView themeTextPrimary={themeTextPrimary} themeTextSecondary={themeTextSecondary} />}
                            {activeTab === 'patients' && <PatientsTableView />}
                            {activeTab === 'appointments' && <AppointmentsView themeTextPrimary={themeTextPrimary} />}
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
                title="Hospital CRM Software - Patient Management & Healthcare Automation | aNquest"
                description="Advanced Hospital CRM for patient management, appointment scheduling, billing, OPD/IPD workflows. HIPAA compliant with 24/7 support. Trusted by 200+ healthcare providers."
                keywords="hospital CRM, clinic management software, patient management system, medical CRM, healthcare automation, hospital management software, OPD/IPD management"
                canonicalUrl="https://anquestmedia.com/crm-services/hospital"
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .float-3d { animation: float3d 6s ease-in-out infinite; }
        .float-reverse-3d { animation: floatReverse3d 7s ease-in-out infinite; }
        .float-slow-3d { animation: floatSlow3d 8s ease-in-out infinite; }
        .tilt-3d { animation: tilt3d 10s ease-in-out infinite; }
        .micro-bounce { animation: microBounce 3s ease-in-out infinite; }
        .neon-pulse-3d { animation: neonPulse3d 3s ease-in-out infinite; }
        .particle-float { animation: particleFloat 4s ease-in-out infinite; }
        .perspective-hero { perspective: 2000px; transform-style: preserve-3d; }
        .transform-3d { transform-style: preserve-3d; }
        .glass-hero {
          background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(26, 26, 40, 0.7)'};
          backdrop-filter: blur(20px);
          border: 1px solid ${theme === 'light' ? 'rgba(20, 184, 166, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
        }
        .glass-tile {
          background: ${theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 50, 0.85)'};
          backdrop-filter: blur(40px) saturate(180%);
          border: 1px solid ${theme === 'light' ? 'rgba(20, 184, 166, 0.3)' : 'rgba(100, 200, 255, 0.2)'};
        }
        .depth-3d {
          box-shadow: 0 30px 80px ${theme === 'light' ? 'rgba(20, 184, 166, 0.25)' : 'rgba(0, 0, 0, 0.5)'},
                      0 50px 120px ${theme === 'light' ? 'rgba(20, 184, 166, 0.2)' : 'rgba(0, 0, 0, 0.4)'};
        }
        .neon-edge {
          box-shadow: 0 0 10px ${theme === 'light' ? 'rgba(20, 184, 166, 0.3)' : 'rgba(94, 234, 212, 0.4)'},
                      0 0 20px ${theme === 'light' ? 'rgba(20, 184, 166, 0.2)' : 'rgba(94, 234, 212, 0.2)'};
        }
        .medical-gradient {
          background: linear-gradient(135deg, #14b8a6, #06b6d4);
        }
      `}</style>

            <div className="min-h-screen relative">

                <div className="theme-bg-primary relative z-10">

                    {/* 1️⃣ Hero Section */}
                    <section className="relative overflow-hidden h-[550px] flex items-center justify-center pt-20">
                        {/* Background Animation */}
                        <HomeHeroBg theme={theme} />

                        {/* Content */}
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                            {/* CENTERED CONTENT */}
                            <div className="max-w-4xl mx-auto text-center pt-6">

                                {/* Heading */}
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 theme-text-primary leading-tight">
                                    Advanced Hospital CRM Solutions for{" "}
                                    <span className="text-teal-500">Patient-Centric Healthcare</span>
                                </h1>

                                {/* Subtitle */}
                                <p className="text-xl sm:text-2xl theme-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
                                    Streamline patient management, automate appointments, optimize billing,
                                    and enhance communication with intelligent workflows and real-time analytics.
                                </p>

                            </div>

                            {/* CTA BUTTONS */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                                <Link
                                    to={buildUrl("/request-a-quote")}
                                    className="bg-[#2d65bc] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#1a4a8a] transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-2xl"
                                >
                                    Book Demo
                                </Link>

                                <Link
                                    to={buildUrl("/contacts-us")}
                                    className="border-2 border-[#2d65bc] text-[#2d65bc] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-[#2d65bc] hover:text-white transition-all duration-300 text-base sm:text-lg hover:scale-105"
                                >
                                    Talk to Specialist
                                </Link>
                            </div>

                        </div>

                        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                  bg-[#2d65bc]/10 rounded-full blur-3xl pointer-events-none" />
                    </section>



                    {/* 1️⃣ Dashboard Section */}
                    <section className="relative overflow-hidden py-10 h-[550px] flex items-center justify-center lg:py-16 md:py-24">
                        <HomeHeroBg theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">

                                {/* LEFT SIDE — TEXT */}
                                <div className="space-y-8">
                                    <h1 className="text-3xl md:text-4xl font-bold theme-text-primary leading-tight">
                                        Advanced Hospital CRM Solutions for{" "}
                                        <span className="text-teal-500">Patient-Centric Healthcare</span>
                                    </h1>

                                    <p className="text-xl theme-text-secondary leading-relaxed">
                                        Streamline patient management, automate appointments, optimize billing,
                                        and enhance communication with a smart hospital dashboard.
                                    </p>

                                    <ul className="space-y-3">
                                        {[
                                            "Centralized patient records & OPD/IPD workflows",
                                            "Smart appointment scheduling & reminders",
                                            "Doctor & staff performance tracking",
                                            "Real-time hospital analytics dashboard",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-teal-500 mt-1" />
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
                    <section className="relative py-10 lg:py-16 overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center  mx-auto mb-16">

                                <h2 className="text-3xl md:text-4xl  font-bold theme-text-primary mb-4">
                                    Comprehensive <span className="text-teal-500">Hospital Management</span>
                                </h2>
                                <p className="text-xl theme-text-secondary">
                                    Everything you need to manage patients, staff, appointments, billing, and analytics in one platform
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {keyFeatures.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setHoveredFeature(idx)}
                                        onMouseLeave={() => setHoveredFeature(null)}
                                        className={`glass-tile rounded-2xl p-3 lg:p-6 cursor-pointer transition-all duration-500 ${hoveredFeature === idx ? 'neon-pulse-2d' : ''
                                            }`}
                                        style={{
                                            transitionDelay: `${idx * 50}ms`
                                        }}
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4 micro-bounce">
                                            <feature.icon className="text-white" size={28} />
                                        </div>
                                        <h3 className="text-xl font-bold theme-text-primary mb-2">{feature.title}</h3>
                                        <p className="theme-text-secondary text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3️⃣ CRM Categories Section */}
                    <section className="relative py-10 lg:py-16 overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center  mx-auto mb-16">

                                <h2 className="text-3xl md:text-4xl   font-bold theme-text-primary mb-4">
                                    <span className="text-teal-500">Hospital CRM</span> for Every Healthcare Provider
                                </h2>
                                <p className="text-xl theme-text-secondary">
                                    Specialized CRM solutions tailored for different healthcare facilities and departments
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {crmCategories.map((category, idx) => (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setHoveredCategory(idx)}
                                        onMouseLeave={() => setHoveredCategory(null)}
                                        className={`glass-tile rounded-2xl p-3 lg:p-6 cursor-pointer transform-3d transition-all duration-500 ${hoveredCategory === idx ? '' : ''
                                            }`}
                                    >
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 micro-bounce`}>
                                            <category.icon className="text-white" size={28} />
                                        </div>
                                        <h3 className="text-xl font-bold theme-text-primary mb-3">{category.title}</h3>
                                        <p className="theme-text-secondary text-sm mb-4">{category.description}</p>
                                        <ul className="space-y-2">
                                            {category.features.map((feat, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm theme-text-secondary">
                                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4️⃣ Problem-Solution Section */}
                    <section className="relative py-10 lg:py-16 overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center  mx-auto mb-16">

                                <h2 className="text-3xl md:text-4xl   font-bold theme-text-primary mb-4">
                                    Transform Healthcare <span className="text-teal-500">Operations</span>
                                </h2>
                                <p className="text-xl theme-text-secondary">
                                    Common hospital management problems solved with intelligent automation
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6  mx-auto">
                                {problems.map((prob, idx) => (
                                    <div
                                        key={idx}
                                        className="glass-tile rounded-2xl p-3 lg:p-6 float-slow-3d"
                                        style={{ animationDelay: `${idx * 200}ms` }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="text-white" size={24} />
                                            </div>
                                            <div>
                                                <p className="theme-text-primary font-semibold text-lg">{prob.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 5️⃣ Implementation Process */}
                    <section className="relative py-10 lg:py-16 overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center  mx-auto mb-16">

                                <h2 className="text-3xl md:text-4xl   font-bold theme-text-primary mb-4">
                                    Our <span className="text-teal-500">CRM Implementation</span> Process
                                </h2>
                                <p className="text-xl theme-text-secondary">
                                    Seamless onboarding with expert guidance every step of the way
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {processSteps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="glass-tile rounded-2xl p-3  float-3d text-center"
                                        style={{ animationDelay: `${idx * 200}ms` }}
                                    >
                                        <div className="text-6xl font-black text-teal-500/20 mb-4">{step.number}</div>
                                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 micro-bounce">
                                            <step.icon className="text-white" size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold theme-text-primary mb-3">{step.title}</h3>
                                        <p className="theme-text-secondary text-sm">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 6️⃣ Why Choose Section */}
                    <section className="relative py-10 lg:py-16 overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center  mx-auto mb-16">
                                {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-hero neon-edge mb-4">
                <Award className="w-4 h-4 text-teal-500" />
                <span className="text-sm font-semibold theme-text-primary">Benefits</span>
              </div> */}
                                <h2 className="text-3xl md:text-4xl   font-bold theme-text-primary mb-4">
                                    Why Choose <span className="text-teal-500">Our Hospital CRM?</span>
                                </h2>
                                <p className="text-xl theme-text-secondary">
                                    Proven results that transform healthcare operations and patient experience
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {benefits.map((benefit, idx) => (
                                    <div
                                        key={idx}
                                        className="glass-tile rounded-2xl p-3 lg:p-6 float-reverse-3d"
                                        style={{ animationDelay: `${idx * 150}ms` }}
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4 micro-bounce">
                                            <benefit.icon className="text-white" size={28} />
                                        </div>
                                        <h3 className="text-xl font-bold theme-text-primary mb-2">{benefit.title}</h3>
                                        <p className="theme-text-secondary text-sm">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>




                    {/* 9️⃣ CTA Section */}
                    <section className="py-10 sm:py-10 lg:py-15 theme-bg-secondary relative overflow-hidden">
                        <CircleSquareBgAnimation theme={theme} />

                        <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
                            <div className="mx-auto text-center max-w-6xl">
                                <div className="rounded-3xl p-3 sm:p-4 py-4 sm:py-8 lg:py-12 lg:p-4 theme-shadow-primary relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text-primary mb-6">
                                            Ready to Transform Your <span style={{ color: '#14b8a6' }}>Healthcare Operations?</span>
                                        </h2>

                                        <p className="text-lg sm:text-xl theme-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                                            Join 200+ healthcare providers who increased patient satisfaction by 40%. Get started with a free demo today!
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link
                                                to="/contacts-us"
                                                className="inline-flex items-center justify-center px-4 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:scale-102 shadow-lg"
                                                style={{ backgroundColor: '#2d65bc' }}
                                            >
                                                Request a Demo
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

export default HospitalCRM;

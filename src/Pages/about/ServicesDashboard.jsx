import { useState, useEffect, useRef } from 'react';
import {
  LayoutDashboard, Home, Heart, Zap, Calendar, MoreHorizontal,
  Users, DollarSign, FileText, UserCheck, Shield, Mail, RefreshCcw,
  Target, TrendingUp, Trophy, Headset, Phone, Lock, UserCog, Database, Activity
} from 'lucide-react';

/* ---------------- TAB CONFIG ---------------- */

const VISIBLE_TABS = [
  { key: 'overview', icon: LayoutDashboard, label: 'Overview' },
  { key: 'realestate', icon: Home, label: 'Real Estate' },
  { key: 'hospital', icon: Heart, label: 'Hospital' },
  { key: 'nurturing', icon: Zap, label: 'Lead Nurturing' },
  { key: 'tasks', icon: Calendar, label: 'Tasks' },
];

/* ---------------- BASE THEME CARD ---------------- */

const ThemeCard = ({ children, className = '' }) => (
  <div className={`theme-card rounded-2xl p-5 theme-transition ${className}`}>
    {children}
  </div>
);

/* ---------------- PROPERTY CARD ---------------- */

const PropertyCard = ({ icon: Icon, title, badge, badgeColor, progress, barColor }) => (
  <ThemeCard>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-xl theme-bg-tertiary flex items-center justify-center">
        <Icon size={20} className="theme-accent-primary" />
      </div>

      <div className="flex-1">
        <p className="text-sm font-bold theme-text-primary">{title}</p>
        <span className={`text-[10px] px-2 py-1 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      </div>
    </div>

    <div className="flex justify-between text-xs mb-2 theme-text-secondary">
      <span>Progress</span>
      <span className="font-bold">{progress}%</span>
    </div>

    <div className="w-full h-2 rounded-full theme-bg-tertiary overflow-hidden">
      <div className={`${barColor} h-full rounded-full`} style={{ width: `${progress}%` }} />
    </div>
  </ThemeCard>
);

/* ---------------- SIMPLE GRID ---------------- */

const SimpleGrid = ({ items }) => (
  <div className="grid grid-cols-2 gap-4">
    {items.map((item, i) => (
      <ThemeCard key={i} className="cursor-pointer hover:-translate-y-1">
        <div className={`w-12 h-12 rounded-xl ${item.bgGradient} flex items-center justify-center mb-3`}>
          <item.icon size={20} className={item.iconColor} />
        </div>
        <p className="text-sm font-bold theme-text-primary">{item.label}</p>
        <p className="text-xs theme-text-muted">Manage & Optimize →</p>
      </ThemeCard>
    ))}
  </div>
);

/* ---------------- VIEWS ---------------- */

const OverviewView = () => (
  <div className="space-y-5">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-bold theme-text-primary">Specialized Features</h2>
      <button className="text-xs theme-accent-primary font-semibold">View Details</button>
    </div>

    <div className="grid grid-cols-3 gap-4">
      <ThemeCard className="text-center">
        <Home size={20} className="mx-auto theme-accent-primary mb-2" />
        <p className="text-xs theme-text-secondary">Real Estate CRM</p>
        <p className="text-sm font-bold theme-accent-primary">Focus</p>
      </ThemeCard>

      <ThemeCard className="text-center">
        <Heart size={20} className="mx-auto text-purple-500 mb-2" />
        <p className="text-xs theme-text-secondary">Hospital CRM</p>
        <p className="text-sm font-bold text-purple-500">Focus</p>
      </ThemeCard>

      <ThemeCard className="text-center">
        <Target size={20} className="mx-auto text-green-500 mb-2" />
        <p className="text-xs theme-text-secondary">Lead Flow CRM</p>
        <p className="text-sm font-bold text-green-500">Managed</p>
      </ThemeCard>
    </div>
  </div>
);

const PropertyView = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <PropertyCard icon={Home} title="Listing Status" badge="Active (52)" badgeColor="bg-blue-100 text-blue-700" progress={85} barColor="bg-blue-500" />
    <PropertyCard icon={Users} title="Client Tracking" badge="New Leads (12)" badgeColor="bg-purple-100 text-purple-700" progress={100} barColor="bg-purple-500" />
    <PropertyCard icon={DollarSign} title="Commission Reports" badge="Pending" badgeColor="bg-green-100 text-green-700" progress={60} barColor="bg-green-500" />
    <PropertyCard icon={FileText} title="Document Storage" badge="Secured" badgeColor="bg-orange-100 text-orange-700" progress={95} barColor="bg-orange-500" />
  </div>
);

const HospitalView = () => (
  <SimpleGrid items={[
    { icon: UserCheck, label: 'Patient Check-in', iconColor: 'text-pink-600', bgGradient: 'from-pink-50 to-pink-100' },
    { icon: Calendar, label: 'Appointments', iconColor: 'text-pink-600', bgGradient: 'from-pink-50 to-pink-100' },
    { icon: DollarSign, label: 'Billing', iconColor: 'text-pink-600', bgGradient: 'from-pink-50 to-pink-100' },
    { icon: Shield, label: 'Insurance', iconColor: 'text-pink-600', bgGradient: 'from-pink-50 to-pink-100' },
  ]} />
);

const LeadNurturingView = () => (
  <SimpleGrid items={[
    { icon: Mail, label: 'Email Campaigns', iconColor: 'text-blue-600', bgGradient: 'from-blue-50 to-blue-100' },
    { icon: Zap, label: 'Automation', iconColor: 'text-blue-600', bgGradient: 'from-blue-50 to-blue-100' },
    { icon: RefreshCcw, label: 'Follow-ups', iconColor: 'text-blue-600', bgGradient: 'from-blue-50 to-blue-100' },
    { icon: Target, label: 'Lead Scoring', iconColor: 'text-blue-600', bgGradient: 'from-blue-50 to-blue-100' },
  ]} />
);

const CalendarView = () => (
  <SimpleGrid items={[
    { icon: Home, label: 'Property Tours', iconColor: 'text-indigo-600', bgGradient: 'from-indigo-50 to-indigo-100' },
    { icon: Phone, label: 'Call Schedule', iconColor: 'text-indigo-600', bgGradient: 'from-indigo-50 to-indigo-100' },
    { icon: Heart, label: 'Follow-ups', iconColor: 'text-indigo-600', bgGradient: 'from-indigo-50 to-indigo-100' },
    { icon: Users, label: 'Team Meetings', iconColor: 'text-indigo-600', bgGradient: 'from-indigo-50 to-indigo-100' },
  ]} />
);

/* ---------------- SIDEBAR BUTTON ---------------- */

const SidebarBtn = ({ icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`p-3 rounded-2xl transition-all
      ${active
        ? 'theme-gradient-accent text-white scale-110'
        : 'theme-text-muted hover:theme-bg-tertiary'
      }
    `}
  >
    <Icon size={20} />
  </button>
);

/* ---------------- MAIN DASHBOARD ---------------- */

export default function ServicesDashboard() {
  const autoRotateRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = VISIBLE_TABS[activeIndex].key;

  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      setActiveIndex(p => (p + 1) % VISIBLE_TABS.length);
    }, 3500);
    return () => clearInterval(autoRotateRef.current);
  }, []);

  return (
    <div className="w-full max-w-[700px] h-[500px] rounded-3xl overflow-hidden theme-bg-primary theme-border-primary border shadow-2xl">
      
      {/* HEADER */}
      <div className="h-16 px-6 flex items-center border-b theme-bg-secondary theme-border-primary">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
          <img
            src="https://ik.imagekit.io/y7b5pqyxj/anquest__2_-removebg-preview.png"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* BODY */}
      <div className="flex h-full">
        
        {/* SIDEBAR */}
        <div className="w-[80px] flex flex-col items-center gap-2 py-6 border-r theme-bg-secondary theme-border-primary">
          {VISIBLE_TABS.map((t, i) => (
            <SidebarBtn
              key={t.key}
              icon={t.icon}
              active={activeTab === t.key}
              onClick={() => setActiveIndex(i)}
            />
          ))}
          <div className="mt-auto theme-text-muted">
            <MoreHorizontal />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-6 overflow-y-auto theme-section">
          <h2 className="text-lg font-bold mb-4 theme-text-primary">
            {VISIBLE_TABS.find(t => t.key === activeTab)?.label}
          </h2>

          {activeTab === 'overview' && <OverviewView />}
          {activeTab === 'realestate' && <PropertyView />}
          {activeTab === 'hospital' && <HospitalView />}
          {activeTab === 'nurturing' && <LeadNurturingView />}
          {activeTab === 'tasks' && <CalendarView />}
        </div>
      </div>
    </div>
  );
}

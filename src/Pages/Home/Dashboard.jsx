import { useState, useEffect, useRef } from 'react';
import {
    Bell, LayoutDashboard, Home, Heart, Zap, Calendar, MoreHorizontal,
    Users, DollarSign, FileText, UserCheck, Shield, Mail, RefreshCcw,
    Target, TrendingUp, Trophy, Headset, Phone, Lock, UserCog, Database, Activity
} from 'lucide-react';

const VISIBLE_TABS = [
    { key: 'overview', icon: LayoutDashboard, label: 'Dashboard' },
    { key: 'realestate', icon: Home, label: 'Lead Management' },
    { key: 'hospital', icon: Heart, label: 'Customer 360°' },
    { key: 'nurturing', icon: Zap, label: 'Automation Engine' },
    { key: 'tasks', icon: Calendar, label: 'Activity Planner' },
];

const PropertyCard = ({ icon: Icon, title, badge, badgeColor, progress, barColor }) => (
  <div className="theme-card rounded-2xl p-5 theme-transition">
    
    {/* Header */}
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-xl theme-bg-tertiary flex items-center justify-center">
        <Icon size={20} className="theme-accent-primary" />
      </div>

      <div>
        <p className="text-sm font-bold theme-text-primary">
          {title}
        </p>
        <span className={`text-[10px] px-2 py-1 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      </div>
    </div>

    {/* Progress text */}
    <div className="flex justify-between text-xs mb-2 theme-text-secondary">
      <span>Completion</span>
      <span className="font-bold">{progress}%</span>
    </div>

    {/* Progress bar */}
    <div className="h-2 theme-bg-tertiary rounded-full overflow-hidden">
      <div
        className={`${barColor} h-full rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>

  </div>
);


const SimpleGrid = ({ items }) => (
    <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
            <div key={i} className="p-5 rounded-2xl theme-bg-tertiary  shadow-sm hover:shadow-lg">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center mb-3`}>
                    <item.icon size={20} className={item.iconColor} />
                </div>
                <p className="text-sm font-bold">{item.label}</p>
                <p className="text-xs text-gray-500">Manage & Optimize →</p>
            </div>
        ))}
    </div>
);

const OverviewView = () => (
    <div className="space-y-5">
        <h2 className="text-lg font-bold">Marketing Performance Snapshot</h2>

        <div className="grid grid-cols-3 gap-4">
            <div className="theme-bg-tertiary p-4 rounded-xl text-center ">
                <Target className="mx-auto text-blue-600" />
                <p className="text-xs mt-2">Lead Generation</p>
                <p className="font-bold text-blue-600">Optimized</p>
            </div>
            <div className="theme-bg-tertiary p-4 rounded-xl text-center ">
                <TrendingUp className="mx-auto text-green-600" />
                <p className="text-xs mt-2">Growth Rate</p>
                <p className="font-bold text-green-600">Increasing</p>
            </div>
            <div className="theme-bg-tertiary p-4 rounded-xl text-center ">
                <Shield className="mx-auto text-purple-600" />
                <p className="text-xs mt-2">Brand Trust</p>
                <p className="font-bold text-purple-600">Strong</p>
            </div>
        </div>
    </div>
);

const PropertyView = () => (
    <div className="grid grid-cols-2 gap-4">
        <PropertyCard icon={Target} title="SEO Ranking" badge="Top 10" badgeColor="bg-green-100 text-green-700" progress={80} barColor="bg-green-500" />
        <PropertyCard icon={DollarSign} title="Ad Spend ROI" badge="High" badgeColor="bg-blue-100 text-blue-700" progress={70} barColor="bg-blue-500" />
        <PropertyCard icon={Users} title="Website Traffic" badge="Growing" badgeColor="bg-purple-100 text-purple-700" progress={90} barColor="bg-purple-500" />
        <PropertyCard icon={FileText} title="Landing Pages" badge="Live" badgeColor="bg-orange-100 text-orange-700" progress={95} barColor="bg-orange-500" />
    </div>
);

const HospitalView = () => (
    <SimpleGrid items={[
        { icon: Heart, label: 'Instagram Growth', iconColor: 'text-pink-600', bgGradient: 'from-pink-50 to-pink-100' },
        { icon: Users, label: 'Audience Engagement', iconColor: 'text-pink-600', bgGradient: 'from-pink-50 to-pink-100' },
        { icon: Mail, label: 'DM Leads', iconColor: 'text-pink-600', bgGradient: 'from-pink-50 to-pink-100' },
        { icon: Trophy, label: 'Brand Reach', iconColor: 'text-pink-600', bgGradient: 'from-pink-50 to-pink-100' },
    ]} />
);

const LeadNurturingView = () => (
    <SimpleGrid items={[
        { icon: Mail, label: 'Email Funnels', iconColor: 'text-blue-600', bgGradient: 'from-blue-50 to-blue-100' },
        { icon: Zap, label: 'Auto Follow-ups', iconColor: 'text-blue-600', bgGradient: 'from-blue-50 to-blue-100' },
        { icon: RefreshCcw, label: 'Retargeting', iconColor: 'text-blue-600', bgGradient: 'from-blue-50 to-blue-100' },
        { icon: Target, label: 'Lead Scoring', iconColor: 'text-blue-600', bgGradient: 'from-blue-50 to-blue-100' },
    ]} />
);


const CalendarView = () => (
    <SimpleGrid items={[
        { icon: Calendar, label: 'Campaign Schedule', iconColor: 'text-indigo-600', bgGradient: 'from-indigo-50 to-indigo-100' },
        { icon: Phone, label: 'Client Calls', iconColor: 'text-indigo-600', bgGradient: 'from-indigo-50 to-indigo-100' },
        { icon: Users, label: 'Team Sync', iconColor: 'text-indigo-600', bgGradient: 'from-indigo-50 to-indigo-100' },
        { icon: Activity, label: 'Daily Tasks', iconColor: 'text-indigo-600', bgGradient: 'from-indigo-50 to-indigo-100' },
    ]} />
);

export default function Dashboard() {
  const autoRotateRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = VISIBLE_TABS[activeIndex].key;

  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % VISIBLE_TABS.length);
    }, 3500);
    return () => clearInterval(autoRotateRef.current);
  }, []);

  return (
    <div
      className="
        w-full max-w-[700px] h-[500px]
        rounded-3xl overflow-hidden
        theme-bg-primary theme-border-primary
        border-2 shadow-2xl theme-transition
      "
    >
      {/* TOP BAR */}
      <div
        className="
          h-16 px-6 flex items-center justify-between
          theme-bg-secondary theme-border-primary
          border-b backdrop-blur-sm
        "
      >
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white ">
          <img
            src="https://ik.imagekit.io/y7b5pqyxj/anquest__2_-removebg-preview.png"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* MAIN */}
      <div className="flex h-full">
        {/* SIDEBAR */}
        <div
          className="
            w-[80px] flex flex-col items-center gap-3 py-6
            theme-bg-secondary theme-border-primary
            border-r
          "
        >
          {VISIBLE_TABS.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setActiveIndex(i)}
              className={`
                p-3 rounded-xl transition-all
                ${
                  activeTab === t.key
                    ? 'theme-gradient-accent text-white'
                    : 'theme-text-muted hover:theme-bg-tertiary'
                }
              `}
            >
              <t.icon size={20} />
            </button>
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

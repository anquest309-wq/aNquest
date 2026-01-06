import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Bell, LayoutDashboard, Home, Heart, Zap, Calendar, MoreHorizontal,
  Users, DollarSign, FileText, UserCheck, Shield, Mail, RefreshCcw,
  Target, TrendingUp, Trophy, Headset, Phone, Lock, UserCog, Database, Activity
} from 'lucide-react';

const TABS = ['overview', 'realestate', 'hospital', 'nurturing', 'reporting', 'tasks', 'security'];


const VISIBLE_TABS = [
  { key: 'overview', icon: LayoutDashboard, label: 'Overview' },
  { key: 'realestate', icon: Home, label: 'Real Estate' },
  { key: 'hospital', icon: Heart, label: 'Hospital' },
  { key: 'nurturing', icon: Zap, label: 'Lead Nurturing' },
  { key: 'tasks', icon: Calendar, label: 'Tasks' },
];

const PropertyCard = ({ icon: Icon, title, badge, badgeColor, progress, barColor }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
        <Icon size={20} className="text-blue-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-gray-800">{title}</p>
        <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${badgeColor}`}>{badge}</span>
      </div>
    </div>
    <div className="flex justify-between text-xs text-gray-600 mb-2">
      <span className="font-medium">Progress</span>
      <span className="font-bold text-gray-800">{progress}%</span>
    </div>
    <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden shadow-inner">
      <div className={`h-full ${barColor} rounded-full transition-all duration-500`} style={{ width: `${progress}%` }} />
    </div>
  </div>
);

const SimpleGrid = ({ items }) => (
  <div className="grid grid-cols-2 gap-4">
    {items.map((item, i) => (
      <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
          <item.icon size={20} className={item.iconColor} />
        </div>
        <p className="text-sm font-bold text-gray-800">{item.label}</p>
        <p className="text-xs text-gray-500 mt-1">View details →</p>
      </div>
    ))}
  </div>
);

const OverviewView = () => (
  <div className="space-y-5">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-gray-800">Specialized Features</h2>
      <button className="text-xs text-blue-600 font-semibold hover:text-blue-700">View Details</button>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 text-center">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Home size={20} className="text-blue-600" />
        </div>
        <p className="text-xs text-gray-600 mb-1">Real Estate CRM</p>
        <p className="text-sm font-bold text-blue-600">Focus</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 text-center">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Heart size={20} className="text-purple-600" />
        </div>
        <p className="text-xs text-gray-600 mb-1">Hospital CRM</p>
        <p className="text-sm font-bold text-purple-600">Focus</p>
      </div>
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Target size={20} className="text-green-600" />
        </div>
        <p className="text-xs text-gray-600 mb-1">Lead Flow CRM</p>
        <p className="text-sm font-bold text-green-600">Managed</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 border border-blue-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <Shield size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-blue-600 font-semibold">Secure</p>
            <p className="text-sm font-bold text-gray-800">Built-in</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">Data Security</p>
      </div>
      <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-4 border border-cyan-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
            <Zap size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-cyan-600 font-semibold">Efficient</p>
            <p className="text-sm font-bold text-gray-800">Included</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">Automation</p>
      </div>
      <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-4 border border-green-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <Calendar size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-green-600 font-semibold">Fast</p>
            <p className="text-sm font-bold text-gray-800">Quick</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">Setup Time</p>
      </div>
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 border border-orange-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <TrendingUp size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-orange-600 font-semibold">Insight</p>
            <p className="text-sm font-bold text-gray-800">Custom</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">Reporting</p>
      </div>
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

const ReportingView = () => (
  <SimpleGrid items={[
    { icon: TrendingUp, label: 'Analytics', iconColor: 'text-green-600', bgGradient: 'from-green-50 to-green-100' },
    { icon: Heart, label: 'Performance', iconColor: 'text-green-600', bgGradient: 'from-green-50 to-green-100' },
    { icon: Trophy, label: 'Achievements', iconColor: 'text-green-600', bgGradient: 'from-green-50 to-green-100' },
    { icon: Headset, label: 'Support Stats', iconColor: 'text-green-600', bgGradient: 'from-green-50 to-green-100' },
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

const DataSecurityView = () => (
  <SimpleGrid items={[
    { icon: Lock, label: 'Encryption', iconColor: 'text-purple-600', bgGradient: 'from-purple-50 to-purple-100' },
    { icon: UserCog, label: 'Access Control', iconColor: 'text-purple-600', bgGradient: 'from-purple-50 to-purple-100' },
    { icon: Database, label: 'Data Backup', iconColor: 'text-purple-600', bgGradient: 'from-purple-50 to-purple-100' },
    { icon: Activity, label: 'Monitoring', iconColor: 'text-purple-600', bgGradient: 'from-purple-50 to-purple-100' },
  ]} />
);

const Sidebar = ({ icon: Icon, active, onClick, tooltip }) => (
  <button onClick={onClick} className={`relative p-3 rounded-2xl transition-all duration-300 group ${active ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 scale-110' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600 hover:scale-105'}`}>
    <Icon size={20} />
    {tooltip && <span className="absolute left-full ml-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">{tooltip}</span>}
  </button>
);

export default function ServicesDashboard() {
  const autoRotateRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

const activeTab = VISIBLE_TABS[activeIndex].key;


  
 useEffect(() => {
  autoRotateRef.current = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % VISIBLE_TABS.length);
  }, 3500);

  return () => clearInterval(autoRotateRef.current);
}, []);



const handleTabClick = (index) => {
  // stop old auto rotation
  if (autoRotateRef.current) clearInterval(autoRotateRef.current);

  // change tab
  setActiveIndex(index);

  // restart auto rotation
  autoRotateRef.current = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % VISIBLE_TABS.length);
  }, 3500);
};



  
  return (
    <div className="w-full max-w-[700px] h-[500px] rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl border border-gray-200 overflow-hidden">
      <div className="h-16 px-6 flex items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Anquest</span>
        <button className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200 relative">
          <Bell size={18} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      </div>
      <div className="flex h-full">
        <div className="w-[80px] flex flex-col items-center gap-2 py-6 border-r border-gray-200 bg-white/50 backdrop-blur-sm">
          <Sidebar icon={LayoutDashboard} active={activeTab === 'overview'} onClick={() => handleTabClick(0)} tooltip="Overview" />
          <Sidebar icon={Home} active={activeTab === 'realestate'} onClick={() => handleTabClick(1)} tooltip="Real Estate" />
          <Sidebar icon={Heart} active={activeTab === 'hospital'} onClick={() => handleTabClick(2)} tooltip="Hospital" />
          <Sidebar icon={Zap} active={activeTab === 'nurturing'} onClick={() => handleTabClick(3)} tooltip="Lead Nurturing" />
          <Sidebar icon={Calendar} active={activeTab === 'tasks'} onClick={() => handleTabClick(4)} tooltip="Tasks" />
          <div className="mt-auto"><Sidebar icon={MoreHorizontal} tooltip="More" /></div>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && <OverviewView />}
          {activeTab === 'realestate' && <PropertyView />}
          {activeTab === 'hospital' && <HospitalView />}
          {activeTab === 'nurturing' && <LeadNurturingView />}
          {activeTab === 'reporting' && <ReportingView />}
          {activeTab === 'tasks' && <CalendarView />}
          {activeTab === 'security' && <DataSecurityView />}
        </div>
        
      </div>
    </div>
  );
}
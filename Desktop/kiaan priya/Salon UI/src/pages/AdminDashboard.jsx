import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { DollarSign, Users, ShoppingBag, TrendingUp, ArrowUpRight, ArrowDownRight, Calendar, Star, Zap, Award, MapPin } from 'lucide-react';
import { REVENUE_DATA, SERVICES_DATA } from '../data/dummyData';

const StatCard = ({ title, value, trend, icon: Icon, color, delay = 0 }) => {
  const isPositive = trend.startsWith('+');
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-5">
        <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className={`flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-full ${
          isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
        }`}>
          {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
          {trend}
        </span>
      </div>
      <p className="text-charcoal/50 text-xs font-bold uppercase tracking-widest mb-1">{title}</p>
      <p className="text-3xl font-black text-charcoal">{value}</p>
    </motion.div>
  );
};

const AdminDashboard = () => {
  const COLORS = ['#6B21A8', '#8B5CF6', '#1A1A1A', '#E9D5FF'];

  const BRANCH_DATA = {
    'All Branches': [
      { name: 'Downtown', revenue: 15000, profit: 8000 },
      { name: 'Uptown', revenue: 12000, profit: 6500 },
      { name: 'Westside', revenue: 9500, profit: 4200 },
    ],
    'Downtown Only': [
      { name: 'Hair Dept', revenue: 8000, profit: 4500 },
      { name: 'Spa Dept', revenue: 7000, profit: 3500 },
    ],
    'Uptown Only': [
      { name: 'Hair Dept', revenue: 7000, profit: 4000 },
      { name: 'Spa Dept', revenue: 5000, profit: 2500 },
    ]
  };

  const [activeBranch, setActiveBranch] = useState('All Branches');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleDownload = () => {
    alert('Simulating download: Admin_Report_2026.pdf has been downloaded.');
  };

  const topStaff = [
    { name: 'Alice Smith', role: 'Senior Stylist', revenue: '$4,200', rating: '4.9' },
    { name: 'Bob Wilson', role: 'Colorist', revenue: '$3,800', rating: '4.8' },
    { name: 'Charlie Brown', role: 'Therapist', revenue: '$3,100', rating: '4.9' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Analytics Overview</h1>
          <p className="text-charcoal/50 mt-0.5">Welcome back, Super Admin. Here's your business at a glance.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <select 
            value={activeBranch}
            onChange={(e) => setActiveBranch(e.target.value)}
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-charcoal outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold"
          >
            {Object.keys(BRANCH_DATA).map(branch => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
          <button 
            onClick={() => setIsReportModalOpen(true)}
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-charcoal hover:border-rose-gold/30 hover:bg-rose-gold/5 transition-colors"
          >
            View Report
          </button>
          <button 
            onClick={handleDownload}
            className="px-4 py-2.5 bg-rose-gold text-white rounded-xl text-sm font-bold hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/25"
          >
            Download Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Total Revenue" value="$45,231" trend="+12.5%" icon={DollarSign} color="bg-rose-gold" delay={0} />
        <StatCard title="Total Expenses" value="$18,500" trend="-4.2%" icon={TrendingUp} color="bg-red-500" delay={0.1} />
        <StatCard title="Net Profit" value="$26,731" trend="+18.4%" icon={DollarSign} color="bg-emerald-500" delay={0.2} />
        <StatCard title="Total Clients" value="2,405" trend="+3.2%" icon={Users} color="bg-charcoal" delay={0.3} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Branch Comparison Chart - spans 2 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-black text-charcoal flex items-center gap-2"><MapPin className="w-5 h-5 text-rose-gold" /> Branch Comparison</h3>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-rose-gold inline-block" /> Revenue</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-charcoal inline-block" /> Profit</span>
            </div>
          </div>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BRANCH_DATA[activeBranch]} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#aaa', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#aaa', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="revenue" fill="#6B21A8" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="profit" fill="#1A1A1A" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Top Services Pie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"
        >
          <h3 className="text-lg font-black text-charcoal mb-4 flex items-center gap-2"><Star className="w-5 h-5 text-rose-gold" /> Top Services</h3>
          <div className="h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={SERVICES_DATA} innerRadius={45} outerRadius={65} paddingAngle={5} dataKey="value">
                  {SERVICES_DATA.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2.5 mt-2">
            {SERVICES_DATA.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: COLORS[index % COLORS.length]}} />
                  <span className="text-xs font-medium text-charcoal/60">{item.name}</span>
                </div>
                <span className="text-xs font-bold text-charcoal">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Staff Ranking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"
      >
        <h3 className="text-lg font-black text-charcoal mb-5 flex items-center gap-2"><Award className="w-5 h-5 text-rose-gold" /> Top Performing Staff</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topStaff.map((staff, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-rose-gold/30 transition-colors group">
              <div className="w-12 h-12 bg-rose-gold/10 text-rose-gold font-black rounded-full flex items-center justify-center shrink-0">
                #{i + 1}
              </div>
              <div className="flex-1">
                <p className="font-bold text-charcoal">{staff.name}</p>
                <p className="text-xs text-charcoal/50">{staff.role}</p>
              </div>
              <div className="text-right">
                <p className="font-black text-rose-gold">{staff.revenue}</p>
                <p className="text-[10px] text-charcoal/40 font-bold">★ {staff.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <Modal isOpen={isReportModalOpen} onClose={() => setIsReportModalOpen(false)} title="Detailed Revenue Report">
        <div className="space-y-4">
          <p className="text-sm text-charcoal/70">Here is the detailed breakdown of the revenue for the selected period.</p>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3">
             <div className="flex justify-between font-bold text-sm text-charcoal">
               <span>Total Gross Revenue</span>
               <span>$45,231.00</span>
             </div>
             <div className="flex justify-between text-sm text-red-500 font-medium">
               <span>Total Refunds/Discounts</span>
               <span>-$1,240.00</span>
             </div>
             <div className="flex justify-between text-sm text-charcoal/60 font-medium">
               <span>Operational Expenses</span>
               <span>-$17,260.00</span>
             </div>
             <div className="border-t border-gray-200 pt-3 flex justify-between font-black text-lg text-rose-gold mt-2">
               <span>Net Profit</span>
               <span>$26,731.00</span>
             </div>
          </div>
          <button onClick={() => setIsReportModalOpen(false)} className="w-full py-3 bg-charcoal text-white rounded-xl font-bold mt-4 hover:bg-charcoal-light">
            Close Report
          </button>
        </div>
      </Modal>

    </div>
  );
};

export default AdminDashboard;

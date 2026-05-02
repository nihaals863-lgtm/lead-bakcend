import React, { useState } from 'react';
import { FileText, Download, Eye, TrendingUp, Users, Star, DollarSign, X, BarChart2, PieChart as PieIcon } from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

// ── DUMMY DATA ──
const revenueData = [
  { month: 'Jan', revenue: 85000, target: 80000 },
  { month: 'Feb', revenue: 92000, target: 85000 },
  { month: 'Mar', revenue: 110000, target: 95000 },
  { month: 'Apr', revenue: 98000, target: 100000 },
  { month: 'May', revenue: 125000, target: 110000 },
  { month: 'Jun', revenue: 138000, target: 120000 },
];

const staffPerformance = [
  { name: 'Alice Smith', services: 145, revenue: 72000, rating: 4.9 },
  { name: 'Bob Wilson', services: 128, revenue: 64000, rating: 4.8 },
  { name: 'Sneha Patel', services: 119, revenue: 59500, rating: 4.7 },
  { name: 'Rohan Kapoor', services: 103, revenue: 51500, rating: 4.6 },
  { name: 'Kavya Singh', services: 91, revenue: 45500, rating: 4.4 },
];

const serviceBreakdown = [
  { name: 'Hair Services', value: 38, color: '#7C3AED' },
  { name: 'Facials & Skin', value: 22, color: '#EC4899' },
  { name: 'Massage & Spa', value: 18, color: '#F59E0B' },
  { name: 'Nail Care', value: 12, color: '#10B981' },
  { name: 'Bridal Packages', value: 10, color: '#3B82F6' },
];

const customerData = [
  { month: 'Jan', new: 45, returning: 165 },
  { month: 'Feb', new: 62, returning: 188 },
  { month: 'Mar', new: 78, returning: 215 },
  { month: 'Apr', new: 55, returning: 200 },
  { month: 'May', new: 90, returning: 240 },
  { month: 'Jun', new: 105, returning: 275 },
];

const reportCards = [
  {
    id: 1, title: 'Financial Summary 2026', type: 'Financial', date: 'May 2026',
    icon: DollarSign, color: 'bg-purple-100 text-purple-600',
    summary: 'Total Revenue: ₹6.48L | Expenses: ₹3.2L | Net Profit: ₹3.28L | Margin: 50.6%',
    highlights: [
      { label: 'Total Revenue', value: '₹6,48,000' },
      { label: 'Total Expenses', value: '₹3,20,000' },
      { label: 'Net Profit', value: '₹3,28,000' },
      { label: 'Profit Margin', value: '50.6%' },
      { label: 'Best Month', value: 'June (₹1.38L)' },
      { label: 'Growth vs 2025', value: '+18.4%' },
    ]
  },
  {
    id: 2, title: 'Staff Performance Q2 2026', type: 'HR', date: 'Jun 2026',
    icon: Users, color: 'bg-blue-100 text-blue-600',
    summary: 'Top Performer: Alice Smith | Avg Rating: 4.68 | Total Services: 586',
    highlights: [
      { label: 'Total Services', value: '586' },
      { label: 'Top Performer', value: 'Alice Smith' },
      { label: 'Avg Rating', value: '4.68 ★' },
      { label: 'Attendance Rate', value: '94.2%' },
      { label: 'Revenue/Staff', value: '₹58,500' },
      { label: 'New Hires', value: '2 this quarter' },
    ]
  },
  {
    id: 3, title: 'Customer Insights Q2 2026', type: 'CRM', date: 'Jun 2026',
    icon: Star, color: 'bg-green-100 text-green-600',
    summary: 'New Customers: 435 | Returning: 1,283 | Avg Spend: ₹1,250/visit',
    highlights: [
      { label: 'New Customers', value: '435' },
      { label: 'Returning', value: '1,283' },
      { label: 'Retention Rate', value: '74.7%' },
      { label: 'Avg Spend/Visit', value: '₹1,250' },
      { label: 'Top Service', value: 'Hair Coloring' },
      { label: 'Avg Rating', value: '4.7 ★' },
    ]
  },
  {
    id: 4, title: 'Branch Comparison H1 2026', type: 'Operations', date: 'Jun 2026',
    icon: BarChart2, color: 'bg-orange-100 text-orange-600',
    summary: 'Best Branch: Downtown Studio (₹85K) | Weakest: Noida Elite (₹48K)',
    highlights: [
      { label: 'Best Branch', value: 'Downtown Studio' },
      { label: 'Top Revenue', value: '₹85,000' },
      { label: 'Weakest Branch', value: 'Noida Elite' },
      { label: 'Avg Branch Rev', value: '₹66,400' },
      { label: 'Active Branches', value: '5' },
      { label: 'Total Staff', value: '44 members' },
    ]
  },
];

// ── MODAL ──
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-black text-charcoal">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

// ── MAIN COMPONENT ──
export const AdminReports = () => {
  const [activeReport, setActiveReport] = useState(null);

  const handleDownload = (title) => {
    // Simulate file download
    const content = `RESPARK SALON - ${title}\n\nGenerated: ${new Date().toLocaleString()}\n\nThis is a simulated report export.\nIn production, this would generate a real PDF/Excel file.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const typeColors = { Financial: 'bg-purple-50 text-purple-600', HR: 'bg-blue-50 text-blue-600', CRM: 'bg-green-50 text-green-600', Operations: 'bg-orange-50 text-orange-600' };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-charcoal">Business Reports</h1>
        <p className="text-charcoal/50 text-sm">Analytics, trends, and downloadable reports for your salon business</p>
      </div>

      {/* ── REPORT CARDS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reportCards.map(rep => (
          <div key={rep.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${rep.color.split(' ')[0]} rounded-2xl flex items-center justify-center`}>
                  <rep.icon className={`w-6 h-6 ${rep.color.split(' ')[1]}`} />
                </div>
                <div>
                  <h3 className="font-black text-charcoal text-base leading-tight">{rep.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${typeColors[rep.type]}`}>{rep.type}</span>
                    <span className="text-[10px] text-charcoal/40 font-medium">{rep.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-charcoal/60 mb-5 leading-relaxed">{rep.summary}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveReport(rep)}
                className="flex-1 py-2.5 bg-gray-50 border border-gray-200 text-charcoal font-bold rounded-xl hover:bg-rose-gold/5 hover:border-rose-gold/30 hover:text-rose-gold flex justify-center items-center gap-2 text-sm transition-all"
              >
                <Eye className="w-4 h-4" /> View Report
              </button>
              <button
                onClick={() => handleDownload(rep.title)}
                className="flex-1 py-2.5 bg-rose-gold text-white font-bold rounded-xl hover:bg-purple-800 flex justify-center items-center gap-2 text-sm transition-all shadow-md shadow-rose-gold/20"
              >
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── CHARTS SECTION ── */}
      <div>
        <h2 className="text-lg font-black text-charcoal mb-4">📊 Analytics Overview</h2>

        {/* Revenue vs Target */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-black text-charcoal mb-1">Revenue vs Target</h3>
            <p className="text-xs text-charcoal/40 mb-4">Monthly revenue performance against set targets</p>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#aaa', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#aaa', fontSize: 11 }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} formatter={(v) => `₹${v.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="revenue" name="Actual Revenue" fill="#7C3AED" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="target" name="Target" fill="#E9D5FF" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Service Breakdown */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-black text-charcoal mb-1">Service Category Split</h3>
            <p className="text-xs text-charcoal/40 mb-4">Revenue contribution by service type</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="h-44 w-44 shrink-0 mx-auto sm:mx-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={serviceBreakdown} dataKey="value" cx="50%" cy="50%" outerRadius={70} innerRadius={40}>
                      {serviceBreakdown.map((e, i) => <Cell key={i} fill={e.color} />)}
                    </Pie>
                    <Tooltip formatter={(v) => `${v}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 flex-1">
                {serviceBreakdown.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      <span className="text-xs text-charcoal/60">{item.name}</span>
                    </div>
                    <span className="text-xs font-black text-charcoal">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Growth + Staff Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-black text-charcoal mb-1">Customer Growth</h3>
            <p className="text-xs text-charcoal/40 mb-4">New vs returning customers per month</p>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={customerData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#aaa', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#aaa', fontSize: 11 }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey="new" name="New Customers" stroke="#EC4899" strokeWidth={2.5} dot={{ fill: '#EC4899', r: 4 }} />
                  <Line type="monotone" dataKey="returning" name="Returning" stroke="#7C3AED" strokeWidth={2.5} dot={{ fill: '#7C3AED', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Staff Performance Table */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-black text-charcoal mb-1">Top Staff Performance</h3>
            <p className="text-xs text-charcoal/40 mb-4">Ranked by revenue generated</p>
            <div className="space-y-3">
              {staffPerformance.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${i === 0 ? 'bg-yellow-100 text-yellow-600' : i === 1 ? 'bg-gray-100 text-gray-600' : i === 2 ? 'bg-orange-100 text-orange-600' : 'bg-gray-50 text-gray-400'}`}>
                    {i + 1}
                  </span>
                  <img src={`https://i.pravatar.cc/40?u=${s.name}`} className="w-8 h-8 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-charcoal text-sm truncate">{s.name}</p>
                    <p className="text-[10px] text-charcoal/40">{s.services} services • {s.rating} ★</p>
                  </div>
                  <span className="font-black text-sm text-rose-gold shrink-0">₹{(s.revenue/1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── VIEW REPORT MODAL ── */}
      <Modal isOpen={!!activeReport} onClose={() => setActiveReport(null)} title={activeReport?.title || ''}>
        {activeReport && (
          <div className="space-y-4">
            <div className={`flex items-center gap-3 p-4 rounded-2xl ${activeReport.color.split(' ')[0]}`}>
              <activeReport.icon className={`w-6 h-6 ${activeReport.color.split(' ')[1]}`} />
              <div>
                <p className={`font-bold text-sm ${activeReport.color.split(' ')[1]}`}>{activeReport.type} Report</p>
                <p className="text-xs text-charcoal/50">{activeReport.date}</p>
              </div>
            </div>
            <p className="text-sm text-charcoal/60 leading-relaxed">{activeReport.summary}</p>
            <div className="grid grid-cols-2 gap-3">
              {activeReport.highlights.map((h, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-3">
                  <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">{h.label}</p>
                  <p className="font-black text-charcoal text-sm mt-0.5">{h.value}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleDownload(activeReport.title)}
              className="w-full py-3 bg-rose-gold text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-purple-800 transition-all"
            >
              <Download className="w-4 h-4" /> Download Report
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminReports;

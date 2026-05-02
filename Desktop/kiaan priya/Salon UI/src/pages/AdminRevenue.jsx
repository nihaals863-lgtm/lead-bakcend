import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, AlertTriangle, Download, Filter } from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell
} from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 12000, expenses: 7200, profit: 4800, loss: 0, clients: 210 },
  { month: 'Feb', revenue: 15000, expenses: 8100, profit: 6900, loss: 0, clients: 265 },
  { month: 'Mar', revenue: 18000, expenses: 9500, profit: 8500, loss: 0, clients: 310 },
  { month: 'Apr', revenue: 14000, expenses: 10200, profit: 3800, loss: 0, clients: 245 },
  { month: 'May', revenue: 22000, expenses: 11000, profit: 11000, loss: 0, clients: 390 },
  { month: 'Jun', revenue: 25000, expenses: 12500, profit: 12500, loss: 0, clients: 420 },
  { month: 'Jul', revenue: 19000, expenses: 20500, profit: 0, loss: 1500, clients: 330 },
  { month: 'Aug', revenue: 23000, expenses: 11800, profit: 11200, loss: 0, clients: 405 },
  { month: 'Sep', revenue: 17000, expenses: 10100, profit: 6900, loss: 0, clients: 290 },
  { month: 'Oct', revenue: 21000, expenses: 11300, profit: 9700, loss: 0, clients: 370 },
  { month: 'Nov', revenue: 26000, expenses: 13000, profit: 13000, loss: 0, clients: 450 },
  { month: 'Dec', revenue: 30000, expenses: 14500, profit: 15500, loss: 0, clients: 510 },
];

const expenseBreakdown = [
  { name: 'Staff Salaries', value: 45, color: '#7C3AED' },
  { name: 'Products & Inventory', value: 25, color: '#EC4899' },
  { name: 'Rent & Utilities', value: 18, color: '#F59E0B' },
  { name: 'Marketing', value: 8, color: '#10B981' },
  { name: 'Others', value: 4, color: '#6B7280' },
];

const StatCard = ({ label, value, sub, icon: Icon, color, trend }) => (
  <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
    <div className={`w-11 h-11 ${color} rounded-2xl flex items-center justify-center mb-3`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <p className="text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-2xl font-black text-charcoal">{value}</p>
    <p className={`text-xs font-bold mt-1 flex items-center gap-1 ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
      {Math.abs(trend)}% vs last period
    </p>
    {sub && <p className="text-xs text-charcoal/40 mt-0.5">{sub}</p>}
  </div>
);

export const AdminRevenue = () => {
  const [yearFilter, setYearFilter] = useState('2026');
  const [viewMode, setViewMode] = useState('monthly');

  const totalRevenue = monthlyData.reduce((s, m) => s + m.revenue, 0);
  const totalExpenses = monthlyData.reduce((s, m) => s + m.expenses, 0);
  const totalProfit = monthlyData.reduce((s, m) => s + m.profit, 0);
  const totalLoss = monthlyData.reduce((s, m) => s + m.loss, 0);
  const netProfit = totalProfit - totalLoss;
  const profitMargin = ((netProfit / totalRevenue) * 100).toFixed(1);

  const lossMonths = monthlyData.filter(m => m.loss > 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Revenue Analytics</h1>
          <p className="text-charcoal/50 text-sm">Full financial breakdown — revenue, expenses, profit & loss</p>
        </div>
        <div className="flex gap-2">
          <select value={yearFilter} onChange={e => setYearFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl font-bold outline-none text-sm">
            <option value="2026">2026</option>
            <option value="2025">2025</option>
          </select>
          <button onClick={() => alert('Report exported!')}
            className="flex items-center gap-2 px-4 py-2 bg-rose-gold text-white rounded-xl font-bold text-sm hover:bg-purple-800 transition-all">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Revenue" value={`$${(totalRevenue/1000).toFixed(0)}K`} trend={12.5} icon={DollarSign} color="bg-rose-gold" />
        <StatCard label="Total Expenses" value={`$${(totalExpenses/1000).toFixed(0)}K`} trend={-4.2} icon={TrendingDown} color="bg-red-500" />
        <StatCard label="Net Profit" value={`$${(netProfit/1000).toFixed(0)}K`} sub={`Margin: ${profitMargin}%`} trend={18.4} icon={TrendingUp} color="bg-green-500" />
        <StatCard label="Loss Months" value={lossMonths.length} sub={lossMonths.map(m => m.month).join(', ') || 'None'} trend={lossMonths.length === 0 ? 5 : -10} icon={AlertTriangle} color="bg-orange-500" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue vs Expense vs Profit Area Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-black text-charcoal">Revenue vs Expenses vs Profit</h3>
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
              {['monthly', 'quarterly'].map(m => (
                <button key={m} onClick={() => setViewMode(m)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all ${viewMode === m ? 'bg-white shadow text-rose-gold' : 'text-charcoal/50'}`}>
                  {m}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#aaa', fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#aaa', fontSize: 11 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                <Legend />
                <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#7C3AED" fill="url(#colorRev)" strokeWidth={2.5} />
                <Area type="monotone" dataKey="expenses" name="Expenses" stroke="#EF4444" fill="url(#colorExp)" strokeWidth={2.5} />
                <Area type="monotone" dataKey="profit" name="Profit" stroke="#10B981" fill="url(#colorProfit)" strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Breakdown Pie */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-black text-charcoal mb-4">Expense Breakdown</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdown} dataKey="value" cx="50%" cy="50%" outerRadius={65} innerRadius={35}>
                  {expenseBreakdown.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {expenseBreakdown.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-charcoal/60 font-medium">{item.name}</span>
                </div>
                <span className="text-xs font-black text-charcoal">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profit & Loss Bar Chart */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-black text-charcoal mb-4">Monthly Profit & Loss</h3>
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#aaa', fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#aaa', fontSize: 11 }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
              <Legend />
              <Bar dataKey="profit" name="Profit" fill="#10B981" radius={[6, 6, 0, 0]} />
              <Bar dataKey="loss" name="Loss" fill="#EF4444" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Monthly Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-black text-charcoal">Detailed Monthly Report</h3>
          <span className="text-xs text-charcoal/40 font-bold">{yearFilter} • All Months</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-charcoal/50 text-[11px] uppercase tracking-widest font-bold">
              <tr>
                <th className="px-5 py-3">Month</th>
                <th className="px-5 py-3">Revenue</th>
                <th className="px-5 py-3">Expenses</th>
                <th className="px-5 py-3">Profit</th>
                <th className="px-5 py-3">Loss</th>
                <th className="px-5 py-3">Clients</th>
                <th className="px-5 py-3">Margin</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {monthlyData.map((row, i) => {
                const net = row.profit - row.loss;
                const margin = ((net / row.revenue) * 100).toFixed(1);
                const isLoss = net < 0;
                return (
                  <tr key={i} className={`hover:bg-gray-50/50 transition-colors ${isLoss ? 'bg-red-50/30' : ''}`}>
                    <td className="px-5 py-3.5 font-bold text-charcoal">{row.month}</td>
                    <td className="px-5 py-3.5 font-bold text-charcoal">${row.revenue.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-red-500 font-bold">${row.expenses.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-green-600 font-bold">{row.profit > 0 ? `$${row.profit.toLocaleString()}` : '—'}</td>
                    <td className="px-5 py-3.5 text-red-600 font-bold">{row.loss > 0 ? `$${row.loss.toLocaleString()}` : '—'}</td>
                    <td className="px-5 py-3.5 font-medium text-charcoal/70">{row.clients}</td>
                    <td className="px-5 py-3.5">
                      <span className={`font-bold text-sm ${parseFloat(margin) >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                        {margin}%
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${isLoss ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                        {isLoss ? 'Loss' : 'Profit'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-gray-50 border-t-2 border-gray-100">
              <tr>
                <td className="px-5 py-4 font-black text-charcoal">TOTAL</td>
                <td className="px-5 py-4 font-black text-charcoal">${totalRevenue.toLocaleString()}</td>
                <td className="px-5 py-4 font-black text-red-500">${totalExpenses.toLocaleString()}</td>
                <td className="px-5 py-4 font-black text-green-600">${totalProfit.toLocaleString()}</td>
                <td className="px-5 py-4 font-black text-red-600">{totalLoss > 0 ? `$${totalLoss.toLocaleString()}` : '—'}</td>
                <td className="px-5 py-4 font-black text-charcoal">{monthlyData.reduce((s, m) => s + m.clients, 0)}</td>
                <td className="px-5 py-4 font-black text-green-600">{profitMargin}%</td>
                <td className="px-5 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-green-100 text-green-700">Overall Profit</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminRevenue;

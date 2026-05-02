import React, { useState } from 'react';
import { BarChart3, Briefcase, Users, Scissors, FileText, Settings, Plus, Trash2, Edit2, Download, Eye, Save, Search, MapPin, DollarSign, Phone, Star, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Modal from '../components/Modal';

// 1. REVENUE ANALYTICS
export const AdminRevenue = () => {
  const [filter, setFilter] = useState('2026');
  const data = [
    { month: 'Jan', revenue: 12000 }, { month: 'Feb', revenue: 15000 },
    { month: 'Mar', revenue: 18000 }, { month: 'Apr', revenue: 14000 },
    { month: 'May', revenue: 22000 }, { month: 'Jun', revenue: 25000 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Revenue Analytics</h1>
          <p className="text-charcoal/60">Detailed financial breakdown.</p>
        </div>
        <select value={filter} onChange={e => setFilter(e.target.value)} className="px-4 py-2 border rounded-xl font-bold outline-none border-gray-200">
          <option value="2026">Year 2026</option>
          <option value="2025">Year 2025</option>
        </select>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-[300px]">
        <h3 className="font-bold text-charcoal mb-4">Yearly Trend</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#aaa'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#aaa'}} />
            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
            <Area type="monotone" dataKey="revenue" stroke="#6B21A8" fill="#6B21A8" fillOpacity={0.1} strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-charcoal/60 text-xs uppercase font-bold">
            <tr><th className="px-6 py-4">Month</th><th className="px-6 py-4">Gross Revenue</th><th className="px-6 py-4">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-bold text-charcoal">{row.month}</td>
                <td className="px-6 py-4 font-bold text-rose-gold">${row.revenue}</td>
                <td className="px-6 py-4"><span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">Closed</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 2. BRANCH MANAGEMENT
export const AdminBranches = ({ branches, setBranches }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBranch, setNewBranch] = useState({ name: '', location: '' });

  const addBranch = (e) => {
    e.preventDefault();
    setBranches([...branches, { id: Date.now(), ...newBranch, revenue: '$0' }]);
    setIsModalOpen(false);
    setNewBranch({ name: '', location: '' });
  };

  const deleteBranch = (id) => {
    setBranches(branches.filter(b => b.id !== id));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Branch Management</h1>
          <p className="text-charcoal/60">Manage your physical locations.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-5 py-2.5 bg-rose-gold text-white rounded-xl font-bold hover:bg-purple-800 transition-all">
          <Plus className="w-4 h-4" /> Add Branch
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {branches.map(branch => (
          <div key={branch.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative group">
            <button onClick={() => deleteBranch(branch.id)} className="absolute top-4 right-4 p-2 text-red-500 bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-4 h-4" /></button>
            <div className="w-12 h-12 bg-rose-gold/10 text-rose-gold rounded-2xl flex items-center justify-center mb-4"><MapPin className="w-6 h-6" /></div>
            <h3 className="font-black text-xl text-charcoal">{branch.name}</h3>
            <p className="text-sm text-charcoal/60 mb-4">{branch.location}</p>
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-sm font-bold text-charcoal/50 uppercase tracking-widest">Revenue</span>
              <span className="font-black text-lg text-rose-gold">{branch.revenue}</span>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Branch">
        <form onSubmit={addBranch} className="space-y-4">
          <input type="text" placeholder="Branch Name" required value={newBranch.name} onChange={e => setNewBranch({...newBranch, name: e.target.value})} className="w-full border p-3 rounded-xl outline-none focus:border-rose-gold" />
          <input type="text" placeholder="Location/Address" required value={newBranch.location} onChange={e => setNewBranch({...newBranch, location: e.target.value})} className="w-full border p-3 rounded-xl outline-none focus:border-rose-gold" />
          <button type="submit" className="w-full py-3 bg-rose-gold text-white font-bold rounded-xl mt-2">Save Branch</button>
        </form>
      </Modal>
    </div>
  );
};

// 3. STAFF OVERVIEW
export const AdminStaff = ({ staffData, setStaffData }) => {
  const [filter, setFilter] = useState('');
  const [viewStaff, setViewStaff] = useState(null);
  const [editStaff, setEditStaff] = useState(null);
  const [editForm, setEditForm] = useState({});

  const filteredStaff = (staffData || []).filter(s => s.name.toLowerCase().includes(filter.toLowerCase()));

  const openEdit = (s) => {
    setEditStaff(s);
    setEditForm({ ...s });
  };

  const saveEdit = (e) => {
    e.preventDefault();
    if (setStaffData) setStaffData(staffData.map(s => s.id === editForm.id ? editForm : s));
    setEditStaff(null);
    alert('Staff details updated successfully!');
  };

  const deleteStaff = (id) => {
    if (window.confirm('Are you sure you want to remove this staff member?')) {
      if (setStaffData) setStaffData(staffData.filter(s => s.id !== id));
    }
  };

  const perfColor = (p) => {
    if (p === 'Excellent') return 'bg-green-100 text-green-700';
    if (p === 'Good') return 'bg-blue-100 text-blue-700';
    return 'bg-gray-100 text-gray-500';
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Staff Overview</h1>
          <p className="text-charcoal/50 text-sm">{filteredStaff.length} staff members</p>
        </div>
        <div className="relative w-full sm:w-auto">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          <input type="text" placeholder="Search staff..." value={filter} onChange={e => setFilter(e.target.value)} className="pl-9 pr-4 py-2 border rounded-xl outline-none focus:border-rose-gold text-sm w-full sm:w-60" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredStaff.map((s) => (
          <div key={s.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <img src={`https://i.pravatar.cc/150?u=${s.id}`} className="w-14 h-14 rounded-2xl object-cover border-2 border-gray-50 shadow" />
              <div className="min-w-0">
                <p className="font-black text-charcoal text-base truncate">{s.name}</p>
                <p className="text-xs text-charcoal/50 font-medium">{s.role}</p>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${perfColor(s.performance)}`}>{s.performance}</span>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm text-charcoal/70 mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-rose-gold shrink-0" />
                <span className="truncate">{s.phone || 'N/A'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-gold shrink-0" />
                <span className="truncate">{s.address || 'N/A'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span>Rating: <strong>{s.rating}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-green-500 shrink-0" />
                <span>Revenue: <strong className="text-rose-gold">{s.revenue}</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-3 border-t border-gray-100">
              <button onClick={() => setViewStaff(s)} className="flex-1 py-2 text-xs font-bold bg-gray-50 hover:bg-rose-gold/10 text-charcoal hover:text-rose-gold rounded-xl transition-all flex items-center justify-center gap-1">
                <Eye className="w-3.5 h-3.5" /> View
              </button>
              <button onClick={() => openEdit(s)} className="flex-1 py-2 text-xs font-bold bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl transition-all flex items-center justify-center gap-1">
                <Edit2 className="w-3.5 h-3.5" /> Edit
              </button>
              <button onClick={() => deleteStaff(s.id)} className="flex-1 py-2 text-xs font-bold bg-red-50 hover:bg-red-100 text-red-500 rounded-xl transition-all flex items-center justify-center gap-1">
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MODAL */}
      <Modal isOpen={!!viewStaff} onClose={() => setViewStaff(null)} title="Staff Profile">
        {viewStaff && (
          <div className="space-y-4">
            <div className="flex flex-col items-center text-center pb-4 border-b border-gray-100">
              <img src={`https://i.pravatar.cc/150?u=${viewStaff.id}`} className="w-24 h-24 rounded-2xl border-4 border-gray-50 shadow-md mb-3" />
              <h2 className="text-xl font-black text-charcoal">{viewStaff.name}</h2>
              <p className="text-charcoal/50">{viewStaff.role}</p>
              <span className={`mt-2 px-3 py-1 rounded-full text-xs font-bold ${perfColor(viewStaff.performance)}`}>{viewStaff.performance}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Phone', value: viewStaff.phone, icon: Phone },
                { label: 'Address', value: viewStaff.address, icon: MapPin },
                { label: 'Rating', value: viewStaff.rating + ' ★', icon: Star },
                { label: 'Revenue', value: viewStaff.revenue, icon: TrendingUp },
                { label: 'Status', value: viewStaff.status, icon: Users },
                { label: 'Check-in', value: viewStaff.checkIn, icon: BarChart3 },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-3">
                  <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-bold text-charcoal text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>

      {/* EDIT MODAL */}
      <Modal isOpen={!!editStaff} onClose={() => setEditStaff(null)} title="Edit Staff">
        {editStaff && (
          <form onSubmit={saveEdit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[['name','Full Name','text'],['role','Role','text'],['phone','Phone','tel'],['address','Address','text'],['rating','Rating (0-5)','number']].map(([key, label, type]) => (
                <div key={key}>
                  <label className="block text-xs font-bold text-charcoal/60 mb-1">{label}</label>
                  <input type={type} value={editForm[key] || ''} onChange={e => setEditForm({...editForm, [key]: e.target.value})} className="w-full border p-2.5 rounded-xl text-sm outline-none focus:border-rose-gold" />
                </div>
              ))}
            </div>
            <button type="submit" className="w-full py-3 bg-rose-gold text-white font-bold rounded-xl mt-2">Save Changes</button>
          </form>
        )}
      </Modal>
    </div>
  );
};



// 5. REPORTS
export const AdminReports = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleDownload = () => alert('Report downloaded successfully!');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-2xl font-black text-charcoal mb-8">Business Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['Financial Summary 2026', 'Staff Performance Q1'].map((rep, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-rose-gold/10 text-rose-gold rounded-full flex items-center justify-center mb-4"><FileText className="w-8 h-8" /></div>
            <h3 className="font-bold text-xl text-charcoal mb-4">{rep}</h3>
            <div className="flex gap-3 w-full">
              <button onClick={() => setModalOpen(true)} className="flex-1 py-3 bg-gray-50 border border-gray-200 text-charcoal font-bold rounded-xl hover:bg-gray-100 flex justify-center items-center gap-2"><Eye className="w-4 h-4" /> View</button>
              <button onClick={handleDownload} className="flex-1 py-3 bg-rose-gold text-white font-bold rounded-xl flex justify-center items-center gap-2"><Download className="w-4 h-4" /> Download</button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Report Preview"><p className="text-charcoal/70">Detailed metrics and numbers would appear here...</p></Modal>
    </div>
  );
};

// 6. SETTINGS
export const AdminSettings = () => {
  const [profile, setProfile] = useState({
    fullName: 'Rahul Sharma',
    email: 'admin@respark.com',
    phone: '+91 98765 43210',
    role: 'Super Admin',
    avatarUrl: 'https://i.pravatar.cc/150?u=admin',
  });

  const [business, setBusiness] = useState({
    salonName: 'ReSpark Luxury Salon',
    address: '123 Fashion Street, Connaught Place',
    city: 'New Delhi',
    website: 'www.respark.in',
    gst: 'GST07ABCDE1234F1Z5',
    currency: 'INR',
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    bookingUpdates: true,
    staffReports: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const Field = ({ label, type = 'text', value, onChange }) => (
    <div>
      <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/10 text-sm font-medium text-charcoal transition-all"
      />
    </div>
  );

  const Toggle = ({ label, desc, checked, onChange }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
      <div>
        <p className="text-sm font-bold text-charcoal">{label}</p>
        <p className="text-xs text-charcoal/40">{desc}</p>
      </div>
      <button
        type="button"
        onClick={onChange}
        className={`relative w-11 h-6 rounded-full transition-all ${checked ? 'bg-rose-gold' : 'bg-gray-200'}`}
      >
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-3xl">
      <div>
        <h1 className="text-2xl font-black text-charcoal">System Settings</h1>
        <p className="text-charcoal/50 text-sm">Manage your profile, business info, and preferences</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">

        {/* Profile Section */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-base font-black text-charcoal mb-5 pb-3 border-b border-gray-100">👤 Profile Information</h2>

          {/* Avatar */}
          <div className="flex items-center gap-5 mb-6">
            <div className="relative">
              <img src={profile.avatarUrl} className="w-20 h-20 rounded-2xl object-cover border-4 border-gray-50 shadow-md" />
              <button
                type="button"
                onClick={() => setProfile({...profile, avatarUrl: `https://i.pravatar.cc/150?u=${Date.now()}`})}
                className="absolute -bottom-1 -right-1 w-7 h-7 bg-rose-gold text-white rounded-full flex items-center justify-center text-xs shadow-lg hover:bg-purple-700 transition-all"
              >
                ✎
              </button>
            </div>
            <div>
              <p className="font-black text-charcoal text-lg">{profile.fullName}</p>
              <p className="text-sm text-charcoal/50">{profile.role}</p>
              <p className="text-xs text-rose-gold font-bold mt-1">Click pencil to change photo</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full Name" value={profile.fullName} onChange={e => setProfile({...profile, fullName: e.target.value})} />
            <Field label="Role / Designation" value={profile.role} onChange={e => setProfile({...profile, role: e.target.value})} />
            <Field label="Email Address" type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} />
            <Field label="Contact Number" type="tel" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
          </div>
        </div>

        {/* Business Section */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-base font-black text-charcoal mb-5 pb-3 border-b border-gray-100">🏪 Business Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Salon / Business Name" value={business.salonName} onChange={e => setBusiness({...business, salonName: e.target.value})} />
            <Field label="Website URL" value={business.website} onChange={e => setBusiness({...business, website: e.target.value})} />
            <Field label="Business Address" value={business.address} onChange={e => setBusiness({...business, address: e.target.value})} />
            <Field label="City" value={business.city} onChange={e => setBusiness({...business, city: e.target.value})} />
            <Field label="GST Number" value={business.gst} onChange={e => setBusiness({...business, gst: e.target.value})} />
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1.5">Currency</label>
              <select value={business.currency} onChange={e => setBusiness({...business, currency: e.target.value})} className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-rose-gold text-sm font-medium text-charcoal">
                <option value="INR">₹ INR - Indian Rupee</option>
                <option value="USD">$ USD - US Dollar</option>
                <option value="AED">د.إ AED - UAE Dirham</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-base font-black text-charcoal mb-5 pb-3 border-b border-gray-100">🔔 Notification Preferences</h2>
          <div className="space-y-1">
            <Toggle label="Email Alerts" desc="Receive booking & revenue summaries via email" checked={notifications.emailAlerts} onChange={() => setNotifications({...notifications, emailAlerts: !notifications.emailAlerts})} />
            <Toggle label="SMS Alerts" desc="Get appointment reminders via SMS" checked={notifications.smsAlerts} onChange={() => setNotifications({...notifications, smsAlerts: !notifications.smsAlerts})} />
            <Toggle label="Booking Updates" desc="Notify when new bookings are created" checked={notifications.bookingUpdates} onChange={() => setNotifications({...notifications, bookingUpdates: !notifications.bookingUpdates})} />
            <Toggle label="Staff Performance Reports" desc="Weekly performance summary for staff" checked={notifications.staffReports} onChange={() => setNotifications({...notifications, staffReports: !notifications.staffReports})} />
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className={`w-full py-4 font-bold rounded-2xl flex items-center justify-center gap-2 text-base shadow-lg transition-all ${saved ? 'bg-green-500 shadow-green-500/20' : 'bg-rose-gold shadow-rose-gold/20 hover:bg-purple-800'} text-white`}
        >
          {saved ? '✓ Settings Saved Successfully!' : <><Save className="w-5 h-5" /> Save All Changes</>}
        </button>
      </form>
    </div>
  );
};

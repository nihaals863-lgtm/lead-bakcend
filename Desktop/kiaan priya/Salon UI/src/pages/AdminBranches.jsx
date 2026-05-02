import React, { useState } from 'react';
import { MapPin, Plus, Eye, Edit2, Trash2, TrendingUp, Users, Star, Phone, Mail, Save, X } from 'lucide-react';

const initialBranches = [
  { id: 1, name: 'Downtown Studio', location: '123 Fashion St, Connaught Place', city: 'New Delhi', phone: '+91 98765 11111', email: 'downtown@respark.in', manager: 'Priya Mehta', staff: 12, revenue: 85000, expenses: 42000, rating: 4.8, status: 'Active', opened: 'Jan 2022' },
  { id: 2, name: 'Uptown Spa & Salon', location: '45 High St, Hauz Khas', city: 'New Delhi', phone: '+91 98765 22222', email: 'uptown@respark.in', manager: 'Ankit Sharma', staff: 9, revenue: 72000, expenses: 38000, rating: 4.6, status: 'Active', opened: 'Jun 2022' },
  { id: 3, name: 'Westside Wellness', location: '78 West Ave, Rajouri Garden', city: 'New Delhi', phone: '+91 98765 33333', email: 'westside@respark.in', manager: 'Sneha Patel', staff: 7, revenue: 61000, expenses: 31000, rating: 4.5, status: 'Active', opened: 'Mar 2023' },
  { id: 4, name: 'South City Luxe', location: '21 South Block, Saket', city: 'New Delhi', phone: '+91 98765 44444', email: 'southcity@respark.in', manager: 'Rohan Kapoor', staff: 10, revenue: 66000, expenses: 35000, rating: 4.7, status: 'Active', opened: 'Nov 2023' },
  { id: 5, name: 'Noida Elite', location: '5 Sector 18, Noida', city: 'Noida', phone: '+91 98765 55555', email: 'noida@respark.in', manager: 'Kavya Singh', staff: 6, revenue: 48000, expenses: 28000, rating: 4.4, status: 'Active', opened: 'Feb 2024' },
];

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-black text-charcoal">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-all"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const Field = ({ label, value, onChange, type = 'text' }) => (
  <div>
    <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1">{label}</label>
    <input type={type} value={value} onChange={onChange}
      className="w-full border border-gray-200 p-2.5 rounded-xl outline-none focus:border-rose-gold text-sm font-medium text-charcoal" />
  </div>
);

export const AdminBranches = ({ branches: propBranches, setBranches: propSetBranches }) => {
  // Always use initialBranches directly — never merge with small prop values
  const [branches, setBranchesLocal] = useState(initialBranches);
  const setBranches = (val) => { setBranchesLocal(val); if (propSetBranches) propSetBranches(val); };

  const [viewBranch, setViewBranch] = useState(null);
  const [editBranch, setEditBranch] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [addModal, setAddModal] = useState(false);
  const [newForm, setNewForm] = useState({ name: '', location: '', city: '', phone: '', email: '', manager: '' });

  const openEdit = (b) => { setEditBranch(b); setEditForm({ ...b }); };

  const saveEdit = (e) => {
    e.preventDefault();
    setBranches(branches.map(b => b.id === editForm.id ? editForm : b));
    setEditBranch(null);
    alert('Branch updated successfully!');
  };

  const deleteBranch = (id) => {
    if (window.confirm('Are you sure you want to delete this branch?')) {
      setBranches(branches.filter(b => b.id !== id));
    }
  };

  const addBranch = (e) => {
    e.preventDefault();
    const nb = { id: Date.now(), ...newForm, staff: 0, revenue: 0, expenses: 0, rating: 0, status: 'Active', opened: new Date().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }) };
    setBranches([...branches, nb]);
    setAddModal(false);
    setNewForm({ name: '', location: '', city: '', phone: '', email: '', manager: '' });
    alert('Branch added successfully!');
  };

  const totalRevenue = branches.reduce((s, b) => s + (b.revenue || 0), 0);
  const totalStaff = branches.reduce((s, b) => s + (b.staff || 0), 0);
  const avgRating = (branches.reduce((s, b) => s + (b.rating || 0), 0) / branches.length).toFixed(1);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Branch Management</h1>
          <p className="text-charcoal/50 text-sm">{branches.length} branches across {[...new Set(branches.map(b => b.city))].length} cities</p>
        </div>
        <button onClick={() => setAddModal(true)}
          className="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-gold text-white rounded-xl font-bold hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20">
          <Plus className="w-4 h-4" /> Add Branch
        </button>
      </div>

      {/* Summary KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Branches', value: branches.length, icon: MapPin, color: 'bg-rose-gold' },
          { label: 'Total Revenue', value: `₹${(totalRevenue/1000).toFixed(0)}K`, icon: TrendingUp, color: 'bg-green-500' },
          { label: 'Total Staff', value: totalStaff, icon: Users, color: 'bg-blue-500' },
          { label: 'Avg Rating', value: avgRating + ' ★', icon: Star, color: 'bg-yellow-500' },
        ].map((c, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 ${c.color} rounded-2xl flex items-center justify-center mb-3`}>
              <c.icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">{c.label}</p>
            <p className="text-2xl font-black text-charcoal mt-0.5">{c.value}</p>
          </div>
        ))}
      </div>

      {/* Branch Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {branches.map(b => {
          const profit = (b.revenue || 0) - (b.expenses || 0);
          return (
            <div key={b.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all">
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-gold/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-rose-gold" />
                  </div>
                  <div>
                    <p className="font-black text-charcoal text-base leading-tight">{b.name}</p>
                    <p className="text-xs text-charcoal/40">{b.city} • Est. {b.opened}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${b.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                  {b.status}
                </span>
              </div>

              {/* Info rows */}
              <div className="space-y-1.5 text-sm mb-4">
                <div className="flex items-center gap-2 text-charcoal/60">
                  <MapPin className="w-3.5 h-3.5 text-rose-gold shrink-0" />
                  <span className="truncate">{b.location}</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal/60">
                  <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Manager: <strong className="text-charcoal">{b.manager}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-charcoal/60">
                  <Phone className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <span>{b.phone}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-gray-50 rounded-xl p-2 text-center">
                  <p className="text-[10px] text-charcoal/40 font-bold uppercase">Staff</p>
                  <p className="font-black text-charcoal text-sm">{b.staff}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-2 text-center">
                  <p className="text-[10px] text-charcoal/40 font-bold uppercase">Revenue</p>
                  <p className="font-black text-green-600 text-sm">₹{(b.revenue/1000).toFixed(0)}K</p>
                </div>
                <div className={`rounded-xl p-2 text-center ${profit >= 0 ? 'bg-blue-50' : 'bg-red-50'}`}>
                  <p className="text-[10px] text-charcoal/40 font-bold uppercase">Profit</p>
                  <p className={`font-black text-sm ${profit >= 0 ? 'text-blue-600' : 'text-red-500'}`}>₹{(profit/1000).toFixed(0)}K</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className={`w-4 h-4 ${s <= Math.round(b.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                ))}
                <span className="text-xs font-bold text-charcoal/50 ml-1">{b.rating}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-3 border-t border-gray-100">
                <button onClick={() => setViewBranch(b)}
                  className="flex-1 py-2 text-xs font-bold bg-gray-50 hover:bg-rose-gold/10 text-charcoal hover:text-rose-gold rounded-xl flex items-center justify-center gap-1 transition-all">
                  <Eye className="w-3.5 h-3.5" /> View
                </button>
                <button onClick={() => openEdit(b)}
                  className="flex-1 py-2 text-xs font-bold bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center gap-1 transition-all">
                  <Edit2 className="w-3.5 h-3.5" /> Edit
                </button>
                <button onClick={() => deleteBranch(b.id)}
                  className="flex-1 py-2 text-xs font-bold bg-red-50 hover:bg-red-100 text-red-500 rounded-xl flex items-center justify-center gap-1 transition-all">
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── VIEW MODAL ── */}
      <Modal isOpen={!!viewBranch} onClose={() => setViewBranch(null)} title="Branch Details">
        {viewBranch && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <div className="w-16 h-16 bg-rose-gold/10 rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-rose-gold" />
              </div>
              <div>
                <h2 className="text-xl font-black text-charcoal">{viewBranch.name}</h2>
                <p className="text-charcoal/50 text-sm">{viewBranch.city}</p>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${viewBranch.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                  {viewBranch.status}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['📍 Address', viewBranch.location],
                ['👤 Manager', viewBranch.manager],
                ['📞 Phone', viewBranch.phone],
                ['📧 Email', viewBranch.email],
                ['👥 Staff', viewBranch.staff + ' members'],
                ['📅 Opened', viewBranch.opened],
                ['💰 Revenue', `₹${(viewBranch.revenue/1000).toFixed(0)}K`],
                ['💸 Expenses', `₹${(viewBranch.expenses/1000).toFixed(0)}K`],
                ['📈 Profit', `₹${((viewBranch.revenue - viewBranch.expenses)/1000).toFixed(0)}K`],
                ['⭐ Rating', viewBranch.rating + ' / 5'],
              ].map(([label, val], i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-3">
                  <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">{label}</p>
                  <p className="font-bold text-charcoal text-sm mt-0.5">{val}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>

      {/* ── EDIT MODAL ── */}
      <Modal isOpen={!!editBranch} onClose={() => setEditBranch(null)} title="Edit Branch">
        {editBranch && (
          <form onSubmit={saveEdit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Branch Name" value={editForm.name || ''} onChange={e => setEditForm({...editForm, name: e.target.value})} />
              <Field label="City" value={editForm.city || ''} onChange={e => setEditForm({...editForm, city: e.target.value})} />
              <Field label="Address" value={editForm.location || ''} onChange={e => setEditForm({...editForm, location: e.target.value})} />
              <Field label="Manager" value={editForm.manager || ''} onChange={e => setEditForm({...editForm, manager: e.target.value})} />
              <Field label="Phone" type="tel" value={editForm.phone || ''} onChange={e => setEditForm({...editForm, phone: e.target.value})} />
              <Field label="Email" type="email" value={editForm.email || ''} onChange={e => setEditForm({...editForm, email: e.target.value})} />
              <Field label="Revenue (₹)" type="number" value={editForm.revenue || 0} onChange={e => setEditForm({...editForm, revenue: Number(e.target.value)})} />
              <Field label="Expenses (₹)" type="number" value={editForm.expenses || 0} onChange={e => setEditForm({...editForm, expenses: Number(e.target.value)})} />
            </div>
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1">Status</label>
              <select value={editForm.status} onChange={e => setEditForm({...editForm, status: e.target.value})}
                className="w-full border border-gray-200 p-2.5 rounded-xl outline-none text-sm font-medium text-charcoal">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <button type="submit" className="w-full py-3 bg-rose-gold text-white font-bold rounded-xl flex items-center justify-center gap-2">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </form>
        )}
      </Modal>

      {/* ── ADD MODAL ── */}
      <Modal isOpen={addModal} onClose={() => setAddModal(false)} title="Add New Branch">
        <form onSubmit={addBranch} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Branch Name" value={newForm.name} onChange={e => setNewForm({...newForm, name: e.target.value})} />
            <Field label="City" value={newForm.city} onChange={e => setNewForm({...newForm, city: e.target.value})} />
            <Field label="Address" value={newForm.location} onChange={e => setNewForm({...newForm, location: e.target.value})} />
            <Field label="Manager Name" value={newForm.manager} onChange={e => setNewForm({...newForm, manager: e.target.value})} />
            <Field label="Phone" type="tel" value={newForm.phone} onChange={e => setNewForm({...newForm, phone: e.target.value})} />
            <Field label="Email" type="email" value={newForm.email} onChange={e => setNewForm({...newForm, email: e.target.value})} />
          </div>
          <button type="submit" className="w-full py-3 bg-rose-gold text-white font-bold rounded-xl flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add Branch
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AdminBranches;

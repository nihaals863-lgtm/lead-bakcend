import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X, Search, Scissors, Star, Clock, Tag } from 'lucide-react';

const categories = ['All', 'Hair Care', 'Skin & Face', 'Massage & Spa', 'Nail Care', 'Bridal', 'Threading & Waxing'];

const categoryColors = {
  'Hair Care': 'bg-purple-100 text-purple-700',
  'Skin & Face': 'bg-pink-100 text-pink-700',
  'Massage & Spa': 'bg-blue-100 text-blue-700',
  'Nail Care': 'bg-green-100 text-green-700',
  'Bridal': 'bg-yellow-100 text-yellow-700',
  'Threading & Waxing': 'bg-orange-100 text-orange-700',
};

const categoryIcons = {
  'Hair Care': '💇',
  'Skin & Face': '✨',
  'Massage & Spa': '💆',
  'Nail Care': '💅',
  'Bridal': '👰',
  'Threading & Waxing': '🪡',
};

const initialServices = [
  { id: 1, name: 'Premium Haircut', category: 'Hair Care', price: 450, duration: 30, rating: 4.9, popular: true, desc: 'Expert precision cut tailored to your face shape.' },
  { id: 2, name: 'Hair Coloring (Global)', category: 'Hair Care', price: 1200, duration: 90, rating: 4.8, popular: true, desc: 'Full head color with premium ammonia-free products.' },
  { id: 3, name: 'Keratin Treatment', category: 'Hair Care', price: 2500, duration: 120, rating: 4.9, popular: true, desc: 'Smoothing treatment for frizz-free, silky hair.' },
  { id: 4, name: 'Balayage & Highlights', category: 'Hair Care', price: 3500, duration: 150, rating: 4.7, popular: false, desc: 'Artistic hand-painted color for a natural sun-kissed look.' },
  { id: 5, name: 'Face Clean-up', category: 'Skin & Face', price: 600, duration: 45, rating: 4.6, popular: true, desc: 'Deep cleansing facial to remove dirt and unclog pores.' },
  { id: 6, name: 'Gold Facial', category: 'Skin & Face', price: 1500, duration: 60, rating: 4.8, popular: true, desc: 'Luxurious 24K gold facial for glowing, youthful skin.' },
  { id: 7, name: 'Bridal Makeup', category: 'Bridal', price: 8000, duration: 180, rating: 5.0, popular: true, desc: 'Complete bridal look with airbrush & HD makeup.' },
  { id: 8, name: 'Pre-Bridal Package', category: 'Bridal', price: 12000, duration: 240, rating: 4.9, popular: false, desc: 'Complete pre-bridal care: facial, wax, mani-pedi & more.' },
  { id: 9, name: 'Swedish Massage', category: 'Massage & Spa', price: 1200, duration: 60, rating: 4.7, popular: true, desc: 'Relaxing full-body massage using classic Swedish techniques.' },
  { id: 10, name: 'Hot Stone Massage', category: 'Massage & Spa', price: 1800, duration: 75, rating: 4.8, popular: false, desc: 'Deep-relaxing therapy using heated volcanic basalt stones.' },
  { id: 11, name: 'Full Body Spa', category: 'Massage & Spa', price: 3000, duration: 120, rating: 4.9, popular: true, desc: 'Complete spa ritual including scrub, wrap, and massage.' },
  { id: 12, name: 'Manicure (Gel)', category: 'Nail Care', price: 700, duration: 45, rating: 4.6, popular: true, desc: 'Long-lasting gel manicure with cuticle care & hand massage.' },
  { id: 13, name: 'Pedicure (Spa)', category: 'Nail Care', price: 900, duration: 60, rating: 4.7, popular: false, desc: 'Indulgent pedicure with exfoliation, mask & nail art.' },
  { id: 14, name: 'Threading (Eyebrow)', category: 'Threading & Waxing', price: 80, duration: 10, rating: 4.5, popular: true, desc: 'Precise eyebrow shaping using traditional threading method.' },
  { id: 15, name: 'Full Body Waxing', category: 'Threading & Waxing', price: 2200, duration: 90, rating: 4.6, popular: false, desc: 'Complete body waxing with soothing post-wax treatment.' },
];

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="text-lg font-black text-charcoal">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

const ServiceForm = ({ form, setForm, onSubmit, submitLabel }) => (
  <form onSubmit={onSubmit} className="space-y-3">
    <div>
      <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1">Service Name</label>
      <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
        className="w-full border border-gray-200 p-2.5 rounded-xl outline-none focus:border-rose-gold text-sm" placeholder="e.g. Premium Haircut" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div>
        <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1">Category</label>
        <select required value={form.category} onChange={e => setForm({...form, category: e.target.value})}
          className="w-full border border-gray-200 p-2.5 rounded-xl outline-none focus:border-rose-gold text-sm">
          <option value="">Select...</option>
          {categories.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1">Price (₹)</label>
        <input required type="number" value={form.price} onChange={e => setForm({...form, price: Number(e.target.value)})}
          className="w-full border border-gray-200 p-2.5 rounded-xl outline-none focus:border-rose-gold text-sm" placeholder="e.g. 500" />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div>
        <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1">Duration (mins)</label>
        <input type="number" value={form.duration} onChange={e => setForm({...form, duration: Number(e.target.value)})}
          className="w-full border border-gray-200 p-2.5 rounded-xl outline-none focus:border-rose-gold text-sm" placeholder="e.g. 45" />
      </div>
      <div>
        <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1">Rating (0-5)</label>
        <input type="number" step="0.1" max="5" value={form.rating} onChange={e => setForm({...form, rating: Number(e.target.value)})}
          className="w-full border border-gray-200 p-2.5 rounded-xl outline-none focus:border-rose-gold text-sm" placeholder="e.g. 4.8" />
      </div>
    </div>
    <div>
      <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1">Description</label>
      <textarea value={form.desc} onChange={e => setForm({...form, desc: e.target.value})}
        className="w-full border border-gray-200 p-2.5 rounded-xl outline-none focus:border-rose-gold text-sm resize-none h-20" placeholder="Short description..." />
    </div>
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" checked={form.popular} onChange={e => setForm({...form, popular: e.target.checked})} className="rounded" />
      <span className="text-sm font-bold text-charcoal">Mark as Popular / Featured</span>
    </label>
    <button type="submit" className="w-full py-3 bg-rose-gold text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-purple-800 transition-all">
      <Save className="w-4 h-4" /> {submitLabel}
    </button>
  </form>
);

export const AdminServices = ({ services: propServices, setServices: propSetServices }) => {
  const [services, setServicesLocal] = useState(initialServices);
  const setServices = (val) => { setServicesLocal(val); if (propSetServices) propSetServices(val); };

  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [newForm, setNewForm] = useState({ name: '', category: '', price: '', duration: 45, rating: 4.5, desc: '', popular: false });
  const [editForm, setEditForm] = useState({});

  const filtered = services.filter(s => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const addService = (e) => {
    e.preventDefault();
    setServices([...services, { id: Date.now(), ...newForm }]);
    setAddModal(false);
    setNewForm({ name: '', category: '', price: '', duration: 45, rating: 4.5, desc: '', popular: false });
  };

  const openEdit = (s) => { setEditModal(s); setEditForm({ ...s }); };

  const saveEdit = (e) => {
    e.preventDefault();
    setServices(services.map(s => s.id === editForm.id ? editForm : s));
    setEditModal(null);
  };

  const deleteService = (id) => {
    if (window.confirm('Delete this service?')) setServices(services.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Services List</h1>
          <p className="text-charcoal/50 text-sm">{services.length} services across {categories.length - 1} categories</p>
        </div>
        <button onClick={() => setAddModal(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-gold text-white rounded-xl font-bold hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20">
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      {/* Search + Category Filter */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-start sm:items-center">
        <div className="relative w-full sm:w-auto">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search services..."
            className="pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:border-rose-gold text-sm w-full sm:w-56" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${activeCategory === cat ? 'bg-rose-gold text-white shadow-md shadow-rose-gold/20' : 'bg-white border border-gray-200 text-charcoal/60 hover:border-rose-gold/40'}`}>
              {cat !== 'All' ? categoryIcons[cat] + ' ' : ''}{cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Services', value: services.length, icon: '🛎️' },
          { label: 'Popular Services', value: services.filter(s => s.popular).length, icon: '⭐' },
          { label: 'Avg Price', value: `₹${Math.round(services.reduce((a, s) => a + s.price, 0) / services.length)}`, icon: '💰' },
          { label: 'Highest Rated', value: Math.max(...services.map(s => s.rating)) + ' ★', icon: '🏆' },
        ].map((c, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <span className="text-2xl">{c.icon}</span>
            <div>
              <p className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">{c.label}</p>
              <p className="text-xl font-black text-charcoal">{c.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(s => (
          <div key={s.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all relative">
            {s.popular && (
              <span className="absolute top-4 right-4 text-[10px] font-black bg-rose-gold text-white px-2 py-0.5 rounded-full">⭐ Popular</span>
            )}
            {/* Category badge */}
            <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3 ${categoryColors[s.category] || 'bg-gray-100 text-gray-600'}`}>
              {categoryIcons[s.category]} {s.category}
            </span>

            <h3 className="font-black text-charcoal text-base mb-1">{s.name}</h3>
            <p className="text-xs text-charcoal/50 mb-3 leading-relaxed">{s.desc}</p>

            {/* Details */}
            <div className="flex items-center gap-4 text-xs text-charcoal/60 mb-4">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-rose-gold" /> {s.duration} mins</span>
              <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" /> {s.rating}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-black text-rose-gold">₹{s.price.toLocaleString()}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-3 border-t border-gray-100">
              <button onClick={() => openEdit(s)}
                className="flex-1 py-2 text-xs font-bold bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center gap-1 transition-all">
                <Edit2 className="w-3.5 h-3.5" /> Edit
              </button>
              <button onClick={() => deleteService(s.id)}
                className="flex-1 py-2 text-xs font-bold bg-red-50 hover:bg-red-100 text-red-500 rounded-xl flex items-center justify-center gap-1 transition-all">
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-charcoal/40">
          <Scissors className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="font-bold">No services found</p>
          <p className="text-sm">Try a different category or search term</p>
        </div>
      )}

      {/* ADD Modal */}
      <Modal isOpen={addModal} onClose={() => setAddModal(false)} title="Add New Service">
        <ServiceForm form={newForm} setForm={setNewForm} onSubmit={addService} submitLabel="Add Service" />
      </Modal>

      {/* EDIT Modal */}
      <Modal isOpen={!!editModal} onClose={() => setEditModal(null)} title="Edit Service">
        <ServiceForm form={editForm} setForm={setEditForm} onSubmit={saveEdit} submitLabel="Save Changes" />
      </Modal>
    </div>
  );
};

export default AdminServices;

import React, { useState } from 'react';
import { Users, AlertTriangle, Package, MessageSquare, Star, ShoppingCart, Plus, Minus, CheckCircle } from 'lucide-react';
import Modal from '../components/Modal';

// 1. STAFF ATTENDANCE
export const ManagerAttendance = ({ staffData, setStaffData }) => {
  const toggleAttendance = (id) => {
    setStaffData(staffData.map(staff => {
      if (staff.id === id) {
        const newStatus = staff.status === 'Present' ? 'Absent' : 'Present';
        const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        return { ...staff, status: newStatus, checkIn: newStatus === 'Present' ? now : '-' };
      }
      return staff;
    }));
  };

  const presentCount = staffData.filter(s => s.status === 'Present').length;
  const lateCount = staffData.filter(s => s.status === 'Late').length;
  const absentCount = staffData.filter(s => s.status === 'Absent' || s.status === 'On Leave').length;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Daily Attendance</h1>
          <p className="text-charcoal/50 text-sm">{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-green-50 px-4 py-2 rounded-xl border border-green-100 flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-black">{presentCount}</div>
            <span className="text-sm font-bold text-green-700">Present</span>
          </div>
          <div className="bg-orange-50 px-4 py-2 rounded-xl border border-orange-100 flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-black">{lateCount}</div>
            <span className="text-sm font-bold text-orange-700">Late</span>
          </div>
          <div className="bg-red-50 px-4 py-2 rounded-xl border border-red-100 flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-black">{absentCount}</div>
            <span className="text-sm font-bold text-red-700">Absent</span>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {staffData.map((staff) => (
          <div key={staff.id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1.5 h-full ${staff.status === 'Present' ? 'bg-green-500' : staff.status === 'Late' ? 'bg-orange-400' : staff.status === 'On Leave' ? 'bg-blue-400' : 'bg-red-500'}`} />
            
            <div className="flex items-start justify-between mb-4 pl-3">
              <div className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/100?u=${staff.name}`} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-gray-50" />
                <div>
                  <h3 className="font-black text-charcoal">{staff.name}</h3>
                  <p className="text-xs text-charcoal/50 font-bold">{staff.role}</p>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${staff.status === 'Present' ? 'bg-green-100 text-green-700' : staff.status === 'Late' ? 'bg-orange-100 text-orange-700' : staff.status === 'On Leave' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>
                {staff.status}
              </span>
            </div>

            <div className="pl-3 space-y-2 mb-5">
              <div className="flex items-center gap-2 text-xs text-charcoal/60">
                <div className="w-5 flex justify-center">🕒</div>
                <span>Shift: <strong className="text-charcoal">{staff.shift}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal/60">
                <div className="w-5 flex justify-center">✅</div>
                <span>In: <strong className="text-charcoal">{staff.checkIn}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal/60">
                <div className="w-5 flex justify-center">🚪</div>
                <span>Out: <strong className="text-charcoal">{staff.checkOut}</strong></span>
              </div>
            </div>

            <div className="pl-3">
              <button 
                onClick={() => toggleAttendance(staff.id)} 
                className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${staff.status === 'Present' || staff.status === 'Late' ? 'bg-red-50 hover:bg-red-100 text-red-600' : 'bg-green-50 hover:bg-green-100 text-green-700'}`}
              >
                {staff.status === 'Present' || staff.status === 'Late' ? 'Mark Absent / Check Out' : 'Mark Present / Check In'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 2. INVENTORY
export const ManagerInventory = ({ inventory, setInventory }) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(10);
  
  // New Product State
  const [newItem, setNewItem] = useState({ item: '', category: 'Hair Care', price: '', min: 5, stock: 0 });

  const updateStock = (id, amount) => {
    setInventory(inventory.map(item => item.id === id ? { ...item, stock: Math.max(0, item.stock + amount) } : item));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      ...newItem,
      id: Date.now(),
      price: Number(newItem.price),
      min: Number(newItem.min),
      stock: Number(newItem.stock),
      lastRestock: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };
    setInventory([...inventory, product]);
    setIsAddModalOpen(false);
    setNewItem({ item: '', category: 'Hair Care', price: '', min: 5, stock: 0 });
  };

  const submitOrder = (e) => {
    e.preventDefault();
    updateStock(selectedItem.id, orderQuantity);
    setIsOrderModalOpen(false);
    setTimeout(() => alert(`Successfully ordered ${orderQuantity} units of ${selectedItem.item}!`), 100);
  };

  const lowStockItems = inventory.filter(i => i.stock <= i.min);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Inventory Management</h1>
          <p className="text-charcoal/50 text-sm">Track products, consumables, and low stock alerts</p>
        </div>
        <div className="flex gap-3">
          {lowStockItems.length > 0 && (
            <div className="bg-red-50 text-red-600 px-4 py-2 rounded-xl flex items-center gap-2 font-bold text-sm border border-red-100">
              <AlertTriangle className="w-4 h-4" />
              {lowStockItems.length} items low
            </div>
          )}
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="px-5 py-2.5 bg-charcoal text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-black transition-all"
          >
            <Plus className="w-4 h-4" /> Add New Product
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-charcoal/50 text-[10px] uppercase tracking-widest font-bold">
              <tr>
                <th className="px-6 py-4">Product Details</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4 text-center">Stock Level</th>
                <th className="px-6 py-4">Last Restock</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {inventory.map((item) => {
                const isLow = item.stock <= item.min;
                return (
                  <tr key={item.id} className={`hover:bg-gray-50/50 transition-colors ${isLow ? 'bg-red-50/30' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isLow ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-500'}`}>
                          <Package className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-charcoal text-sm">{item.item}</p>
                          <p className="text-xs text-charcoal/40 font-medium">₹{item.price} / unit</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                          <button onClick={() => updateStock(item.id, -1)} className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 text-charcoal rounded-lg transition-colors"><Minus className="w-3 h-3" /></button>
                          <span className={`w-6 text-center font-black text-sm ${isLow ? 'text-red-600' : 'text-charcoal'}`}>{item.stock}</span>
                          <button onClick={() => updateStock(item.id, 1)} className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 text-charcoal rounded-lg transition-colors"><Plus className="w-3 h-3" /></button>
                        </div>
                        {isLow && <span className="text-[9px] font-black uppercase text-red-500 tracking-wider">Low Stock</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-bold text-charcoal/60">
                      {item.lastRestock}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => { setSelectedItem(item); setOrderQuantity(item.min * 2); setIsOrderModalOpen(true); }} 
                        className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 ml-auto transition-all ${isLow ? 'bg-red-500 text-white shadow-md shadow-red-500/20 hover:bg-red-600' : 'bg-rose-gold text-white shadow-md shadow-rose-gold/20 hover:bg-purple-800'}`}
                      >
                        <ShoppingCart className="w-3.5 h-3.5" /> Order More
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Product Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Inventory Product">
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-charcoal/50 uppercase mb-1.5">Product Name</label>
              <input 
                type="text" 
                required
                value={newItem.item} 
                onChange={e => setNewItem({...newItem, item: e.target.value})}
                className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-rose-gold font-bold" 
                placeholder="e.g. Loreal Serum"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase mb-1.5">Category</label>
              <select 
                value={newItem.category} 
                onChange={e => setNewItem({...newItem, category: e.target.value})}
                className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-rose-gold font-bold"
              >
                <option>Hair Care</option>
                <option>Skin Care</option>
                <option>Makeup</option>
                <option>Treatments</option>
                <option>Consumables</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase mb-1.5">Unit Price (₹)</label>
              <input 
                type="number" 
                required
                value={newItem.price} 
                onChange={e => setNewItem({...newItem, price: e.target.value})}
                className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-rose-gold font-bold" 
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase mb-1.5">Initial Stock</label>
              <input 
                type="number" 
                required
                value={newItem.stock} 
                onChange={e => setNewItem({...newItem, stock: e.target.value})}
                className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-rose-gold font-bold" 
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase mb-1.5">Min Threshold</label>
              <input 
                type="number" 
                required
                value={newItem.min} 
                onChange={e => setNewItem({...newItem, min: e.target.value})}
                className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-rose-gold font-bold" 
                placeholder="5"
              />
            </div>
          </div>
          <button type="submit" className="w-full mt-4 py-4 bg-rose-gold text-white font-black rounded-xl hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20">
            Create Product Entry
          </button>
        </form>
      </Modal>

      {/* Order Modal */}
      <Modal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} title="Purchase Order">
        {selectedItem && (
          <form onSubmit={submitOrder} className="space-y-5">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Package className="w-6 h-6 text-charcoal/40" />
              </div>
              <div>
                <h3 className="font-black text-charcoal text-base">{selectedItem.item}</h3>
                <p className="text-xs text-charcoal/50">Current Stock: <strong className={selectedItem.stock <= selectedItem.min ? 'text-red-500' : 'text-charcoal'}>{selectedItem.stock} units</strong></p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1.5">Quantity to Order</label>
              <div className="relative">
                <input 
                  type="number" 
                  min="1"
                  value={orderQuantity} 
                  onChange={e => setOrderQuantity(parseInt(e.target.value) || 0)} 
                  className="w-full border border-gray-200 p-3 pl-4 rounded-xl outline-none focus:border-rose-gold text-lg font-black text-charcoal" 
                />
                <span className="absolute right-4 top-3.5 text-sm font-bold text-charcoal/40">units</span>
              </div>
            </div>

            <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-charcoal/60">Estimated Cost</span>
                <span className="font-black text-charcoal text-lg">₹{(selectedItem.price * orderQuantity).toLocaleString()}</span>
              </div>
              <p className="text-[10px] text-charcoal/40">Based on unit price of ₹{selectedItem.price}</p>
            </div>

            <button type="submit" className="w-full py-3.5 bg-rose-gold text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20">
              <CheckCircle className="w-5 h-5" /> Confirm Purchase Order
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};


// 3. CUSTOMER FEEDBACK
export const ManagerFeedback = ({ feedback }) => {
  const avgRating = (feedback.reduce((sum, f) => sum + f.rating, 0) / feedback.length).toFixed(1);
  const positive = feedback.filter(f => f.rating >= 4).length;
  
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Customer Feedback</h1>
          <p className="text-charcoal/50 text-sm">Review recent ratings and client testimonials</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <div>
              <p className="text-xs text-charcoal/50 font-bold uppercase tracking-widest">Avg Rating</p>
              <p className="text-lg font-black text-charcoal">{avgRating} / 5.0</p>
            </div>
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-xs text-charcoal/50 font-bold uppercase tracking-widest">Positive</p>
              <p className="text-lg font-black text-charcoal">{Math.round((positive/feedback.length)*100)}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {feedback.map(f => (
          <div key={f.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-gold/10 text-rose-gold font-black rounded-full flex items-center justify-center">
                  {f.customer.charAt(0)}
                </div>
                <div>
                  <h3 className="font-black text-charcoal">{f.customer}</h3>
                  <p className="text-[10px] font-bold text-charcoal/40">{f.date} • {f.service}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < f.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-100'}`} />)}
              </div>
            </div>
            <p className="text-sm text-charcoal/70 italic leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">"{f.comment}"</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[10px] uppercase font-black tracking-widest text-charcoal/40">Serviced by:</span>
              <span className="text-xs font-bold bg-rose-gold/5 text-rose-gold px-2 py-1 rounded-lg">{f.staff}</span>
              <span className={`ml-auto text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${f.sentiment === 'Positive' ? 'bg-green-50 text-green-600' : f.sentiment === 'Neutral' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'}`}>
                {f.sentiment}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. PERFORMANCE
export const ManagerPerformance = ({ staffData }) => {
  const sorted = [...(staffData || [])].sort((a, b) => Number(b.rating) - Number(a.rating));
  const topStaff = sorted[0] || {};
  
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-black text-charcoal">Staff Performance Metrics</h1>
        <p className="text-charcoal/50 text-sm">Monthly review of staff revenue, ratings, and attendance</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-3xl shadow-lg shadow-purple-500/20 text-white relative overflow-hidden">
          <Star className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10" />
          <h3 className="font-bold text-white/70 uppercase tracking-widest text-xs mb-1">Top Stylist (Rating)</h3>
          <p className="text-2xl font-black">{topStaff.name || 'Priya Sharma'}</p>
          <div className="mt-4 inline-flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-xl font-bold text-sm backdrop-blur-sm">
            {topStaff.rating || '4.9'} <Star className="w-4 h-4 fill-white" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-3xl shadow-lg shadow-green-500/20 text-white relative overflow-hidden">
          <CheckCircle className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10" />
          <h3 className="font-bold text-white/70 uppercase tracking-widest text-xs mb-1">Most Punctual</h3>
          <p className="text-2xl font-black">Sneha Kapoor</p>
          <div className="mt-4 inline-flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-xl font-bold text-sm backdrop-blur-sm">
            100% On-Time
          </div>
        </div>
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-3xl shadow-lg shadow-rose-500/20 text-white relative overflow-hidden">
          <ShoppingCart className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10" />
          <h3 className="font-bold text-white/70 uppercase tracking-widest text-xs mb-1">Highest Revenue</h3>
          <p className="text-2xl font-black">Priya Sharma</p>
          <div className="mt-4 inline-flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-xl font-bold text-sm backdrop-blur-sm">
            ₹42,000 Generated
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-50">
          <h3 className="font-black text-charcoal">Detailed Performance Table</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-charcoal/50 text-[10px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4">Staff Member</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Revenue Gen.</th>
                <th className="px-6 py-4 text-center">Avg Rating</th>
                <th className="px-6 py-4">Overall Perf.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {staffData?.map((s, i) => (
                <tr key={s.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-black text-charcoal flex items-center gap-3">
                    <span className="w-5 text-gray-300 font-bold text-xs">{i+1}.</span>
                    <img src={`https://i.pravatar.cc/100?u=${s.name}`} className="w-8 h-8 rounded-full" />
                    {s.name}
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-charcoal/60">{s.role}</td>
                  <td className="px-6 py-4 font-black text-rose-gold">{s.revenue}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1 text-sm font-bold">
                      {s.rating} <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${s.performance === 'Excellent' ? 'bg-green-100 text-green-700' : s.performance === 'Good' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>
                      {s.performance}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// 5. ORDERS
export const ManagerOrders = ({ orders, setOrders }) => {
  const completeOrder = (id) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: 'Completed' } : o));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-black text-charcoal">Purchase Orders</h1>
        <p className="text-charcoal/50 text-sm">Manage inventory resupply orders and supplier shipments</p>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-charcoal/50 text-[10px] uppercase tracking-widest font-bold">
              <tr>
                <th className="px-6 py-4">Order ID & Date</th>
                <th className="px-6 py-4">Supplier</th>
                <th className="px-6 py-4">Items Ordered</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-black text-charcoal text-sm">{order.id}</p>
                    <p className="text-[10px] font-bold text-charcoal/40 uppercase">{order.date}</p>
                  </td>
                  <td className="px-6 py-4 font-bold text-charcoal/80 text-sm">{order.supplier}</td>
                  <td className="px-6 py-4">
                    <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 inline-block">
                      <p className="text-xs font-bold text-charcoal/70">{order.items}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-black text-charcoal">{order.amount}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === 'Completed' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-orange-50 text-orange-600 border border-orange-100'}`}>
                      {order.status === 'Completed' ? <CheckCircle className="w-3 h-3" /> : <Package className="w-3 h-3" />}
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {order.status === 'Pending' ? (
                      <button 
                        onClick={() => completeOrder(order.id)} 
                        className="px-4 py-2 bg-charcoal text-white text-xs font-bold rounded-xl hover:bg-rose-gold transition-colors inline-flex items-center gap-2"
                      >
                        Mark Received
                      </button>
                    ) : (
                      <span className="text-xs font-bold text-charcoal/30">Verified</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

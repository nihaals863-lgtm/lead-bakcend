import React, { useState } from 'react';
import { Users, AlertTriangle, MessageSquare, Award, Clock, Star, Plus, Minus, Search } from 'lucide-react';
import Modal from '../components/Modal';

const ManagerDashboard = () => {
  const [staffData, setStaffData] = useState([
    { id: 1, name: 'Alice Smith', role: 'Stylist', status: 'Present', checkIn: '09:00 AM' },
    { id: 2, name: 'Bob Wilson', role: 'Therapist', status: 'Late', checkIn: '10:15 AM' },
    { id: 3, name: 'Charlie Brown', role: 'Nail Artist', status: 'Present', checkIn: '09:30 AM' },
    { id: 4, name: 'Diana Prince', role: 'Manager', status: 'Absent', checkIn: '-' },
  ]);

  const [inventory, setInventory] = useState([
    { id: 1, item: 'Shampoo Gold', stock: 5, min: 10 },
    { id: 2, item: 'Face Cream XL', stock: 2, min: 5 },
    { id: 3, item: 'Nail Polish Red', stock: 3, min: 8 },
  ]);

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(10);

  const toggleAttendance = (id) => {
    setStaffData(staffData.map(staff => {
      if (staff.id === id) {
        const newStatus = staff.status === 'Present' ? 'Absent' : 'Present';
        return { ...staff, status: newStatus, checkIn: newStatus === 'Present' ? '12:00 PM' : '-' };
      }
      return staff;
    }));
  };

  const updateStock = (id, amount) => {
    setInventory(inventory.map(item => {
      if (item.id === id) {
        return { ...item, stock: Math.max(0, item.stock + amount) };
      }
      return item;
    }));
  };

  const handleOrder = (item) => {
    setSelectedItem(item);
    setOrderQuantity(item.min * 2);
    setIsOrderModalOpen(true);
  };

  const submitOrder = () => {
    updateStock(selectedItem.id, orderQuantity);
    setIsOrderModalOpen(false);
    alert(`Successfully ordered ${orderQuantity} units of ${selectedItem.item}!`);
  };

  const customerFeedback = [
    { customer: 'Sarah Connor', rating: 5, comment: 'Alice was amazing! Best haircut ever.', staff: 'Alice Smith' },
    { customer: 'John Wick', rating: 4, comment: 'Great service, but had to wait 10 mins.', staff: 'Bob Wilson' },
    { customer: 'Emma Stone', rating: 5, comment: 'Loved the nail art, Charlie is so talented.', staff: 'Charlie Brown' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-charcoal">Manager Dashboard</h1>
        <p className="text-charcoal/60">Manage operations, staff, and inventory efficiently.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-rose-gold/10 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-rose-gold/10 text-rose-gold rounded-2xl flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-charcoal">4.8</p>
            <p className="text-xs text-charcoal/40 uppercase font-bold tracking-wider">Avg Feedback</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-rose-gold/10 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-rose-gold/10 text-rose-gold rounded-2xl flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-charcoal">Alice S.</p>
            <p className="text-xs text-charcoal/40 uppercase font-bold tracking-wider">Top Performer</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-rose-gold/10 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-rose-gold/10 text-rose-gold rounded-2xl flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-charcoal">98%</p>
            <p className="text-xs text-charcoal/40 uppercase font-bold tracking-wider">Punctuality</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-rose-gold/10 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-rose-gold/10 text-rose-gold rounded-2xl flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-charcoal">{staffData.filter(s => s.status === 'Present').length}</p>
            <p className="text-xs text-charcoal/40 uppercase font-bold tracking-wider">Active Staff</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Staff Attendance */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-rose-gold/10 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-rose-gold/10 flex justify-between items-center bg-rose-gold/5">
            <h3 className="font-bold text-charcoal flex items-center gap-2">
              <Users className="w-5 h-5 text-rose-gold" /> Staff Attendance
            </h3>
            <button onClick={() => alert('Loading full staff list...')} className="text-sm text-rose-gold font-bold hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-charcoal/40 text-xs uppercase font-bold">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Check-in</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {staffData.map((staff) => (
                  <tr key={staff.id} className="hover:bg-rose-gold/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={`https://i.pravatar.cc/100?u=${staff.name}`} className="w-8 h-8 rounded-full" alt="" />
                        <div>
                          <span className="font-semibold text-charcoal block">{staff.name}</span>
                          <span className="text-xs text-charcoal/50">{staff.role}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${
                        staff.status === 'Present' ? 'bg-green-100 text-green-600' : 
                        staff.status === 'Absent' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                      }`}>
                        {staff.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-charcoal">{staff.checkIn}</td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => toggleAttendance(staff.id)}
                        className="px-3 py-1.5 border border-gray-200 text-xs font-bold rounded-lg hover:border-rose-gold hover:text-rose-gold transition-all"
                      >
                        Toggle Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Inventory Alerts */}
        <div className="bg-white rounded-3xl border border-rose-gold/10 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-charcoal flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-gold" /> Low Stock Alerts
            </h3>
          </div>
          <div className="space-y-4">
            {inventory.filter(i => i.stock <= i.min).map((item) => (
              <div key={item.id} className="p-4 bg-rose-gold/5 rounded-2xl border border-rose-gold/10 group transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-charcoal">{item.item}</p>
                    <p className="text-xs text-red-500 font-bold uppercase tracking-widest">Only {item.stock} left (Min: {item.min})</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-100 px-2 py-1">
                    <button onClick={() => updateStock(item.id, -1)} className="p-1 hover:text-rose-gold"><Minus className="w-3 h-3" /></button>
                    <span className="text-sm font-bold w-6 text-center">{item.stock}</span>
                    <button onClick={() => updateStock(item.id, 1)} className="p-1 hover:text-rose-gold"><Plus className="w-3 h-3" /></button>
                  </div>
                  <button onClick={() => handleOrder(item)} className="px-4 py-2 bg-rose-gold text-white text-xs font-bold rounded-xl hover:bg-purple-800 transition-colors flex-1">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
            {inventory.filter(i => i.stock <= i.min).length === 0 && (
              <div className="text-center text-charcoal/40 py-8">
                <p>All stock levels are healthy.</p>
              </div>
            )}
          </div>
          <button onClick={() => alert('Generating full inventory report...')} className="w-full mt-6 py-3 bg-charcoal text-white rounded-2xl font-bold text-sm hover:bg-charcoal-light transition-all">Full Inventory Report</button>
        </div>
      </div>

      {/* Customer Feedback List */}
      <div className="bg-white rounded-3xl border border-rose-gold/10 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-rose-gold/10 flex justify-between items-center bg-rose-gold/5">
          <h3 className="font-bold text-charcoal flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-rose-gold" /> Recent Customer Feedback
          </h3>
          <button onClick={() => alert('Opening all feedback history...')} className="text-sm text-rose-gold font-bold hover:underline">View All</button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerFeedback.map((feedback, i) => (
              <div key={i} className="p-5 rounded-2xl border border-gray-100 hover:border-rose-gold/30 transition-colors shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <img src={`https://i.pravatar.cc/100?u=${feedback.customer}`} className="w-10 h-10 rounded-full" alt="" />
                    <div>
                      <p className="font-bold text-charcoal text-sm">{feedback.customer}</p>
                      <p className="text-xs text-charcoal/50">with {feedback.staff}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className={`w-3.5 h-3.5 ${idx < feedback.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-charcoal/70 italic">"{feedback.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <Modal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} title="Order Inventory">
        {selectedItem && (
          <div className="space-y-6">
            <div className="bg-rose-gold/5 p-4 rounded-xl border border-rose-gold/10">
              <p className="text-sm text-charcoal/60 uppercase tracking-widest font-bold mb-1">Product</p>
              <p className="text-xl font-black text-charcoal">{selectedItem.item}</p>
              <p className="text-sm text-red-500 mt-1">Current Stock: {selectedItem.stock} (Min required: {selectedItem.min})</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-charcoal">Quantity to Order</label>
              <input 
                type="number" 
                value={orderQuantity}
                onChange={(e) => setOrderQuantity(parseInt(e.target.value) || 0)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold"
              />
            </div>

            <button 
              onClick={submitOrder}
              className="w-full py-4 bg-rose-gold text-white rounded-xl font-bold hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20"
            >
              Confirm Order
            </button>
          </div>
        )}
      </Modal>

    </div>
  );
};

export default ManagerDashboard;

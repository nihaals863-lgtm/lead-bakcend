import React, { useState } from 'react';
import { Calendar as CalendarIcon, Plus, UserPlus, CreditCard, Clock, User, Scissors, Tag, DollarSign, CheckCircle } from 'lucide-react';
import Modal from '../components/Modal';

const ReceptionistDashboard = ({ appointments, setAppointments, services = [] }) => {
  const defaultPrice = services.length > 0 ? services[0].price : 0;
  
  const [isNewBookingModalOpen, setIsNewBookingModalOpen] = useState(false);
  const [newBooking, setNewBooking] = useState({ client: '', phone: '', date: '', service: services.length > 0 ? services[0].name : '', time: '10:00 AM', staff: 'Alice' });

  // POS State
  const [posData, setPosData] = useState({ servicePrice: defaultPrice, discount: 0, paymentMethod: 'Card' });

  const toggleStatus = (id, newStatus) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: newStatus } : apt
    ));
    alert(`Appointment status updated to ${newStatus}.`);
  };

  const handleAddBooking = (e) => {
    e.preventDefault();
    if (!newBooking.client) return alert('Client name is required!');
    
    setAppointments([...appointments, {
      id: Date.now(),
      time: newBooking.time,
      client: newBooking.client,
      service: newBooking.service,
      staff: newBooking.staff,
      status: 'Pending'
    }]);
    
    setIsNewBookingModalOpen(false);
    setNewBooking({ client: '', service: 'Haircut', time: '10:00 AM', staff: 'Alice' });
    alert('New booking added successfully!');
  };

  const handleServiceChange = (e) => {
    const price = parseInt(e.target.value);
    setPosData({ ...posData, servicePrice: price });
  };

  const handleDiscountChange = (e) => {
    const discount = parseInt(e.target.value) || 0;
    setPosData({ ...posData, discount: Math.min(100, Math.max(0, discount)) });
  };

  const calculateTotal = () => {
    const subtotal = posData.servicePrice;
    const discountAmount = (subtotal * posData.discount) / 100;
    return subtotal - discountAmount;
  };

  const handleGenerateBill = () => {
    alert(`Bill generated for $${calculateTotal().toFixed(2)} via ${posData.paymentMethod}.`);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-charcoal">Receptionist Dashboard</h1>
          <p className="text-charcoal/60">Manage bookings, check-ins, and fast billing.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => setIsNewBookingModalOpen(true)}
            className="flex items-center gap-2 px-5 py-3 bg-rose-gold text-white rounded-2xl font-bold hover:bg-purple-800 transition-all shadow-xl shadow-rose-gold/20"
          >
            <Plus className="w-5 h-5" /> New Appointment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Appointments Calendar View */}
        <div className="lg:col-span-7 bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm flex flex-col">
          <div className="p-5 lg:p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 className="font-black text-charcoal flex items-center gap-2 text-sm lg:text-base">
              <CalendarIcon className="w-5 h-5 text-rose-gold" /> Today's Pipeline
            </h3>
            <span className="text-[10px] font-black text-rose-gold uppercase tracking-widest bg-rose-gold/10 px-3 py-1 rounded-full">
              {appointments.length} Total
            </span>
          </div>
          <div className="p-4 lg:p-6 space-y-4 flex-1">
            {appointments.map((apt) => (
              <div key={apt.id} className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6 p-4 rounded-2xl border border-gray-100 hover:border-rose-gold/30 transition-all group shadow-sm hover:shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between sm:w-20 sm:text-center sm:border-r sm:border-gray-100 sm:pr-6 shrink-0">
                  <div className="flex sm:flex-col items-baseline sm:items-center gap-2 sm:gap-0">
                    <p className="text-lg lg:text-xl font-black text-charcoal leading-none">{apt.time.split(' ')[0]}</p>
                    <p className="text-[10px] text-charcoal/40 font-black uppercase tracking-widest">{apt.time.split(' ')[1]}</p>
                  </div>
                  <div className="sm:hidden">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      apt.status === 'Confirmed' || apt.status === 'Completed' ? 'bg-blue-100 text-blue-600' : 
                      apt.status === 'In-Progress' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img src={`https://i.pravatar.cc/100?u=${apt.client}`} className="w-12 h-12 rounded-xl border border-gray-100 object-cover" alt="" />
                    <div>
                      <p className="font-black text-charcoal group-hover:text-rose-gold transition-colors">{apt.client}</p>
                      <p className="text-xs font-bold text-charcoal/40">{apt.service} <span className="mx-1">•</span> <span className="text-rose-gold/70">@{apt.staff}</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                    <div className="hidden sm:block">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        apt.status === 'Confirmed' || apt.status === 'Completed' ? 'bg-blue-100 text-blue-600' : 
                        apt.status === 'In-Progress' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {apt.status}
                      </span>
                    </div>
                    
                    <div className="flex gap-2 w-full sm:w-auto">
                      {(apt.status === 'Pending' || apt.status === 'Confirmed') && (
                        <button onClick={() => toggleStatus(apt.id, 'In-Progress')} className="flex-1 sm:flex-none p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" /> <span className="sm:hidden text-[10px] font-black uppercase tracking-widest">In</span>
                        </button>
                      )}
                      {apt.status === 'In-Progress' && (
                        <button onClick={() => toggleStatus(apt.id, 'Completed')} className="flex-1 sm:flex-none p-2 bg-rose-gold/10 text-rose-gold rounded-lg hover:bg-rose-gold hover:text-white transition-all flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4" /> <span className="sm:hidden text-[10px] font-black uppercase tracking-widest">Out</span>
                        </button>
                      )}
                      <button className="flex-1 sm:flex-none p-2 bg-gray-50 text-charcoal/40 rounded-lg hover:bg-charcoal hover:text-white transition-all">
                        <Tag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {appointments.length === 0 && (
              <div className="text-center py-12">
                <CalendarIcon className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                <p className="text-charcoal/40 font-bold">No appointments scheduled for today.</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick POS Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden relative group">
            <div className="p-5 lg:p-8 relative z-10">
              <h3 className="text-xl lg:text-2xl font-black text-charcoal mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                <CreditCard className="w-6 h-6 text-rose-gold" /> Quick POS Billing
              </h3>
              
              <div className="space-y-5">
                {/* Client & Staff */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-charcoal/50 tracking-widest ml-1">Client Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                      <input type="text" placeholder="Search client..." className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-charcoal/50 tracking-widest ml-1">Staff Member</label>
                    <div className="relative">
                      <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                      <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 transition-all appearance-none cursor-pointer">
                        <option>Alice Smith</option>
                        <option>Bob Wilson</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Service & Discount */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-charcoal/50 tracking-widest ml-1">Select Service</label>
                    <select 
                      value={posData.servicePrice}
                      onChange={handleServiceChange}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 px-4 text-sm font-bold outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 transition-all appearance-none cursor-pointer"
                    >
                      {services.map(s => (
                        <option key={s.id} value={s.price}>{s.name} (₹{s.price})</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-charcoal/50 tracking-widest ml-1">Discount (%)</label>
                    <div className="relative">
                      <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                      <input 
                        type="number" 
                        value={posData.discount || ''}
                        onChange={handleDiscountChange}
                        placeholder="0" 
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 transition-all" 
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-charcoal/50 tracking-widest ml-1">Payment Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Card', 'Cash', 'UPI'].map(method => (
                      <button 
                        key={method}
                        onClick={() => setPosData({ ...posData, paymentMethod: method })}
                        className={`py-3 rounded-xl text-xs font-black transition-all border ${
                          posData.paymentMethod === method 
                            ? 'border-rose-gold bg-rose-gold text-white shadow-lg shadow-rose-gold/20' 
                            : 'border-gray-100 bg-white text-charcoal/60 hover:border-rose-gold/30'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100 mt-6 space-y-3">
                   <div className="flex justify-between text-xs font-bold text-charcoal/40 uppercase tracking-widest">
                     <span>Subtotal</span>
                     <span className="text-charcoal">₹{Number(posData.servicePrice).toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold text-green-600 uppercase tracking-widest">
                     <span>Discount ({posData.discount || 0}%)</span>
                     <span>- ₹{((Number(posData.servicePrice) * (posData.discount || 0)) / 100).toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                   </div>
                   <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-2">
                     <span className="text-sm font-black text-charcoal uppercase tracking-widest">Total Amount</span>
                     <span className="text-2xl font-black text-rose-gold">₹{calculateTotal().toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                   </div>
                </div>
                
                <button 
                  onClick={handleGenerateBill}
                  className="w-full py-4.5 bg-charcoal text-white rounded-[1.5rem] font-black text-base hover:bg-black transition-all transform hover:-translate-y-1 shadow-2xl shadow-charcoal/20 flex justify-center items-center gap-3 mt-4"
                >
                  <CreditCard className="w-5 h-5" /> Generate & Print Bill
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Booking Modal */}
      <Modal isOpen={isNewBookingModalOpen} onClose={() => setIsNewBookingModalOpen(false)} title="Quick Reservation">
        <form onSubmit={handleAddBooking} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Client Name*</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                <input 
                  type="text" 
                  value={newBooking.client}
                  placeholder="e.g. Aditi Sharma"
                  onChange={(e) => setNewBooking({ ...newBooking, client: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 font-bold text-sm"
                  required
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Phone Number*</label>
              <div className="relative">
                <Plus className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                <input 
                  type="tel" 
                  value={newBooking.phone}
                  placeholder="+91 98765 00000"
                  onChange={(e) => setNewBooking({ ...newBooking, phone: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 pl-11 pr-4 outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 font-bold text-sm"
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Service Type</label>
              <select 
                value={newBooking.service}
                onChange={(e) => setNewBooking({ ...newBooking, service: e.target.value })}
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 px-4 outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 font-bold text-sm appearance-none cursor-pointer"
              >
                {services.map(s => (
                  <option key={s.id} value={s.name}>{s.name} (₹{s.price})</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Preferred Staff</label>
              <select 
                value={newBooking.staff}
                onChange={(e) => setNewBooking({ ...newBooking, staff: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 px-4 outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 font-bold text-sm appearance-none cursor-pointer"
              >
                <option>Priya Sharma</option>
                <option>Rahul Verma</option>
                <option>Sneha Kapoor</option>
                <option>Vikram Singh</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Date</label>
              <input 
                type="date" 
                value={newBooking.date}
                onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 px-4 outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 font-bold text-sm"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Preferred Time</label>
              <select 
                value={newBooking.time}
                onChange={(e) => setNewBooking({ ...newBooking, time: e.target.value })}
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 px-4 outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 font-bold text-sm appearance-none cursor-pointer"
              >
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>01:00 PM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
                <option>05:00 PM</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full py-4.5 bg-rose-gold text-white rounded-2xl font-black text-base hover:bg-purple-800 transition-all transform hover:-translate-y-1 shadow-xl shadow-rose-gold/20 mt-2 flex items-center justify-center gap-2">
             <CheckCircle className="w-5 h-5" /> Confirm Reservation
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ReceptionistDashboard;

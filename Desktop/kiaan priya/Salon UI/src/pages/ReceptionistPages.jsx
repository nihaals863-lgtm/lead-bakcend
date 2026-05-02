import React, { useState } from 'react';
import { Calendar as CalendarIcon, User, Scissors, Tag, DollarSign, CheckCircle, Search, Mail, Phone } from 'lucide-react';
import Modal from '../components/Modal';

// 1. APPOINTMENTS CALENDAR
export const ReceptionistAppointments = ({ appointments, setAppointments }) => {
  const [selectedApt, setSelectedApt] = useState(null);

  const toggleStatus = (id, newStatus) => {
    setAppointments(appointments.map(a => a.id === id ? { ...a, status: newStatus } : a));
    setSelectedApt(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-black text-charcoal">Appointments Calendar</h1>
        <p className="text-charcoal/50 text-sm">Manage daily bookings, client check-ins, and schedules</p>
      </div>
      
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-charcoal/50 text-[10px] uppercase font-black tracking-[0.2em]">
              <tr>
                <th className="px-6 py-5">Date & Time</th>
                <th className="px-6 py-5">Client Details</th>
                <th className="px-6 py-5">Service & Staff</th>
                <th className="px-6 py-5 text-center">Status</th>
                <th className="px-6 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {appointments.map((apt) => (
                <tr key={apt.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="font-black text-charcoal">{apt.time}</p>
                    <p className="text-[10px] font-black text-charcoal/30 uppercase">{apt.date}</p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-gold/10 text-rose-gold rounded-xl flex items-center justify-center font-black">
                        {apt.client.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-charcoal leading-none mb-1">{apt.client}</p>
                        <p className="text-[10px] font-black text-charcoal/30">{apt.phone || 'No phone'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="font-black text-charcoal text-sm">{apt.service}</p>
                    <p className="text-[10px] font-black text-charcoal/30">with <span className="text-rose-gold">{apt.staff}</span></p>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      apt.status === 'Confirmed' || apt.status === 'Completed' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 
                      apt.status === 'In-Progress' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 
                      'bg-gray-50 text-gray-500 border border-gray-200'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button onClick={() => setSelectedApt(apt)} className="px-5 py-2.5 bg-white border border-gray-100 hover:border-rose-gold hover:text-rose-gold text-charcoal text-xs font-black rounded-xl transition-all shadow-sm">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden p-4 space-y-4">
          {appointments.map((apt) => (
            <div key={apt.id} className="p-5 rounded-3xl border border-gray-100 bg-white shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-gold/10 text-rose-gold rounded-xl flex items-center justify-center font-black">
                    {apt.client.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-charcoal leading-none mb-1">{apt.client}</p>
                    <p className="text-[10px] font-black text-charcoal/30 uppercase tracking-widest">{apt.time} • {apt.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  apt.status === 'Confirmed' || apt.status === 'Completed' ? 'bg-blue-50 text-blue-600' : 
                  apt.status === 'In-Progress' ? 'bg-orange-50 text-orange-600' : 
                  'bg-gray-50 text-gray-500'
                }`}>
                  {apt.status}
                </span>
              </div>
              
              <div className="bg-gray-50/80 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <p className="text-[9px] font-black text-charcoal/30 uppercase tracking-widest mb-1">Service</p>
                  <p className="text-sm font-black text-charcoal">{apt.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-black text-charcoal/30 uppercase tracking-widest mb-1">Staff</p>
                  <p className="text-sm font-black text-rose-gold">{apt.staff}</p>
                </div>
              </div>

              <button 
                onClick={() => setSelectedApt(apt)}
                className="w-full py-3.5 bg-charcoal text-white rounded-2xl font-black text-sm hover:bg-black transition-all"
              >
                Manage Appointment
              </button>
            </div>
          ))}
          {appointments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-charcoal/30 font-black">No appointments today.</p>
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={!!selectedApt} onClose={() => setSelectedApt(null)} title="Manage Appointment">
        {selectedApt && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <img src={`https://i.pravatar.cc/150?u=${selectedApt.client}`} className="w-16 h-16 rounded-xl object-cover" />
              <div>
                <h3 className="text-lg font-black text-charcoal">{selectedApt.client}</h3>
                <p className="text-sm font-bold text-rose-gold">{selectedApt.phone}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <p className="text-[10px] uppercase font-bold text-charcoal/40 tracking-widest">Service & Staff</p>
                <p className="font-bold text-charcoal text-sm mt-1">{selectedApt.service}</p>
                <p className="text-xs text-charcoal/60">w/ {selectedApt.staff}</p>
              </div>
              <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                <p className="text-[10px] uppercase font-bold text-charcoal/40 tracking-widest">Schedule</p>
                <p className="font-bold text-charcoal text-sm mt-1">{selectedApt.date}</p>
                <p className="text-xs text-charcoal/60">{selectedApt.time}</p>
              </div>
            </div>

            <div className="bg-yellow-50/50 p-4 rounded-xl border border-yellow-100">
              <p className="text-[10px] uppercase font-bold text-yellow-600/60 tracking-widest flex items-center gap-1"><Tag className="w-3 h-3" /> Special Notes</p>
              <p className="text-sm font-medium text-yellow-800 mt-1">{selectedApt.notes || 'No special notes provided.'}</p>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
               {selectedApt.status !== 'In-Progress' && selectedApt.status !== 'Completed' && (
                 <button onClick={() => toggleStatus(selectedApt.id, 'In-Progress')} className="w-full py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-md shadow-orange-500/20">Check In Client</button>
               )}
               {selectedApt.status === 'In-Progress' && (
                 <button onClick={() => toggleStatus(selectedApt.id, 'Completed')} className="w-full py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-md shadow-green-500/20">Mark as Completed</button>
               )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

// 2. NEW BOOKING
export const ReceptionistNewBooking = ({ appointments, setAppointments, services = [] }) => {
  const [booking, setBooking] = useState({ name: '', phone: '', email: '', service: services.length > 0 ? services[0].name : '', date: '', time: '', notes: '' });
  
  const submitBooking = (e) => {
    e.preventDefault();
    const newApt = {
      id: Date.now(),
      date: booking.date,
      time: booking.time,
      client: booking.name,
      phone: booking.phone,
      service: booking.service,
      staff: 'TBD',
      status: 'Confirmed',
      notes: booking.notes
    };
    setAppointments([...appointments, newApt]);
    alert(`Successfully booked ${booking.service} for ${booking.name}!`);
    setBooking({ name: '', phone: '', email: '', service: services.length > 0 ? services[0].name : '', date: '', time: '', notes: '' });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-3xl">
      <div>
        <h1 className="text-2xl font-black text-charcoal">Create New Booking</h1>
        <p className="text-charcoal/50 text-sm">Schedule a new appointment and save client details</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <form onSubmit={submitBooking} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">Client Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-charcoal/30" />
                <input required type="text" placeholder="e.g. Aditi Sharma" value={booking.name} onChange={e => setBooking({...booking, name: e.target.value})} className="w-full border border-gray-200 p-3 pl-12 rounded-xl outline-none focus:border-rose-gold text-sm font-bold text-charcoal transition-all"/>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-3.5 w-5 h-5 text-charcoal/30" />
                <input required type="tel" placeholder="+91 98765 00000" value={booking.phone} onChange={e => setBooking({...booking, phone: e.target.value})} className="w-full border border-gray-200 p-3 pl-12 rounded-xl outline-none focus:border-rose-gold text-sm font-bold text-charcoal transition-all"/>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">Email Address (Optional)</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-charcoal/30" />
                <input type="email" placeholder="client@example.com" value={booking.email} onChange={e => setBooking({...booking, email: e.target.value})} className="w-full border border-gray-200 p-3 pl-12 rounded-xl outline-none focus:border-rose-gold text-sm font-bold text-charcoal transition-all"/>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">Select Service</label>
              <div className="relative">
                <Scissors className="absolute left-4 top-3.5 w-5 h-5 text-charcoal/30" />
                <select required value={booking.service} onChange={e => setBooking({...booking, service: e.target.value})} className="w-full border border-gray-200 p-3 pl-12 rounded-xl outline-none focus:border-rose-gold text-sm font-bold text-charcoal transition-all bg-white">
                  {services.map(s => (
                    <option key={s.id} value={s.name}>{s.name} (₹{s.price})</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">Date</label>
              <div className="relative">
                <CalendarIcon className="absolute left-4 top-3.5 w-5 h-5 text-charcoal/30" />
                <input required type="date" value={booking.date} onChange={e => setBooking({...booking, date: e.target.value})} className="w-full border border-gray-200 p-3 pl-12 rounded-xl outline-none focus:border-rose-gold text-sm font-bold text-charcoal transition-all"/>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">Time</label>
              <input required type="time" value={booking.time} onChange={e => setBooking({...booking, time: e.target.value})} className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-rose-gold text-sm font-bold text-charcoal transition-all"/>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">Special Notes / Preferences</label>
            <textarea placeholder="Any allergies, specific requests, or staff preference?" value={booking.notes} onChange={e => setBooking({...booking, notes: e.target.value})} className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-rose-gold text-sm font-bold text-charcoal transition-all min-h-[100px] resize-y"></textarea>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <button type="submit" className="w-full py-4 bg-rose-gold text-white font-black rounded-xl hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20 flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" /> Confirm & Schedule Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// 3. POS BILLING
export const ReceptionistPOS = ({ services = [] }) => {
  const defaultPrice = services.length > 0 ? services[0].price : 0;
  const [pos, setPos] = useState({ servicePrice: defaultPrice, discount: 0, taxRate: 18 }); // 18% GST default
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  
  const subtotal = pos.servicePrice;
  const discountAmount = subtotal * (pos.discount / 100);
  const afterDiscount = subtotal - discountAmount;
  const taxAmount = afterDiscount * (pos.taxRate / 100);
  const total = afterDiscount + taxAmount;

  const generateBill = () => {
    setIsReceiptOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-2xl">
      <div>
        <h1 className="text-2xl font-black text-charcoal">POS & Billing</h1>
        <p className="text-charcoal/50 text-sm">Generate digital invoices and process payments</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">Select Completed Service</label>
          <div className="relative">
            <Scissors className="absolute left-4 top-3.5 w-5 h-5 text-charcoal/30" />
            <select value={pos.servicePrice} onChange={e => setPos({...pos, servicePrice: Number(e.target.value)})} className="w-full border border-gray-200 p-3 pl-12 rounded-xl outline-none focus:border-rose-gold text-sm font-bold text-charcoal transition-all bg-white">
              {services.map(s => (
                <option key={s.id} value={s.price}>{s.name} (₹{s.price})</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">Apply Discount (%)</label>
            <div className="relative">
              <Tag className="absolute left-4 top-3.5 w-5 h-5 text-charcoal/30" />
              <input type="number" placeholder="0" min="0" max="100" value={pos.discount || ''} onChange={e => setPos({...pos, discount: Number(e.target.value)})} className="w-full border border-gray-200 p-3 pl-12 rounded-xl outline-none focus:border-rose-gold text-sm font-bold text-charcoal transition-all"/>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">Tax/GST (%)</label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-3.5 w-5 h-5 text-charcoal/30" />
              <input type="number" placeholder="18" value={pos.taxRate || ''} onChange={e => setPos({...pos, taxRate: Number(e.target.value)})} className="w-full border border-gray-200 p-3 pl-12 rounded-xl outline-none focus:border-rose-gold text-sm font-bold text-charcoal transition-all"/>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-24 h-24 bg-rose-gold/5 rounded-bl-full pointer-events-none" />
           <div className="flex justify-between text-sm font-bold text-charcoal/70"><span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
           <div className="flex justify-between text-sm font-bold text-green-600"><span>Discount ({pos.discount}%)</span><span>- ₹{discountAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}</span></div>
           <div className="flex justify-between text-sm font-bold text-charcoal/70"><span>Tax/GST ({pos.taxRate}%)</span><span>+ ₹{taxAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}</span></div>
           <div className="flex justify-between text-2xl font-black text-rose-gold mt-4 pt-4 border-t border-gray-200 border-dashed">
             <span>Total Due</span>
             <span>₹{total.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
           </div>
        </div>

        <button onClick={generateBill} className="w-full py-4 bg-charcoal text-white font-black rounded-xl shadow-lg shadow-charcoal/20 hover:bg-rose-gold transition-all flex items-center justify-center gap-2">
          <CheckCircle className="w-5 h-5"/> Collect Payment & Generate Bill
        </button>
      </div>

      <Modal isOpen={isReceiptOpen} onClose={() => setIsReceiptOpen(false)} title="Invoice Generated">
        <div className="space-y-6 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-charcoal">Payment Successful!</h2>
            <p className="text-charcoal/60 mt-2">Digital invoice has been sent to the client.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
             <p className="text-xs uppercase font-bold text-charcoal/50 tracking-widest mb-1">Amount Paid</p>
             <p className="text-3xl font-black text-rose-gold">₹{total.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setIsReceiptOpen(false)} className="w-full py-3 bg-white border border-gray-200 text-charcoal font-bold rounded-xl hover:bg-gray-50 transition-all">Print Receipt</button>
            <button onClick={() => setIsReceiptOpen(false)} className="w-full py-3 bg-rose-gold text-white font-bold rounded-xl hover:bg-purple-800 transition-all shadow-md shadow-rose-gold/20">Done</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// 4. CUSTOMERS
export const ReceptionistCustomers = ({ customers }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-charcoal">Customer Database</h1>
          <p className="text-charcoal/50 text-sm">Manage VIPs, view history, and customer details</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-3.5 w-4 h-4 text-charcoal/40" />
          <input type="text" placeholder="Search customers..." className="w-full border border-gray-200 p-3 pl-10 rounded-xl outline-none focus:border-rose-gold text-sm font-medium" />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-charcoal/50 text-[10px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4">Customer Details</th>
                <th className="px-6 py-4">Contact Info</th>
                <th className="px-6 py-4 text-center">Visits</th>
                <th className="px-6 py-4">Total Spent</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {customers.map((c, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={`https://i.pravatar.cc/150?u=${c.name}`} className="w-10 h-10 rounded-xl object-cover ring-2 ring-gray-50" />
                      <div>
                        <p className="font-black text-charcoal">{c.name}</p>
                        <p className="text-[10px] font-bold text-charcoal/40">Last visit: {c.lastVisit}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 text-xs font-bold text-charcoal/70">
                      <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-charcoal/40"/> {c.phone}</span>
                      <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-charcoal/40"/> {c.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center font-black text-charcoal mx-auto">
                      {c.totalVisits}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-black text-rose-gold text-sm">
                    {c.totalSpent}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${c.status === 'VIP' ? 'bg-purple-100 text-purple-700 border border-purple-200' : c.status === 'New' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {c.status}
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

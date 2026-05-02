import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, User, Star, DollarSign, Clock, FileText, CheckCircle, 
  PlayCircle, StarHalf, TrendingUp, Scissors, Award, AlertTriangle, Plus, Minus 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const ArtistDashboard = ({ appointments, setAppointments, feedback, inventory, setInventory }) => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const artistAppointments = appointments || [];
  const artistFeedback = feedback || [];

  const updateStock = (id, amount) => {
    if (setInventory) {
      setInventory(prev => prev.map(item => {
        if (item.id === id) {
          return { ...item, stock: Math.max(0, item.stock + amount) };
        }
        return item;
      }));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    if (setAppointments) {
      setAppointments(appointments.map(apt => 
        apt.id === id ? { ...apt, status: newStatus } : apt
      ));
    }
  };

  const openFeedback = (item) => {
    setSelectedFeedback(item);
    setIsFeedbackModalOpen(true);
  };

  const avgRating = artistFeedback.length > 0 
    ? (artistFeedback.reduce((acc, curr) => acc + curr.rating, 0) / artistFeedback.length).toFixed(1)
    : "0.0";
    
  const completedServices = artistAppointments.filter(a => a.status === 'Completed').length;

  return (
    <div className="animate-in fade-in duration-500 pb-6">
      
      {/* Premium Welcome Banner */}
      <div className="relative bg-gradient-to-br from-charcoal to-purple-900 rounded-3xl p-6 md:p-8 mb-4 overflow-hidden shadow-2xl shadow-purple-900/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-10 w-40 h-40 bg-rose-gold/20 rounded-full blur-2xl translate-y-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">Good morning, Priya! ✨</h1>
            <p className="text-white/70 font-medium text-lg">You have {artistAppointments.filter(a => a.status !== 'Completed').length} services left today. Let's make them shine!</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-center gap-5 w-full md:w-auto">
            <div className="p-3 bg-rose-gold rounded-xl">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Today's Commission</p>
              <p className="text-3xl font-black text-white">₹4,250</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* COLUMN 1: Profile & Stats (Left) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Earnings Card */}
          <div className="bg-gradient-to-br from-charcoal to-purple-900 rounded-2xl p-5 text-white shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md">
                <DollarSign className="w-5 h-5 text-rose-gold" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Today's Earnings</p>
                <p className="text-2xl font-black text-white">₹4,250</p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <div className="flex justify-between items-center text-[10px] font-bold text-white/40 mb-2">
                <span>DAILY TARGET</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-rose-gold h-1.5 rounded-full w-[85%] shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-sm font-black text-charcoal uppercase tracking-widest border-b border-gray-50 pb-3">Performance</h3>
            <div className="flex items-center gap-4 p-3 bg-yellow-50/50 rounded-xl border border-yellow-100">
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              <div>
                <p className="text-xl font-black text-charcoal">{avgRating}</p>
                <p className="text-[10px] font-bold text-charcoal/40 uppercase">Avg Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-rose-gold/5 rounded-xl border border-rose-gold/10">
              <Scissors className="w-8 h-8 text-rose-gold" />
              <div>
                <p className="text-xl font-black text-charcoal">{completedServices}</p>
                <p className="text-[10px] font-bold text-charcoal/40 uppercase">Services Done</p>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="text-sm font-black text-charcoal uppercase tracking-widest border-b border-gray-50 pb-3 mb-4">Actions</h3>
            <Link to="/dashboard/artist/schedule" className="w-full py-3 bg-gray-50 hover:bg-rose-gold hover:text-white text-charcoal text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 mb-3">
              <CalendarIcon className="w-4 h-4" /> Full Schedule
            </Link>
            <Link to="/dashboard/artist/earnings" className="w-full py-3 bg-gray-50 hover:bg-rose-gold hover:text-white text-charcoal text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2">
              <TrendingUp className="w-4 h-4" /> View Earnings
            </Link>
          </div>
        </div>

        {/* COLUMN 2: Pipeline (Center) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-xl font-black text-charcoal flex items-center gap-2">
              <Clock className="w-5 h-5 text-rose-gold" /> Today's Pipeline
            </h2>
            <span className="bg-rose-gold/10 text-rose-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              {artistAppointments.length} Bookings
            </span>
          </div>

          <div className="space-y-4">
            {artistAppointments.map((apt) => (
              <div key={apt.id} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  apt.status === 'Completed' ? 'bg-green-500' : 
                  apt.status === 'In-Progress' ? 'bg-orange-500' : 'bg-rose-gold'
                }`}></div>
                
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={`https://i.pravatar.cc/100?u=${apt.client}`} alt={apt.client} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <p className="text-lg font-black text-charcoal leading-none mb-1">{apt.time}</p>
                      <p className="text-sm font-bold text-charcoal/60">{apt.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 md:px-6">
                    <p className="font-black text-rose-gold text-base">{apt.service}</p>
                    {apt.notes && <p className="text-[10px] text-charcoal/40 italic line-clamp-1">"{apt.notes}"</p>}
                  </div>

                  <div className="w-full md:w-32">
                    {(apt.status === 'Upcoming' || apt.status === 'Pending' || apt.status === 'Confirmed') && (
                      <button onClick={() => handleStatusChange(apt.id, 'In-Progress')} className="w-full py-2 bg-rose-gold text-white rounded-lg font-bold text-[10px] hover:bg-purple-800 transition-all flex items-center justify-center gap-1.5">
                        <PlayCircle className="w-3 h-3" /> START
                      </button>
                    )}
                    {apt.status === 'In-Progress' && (
                      <button onClick={() => handleStatusChange(apt.id, 'Completed')} className="w-full py-2 bg-green-600 text-white rounded-lg font-bold text-[10px] hover:bg-green-700 transition-all flex items-center justify-center gap-1.5">
                        <CheckCircle className="w-3 h-3" /> FINISH
                      </button>
                    )}
                    {apt.status === 'Completed' && (
                      <div className="text-center py-2 bg-gray-50 rounded-lg text-green-600 text-[10px] font-bold">COMPLETED</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 3: Inventory & Feedback (Right) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Inventory Alerts */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-sm font-black text-charcoal uppercase tracking-widest border-b border-gray-50 pb-3 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-gold" /> Stock Alerts
            </h3>
            <div className="space-y-3">
              {(inventory || []).filter(i => i.stock <= i.min).map((item) => (
                <div key={item.id} className="p-3 bg-rose-gold/5 rounded-xl border border-rose-gold/10">
                  <p className="font-bold text-charcoal text-[11px] mb-1">{item.item}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest">{item.stock} left</p>
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-100 px-1.5 py-0.5">
                      <button onClick={() => updateStock(item.id, -1)} className="p-0.5 hover:text-rose-gold"><Minus className="w-2.5 h-2.5" /></button>
                      <span className="text-[10px] font-bold w-4 text-center">{item.stock}</span>
                      <button onClick={() => updateStock(item.id, 1)} className="p-0.5 hover:text-rose-gold"><Plus className="w-2.5 h-2.5" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-sm font-black text-charcoal uppercase tracking-widest border-b border-gray-50 pb-3 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-rose-gold" /> Feedback
            </h3>
            <div className="space-y-4">
              {artistFeedback.slice(0, 2).map((item) => (
                <div key={item.id} className="group cursor-pointer" onClick={() => openFeedback(item)}>
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-black text-[11px] text-charcoal">{item.customer || item.client}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className={`w-2.5 h-2.5 ${idx < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-charcoal/60 italic line-clamp-2 leading-relaxed">"{item.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      <Modal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} title="Client Feedback">
        {selectedFeedback && (
          <div className="space-y-6 text-center">
            <img src={`https://i.pravatar.cc/150?u=${selectedFeedback.customer || selectedFeedback.client}`} alt="Client" className="w-24 h-24 rounded-full mx-auto shadow-lg object-cover" />
            
            <div>
              <h4 className="text-2xl font-black text-charcoal">{selectedFeedback.customer || selectedFeedback.client}</h4>
              <p className="text-xs font-bold text-rose-gold uppercase tracking-widest mt-1">{selectedFeedback.service}</p>
              <div className="flex justify-center gap-1 mt-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className={`w-5 h-5 ${idx < selectedFeedback.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
              <StarHalf className="w-6 h-6 text-rose-gold/20 mx-auto mb-2" />
              <p className="text-charcoal/80 italic leading-relaxed text-lg">"{selectedFeedback.comment}"</p>
            </div>
            
            <button onClick={() => setIsFeedbackModalOpen(false)} className="w-full py-4 bg-charcoal text-white rounded-xl font-black shadow-lg hover:bg-black transition-colors">
              Close Preview
            </button>
          </div>
        )}
      </Modal>

    </div>
  );
};

export default ArtistDashboard;

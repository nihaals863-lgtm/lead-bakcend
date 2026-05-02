import React, { useState } from 'react';
import { Clock, PlayCircle, CheckCircle, DollarSign, Star, FileText } from 'lucide-react';
import Modal from '../components/Modal';

// 1. MY SCHEDULE
export const ArtistSchedule = ({ appointments, setAppointments }) => {
  const handleStatusChange = (id, newStatus) => {
    if (setAppointments) {
      setAppointments(appointments.map(apt => apt.id === id ? { ...apt, status: newStatus } : apt));
    }
  };

  const artistAppointments = appointments || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
      <div>
        <h1 className="text-2xl font-black text-charcoal">My Schedule</h1>
        <p className="text-charcoal/50 text-sm">Manage your daily appointments and track service times</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artistAppointments.map((apt) => (
          <div key={apt.id} className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className={`absolute left-0 top-0 bottom-0 w-2 rounded-l-full ${apt.status === 'Completed' ? 'bg-green-500' : apt.status === 'In-Progress' ? 'bg-orange-500' : 'bg-rose-gold'}`}></div>
            <div className="flex justify-between items-start mb-4 pl-2">
              <div>
                <p className="text-3xl font-black text-charcoal leading-none mb-2">{apt.time}</p>
                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${apt.status === 'Completed' ? 'bg-green-100 text-green-600' : apt.status === 'In-Progress' ? 'bg-orange-100 text-orange-600' : 'bg-rose-gold/10 text-rose-gold'}`}>{apt.status}</span>
              </div>
              <img src={`https://i.pravatar.cc/100?u=${apt.client}`} className="w-14 h-14 rounded-full border-2 border-gray-50 shadow-sm object-cover" />
            </div>
            
            <div className="mb-4 pl-2">
              <p className="font-black text-xl text-charcoal">{apt.client}</p>
              <p className="font-bold text-rose-gold/80">{apt.service}</p>
            </div>
            
            {apt.notes && (
              <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100 ml-2">
                <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <FileText className="w-3 h-3" /> Notes
                </p>
                <p className="text-sm font-medium text-charcoal/80 italic">"{apt.notes}"</p>
              </div>
            )}
            
            {/* Service Progress Bar */}
            <div className="ml-2 mb-5">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mb-2">
                <span className={apt.status !== 'In-Progress' && apt.status !== 'Completed' ? 'text-rose-gold' : 'text-charcoal/30'}>Scheduled</span>
                <span className={apt.status === 'In-Progress' ? 'text-orange-500' : 'text-charcoal/30'}>In Progress</span>
                <span className={apt.status === 'Completed' ? 'text-green-500' : 'text-charcoal/30'}>Completed</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className={`h-2 rounded-full transition-all duration-700 ease-in-out ${
                  apt.status === 'Completed' ? 'w-full bg-green-500' : 
                  apt.status === 'In-Progress' ? 'w-1/2 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'w-[5%] bg-rose-gold'
                }`}></div>
              </div>
            </div>

            <div className="ml-2">
              {(apt.status === 'Upcoming' || apt.status === 'Pending' || apt.status === 'Confirmed') && (
                <button onClick={() => handleStatusChange(apt.id, 'In-Progress')} className="w-full py-4 bg-rose-gold text-white rounded-xl font-black flex justify-center gap-2 shadow-lg shadow-rose-gold/20 hover:bg-purple-800 transition-all">
                  <PlayCircle className="w-5 h-5"/> Start Service
                </button>
              )}
              {apt.status === 'In-Progress' && (
                <button onClick={() => handleStatusChange(apt.id, 'Completed')} className="w-full py-4 bg-green-600 text-white rounded-xl font-black flex justify-center gap-2 shadow-lg shadow-green-600/20 hover:bg-green-700 transition-all">
                  <CheckCircle className="w-5 h-5"/> Complete Service
                </button>
              )}
              {apt.status === 'Completed' && (
                <button disabled className="w-full py-4 bg-gray-100 text-gray-400 rounded-xl font-black flex justify-center gap-2 cursor-not-allowed">
                  <CheckCircle className="w-5 h-5"/> Finished
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 2. EARNINGS
export const ArtistEarnings = () => (
  <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
    <div>
      <h1 className="text-2xl font-black text-charcoal">My Earnings & Performance</h1>
      <p className="text-charcoal/50 text-sm">Track your commissions, tips, and service revenue</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-rose-gold text-white p-6 rounded-3xl shadow-lg shadow-rose-gold/20 text-center relative overflow-hidden">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        <DollarSign className="w-8 h-8 mx-auto mb-2 opacity-80" />
        <h3 className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Today's Revenue</h3>
        <p className="text-4xl font-black">₹4,500</p>
      </div>
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
        <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-500" />
        <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal/50 mb-2">Today's Tips</h3>
        <p className="text-4xl font-black text-charcoal">₹1,250</p>
      </div>
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
        <DollarSign className="w-8 h-8 mx-auto mb-2 text-blue-500" />
        <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal/50 mb-2">Weekly Commission</h3>
        <p className="text-4xl font-black text-charcoal">₹18,400</p>
      </div>
    </div>

    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
      <h3 className="font-black text-charcoal mb-4 border-b border-gray-100 pb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {[
          { service: 'Bridal Makeup', client: 'Aisha Khan', amount: '₹12,000', tip: '₹1,000', date: '01 May 2026' },
          { service: 'Premium Haircut', client: 'Rohan Gupta', amount: '₹2,500', tip: '₹250', date: '01 May 2026' },
          { service: 'O3+ Facial', client: 'Meera Patel', amount: '₹3,500', tip: '₹0', date: '29 Apr 2026' },
        ].map((t, i) => (
          <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
             <div>
               <p className="font-black text-charcoal">{t.service}</p>
               <p className="text-xs text-charcoal/60 mt-1">Client: {t.client} • {t.date}</p>
             </div>
             <div className="text-right">
               <p className="font-black text-rose-gold">{t.amount}</p>
               <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-1">Tip: {t.tip}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 3. FEEDBACK
export const ArtistFeedback = ({ feedback }) => {
  const artistFeedback = feedback || [];
  
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
      <div>
        <h1 className="text-2xl font-black text-charcoal">Client Feedback</h1>
        <p className="text-charcoal/50 text-sm">Read reviews and ratings from your past clients</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artistFeedback.map(f => (
          <div key={f.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4 border-b border-gray-50 pb-4">
              <div className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/150?u=${f.customer || f.client}`} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h3 className="font-black text-lg text-charcoal">{f.customer || f.client}</h3>
                  <p className="text-xs font-bold text-rose-gold/60">{f.service || 'Service Completed'}</p>
                </div>
              </div>
              <div className="flex bg-yellow-50 px-2 py-1 rounded-lg">
                {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < f.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />)}
              </div>
            </div>
            <p className="text-charcoal/80 italic text-sm leading-relaxed">"{f.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

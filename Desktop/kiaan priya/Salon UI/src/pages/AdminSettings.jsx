import React, { useState } from 'react';
import { Save, Bell, User, Scissors } from 'lucide-react';

const Field = ({ label, type = 'text', value, onChange }) => (
  <div>
    <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1.5">{label}</label>
    <input type={type} value={value} onChange={onChange}
      className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/10 text-sm font-medium text-charcoal transition-all" />
  </div>
);

const Toggle = ({ label, desc, checked, onChange }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
    <div>
      <p className="text-sm font-bold text-charcoal">{label}</p>
      <p className="text-xs text-charcoal/40">{desc}</p>
    </div>
    <button type="button" onClick={onChange} className={`relative w-11 h-6 rounded-full transition-all ${checked ? 'bg-rose-gold' : 'bg-gray-200'}`}>
      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  </div>
);

export const AdminSettings = () => {
  const userRole = localStorage.getItem('userRole') || 'admin';
  const defaultRoleLabel = userRole === 'manager' ? 'Branch Manager' : userRole === 'reception' ? 'Front Desk Receptionist' : userRole === 'artist' ? 'Senior Artist' : 'Super Admin';
  const defaultName = userRole === 'manager' ? 'Aarav Manager' : userRole === 'reception' ? 'Priya Desk' : userRole === 'artist' ? 'Kabir Style' : 'Rahul Sharma';
  
  const [profile, setProfile] = useState({ 
    fullName: defaultName, 
    email: `${userRole}@respark.com`, 
    phone: '+91 98765 43210', 
    role: defaultRoleLabel, 
    avatarUrl: `https://i.pravatar.cc/150?u=${userRole}` 
  });
  const [business, setBusiness] = useState({ salonName: 'ReSpark Luxury Salon', address: '123 Fashion Street, Connaught Place', city: 'New Delhi', website: 'www.respark.in', gst: 'GST07ABCDE1234F1Z5', currency: 'INR' });
  const [notifications, setNotifications] = useState({ emailAlerts: true, smsAlerts: false, bookingUpdates: true, staffReports: true });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-charcoal">System Settings</h1>
        <p className="text-charcoal/50 text-sm">Manage your profile, business info, and preferences</p>
      </div>

      <form onSubmit={handleSave}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">

            {/* Profile */}
            <div className="bg-white p-5 lg:p-6 rounded-[2rem] border border-gray-100 shadow-sm">
              <h2 className="text-base font-black text-charcoal mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                <User className="w-5 h-5 text-rose-gold" /> Profile Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                <Field label="Full Name" value={profile.fullName} onChange={e => setProfile({...profile, fullName: e.target.value})} />
                <Field label="Role / Designation" value={profile.role} onChange={e => setProfile({...profile, role: e.target.value})} />
                <Field label="Email Address" type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} />
                <Field label="Contact Number" type="tel" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
              </div>
            </div>

            {/* Business */}
            <div className="bg-white p-5 lg:p-6 rounded-[2rem] border border-gray-100 shadow-sm">
              <h2 className="text-base font-black text-charcoal mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-rose-gold" /> Business Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                <Field label="Salon / Business Name" value={business.salonName} onChange={e => setBusiness({...business, salonName: e.target.value})} />
                <Field label="Website URL" value={business.website} onChange={e => setBusiness({...business, website: e.target.value})} />
                <Field label="Business Address" value={business.address} onChange={e => setBusiness({...business, address: e.target.value})} />
                <Field label="City" value={business.city} onChange={e => setBusiness({...business, city: e.target.value})} />
                <Field label="GST Number" value={business.gst} onChange={e => setBusiness({...business, gst: e.target.value})} />
                <div>
                  <label className="block text-[10px] font-black text-charcoal/40 uppercase tracking-widest mb-1.5 ml-1">Currency</label>
                  <select value={business.currency} onChange={e => setBusiness({...business, currency: e.target.value})} className="w-full border border-gray-200 bg-gray-50 p-3 rounded-xl outline-none focus:border-rose-gold focus:ring-4 focus:ring-rose-gold/5 text-sm font-bold text-charcoal transition-all appearance-none cursor-pointer">
                    <option value="INR">₹ INR - Indian Rupee</option>
                    <option value="USD">$ USD - US Dollar</option>
                    <option value="AED">د.إ AED - UAE Dirham</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white p-5 lg:p-6 rounded-[2rem] border border-gray-100 shadow-sm">
              <h2 className="text-base font-black text-charcoal mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                <Bell className="w-5 h-5 text-rose-gold" /> Preferences
              </h2>
              <div className="space-y-1">
                <Toggle label="Email Alerts" desc="Receive booking & revenue summaries" checked={notifications.emailAlerts} onChange={() => setNotifications({...notifications, emailAlerts: !notifications.emailAlerts})} />
                <Toggle label="SMS Alerts" desc="Get appointment reminders via SMS" checked={notifications.smsAlerts} onChange={() => setNotifications({...notifications, smsAlerts: !notifications.smsAlerts})} />
                <Toggle label="Booking Updates" desc="Notify when new bookings are created" checked={notifications.bookingUpdates} onChange={() => setNotifications({...notifications, bookingUpdates: !notifications.bookingUpdates})} />
                <Toggle label="Performance Reports" desc="Weekly summaries for staff" checked={notifications.staffReports} onChange={() => setNotifications({...notifications, staffReports: !notifications.staffReports})} />
              </div>
            </div>

            <button type="submit" className={`w-full py-4.5 font-black rounded-2xl flex items-center justify-center gap-2 text-base shadow-2xl transition-all text-white ${saved ? 'bg-green-500 shadow-green-500/20' : 'bg-rose-gold hover:bg-purple-800 shadow-rose-gold/20'}`}>
              {saved ? '✓ Settings Saved Successfully!' : <><Save className="w-5 h-5" /> Update Global Settings</>}
            </button>
          </div>

          {/* RIGHT COLUMN - Profile Preview Card */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-sm font-black text-charcoal/40 uppercase tracking-[0.2em] mb-6 pb-4 border-b border-gray-100 text-center">Live Preview</h2>

              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-4 group">
                  <img src={profile.avatarUrl} className="w-28 h-28 rounded-3xl object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500" />
                  <button type="button" onClick={() => setProfile({...profile, avatarUrl: `https://i.pravatar.cc/150?u=${Date.now()}`})}
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-rose-gold text-white rounded-2xl flex items-center justify-center text-sm shadow-xl hover:bg-purple-700 transition-all transform hover:rotate-12 border-4 border-white">✎</button>
                </div>
                <h3 className="font-black text-charcoal text-2xl tracking-tight">{profile.fullName}</h3>
                <p className="text-sm font-bold text-rose-gold mt-1 uppercase tracking-widest">{profile.role}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-charcoal/40 uppercase tracking-tighter">Active System User</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {[
                  ['📧 Email', profile.email],
                  ['📱 Phone', profile.phone],
                  ['🏪 Salon', business.salonName],
                  ['🌐 Website', business.website],
                ].map(([label, value], i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <p className="text-[9px] font-black text-charcoal/30 uppercase tracking-[0.15em] mb-1">{label}</p>
                    <p className="text-xs font-black text-charcoal truncate">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-[10px] font-black text-charcoal/30 uppercase tracking-[0.15em] mb-4">Notification Channels</p>
                <div className="flex flex-wrap gap-2">
                  {notifications.emailAlerts && <span className="px-3 py-1.5 bg-blue-100 text-blue-600 text-[9px] font-black uppercase rounded-xl border border-blue-200">Email</span>}
                  {notifications.smsAlerts && <span className="px-3 py-1.5 bg-green-100 text-green-600 text-[9px] font-black uppercase rounded-xl border border-green-200">SMS</span>}
                  {notifications.bookingUpdates && <span className="px-3 py-1.5 bg-purple-100 text-purple-600 text-[9px] font-black uppercase rounded-xl border border-purple-200">Updates</span>}
                  {notifications.staffReports && <span className="px-3 py-1.5 bg-orange-100 text-orange-600 text-[9px] font-black uppercase rounded-xl border border-orange-200">Reports</span>}
                </div>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AdminSettings;

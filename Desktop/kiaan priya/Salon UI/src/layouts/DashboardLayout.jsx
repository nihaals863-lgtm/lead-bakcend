import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Calendar, Package, BarChart3, 
  Settings, LogOut, Bell, Search, Menu, X, Scissors, 
  MessageSquare, Star, DollarSign, Briefcase, ChevronRight, Check, ShoppingCart
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, to, active, onClick }) => (
  <Link 
    to={to !== '#' ? to : '#'} 
    onClick={(e) => {
      if (to === '#') {
        e.preventDefault();
        alert(`Navigating to ${label}... (Module in development)`);
      }
      if (onClick) onClick(e);
    }}
    className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-200 group ${
      active 
        ? 'bg-rose-gold text-white shadow-lg shadow-rose-gold/30' 
        : 'text-charcoal/60 hover:bg-rose-gold/8 hover:text-rose-gold'
    }`}
  >
    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
      active ? 'bg-white/20' : 'bg-rose-gold/10 group-hover:bg-rose-gold/15'
    }`}>
      <Icon className={`w-4.5 h-4.5 ${active ? 'text-white' : 'text-rose-gold'}`} />
    </div>
    <span className="font-semibold text-sm">{label}</span>
    {active && <ChevronRight className="w-4 h-4 ml-auto text-white/60" />}
  </Link>
);

const DashboardLayout = ({ children, role }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Booking', desc: 'Alice Smith booked a Hair Color for 2:30 PM', time: '5m ago', read: false },
    { id: 2, title: 'Low Inventory', desc: 'Loreal Shampoo is running low (2 bottles left)', time: '1h ago', read: false },
    { id: 3, title: 'New Review', desc: 'You received a 5-star review from John Doe', time: '2h ago', read: false },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const roleConfig = {
    admin: { label: 'Super Admin', color: 'bg-purple-100 text-purple-700' },
    manager: { label: 'Manager', color: 'bg-blue-100 text-blue-700' },
    reception: { label: 'Receptionist', color: 'bg-emerald-100 text-emerald-700' },
    artist: { label: 'Artist / Stylist', color: 'bg-amber-100 text-amber-700' },
  };

  const menuItems = {
    admin: [
      { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard/admin' },
      { icon: BarChart3, label: 'Revenue Analytics', to: '/dashboard/admin/revenue' },
      { icon: Briefcase, label: 'Branch Management', to: '/dashboard/admin/branches' },
      { icon: Users, label: 'Staff Overview', to: '/dashboard/admin/staff' },
      { icon: Scissors, label: 'Services', to: '/dashboard/admin/services' },
      { icon: BarChart3, label: 'Reports', to: '/dashboard/admin/reports' },
      { icon: Settings, label: 'Settings', to: '/dashboard/admin/settings' },
    ],
    manager: [
      { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard/manager' },
      { icon: Users, label: 'Staff Attendance', to: '/dashboard/manager/attendance' },
      { icon: Package, label: 'Inventory', to: '/dashboard/manager/inventory' },
      { icon: MessageSquare, label: 'Customer Feedback', to: '/dashboard/manager/feedback' },
      { icon: Star, label: 'Performance', to: '/dashboard/manager/performance' },
      { icon: ShoppingCart, label: 'Orders', to: '/dashboard/manager/orders' },
      { icon: Settings, label: 'Settings', to: '/dashboard/manager/settings' },
    ],
    receptionist: [
      { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard/receptionist' },
      { icon: Calendar, label: 'Appointments', to: '/dashboard/receptionist/appointments' },
      { icon: Calendar, label: 'New Booking', to: '/dashboard/receptionist/new-booking' },
      { icon: DollarSign, label: 'POS Billing', to: '/dashboard/receptionist/pos' },
      { icon: Users, label: 'Customers', to: '/dashboard/receptionist/customers' },
    ],
    artist: [
      { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard/artist' },
      { icon: Calendar, label: 'My Schedule', to: '/dashboard/artist/schedule' },
      { icon: DollarSign, label: 'Earnings', to: '/dashboard/artist/earnings' },
      { icon: MessageSquare, label: 'Feedback', to: '/dashboard/artist/feedback' },
    ],
  };

  const currentRole = roleConfig[role] || roleConfig.admin;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-50 w-72 h-[100dvh] bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 transform shadow-xl lg:shadow-none ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link to="/" onClick={() => window.innerWidth < 1024 && setIsSidebarOpen(false)} className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-rose-gold rounded-xl flex items-center justify-center shadow-lg shadow-rose-gold/30">
              <Scissors className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black text-charcoal tracking-tight">RES<span className="text-rose-gold">PARK</span></span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-charcoal/40 hover:text-charcoal">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Badge */}
        <div className="px-6 py-4">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${currentRole.color}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
            {currentRole.label}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto min-h-0">
          <p className="text-[10px] font-black text-charcoal/30 uppercase tracking-widest px-4 mb-3 mt-4">Main Menu</p>
          {menuItems[role]?.map((item, i) => (
            <SidebarItem 
              key={i} 
              {...item} 
              active={location.pathname === item.to}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsSidebarOpen(false);
                }
              }}
            />
          ))}
        </nav>

        {/* Bottom section (Frozen) */}
        <div className="p-4 border-t border-gray-100 mt-auto shrink-0 bg-white">
          <div className="flex items-center gap-3 p-3 mb-2">
            <img src={`https://i.pravatar.cc/100?u=${role}`} className="w-9 h-9 rounded-xl object-cover ring-2 ring-rose-gold/20" alt="Avatar" />
            <div className="min-w-0">
              <p className="text-sm font-bold text-charcoal capitalize truncate">{role}</p>
              <p className="text-xs text-charcoal/40">Verified User</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition-all group"
          >
            <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-sm">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-72' : 'ml-0'}`}>
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-charcoal/60 hover:text-rose-gold hover:bg-rose-gold/5 rounded-xl transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 w-72 focus-within:border-rose-gold/40 focus-within:ring-2 focus-within:ring-rose-gold/10 transition-all">
              <Search className="w-4 h-4 text-charcoal/30 shrink-0" />
              <input type="text" placeholder="Search anything..." className="bg-transparent border-none outline-none text-sm w-full text-charcoal placeholder:text-charcoal/30" />
            </div>
          </div>

          <div className="flex items-center gap-3 relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2.5 text-charcoal/50 hover:text-rose-gold hover:bg-rose-gold/5 rounded-xl transition-all"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute top-full -right-2 sm:right-0 mt-3 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
                  <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <h4 className="font-black text-charcoal text-sm">Notifications</h4>
                    {unreadCount > 0 && (
                      <button onClick={markAllRead} className="text-[10px] font-bold text-rose-gold hover:text-purple-700 flex items-center gap-1 transition-all">
                        <Check className="w-3 h-3" /> Mark all read
                      </button>
                    )}
                  </div>
                  <div className="max-h-[60vh] overflow-y-auto">
                    {notifications.map(n => (
                      <div 
                        key={n.id} 
                        onClick={() => setShowNotifications(false)}
                        className={`p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer ${!n.read ? 'bg-rose-gold/5' : ''}`}
                      >
                        <div className="flex justify-between gap-2 mb-1">
                          <p className={`text-sm font-bold ${!n.read ? 'text-charcoal' : 'text-charcoal/70'}`}>{n.title}</p>
                          <span className="text-[10px] text-charcoal/40 font-bold shrink-0">{n.time}</span>
                        </div>
                        <p className="text-xs text-charcoal/60 leading-relaxed">{n.desc}</p>
                      </div>
                    ))}
                    {notifications.length === 0 && (
                      <div className="p-6 text-center text-charcoal/40 text-sm font-bold">
                        No notifications
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center gap-3 pl-3 border-l border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-charcoal capitalize">{role}</p>
                <p className="text-xs text-charcoal/40">Verified User</p>
              </div>
              <img src={`https://i.pravatar.cc/100?u=${role}`} className="w-9 h-9 rounded-xl object-cover ring-2 ring-rose-gold/20" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

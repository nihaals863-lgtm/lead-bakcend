import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scissors, Lock, User, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const validUsers = {
      'admin': '/dashboard/admin',
      'manager': '/dashboard/manager',
      'reception': '/dashboard/receptionist',
      'artist': '/dashboard/artist'
    };

    await new Promise(r => setTimeout(r, 600));

    if (validUsers[username] && password === '1234') {
      localStorage.setItem('userRole', username);
      navigate(validUsers[username]);
    } else {
      setError('Invalid credentials. Try admin / 1234');
      setIsLoading(false);
    }
  };

  const quickLogin = (role) => {
    setUsername(role);
    setPassword('1234');
  };

  const roles = [
    { key: 'admin', label: 'Admin', color: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100' },
    { key: 'manager', label: 'Manager', color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100' },
    { key: 'reception', label: 'Reception', color: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' },
    { key: 'artist', label: 'Artist', color: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100' },
  ];

  return (
    <div className="min-h-screen flex font-sans relative">
      {/* Back to Home Button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white lg:bg-white/10 hover:bg-gray-100 lg:hover:bg-white/20 backdrop-blur-md border border-royal-purple/20 lg:border-white/10 rounded-full text-royal-purple lg:text-white font-bold text-sm transition-all transform hover:scale-105 active:scale-95 group shadow-md lg:shadow-none"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>
      {/* Left Decorative Panel */}
      <div className="hidden lg:flex w-[45%] bg-gradient-to-br from-rose-gold via-[#5a2d91] to-[#3b1a70] relative overflow-hidden flex-col justify-between p-14">
        {/* BG Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute rounded-full border border-white/30" style={{
              width: `${(i + 1) * 120}px`, height: `${(i + 1) * 120}px`,
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
            }} />
          ))}
        </div>

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
            <Scissors className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black text-white tracking-tight">RES<span className="text-white/60">PARK</span></span>
        </div>

        {/* Center content */}
        <div className="relative z-10 space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-white leading-tight">
              Manage Your Salon <br />
              <span className="text-white/60">Like a Pro.</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              All-in-one salon management software for modern beauty businesses. Scheduling, billing, staff — all in one place.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: '5,000+', sub: 'Salons Trust Us' },
              { label: '99.9%', sub: 'Uptime SLA' },
              { label: '4.9★', sub: 'App Rating' },
              { label: '24/7', sub: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <p className="text-2xl font-black text-white">{stat.label}</p>
                <p className="text-xs text-white/50 uppercase font-bold tracking-wider mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-white/30 text-xs">© 2026 ReSpark. All rights reserved.</p>
      </div>

      {/* Right Login Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[420px] space-y-5"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden text-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-rose-gold rounded-xl flex items-center justify-center">
                <Scissors className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-charcoal">RES<span className="text-rose-gold">PARK</span></span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-black text-charcoal">Welcome back 👋</h1>
            <p className="text-charcoal/50 mt-1">Sign in to your dashboard</p>
          </div>

          {/* Login Card */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-gray-100">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">Username</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/10 rounded-2xl outline-none transition-all text-sm font-medium"
                    placeholder="admin, manager, reception, artist"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/10 rounded-2xl outline-none transition-all text-sm font-medium"
                    placeholder="••••••••"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30 hover:text-rose-gold transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm font-medium text-center bg-red-50 py-2.5 px-4 rounded-xl border border-red-100"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-rose-gold text-white rounded-2xl font-bold text-base hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/25 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Sign In <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>

          {/* Quick Login */}
          <div>
            <p className="text-xs text-charcoal/40 text-center uppercase font-bold tracking-widest mb-3">Quick Login (Pass: 1234)</p>
            <div className="grid grid-cols-4 gap-2">
              {roles.map(role => (
                <button
                  key={role.key}
                  onClick={() => quickLogin(role.key)}
                  className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${role.color}`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-charcoal/40 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-rose-gold font-bold hover:underline">Register Account</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import POSBillingPage from './pages/POSBillingPage';
import AppointmentBookingPage from './pages/AppointmentBookingPage';
import MembershipSoftwarePage from './pages/MembershipSoftwarePage';
import DashboardLayout from './layouts/DashboardLayout';
import AdminDashboard from './pages/AdminDashboard';
import { AdminStaff } from './pages/AdminPages';
import AdminSettings from './pages/AdminSettings';
import AdminRevenue from './pages/AdminRevenue';
import AdminBranches from './pages/AdminBranches';
import AdminReports from './pages/AdminReports';
import AdminServices from './pages/AdminServices';
import ManagerDashboard from './pages/ManagerDashboard';
import { ManagerAttendance, ManagerInventory, ManagerFeedback, ManagerPerformance, ManagerOrders } from './pages/ManagerPages';
import ReceptionistDashboard from './pages/ReceptionistDashboard';
import { ReceptionistAppointments, ReceptionistNewBooking, ReceptionistPOS, ReceptionistCustomers } from './pages/ReceptionistPages';
import ArtistDashboard from './pages/ArtistDashboard';
import { ArtistSchedule, ArtistEarnings, ArtistFeedback } from './pages/ArtistPages';
import SalonCRMSoftware from './pages/SalonCRMSoftware';
import SalonInventorySoftware from './pages/SalonInventorySoftware';
import SalonWhatsAppIntegration from './pages/SalonWhatsAppIntegration';
import SalonEcommerceSoftware from './pages/SalonEcommerceSoftware';
import SalonFeedbackManagement from './pages/SalonFeedbackManagement';
import SalonDigitalCatalog from './pages/SalonDigitalCatalog';
import SalonStaffManagement from './pages/SalonStaffManagement';
import SalonLoyaltyVouchers from './pages/SalonLoyaltyVouchers';
import SalonEnquiryManagement from './pages/SalonEnquiryManagement';
import Blog from './pages/Blog';
import BlogSalonMarketing from './pages/BlogSalonMarketing';
import ContactUs from './pages/ContactUs';
import WhatsAppFAB from './components/WhatsAppFAB';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userRole = localStorage.getItem('userRole');

  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  // --- GLOBAL DUMMY DATA --- //
  const [appointments, setAppointments] = useState([
    { id: 1, date: '01 May 2026', time: '10:00 AM', client: 'Aisha Khan', service: 'Bridal Makeup Trial', staff: 'Priya Sharma', status: 'Confirmed', notes: 'Allergic to latex. Bring portfolio.', phone: '+91 98765 11111' },
    { id: 2, date: '01 May 2026', time: '11:30 AM', client: 'Rohan Gupta', service: 'Premium Haircut & Beard', staff: 'Rahul Verma', status: 'In-Progress', notes: 'Standard trim.', phone: '+91 98765 22222' },
    { id: 3, date: '01 May 2026', time: '01:00 PM', client: 'Meera Patel', service: 'O3+ Bridal Facial', staff: 'Sneha Kapoor', status: 'Pending', notes: 'Requested extra massage.', phone: '+91 98765 33333' },
    { id: 4, date: '02 May 2026', time: '09:00 AM', client: 'Karan Malhotra', service: 'Keratin Treatment', staff: 'Priya Sharma', status: 'Confirmed', notes: 'First time client.', phone: '+91 98765 44444' },
  ]);

  const [inventory, setInventory] = useState([
    { id: 1, item: 'Loreal Professional Shampoo', stock: 5, min: 10, category: 'Hair Care', price: 850, lastRestock: '12 May 2026' },
    { id: 2, item: 'Olaplex No.3 Hair Perfector', stock: 12, min: 5, category: 'Treatments', price: 3200, lastRestock: '01 May 2026' },
    { id: 3, item: 'MAC Studio Fix Foundation', stock: 2, min: 8, category: 'Makeup', price: 2900, lastRestock: '15 Apr 2026' },
    { id: 4, item: 'Schwarzkopf Hair Spray', stock: 18, min: 15, category: 'Styling', price: 1100, lastRestock: '20 May 2026' },
    { id: 5, item: 'O3+ Bridal Facial Kit', stock: 4, min: 10, category: 'Skin Care', price: 4500, lastRestock: '28 Apr 2026' },
    { id: 6, item: 'Disposable Towels (Pack)', stock: 45, min: 50, category: 'Consumables', price: 450, lastRestock: '05 May 2026' },
  ]);

  const [staffData, setStaffData] = useState([
    { id: 1, name: 'Priya Sharma', role: 'Senior Hair Stylist', status: 'Present', checkIn: '09:00 AM', checkOut: '--', shift: 'Morning (9 AM - 5 PM)', performance: 'Excellent', revenue: '₹42,000', rating: '4.9', phone: '+91 98765 12345', address: 'South Extension, Delhi' },
    { id: 2, name: 'Rahul Verma', role: 'Color Specialist', status: 'Late', checkIn: '10:15 AM', checkOut: '--', shift: 'Morning (9 AM - 5 PM)', performance: 'Good', revenue: '₹38,000', rating: '4.8', phone: '+91 98765 23456', address: 'Lajpat Nagar, Delhi' },
    { id: 3, name: 'Sneha Kapoor', role: 'Spa Therapist', status: 'Present', checkIn: '11:00 AM', checkOut: '--', shift: 'Afternoon (11 AM - 8 PM)', performance: 'Excellent', revenue: '₹31,000', rating: '4.9', phone: '+91 98765 34567', address: 'Vasant Kunj, Delhi' },
    { id: 4, name: 'Anjali Desai', role: 'Bridal Makeup Artist', status: 'Absent', checkIn: '-', checkOut: '-', shift: 'Morning (9 AM - 5 PM)', performance: 'N/A', revenue: '₹0', rating: '4.7', phone: '+91 98765 45678', address: 'Rajouri Garden, Delhi' },
    { id: 5, name: 'Vikram Singh', role: 'Nail Technician', status: 'On Leave', checkIn: '-', checkOut: '-', shift: 'Afternoon (11 AM - 8 PM)', performance: 'Good', revenue: '₹15,000', rating: '4.6', phone: '+91 98765 56789', address: 'Dwarka, Delhi' },
  ]);

  const [branches, setBranches] = useState([
    { id: 1, name: 'Downtown Studio', location: '123 Main St, NY', revenue: 15000, profit: 8000 },
    { id: 2, name: 'Uptown Spa', location: '45 High St, NY', revenue: 12000, profit: 6500 },
    { id: 3, name: 'Westside Clinic', location: '78 West St, NY', revenue: 9500, profit: 4200 },
  ]);

  const [services, setServices] = useState([
    { id: 1, name: 'Premium Haircut', price: 45 },
    { id: 2, name: 'Hair Coloring', price: 120 },
    { id: 3, name: 'Keratin Treatment', price: 150 },
    { id: 4, name: 'Face Care & Clean-up', price: 60 },
    { id: 5, name: 'Bridal Makeup', price: 250 },
    { id: 6, name: 'Threading & Waxing', price: 25 },
    { id: 7, name: 'Manicure & Pedicure', price: 40 },
    { id: 8, name: 'Full Body Spa', price: 110 },
    { id: 9, name: 'Hot Stone Massage', price: 90 },
    { id: 10, name: 'Eyelash Extensions', price: 75 },
  ]);

  const [feedback, setFeedback] = useState([
    { id: 1, customer: 'Neha Gupta', rating: 5, comment: 'Priya was amazing! Best haircut ever. Will definitely come back.', staff: 'Priya Sharma', service: 'Premium Haircut', date: '01 May 2026', sentiment: 'Positive' },
    { id: 2, customer: 'Rajat Kumar', rating: 4, comment: 'Great service by Rahul, but had to wait 10 mins past my appointment time.', staff: 'Rahul Verma', service: 'Hair Coloring', date: '30 Apr 2026', sentiment: 'Neutral' },
    { id: 3, customer: 'Simran Singh', rating: 5, comment: 'Sneha gave me the most relaxing spa experience. Highly recommended!', staff: 'Sneha Kapoor', service: 'Full Body Spa', date: '28 Apr 2026', sentiment: 'Positive' },
    { id: 4, customer: 'Karan Malhotra', rating: 2, comment: 'The AC was not working properly in the waiting area. Service was fine.', staff: 'Vikram Singh', service: 'Men\'s Grooming', date: '25 Apr 2026', sentiment: 'Negative' },
  ]);

  const [orders, setOrders] = useState([
    { id: 'PO-2026-001', supplier: 'Loreal India Pvt Ltd', items: 'Shampoo (20), Conditioner (15)', status: 'Pending', date: '01 May 2026', amount: '₹25,500' },
    { id: 'PO-2026-002', supplier: 'Olaplex Distributors', items: 'No.3 Hair Perfector (10)', status: 'Completed', date: '28 Apr 2026', amount: '₹32,000' },
    { id: 'PO-2026-003', supplier: 'O3+ Skincare Partners', items: 'Bridal Kits (5), Face Scrubs (10)', status: 'Pending', date: '29 Apr 2026', amount: '₹18,200' },
  ]);

  const [customers, setCustomers] = useState([
    { id: 1, name: 'Aisha Khan', phone: '+91 98765 11111', email: 'aisha@example.com', totalVisits: 12, totalSpent: '₹45,000', lastVisit: '15 Apr 2026', status: 'VIP' },
    { id: 2, name: 'Rohan Gupta', phone: '+91 98765 22222', email: 'rohan@example.com', totalVisits: 5, totalSpent: '₹12,500', lastVisit: '10 Apr 2026', status: 'Active' },
    { id: 3, name: 'Meera Patel', phone: '+91 98765 33333', email: 'meera@example.com', totalVisits: 2, totalSpent: '₹8,000', lastVisit: '20 Apr 2026', status: 'Active' },
    { id: 4, name: 'Karan Malhotra', phone: '+91 98765 44444', email: 'karan@example.com', totalVisits: 1, totalSpent: '₹0', lastVisit: '-', status: 'New' },
  ]);

  const location = useLocation();
  const hideFAB = location.pathname === '/login' || location.pathname.startsWith('/dashboard');

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/salon-pos-software" element={<POSBillingPage />} />
        <Route path="/salon-appointment-booking-software" element={<AppointmentBookingPage />} />
        <Route path="/salon-spa-membership-software" element={<MembershipSoftwarePage />} />
        <Route path="/salon-crm-software" element={<SalonCRMSoftware />} />
        <Route path="/salon-inventory-management-software" element={<SalonInventorySoftware />} />
        <Route path="/salon-spa-whatsapp-integration" element={<SalonWhatsAppIntegration />} />
        <Route path="/spa-salon-ecommerce-software" element={<SalonEcommerceSoftware />} />
        <Route path="/salon-feedback-management" element={<SalonFeedbackManagement />} />
        <Route path="/salon-digital-catalog" element={<SalonDigitalCatalog />} />
        <Route path="/salon-staff-management" element={<SalonStaffManagement />} />
        <Route path="/salon-loyalty-program-software" element={<SalonLoyaltyVouchers />} />
        <Route path="/salon-enquiry-management-software" element={<SalonEnquiryManagement />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/salon-marketing-ideas" element={<BlogSalonMarketing />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Admin Dashboard Routes */}
        <Route path="/dashboard/admin" element={<ProtectedRoute allowedRoles={['admin']}><DashboardLayout role="admin"><AdminDashboard branches={branches} staffData={staffData} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin/revenue" element={<ProtectedRoute allowedRoles={['admin']}><DashboardLayout role="admin"><AdminRevenue /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin/branches" element={<ProtectedRoute allowedRoles={['admin']}><DashboardLayout role="admin"><AdminBranches branches={branches} setBranches={setBranches} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin/staff" element={<ProtectedRoute allowedRoles={['admin']}><DashboardLayout role="admin"><AdminStaff staffData={staffData} setStaffData={setStaffData} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin/services" element={<ProtectedRoute allowedRoles={['admin']}><DashboardLayout role="admin"><AdminServices services={services} setServices={setServices} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin/reports" element={<ProtectedRoute allowedRoles={['admin']}><DashboardLayout role="admin"><AdminReports /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin/settings" element={<ProtectedRoute allowedRoles={['admin']}><DashboardLayout role="admin"><AdminSettings /></DashboardLayout></ProtectedRoute>} />
        
        {/* Manager Dashboard Routes */}
        <Route path="/dashboard/manager" element={<ProtectedRoute allowedRoles={['admin', 'manager']}><DashboardLayout role="manager"><ManagerDashboard staffData={staffData} inventory={inventory} feedback={feedback} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/manager/attendance" element={<ProtectedRoute allowedRoles={['admin', 'manager']}><DashboardLayout role="manager"><ManagerAttendance staffData={staffData} setStaffData={setStaffData} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/manager/inventory" element={<ProtectedRoute allowedRoles={['admin', 'manager']}><DashboardLayout role="manager"><ManagerInventory inventory={inventory} setInventory={setInventory} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/manager/feedback" element={<ProtectedRoute allowedRoles={['admin', 'manager']}><DashboardLayout role="manager"><ManagerFeedback feedback={feedback} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/manager/performance" element={<ProtectedRoute allowedRoles={['admin', 'manager']}><DashboardLayout role="manager"><ManagerPerformance staffData={staffData} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/manager/orders" element={<ProtectedRoute allowedRoles={['admin', 'manager']}><DashboardLayout role="manager"><ManagerOrders orders={orders} setOrders={setOrders} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/manager/settings" element={<ProtectedRoute allowedRoles={['admin', 'manager']}><DashboardLayout role="manager"><AdminSettings /></DashboardLayout></ProtectedRoute>} />

        {/* Receptionist Dashboard Routes */}
        <Route path="/dashboard/receptionist" element={<ProtectedRoute allowedRoles={['admin', 'reception']}><DashboardLayout role="receptionist"><ReceptionistDashboard appointments={appointments} setAppointments={setAppointments} services={services} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/receptionist/appointments" element={<ProtectedRoute allowedRoles={['admin', 'reception']}><DashboardLayout role="receptionist"><ReceptionistAppointments appointments={appointments} setAppointments={setAppointments} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/receptionist/new-booking" element={<ProtectedRoute allowedRoles={['admin', 'reception']}><DashboardLayout role="receptionist"><ReceptionistNewBooking appointments={appointments} setAppointments={setAppointments} services={services} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/receptionist/pos" element={<ProtectedRoute allowedRoles={['admin', 'reception']}><DashboardLayout role="receptionist"><ReceptionistPOS services={services} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/receptionist/customers" element={<ProtectedRoute allowedRoles={['admin', 'reception']}><DashboardLayout role="receptionist"><ReceptionistCustomers customers={customers} /></DashboardLayout></ProtectedRoute>} />

        {/* Artist Dashboard Routes */}
        <Route path="/dashboard/artist" element={<ProtectedRoute allowedRoles={['admin', 'artist']}><DashboardLayout role="artist"><ArtistDashboard appointments={appointments} setAppointments={setAppointments} feedback={feedback} inventory={inventory} setInventory={setInventory} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/artist/schedule" element={<ProtectedRoute allowedRoles={['admin', 'artist']}><DashboardLayout role="artist"><ArtistSchedule appointments={appointments} setAppointments={setAppointments} /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/artist/earnings" element={<ProtectedRoute allowedRoles={['admin', 'artist']}><DashboardLayout role="artist"><ArtistEarnings /></DashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/artist/feedback" element={<ProtectedRoute allowedRoles={['admin', 'artist']}><DashboardLayout role="artist"><ArtistFeedback feedback={feedback} /></DashboardLayout></ProtectedRoute>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!hideFAB && <WhatsAppFAB />}
    </>
  );
}

export default App;

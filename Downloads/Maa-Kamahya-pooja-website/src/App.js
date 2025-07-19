import "./App.css";
import { Routes, Route,  useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import ProductDetails from "./Pages/ProductDetails";
import { LoadUser } from "./Redux/Actions/userActions";
import { useEffect, useState } from "react";
import Profile from "./Pages/Profile";
import { useDispatch } from "react-redux";
import axios from "axios";
import UpdateProfile from "./Pages/UpdateProfile";
import ResetPassword from "./Pages/ResetPassword";
import Contact from "./Pages/Contact";

import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

import ConfirmOrder from "./Pages/ConfirmOrder";
import Payment from "./Pages/Payment";
import { baseUrl } from "./UrlHelper/baseUrl";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentSuccess from "./Pages/PaymentSuccess";
import MyOrder from "./Pages/MyOrder";
import OrderDetails from "./Pages/OrderDetails";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import ViewProducts from "./Pages/Admin/ViewProducts";
import AdminAllUsers from "./Pages/Admin/AdminAllUsers";
import AdminAllOrders from "./Pages/Admin/AdminAllOrders";
import AdminCreateProduct from "./Pages/Admin/AdminCreateProduct";
import UpdateAdminProduct from "./Pages/Admin/UpdateAdminProduct";
import UpdateAdminUser from "./Pages/Admin/UpdateAdminUser";
import UpdateAdminOrder from "./Pages/Admin/UpdateAdminOrder";
import AdminAllReviews from "./Pages/Admin/AdminAllReviews";
import AdminBanner from "./Pages/Admin/AdminBanner";
import PrivacyPolicy from "./Policies/PrivacyPolicy";
import TermsConditions from "./Policies/TermsConditions";
import CookiesPolicy from "./Policies/CookiesPolicy";
import Disclaimer from "./Policies/Disclaimer";
import RefundPolicy from "./Policies/RefundPolicy";
import Shippingpolicy from "./Policies/Shippingpolicy";
import { gapi } from "gapi-script";
import ScrollToTop from "./components/ScrollToTop";
import PoojaDarshan from "./Pages/PoojaDarshan";
import GoogleLogin from "./components/GoogleLogin";

// scolltotop
// axios.defaults.withCredentials = true;
axios.defaults.headers.common["token"] = localStorage.getItem("token");

function App() {
  const dispatch = useDispatch();
  // const navigation = useNavigate();
  const [stripeApiKey, setStripeApiKey] = useState("");
  const location = useLocation();
  async function fetchStripeApiKey() {
    const { data } = await axios.get(`${baseUrl}/payment/stripeapikey`);
    // console.log(data, "<<<data");
    if (data.success) {
      setStripeApiKey(data.stripeApiKey);
    }
  }

  const GOOGLE_CLIENT_ID = "688602412306-p50v1vqd3hiupamkfvt9p06ubdfo66a4.apps.googleusercontent.com";

  useEffect(() => {
    // Initialize Google API
    function initGoogleAPI() {
      gapi.load("client:auth2", () => {
        gapi.client.init({
          clientId: GOOGLE_CLIENT_ID,
          scope: "email",
        });
      });
    }
    initGoogleAPI();
  }, []);

  useEffect(() => {
    fetchStripeApiKey();
  }, []);

  useEffect(() => {
    dispatch(LoadUser());
  }, [dispatch]);


  return (
    <div>
      <Navbar />
      <ScrollToTop />
     
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} /> 

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Cart Routes */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/shipping" element={<Checkout />} />
            <Route path="/cart/order-confirm" element={<ConfirmOrder />} />
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="/pooja-darshan" element={<PoojaDarshan />} />

            {/* Order Route */}
            <Route path="/all-orders" element={<MyOrder />} />
            <Route path="/all-orders/order/:id" element={<OrderDetails />} />

            {/* Profile Routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/update" element={<UpdateProfile />} />
            <Route path="/profile/update-password" element={<ResetPassword />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/all-products" element={<ViewProducts />} />
            <Route path="/admin/all-users" element={<AdminAllUsers />} />
            <Route path="/admin/all-orders" element={<AdminAllOrders />} />
            <Route path="/admin/all-reviews" element={<AdminAllReviews />} />
            <Route path="/admin/banner" element={<AdminBanner />} />
            <Route path="/admin/all-products/create" element={<AdminCreateProduct />} />
            <Route path="/admin/all-products/product/:id" element={<UpdateAdminProduct />}/>
            <Route path="/admin/all-users/user/:id" element={<UpdateAdminUser />} />
            <Route path="/admin/all-orders/order/:id" element={<UpdateAdminOrder />}/>

            {/* policies-route */}
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsConditions" element={<TermsConditions />} />
            <Route path="/CookiesPolicy" element={<CookiesPolicy />} />
            <Route path="/Disclaimer" element={<Disclaimer />} />
            <Route path="/RefundPolicy" element={<RefundPolicy />} />
            <Route path="/shippingpolicy" element={<Shippingpolicy />} />
            <Route path="/g" element={<GoogleLogin />} />

            {stripeApiKey && (
              <Route
                path="/cart/order-confirm/payment"
                element={
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                  </Elements>
                }
              />
            )}
          </Routes>
 
      <Footer />
    </div>
  );
}

export default App;












import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import Money from "../../assets/payment.png";
import User from "../../assets/user.png";
import PriceRange from "../../assets/priceRange.png";
import Cart from "../../assets/cart.png";

const AdminDashboard = () => {
  const { products, loading: productsLoading } = useSelector((state) => state.products);
  const { orders, totalAmount, loading: ordersLoading } = useSelector((state) => state.allOrders);
  const { users, loading: usersLoading } = useSelector((state) => state.allUsers);

  // Loading State
  const isLoading = productsLoading || ordersLoading || usersLoading;

  const dataPackets = [
    {
      id: 1,
      img: PriceRange,
      heading: products ? products.length : 0,
      about: "Total Products",
      link: "/admin/all-products",
    },
    {
      id: 2,
      img: Cart,
      heading: orders ? orders.length : 0,
      about: "Total Orders",
      link: "/admin/all-orders",
    },
    {
      id: 3,
      img: User,
      heading: users ? users.length : 0,
      about: "Total Users",
      link: "/admin/all-users",
    },
    {
      id: 4,
      img: Money,
      heading: totalAmount ? `₹${totalAmount.toLocaleString()}` : "₹0",
      about: "Total Revenue",
      link: "#",
    },
  ];

  return (
    <>
      <Sidebar />
      <div style={{ padding: "20px" }} className="container">
        {/* Dashboard Heading */}
        <h2 style={{ color: "#2C3E50", textAlign: "start" }}>Admin Dashboard</h2>
        
        

        {/* Loading Spinner */}
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <CircularProgress />
          </Box>
        ) : (
          <div style={{ marginTop: "30px" }} className="row  text-center features mt-5">
            {/* Cards Section */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
              {dataPackets.map((data) => (
                <Link
                  to={data.link}
                  key={data.id}
                  style={{
                    textDecoration: "none",
                    color: "#15949D",
                    textAlign: "center",
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    width: "200px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src={data.img}
                    alt={data.about}
                    style={{ width: "50px", height: "50px", marginBottom: "10px" }}
                  />
                  <h3 style={{ fontSize: "24px", margin: "10px 0" }}>{data.heading}</h3>
                  <p style={{ fontSize: "16px", color: "#555" }}>{data.about}</p>
                </Link>
              ))}
            </div>

            {/* Placeholder Chart Section */}
            {/* <div style={{ marginTop: "50px", display: "flex", gap: "20px", justifyContent: "center" }}>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <h5 style={{ color: "#2C3E50", marginBottom: "10px" }}>Sales Breakdown</h5>
                <p style={{ color: "#aaa" }}>Chart Placeholder</p>
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                //  <h5 style={{ color: "#2C3E50", marginBottom: "10px" }}>User Engagement</h5>
                // <p style={{ color: "#aaa" }}>Chart Placeholder</p> 
              </div>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;

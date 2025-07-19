import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { searchUser } from "../Redux/Searchslice";
import notfoundimg from "../assets/notfoundimg.jfif"
import { FaWhatsapp } from "react-icons/fa6";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import {
  AccountCircle,
  Dashboard,
  Sell,
  Category,
  ExpandLess,
  ExpandMore,
  Facebook,
  Instagram,
  YouTube,
  Home,
  ContactMail,
  Twitter,
  EjectSharp,
  LocalShippingOutlined,
} from "@mui/icons-material";
import HttpsIcon from '@mui/icons-material/Https';
import { FaBlog, FaFileContract } from "react-icons/fa";

import axios from "axios";
import { baseUrl } from "../UrlHelper/baseUrl";
import logomain from "../assets/1logo.gif"
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { isAuthenticated } = useSelector((state) => state.userData);
  const [activeLink, setActiveLink] = useState("home");
  const [showInput, setShowInput] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useSelector((state) => state.cartData);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleActiveLink = (value) => setActiveLink(value);
  // Fetch products from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/products`);
        const productsWithDetails = response.data.products.map((product) => ({
          id: product._id,
          name: product.name,
          image: product.images[0],
          country: product.country || "N/A", // Add additional info if available
        }));
        setProducts(productsWithDetails);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  // Filter products based on the search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  // Handle selection
  const handleOnSelect = (item) => {
    navigate(`/product/${item.id}`, {
      state: { searchResult: item.name },
    });

    setSearchTerm("");
    setFilteredProducts([]);
  };
  const handleToggle = () => {
    setShowInput(!showInput);
  };


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            {" "}
            {/* <img src="https://Maa kamakhya puja seva.com/img/kt.png" alt="Logo" /> */}
            <img style={{width: "100px", height: "100px"}} src={logomain} alt="" />
          </Link>
        </div>
        <div className="d-flex">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
        >
          <i className="fas fa-bars" />
        </button>
        <ul>
          <li>
            <Link to="/"
              className={activeLink === "home" ? "active" : ""}
              onClick={() => handleActiveLink("home")}>
              Online
            </Link>
          </li>
          <li>
           
          <Link
  to="/"
  className={`menu-link ${activeLink === "home" ? "disable-link" : ""}`}
  onClick={(e) => {
    if (activeLink === "home") {
      e.preventDefault(); // Prevent link action when disabled
    } else {
      handleActiveLink("home");
    }
  }}
>
  offline
</Link>

          </li>
          <li>
            <Link
              to="/pooja-darshan"
              className={activeLink === "pooja-darshan" ? "active" : ""}
              onClick={() => handleActiveLink("pooja-darshan")}>
              Pooja Darshan
            </Link>
          </li>
          <li>
            <Link to="/contact" className={activeLink === "contact " ? "active" : ""}
              onClick={() => handleActiveLink("contact")}>
              Contact Us </Link>
          </li>
        </ul>

        <div className="buttons">
          <div className="d-flex serachpanel">
            <button className="search-button" onClick={handleToggle}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            {showInput && (
              <div style={{ position: "relative", maxWidth: "400px", margin: "0 auto" }}>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    fontSize: "16px",
                  }}
                />
                {/* Dropdown Suggestions */}
                {filteredProducts.length > 0 ? (
                  <div className="search-dropdown">
                    <header
                      style={{
                        textAlign: "center",
                        marginBottom: "8px",
                        borderBottom: "2px solid gray",
                      }}
                    >
                      <h1 style={{ fontSize: "20px", margin: "0 0 10px" }}>Product Search</h1>
                      <p style={{ fontSize: "12px", color: "#666" }}>
                        Find your favorite products quickly and easily
                      </p>
                    </header>
                    {filteredProducts.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleOnSelect(item)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                          cursor: "pointer",
                          borderBottom: "1px solid #f0f0f0",
                          transition: "background 0.3s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#e6e1e1")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                            marginRight: "10px",
                            borderRadius: "4px",
                          }}/>
                        <div>
                          <span style={{ fontWeight: "bold", fontSize: "14px", color: "#333" }}>
                            {item.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : searchTerm.trim() ? (
                  <div
                    style={{
                      position: "absolute",
                      top: "50px",
                      left: "0",
                      right: "0",
                      background: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "20px",
                      textAlign: "center",
                      zIndex: 10,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}>
                    <img
                      src={notfoundimg || "../assets/notfoundimg.jfif"}
                      alt="No Results"
                      style={{ marginBottom: "10px" }}
                    />
                    <p style={{ fontSize: "16px", color: "#999" }}>No products found</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>

           <Link to="/cart">
            <button className="position-relative">
              <i className="fa-solid fa-cart-plus" />{" "}
              {cartItems.length === 0 ? (
                ""
              ) : (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {cartItems.length}{" "}
                </span>
              )}
            </button>
          </Link> 

          {isAuthenticated ? (
            <Link to="/profile">
              {" "}
              <button>
                <i className=" fa-solid fa-user" />
              </button>
            </Link>
          ) : (
            <Link to="/login">
              {" "}
              <button>
                <i className="fa-regular fa-user" />
              </button>
            </Link>
          )}
        </div>
        <div className="mob-search">
          {showInput && (
            <div style={{ position: "relative", maxWidth: "400px", margin: "0 auto" }}>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  fontSize: "16px",
                }}
              />

              {/* Dropdown Suggestions */}
              {filteredProducts.length > 0 ? (
                <div className="search-dropdown">
                  <header
                    style={{
                      textAlign: "center",
                      marginBottom: "8px",
                      borderBottom: "2px solid gray",
                    }}
                  >
                    <h1 style={{ fontSize: "20px", margin: "0 0 10px" }}>Product Search</h1>
                    <p style={{ fontSize: "12px", color: "#666" }}>
                      Find your favorite products quickly and easily
                    </p>
                  </header>
                  {filteredProducts.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleOnSelect(item)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom: "1px solid #f0f0f0",
                        transition: "background 0.3s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#e6e1e1")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <img src={item.image}
                        alt={item.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                          marginRight: "10px",
                          borderRadius: "4px",
                        }} />
                      <div>
                        <span style={{ fontWeight: "bold", fontSize: "14px", color: "#333" }}>
                          {item.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchTerm.trim() ? (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    left: "0",
                    right: "0",
                    background: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "20px",
                    textAlign: "center",
                    zIndex: 10,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}>
                  <img
                    src={notfoundimg || "../assets/notfoundimg.jfif"}
                    alt="No Results"
                    style={{ marginBottom: "10px" }}
                  />
                  <p style={{ fontSize: "16px", color: "#999" }}>No products found</p>
                </div>
              ) : null}
            </div>
          )}
        </div>
        </div>
        
      </div>

      <div className="offcanvas offcanvas-start"
        style={{ backgroundColor: "#000" }}
        id="offcanvasMenu"
        tabIndex={-1}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"/>
        </div>
        {/* Authentication Header */}
        <Link to={isAuthenticated ? "/profile" : "/login"} >
          <div data-bs-dismiss="offcanvas" style={{ display: "flex", alignItems: "center", marginBottom: "5px ", marginTop: "5px ", paddingLeft: "10px" }} className="justify-content-end px-3 mx-5  ">
            <IconButton>
              {isAuthenticated ? <Dashboard className="text-white" /> : <AccountCircle className="text-white" />}
            </IconButton>
            <Typography variant="h6" sx={{ marginLeft: "8px" }} className="text-white">
              {isAuthenticated ? "Dashboard" : "Log In"}
            </Typography>
          </div>
        </Link>
        {/* <Divider className="text-white" /> */}
        <hr />
        <div className="offcanvas-body" style={{ padding: "20px" }}>
          {/* Main Navigation List */}
          <List>
            {/* Home */}
            <Link to="/" >
              <ListItem data-bs-dismiss="offcanvas" >
                <ListItemIcon >
                  <Home style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText className="text-white" primary="Home" />
              </ListItem>
            </Link>
            <Link to="/pooja-darshan" >
              <ListItem data-bs-dismiss="offcanvas" >
                <ListItemIcon >
                  <Home style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText className="text-white" primary="Pooja Darshan" />
              </ListItem>
            </Link>
            {/* Contact Us */}
            <Link to='/contact'>
              <ListItem

                data-bs-dismiss="offcanvas"
              >
                <ListItemIcon>
                  <ContactMail style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText className="text-white" primary="Contact Us" />
              </ListItem>
            </Link>
 
            {/* Privacy Policy */}
            <Link to="/privacypolicy" >
              <ListItem data-bs-dismiss="offcanvas" >
                <ListItemIcon>
                  <i className="fas fa-shield-alt" style={{ color: "white" }}></i> 
                </ListItemIcon>
                <ListItemText className="text-white" primary="Privacy Policy" />
              </ListItem>
            </Link>
            <Link to="/ReturnRefundPolicy" >
              <ListItem  data-bs-dismiss="offcanvas">
                <ListItemIcon>
                    <i className="fas fa-shield-alt" style={{ color: "white" }}></i> 
                </ListItemIcon>
                <ListItemText className="text-white" primary="Return & Refund Policy" />
              </ListItem>
            </Link>
            {/* Terms & Conditions */}
            <Link to="/TermsConditions">
              <ListItem data-bs-dismiss="offcanvas">
                <ListItemIcon>
                  <FaFileContract className="text-white fontSize-25px" />
                </ListItemIcon>
                <ListItemText className="text-white" primary="Terms & Conditions" />
              </ListItem>
            </Link>
            <Link to="/Disclaimer">
              <ListItem
                data-bs-dismiss="offcanvas">
                <ListItemIcon>
                  <EjectSharp style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText className="text-white" primary="Disclaimer" />
              </ListItem>
            </Link>
          </List>
        </div>

        {/* <Divider /> */}
        <hr />

        {/* Footer Social Media Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0",
            backgroundColor: "#000", // Dark black background
          }}>
          <IconButton
            style={{ color: "#E1306C" }} // Instagram brand color
>
            <Instagram fontSize="30px" />
          </IconButton>
          <IconButton
          
         
            style={{ color: "#1877F2" }} // Facebook brand color
          >
            <Facebook fontSize="30px" />
          </IconButton>
          <IconButton
         
         
            style={{ color: "#FF0000" }} // YouTube brand color
          >
            <YouTube fontSize="30px" />
          </IconButton>
          <IconButton
        
        
            style={{ color: "#1da1f2" }}
          >
            <Twitter fontSize="30px" />
          </IconButton>
        </div>

      </div>

   
      <div className="wrapper">
        <a href="https://api.whatsapp.com/send?phone=9132322798 " target="_blank">
          <FaWhatsapp style={{ fontSize: "33px" }} />
        
        </a>
      </div>
   
    </>
  );
};

export default NavBar;

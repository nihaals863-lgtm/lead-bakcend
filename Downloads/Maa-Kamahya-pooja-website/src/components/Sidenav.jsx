import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { LogOutUser } from "../Redux/Actions/userActions";
import ProfileIcon from "../assets/profile.png";
import LogoutIcon from "../assets/logout.png";
import cartIcon from "../assets/cart.png";
import DashboardIcon from "../assets/dashboard.png";
import "../Styling/Profile.css";
import './Sidenav.css'
const Sidenav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.userData);

    // Logout handler function
    const handleLogout = () => {
        dispatch(LogOutUser());
        navigate("/login");
    };

    // Cart navigation function
    const handleCart = () => {
        navigate("/cart");
    };

    return (
        <div>
        
            {/* Top navigation bar */}
            {/* <div className="container-fluid" style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
                <div className="row">
                    <div className="col-md-6" style={{ backgroundColor: "black"}}>
                    <ul className="list-unstyled d-flex justify-content-between text-light mb-2">
                    
                        <li className="mx-2 fs-6" onClick={handleShow}>
                            <i className="fa-solid fa-bars text-light mt-1 mx-2 fs-6" />
                            All
                        </li>

                        <Link to="/products"><li className="mx-2 fs-6">IndoWestern</li></Link>
                        <Link to="/products"><li className="mx-2 fs-6">Jodhpuri Suit</li></Link>
                        <Link to="/products"><li className="mx-2 fs-6">Blazer</li></Link>                        
                        <Link to="/products"><li className="mx-2 fs-6">Shervani</li></Link>
                        <Link to="/products"><li className="mx-2 fs-6">Trousers</li></Link>
                        <Link to="/products"><li className="mx-2 fs-6">Shirt</li></Link>

                        


                    </ul>
                    </div>
                </div>
            </div> */}
            {/* Top navigation bar end */}


            {/* Offcanvas sidebar */}
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton style={{ backgroundColor: "black", color: "white" }}>
                    <Offcanvas.Title>
                        {/* Conditional rendering for user login/logout */}
                        {isAuthenticated ? (
                            <div>
                                {/* Display user name */}
                                <span>Hello, {user.name}</span>
                                {/* <div className="card-block text-center">
                                    <div className="">
                                        <img
                                            src={user?.profilepicture?.url || ProfileIcon} className="img-radius" style={{ height: "60px"}} alt="Profile"/>
                                    </div>
                                </div> */}

                                {/* Actions for authenticated user */}
                                <div className="mt-2">
                                    {/* Link to admin dashboard if user is admin */}
                                    {user.role === "admin" && (
                                        <Link to="/admin/dashboard" title="Admin Dashboard">
                                            <img
                                                src={DashboardIcon}
                                                alt="Dashboard"
                                                className="logout-image"
                                                title="See Dashboard"
                                            />
                                        </Link>
                                    )}
                                    {/* Cart button for non-admin users */}
                                    {user.role !== "admin" && (
                                        <img
                                            src={cartIcon}
                                            alt="Cart"
                                            className="logout-image"
                                            title="Your Cart"
                                            onClick={handleCart}
                                        />
                                    )}
                                    {/* Logout button */}
                                    <img
                                        src={LogoutIcon}
                                        alt="Logout"
                                        className="logout-image"
                                        onClick={handleLogout}
                                        title="Logout"
                                    />
                                </div>
                            </div>
                        ) : (
                            // Login link when user is not authenticated
                            <Link to="/login" style={{ color: "white" }}>
                                Hello, Login
                            </Link>
                        )}
                    </Offcanvas.Title>
                </Offcanvas.Header>

                {/* Offcanvas body with category links */}
                <Offcanvas.Body>
                    <h4 className="fs-5 fw-bold mt-3 mb-2">Shop By Category</h4>
                    <ul>
                        <Link to="/products"><li className="mx-2 fs-6 set_li_side">IndoWestern</li></Link> <br />
                        <Link to="/products"><li className="mx-2 fs-6 set_li_side">Jodhpuri Suit</li></Link><br />
                        <Link to="/products"><li className="mx-2 fs-6 set_li_side">Blazer</li></Link><br />
                        <Link to="/products"><li className="mx-2 fs-6 set_li_side"> Shervani</li></Link><br />
                        <Link to="/products"><li className="mx-2 fs-6 set_li_side"> Trousers</li></Link><br />
                        <Link to="/products"><li className="mx-2 fs-6 set_li_side"> Shirt</li></Link><br />


                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Sidenav;

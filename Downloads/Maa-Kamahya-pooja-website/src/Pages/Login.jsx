import React, { useState } from "react";
import "../Styling/Login.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRegisterfb, userRegistergoogle } from "../Redux/Actions/userActions";
import { useNavigate, Link } from "react-router-dom";


const Login = () => {
  const userLoginData = useSelector((state) => state.userData);
  const { isAuthenticated } = userLoginData;
  console.log(userLoginData, "<<<userLoginData")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };
  if (isAuthenticated) {
    navigate("/");
  }
  return (
    <>
    
    <div className="container vh-100 d-flex align-items-center">
  <div className="row w-100">

    {/* Right side login form */}
    <div className="col-lg-12 d-flex justify-content-center align-items-center">
      <div className="col-lg-12 col-md-12 col-sm-12 loginpage p-4 shadow rounded bg-white">
        <h1 className="login-system text-center mb-3">Login to your account</h1>

        <form className="pt-3" onSubmit={LoginSubmit}>
          {/* Email Field */}
          <div className="form-group mb-3">
            <label htmlFor="email" className="login-text">
              Email Address
            </label>
            <input  type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email Address"
              className="form-control login-input"/>
          </div>

          {/* Password Field */}
          <div className="form-group mb-3">
            <label htmlFor="password" className="login-text">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form-control login-input"/>
          </div>

          {/* Forgot Password */}
          {/* <div className="d-flex justify-content-end mb-3">
            <NavLink
              to="/forgot-password"
              className="login-forgot text-decoration-none">
              Forgot password?
            </NavLink>
          </div> */}

          {/* Login Button */}
          <button className="btn btn-warning  w-100 py-2">Login</button>

          {/* Register Link */}
          <div className="register mt-4 text-dark text-center">
            <p>
              Don't have an account?{" "}
              <NavLink to="/register"
                className="register-account font-weight-bold"
                style={{ color: "black" }}>
                Create an account
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Login;

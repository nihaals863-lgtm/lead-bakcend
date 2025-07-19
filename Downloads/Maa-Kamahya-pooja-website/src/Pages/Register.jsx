import React, { useEffect, useState } from "react";
import "../Styling/Login.css";
import { NavLink } from "react-router-dom";
import { userRegister } from "../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import ProfileIcon from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const userRegisterData = useSelector((state) => state.userData);
  const { isAuthenticated } = userRegisterData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = newUser;
  const [avtar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(ProfileIcon);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const registerSubmit = async (e) => {
    e.preventDefault();

    const userForm = new FormData();
    userForm.set("name", name);
    userForm.set("email", email);
    userForm.set("password", password);
    if (avtar) {
      userForm.set("avtar", avtar); 
    }
    dispatch(userRegister(userForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avtar") {
      const file = e.target.files[0];
      setAvatar(file); 

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };

  
  return (
    <>
<div className="container-fluid vh-100 ">
  <div className="row w-100 h-100">
    {/* Register Form Section */}
    <div className="col-lg-8 offset-lg-2 mt-2 p-5">
      <div className="col-lg-8  offset-lg-2  p-4 shadow rounded bg-white">
        {/* Header */}
        <div className="text-start mb-4">
          <h2 className="">Register a New Account</h2>  </div>

        {/* Form Start */}
        <form className="pt-3" onSubmit={registerSubmit}>
          <div className="row">
            {/* User Name */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <label htmlFor="name" className="login-text fw-semibold">
                User Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={registerDataChange}
                placeholder="Enter User Name"
                className="form-control login-input"
                required
              />
            </div>

            {/* Email */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <label htmlFor="email" className="login-text fw-semibold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={registerDataChange}
                placeholder="Enter your Email Address"
                className="form-control login-input"
                required
              />
            </div>
          </div>

          <div className="row">
            {/* Password */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <label htmlFor="password" className="login-text fw-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={registerDataChange}
                placeholder="Enter your password"
                className="form-control login-input"
                required/>
            </div>

            {/* Confirm Password */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <label htmlFor="confirmPassword" className="login-text fw-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="form-control login-input"
                required/>
            </div>
          </div>

          {/* Profile Image Upload */}
          <div className="form-group mb-3">
            <label htmlFor="avatar" className="login-text fw-semibold">
              Profile Image
            </label>
            <div className="avatar-preview-container d-flex align-items-center">
              <img
                src={avatarPreview}
                alt="preview"
                className="avatar-preview rounded-circle me-3"
                width="50"
                height="50"/>
              <input type="file"
                name="avtar"
                id="avtar"
                className="form-control avatar-input"
                onChange={registerDataChange}
                accept="image/*"
              />
            </div>
          </div>

          {/* Register Button */}
          <button className="btn btn-warning w-100 py-2">Register</button>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <p className="text-muted">
              Already have an account?{" "}
              <NavLink to="/login"
                className="text-primary fw-bold text-decoration-none">
                Login
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

export default Register;

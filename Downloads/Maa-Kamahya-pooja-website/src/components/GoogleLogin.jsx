import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,  signInWithPopup, signOut,} from "firebase/auth";

// Firebase Configuration
  const firebaseConfig = {
            apiKey: "AIzaSyBJ_V5kUv5wAlZypId9IYLSkS-BMYJiQv4",
            authDomain: "replika-d9318.firebaseapp.com",
            projectId: "replika-d9318",
            storageBucket: "replika-d9318.appspot.com",
            messagingSenderId: "243098564656",
            appId: "1:243098564656:web:88b0b8a6dbfb0c0b55788a"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const GoogleLogin = () => {
  const [user, setUser] = useState(null);

  // Google Login Handler
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Error during Google Login:", error);
    }
  };

  // Logout Handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Google Login with Firebase (Single Component)</h2>

      {user ? (
        <div>
          <h5>Welcome, {user.displayName}</h5>
          <img src={user.photoURL} alt="Profile"
            className="img-thumbnail mb-3"
            style={{ width: "150px", borderRadius: "50%" }}/>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={handleGoogleLogin} className="btn btn-primary">
          Login with Google
        </button>
      )}
    </div>
  );
};

export default GoogleLogin;

// LandingPage.js

import React from "react";
import { Link } from "react-router-dom";
import "./styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Safe Steps</h1>
        <p className="landing-description">Help find missing kids!</p>
        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
        <Link to="/login" className="login-link">
          Login
        </Link>{" "}
        {/* New login button */}
      </div>
    </div>
  );
};

export default LandingPage;

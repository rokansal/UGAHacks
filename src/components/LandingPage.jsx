// LandingPage.js

import React from "react";
import { Link } from "react-router-dom";
import "./styles/LandingPage.css";
import LoginButton from "./login";
import HomePage from "./HomePage";
import LogoutButton from "./logout";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Safe Steps</h1>
        <p className="landing-description">Help find missing kids!</p>
        {/* <Link to="/signup" className="signup-link">
          Sign Up
        </Link> */}
        <LoginButton />
        {/* <LogoutButton /> */}
        <HomePage />
      </div>
    </div>
  );
};

export default LandingPage;

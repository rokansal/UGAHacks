// SignUpPage.js

import React from "react";
import { Link } from "react-router-dom";
import "./styles/SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create your Safe Steps account</h2>
        <form className="signup-form">
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              className="signup-input"
              required
              placeholder="Email"
            />
            <input
              type="text"
              id="name"
              name="name"
              className="signup-input"
              required
              placeholder="Full Name"
            />
          </div>
          <div className="input-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="signup-input"
              required
              placeholder="Phone"
            />
            <input
              type="password"
              id="password"
              name="password"
              className="signup-input"
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" className="signup-button">
            Next
          </button>
        </form>
        <p className="signup-login">
          Already have an account? <Link to="/login">Sign in instead</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

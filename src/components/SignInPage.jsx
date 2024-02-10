// SignInPage.js

import React from "react";
import { Link } from "react-router-dom";
import "./styles/SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Sign in to your Safe Steps account</h2>
        <form className="signin-form">
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              className="signin-input"
              required
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              className="signin-input"
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        <p className="signin-forgot">
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
        <p className="signin-signup">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;

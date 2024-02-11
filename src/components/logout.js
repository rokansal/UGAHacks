import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles/LandingPage.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="login-link" onClick={() => logout()}>
      Sign Out
      </button>
    )
    );
};

export default LogoutButton;
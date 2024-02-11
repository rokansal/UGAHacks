import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import "./App.css";
import SignInPage from "./components/SignInPage";
import LoginButton from "./components/login";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<SignInPage/>} />
          <Route path="/li" element={<LoginButton/>} />
          <Route path="/map" element={<LoginButton/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

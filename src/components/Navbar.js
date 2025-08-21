import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
  <div className="navbar">
    {/* Logo + Brand */}
    <Link to="/Homepage" className="navbar-logo">
      <img 
        src={logo}
        alt="Custo Logo"
        className="w-8 h-8 object-contain"
      />
    </Link>

    {/* Navigation Links */}
    <nav className="navbar-links">
      <Link to="/about">About</Link>
      <Link to="/about">Products</Link>
      <Link to="/about">Industries</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/blog">Integration</Link>
    </nav>

    {/* Buttons */}
    <div className="navbar-buttons">
      <button className="btn-outline">Login</button>
      <button className="btn-glossy">Start for Free</button>
    </div>
  </div>
</header>
  );
};

export default Navbar;

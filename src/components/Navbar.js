import React, { useState, useEffect } from "react";  // ✅ added hooks import
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // add class after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // ✅ dynamically add "scrolled" class
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
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
          <Link to="/products">Products</Link>     {/* ✅ fixed duplicate */}
          <Link to="/industries">Industries</Link> {/* ✅ fixed duplicate */}
          <Link to="/pricing">Pricing</Link>
          <Link to="/integrations">Integration</Link>
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

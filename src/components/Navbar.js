import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Custo Logo" />
        </Link>

        {/* Desktop Links */}
        <nav className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/integrations">Integration</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="navbar-buttons">
          <button className="btn-outline">Login</button>
          <button className="btn-glossy">Start for Free</button>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/industries" onClick={() => setMenuOpen(false)}>Industries</Link>
        <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link to="/integrations" onClick={() => setMenuOpen(false)}>Integration</Link>
        
        <button className="btn-outline" onClick={() => setMenuOpen(false)}>Login</button>
        <button className="btn-glossy" onClick={() => setMenuOpen(false)}>Start for Free</button>
      </div>
    </header>
  );
};

export default Navbar;

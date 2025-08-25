import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // for smooth animations
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown menu content
  const dropdowns = {
    products: [
      { title: "Platform Overview", desc: "Learn about our platform.", to: "/products/overview" },
      { title: "SMS Marketing", desc: "Boost sales with SMS campaigns.", to: "/products/sms" },
      { title: "Email Marketing", desc: "Increase engagement with emails.", to: "/products/email" },
      { title: "Automation 360", desc: "Maximize efficiency with automation.", to: "/products/automation" },
    ],
    industries: [
      { title: "Retail", desc: "Solutions for retail businesses.", to: "/industries/retail" },
      { title: "Healthcare", desc: "Boost patient engagement.", to: "/industries/healthcare" },
      { title: "Finance", desc: "Secure finance communication.", to: "/industries/finance" },
    ],
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Desktop Links */}
        <nav className="navbar-links">
          <Link to="/about">About</Link>

          {/* Products Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-title">Products ▾</span>
            <AnimatePresence>
              {activeDropdown === "products" && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {dropdowns.products.map((item, i) => (
                    <Link key={i} to={item.to} className="dropdown-item">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-title">Industries ▾</span>
            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {dropdowns.industries.map((item, i) => (
                    <Link key={i} to={item.to} className="dropdown-item">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/pricing">Pricing</Link>
          <Link to="/integrations">Integration</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="navbar-buttons">
          <button className="btn-outline">Login</button>
          <button className="btn-glossy">Start for Free</button>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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


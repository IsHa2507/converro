import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.svg";
import "./Navbar.css";

import smsImg from "../images/SMS Marketing.svg";
import emailImg from "../images/Email Marketing.svg";
import automationImg from "../images/Automation 360.svg";
import whatsappImg from "../images/WhatsApp Business API.svg";
import ivrImg from "../images/IVR Solution.svg";
import googleImg from "../images/Google Data Extraor.svg";
import tasksImg from "../images/Task & Events.svg";
import obdImg from "../images/OBD_Call.svg";
import invoiceImg from "../images/Invoice & Quotation.svg";
import realEstateImg from "../images/Realstate.svg";
import educationImg from "../images/Education.svg";
import financeImg from "../images/Financial Services.svg";
import travelImg from "../images/Tours and travels.svg";
import callcenterImg from "../images/Call Centers.svg";
import b2bImg from "../images/B2B CRM.svg";
import automobileImg from "../images/Automobile.svg";
import consultingImg from "../images/Consulting.svg";
import servicesImg from "../images/Product and Services.svg";

const dropdowns = {
  products: [
    { title: "SMS Marketing", desc: "Reach more customers instantly with targeted SMS campaigns.", to: "/products/marketing", image: smsImg },
    { title: "Email Marketing", desc: "Boost engagement and conversions with powerful email campaigns.", to: "/products/sales", image: emailImg },
    { title: "Automation 360", desc: "Automate workflows and maximize efficiency with ease.", to: "/products/service", image: automationImg },
    { title: "WhatsApp Business API", desc: "Connect directly with customers using WhatsApp marketing.", to: "/products/content", image: whatsappImg },
    { title: "IVR Solution", desc: "Deliver better experiences with interactive voice response.", to: "/products/operations", image: ivrImg },
    { title: "Google Data Extractor", desc: "Capture leads directly from Google into your CRM.", to: "/products/commerce", image: googleImg },
    { title: "Tasks & Events", desc: "Manage tasks and events seamlessly in one pipeline.", to: "/products/smart-crm", image: tasksImg },
    { title: "OBD Call", desc: "Make safe, hands-free calls with OBD technology.", to: "/products/small-business", image: obdImg },
    { title: "Invoice & Quotation", desc: "Generate invoices and quotations instantly online.", to: "/products/invoice", image: invoiceImg },
  ],
  industries: [
    { title: "Real Estate", desc: "Solutions tailored for real estate businesses", to: "/industries/real-estate", image: realEstateImg },
    { title: "Education", desc: "Engagement tools for schools and universities", to: "/industries/education", image: educationImg },
    { title: "Financial Services", desc: "CRM solutions for banking and finance", to: "/industries/financial-services", image: financeImg },
    { title: "Tours and Travel", desc: "Automation for travel agencies", to: "/industries/tours-travel", image: travelImg },
    { title: "Call Centers", desc: "Scale your call center operations", to: "/industries/call-centers", image: callcenterImg },
    { title: "B2B CRM", desc: "CRM designed for B2B businesses", to: "/industries/b2b-crm", image: b2bImg },
    { title: "Automobile", desc: "CRM for automobile sales and service", to: "/industries/automobile", image: automobileImg },
    { title: "Consulting", desc: "Grow and manage consulting businesses", to: "/industries/consulting", image: consultingImg },
    { title: "Products & Services", desc: "Tools for service-based companies", to: "/industries/products-services", image: servicesImg },
  ],
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
       {/* <div className="work-strip">🚧 Website is under maintenance</div> */}

      <div className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Desktop Links */}
        <nav className="navbar-links">
          <Link to="/aboutus">About</Link>

          {/* Products Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-title">
              Products <ChevronDown size={16} className="dropdown-arrow" />
            </span>
            <AnimatePresence>
              {activeDropdown === "products" && (
                <motion.div
                  className="hubspot-mega-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="dropdown-header">
                    <h3>Converro CRM Platform</h3>
                    <p>Your leads, sales, and customer conversations streamlined in one AI powered hub.</p>
                  </div>

                  <div className="products-grid">
                    {dropdowns.products.map((item, i) => (
                      <Link key={i} to={item.to} className="product-item">
                        <div className="product-icon">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="product-content">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
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
            <span className="dropdown-title">
              Industries <ChevronDown size={16} className="dropdown-arrow" />
            </span>
            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  className="industries-mega-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3>For Calling & WhatsApp Based Sales Teams</h3>
                  <div className="industries-grid">
                    {dropdowns.industries.map((item, i) => (
                      <Link key={i} to={item.to} className="industry-item">
                        <div className="industry-icon">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/pricing">Pricing</Link>
          <Link to="/integrationpage">Integration</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="navbar-buttons">
          <button className="btn-outline" onClick={() => window.location.href = "https://app.converro.online/"}>Login</button>
          <button className="btn-glossy" onClick={() => window.location.href = "https://app.converro.online/register"}>
            Start Free Trial
            <FiArrowRight className="nav-arrow" />
          </button>
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
        <Link to="/aboutus" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/products/marketing" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/industries/real-estate" onClick={() => setMenuOpen(false)}>Industries</Link>
        <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link to="/integrationpage" onClick={() => setMenuOpen(false)}>Integration</Link>

        <button className="btn-outline" onClick={() => window.location.href = "https://app.converro.online/"}>Login</button>
        <button className="btn-glossy" onClick={() => window.location.href = "https://app.converro.online/register"}>
          Start Free Trial
        </button>
      </div>
    </header>
  );
};

export default Navbar;

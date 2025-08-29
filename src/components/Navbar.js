import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { 
  TrendingUp, 
  Briefcase, 
  Heart, 
  FileText, 
  Settings, 
  ShoppingCart, 
  Bot, 
  Sprout,
  ShoppingBag,
  Building2,
  CreditCard,
  ChevronDown,
  Sparkles,
  Users,
  Zap,
  Phone,
  Car,
} from "lucide-react";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const dropdowns = {
  products: [
    { title: "Marketing Hub", desc: "Marketing automation software", to: "/products/marketing", icon: TrendingUp, color: "#000" },
    { title: "Sales Hub", desc: "Sales software", to: "/products/sales", icon: Briefcase, color: "#000" },
    { title: "Service Hub", desc: "Customer service software", to: "/products/service", icon: Heart, color: "#000" },
    { title: "Content Hub", desc: "Content marketing software", to: "/products/content", icon: FileText, color: "#000" },
    { title: "Operations Hub", desc: "Operations software", to: "/products/operations", icon: Settings, color: "#000" },
    { title: "Commerce Hub", desc: "B2B commerce software", to: "/products/commerce", icon: ShoppingCart, color: "#000" },
    { title: "Smart CRM", desc: "AI-powered CRM software", to: "/products/smart-crm", icon: Bot, color: "#000" },
    { title: "Small Business Bundle", desc: "Starter edition for startups and SMBs", to: "/products/small-business", icon: Sprout, color: "#000" },
  ],
  industries: [
    { title: "Real Estate", desc: "Solutions tailored for real estate businesses", to: "/industries/real-estate", icon: Building2, color: "#000" },
    { title: "Education", desc: "Engagement tools for schools and universities", to: "/industries/education", icon: Users, color: "#000" },
    { title: "Financial Services", desc: "CRM solutions for banking and finance", to: "/industries/financial-services", icon: CreditCard, color: "#000" },
    { title: "Tours and Travel", desc: "Automation for travel agencies", to: "/industries/tours-travel", icon: Zap, color: "#000" },
    { title: "Call Centers", desc: "Scale your call center operations", to: "/industries/call-centers", icon: Phone, color: "#000" },
    { title: "B2B CRM", desc: "CRM designed for B2B businesses", to: "/industries/b2b-crm", icon: Briefcase, color: "#000" },
    { title: "Automobile", desc: "CRM for automobile sales and service", to: "/industries/automobile", icon: Car, color: "#000" },
    { title: "Consulting", desc: "Grow and manage consulting businesses", to: "/industries/consulting", icon: Settings, color: "#000" },
    { title: "Products & Services", desc: "Tools for service-based companies", to: "/industries/products-services", icon: ShoppingBag, color: "#000" },
  ],
};

// ✅ FIX: moved this OUTSIDE of dropdowns
// const additionalSections = [
//   { icon: Sparkles, title: "Breeze", desc: "HubSpot's AI that powers the entire customer platform", link: "See all AI features", to: "/ai-features" },
//   { icon: Users, title: "Breeze Agents", desc: "AI-powered specialists that extend your team's marketing, sales, and service capabilities", link: "Meet your AI growth team", to: "/breeze-agents" },
//   { icon: Zap, title: "App Marketplace", desc: "Connect your favorite apps to HubSpot", link: "See all integrations", to: "/integrations" },
// ];

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
    {/* 🔹 Work in Progress Strip (on very top) */}
    <div className="work-strip">
      🚧 Website is under maintenance
    </div>
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
                    <p>Your leads, sales, and customer conversations streamlined in one AI powered hub.</p>
                    {/* <div className="header-buttons">
                      <button className="free-crm-btn">
                        <Bot size={16} />
                        Free HubSpot CRM
                      </button>
                      <button className="overview-btn">
                        <Sparkles size={16} />
                        Overview of all products
                      </button>
                    </div> */}
                  </div>

                  <div className="products-grid">
                    {dropdowns.products.map((item, i) => {
                      const IconComponent = item.icon;
                      return (
                        <Link key={i} to={item.to} className="product-item">
                          <div className="product-icon" style={{ color: item.color }}>
                            <IconComponent size={20} />
                          </div>
                          <div className="product-content">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                            <span className="product-link">Free and premium plans</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* <div className="additional-sections">
                    {additionalSections.map((section, i) => {
                      const IconComponent = section.icon;
                      return (
                        <div key={i} className="additional-section">
                          <div className="section-icon">
                            <IconComponent size={20} />
                          </div>
                          <div className="section-content">
                            <h4>{section.title}</h4>
                            <p>{section.desc}</p>
                            <Link to={section.to} className="section-link">
                              {section.link}
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div> */}
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
                    {dropdowns.industries.map((item, i) => {
                      const IconComponent = item.icon;
                      return (
                        <Link key={i} to={item.to} className="industry-item">
                          <div className="industry-icon" style={{ color: item.color }}>
                            <IconComponent size={20} />
                          </div>
                          <span>{item.title}</span>
                        </Link>
                      );
                    })}
                  </div>
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
          <button className="btn-glossy">Start for Free
            <FiArrowRight className="nav-arrow"/>
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

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import logo from "../public/images/assests/logo.svg";
import "../Styles/Navbar.css";
import ModalForm from "./ModalForm";

// Image imports (Next.js auto-optimizes)
import smsImg from "../public/images/SMS Marketing.svg";
import emailImg from "../public/images/Email Marketing.svg";
import automationImg from "../public/images/Automation 360.svg";
import whatsappImg from "../public/images/WhatsApp Business API.svg";
import ivrImg from "../public/images/IVR Solution.svg";
import googleImg from "../public/images/Google Data Extraor.svg";
import tasksImg from "../public/images/Task & Events.svg";
import obdImg from "../public/images/OBD_Call.svg";
import invoiceImg from "../public/images/Invoice & Quotation.svg";
import realEstateImg from "../public/images/Realstate.svg";
import educationImg from "../public/images/Education.svg";
import financeImg from "../public/images/Financial Services.svg";
import travelImg from "../public/images/Tours and travels.svg";
import callcenterImg from "../public/images/Call Centers.svg";
import b2bImg from "../public/images/B2B CRM.svg";
import automobileImg from "../public/images/Automobile.svg";
import consultingImg from "../public/images/Consulting.svg";
import servicesImg from "../public/images/Product and Services.svg";

const dropdowns = {
  industries: [
    { title: "Real Estate", desc: "Solutions tailored for real estate businesses", to: "/crmsections?cat=real-estate", image: realEstateImg },
    { title: "Education", desc: "Engagement tools for schools and universities", to: "/crmsections?cat=education", image: educationImg },
    { title: "Financial Services", desc: "CRM solutions for banking and finance", to: "/crmsections?cat=financial-services", image: financeImg },
    { title: "Tours and Travel", desc: "Automation for travel agencies", to: "/crmsections?cat=tours-travels", image: travelImg },
    { title: "Call Centers", desc: "Scale your call center operations", to: "/crmsections?cat=callcenters", image: callcenterImg },
    { title: "B2B CRM", desc: "CRM designed for B2B businesses", to: "/crmsections?cat=b2b-crm", image: b2bImg },
    { title: "Automobile", desc: "CRM for automobile sales and service", to: "/crmsections?cat=automobile", image: automobileImg },
    { title: "Healthcare", desc: "CRM for hospitals and clinics", to: "/crmsections?cat=healthcare", image: consultingImg },
    { title: "Hospitality", desc: "CRM for hotels and hospitality industry", to: "/crmsections?cat=hospitality", image: servicesImg },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        {/* ✅ Logo */}
        <Link href="/" className="navbar-logo2">
          <Image src={logo} alt="Logo" priority />
        </Link>

        {/* ✅ Desktop Links */}
        <nav className="navbar-links">
          <Link href="/aboutus">About</Link>
          <Link href="/productsection">Features</Link>

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
                  <h3>
                    Converro CRM for Industry — AI-powered Workflows, Sales, and
                    Customer Conversations in One Place
                  </h3>

                  <div className="industries-grid">
                    {dropdowns.industries.map((item, i) => (
                      <Link key={i} href={item.to} className="industry-item">
                        <div className="industry-icon">
                          <Image src={item.image} alt={item.title} />
                        </div>
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/pricing">Pricing</Link>
          <Link href="/integrationpage">Integration</Link>
          <Link href="/contactus">Contact</Link>
        </nav>

        {/* ✅ Desktop Buttons */}
        <div className="navbar-buttons">
          <button
            className="btn-outline"
            onClick={() => (window.location.href = "https://app.converro.online/")}
          >
            Login
          </button>

          <button className="btn-glossy" onClick={() => setIsModalOpen(true)}>
            Start Free Trial
            <FiArrowRight className="nav-arrow" />
          </button>

          {/* Modal */}
          <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>

        {/* ✅ Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link href="/aboutus" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/productsection" onClick={() => setMenuOpen(false)}>Features</Link>
        <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link href="/integrationpage" onClick={() => setMenuOpen(false)}>Integration</Link>
        <Link href="/contactus" onClick={() => setMenuOpen(false)}>Contact</Link>

        <button
          className="btn-outline"
          onClick={() => (window.location.href = "https://app.converro.online/")}
        >
          Login
        </button>

        <button
          className="btn-glossy"
          onClick={() => (window.location.href = "https://app.converro.online/register")}
        >
          Start Free Trial
        </button>
      </div>
    </header>
  );
}

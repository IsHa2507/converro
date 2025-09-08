import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBuilding,
  FaBook,
  FaCar,
  FaPhone,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import "./CRMSection.css";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const categories = [
  { id: 1, name: "Real Estate", slug: "real-estate", icon: <FaBuilding /> },
  { id: 2, name: "Education", slug: "education", icon: <FaBook /> },
  { id: 3, name: "Tours & Travels", slug: "tours-travels", icon: <MdTravelExplore /> },
  { id: 4, name: "Financial Services", slug: "financial-services", icon: <BsGraphUp /> },
  { id: 5, name: "Automobile", slug: "automobile", icon: <FaCar /> },
  { id: 6, name: "Callcenters", slug: "callcenters", icon: <FaPhone /> },
  { id: 7, name: "B2B CRM", slug: "b2b-crm", icon: <BsGraphUp /> },
  { id: 8, name: "Healthcare", slug: "healthcare", icon: <FaBuilding /> },
  { id: 9, name: "Hospitality", slug: "hospitality", icon: <FaBuilding /> },
];

export default function CRMSection() {
  const location = useLocation();
  const [active, setActive] = useState(1);
  const buttonRefs = useRef({});

  // On load, check query param to set correct category
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catSlug = params.get("cat");
    if (catSlug) {
      const found = categories.find((c) => c.slug === catSlug);
      if (found) setActive(found.id);
    }
  }, [location.search]);

  // Auto-scroll active button into view
  useEffect(() => {
    if (buttonRefs.current[active]) {
      buttonRefs.current[active].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  // Arrow button navigation
  const handleArrow = (direction) => {
    setActive((prev) => {
      if (direction === "left") {
        return prev > 1 ? prev - 1 : prev;
      } else {
        return prev < categories.length ? prev + 1 : prev;
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="crm-section">
        {/* Toggle Bar */}
        <div className="toggle-wrapper">
          <button className="scroll-btn left" onClick={() => handleArrow("left")}>
            <FaArrowLeft />
          </button>

          <div className="toggle-container">
            <div className="toggle-bar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  ref={(el) => (buttonRefs.current[cat.id] = el)}
                  onClick={() => setActive(cat.id)}
                  className={`toggle-item ${active === cat.id ? "active" : ""}`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>

          <button className="scroll-btn right" onClick={() => handleArrow("right")}>
            <FaArrowRight />
          </button>
        </div>

        {/* Content Section */}
        <div className="content">
          <h1>
            Best <span>{categories.find((c) => c.id === active)?.name}</span> CRM
          </h1>
          <p>
            Converro helps you manage inquiries, track leads, and close{" "}
            <b>{categories.find((c) => c.id === active)?.name}</b> deals faster.
            From buyer follow-ups to custom workflows, everything is built to
            maximize sales efficiency and client satisfaction.
          </p>
          <button className="cta-indus">Start Free Trial
            <FiArrowRight className="Indus-arrow" />
            </button>
          <p className="trust">
            Trusted by <b>3K+ companies</b> around the world
          </p>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
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

import "../Pages/CRMSection.css"; // adjust path
import Navbar from "../Components/Navbar";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import CRMIndusFeatures from "../Pages/CRMfeatures";

import imgcrm1 from "../public/images/CRMIMG1.png";
import imgcrm2 from "../public/images/CRMIMG2.png";
import imgcrm3 from "../public/images/CRMIMG3.png";
import imgcrm4 from "../public/images/CRM Img 4.png";
import imgcrm5 from "../public/images/CRM Img 5.png";

const categories = [
  {
    id: 1,
    name: "Real Estate",
    title: <>Best <span>Real Estate</span> CRM for Property Sales & Rentals </>,
    text:
      "Converro helps you manage inquiries, track leads, and close property deals faster. From buyer follow-ups to custom workflows, everything is built to maximize sales efficiency and client satisfaction.",
    slug: "real-estate",
    icon: <FaBuilding />,
  },
  {
    id: 2,
    name: "Education",
    title: <>Smart <span>Education</span> CRM for Schools & Colleges </>,
    text:
      "Simplify admissions, manage student inquiries, and boost enrollment with personalized engagement. Converro adapts to your education workflow, ensuring no lead or student query is missed.",
    slug: "education",
    icon: <FaBook />,
  },
  {
    id: 3,
    name: "Tours & Travels",
    title: <>Powerful <span>Travel CRM</span> for Agencies & Operators </>,
    text:
      "From inbound inquiries to itinerary planning, Converro helps you increase bookings, improve engagement, and deliver memorable customer journeys that bring clients back again and again.",
    slug: "tours-travels",
    icon: <MdTravelExplore />,
  },
  {
    id: 4,
    name: "Financial Services",
    title: <>Secure <span>Financial CRM</span> for Banks & FinTech </>,
    text:
      "Converro enables financial institutions to manage client portfolios, automate follow-ups, and ensure compliance—all while building trust through personalized communication.",
    slug: "financial-services",
    icon: <BsGraphUp />,
  },
  {
    id: 5,
    name: "Automobile",
    title: <>Next-Gen <span>Automobile CRM</span> for Dealers & Showrooms </>,
    text:
      "From test-drive bookings to post-sale service, Converro helps you manage leads, track customers, and increase vehicle sales with personalized follow-ups.",
    slug: "automobile",
    icon: <FaCar />,
  },
  {
    id: 6,
    name: "Callcenters",
    title: <>High-Performance <span>Call Center CRM</span> </>,
    text:
      "Boost agent productivity with lead auto-assignment, smart call routing, and real-time analytics. Converro ensures consistent communication that keeps customers engaged.",
    slug: "callcenters",
    icon: <FaPhone />,
  },
  {
    id: 7,
    name: "B2B CRM",
    title: <>Scalable <span>B2B CRM</span> for Sales Teams </>,
    text:
      "Track deals, nurture prospects, and streamline your entire sales cycle with Converro. From lead capture to contract closure, everything you need for B2B success lives in one platform.",
    slug: "b2b-crm",
    icon: <BsGraphUp />,
  },
  {
    id: 8,
    name: "Healthcare",
    title: <>Patient-Centric <span>Healthcare CRM</span> </>,
    text:
      "Manage patient inquiries, appointment scheduling, and follow-ups with ease. Converro helps clinics and hospitals deliver seamless, personalized care experiences.",
    slug: "healthcare",
    icon: <FaBuilding />,
  },
  {
    id: 9,
    name: "Hospitality",
    title: <>Guest-Focused <span>Hospitality CRM</span> </>,
    text:
      "Enhance guest engagement, manage reservations, and increase repeat bookings. Converro allows hotels and restaurants to build strong guest relationships with data-driven insights.",
    slug: "hospitality",
    icon: <FaBuilding />,
  },
];

export const crmFeatures = {
  // Example: Only "real-estate" shown for brevity; you can copy all other categories similarly
  "real-estate": [
    { id: 1, tag: "Integration Capabilities", title: "Capture leads from all property portals", description: "Stop juggling between multiple platforms...", img: imgcrm1 },
    { id: 2, tag: "Telesales Management", title: "Boost property deal conversions", description: "Close more deals with less effort...", img: imgcrm2 },
    { id: 3, tag: "Lead Management", title: "Complete client & property interaction history", description: "Never lose track of a buyer’s journey...", img: imgcrm3 },
    { id: 4, tag: "Follow-up Call Reminders", title: "Never miss a client touchpoint", description: "Missed follow-ups mean missed deals...", img: imgcrm4 },
    { id: 5, tag: "Team Management", title: "Track your property agents", description: "Keep full visibility on field teams...", img: imgcrm5 },
  ],
};

export default function CRMSection() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState(1);
  const buttonRefs = useRef({});

  // On load, check query param to set correct category
  useEffect(() => {
    const catSlug = searchParams.get("cat");
    if (catSlug) {
      const found = categories.find((c) => c.slug === catSlug);
      if (found) setActive(found.id);
    }
  }, [searchParams]);

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

  const handleArrow = (direction) => {
    setActive((prev) => {
      if (direction === "left") return prev > 1 ? prev - 1 : prev;
      return prev < categories.length ? prev + 1 : prev;
    });
  };

  const activeCat = categories.find((c) => c.id === active);
  const activeFeatures = crmFeatures[activeCat?.slug] || [];

  return (
    <>
      <Navbar />

      {/* Toggle Bar */}
      <div className="crm-section">
        <div className="toggle-wrapper">
          <div className="toggle-container">
            <button className="scroll-btn inside left" onClick={() => handleArrow("left")}>
              <FaArrowLeft />
            </button>

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

            <button className="scroll-btn inside right" onClick={() => handleArrow("right")}>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="content">
          <h1>{activeCat?.title}</h1>
          <p>{activeCat?.text}</p>
          <button
            className="cta-indus"
            onClick={() => (window.location.href = "https://app.converro.online/register")}
          >
            Start Free Trial <FiArrowRight className="Indus-arrow" />
          </button>
          <p className="trust">
            Trusted by <b>3K+ companies</b> around the world
          </p>
        </div>
      </div>

      <CRMIndusFeatures />

      {/* Section Heading */}
      <div className="feature-heading">
        <h2>
          Key Features in a <span>{activeCat?.name}</span> CRM Software
        </h2>
        <p>
          A {activeCat?.name} CRM like Converro has a unique set of features tailored to meet the unique requirements of all {activeCat?.name.toLowerCase()} businesses.
        </p>
      </div>

      {/* 5-Box Alternating Feature Layout */}
      <div className="feature-section">
        {activeFeatures.map((f, index) => (
          <div key={f.id} className={`feature-box ${index % 2 === 0 ? "normal" : "reverse"}`}>
            <div className="feature-img">
              <Image src={f.img} alt={f.title} width={500} height={300} />
            </div>
            <div className="feature-text">
              <span className="feature-tag">#{f.tag || "Feature"}</span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
              <button className="start-btn-crm" onClick={() => window.location.href = "https://app.converro.online/register"}>
                Start For Free
              </button>
            </div>
          </div>
        ))}
      </div>

   
    </>
  );
}

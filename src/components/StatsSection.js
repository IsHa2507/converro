import React from "react";
import {
  FaBuilding,
  FaUniversity,
  FaBriefcase,
  FaSuitcase,
  FaIndustry,
  FaShieldAlt,
  FaCar,
  FaBullhorn,
  FaHandsHelping,
  FaUsers,
  FaHospital,
  FaHeartbeat,
} from "react-icons/fa";
import { MdOutlineTravelExplore, MdOutlineSchool } from "react-icons/md";
import {
  FiMonitor,
  FiMail,
  FiMessageSquare,
  FiDatabase,
  FiFileText,
  FiCalendar,
  FiHeadphones,
  FiPhoneCall,
  FiVolume2,
  FiCpu,
} from "react-icons/fi";
import "./StatsSection.css";

const StatsSection = () => {
  const industries = [
    { name: "Real Estate", icon: <FaBuilding /> },
    { name: "Finance & Loans", icon: <FaUniversity /> },
    { name: "Consulting Services", icon: <FaBriefcase /> },
    { name: "Education", icon: <MdOutlineSchool /> },
    { name: "Legal Services", icon: <FaSuitcase /> },
    { name: "Hospitality & Travel", icon: <MdOutlineTravelExplore /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
    { name: "Insurance", icon: <FaShieldAlt /> },
    { name: "Automobile Industry", icon: <FaCar /> },
    { name: "Marketing Agency", icon: <FaBullhorn /> },
    { name: "Nonprofits", icon: <FaHandsHelping /> },
    { name: "SMEs & MSMEs", icon: <FaUsers /> },
    { name: "B2B & D2C", icon: <FiMonitor /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Fitness & Wellness", icon: <FaHeartbeat /> },
  ];

  const features = [
    { name: "CRM", icon: <FiMonitor /> },
    { name: "Automation 360", icon: <FiCpu /> },
    { name: "WhatsApp Marketing", icon: <FiMessageSquare /> },
    { name: "Email Marketing", icon: <FiMail /> },
    { name: "SMS Marketing", icon: <FiMessageSquare /> },
    { name: "Google Data Extractor", icon: <FiDatabase /> },
    { name: "Invoice & Quotation", icon: <FiFileText /> },
    { name: "Appointment", icon: <FiCalendar /> },
    { name: "Helpdesk", icon: <FiHeadphones /> },
    { name: "IVR Service", icon: <FiPhoneCall /> },
    { name: "Call Broadcast", icon: <FiVolume2 /> },
    { name: "AI Marketing", icon: <FiCpu /> },
  ];

  return (
    <section className="stat-section">
  <div className="stat-container">
    
    {/* LEFT SIDE in a box */}
    <div className="stat-left-box">
      <span className="stat-tag">#1 Automation Platform</span>
      <h2 className="stat-heading">Your All-in-One CRM for Lead Conversion</h2>
      <p className="stat-description">
        Tired of losing track of your online leads? <strong>Converro</strong>{" "}
        is the simple, powerful solution designed for small businesses,
        marketers, and solopreneurs. Effortlessly capture, contact, and
        convert leads on the go from your laptop or your phone. We’re the
        trusted partner for professionals in hundreds of industries, helping
        them turn conversations into conversions.
      </p>

      <h3 className="stat-subheading">Industries we served:</h3>
      <div className="stat-industries-grid">
        {industries.map((industry, idx) => (
          <div key={idx} className="stat-industry-item">
            <span className="stat-industry-icon">{industry.icon}</span>
            <p>{industry.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE (Features) */}
    <div className="stat-right-box">
      <h3 className="stat-subheading">Some of our product Features</h3>
      <div className="stat-features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="stat-feature-card">
            <span className="stat-feature-icon">{feature.icon}</span>
            <p>{feature.name}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

  );
};

export default StatsSection;


// import React, { useEffect, useRef, useState } from "react";
// import "./StatsSection.css";
// import statsImg from "../assets/background.png"; // use your uploaded image

// const StatsSection = () => {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       {/* Image Section */}
//       <section
//         ref={sectionRef}
//         className={`stats-section ${visible ? "fade-in" : ""}`}
//       >
//         <img src={statsImg} alt="Deals Section" className="stats-image" />
//       </section>

      
      
//     </div>
//   );
// };

// export default StatsSection;


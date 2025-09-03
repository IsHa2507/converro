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
import "./StatsSection.css";

// 👉 Import your images here
import crmImg from "../images/CRM.png";
import automationImg from "../images/Automation.png";
import whatsappImg from "../images/WhatsApp Marketing.png";
import emailImg from "../images/Email Marketing.png";
import smsImg from "../images/SMS Marketing.png";
import extractorImg from "../images/Google Data Extractor.png";
import invoiceImg from "../images/Invoice & Quatation.png";
import appointmentImg from "../images/Appointment.png";
import helpdeskImg from "../images/Helpdesk.png";
import ivrImg from "../images/IVR Service.png";
import callImg from "../images/Call Broadcast.png";
import aiImg from "../images/AI Marketing.png";

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
    { name: "B2B & D2C", icon: <FaBuilding /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Fitness & Wellness", icon: <FaHeartbeat /> },
  ];

  // 👉 Use images instead of icons here
  const features = [
    { name: "CRM", icon: crmImg },
    { name: "Automation 360", icon: automationImg },
    { name: "WhatsApp Marketing", icon: whatsappImg },
    { name: "Email Marketing", icon: emailImg },
    { name: "SMS Marketing", icon: smsImg },
    { name: "Google Data Extractor", icon: extractorImg },
    { name: "Invoice & Quotation", icon: invoiceImg },
    { name: "Appointment", icon: appointmentImg },
    { name: "Helpdesk", icon: helpdeskImg },
    { name: "IVR Service", icon: ivrImg },
    { name: "Call Broadcast", icon: callImg },
    { name: "AI Marketing", icon: aiImg },
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

        {/* RIGHT SIDE (Features with images) */}
        <div className="stat-right-box">
          <h3 className="stat-subheading">Some of our product Features</h3>
          <div className="stat-features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="stat-feature-card">
                <span className="stat-feature-icon">
                  <img src={feature.icon} alt={feature.name} />
                </span>
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


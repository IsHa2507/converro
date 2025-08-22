import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaEnvelope, FaWhatsapp, FaRegLifeRing } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

import "./CustomerHelp.css";

const PrinciplesSection = () => {
  const principles = [
    {
      icon: <AiFillQuestionCircle className="circle-icon blue" />,
      title: "General Inquiry",
      description:
        "Have questions about our company, services, or need basic information? Our team is here to provide quick answers and guide you in the right direction.",
      email: "mailto:info@converro.io",
      whatsapp: "https://wa.me/9211616225",
    },
    {
      icon: <FaRegLifeRing className="circle-icon green" />,
      title: "Sales Inquiry",
      description:
        "Looking to explore our product features, pricing, or partnership opportunities? Connect with our sales experts to discover how we can add value to your business.",
      email: "mailto:sales@converro.io",
      whatsapp: "https://wa.me/9211616225",
    },
    {
      icon: <BiSupport className="circle-icon red" />,
      title: "Customer Support",
      description:
        "Already a customer and need help with your account, subscription, or technical issues? Our support team is ready to assist you at every step.",
      email: "mailto:support@converro.io",
      whatsapp: "https://wa.me/9211616225",
    },
  ];

  return (
    <section className="principles-section">
      <div className="principles-container">
        <h2 className="principles-heading">
          For Customer Supports & Services
        </h2>
        <p className="principles-subheading">
          Let’s connect and understand how we can enable your business to grow faster.
        </p>

        <div className="principles-grid">
          {principles.map((item, index) => (
            <div key={index} className="principle-card">
              <div className="principle-icon-wrapper">{item.icon}</div>
              <h3 className="principle-title">{item.title}</h3>
              <p className="principle-description">{item.description}</p>

              {/* Action Buttons */}
              <div className="principle-actions">
                <a
                  href={item.email}
                  className="action-btn email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="btn-icon" />{" "}
                  {item.email.replace("mailto:", "")}
                </a>
                <a
                  href={item.whatsapp}
                  className="action-btn whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="btn-icon" /> Whatsapp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;



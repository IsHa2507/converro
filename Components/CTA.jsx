"use client";

import React from "react";
import "../Styles/CTA.css"; // adjust path if needed
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  const handleClick = () => {
    window.location.href = "https://app.converro.online/register";
  };

  return (
    <section className="cta-section">
      <div className="cta-bg"></div>
      <div className="cta-content">
        <h2>Start Growing with Converro Now</h2>
        <p>
          Take control of your sales pipeline, automate tasks, and build stronger
          customer relationships with ease.
        </p>
        <button className="CTA-button" onClick={handleClick}>
          Start Free Trial
          <FiArrowRight className="CTA-arrow" />
        </button>
      </div>
    </section>
  );
}

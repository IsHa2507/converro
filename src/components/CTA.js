// CTA.js
import React from "react";
import "./CTA.css";
// import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-bg"></div>
      <div className="cta-content">
        <h2>Start Growing with Converro Now</h2>
        <p>
          Take control of your sales pipeline, automate tasks, and build stronger
          customer relationships with ease.
        </p>
        <button> Start for Free
          {/* <FiArrowRight className="CTA-arrow" /> */}
        </button>
      </div>
    </section>
  );
}

import React from "react";
import "./WhatWeDo.css";
import { FaLayerGroup } from "react-icons/fa";

const advantages = [
  {
    title: "AI-Powered Efficiency",
    desc: "Automate repetitive tasks and save hours every week.",
  },
  {
    title: "Smarter Sales Decisions",
    desc: "Real-time insights guide your next move.",
  },
  {
    title: "Always-On Support",
    desc: "Ensures 24/7 engagement and query resolution.",
  },
  {
    title: "Seamless Customer Experience",
    desc: "Delight clients with instant, personalized interactions.",
  },
  {
    title: "Scalable Growth",
    desc: "From startups to enterprises, Converro grows with you.",
  },
  {
    title: "Secure & Reliable",
    desc: "Enterprise-grade security keeps your data safe.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="whatwedo-section">
      <div className="whatwedo-container">
        <h2 className="whatwedo-title">What we do?</h2>
        <p className="whatwedo-text">
          “Converro empowers businesses with AI-powered efficiency, automating
          repetitive tasks to save valuable time while delivering a seamless
          customer experience through instant, personalized interactions. With
          real-time insights that drive smarter sales decisions, our platform
          scales effortlessly from startups to enterprises, ensuring 24/7
          engagement and support to keep your business growing without limits.”
        </p>

        <h3 className="advantages-title">Converro Advantages</h3>
        <div className="advantages-grid">
          {advantages.map((item, index) => (
            <div className="advantage-card" key={index}>
              <span className="advantage-icon">
                <FaLayerGroup />
              </span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

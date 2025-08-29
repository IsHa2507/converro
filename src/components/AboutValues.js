import React from "react";
import { FaChartPie, FaChartLine, FaShieldAlt, FaCog } from "react-icons/fa";
import "./AboutValues.css";

const features = [
  {
    icon: <FaChartPie />,
    title: "Innovation at Core",
    text: " We harness AI and modern tech to build future-ready solutions.",
    color: "#0f5132",
  },
  {
    icon: <FaChartLine />,
    title: "Customer First",
    text: "Every product and decision is centered on driving client growth.",
    color: "#f56539",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity & Transparency",
    text: "We believe in honesty, clarity, and long-term trust.",
    color: "#4f46e5",
  },
  {
    icon: <FaCog />,
    title: "Excellence in Action ",
    text: "We aim for simplicity, quality, and results that truly matter.",
    color: "#facc15",
  },
];

const Features = () => {
  return (
     <section className="features-bg">
  <div className="features-wrapper">
    <h2 className="features-heading">
      <span className="black-text">Our</span>{" "}
      <span className="green-text">Values</span>
    </h2>

    <div className="features-section">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon" style={{ color: item.color }}>
            {item.icon}
          </div>
          <h3 className="feature-title">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Features;

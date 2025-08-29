import React from "react";
import { FaChartPie, FaChartLine, FaShieldAlt, FaCog } from "react-icons/fa";
import "./AboutValues.css";
import imgf1 from "../images/Customer.svg";
import imgf2 from "../images/Excellence.svg";
import imgf3 from "../images/Innovation1.svg";
import imgf4 from "../images/Trust.svg";
const features = [
  {
    image: imgf3,
    title: "Innovation at Core",
    text: " We harness AI and modern tech to build future-ready solutions.",
    color: "#0f5132",
  },
  {
    image: imgf1,
    title: "Customer First",
    text: "Every product and decision is centered on driving client growth.",
    color: "#f56539",
  },
  {
    image: imgf4,
    title: "Integrity & Transparency",
    text: "We believe in honesty, clarity, and transparency to build lasting trust.",
    color: "#4f46e5",
  },
  {
    image: imgf2,
    title: "Excellence in Action ",
    text: "We aim for simplicity, quality, and real results that truly matter.",
    color: "#facc15",
  },
];

const Features = () => {
  return (
     <section className="features-bg">
  <div className="features-wrapper">
    <h2 className="features-heading">
      <span className="black-text">Our Values </span>{" "}
      
    </h2>

    <div className="features-section">
      {features.map((item, index) => (
       <div className="feature-card" key={index}>
  <div className="feature-icon">
    <img src={item.image} alt={item.title} />
  </div>
  <div className="feature-content">
    <h3>{item.title}</h3>
    <p>{item.text}</p>
  </div>
</div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Features;

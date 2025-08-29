import React from "react";
import Navbar from "../components/Navbar";
import "./AboutUs.css";

const AboutUS = () => {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <h2>About Custo</h2>
        <p className="subtitle">
          Custo is a team of passionate makers dedicated to building tools that empower businesses to grow.
        </p>

        <div className="parent">
          <div className="div1">
            <img
              src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
              alt="Team 1"
            />
          </div>

          <div className="div3 center-box">
            <div className="center-content">
              <div className="icon">👥</div>
              <h3>A Team Committed to Real Impact</h3>
              <p>
                Custo is built by a diverse team of thinkers and builders who care deeply about helping businesses grow.
                With a focus on simplicity, performance, and people, we’re creating solutions that truly make a difference.
              </p>
            </div>
          </div>

          <div className="div4">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
              alt="Team 2"
            />
          </div>

          <div className="div5">
            <img
              src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg"
              alt="Team 3"
            />
          </div>

          <div className="div6">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
              alt="Team 4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUS;

import React from "react";
import Navbar from "../components/Navbar";
import "./AboutUs.css";
import AboutValues from "./AboutValues";
import Differentstory from "./Differentstory";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import MissionIdeaSection from "./MissionIdeas";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <h2>About Us</h2>
        <p className="subtitle">
          At Converro, we believe every lead deserves attention.<br /> Too many
          businesses lose potential customers because of scattered tools,
          delayed follow-ups, and missed opportunities. We set out to solve this
          with one simple promise: capture, connect, and convert effortlessly.
        </p>

        <div className="about-layout">
          {/* Left Column */}
          <div className="column">
            <div className="about-card">
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                alt="Team working"
              />
            </div>
            <div className="about-card">
              <img
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
                alt="Team brainstorming"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="column">
            <div className="about-card dark-card">
              {/* <div className="icon">👥</div>
              <h3>t</h3>
              <p>
                Custo is built by a diverse team of thinkers and builders who
                care deeply about helping businesses grow. With a focus on
                simplicity, performance, and people, we’re creating solutions
                that truly make a difference.
              </p> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="column">
            <div className="about-card">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Team meeting"
              />
            </div>
            <div className="about-card">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
<section className="metrics-section">
  <div className="metrics-grid">
    <div className="metric-card">
      <h3 className="metric-number">10K+</h3>
      <h4 className="metric-title">Users Worldwide</h4>
      <p>
        Businesses trust Converro to streamline sales and manage customer
        relationships.
      </p>
    </div>

    <div className="metric-card">
      <h3 className="metric-number">30%</h3>
      <h4 className="metric-title">Faster Sales Cycles</h4>
      <p>
        Optimize your sales process and close deals more efficiently with
        automated workflows.
      </p>
    </div>

    <div className="metric-card">
      <h3 className="metric-number">$1B</h3>
      <h4 className="metric-title">in Deals Closed</h4>
      <p>
        Track high-value opportunities and drive revenue growth
        effortlessly.
      </p>
    </div>
  </div>
</section>
<AboutValues/>
<Differentstory/>
<MissionIdeaSection/>
<CTA/>
<Footer/>
    </>
  );
};

export default AboutUs;



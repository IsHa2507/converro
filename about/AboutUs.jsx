"use client";

import Image from "next/image";
import "../Styles/AboutUs.css";
import AboutValues from "./AboutValues";
import Differentstory from "../about/Differentstory";
import MissionIdeaSection from "./MissionIdeas";
import WhatWeDo from "./WhatWeDo";
import HandshakeImg from "../public/images/handshake.svg";
import { FiArrowRight } from "react-icons/fi";

export default function AboutUs() {
  return (
    <>
      <section className="about-section">
        <h2>About Us</h2>
        <p className="subtitle">
          At Converro, we believe every lead deserves attention.<br />
          Too many businesses lose potential customers because of scattered
          tools, delayed follow-ups, and missed opportunities. We set out to
          solve this with one simple promise: capture, connect, and convert
          effortlessly.
        </p>

        <div className="about-layout">
          {/* Left Column */}
          <div className="column">
            <div className="about-card">
              <Image
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                alt="Team working"
                width={500}
                height={500}
              />
            </div>
            <div className="about-card">
              <Image
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
                alt="Team brainstorming"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="column">
            <div className="about-card dark-card">
              <Image
                src={HandshakeImg}
                alt="Handshake"
                className="dark-icon"
                width={80}
                height={80}
              />
              <h3 className="dark-title">Our Story</h3>
              <p className="dark-text">
                Converro was born out of frustration with CRMs that were too
                complex, too slow, or too expensive. We set out to build
                something different — an intelligent, easy-to-use CRM that
                brings every lead and conversation into one smart hub.
                <br />
                <br />
                Today, Converro ensures no opportunity ever slips away.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="column">
            <div className="about-card">
              <Image
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Team meeting"
                width={500}
                height={500}
              />
            </div>
            <div className="about-card">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Team collaboration"
                width={500}
                height={500}
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

      <WhatWeDo />
      <AboutValues />
      <Differentstory />
      <MissionIdeaSection />
     
    </>
  );
}

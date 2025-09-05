import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ParallaxSections.css";
import { FiArrowRight } from "react-icons/fi";
import Pimg1 from "../images/Image1.png";
import Pimg2 from "../images/Image2.png";
import Pimg3 from "../images/Image3.png";
import Pimg4 from "../images/Image4.png";
import Pimg5 from "../images/Image5.png";

const contents = [
  {
    id: 1,
    title: "Lead Capture Made Simple",
    heading: "Get Leads from Every Channel in One Place",
    text: [
      "Converro unifies your lead sources whether from Facebook Ads, TikTok, Google Forms, WordPress, and more into a single, powerful dashboard. No extra tools, no messy setup just effortless lead collection.",
      "And it doesn’t stop there. Engage instantly through WhatsApp, SMS, iMessage, email, or phone calls, all seamlessly integrated.",
      "⚡ Be ready to capture and engage leads in under 30 seconds."
    ],
    image: Pimg1,
    buttonText: "Start For Free"
  },
  {
    id: 2,
    title: "Smart Lead Management",
    heading: "Assign Leads & Track Sales from One Dashboard",
    text: [
      "Converro makes it easy to create teams and sub-teams while automatically assigning leads using your own custom rules. Setup takes just minutes, and new leads from campaigns like Facebook Ads are delivered straight to your team’s mobile devices—ready to act.",
      "Stay in control with real-time analytics that let you monitor progress, measure performance, and optimize sales at every stage.",
      "⚡ Faster assignments. Smarter tracking. Stronger results."
    ],
    image: Pimg2,
    buttonText: "Start For Free"
  },
  {
    id: 3,
    title: "Automated Outreach",
    heading: "Boost Outreach with a Personal Touch",
    text: [
      "Converro helps you engage prospects at scale without losing the human connection. Automate emails, texts, calls, and follow-ups—all personalized to each lead—so your team spends less time on repetitive tasks and more time closing deals.",
      "Key Capabilities:",
      "Sales Sequences",
      "Lead Assignment",
      "Sales Automation",
      "Activity Automation",
      "⚡ More personalization. More efficiency. More conversions."
    ],
    image: Pimg3,
    buttonText: "Start For Free"
  },
  {
    id: 4,
    title: "Productivity Unlocked",
    heading: "Maximize Productivity & Revenue per Rep",
    text: [
      "Converro empowers your team to sell smarter, not harder. Eliminate repetitive tasks with reusable sales playbooks and automated cadences that keep every rep focused on closing deals. Turn your sales team into a revenue-generating powerhouse with tools designed for speed and efficiency.",
      "Key Capabilities:",
      "Sales Sequences",
      "Lead Assignment",
      "Sales Automation",
      "Activity Automation",
      "Less busywork"
    ],
    image: Pimg4,
    buttonText: "Start For Free"
  },
  {
    id: 5,
    title: "Visual Workflow Builder",
    heading: "Build with Freedom on a Visual Canvas",
    text: [
      "Design workflows the way your business works. With Converro’s intuitive visual canvas, you can connect apps, automate tasks, and let data flow seamlessly between platforms.",
      "Powered by a cloud-based API toolkit, Converro makes it simple to create powerful integrations and automate processes—without writing a single line of code.",
      "⚡ Connect anything. Automate everything."
    ],
    image: Pimg5,
    buttonText: "Start For Free"
  }
];

const FixedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // disable scroll logic on mobile

    const handleScroll = () => {
      const section = document.getElementById("fixed-section");
      if (section) {
        const scrollTop = window.scrollY - section.offsetTop;
        const blockHeight = window.innerHeight;
        const newIndex = Math.min(
          contents.length - 1,
          Math.max(0, Math.floor(scrollTop / blockHeight))
        );
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const scrollToBlock = (index) => {
    const block = document.getElementById(`block${contents[index].id}`);
    if (block) {
      block.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="fixed-section" className="parallax-section">
      <div className="parallax-container">
        {/* Desktop sticky image */}
        {!isMobile && (
          <div className="parallax-green-box desktop-only">
            <div className="image-wrapper">
              <AnimatePresence mode="wait">
                <motion.img
                  key={contents[activeIndex].id}
                  src={contents[activeIndex].image}
                  alt={contents[activeIndex].title}
                  className="content-img"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Text + Images */}
        <div className={isMobile ? "parallax-text-sections mobile-only" : "parallax-text-sections"}>
          {contents.map((item, index) => (
            <section
              key={item.id}
              className={`parallax-text-block ${index === activeIndex ? "active" : ""}`}
              id={`block${item.id}`}
            >
              {/* Mobile shows image above text */}
              {isMobile && (
                <div className="mobile-image-wrapper">
                  <img src={item.image} alt={item.title} className="mobile-img" />
                </div>
              )}

              <p className="parallax-label">{item.title}</p>
              <h2>{item.heading}</h2>

              {Array.isArray(item.text) ? (
                <>
                  <p>{item.text[0]}</p>
                  {item.text[1] && <p>{item.text[1]}</p>}
                  <ul>
                    {item.text.slice(2, -1).map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  <p>{item.text[item.text.length - 1]}</p>
                </>
              ) : (
                <p>{item.text}</p>
              )}

              <button
                className="parallax-btn"
                onClick={() => (window.location.href = "https://app.converro.online/register")}
              >
                {item.buttonText}
                <FiArrowRight className="parallax-arrow" />
              </button>
            </section>
          ))}
        </div>

        {/* Dot navigation (desktop only) */}
        {!isMobile && (
          <div className="dot-navigation">
            {contents.map((_, index) => (
              <div
                key={index}
                className={`dot ${activeIndex === index ? "active-dot" : ""}`}
                onClick={() => scrollToBlock(index)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FixedSection;

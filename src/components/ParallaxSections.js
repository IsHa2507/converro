import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ParallaxSections.css";

const contents = [
  {
    id: 1,
    title: "Analytics & Reporting",
    heading: "Understand Your Business Like Never Before",
    text: "Get real-time insights into sales performance, customer behavior, and business growth.",
    image: "https://via.placeholder.com/250x250.png?text=Image+1",
  },
  {
    id: 2,
    title: "Customer Engagement",
    heading: "Build Stronger Relationships",
    text: "Track customer interactions and improve retention with smarter engagement tools.",
    image: "https://via.placeholder.com/250x250.png?text=Image+2",
  },
  {
    id: 3,
    title: "Sales Optimization",
    heading: "Boost Your Revenue",
    text: "Automate workflows, upsell smarter, and maximize your sales performance.",
    image: "https://via.placeholder.com/250x250.png?text=Image+3",
  },
];

const FixedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Change content on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("fixed-section");
      if (section) {
        const scrollTop = window.scrollY - section.offsetTop;
        const newIndex = Math.min(
          contents.length - 1,
          Math.max(0, Math.floor(scrollTop / 400)) // change every 400px
        );
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section class="fixed-section">
  <div class="container">
    
    <div class="green-box">
      <div class="image-wrapper">
        <img src="https://via.placeholder.com/250x250.png?text=Image+1" alt="Image 1" class="content-img img-1" />
        <img src="https://via.placeholder.com/250x250.png?text=Image+2" alt="Image 2" class="content-img img-2" />
        <img src="https://via.placeholder.com/250x250.png?text=Image+3" alt="Image 3" class="content-img img-3" />
      </div>
    </div>

    
    <div class="text-sections">
      <section class="text-block" id="block1">
        <p class="label">Analytics & Reporting</p>
        <h2>Understand Your Business Like Never Before</h2>
        <p>Get real-time insights into sales performance, customer behavior, and business growth.</p>
      </section>

      <section class="text-block" id="block2">
        <p class="label">Customer Engagement</p>
        <h2>Build Stronger Relationships</h2>
        <p>Track customer interactions and improve retention with smarter engagement tools.</p>
      </section>

      <section class="text-block" id="block3">
        <p class="label">Sales Optimization</p>
        <h2>Boost Your Revenue</h2>
        <p>Automate workflows, upsell smarter, and maximize your sales performance.</p>
      </section>
    </div>
  </div>
</section>
  );
};

export default FixedSection;

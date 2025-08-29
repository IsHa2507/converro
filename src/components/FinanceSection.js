import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./FinanceSection.css";
import { FiArrowRight } from "react-icons/fi";
// replace these with your real images
import img1 from "../assets/finance1.png";
import img2 from "../assets/finance2.png";
import img3 from "../assets/finance3.png";

const FinanceSection = () => {
  const [active, setActive] = useState(0); // keep one open, always shows an image

  const items = [
    {
      title: "Capture & Nurture Leads Automatically",
      text:
        "Converro makes sure no lead slips through the cracks. It auto-captures inquiries, organizes them, and nurtures every lead with smart, timely follow ups maximizing your conversion opportunities with ease.",
      img: img1,
    },
    {
      title: "Smart Calling & Automated Follow-Ups",
      text:
        "Converro keeps your sales pipeline active with automated calls and timely reminders. It connects with prospects instantly, maintains consistent communication, minimizes drop-offs, and drives higher conversions all without manual effort.",
      img: img2,
    },
    {
      title: "Faster Responses, Stronger Relationships",
      text:
        "Converro ensures clients get quick, accurate answers to their queries—building trust and satisfaction instantly. By cutting response times and offering round the clock support, it elevates customer experience and nurtures lasting relationships.",
      img: img3,
    },
  ];

  const onKeyActivate = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(index);
    }
  };

  return (
    <section className="finance-section">
      {/* Left: Image */}
      <div className="finance-image">
        <img
          key={active} // triggers fade animation on change
          src={items[active].img}
          alt={items[active].title}
          className="finance-image-el"
        />
      </div>

      {/* Right: Title + Accordion-like list */}
      <div className="finance-content">
        <header className="finance-header">
          <h2 className="finance-title">Generate, engage, and convert leads even in your downtime.</h2>
          <p className="finance-subtitle">
            {/* Track, save, and budget with effortless, intelligent tools. */}
          </p>
        </header>

        <div className="finance-list">
          {items.map((item, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-expanded={active === i}
              className={`finance-item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyActivate(e, i)}
            >
              <div className="finance-item-head">
                <h3 className="finance-item-title">{item.title}</h3>
                <FiPlus className="finance-item-icon" />
              </div>
              {/* keep p in DOM for smooth max-height animation */}
              <p className="finance-item-text">{item.text}</p>
            </div>
          ))}
        </div>
        <button className="finance-btn">
    Start For Free
    <FiArrowRight className="finance-arrow"/>
  </button>
</div>
      
    </section>
  );
};

export default FinanceSection;




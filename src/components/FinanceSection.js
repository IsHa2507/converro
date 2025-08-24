import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./FinanceSection.css";

// replace these with your real images
import img1 from "../assets/finance1.png";
import img2 from "../assets/finance2.png";
import img3 from "../assets/finance3.png";

const FinanceSection = () => {
  const [active, setActive] = useState(0); // keep one open, always shows an image

  const items = [
    {
      title: "Automated categorization",
      text:
        "We auto-tag every transaction so you instantly see where money goes. No spreadsheets, no manual sorting—just clarity.",
      img: img1,
    },
    {
      title: "Savings goals",
      text:
        "Create goals, set targets, and track progress with gentle nudges. We’ll guide you to hit milestones without stress.",
      img: img2,
    },
    {
      title: "Budget suggestions",
      text:
        "Get adaptive, AI-powered budgets that learn your patterns and recommend smart adjustments month to month.",
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
          <h2 className="finance-title">Stay ahead of your finances</h2>
          <p className="finance-subtitle">
            Track, save, and budget with effortless, intelligent tools.
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
      </div>
    </section>
  );
};

export default FinanceSection;




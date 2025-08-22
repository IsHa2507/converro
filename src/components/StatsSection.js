import React, { useEffect, useRef, useState } from "react";
import "./StatsSection.css";
import statsImg from "../assets/homepagesection.webp"; // use your uploaded image

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Image Section */}
      <section
        ref={sectionRef}
        className={`stats-section ${visible ? "fade-in" : ""}`}
      >
        <img src={statsImg} alt="Deals Section" className="stats-image" />
      </section>

      {/* Stats Text Section */}
      <section className="stats-text-section">
        <div className="stats-content">
          <div>
            <h2>10K+</h2>
            <p>Users Worldwide</p>
            <span>
              Businesses trust Custo to streamline sales and manage customer
              relationships.
            </span>
          </div>
          <div>
            <h2>30%</h2>
            <p>Faster Sales Cycles</p>
            <span>
              Optimize your sales process and close deals more efficiently with
              automated workflows.
            </span>
          </div>
          <div>
            <h2>$1B</h2>
            <p>in Deals Closed</p>
            <span>
              Track high-value opportunities and drive revenue growth effortlessly.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;


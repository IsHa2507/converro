import React, { useEffect, useRef, useState } from "react";
import "./StatsSection.css";
import statsImg from "../assets/background.png"; // use your uploaded image

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

      
      
    </div>
  );
};

export default StatsSection;


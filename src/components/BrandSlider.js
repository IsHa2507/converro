import React from "react";
import "./BrandSlider.css";

// Import brand logos (no icons, only logos)
import cybershield from "../assets/Cyber Shield.png";
import geeksquares from "../assets/Geeksquares.png";
import glamspace from "../assets/Glam space.png";
import icrinfra from "../assets/ICR Infra.png";
import ids from "../assets/IDS.png";
import skillgrow from "../assets/Skillgroww.png";
import techmaestro from "../assets/Tech Maestro.png";

const logos = [
  cybershield,
  geeksquares,
  glamspace,
  icrinfra,
  ids,
  skillgrow,
  techmaestro,
];

const BrandSlider = () => {
  return (
    <div className="branding-container">
      <h1>
        Trusted by <span className="highlighted-text">10k+</span> Growing Businesses
      </h1>

      {/* Row sliding right */}
      <div className="logo-row row-right">
        {logos.concat(logos).map((logo, i) => (
          <div className="logo-box" key={i}>
            <img src={logo} alt={`logo-${i}`} />
          </div>
        ))}
      </div>

      {/* Row sliding left */}
      <div className="logo-row row-left">
        {logos.concat(logos).map((logo, i) => (
          <div className="logo-box" key={i}>
            <img src={logo} alt={`logo-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;

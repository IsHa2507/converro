import React from "react";
import "./BrandSlider.css";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Netflix_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Instagram_logo_2016.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
];

const BrandSlider = () => {
  return (
    
    <div className="branding-container">
       <h1>
    Trusted by <span className="highlighted-text">10k+</span> Growing Businesses
  </h1>
      <div className="logo-row row-right">
        {logos.concat(logos).map((logo, i) => (
          <div className="logo-box" key={i}>
            <img src={logo} alt={`logo-${i}`} />
          </div>
        ))}
      </div>

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


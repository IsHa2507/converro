import React from "react";
import "./BrandSlider.css";

const logos = [
  
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // fixed Google
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo.png", // fixed WhatsApp
  "https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968756.png", // fixed X/Twitter
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


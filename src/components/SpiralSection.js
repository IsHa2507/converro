import React from 'react';
import './SpiralSection.css';

// Import images correctly
import Facebook from '../assets/Facebook.png';
import Whatsapp from '../assets/Whatsapp.png';
import Google from '../assets/Google.png';
import Instagram from '../assets/Instagram.png';
import Github from '../assets/Github.png';
import Linkedin from '../assets/Linkedin.png';
import Youtube from '../assets/Youtube.png';

const SpiralSection = () => {
  // All logos
  const logos = [
    { src: Facebook, alt: 'Facebook' },
    { src: Whatsapp, alt: 'Whatsapp' },
    { src: Google, alt: 'Google' },
    { src: Instagram, alt: 'Instagram' },
    { src: Github, alt: 'Github' },
    { src: Linkedin, alt: 'Linkedin' },
    { src: Youtube, alt: 'Youtube' },
  ];

  // Split into 3 groups → [3,3,1] (since you have 7 logos)
  const groups = [
    logos.slice(0, 3), // first 3
    logos.slice(3, 6), // next 3
    logos.slice(6),    // last 1
  ];

  return (
    <section className="hero-section">
      {/* Spiral background */}
      <div className="spiral-bg">
        <div className="spiral">
          {groups.map((group, ringIndex) => (
            <div key={ringIndex} className={`ring ring-${ringIndex + 1}`}>
              {group.map((logo, i) => (
                <div
                  key={i}
                  className="orbit"
                  style={{ '--angle': `${(360 / group.length) * i}deg` }}
                >
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="fade-mask"></div>
      </div>

      {/* Hero text */}
      <div className="hero-text">
        <h1>Transforming Lives Through Smarter Financial</h1>
        <p>
          Discover powerful features designed to simplify money management,
          track progress, and achieve your financial goals with ease.
        </p>
      </div>
    </section>
  );
};

export default SpiralSection;

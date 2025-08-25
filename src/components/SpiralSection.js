import React from 'react';
import './SpiralSection.css';

// Import 14 logos
import Facebook from '../assets/icon1.png';
import Whatsapp from '../assets/icon2.png';
import Google from '../assets/icon3.png';
import Instagram from '../assets/icon4.png';
import Github from '../assets/icon5.png';
import Linkedin from '../assets/icon6.png';
import Youtube from '../assets/icon7.png';
import Twitter from '../assets/icon8.png';
import Snapchat from '../assets/icon9.png';
import Pinterest from '../assets/icon10.png';
import Tiktok from '../assets/icon11.png';
import Reddit from '../assets/icon12.png';
import Discord from '../assets/icon13.png';
import Slack from '../assets/icon14.png';

const SpiralSection = () => {
  // All 14 logos
  const logos = [
    { src: Facebook, alt: 'Facebook' },
    { src: Whatsapp, alt: 'Whatsapp' },
    { src: Google, alt: 'Google' },
    { src: Instagram, alt: 'Instagram' },
    { src: Github, alt: 'Github' },
    { src: Linkedin, alt: 'Linkedin' },
    { src: Youtube, alt: 'Youtube' },
    { src: Twitter, alt: 'Twitter' },
    { src: Snapchat, alt: 'Snapchat' },
    { src: Pinterest, alt: 'Pinterest' },
    { src: Tiktok, alt: 'Tiktok' },
    { src: Reddit, alt: 'Reddit' },
    { src: Discord, alt: 'Discord' },
    { src: Slack, alt: 'Slack' },
  ];

  // Split into 5 groups for 5 rings
  const groups = [
    logos.slice(0, 3),   // Ring 1 → 3 logos
    logos.slice(3, 6),   // Ring 2 → 3 logos
    logos.slice(6, 9),   // Ring 3 → 3 logos
    logos.slice(9, 12),  // Ring 4 → 3 logos
    logos.slice(12, 14), // Ring 5 → 2 logos
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
        <button className="hero-btn">Start For Free</button>
      </div>
    </section>
  );
};

export default SpiralSection;

import React from 'react';
import './SpiralSection.css';

const SpiralSection = () => {
  // All logos
  const logos = [
    { src: '/logos/spotify.png', alt: 'Spotify' },
    { src: '/logos/notion.png', alt: 'Notion' },
    { src: '/logos/discord.png', alt: 'Discord' },
    { src: '/logos/zapier.png', alt: 'Zapier' },
    { src: '/logos/gitlab.png', alt: 'GitLab' },
    { src: '/logos/slack.png', alt: 'Slack' },
    { src: '/logos/figma.png', alt: 'Figma' },
    { src: '/logos/zoom.png', alt: 'Zoom' },
  ];

  // Split into 3 groups → [3,3,2]
  const groups = [
    logos.slice(0, 3), // first 3
    logos.slice(3, 6), // next 3
    logos.slice(6, 8), // last 2
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
                  style={{ transform: `rotate(${(360 / group.length) * i}deg)` }}
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



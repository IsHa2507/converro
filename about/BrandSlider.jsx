"use client";

import Image from "next/image";
import "../Styles/BrandSlider.css";

// Import brand logos from public directory
import cybershield from "../public/images/assests/Cyber Shield.png";
import geeksquares from "../public/images/assests/Geeksquares.png";
import glamspace from "../public/images/assests/Glam space.png";
import icrinfra from "../public/images/assests/ICR Infra.png";
import ids from "../public/images/assests/IDS.png";
import skillgrow from "../public/images/assests/Skillgroww.png";
import techmaestro from "../public/images/assests/Tech Maestro.png";
import deshizyka from "../public/images/assests/Deshizayka.png";
import vishalmega from "../public/images/assests/Vishal mega mart.png";
import titan from "../public/images/assests/Titan.png";
import sleepwell from "../public/images/assests/Sleepwell.png";
import roto from "../public/images/assests/Roto pumps.png";
import nxone from "../public/images/assests/NX ONE.png";
import akkar from "../public/images/assests/Aakkar.png";
import godrej from "../public/images/assests/Godrej.png";
import canvas from "../public/images/assests/Cavana Fashion.png";

const logos = [
  cybershield,
  geeksquares,
  glamspace,
  icrinfra,
  ids,
  skillgrow,
  techmaestro,
  deshizyka,
  vishalmega,
  titan,
  sleepwell,
  roto,
  nxone,
  akkar,
  godrej,
  canvas,
];

export default function BrandSlider() {
  return (
    <div className="branding-container">
      <h1>
        Trusted by <span className="highlighted-text">10k+</span> Growing Businesses
      </h1>

      {/* Row sliding right */}
      <div className="logo-row row-right">
        {logos.concat(logos).map((logo, i) => (
          <div className="logo-box" key={i}>
            <Image src={logo} alt={`logo-${i}`} />
          </div>
        ))}
      </div>

      {/* Row sliding left */}
      <div className="logo-row row-left">
        {logos.concat(logos).map((logo, i) => (
          <div className="logo-box" key={i}>
            <Image src={logo} alt={`logo-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

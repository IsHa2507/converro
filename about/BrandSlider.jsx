"use client";

import Image from "next/image";
import "../Styles/BrandSlider.css";

// Import brand logos from public directory
import cybershield from "@/public/images/assets/Cyber Shield.png";
import geeksquares from "@/public/images/assets/Geeksquares.png";
import glamspace from "@/public/images/assets/Glam space.png";
import icrinfra from "@/public/images/assets/ICR Infra.png";
import ids from "@/public/images/assets/IDS.png";
import skillgrow from "@/public/images/assets/Skillgroww.png";
import techmaestro from "@/public/images/assets/Tech Maestro.png";
import deshizyka from "@/public/images/assets/Deshizayka.png";
import vishalmega from "@/public/images/assets/Vishal mega mart.png";
import titan from "@/public/images/assets/Titan.png";
import sleepwell from "@/public/images/assets/Sleepwell.png";
import roto from "@/public/images/assets/Roto pumps.png";
import nxone from "@/public/images/assets/NX ONE.png";
import akkar from "@/public/images/assets/Aakkar.png";
import godrej from "@/public/images/assets/Godrej.png";
import canvas from "@/public/images/assets/Cavana Fashion.png";

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

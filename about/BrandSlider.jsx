"use client";

import Image from "next/image";
import "../Styles/BrandSlider.css";

// Import brand logos from public directory
import cybershield from "@/public/assets/Cyber Shield.png";
import geeksquares from "@/public/assets/Geeksquares.png";
import glamspace from "@/public/assets/Glam space.png";
import icrinfra from "@/public/assets/ICR Infra.png";
import ids from "@/public/assets/IDS.png";
import skillgrow from "@/public/assets/Skillgroww.png";
import techmaestro from "@/public/assets/Tech Maestro.png";
import deshizyka from "@/public/assets/Deshizayka.png";
import vishalmega from "@/public/assets/Vishal mega mart.png";
import titan from "@/public/assets/Titan.png";
import sleepwell from "@/public/assets/Sleepwell.png";
import roto from "@/public/assets/Roto pumps.png";
import nxone from "@/public/assets/NX ONE.png";
import akkar from "@/public/assets/Aakkar.png";
import godrej from "@/public/assets/Godrej.png";
import canvas from "@/public/assets/Cavana Fashion.png";

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

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/9211546633"
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

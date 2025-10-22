// app/components/FloatingWhatsApp.jsx
import { FaWhatsapp } from "react-icons/fa";
import "../Styles/FloatingWhatsApp.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/9211546633"
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

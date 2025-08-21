import React from "react";
import "./Footer.css";
import logo from "../assets/logo-white.svg";
import { ArrowUpRight } from "lucide-react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">
    {/* Brand */}
    <div className="footer-brand">
      <img src={logo} alt="Custo Logo" className="footer-logo" />
      <p>
        Simplify customer relationships and <br />
        scale your business with Custo.
      </p>
      <div className="social-icons">
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaYoutube /></a>
      </div>
    </div>

    {/* Links */}
    <div className="footer-links">
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div>
        <h3>Main Pages</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3>Other Pages</h3>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Blog Details</a></li>
          <li><a href="#">Error 404</a></li>
          <li><a href="#">Licences</a></li>
          <li><a href="#">Changelog</a></li>
          <li><a href="#">Style Guide</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom */}
  <div className="footer-bottom">
  <p>2025 © Converro a subsidiary of Cybershield Technologies Pvt. Ltd.</p>
  <p>
    <a href="#" className="footer-link">
      Cybershield Technologies Pvt. Ltd.
      <ArrowUpRight size={13} className="arrow-icon" />
    </a>
  </p>
</div>
</footer>

  );
}


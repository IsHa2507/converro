"use client";

import React from "react";
import Image from "next/image";
import "../Styles/Footer.css"; // adjust path as needed
import logo from "../public/images/assests/logo-white.svg";
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
          <Image src={logo} alt="Custo Logo" className="footer-logo" />
          <p>
            Simplify customer relationships and <br />
            scale your business with Coverro.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/converro-io/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61580426304606"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/converro.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Converro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/crmsections?cat=education">Education </a></li>
              <li><a href="/crmsections?cat=real-estate">Real Estate</a></li>
              <li><a href="/crmsections?cat=tours-travels">Tours & Travel</a></li>
              <li><a href="/crmsections?cat=automobile">Automobile</a></li>
              <li><a href="/crmsections?cat=b2b-crm">B2B CRM</a></li>
            </ul>
          </div>
          <div>
            <h3>Main Pages</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/productsection">Features</a></li>
              <li><a href="/crmsection?cat=real-estate">Industries</a></li>
              <li><a href="/contactus">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3>Important</h3>
            <ul>
              <li><a href="/terms-and-condition">Terms & Conditions</a></li>
              <li><a href="/privacy&policy">Privacy Policy</a></li>
              <li><a href="/refundpolicy">Refund Policy</a></li>
              <li><a href="/contactus">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>2025 © Converro a subsidiary of Cybershield Technologies Pvt. Ltd.</p>
        <p>
          <a
            href="https://cybershieldtechnologies.com/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cybershield Technologies Pvt. Ltd.
            <ArrowUpRight size={13} className="arrow-icon" />
          </a>
        </p>
      </div>
    </footer>
  );
}

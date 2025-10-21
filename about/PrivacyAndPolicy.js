import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import "./PrivacyAndPolicy.css"; // Privacy-specific CSS

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="privacy-page">
        <div className="privacy-heading">
          <h1>Privacy Policy</h1><br />
          <p>
            At <strong>Converro</strong>, we value transparency and are committed
            to protecting your privacy. This policy explains how we collect, use,
            and safeguard your information while ensuring compliance with all
            applicable laws, regulations, and platform-specific guidelines.
          </p>

          <div className="privacy-content">
            <h2>1. Data Processing and Ownership</h2>
            <p>
              Leads from client ad forms are directly synced into each client’s
              dashboard. Clients retain <strong>full ownership</strong> of their
              data — Converro does not modify, reuse, or claim rights over it. All
              data remains solely the property of the client.
            </p>

            <h2>2. Public Privacy Policy</h2>
            <ul>
              <li>The types of data we sync on behalf of clients.</li>
              <li>How the syncing process works.</li>
              <li>The intended purpose of syncing.</li>
              <li>How clients can easily delete their data from their dashboard.</li>
            </ul>

            <h2>3. Client-Controlled Data Deletion</h2>
            <p>
              Clients have <strong>complete control</strong> over their information
              and can delete data at any time directly from their lead management
              panel.
            </p>

            <h2>4. Compliance and Transparency</h2>
            <p>
              We handle data only as described in this Privacy Policy and comply
              with all legal, regulatory, and third-party platform requirements.
            </p>

            <h2>6. Information We Collect</h2>
            <ul>
              <li>Phone number & email address for login and notifications.</li>
              <li>Client data such as leads and interactions with shared content.</li>
              <li>Anonymous usage statistics to improve product performance.</li>
            </ul>
            <p>We do not send unsolicited promotional emails.</p>

            <h2>10. Security</h2>
            <p>
              All communication is encrypted via{" "}
              <strong>HTTPS with certificate pinning</strong>. Passwords are
              securely hashed using <strong>bcrypt</strong> and never stored in
              plain text. We employ multiple safeguards to protect your
              information.
            </p>

            <h2>14. Account and Lead Data Deletion</h2>
            <ol>
              <li>Log in to your dashboard.</li>
              <li>Go to <strong>Lead Manager &gt; Contacts</strong>.</li>
              <li>Click the three dots in the top-right corner.</li>
              <li>Select <strong>Delete All Leads</strong>.</li>
              <li>Confirm the deletion.</li>
            </ol>
            <p>
              Once confirmed, your data will be permanently deleted and cannot be
              recovered.
            </p>

            <h2>16. Contact Us</h2>
            <p>
              For questions regarding this policy, please contact us at:{" "}
              <a href="mailto:support@converro.io">support@converro.io</a>
            </p>
          </div>
        </div>
      </div>

      <CTA />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

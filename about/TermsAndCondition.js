import React from "react";
import "./TermsAndCondition.css"; // Reuse same CSS
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTA from "./CTA";

const TermsAndCondition = () => {
  return (
    <div className="terms-page bg-white text-gray-800">
      <Navbar />

      {/* Page Heading */}
      <main className="terms-heading max-w-4xl mx-auto py-12 px-6">
       
        <h1>Terms & Conditions</h1><br />
        <p>Effective Date: January 1, 2025</p>

        {/* Content */}
        <section className="terms-content space-y-6">
          <div>
            <h2>1. Introduction</h2>
            <p>
              Welcome to <strong>Converro</strong>, a suite of cloud-based CRM and lead management
              solutions designed to enhance ROI from online and field sales, expos, trade events,
              and other lead-gen activities. The platform is built and maintained by{" "}
              <strong>Cybershield Technologies Pvt. Ltd.</strong>, incorporated in India.
            </p>
          </div>

          <div>
            <h2>2. Scope & Definitions</h2>
            <p>
              These Terms & Conditions (“Terms”) govern your access to and use of Converro’s services,
              including its website(s), mobile apps (e.g. on converro.io, app stores), and any products
              available via the Converro Marketplace. Additional terms—like our Privacy Policy,
              Commercial Terms, User Guidelines, IP Compliance Program—are incorporated by reference
              and collectively form the binding agreement between you (“User”) and Converro (“we,” “us,” or “our”).
            </p>
          </div>

          <div>
            <h2>3. Acceptance of Terms</h2>
            <p>
              By registering for, accessing, or using Converro’s services or purchasing products from
              our Marketplace, you acknowledge you have read, understood, and agreed to these Terms.
              If you don’t agree, please do not use the Service.
            </p>
          </div>

          <div>
            <h2>4. Account Registration & Security</h2>
            <p>
              You must provide a valid email address to register. You are responsible for maintaining
              its confidentiality and securing your password. Any activity under your account is your
              sole responsibility. Promptly inform us of any unauthorized access. You may not share your
              account credentials unless explicitly permitted; doing so may result in loss of data control
              and limitations on liability protection.
            </p>
          </div>

          <div>
            <h2>5. License to Use the Service</h2>
            <p>
              Upon successful registration and acceptance of these Terms, we grant you a limited,
              non-exclusive, non-transferable, revocable license to use Converro’s services solely
              for your business purposes in compliance with these Terms.
            </p>
          </div>

          <div>
            <h2>6. Intellectual Property Rights</h2>
            <p>
              We retain all rights, title, and interest in Converro software, trademarks, logos,
              and any proprietary technology. You agree not to reverse-engineer, reproduce,
              modify, or create derivative works unless authorized in writing or permitted
              under applicable law.
            </p>
          </div>

          <div>
            <h2>7. User Conduct & Content Responsibility</h2>
            <p>
              You are responsible for all content—text, media, software—uploaded or transmitted
              via Converro. You warrant that your content does not infringe any copyrights or
              violate law. Converro reserves the right (but is not obligated) to remove or
              restrict access to any content we believe violates these Terms or applicable rules.
            </p>
          </div>

          <div>
            <h2>8. Data Ownership & License to Converro</h2>
            <p>
              You retain ownership of your content. However, you grant Converro a royalty-free,
              worldwide, irrevocable (as long as your content remains stored) license to reproduce,
              adapt, display, distribute, and modify your content as necessary to deliver the Service.
              This includes sharing with third-party service providers and integration partners, under
              confidentiality terms.
            </p>
          </div>

          <div>
            <h2>9. Third-Party Integrations & Responsibility</h2>
            <p>
              If you integrate Converro with third-party tools (e.g., Google, LinkedIn), you authorize
              such access and acknowledge Converro is not liable for third-party actions, misuse, or
              changes to their services. You’re responsible for any data shared with those services.
            </p>
          </div>

          <div>
            <h2>10. Modifications to Service & Updates</h2>
            <p>
              Converro may enhance, modify, or discontinue features without prior notice. If you
              subscribe to a paid plan and modifications adversely affect you, you may contact our
              support to request remediation, service credit, or partial refund. Additionally, updates
              may be auto-delivered to ensure security or compatibility.
            </p>
          </div>

          <div>
            <h2>11. Advertisements & Branding</h2>
            <p>
              Converro may display advertisements or promotional messaging within the Service. We do
              not mine your content for ad targeting. You agree that branding—logos, hyperlinks,
              taglines like “I ❤️ Converro”—will appear in communications, documents (like quotes/invoices),
              and UI elements and cannot be removed selectively.
            </p>
          </div>

          <div>
            <h2>12. Changes to These Terms</h2>
            <p>
              We may revise these Terms due to legal or regulatory changes, or improvements to our Service.
              Notice will be given via email or on-site announcements. Continued use after the update
              constitutes your acceptance. Only a signed written amendment is binding outside these channels.
            </p>
          </div>

          <div>
            <h2>13. Termination & Suspension</h2>
            <p>
              You may deactivate your account anytime following our published process. We reserve the right
              to suspend or close accounts, with ~15 days’ notice (unless prohibited by law), for breaches,
              inactivity, non-payment, or technical risks. After termination, your access to content will cease;
              recover data promptly if notified.
            </p>
          </div>

          <div>
            <h2>14. Disclaimer of Warranties & Limitation of Liability</h2>
            <p>
              The Service and products are provided “AS IS” and “AS AVAILABLE” without any warranty of any
              kind—express or implied. We specifically disclaim warranties of merchantability, fitness for
              a particular purpose, and non-infringement. To the maximum extent permitted by law, Converro
              and its affiliates are not liable for damages arising out of your use or inability to use the
              Service—even if previously advised of the possibility—whether direct, indirect, incidental,
              or consequential.
            </p>
          </div>

          <div>
            <h2>15. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Converro, its officers, employees, affiliates,
              and partners from any claims, losses, liabilities, damages, or expenses arising from your
              violation of these Terms or your use of the Service.
            </p>
          </div>

          <div>
            <h2>16. Force Majeure</h2>
            <p>
              Neither party is liable for delays or failures due to events beyond its reasonable control,
              including natural disasters, acts of war, government restrictions, internet failures,
              strikes, epidemics, or similar events (“Force Majeure Event”). The affected party must notify
              the other promptly and make efforts to resume performance. If an event continues beyond 30 days
              and hinders core obligations, either party may terminate these Terms.
            </p>
          </div>

          <div>
            <h2>17. Governing Law, Dispute Resolution & Arbitration</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes will be arbitrated under the
              Arbitration and Conciliation Act, India, with the exclusive venue being courts in New Delhi.
              Arbitration awards may be enforced in any appropriate jurisdiction.
            </p>
          </div>

          <div>
            <h2>18. Severability & Waiver</h2>
            <p>
              If any provision is deemed unenforceable, the remainder remains valid. No waiver of any
              provision shall be effective unless in writing and signed by both parties.
            </p>
          </div>

          <div>
            <h2>19. Notices & Contact Information</h2>
            <p>
              Notices to you will be delivered by email or via our Service. To send notice to us,
              please email <a href="mailto:support@converro.io">support@converro.io</a>.
            </p>
          </div>
        </section>
      </main>

     
      <CTA/>
      <Footer />
    </div>
  );
};

export default TermsAndCondition;



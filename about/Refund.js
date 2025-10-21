import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import "./PrivacyAndPolicy.css"; // reuse same CSS

const RefundPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="privacy-page">
        <div className="privacy-heading">
          <h1>Refund Policy</h1><br />
          <p>
            At <strong>Converro</strong>, all subscription purchases are
            considered final. Once a payment has been processed, subscriptions
            cannot be cancelled or refunded—unless Converro fails to deliver the
            services promised under our Terms of Service.
          </p>

          <div className="privacy-content">
            <p>
              We follow a strict <strong>no-cancellation, no-refund</strong>{" "}
              policy. In certain cases, a trial period may be offered under
              specific terms for selected services. After a subscription is
              confirmed, the service will remain active for the agreed term and
              under the conditions outlined in the respective plan. We recommend
              reviewing all terms carefully before subscribing.
            </p>

            <p>
              For subscriptions with recurring billing (via debit/credit card),
              your registered card will be automatically charged at the
              beginning of each renewal cycle (monthly, yearly, or as
              applicable). To stop further billing, you must send a cancellation
              request to us via email <strong>before</strong> the renewal date.
              Requests received after a renewal payment has been processed will
              not qualify for a refund.
            </p>

            <p>
              If you experience any issues with core features of Converro CRM—
              such as <strong>lead management, reminder setup, or group
              creation</strong>—our support team will actively assist you in
              resolving them. However, refunds will not be provided for
              difficulties in these areas. Refunds will only be considered if
              the issue is proven to be a direct failure of Converro to deliver
              on its fundamental CRM functionalities as stated in our Terms of
              Service.
            </p>

            <h2>Contact Us</h2>
            <p>
              For any refund-related queries, please reach out to us at:{" "}
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

export default RefundPolicy;

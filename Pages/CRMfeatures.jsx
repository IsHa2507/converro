"use client";

import React from "react";
import Image from "next/image";
import "../Pages/CRMfeatures.css"; // adjust path if needed

import crmindus1 from "../public/images/top.svg";
import crmindus2 from "../public/images/calling.svg";
import crmindus3 from "../public/images/manageleads.svg";
import crmindus4 from "../public/images/automate.svg";
import crmindus5 from "../public/images/trackteams.svg";
import crmindus6 from "../public/images/multipleleads.svg";

const crmfeatures = [
  {
    icon: crmindus1,
    title: "Stay on Top of Follow-ups",
    description:
      "Never lose a lead due to missed communication — follow up on time, every time.",
  },
  {
    icon: crmindus2,
    title: "Boost Calling Efficiency",
    description:
      "Save time with auto-dialer and click-to-call, helping your team close more deals faster.",
  },
  {
    icon: crmindus3,
    title: "Effortlessly Manage All Leads",
    description:
      "Capture, organize, and access every lead in one central hub with seamless integrations.",
  },
  {
    icon: crmindus4,
    title: "Automate Routine Tasks",
    description:
      "Let Converro handle lead capture, assignment, status updates, and instant responses.",
  },
  {
    icon: crmindus5,
    title: "Track and Manage Teams Remotely",
    description:
      "Monitor team performance and field activity with real-time location check-ins.",
  },
  {
    icon: crmindus6,
    title: "Nurture Multiple Leads at Once",
    description:
      "Engage prospects with personalized bulk WhatsApp, email, or SMS campaigns at scale.",
  },
];

const CRMIndusFeatures = () => {
  return (
    <section className="crmindus-section">
      <h2 className="crmindus-title">
        Why is a CRM Essential for Your Business?
      </h2>
      <p className="crmindus-subtitle">
        Managing teams, tracking performance, handling customer interactions,
        and overseeing sales pipelines are challenging across every industry.
        Converro CRM is built to simplify these complexities and give you
        complete control. With Converro, you can…
      </p>

      <div className="crmindus-grid">
        {crmfeatures.map((item, index) => (
          <div key={index} className="crmindus-card">
            <div className="crmindus-icon">
              <Image src={item.icon} alt={item.title} width={64} height={64} />
            </div>
            <h3 className="crmindus-card-title">{item.title}</h3>
            <p className="crmindus-card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CRMIndusFeatures;

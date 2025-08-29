import React from "react";
import missionImg from "../images/mission.svg";
import "./MissionIdeas.css";

const MissionIdeaSection = () => {
  return (
    <>
      {/* Our Mission */}
      <section className="mission-idea-section mission-section">
        <div className="content-row">
          <div className="text-block">
            <h2>Our Mission & Vision</h2>
            <p>
              At Converro, our mission and vision go hand in hand to redefine how businesses connect, nurture, and convert leads through simplicity, speed, and intelligence.
We aim to eliminate the complexity of traditional CRMs by building a platform that is intuitive, AI powered, and ready to use from day one.

<br/>We envision a future where every business small or large can focus on growth, not struggle with tools. By empowering teams with automation, smart insights, and effortless collaboration, we’re shaping a world where closing deals feels natural, fast, and rewarding.
            </p>
          </div>
          <div className="image-block">
             <img src={missionImg} alt="Our Mission" />
          </div>
        </div>
      </section>

      {/* The Idea */}
      {/* <section className="mission-idea-section idea-section">
        <div className="content-row reverse">
          <div className="text-block">
            <h2>The Idea</h2>
            <p>
              The goal of launching this platform is to offer clients a smart
              marketing tool that automates lead management. It prevents losing
              client data and follow-ups. Forgetting to follow up with clients
              and losing leads is a big problem.
            </p>
          </div>
          <div className="image-block">
            <img src="/images/idea.png" alt="The Idea" />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default MissionIdeaSection;





import React from "react";
import Button from "../reusable/Button";
import noah from "../assets/images/noah.png";
import gold from "../assets/images/gold.png";
import "./MeetYourHost.css";

function MeetYourHost() {
  return (
    <section className="meet-your-host">
      <div className="meet-host-content">
        <p className="section-label">MEET YOUR HOSTS</p>
        <h3>Two generations. One powerful purpose.</h3>
      </div>

      <div className="hosts-images">
        <div className="host">
          <img src={noah} alt="Noah, host of The Onaolapo Show" />
          <p>Noah</p>
        </div>
        <div className="host">
          <img src={gold} alt="Heavenly-Gold, host of The Onaolapo Show" />
          <p>Heavenly-Gold</p>
        </div>
      </div>

      <div>
        <p className="founders">
          Founded by Noah and his daughter, Heavenly-Gold, The Onaolapo is a
          family-driven movement standing for children’s rights worldwide.
        </p>
      </div>

      <div>
        <h3 className="meet-host-last-heading">
          “Children’s voices matter. Their stories need to be heard.”
        </h3>
      </div>
      <Button
        className="view-episodes-btn"
        text="Meet the voices behind the movement ↗"
        to="about"
      />
    </section>
  );
}

export default MeetYourHost;

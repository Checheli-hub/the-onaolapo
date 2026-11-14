import React from "react";
import "./Hero.css";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import noah from "../assets/images/noah.png";
import gold from "../assets/images/gold.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>THE WORLD THROUGH OUR EYES</p>
        <h1>Empowering Children, Changing the World – One Story at a Time.</h1>
        <p>
          We tackle real issues affecting children, especially the girl child in
          Africa and beyond, through engaging conversations and expert insights.
        </p>
        <div className="hero-buttons">
          <button className="btn">
            <FaPlay size="1.2rem" />
            Watch the latest Episodes
          </button>
          <button className="btn">Support Our Mission</button>
        </div>
      </div>
      <a href="/episodes" className="conversation-link">
        Join the Conversation <FaArrowRight />
      </a>
      
<div className="hero-image">
   <div className="hero-image-photos">
    <img src={noah} alt="Noah's Image" />
    <img src={gold} alt="Heavenly Gold" />
  </div>
  
  <div className="hero-image-label">
    Little voices.
    <br />
    Lasting change.
  </div>

  <div className="hero-image-caption">
    <h4>A father. A daughter. A shared purpose.</h4>
    <p>Noah & Heavenly-Gold · The Onaolapo Show</p>
  </div>
</div>

    </section>
  );
}

export default Hero;

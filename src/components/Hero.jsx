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
        <img src={noah} alt="Noah's Image" />
        <img src={gold} alt="Heavenly Gold" />
      </div>
      <p className="hero-hosts">Noah & Heavenly Gold / Your hosts</p>
    </section>
  );
}

export default Hero;

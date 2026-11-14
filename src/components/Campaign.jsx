import React from "react";
import Button from "../reusable/Button";
import { Link } from "react-router-dom";
import "./Campaign.css";

function Campaign() {
  return (
    <section className="campaign-section">
      <div className="campaign-content">
        <p>CAMPAIGN SPOTLIGHT</p>
        <h1>Every Girl Deserves Safety – Help Us Fight Trafficking</h1>
      </div>
      <p className="campaign-description">
        Stand with us for a future free from exploitation. Your support can help
        turn awareness into meaningful action.
      </p>
      <Button
        className="campaign-btn"
        text="Support this campaign"
        to="/support"
      />
      <Link to="/getInvolved" className="volunteer-link">
        Volunteer today ↗
      </Link>
    </section>
  );
}

export default Campaign;

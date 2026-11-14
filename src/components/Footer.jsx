import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>The Onaolapo Show</h2>
          <p className="footer-tagline">The world through our eyes.</p>
          <p className="footer-description">
            Protecting children. Empowering futures.
            <br />
            One story at a time.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/about">About us</Link>
            <Link to="/impact">Our work</Link>
            <Link to="/episodes">Podcast episodes</Link>
          </div>

          <div className="footer-column">
            <h3>Take action</h3>
            <Link to="/support">Donate</Link>
            <Link to="/getInvolved">Volunteer</Link>
            <Link to="/getInvolved">Partner with us</Link>
          </div>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.youtube.com/@theonaolaposhow"
            target="_blank"
            rel="noreferrer"
          >
            YouTube ↗
          </a>
          <a
            href="https://www.instagram.com/theonaolaposhow?igsh=N2p5N2I4cWYyaGNo"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
          <Link to="/contact">Contact us</Link>
        </div>

        <div className="footer-bottom">
          <div className="footer-policies">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms</Link>
            <Link to="/child-protection-policy">Child Protection Policy</Link>
          </div>

          <p className="copyright">
            © 2026 The Onaolapo Show.
            <br />
            All rights reserved.
          </p>

          <p className="footer-credit">
            Built by{" "}
            <a
              href="https://abdulkudus-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cheche Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

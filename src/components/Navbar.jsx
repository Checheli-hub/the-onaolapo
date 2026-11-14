import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="nav-bar">
      <div className="onaolapo-logo">
        <img src={logo} alt="the onaolapo's logo" />
      </div>

      <div className={menuOpen ? "menu-open" : "menu-closed"}>
        <button
          className="icon-btn"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav onClick={() => setMenuOpen(false)}>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/episodes">Episodes</NavLink>
            </li>
            <li>
              <NavLink to="/getInvolved">Get Involved</NavLink>
            </li>
            <li>
              <NavLink to="/impact">Impact</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support Our mission</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

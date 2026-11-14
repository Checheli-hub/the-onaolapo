import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ className, text, to }) {
  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
}

export default Button;

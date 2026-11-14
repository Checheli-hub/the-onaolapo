import React from "react";
import { Link } from "react-router-dom";

function Cards({ number, title, description, linkTo, linkText, className }) {
  return (
    <div className={className || "card-box"}>
      {number && <p>{number}</p>}
      <h3>{title}</h3>
      <p>{description}</p>
      {linkTo && <Link to={linkTo}> {linkText}</Link>}
    </div>
  );
}

export default Cards;

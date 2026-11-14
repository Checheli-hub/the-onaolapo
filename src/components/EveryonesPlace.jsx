import React from "react";
import { everyonesPlace } from "../data/podcastMatters";
import Cards from "./Cards";
import "./EveryonesPlace.css";

function EveryonesPlace() {
  return (
    <section className="everyones-place">
      <div>
        <p className="place-for-all">THERE’S A PLACE FOR EVERYONE</p>
        <h3 className="everyones-place-heading">
          Small actions. Extraordinary possibilities.
        </h3>
      </div>
      {everyonesPlace.map((place) => (
        <Cards
          key={place.id}
          title={place.title}
          description={place.description}
          linkText={place.linkText}
          linkTo={place.linkTo}
          className="everyone-card"
        />
      ))}
    </section>
  );
}

export default EveryonesPlace;

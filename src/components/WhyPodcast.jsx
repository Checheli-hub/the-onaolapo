import React from "react";
import cards from "../data/podcastMatters";
import Cards from "./Cards";
import "./WhyPodcast.css";

function WhyPodcast() {
  return (
    <section className="podcast-matters">
      <p>WHY THIS PODCAST MATTERS</p>
      <h3>A microphone for stories. A movement for change.</h3>
      <p>
        A world where every child — especially the girl child — is safe,
        educated, and empowered.
      </p>
      {cards.map((card) => (
        <Cards
          key={card.id}
          number={card.number}
          title={card.title}
          description={card.description}
          className="card-box"
        />
      ))}
    </section>
  );
}

export default WhyPodcast;

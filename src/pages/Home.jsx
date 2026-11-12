import React from "react";
import Hero from "./../components/Hero";
import story from "../assets/videos/story.mp4";
import StorySection from "../components/StorySection";
import Conversation from "../components/Conversation";
import HerVoice from "../components/HerVoice";

function Home() {
  return (
    <div>
      <Hero />
      <StorySection videoSrc={story} />
      <Conversation videoSrc={story} />
      <HerVoice videoSrc={story} />
    </div>
  );
}

export default Home;

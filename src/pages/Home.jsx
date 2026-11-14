import React from "react";
import Hero from "./../components/Hero";
import story from "../assets/videos/story.mp4";
import StorySection from "../components/StorySection";
import Conversation from "../components/Conversation";
import HerVoice from "../components/HerVoice";
import Parenting from "../components/Parenting";
import Button from "../reusable/Button";
import WhyPodcast from "../components/WhyPodcast";
import MeetYourHost from "../components/MeetYourHost";
import Campaign from "../components/Campaign";
import EveryonesPlace from "../components/EveryonesPlace";
import Newsletter from "../components/Newsletter";
function Home() {
  return (
    <div>
      <Hero />
      <StorySection videoSrc={story} />
      <MeetYourHost />
      <Conversation videoSrc={story} />
      <HerVoice videoSrc={story} />
      <Parenting videoSrc={story} />
      <Button
        className="view-episodes-btn"
        text="View all episodes ↗"
        to="episodes"
      />
      <Campaign />
      <EveryonesPlace />
      <WhyPodcast />
      <Newsletter />
    </div>
  );
}

export default Home;

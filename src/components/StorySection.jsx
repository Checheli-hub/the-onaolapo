import React from "react";
import useVideoPlayer from "../hooks/useVideoPlayer";
import VideoPlayButton from "../reusable/VideoPlayButton";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./StorySection.css";

function StorySection({ videoSrc }) {
  const {
    isPlaying,
    handleVideoToggle,
    videoRef,
    handleVideoEnded,
    handleLoadedMetadata,
    duration,
    formatDuration,
  } = useVideoPlayer();

  return (
    <section className="story-section">
      <div className="story-content">
        <p>START WITH OUR STORY</p>
        <h2>Real talk. Real change. Through a child's eyes</h2>
        <p>Meet the family behind the microphone and the movement</p>
      </div>
      <div className="video-container">
        <div className="video-info">
          <p>The ONAOLAPO SHOW</p>
          <VideoPlayButton
            isPlaying={isPlaying}
            onToggle={handleVideoToggle}
            duration={formatDuration()}
            className="video-duration"
          />
        </div>
        <div>
          <video
            ref={videoRef}
            className="video-player"
            playsInline
            onEnded={handleVideoEnded}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <button className="watch-intro-btn" onClick={handleVideoToggle}>
        Watch Our Introduction <FaArrowUpRightFromSquare />
      </button>
    </section>
  );
}

export default StorySection;

import React from "react";
import "./Conversation.css";
import VideoPlayButton from "../reusable/VideoPlayButton";
import useVideoPlayer from "../hooks/useVideoPlayer";

function Conversation({ videoSrc }) {
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
    <section className="conversation-section">
      <div className="conversation-content">
        <p>WATCH,LISTEN & LEARN</p>
        <h3>Conversations that make a difference.</h3>
        <p>Fresh perspectives on a child’s world.</p>
      </div>

      <div className="conversation-wrapper">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="video-player"
            playsInline
            onEnded={handleVideoEnded}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <VideoPlayButton
            className="video-play-btn"
            isPlaying={isPlaying}
            onToggle={handleVideoToggle}
            duration={formatDuration()}
          />
        </div>
        <div className="conversation-bottom">
          <p>Child Protection</p>
          <h3>Every child deserves to feel safe</h3>
        </div>
      </div>
    </section>
  );
}

export default Conversation;

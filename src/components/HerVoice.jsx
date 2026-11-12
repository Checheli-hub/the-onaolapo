import React from "react";
import VideoPlayButton from "../reusable/VideoPlayButton";
import useVideoPlayer from "../hooks/useVideoPlayer";
import "./HerVoice.css";
function HerVoice({ videoSrc }) {
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
    <section className="hervoice-section">
      <div className="hervoice-wrapper">
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
        <div className="hervoice-bottom">
          <p>GIRL CHILD EMPOWERMENT</p>
          <h3>Her voice. Her future. Her rights</h3>
        </div>
      </div>
    </section>
  );
}

export default HerVoice;

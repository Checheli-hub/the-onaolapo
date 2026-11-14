import React from "react";
import VideoPlayButton from "../reusable/VideoPlayButton";
import useVideoPlayer from "../hooks/useVideoPlayer";
import "./Parenting.css";

function Parenting({ videoSrc }) {
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
    <section className="parenting-section">
      <div className="parenting-wrapper">
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
        <div className="parenting-bottom">
          <p>PARENTING</p>
          <h3>Listening is where change begins</h3>
        </div>
      </div>
    </section>
  );
}

export default Parenting;

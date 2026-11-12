import { FaPlay, FaPause } from "react-icons/fa";

function VideoPlayButton({ isPlaying, onToggle, duration, className }) {
  return (
    <button
      className={className}
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? "pause video" : "play video"}
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
      <span>{duration}</span>
    </button>
  );
}

export default VideoPlayButton;

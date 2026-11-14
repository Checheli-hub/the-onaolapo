import { useRef, useState } from "react";

const useVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  const handleLoadedMetadata = () => {
    const exists = videoRef.current;

    if (exists) {
      setDuration(exists.duration);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };
  
  const handleVideoToggle = async () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing video:", error);
      }
    }
  };
  function formatDuration() {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  }

  return {
    videoRef,
    isPlaying,
    duration,
    handleVideoToggle,
    handleVideoEnded,
    handleLoadedMetadata,
    formatDuration,
  };
};

export default useVideoPlayer;

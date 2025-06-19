// src/components/VideoBackground.jsx
import React from "react";


function VideoBackground() {
  return (
    <video
      autoPlay
      muted
       loop
      preload="auto"
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source src="/Hero_KV_Home_PC_1920x1080.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoBackground;

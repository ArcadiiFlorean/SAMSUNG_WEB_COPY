// src/components/VideoHeroSection.jsx
import React, { useRef, useState, useEffect } from "react";

function VideoHeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.loop = false;
      } else {
        videoRef.current.loop = true;
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
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

      {/* HERO CONTENT - direct peste video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-[60px] font-bold">Galaxy S25 Ultra</h1>

        <img
          src="https://images.samsung.com/is/content/samsung/assets/uk/ux3/home/MDMX_Hero-KV-Home_AI-Logo_PC_LTR_620x64.svg?$620_64_IMG$"
          alt="Logo"
          className="mt-2 h-[40px]"
        />

        <div className="mt-8">
          <button
            onClick={toggleVideo}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoHeroSection;

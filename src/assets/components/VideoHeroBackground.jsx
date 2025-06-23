import React, { useRef, useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

function VideoHeroBackground() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
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
        poster="/fallback-image.jpg"
      className="absolute top-0 left-0 w-full h-full object-cover z-0"

      >
<source src="/Hero_KV_Home_PC_1920x1080.mp4" type="video/mp4" />


        Your browser does not support the video tag.
      </video>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 md:px-20 ml-0 md:ml-[150px]">
        <h1 className="text-[40px] md:text-[60px] font-bold leading-tight">
          Galaxy S25 Ultra
        </h1>

        <img
          src="https://images.samsung.com/is/content/samsung/assets/uk/ux3/home/MDMX_Hero-KV-Home_AI-Logo_PC_LTR_620x64.svg?$620_64_IMG$"
          alt="Samsung AI Logo"
          className="mt-2 h-[30px] md:h-[40px] mb-6"
          loading="lazy"
        />

        {/* CTA Buttons */}
        <div className="flex items-center gap-5">
          {/* Learn more button (modernized) */}
          <button
            className="relative text-white font-medium text-sm md:text-base focus:outline-none after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => console.log("Learn more clicked")}
          >
            Learn more
          </button>

          {/* Buy Now button */}
          <button
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded-full transition-all duration-500 focus:outline-none"
            onClick={() => console.log("Buy Now clicked")}
          >
            Buy Now
          </button>
        </div>

        {/* PLAY/PAUSE BUTTON */}
        <div className="absolute bottom-10 left-6 md:left-20 z-20">
          <button
            onClick={toggleVideo}
            className="w-8 h-8 bg-black/40 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition focus:outline-none"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            tabIndex="0"
          >
            {isPlaying ? (
              <FaPause size={16} />
            ) : (
              <FaPlay size={16} className="pl-[1px]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoHeroBackground;

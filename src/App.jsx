import React from "react";
import VideoBackground from "./assets/components/VideoBackground";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";


function App() {
  return (
    <div className="relative overflow-hidden">
      <VideoBackground />
      <Header />
      <Hero />
    </div>
  );
}

export default App;

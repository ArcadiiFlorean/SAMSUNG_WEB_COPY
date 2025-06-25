import React from "react";

function MainVisualShowcase() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Video de fundal */}
<video
  src="/samsung_promo.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
/>


      {/* Overlay pentru vizibilitate mai bună a textului */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conținut text + butoane peste video */}
      <div className="relative z-10 text-center text-white px-4">
        {/* <h2 className="text-3xl md:text-5xl font-bold">Galaxy S25 Ultra</h2>
        <p className="mt-3 text-base md:text-lg">
          Redefinește performanța. Disponibil acum.
        </p> */}

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          {/* <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Learn more
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Buy
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default MainVisualShowcase;

import React from "react";

function MainVisualShowcase() {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <img
        src="/MainVisualShowcaseFoto.jpg"
        alt="Samsung Galaxy S25 Ultra Showcase"
        className="w-full h-full object-contain md:object-cover"
        loading="lazy"
      />

      {/* Text promoțional opțional */}
      <div className="absolute bottom-12 text-center text-white px-4">
        <h2 className="text-2xl md:text-4xl font-bold">Galaxy S25 Ultra</h2>
        <p className="mt-2 text-sm md:text-base">Redefinește performanța. Disponibil acum.</p>
      </div>
    </section>
  );
}

export default MainVisualShowcase;

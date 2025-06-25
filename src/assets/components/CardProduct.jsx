import React from "react";

function CardProduct({ title, image }) {
  return (
    <div className="group flex flex-col items-center text-center bg-white p-6 rounded-lg shadow  cursor-pointer">
      
      {/* Titlu */}
      <h2 className="text-xl font-bold mb-6">{title}</h2>

      {/* Imagine centrată */}
      <img
        src={image}
        alt={title}
        className="w-full max-w-xs object-contain"
      />

      {/* Buton animat: apare la hover pe card */}
      <button
        className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-gray-300 text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-400"
      >
        Learn more
      </button>
    </div>
  );
}

export default CardProduct;

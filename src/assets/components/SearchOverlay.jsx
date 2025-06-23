import React, { useState, useEffect, useRef } from "react";

import mockData from "../../data/products";
 // ajustează calea în funcție de locația fișierului


function SearchOverlay({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const filtered = mockData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1/2 bg-white z-[9999] p-6 shadow-lg overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-2xl text-gray-600 hover:text-black"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Input */}
      <div className="max-w-3xl mx-auto mt-12">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search Samsung..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-2xl text-black border-b border-gray-300 p-4 focus:outline-none bg-gray-50 rounded"
        />
      </div>

      {/* Rezultate */}
      <div className="max-w-5xl mx-auto mt-6 overflow-y-auto max-h-[calc(50vh-150px)]">
        {searchTerm && results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {results.map((item, i) => (
              <div
                key={i}
                className="flex flex-col bg-gray-100 rounded-lg shadow hover:shadow-md p-4 cursor-pointer transition"
                onClick={() => alert(`Selected: ${item.title}`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-3"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-blue-600 font-bold mt-2">{item.price}</p>
              </div>
            ))}
          </div>
        )}

        {searchTerm && results.length === 0 && (
          <p className="text-gray-500 mt-6 text-center text-lg">
            No results found for "<strong>{searchTerm}</strong>"
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchOverlay;

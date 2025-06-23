import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const mockData = [
    "React Tutorial",
    "JavaScript Basics",
    "CSS Flexbox Guide",
    "Node.js Installation",
    "HTML Forms",
    "API Integration",
    "Database Design",
    "Web Development",
    "Mobile Apps",
    "Cloud Computing",
  ];

  const performSearch = () => {
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      const results = mockData.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      performSearch();
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div className="relative w-64 z-[1000]">
      {/* Search input + buttons */}
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white shadow-sm">
        {/* Icon lupă */}
        <svg
          className="w-4 h-4 text-gray-500 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isSearching}
          className="flex-grow outline-none text-sm text-gray-700 bg-transparent"
        />

        {/* Clear */}
        {searchTerm && (
          <button
            type="button"
            onClick={clearSearch}
            className="text-gray-400 hover:text-gray-600 mx-1"
          >
            ✕
          </button>
        )}

        {/* Search button */}
        <button
          type="button"
          onClick={performSearch}
          disabled={isSearching}
          className="text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 px-3 py-1 text-sm rounded-full transition"
        >
          {isSearching ? "..." : "Go"}
        </button>
      </div>

      {/* Rezultate dropdown */}
      {searchResults.length > 0 && (
        <ul className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-[9999]">
          {searchResults.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => alert(`Ai selectat: ${item}`)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Fără rezultate */}
      {searchResults.length === 0 && searchTerm && !isSearching && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow z-[9999] px-4 py-2 text-sm text-gray-500">
          Niciun rezultat găsit.
        </div>
      )}
    </div>
  );
}

export default SearchBar;

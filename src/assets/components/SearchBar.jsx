import React from "react";

function SearchBar() {
  return (
    <form className="w-64 flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white shadow-sm">
      {/* Iconul lupă */}
      <svg
        className="w-4 h-4 text-gray-500 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>

      {/* Input */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow outline-none px-1 text-sm text-gray-700 bg-transparent"
      />

      {/* Buton */}
      <button
        type="submit"
        className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 text-sm rounded-full transition"
      >
        Go
      </button>
      
    </form>
  );
}

export default SearchBar;

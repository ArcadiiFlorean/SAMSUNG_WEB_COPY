import React from "react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="bg-transparent text-white px-4 py-4 absolute top-0 left-0 w-full z-10 pl-20 pr-20">
      <div className="max-w-[1880px] mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold ">SAMSUNG</h1>

        {/* Meniu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-sm">
            <li><a href="/" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">Mobile</a></li>
            <li><a href="/contact" className="hover:underline">TV & AV</a></li>
            <li><a href="/contact" className="hover:underline">Computer & Display</a></li>
            <li><a href="/contact" className="hover:underline">Wearables</a></li>
            <li><a href="/contact" className="hover:underline">Accessories</a></li>
          </ul>
        </nav>

        {/* Search + Iconuri */}
        <div className="flex items-center gap-4">
          <SearchBar />

          {/* Icon utilizator */}
          <button className="text-xl text-white hover:text-blue-300 transition">
            <i className="bi bi-person-fill"></i>
          </button>

          {/* Coș cumpărături */}
          <button className="text-xl text-white hover:text-blue-300 transition">
            <i className="bi bi-cart"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

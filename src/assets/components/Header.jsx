import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchOverlay from "./SearchOverlay";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent text-white py-4 absolute top-10 left-0 w-full z-50 px-4 md:px-20">
      <div className="max-w-[1480px] mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-bold hover:text-blue-300 transition">
          SAMSUNG
        </Link>

        {/* Meniu desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            <li><Link to="/mobile" className="hover:underline">Mobile</Link></li>
            <li><Link to="/tv-av" className="hover:underline">TV & AV</Link></li>
            <li><Link to="/computers" className="hover:underline">Computers</Link></li>
            <li><Link to="/wearables" className="hover:underline">Wearables</Link></li>
            <li><Link to="/accessories" className="hover:underline">Accessories</Link></li>
          </ul>
        </nav>

        {/* Iconițe + burger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(true)}
            className="text-xl text-white hover:text-blue-300 transition"
            aria-label="Search"
          >
            <i className="bi bi-search"></i>
          </button>

          <button className="text-xl text-white hover:text-blue-300 transition" aria-label="Account">
            <i className="bi bi-person-fill"></i>
          </button>

          <button className="text-xl text-white hover:text-blue-300 transition" aria-label="Cart">
            <i className="bi bi-cart"></i>
          </button>

          {/* Burger button - doar pe mobil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white hover:text-blue-300 transition"
            aria-label="Toggle Menu"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>

      {/* Meniu mobil */}
      {menuOpen && (
        <nav className="md:hidden mt-4 px-4">
          <ul className="flex flex-col gap-3 text-sm bg-black bg-opacity-90 p-4 rounded-lg">
            <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
            <li><Link to="/mobile" onClick={() => setMenuOpen(false)}>Mobile</Link></li>
            <li><Link to="/tv-av" onClick={() => setMenuOpen(false)}>TV & AV</Link></li>
            <li><Link to="/computers" onClick={() => setMenuOpen(false)}>Computers</Link></li>
            <li><Link to="/wearables" onClick={() => setMenuOpen(false)}>Wearables</Link></li>
            <li><Link to="/accessories" onClick={() => setMenuOpen(false)}>Accessories</Link></li>
          </ul>
        </nav>
      )}

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

export default Header;

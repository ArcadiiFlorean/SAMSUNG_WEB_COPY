import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchOverlay from "./SearchOverlay";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-transparent text-white py-4 absolute top-10 left-0 w-full z-50 px-20">
      <div className="max-w-[1480px] mx-auto flex items-center justify-between gap-4">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link to="/" className="text-2xl font-bold mr-3 hover:text-blue-300 transition">
                SAMSUNG
              </Link>
            </li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            <li><Link to="/mobile" className="hover:underline">Mobile</Link></li>
            <li><Link to="/tv-av" className="hover:underline">TV & AV</Link></li>
            <li><Link to="/computers" className="hover:underline">Computers</Link></li>
            <li><Link to="/wearables" className="hover:underline">Wearables</Link></li>
            <li><Link to="/accessories" className="hover:underline">Accessories</Link></li>
          </ul>
        </nav>

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
        </div>
      </div>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

export default Header;

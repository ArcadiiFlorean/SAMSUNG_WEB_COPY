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

            {/* SHOP */}
            <li className="relative group">
              <span className="hover:underline cursor-pointer">Shop</span>
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[500px] flex gap-6 p-6">
                <div className="flex flex-col gap-2 w-1/2">
                  <Link to="/shop" className="font-semibold hover:underline">All Products</Link>
                  <Link to="/shop/featured" className="hover:text-blue-600">Featured</Link>
                  <Link to="/shop/new" className="hover:text-blue-600">New Arrivals</Link>
                </div>
                <div className="w-1/2">
                  <img src="https://images.samsung.com/is/image/samsung/assets/uk/revamp/gnb/shop/GNB_Shop_L1_03_88x88.png?$ORIGIN_PNG$" alt="Shop" className="w-full h-auto rounded-lg shadow" />
                </div>
              </div>
            </li>

            {/* MOBILE */}
            <li className="relative group">
              <span className="hover:underline cursor-pointer">Mobile</span>
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[500px] flex gap-6 p-6">
                <div className="flex flex-col gap-2 w-1/2">
                  <Link to="/mobile" className="font-semibold hover:underline">All Mobile</Link>
                  <Link to="/mobile/galaxy-s" className="hover:text-blue-600">Galaxy S Series</Link>
                  <Link to="/mobile/galaxy-z" className="hover:text-blue-600">Galaxy Z Fold</Link>
                  <Link to="/mobile/galaxy-a" className="hover:text-blue-600">Galaxy A Series</Link>
                  <Link to="/mobile/tablets" className="hover:text-blue-600">Tablets</Link>
                </div>
                <div className="w-1/2">
                  <img src="https://images.samsung.com/is/image/samsung/assets/uk/revamp/gnb/mobile/GNB_Mobile_L1_01_88x88.png?$ORIGIN_PNG$" alt="Galaxy S23" className="w-full h-auto rounded-lg shadow" />
                </div>
              </div>
            </li>

            {/* TV & AV */}
            <li className="relative group">
              <span className="hover:underline cursor-pointer">TV & AV</span>
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[500px] flex gap-6 p-6">
                <div className="flex flex-col gap-2 w-1/2">
                  <Link to="/tv-av" className="font-semibold hover:underline">All TVs</Link>
                  <Link to="/tv-av/qled" className="hover:text-blue-600">QLED TVs</Link>
                  <Link to="/tv-av/oled" className="hover:text-blue-600">OLED TVs</Link>
                  <Link to="/tv-av/soundbar" className="hover:text-blue-600">Soundbars</Link>
                </div>
                <div className="w-1/2">
                  <img src="https://images.samsung.com/is/image/samsung/assets/uk/revamp/gnb/tv-and-av/GNB_TV-AV_L1_02_88x88.png?$ORIGIN_PNG$" alt="TV AV" className="w-full h-auto rounded-lg shadow" />
                </div>
              </div>
            </li>

            {/* COMPUTERS */}
            <li className="relative group">
              <span className="hover:underline cursor-pointer">Computers</span>
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[500px] flex gap-6 p-6">
                <div className="flex flex-col gap-2 w-1/2">
                  <Link to="/computers" className="font-semibold hover:underline">All Computers</Link>
                  <Link to="/computers/laptops" className="hover:text-blue-600">Laptops</Link>
                  <Link to="/computers/tablets" className="hover:text-blue-600">Tablets</Link>
                  <Link to="/computers/chromebooks" className="hover:text-blue-600">Chromebooks</Link>
                </div>
                <div className="w-1/2">
                  <img src="https://images.samsung.com/is/image/samsung/assets/uk/revamp/gnb/computing-and-displays/GNB_Computing_L1_01_88x88.png?$ORIGIN_PNG$" alt="Computers" className="w-full h-auto rounded-lg shadow" />
                </div>
              </div>
            </li>

            {/* WEARABLES */}
            <li className="relative group">
              <span className="hover:underline cursor-pointer">Wearables</span>
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[500px] flex gap-6 p-6">
                <div className="flex flex-col gap-2 w-1/2">
                  <Link to="/wearables" className="font-semibold hover:underline">All Wearables</Link>
                  <Link to="/wearables/watch" className="hover:text-blue-600">Galaxy Watch</Link>
                  <Link to="/wearables/buds" className="hover:text-blue-600">Galaxy Buds</Link>
                  <Link to="/wearables/fitness" className="hover:text-blue-600">Fitness Bands</Link>
                </div>
                <div className="w-1/2">
                  <img src="https://images.samsung.com/is/image/samsung/assets/uk/revamp/gnb/wearables/GNB_Wearables_L1_02_88x88.png?$ORIGIN_PNG$" alt="Wearables" className="w-full h-auto rounded-lg shadow" />
                </div>
              </div>
            </li>

            {/* ACCESSORIES */}
            <li className="relative group">
              <span className="hover:underline cursor-pointer">Accessories</span>
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[500px] flex gap-6 p-6">
                <div className="flex flex-col gap-2 w-1/2">
                  <Link to="/accessories" className="font-semibold hover:underline">All Accessories</Link>
                  <Link to="/accessories/cases" className="hover:text-blue-600">Phone Cases</Link>
                  <Link to="/accessories/chargers" className="hover:text-blue-600">Chargers</Link>
                  <Link to="/accessories/keyboard" className="hover:text-blue-600">Keyboards</Link>
                </div>
                <div className="w-1/2">
                  <img src="https://images.samsung.com/is/image/samsung/assets/uk/revamp/gnb/accessories/GNB_Accessories_L1_03_88x88.png?$ORIGIN_PNG$" alt="Accessories" className="w-full h-auto rounded-lg shadow" />
                </div>
              </div>
            </li>
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

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white hover:text-blue-300 transition"
            aria-label="Toggle Menu"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>

      {/* Meniu mobil simplu */}
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

      {/* Search overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

export default Header;

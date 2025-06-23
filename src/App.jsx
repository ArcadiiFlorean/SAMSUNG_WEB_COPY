import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";
import VideoHeroBackground from "./assets/components/VideoHeroBackground";
import MainVisualShowcase from "./assets/components/MainVisualShowcase";

// Pagini individuale
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Mobile from "./pages/Mobile";
import TVAV from "./pages/TVAV";
import Computers from "./pages/Computers";
import Wearables from "./pages/Wearables";
import Accessories from "./pages/Accessories";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        {/* Header global */}
        <Header />

        {/* Conținut principal */}
        <main>
          <Routes>
            {/* Homepage: include secțiunile vizuale direct în route */}
            <Route
              path="/"
              element={
                <>
                  <section className="relative">
                    <VideoHeroBackground />
                  </section>
                  <section className="relative">
                    <MainVisualShowcase />
                  </section>
                </>
              }
            />

            {/* Rute secundare */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/tv-av" element={<TVAV />} />
            <Route path="/computers" element={<Computers />} />
            <Route path="/wearables" element={<Wearables />} />
            <Route path="/accessories" element={<Accessories />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

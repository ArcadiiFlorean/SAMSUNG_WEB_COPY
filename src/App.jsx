import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";
import VideoHeroBackground from "./assets/components/VideoHeroBackground";
import MainVisualShowcase from "./assets/components/MainVisualShowcase";
import CardProduct from "./assets/components/CardProduct";

// Pagini secundare
import Shop from "./pages/Shop";
import Mobile from "./pages/Mobile";
import TVAV from "./pages/TVAV";
import Computers from "./pages/Computers";
import Wearables from "./pages/Wearables";
import Accessories from "./pages/Accessories";

const products = [
  {
    title: "Neo QLED 8K",
    image: "https://images.samsung.com/is/image/samsung/assets/uk/ux3/home/MDMX_Feature_Card1_560X560.jpg?$560_560_JPG$",
  },
  {
    title: "The Frame",
    image: "https://images.samsung.com/is/image/samsung/assets/uk/ux3/home/MDMX_Feature_Card2_560X560.jpg?$560_560_JPG$",
  },
  {
    title: "Q-Series Soundbar",
    image: "https://images.samsung.com/is/image/samsung/assets/uk/ux3/home/MDMX_Feature_Card3_560X560.jpg?$560_560_JPG$",
  },
  {
    title: "Odyssey OLED G8",
    image: "https://images.samsung.com/is/image/samsung/assets/uk/ux3/home/MDMX_Feature_Card4_560X560.jpg?$560_560_JPG$",
  },
];

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
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
                  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gray-100">
                    {products.map((p, index) => (
                      <CardProduct key={index} title={p.title} image={p.image} />
                    ))}
                  </section>
                </>
              }
            />
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

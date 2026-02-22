"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* -----------------------------
   Gallery Categories
--------------------------------*/
const galleryData = {
  Proposals: [
    "/proposal3.jpeg",
    "/proposal2.jpeg",
    "/proposal-half.jpeg",
    "/proposal5.jpeg",
  ],
  "Love in Bloom": ["/bloom1.jpeg", "/bloom2.jpeg", "/bloom3.jpeg"],
  "First Dates": [
    "/date5.jpeg",
    "/date4.jpeg",
    "/date2.jpeg",
    "/date3.jpeg",
  ],
  Adventures: ["/date6.jpeg", "/adventures1.jpeg"],
  "Marriage Registry": ["/proposal-standing.jpeg"],
};

const rotations = [-5, 3, 2, -3, 4, -2];

export default function Gallery() {
  /* ===============================
     STATE
  =============================== */
  const [activeCategory, setActiveCategory] = useState("Proposals");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = galleryData[activeCategory];
  return (
    <>
      {/* =========================
           ROTATED GALLERY SECTION
      ========================== */}
      <section id="gallery" className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-center text-4xl md:text-5xl font-serif mb-8">
          GALLERY
        </h2>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(galleryData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 border rounded-full font-medium transition-colors ${activeCategory === cat
                  ? "bg-black text-white"
                  : "border-black text-black hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-12 flex justify-center">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="border border-black rounded-full px-4 py-2 font-medium text-black"
          >
            {Object.keys(galleryData).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Static Images */}
        {/* =========================
   DESKTOP STACK (md and up)
========================= */}
        <div className="hidden md:flex relative justify-center items-center mb-24 h-[500px]">

          {/* Background Grey Sheets */}
          <div className="absolute w-[360px] h-[440px] bg-gray-200 rotate-6 shadow-xl" />
          <div className="absolute w-[360px] h-[440px] bg-gray-300 -rotate-6 shadow-xl" />

          {images.slice(0, 3).map((src, i) => {
            const baseZ = [10, 30, 20];
            const positions = [
              "-translate-x-24 rotate-[-8deg]",
              "",
              "translate-x-24 rotate-[6deg]",
            ];

            return (
              <motion.div
                key={i}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={() => setLightboxImage(src)}
                className={`absolute bg-white shadow-2xl border-8 border-gray-100
        w-[320px] h-[400px]
        ${positions[i]}`}
                style={{
                  zIndex: hoveredIndex === i ? 50 : baseZ[i],
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>


        {/* =========================
   MOBILE GRID (below md)
========================= */}
        <div className="grid grid-cols-2 gap-4 md:hidden mb-16">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              onClick={() => setLightboxImage(src)}
              className="bg-white shadow-lg p-2"
            >
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="w-full h-44 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>


      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} className="max-h-[90%] max-w-[90%]" />
        </div>
      )}
    </>
  );
}

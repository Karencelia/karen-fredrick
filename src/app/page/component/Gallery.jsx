"use client";

import { useState, useEffect } from "react";
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
  const [photos, setPhotos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Proposals");
  const [lightboxImage, setLightboxImage] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [guestName, setGuestName] = useState("");
  const [caption, setCaption] = useState("");

  const images = galleryData[activeCategory];

  /* ===============================
     FETCH PHOTOS FROM SUPABASE
  =============================== */
  const fetchPhotos = async () => {
    try {
      const res = await fetch("/api/photos"); // we will create this route
      const data = await res.json();
      setPhotos(data);
    } catch (error) {
      console.error("Failed to fetch photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  /* ===============================
     HANDLE FILE
  =============================== */
  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File too large! Max 5MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  /* ===============================
     HANDLE SUBMIT
  =============================== */
  const handleSubmit = async () => {
    if (!guestName || !selectedImage) {
      alert("Please provide your name and select an image!");
      return;
    }

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: selectedImage,
          guestName,
          caption,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // reset form
        setSelectedImage(null);
        setGuestName("");
        setCaption("");

        // refresh gallery
        fetchPhotos();
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Check console for details.");
    }
  };

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
              className={`px-4 py-2 border rounded-full font-medium transition-colors ${
                activeCategory === cat
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
        <div className="relative flex justify-center items-center flex-wrap gap-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setLightboxImage(src)}
              className="relative shadow-xl border-4 border-gray-200 w-64 md:w-80 cursor-pointer overflow-hidden"
              style={{
                transform: `rotate(${rotations[i % rotations.length]}deg)`,
              }}
            >
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* ===============================
           DATABASE PHOTOS (Guests Uploads)
        =============================== */}
        {photos.length > 0 && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={photo.image_url}
                  alt={photo.guest_name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="font-semibold">{photo.guest_name}</p>
                  {photo.caption && (
                    <p className="text-sm text-gray-500">{photo.caption}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =========================
           SHARE SECTION
      ========================== */}
      <section className="py-20 px-6 md:px-16 bg-[#f8f8f8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Share Your Pictures
          </h2>

          {!selectedImage && (
            <label className="block border-2 border-dashed border-black rounded-2xl p-10 cursor-pointer">
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => handleFile(e.target.files[0])}
              />
              Click to upload a photo
            </label>
          )}

          {selectedImage && (
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
              <img
                src={selectedImage}
                className="w-full max-h-64 object-contain"
              />

              <input
                type="text"
                placeholder="Your Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full border p-3 rounded-lg"
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white py-3 rounded-lg"
              >
                Share Photo
              </button>
            </div>
          )}
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

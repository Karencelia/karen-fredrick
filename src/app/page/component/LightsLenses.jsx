"use client";

import { useState, useEffect } from "react";

export default function LightsAndLenses() {
  /* ===============================
     STATE
  =============================== */
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [guestName, setGuestName] = useState("");
  const [caption, setCaption] = useState("");

  /* ===============================
     FETCH PHOTOS
  =============================== */
  const fetchPhotos = async () => {
    try {
      const res = await fetch("/api/photos");
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
        setSelectedImage(null);
        setGuestName("");
        setCaption("");
        fetchPhotos();
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Check console for details.");
    }
  };

  /* ===============================
     RETURN 
  =============================== */
  return (
    <section id="lights-lenses">
      <div className="py-16 px-6 md:px-16 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto">

          {/* ================= SHARE SECTION ================= */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-[#05472A] font-serif mb-6">
              Lights and Lenses
            </h2>
            <p className="mb-3">
              We’ve put decent effort to capture and bring you our special day.
              And while at it, we clocked that you may have sights we may never see.
              From travels, to food, and emotions, help us capture our wedding from angles only you have.
            </p>

            {!selectedImage && (
              <label className="block border-2 border-dashed border-[#05472A] text-[#05472A] rounded-2xl p-10 cursor-pointer hover:bg-[#05472A]/5 transition">
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
                  alt="Preview"
                  className="w-full max-h-64 object-contain rounded-lg"
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
                  className="w-full bg-[#05472A] text-white py-3 rounded-lg hover:opacity-90 transition"
                >
                  Share Photo
                </button>
              </div>
            )}
          </div>

          {/* ================= GALLERY SECTION ================= */}
          {photos.length > 0 && (
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={photo.image_url}
                    alt={photo.guest_name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <p className="font-semibold text-[#05472A]">
                      {photo.guest_name}
                    </p>
                    {photo.caption && (
                      <p className="text-sm text-gray-500 mt-1">
                        {photo.caption}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}


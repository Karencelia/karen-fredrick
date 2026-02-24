"use client";

import { useEffect, useState } from "react";

export default function WeddingWishes() {
  const [wishes, setWishes] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState("form");
  const [form, setForm] = useState({
    name: "",
    message: "",
    gif_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);

  /* ================= GIF LIST ================= */
  const weddingGifs = [
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/3oz8xKaR836UJOYeOc/giphy.gif",
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
  ];

  /* ================= SAFE GIF HELPER ================= */
  const getGif = (wish) => {
    if (wish.gif_url) return wish.gif_url;
    const index = (wish.name?.length || 1) % weddingGifs.length;
    return weddingGifs[index];
  };

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const res = await fetch("/api/wishes");
        const data = await res.json();
        if (res.ok) setWishes(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWishes();
  }, []);

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newWish = {
      name: form.name.trim(),
      message: form.message.trim(),
      gif_url: form.gif_url,
      created_at: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWish),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setWishes([data, ...wishes]);
        setForm({ name: "", message: "", gif_url: "" });
        setDrawerOpen(false);
        setShowGifPicker(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <section id="well-wishes" className="px-6 py-20 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#05472A] md:text-5xl font-serif">Well Wishes</h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {wishes.slice(0, 6).map((wish) => (
            <div
              key={wish.id || wish.created_at}
              className="relative rounded-xl overflow-hidden group"
            >
              <img
                src={getGif(wish)}
                className="w-full h-64 md:h-80 object-cover"
                alt="wish gif"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />

              <div className="absolute bottom-4 left-0 right-0 px-4 text-center text-white">
                <h4 className="uppercase text-sm tracking-wide font-semibold mb-1">
                  {wish.name}
                </h4>
                <p className="text-sm leading-relaxed line-clamp-3">
                  {wish.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 w-full max-w-md mx-auto">
          <button
            onClick={() => {
              setDrawerMode("view");
              setDrawerOpen(true);
            }}
            className="px-8 py-3 border rounded-full cursor-pointer"
          >
            VIEW ALL ({wishes.length})
          </button>

          <button
            onClick={() => {
              setDrawerMode("form");
              setDrawerOpen(true);
            }}
            className="px-8 py-3 rounded-full bg-[#05472A] text-white"
          >
            POST A WISH
          </button>
        </div>
      </div>

      {/* ================= DRAWER ================= */}
<div
  className={`fixed inset-0 z-50 transition-opacity duration-300 ${
    drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>
  {/* Overlay */}
  <div
    onClick={() => setDrawerOpen(false)}
    className="absolute inset-0 bg-black/40 transition-opacity duration-300"
  />

  {/* Drawer Panel */}
  <div
    className={`absolute right-0 top-0 h-full w-full md:w-[550px] bg-white overflow-y-auto transform transition-transform duration-300 ease-in-out ${
      drawerOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* HEADER */}
    <div className="sticky top-0  z-10 flex justify-between items-center p-6 bg-[#FAFAFA]">
      <h3 className="text-xl font-semibold">
        {drawerMode === "form" ? "MESSAGE" : "ALL WISHES"}
      </h3>

      <button
        onClick={() => setDrawerOpen(false)}
        className="text-2xl font-bold text-gray-600 hover:text-black transition"
      >
        ✕
      </button>
    </div>

    <div className="p-6">
      {drawerMode === "view" && (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 space-y-6">
          {wishes.map((wish) => (
            <div
              key={wish.id || wish.created_at}
              className="relative rounded-xl overflow-hidden"
            >
              <img
                src={getGif(wish)}
                className="w-full h-56 object-cover"
                alt="gif"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-4 left-0 right-0 px-4 text-center text-white">
                <p className="font-semibold mb-1">{wish.name}</p>
                <p className="text-sm">{wish.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {drawerMode === "form" && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            required
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border-b p-3 outline-none"
          />

          <textarea
            required
            rows={5}
            maxLength={140}
            placeholder="Type message here"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border p-3 resize-none"
          />

          <button
            disabled={loading}
            type="submit"
            className="w-full py-4 bg-gray-800 text-white rounded-full"
          >
            {loading ? "Sending..." : "SEND"}
          </button>
        </form>
      )}

      {/* MOBILE CANCEL BUTTON */}
      <div className="mt-10 md:hidden">
        <button
          onClick={() => setDrawerOpen(false)}
          className="w-full py-4 border border-gray-400 rounded-full text-gray-700 transition hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}
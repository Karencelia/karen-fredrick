"use client";

import { useEffect, useState } from "react";

export default function WeddingWishes() {
  const [wishes, setWishes] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState("form"); // form | view
  const [form, setForm] = useState({
    name: "",
    message: "",
    gif_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);
const getGif = (wish) => wish.gif_url || weddingGifs[Math.floor(Math.random() * weddingGifs.length)];
  const weddingGifs = [
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/3oz8xKaR836UJOYeOc/giphy.gif",
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
  ];

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchWishes = async () => {
      const res = await fetch("/api/wishes");
      const data = await res.json();
      if (res.ok) setWishes(data);
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
    }
  };

  return (
    <section id="well-wishes" className="px-6 py-20 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif">Well Wishes</h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishes.slice(0, 6).map((wish) => (
            <div
              key={wish.__backendId || wish.id || wish.created_at}
              className="relative rounded-xl overflow-hidden group"
            >
              {/* GIF Background */}
              <img src={getGif(wish)} className="w-full h-64 md:h-80 object-cover" alt="wish gif" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />

              {/* TEXT AT BOTTOM */}
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
        <div className="flex justify-center gap-6 mt-12">
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
            className="px-8 py-3 rounded-full bg-[#05472A] hover:opacity-90 text-white cursor-pointer"
          >
            POST A WISH
          </button>
        </div>
      </div>

      {/* ================= DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 ${drawerOpen ? "visible" : "invisible"}`}
      >
        {/* Overlay */}
        <div
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${drawerOpen ? "opacity-100" : "opacity-0"}`}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full md:w-[500px] bg-white p-10 overflow-y-auto transform transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {drawerMode === "form" ? (
            <>
              <h3 className="text-3xl font-serif mb-8 text-center">MESSAGE</h3>

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

                {/* GIF PICKER */}
                <div>
                  {!form.gif_url ? (
                    <button
                      type="button"
                      onClick={() => setShowGifPicker(!showGifPicker)}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      😊 Add GIF
                    </button>
                  ) : (
                    <div className="relative">
                      <img
                        src={form.gif_url}
                        className="h-32 w-full object-cover rounded-lg mb-2"
                        alt="selected gif"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setForm({ ...form, gif_url: "" })}
                          className="px-3 py-1 text-sm bg-red-500 text-white rounded"
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowGifPicker(true)}
                          className="px-3 py-1 text-sm bg-gray-800 text-white rounded"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  )}

                  {showGifPicker && (
                    <div className="grid grid-cols-3 gap-3 mt-4 max-h-52 overflow-y-auto">
                      {weddingGifs.map((gif) => (
                        <img
                          key={gif}
                          src={gif}
                          onClick={() => {
                            setForm({ ...form, gif_url: gif });
                            setShowGifPicker(false);
                          }}
                          className={`h-20 w-full object-cover rounded-lg cursor-pointer border-2 ${form.gif_url === gif ? "border-black" : "border-transparent"}`}
                          alt="gif option"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 bg-gray-800 text-white rounded-full"
                >
                  {loading ? "Sending..." : "SEND"}
                </button>
              </form>
            </>
          ) : (
            <>
              <h3 className="text-3xl font-serif mb-8 text-center">ALL WISHES</h3>

              <div className="space-y-6">
                {wishes.map((wish) => (
                  <div
                    key={wish.id || wish.created_at}
                    className="border rounded-xl overflow-hidden"
                  >
                    {wish.gif_url && (
                      <img
                        src={wish.gif_url}
                        className="h-40 w-full object-cover"
                        alt="gif"
                      />
                    )}

                    <div className="p-4">
                      <p className="font-semibold mb-1">{wish.name}</p>
                      <p className="text-sm text-gray-600">{wish.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
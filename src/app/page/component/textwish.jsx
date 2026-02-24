"use client";

import { useEffect, useState } from "react";

/* ===============================
   DEFAULT CONFIG
================================ */
const defaultConfig = {
  couple_names: "Karen & Fredrick",
  section_title: "Send Your Well Wishes",
  hashtag_one: "#K&FInfinitum",
  hashtag_two: "#Karen&Fredrick",
  hashtag_three: "#KF'26",
  background_color: "#ffffff",
  text_color: "#1a472a",
  accent_color: "#2d6a3e",
  font_size: 16,
};

export default function WeddingWishes() {
  /* ===============================
     STATE
  =============================== */
  const [config, setConfig] = useState(defaultConfig);
  const [wishes, setWishes] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | limit

  /* ===============================
     LOAD WISHES FROM BACKEND
  =============================== */
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const res = await fetch("/api/wishes");
        const data = await res.json();

        if (res.ok) {
          setWishes(data);
        } else {
          console.error(data.error);
        }
      } catch (err) {
        console.error("Failed to fetch wishes:", err);
      }
    };

    fetchWishes();
  }, []);

  /* ===============================
     HANDLE SUBMIT
  =============================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (wishes.length >= 999) {
      setStatus("limit");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setWishes((prev) => [data, ...prev]);
        setForm({ name: "", message: "" });
        setStatus("success");
      } else {
        console.error(data.error);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit failed:", err);
      setStatus("error");
      setLoading(false);
    }

    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section
      id="well-wishes"
      className="min-h-screen px-6 py-16"
      style={{ background: config.background_color }}
    >
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-serif mb-3"
            style={{
              color: config.text_color,
              fontSize: config.font_size * 2.5,
            }}
          >
            {config.couple_names}
          </h1>

          <h2
            className="uppercase tracking-widest text-lg"
            style={{
              color: config.text_color,
              fontSize: config.font_size * 1.1,
            }}
          >
            {config.section_title}
          </h2>

          <div
            className="flex justify-center gap-3 mt-4 text-sm"
            style={{ color: config.accent_color }}
          >
            <span>{config.hashtag_one}</span>
            <span>•</span>
            <span>{config.hashtag_two}</span>
            <span>•</span>
            <span>{config.hashtag_three}</span>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              required
              rows="4"
              placeholder="Share your wishes..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full p-3 border rounded-lg resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-lg text-white font-medium"
              style={{
                background: `linear-gradient(135deg, ${config.text_color}, ${config.accent_color})`,
              }}
            >
              {loading ? "Sending..." : "Send Well Wishes"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-green-600 text-center">
              ✨ Your well wishes have been sent!
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-red-600 text-center">
              Something went wrong. Please try again.
            </p>
          )}

          {status === "limit" && (
            <p className="mt-4 text-orange-600 text-center">
              Guestbook is full 💕
            </p>
          )}
        </div>

        {/* WISHES LIST */}
        <div className="grid gap-6 md:grid-cols-2">
          {wishes.length === 0 && (
            <p className="text-center col-span-2 text-gray-500">
              Be the first to send your well wishes 💕
            </p>
          )}

          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="p-6 rounded-xl shadow-md bg-white"
              style={{
                borderLeft: `4px solid ${config.accent_color}`,
              }}
            >
              <h4
                className="text-lg font-semibold"
                style={{ color: config.text_color }}
              >
                {wish.name}
              </h4>

              <p className="text-xs opacity-60 mb-3">
                {new Date(wish.created_at).toLocaleDateString()}
              </p>

              <p style={{ color: config.text_color }}>
                {wish.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
{/* <div
  key={wish.__backendId || wish.id || wish.created_at}
  className="relative rounded-xl overflow-hidden group"
> */}
  {/* GIF Background */}
  {/* <img src={getGif(wish)} className="w-full h-64 md:h-80 object-cover" alt="wish gif" /> */}

  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" /> */}

  {/* TEXT AT BOTTOM */}
  {/* <div className="absolute bottom-4 left-0 right-0 px-4 text-center text-white">
    <h4 className="uppercase text-sm tracking-wide font-semibold mb-1">
      {wish.name}
    </h4>
    <p className="text-sm leading-relaxed line-clamp-3">
      {wish.message}
    </p>
  </div> */}
{/* </div> */ }


// hom'jsx

"use client";

import Countdown from "./Countdown";

export default function Page() {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
<section id="home" className="relative w-full min-h-screen pt-20">  {/* Background Image */}
  <img
    src="prewedding1.jpeg"
    alt="Wedding Hero"
    className="absolute inset-0 w-full h-full sm:h-[1000px] object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 sm:h-[1000px] bg-black/50" />

  {/* Content */}
  <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">

    {/* Countdown */}
    <Countdown targetDate="2026-03-12T00:00:00" />

    {/* Names */}
    <h1 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif tracking-wide leading-tight">
      KAREN & <br /> FREDRICK
    </h1>

    {/* Subtext */}
    <p className="mt-4 text-sm sm:text-base md:text-lg font-light">
      We are getting married
    </p>

    {/* Date */}
    <p className="mt-2 text-sm sm:text-base md:text-lg">
      Thursday, Twelfth March, 2026
    </p>

    {/* Buttons */}
    <div className="mt-6 flex gap-3 bg-white/95 rounded-lg px-4 py-2 shadow-md">
      <a
        href="#rsvp"
        className="px-4 py-1.5 text-xs sm:text-sm font-medium text-black hover:font-semibold transition"
      >
        RSVP
      </a>

      <a
        href="#rsvp"
        className="px-4 py-1.5 text-xs sm:text-sm font-medium text-black hover:font-semibold transition"
      >
        GIFTING
      </a>
    </div>

  </div>
</section>
    </div>
  );
}
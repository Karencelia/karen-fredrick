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
     INIT SDKs
  =============================== */
  useEffect(() => {
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange: (cfg) =>
          setConfig({ ...defaultConfig, ...cfg }),
      });
    }

    if (window.dataSdk) {
      window.dataSdk.init({
        onDataChanged: (data) => {
          const sorted = [...data].sort(
            (a, b) =>
              new Date(b.created_at) - new Date(a.created_at)
          );
          setWishes(sorted);
        },
      });
    }
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

    const newWish = {
      name: form.name.trim(),
      message: form.message.trim(),
      created_at: new Date().toISOString(),
    };

    const result = await window.dataSdk.create(newWish);

    setLoading(false);

    if (result.isOk) {
      setForm({ name: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus(null), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section
      id="well-wishes"
      className="min-h-screen px-6 py-16"
      style={{ background: config.background_color }}
    >
      <div className="max-w-4xl mx-auto">

        {/* =========================
             HEADER
        ========================== */}
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

        {/* =========================
             FORM
        ========================== */}
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

        {/* =========================
             WISHES LIST
        ========================== */}
        <div className="grid gap-6 md:grid-cols-2">
          {wishes.length === 0 && (
            <p className="text-center col-span-2 text-gray-500">
              Be the first to send your well wishes 💕
            </p>
          )}

          {wishes.map((wish) => (
            <div
              key={wish.__backendId}
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
                {new Date(
                  wish.created_at
                ).toLocaleDateString()}
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
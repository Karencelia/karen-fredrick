"use client";

import Countdown from "./Countdown";

export default function Page() {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
<section id="home" className="relative w-full min-h-screen pt-20">  {/* Background Image */}
  <img
    src="proposal-half.jpeg"
    alt="Wedding Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

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
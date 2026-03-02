"use client";

import Countdown from "./Countdown";

export default function Page() {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
<section
  id="home"
  className="relative w-full h-screen md:h-[1000px] overflow-hidden"
>
  {/* Background Image */}
  <img
    src="/proposal-half.jpeg"
    alt="Wedding Hero"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
<div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">

  {/* Inner container to shift content upward on desktop */}
  <div className="flex flex-col items-center md:-mt-20">

    {/* Countdown */}
    <div className="mb-10 md:mb-30 md:-mt-50">
  <Countdown targetDate="2026-03-12T00:00:00" />
</div>

    {/* Names */}
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-wide leading-tight">
      KAREN & <br /> FREDRICK
    </h1>

    {/* Subtext */}
    <p className="mt-5 md:mt-6 text-sm sm:text-base md:text-lg font-light">
      We are getting married
    </p>

    {/* Date */}
    <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg">
      Thursday, Twelfth March, 2026
    </p>

    {/* Buttons */}
    <div className="mt-10 md:mt-14 flex gap-4 border-2 rounded-full px-4 py-2 shadow-md">
      <a
        href="#rsvp"
        className="px-5 py-2 text-xs sm:text-sm font-medium text-white hover:font-semibold transition"
      >
        RSVP
      </a>

      <a
        href="#gifting"
        className="px-5 py-2 text-xs sm:text-sm font-medium text-white hover:font-semibold transition"
      >
        GIFTING
      </a>
    </div>

  </div>
</div>
</section>
    </div>
  );
}
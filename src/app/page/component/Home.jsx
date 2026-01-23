
"use client";

import Countdown from "./Countdown";

export default function Page() {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen pt-15">
        <img
          src="proposal-half.jpeg"
          alt="Wedding Hero"
          className="object-cover w-full max-h-full"
        />

        {/* Countdown */}
        <Countdown targetDate="2026-03-12T00:00:00" />

        {/* Names Overlay */}
        {/* Names + Date + Buttons Overlay */}
<div className="absolute inset-0 flex flex-col items-center justify-center mt-[-20rem] md:mt-[-25rem] translate-y-[20px] text-center text-white z-20 px-4">

  {/* Names Group */}
  <div className="mb-12 md:mb-16">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-widest">
      KAREN
    </h1>

    <p className="text-base sm:text-lg italic my-2">and</p>

    <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-widest">
      FREDRICK
    </h1>
  </div>

  {/* Date */}
  <p className="text-xs sm:text-sm md:text-base tracking-wide">
    Thursday, Twelfth March, 2026
  </p>

  {/* RSVP & Gifting Buttons */}
  <div className="mt-6 flex gap-4 bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
    <a
      href="#rsvp"
      className="px-6 py-2 text-sm md:text-base font-medium text-black rounded-md hover:text-black hover:font-bold transition"
    >
      RSVP
    </a>

    <a
      href="#rsvp"
      className="px-6 py-2 text-sm md:text-base font-medium text-black rounded-md hover:text-black hover:font-bold  transition"
    >
      GIFTING
    </a>
  </div>
</div>



        {/* Intro Message */}
        <div className="flex flex-col items-center justify-center mt-16 md:mt-20 px-4">
          <div className="border-b-1 border-black w-24 mb-4 md:mb-5"></div>

          <div className="flex flex-col items-center justify-center text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 mb-4 md:mb-5 px-2 text-center">
            <p>My person,</p>
            <p>We really can't wait to share our special day with you.</p>
          </div>

          <div className="border-b-1 border-black w-24 mb-8 md:mb-10"></div>
        </div>
      </section>
    </div>
  );
}
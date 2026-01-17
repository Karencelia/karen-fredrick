"use client";

import Countdown from "./Countdown";

export default function Page() {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen pt-15">
        <img
          src="proposal-standing1.jpeg"
          alt="Wedding Hero"
          className="object-cover w-full max-h-full"
        />

        {/* Countdown */}
        <Countdown targetDate="2026-03-12T00:00:00" />

        {/* Names Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[-20rem] md:mt-[-25rem] text-center text-white z-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-widest">
            KAREN
          </h1>
          <p className="text-base sm:text-lg italic my-2">and</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-widest">
            FREDRICK
          </h1>
        </div>

        {/* Date Overlay */}
        <div className="absolute bottom-60 sm:bottom-80 left-0 right-0 text-center text-white z-20 px-4">
          <p className="text-xs sm:text-sm md:text-base tracking-wide">
            Thursday, Twelfth March, 2026
          </p>
        </div>

        {/* Intro Message */}
        <div className="flex flex-col items-center justify-center mt-16 md:mt-20 px-4">
          <div className="border-b-1 border-black w-24 mb-4 md:mb-5"></div>

          <div className="flex flex-col items-center justify-center text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 mb-4 md:mb-5 px-2 text-center">
            <p>My person,</p>
            <p>We really can't wait to share our special day with you, at the Jubilee Gardens.</p>
          </div>

          <div className="border-b-1 border-black w-24 mb-8 md:mb-10"></div>
        </div>
      </section>
    </div>
  );
}

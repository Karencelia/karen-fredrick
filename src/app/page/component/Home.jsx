"use client";

import Countdown from "./Countdown"

export default function Page() {
  return (
    <div className="w-full relative">
      {/* Countdown at the top */}

      <section className="relative w-full min-h-screen pt-15">
        <img
          src="proposal-standing1.jpeg"
          alt="Wedding Hero"
          className="object-cover w-full max-h-full"
        />
      <Countdown targetDate="2026-03-12T00:00:00" />
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[-25rem] text-center text-white z-20 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-widest">
            KAREN
          </h1>
          <p className="text-lg italic my-2">and</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-widest">
            FREDRICK
          </h1>
        </div>
        <div className="absolute bottom-80 left-0 right-0 text-center text-white z-20 px-4">
          <p className="text-sm sm:text-base tracking-wide">
            Thursday, Twelfth March, 2026
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-20">
          <div className="border-b-1 text-black w-[120px] mb-5"></div>
          <div className="flex flex-col items-center justify-center text-[18px] text-gray-700 mb-5">
            <p>My person,</p>
            <p>We really can't wait to share our special day with you, at the Jubilee Gardens.</p>
          </div>
          <div className="border-b-1 text-black w-[120px] mb-10"></div>
        </div>
      </section>
    </div>
  );
}

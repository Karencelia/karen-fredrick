"use client";
import Gallery from "./Gallery";


export default function LightsAndLenses() {
  return (
    <section id="lights-lenses" className="w-full bg-white py-6 px-6 md:px-20 text-center">
      
        {/* Intro Message */}
        <div className="flex flex-col items-center justify-center mt-6 md:mt-20 px-4">
          <div className="border-b-1 border-black w-24 mb-4 md:mb-5"></div>

          <div className="flex flex-col items-center justify-center text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 mb-4 md:mb-5 px-2 text-center">
            <p>My person,</p>
            <p>We really can't wait to share our special day with you.</p>
          </div>

          <div className="border-b-1 border-black w-24 mb-8 md:mb-10"></div>
        </div>
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-[cursive] text-gray-400 mb-6">
        Lights and Lenses
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-[16px] md:text-[18px] text-gray-700 leading-relaxed mb-8 px-2 md:px-0">
        We’ve put decent effort to capture and bring you our special day. And while at it,
        we clocked that you may have sights we may never see. From travels, to food, and
        emotions, help us capture our wedding from angles only you have.
      </p>

      {/* Quote */}
      <div className="mt-16 text-gray-600 italic max-w-xl mx-auto text-[16px] md:text-[18px] px-4 md:px-0">
        <p>
          “My dear one is mine, and I am his.”
        </p>
        <p className="mt-4 not-italic font-semibold text-black">
          Song of Solomon 2:16 (NWT)
        </p>
      </div>
      <Gallery />
    </section>
  );
}

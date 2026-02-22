"use client";


export default function Quote() {
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
    
      {/* Quote */}
      <div className="mt-16 text-gray-600 italic max-w-xl mx-auto text-[16px] md:text-[18px] px-4 md:px-0">
        <p>
          “My dear one is mine, and I am his.”
        </p>
        <p className="mt-4 not-italic font-semibold text-black">
          Song of Solomon 2:16 (NWT)
        </p>
      </div>
    </section>
  );
}

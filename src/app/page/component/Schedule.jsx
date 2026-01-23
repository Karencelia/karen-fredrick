"use client";

export default function Schedule() {
  return (
    <section id="schedule" className="w-full bg-white py-24 px-6 md:px-20 text-center">
      {/* Main Title */}
      <h2 className="text-3xl md:text-5xl tracking-widest font-light mb-12 md:mb-16">
        THE SCHEDULE
      </h2>

      {/* Event Name */}
      <h3 className="text-3xl md:text-4xl font-[cursive] italic mb-16 md:mb-20">
        Wedding Ceremony
      </h3>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-20 gap-x-32 max-w-4xl mx-auto">
        
        {/* Date & Time */}
        <div className="flex flex-col items-center px-4 md:px-0">
          <span className="mb-4 text-gray-400 text-xl">
            📅
          </span>
          <p className="text-xs tracking-widest mb-2">DATE & TIME</p>
          <p className="text-sm md:text-base">
            Thurs 12th March 2026
            <br />
            01:00 PM (WAT)
          </p>
        </div>

        {/* Venue */}
        <div className="flex flex-col items-center px-4 md:px-0">
          <span className="mb-4 text-gray-400 text-xl">
            📍
          </span>
          <p className="text-xs tracking-widest mb-2">VENUE</p>
          <p className="text-sm md:text-base">
            Magboro, Ogun State
          </p>
        </div>

        {/* Groom Dress Theme */}
        <div className="flex flex-col items-center px-4 md:px-0 md:col-span-2">
          <span className="mb-4 text-gray-400 text-xl">
            👔
          </span>
          <p className="text-xs tracking-widest mb-2">DRESS THEME</p>
          <p className="text-sm md:text-base max-w-xs text-center">
            Dress To Impress With A Pop Of Color – White or Bottle Green
            <br />
            <i>All Guests</i>
          </p>
        </div>
      </div>
    </section>
  );
}

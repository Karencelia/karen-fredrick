export default function Schedule() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-20 text-center">
      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl tracking-widest font-light mb-16">
        THE SCHEDULE
      </h2>

      {/* Event Number */}
      <p className="text-xs tracking-[0.3em] text-gray-500 mb-6">
        EVENT #1
      </p>

      {/* Event Name */}
      <h3 className="text-4xl font-[cursive] italic mb-20">
        Wedding
      </h3>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-32 max-w-4xl mx-auto">
        
        {/* Date & Time */}
        <div className="flex flex-col items-center">
          <span className="mb-4 text-gray-400">
            📅
          </span>
          <p className="text-xs tracking-widest mb-2">DATE & TIME</p>
          <p className="text-base">
            Thurs 12th March 2026
            <br />
            01:00 PM (WAT)
          </p>
        </div>

        {/* Venue */}
        <div className="flex flex-col items-center">
          <span className="mb-4 text-gray-400">
            📍
          </span>
          <p className="text-xs tracking-widest mb-2">VENUE</p>
          <p className="text-base">
            Magboro, Ogun
          </p>
        </div>

        {/* Groom Dress Theme */}
        <div className="flex flex-col items-center">
          <span className="mb-4 text-gray-400">
            👔
          </span>
          <p className="text-xs tracking-widest mb-2">DRESS THEME</p>
          <p className="text-base max-w-xs">
            Dress To Impress With A Pop Of Color
            <br />
            Groom’s Guests
          </p>
        </div>

        {/* Bride Dress Theme */}
        <div className="flex flex-col items-center">
          <span className="mb-4 text-gray-400">
            👗
          </span>
          <p className="text-xs tracking-widest mb-2">DRESS THEME</p>
          <p className="text-base max-w-xs">
            Express Your Individuality Through Vibrant Colors
            <br />
            Bride’s Guests
          </p>
        </div>
      </div>
    </section>
  );
}

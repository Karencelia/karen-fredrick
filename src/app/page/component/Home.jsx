export default function Page() {
  return (
    <div className="w-full">
      <section className="relative w-full min-h-screen pt-15">
  {/* Background Image */}
  <img
    src="proposal-standing1.jpeg"
    alt="Wedding Hero"
    className="object-cover w-full max-h-full"
  />

  {/* Text Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center mt-[-25rem] text-center text-white z-20 px-4">

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-widest">
      KAREN
    </h1>
    <p className="text-lg italic my-2">and</p>
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-widest">
      FREDRICK
    </h1>
  </div>

  {/* Date near bottom */}
  <div className="absolute bottom-80 left-0 right-0 text-center text-white z-20 px-4">
    <p className="text-sm sm:text-base tracking-wide">
      Thursday, Twelfth March, 2026
    </p>
  </div>
</section>

    </div>
  );
}
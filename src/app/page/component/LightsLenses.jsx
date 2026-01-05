"use client";

export default function LightsAndLenses() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-[cursive] text-gray-400 mb-6">
        Lights and Lenses
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed mb-8">
        We’ve put decent effort to capture and bring you our special day. And while at it, 
        we clocked that you may have sights we may never see. From travels, to food, and 
        emotions, help us capture our wedding from angles only you have.
      </p>

      {/* Button */}
      <a
        href="#gallery"
        className="inline-block bg-yellow-800 text-white font-semibold px-6 py-3 rounded shadow-md hover:bg-yellow-700 transition"
      >
        View Our Gallery
      </a>

      {/* Quote */}
      <div className="mt-16 text-gray-600 italic max-w-xl mx-auto">
        <p>
          “My dear one is mine, and I am his.”
        </p>
        <p className="mt-4 not-italic font-semibold text-black">
          Song of Solomon 2:16 (NWT)gv v cg bnhmbgvvb b
        </p>
      </div>
    </section>
  );
}

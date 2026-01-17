"use client";

export default function ScrollingNames() {
  return (
    <div className="overflow-hidden w-full bg-black py-10">
      <div className="flex marquee">
        <div className="flex gap-50">
          <span className="name">KAREN & FREDRICK</span>
          <span className="name">KAREN & FREDRICK</span>
          <span className="name">KAREN & FREDRICK</span>
        </div>

        {/* duplicate */}
        <div className="flex gap-50">
          <span className="name">KAREN & FREDRICK</span>
          <span className="name">KAREN & FREDRICK</span>
          <span className="name">KAREN & FREDRICK</span>
        </div>
      </div>
    </div>
  );
}

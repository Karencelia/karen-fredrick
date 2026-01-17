"use client";

import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 px-10 py-4 flex items-center justify-between">
      {/* Logo (MC) */}
      <div className="text-xl font-serif font-bold"><a href="#home">K | F</a></div>

      {/* Links */}
      <ul className="hidden md:flex gap-x-6 text-gray-700 font-medium">
        <li><a href="#lights-lenses">Lights and Lenses</a></li>
        {/* <li><a href="#">Virtual</a></li> */}
        <li><a href="#our-story">Our Story</a></li>
        <li><a href="#schedule">Schedule</a></li>
        {/* <li><a href="#">Directions</a></li> */}
        <li><a href="#">Hotels</a></li>
      </ul>

      {/* RSVP Button */}
      <a
        href="#rsvp"
        className="px-6 py-2 bg-black text-white rounded-full font-medium shadow"
      >
        RSVP
      </a>
    </nav>
  );
};

export default Header;

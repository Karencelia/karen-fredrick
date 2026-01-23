"use client";

import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-serif font-bold">
          <a href="#home">K | F</a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-x-6 text-gray-700 font-medium">
          <li><a href="#lights-lenses">Lights and Lenses</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#our-story">Our Story</a></li>
          <li><a href="#questions">Q & A</a></li>
          <li><a href="#schedule">Schedule</a></li>
        </ul>

        {/* Desktop RSVP */}
        <a
          href="#rsvp"
          className="hidden md:inline-block px-6 py-2 bg-black text-white rounded-full font-medium shadow"
        >
          RSVP
        </a>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 text-gray-700 font-medium">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="self-end text-2xl leading-none"
            aria-label="Close menu"
          >
            ×
          </button>

          <a onClick={() => setOpen(false)} href="#lights-lenses">Lights and Lenses</a>
          <a onClick={() => setOpen(false)} href="#gallery">Gallery</a>
          <a onClick={() => setOpen(false)} href="#our-story">Our Story</a>
          <a onClick={() => setOpen(false)} href="#questions">Q & A</a>
          <a onClick={() => setOpen(false)} href="#schedule">Schedule</a>

          <a
            onClick={() => setOpen(false)}
            href="#rsvp"
            className="mt-4 px-6 py-3 bg-black text-white rounded-full text-center font-medium"
          >
            RSVP
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

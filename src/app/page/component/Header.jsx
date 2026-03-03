"use client";

import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl font-serif text-[#05472A] font-bold">
            <a href="#home">K | F</a>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-x-8 text-[#05472A] font-medium">
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#questions">Q & A</a></li>
            <li><a href="#well-wishes">Well Wishes</a></li>
            <li><a href="#lights-lenses">Lights and Lenses</a></li>
            <li><a href="#schedule">Schedule</a></li>
          </ul>

          {/* Desktop RSVP */}
          <a
            href="#rsvp"
            className="hidden lg:inline-block px-6 py-1 bg-[#05472A] text-white rounded-full font-medium shadow"
          >
            RSVP
          </a>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-1.5"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-[#05472A]"></span>
            <span className="w-6 h-0.5 bg-[#05472A]"></span>
            <span className="w-6 h-0.5 bg-[#05472A]"></span>
          </button>
        </div>
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
        {/* Close Button Section with Full-Width Red Border */}
        <div className="w-full bg-[#FAFAFA]">
          <div className="p-3 flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="text-3xl leading-none text-[#05472A]"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
        </div>

        {/* Menu Links */}
        <div className="p-6 flex flex-col gap-6 text-[#05472A] font-medium">
          <a onClick={() => setOpen(false)} href="#our-story">Our Story</a>
          <a onClick={() => setOpen(false)} href="#gallery">Gallery</a>
          <a onClick={() => setOpen(false)} href="#questions">Q & A</a>
          <a onClick={() => setOpen(false)} href="#lights-lenses">Lights and Lenses</a>
          <a onClick={() => setOpen(false)} href="#well-wishes">Well Wishes</a>
          <a onClick={() => setOpen(false)} href="#schedule">Schedule</a>

          <a
            onClick={() => setOpen(false)}
            href="#rsvp"
            className="mt-4 w-[100px] px-6 py-2 bg-[#05472A] text-white rounded-full text-center font-medium"
          >
            RSVP
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
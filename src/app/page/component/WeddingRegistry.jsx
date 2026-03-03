"use client";

import React, { useState } from "react";

const WeddingRegistry = () => {
  const [open, setOpen] = useState(false);

  const registryItems = [
    { name: "TV Console" },
    { name: "Fridge/Freezer" },
    { name: "Dinner Date for 2" },
    { name: "Oven" },
    { name: "Airfryer" },
    { name: "Personalised Items" },
    { name: "Cookwares" },
    { name: "Arab Perfumes" },
    { name: "4 Burner Gas Cooker with Oven" },
    { name: "Cutlery Set" },
    { name: "Food Processor" },
    { name: "Honeymoon Sponsorship" },
    { name: "Cash gifts (please refer to the gift us section)", link: "#gifting" },
  ];

  return (
    <section
      id="wedding-registry"
      className="py-16 px-6 md:px-10 bg-[#FDFDFD] text-[#05472A] font-serif"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl text-[#05472A] mb-6">
          Wedding Registry
        </h2>

        <p className="mb-6 text-lg md:text-xl">
          Your presence is our greatest gift. For those who have asked, we’ve
          put together a small wishlist below.
        </p>

        {/* Dropdown */}
        <button
          onClick={() => setOpen(!open)}
          className="text-[#05472A] underline underline-offset-4 hover:opacity-80 transition"
        >
          {open ? "Hide wishlist" : "View wishlist"}
        </button>

        {/* Dropdown Content */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            open ? "max-h-full mt-8 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-lg">
            {registryItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:italic transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-md md:text-lg">
          Thank you for celebrating this new chapter with us.
        </p>
      </div>
    </section>
  );
};

export default WeddingRegistry;
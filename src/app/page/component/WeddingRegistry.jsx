"use client";

import React from "react";

const WeddingRegistry = () => {
  const registryItems = [
    { name: "TV Console", link: "#" },
    { name: "PlayStation 5", link: "#" },
    { name: "Dinner Date for 2", link: "#" },
    { name: "Oven", link: "#" },
    { name: "Airfryer", link: "#" },
    { name: "Personalised Items", link: "#" },
    { name: "Cookwares", link: "#" },
    { name: "Cash gifts (please refer to the gift us section)", link: "" },
    
  ];

  return (
    <section
      id="wedding-registry"
      className="py-16 px-6 md:px-10 bg-[#FDFDFD] text-[#05472A] font-serif"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl text-[#05472A] font-serif mb-6">💍 Wedding Registry</h2>
        <p className="mb-8 text-lg md:text-xl">
          Your presence is our greatest gift! If you wish to celebrate with something special, here are a few things we’d love:
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {registryItems.map((item, index) => (
            <li
              key={index}
              className="p-6 border border-[#05472A] rounded-lg hover:bg-[#05472A] hover:text-white transition-colors cursor-pointer"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-md md:text-lg">
          Thank you for helping us start this new chapter together!
        </p>
      </div>
    </section>
  );
};

export default WeddingRegistry;
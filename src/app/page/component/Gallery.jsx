'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const galleryData = {
  Proposals: [
    '/proposal-bridesBack.jpeg',
    '/proposal-standing.jpeg',
    '/proposal-bridesBack.jpeg',
  ],
  'Love in Bloom': [
    '/proposal-standing.jpeg',
    '/proposal-bridesBack.jpeg',
  ],
  'First Dates': [
    '/proposal-standing.jpeg',
    '/proposal-bridesBack.jpeg',
  ],
  Adventures: [
    '/proposal-standing.jpeg',
    '/proposal-bridesBack.jpeg',
  ],
  'Marriage Registry': [
    '/proposal-standing.jpeg',
  ],
}

// Predefined small rotations for polaroid effect
const rotations = [-5, 3, 2, -3, 4, -2]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Proposals')
  const [lightboxImage, setLightboxImage] = useState(null)

  const images = galleryData[activeCategory]

  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <h2 className="text-center text-4xl md:text-5xl font-serif mb-8">
        GALLERY
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {Object.keys(galleryData).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 border rounded-full font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-black text-white'
                : 'border-black text-black hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Images */}
      <div className="relative flex justify-center items-center gap-[-50px] flex-wrap">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setLightboxImage(src)}
            className="relative shadow-xl border-4 border-gray-200 w-64 md:w-80 cursor-pointer overflow-hidden"
            style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
          >
            <img
              src={src}
              alt={`Gallery ${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Selected" className="max-h-[90%] max-w-[90%] object-contain shadow-2xl" />
        </div>
      )}
    </section>
  )
}

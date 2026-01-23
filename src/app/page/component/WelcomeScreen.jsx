'use client'

import { motion } from 'framer-motion'
import { Dancing_Script } from 'next/font/google'

// Load only for welcome screen
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
})

const nameVariant = {
  hidden: { scale: 0.4, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function WelcomeScreen() {
  return (
    <motion.div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center ${dancingScript.className}`}
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 1, ease: 'easeInOut' } }}
    >
      <div className="text-center leading-tight">
        {/* Karen */}
        <motion.h1
          variants={nameVariant}
          initial="hidden"
          animate="visible"
          className="text-[130px] italic font-semibold"
        >
          Karen
        </motion.h1>

        {/* Fredrick */}
        {/* & */}
        <motion.h1
          variants={nameVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}
          className="text-[100px] italic mt-2"
        >
          &
        </motion.h1>
        
        <motion.h1
          variants={nameVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-[130px] italic font-semibold"
        >
          Fredrick
        </motion.h1>

      </div>
    </motion.div>
  )
}

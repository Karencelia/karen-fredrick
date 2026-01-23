'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import WelcomeScreen from './page/component/WelcomeScreen'
import Header from './page/component/Header'
import Home from './page/component/Home'
import LightsLenses from './page/component/LightsLenses'
import OurStory from './page/component/OurStory'
import FAQ from './page/component/FAQ'
import Schedule from './page/component/Schedule'
import Rsvp from './page/component/Rsvp'

export default function OnePage() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Total animation time ≈ 4.5s
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Splash */}
      <AnimatePresence>
        {showSplash && <WelcomeScreen />}
      </AnimatePresence>

      {/* Main content (always mounted underneath) */}
      {!showSplash && (
        <>
          <Header />
          <Home />
          <LightsLenses />
          <OurStory />
          <FAQ />
          <Schedule />
          <Rsvp />
        </>
      )}
    </>
  )
}

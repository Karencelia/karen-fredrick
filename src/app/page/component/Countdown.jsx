"use client";

import { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function updateTimer() {
      const now = new Date();
      const diff = new Date(targetDate) - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }

    updateTimer(); // Run immediately
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-10 text-white px-6 py-3 rounded-lg z-20 flex gap-4 text-base font-semibold tracking-widest">
      <div>{timeLeft.days}D</div>
      <div>{timeLeft.hours}H</div>
      <div>{timeLeft.minutes}M</div>
      <div>{timeLeft.seconds}S</div>
    </div>
  );
}

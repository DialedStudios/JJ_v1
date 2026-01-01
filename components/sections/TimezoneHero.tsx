'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const timezones = [
  { city: 'Los Angeles', timezone: 'America/Los_Angeles' },
  { city: 'New York', timezone: 'America/New_York' },
  { city: 'London', timezone: 'Europe/London' },
];

function TimeDisplay({ city, timezone }: { city: string; timezone: string }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="timezone-display">
      <span className="timezone-display__city">{city}</span>
      <motion.span
        className="timezone-display__time"
        key={time}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {time}
      </motion.span>
    </div>
  );
}

export function TimezoneHero() {
  return (
    <section className="timezone-hero">
      {/* Background Video */}
      <div className="timezone-hero__video-wrapper">
        <video
          className="timezone-hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/placeholder/hero-poster.jpg"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>
        <div className="timezone-hero__video-overlay" />
      </div>

      {/* Main Title with Difference Blend Mode */}
      <motion.h1
        className="timezone-hero__brand"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        DIALED STUDIOS
      </motion.h1>

      <div className="timezone-hero__times">
        {timezones.map((tz) => (
          <TimeDisplay key={tz.city} city={tz.city} timezone={tz.timezone} />
        ))}
      </div>

      <div className="timezone-hero__content">
        <motion.span
          className="timezone-hero__label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Creative Non-Agency
        </motion.span>

        <motion.p
          className="timezone-hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Social-first production for brands that move culture.
        </motion.p>
      </div>

      <motion.div
        className="timezone-hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span>Scroll to explore</span>
        <div className="timezone-hero__scroll-line" />
      </motion.div>
    </section>
  );
}

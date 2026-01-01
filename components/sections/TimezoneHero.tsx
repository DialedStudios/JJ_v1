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
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Creative Non-Agency
        </motion.span>

        <motion.h1
          className="timezone-hero__heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Social-first production
          <br />
          <em>for brands that move culture.</em>
        </motion.h1>

        <motion.p
          className="timezone-hero__subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From concept to delivery, we create content that converts.
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

'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    const unsubscribe = display.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix}`;
      }
    });
    return unsubscribe;
  }, [display, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 276, suffix: '+', label: 'Projects Completed' },
  { value: 18, suffix: '+', label: 'Team Members' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];

export function TeamStats() {
  return (
    <section className="team-stats">
      <div className="team-stats__container container">
        <motion.div
          className="team-stats__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="team-stats__label">By The Numbers</span>
          <h2 className="team-stats__title">
            A decade of
            <br />
            <em>making it happen.</em>
          </h2>
        </motion.div>

        <div className="team-stats__grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="team-stats__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="team-stats__number">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="team-stats__label-text">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

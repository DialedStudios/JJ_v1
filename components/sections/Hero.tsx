'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HeroProps } from '@/types';

export function Hero({
  eyebrow,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  stats,
}: HeroProps) {
  return (
    <section className="hero container">
      <motion.div
        className="hero__eyebrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {eyebrow}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {heading}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {subheading}
      </motion.p>

      <motion.div
        className="hero__actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {primaryCta && (
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
        )}
        {secondaryCta && (
          <Button variant="ghost" href={secondaryCta.href}>
            {secondaryCta.label}
          </Button>
        )}
      </motion.div>

      {stats && (
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <strong>{stat.label}</strong>
              {stat.description}
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}

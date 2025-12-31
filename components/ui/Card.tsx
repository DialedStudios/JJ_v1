'use client';

import { motion } from 'framer-motion';
import { CardProps } from '@/types';

export function Card({ badge, title, body, children }: CardProps) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {badge && <div className="pill">{badge}</div>}
      <h3 className="card__title">{title}</h3>
      <p className="card__body">{body}</p>
      {children}
    </motion.article>
  );
}

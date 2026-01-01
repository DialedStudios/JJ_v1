'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PulseAccent } from '@/components/animations/PulseAccent';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';

// Placeholder videos - replace with your actual work
const portfolioItems = [
  {
    id: 1,
    title: 'Nike Campaign',
    category: 'Product Commercial',
    thumbnail: '/images/clients/nike.jpg',
    videoUrl: '#',
  },
  {
    id: 2,
    title: 'Ferrari Launch',
    category: 'Automotive',
    thumbnail: '/images/clients/ferrari.png',
    videoUrl: '#',
  },
  {
    id: 3,
    title: 'Netflix Promo',
    category: 'Entertainment',
    thumbnail: '/images/clients/netflix.png',
    videoUrl: '#',
  },
  {
    id: 4,
    title: 'Red Bull Series',
    category: 'Sports & Energy',
    thumbnail: '/images/clients/redbull.svg',
    videoUrl: '#',
  },
  {
    id: 5,
    title: 'Porsche Heritage',
    category: 'Automotive',
    thumbnail: '/images/clients/porsche.jpg',
    videoUrl: '#',
  },
  {
    id: 6,
    title: 'HBO Original',
    category: 'Entertainment',
    thumbnail: '/images/clients/hbo.jpg',
    videoUrl: '#',
  },
];

function PerspectiveText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <div ref={ref} className="perspective-container">
      <motion.h1
        className="perspective-text"
        style={{
          rotateX,
          opacity,
          y,
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
}

function PortfolioCard({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  return (
    <motion.a
      href={item.videoUrl}
      className="portfolio-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="portfolio-card__media">
        <img src={item.thumbnail} alt={item.title} />
        <div className="portfolio-card__overlay">
          <span className="portfolio-card__play">▶</span>
        </div>
      </div>
      <div className="portfolio-card__info">
        <span className="portfolio-card__category">{item.category}</span>
        <h3 className="portfolio-card__title">{item.title}</h3>
      </div>
    </motion.a>
  );
}

export default function WorkPage() {
  return (
    <main>
      <PulseAccent />

      {/* Hero with 3D Perspective Text */}
      <section className="work-hero">
        <PerspectiveText text="OUR WORK" />
        <motion.p
          className="work-hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Product commercials and social campaigns that convert
        </motion.p>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio container">
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      <NewsletterCTA />
    </main>
  );
}

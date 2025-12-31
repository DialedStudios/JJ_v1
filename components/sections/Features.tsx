'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { services, signatureMoves } from '@/lib/constants';

interface FeatureItem {
  badge?: string;
  title: string;
  body: string;
}

interface FeaturesProps {
  section: 'services' | 'signature';
  title?: string;
  description?: string;
}

export function Features({ section, title, description }: FeaturesProps) {
  const items: FeatureItem[] = section === 'services' ? services : signatureMoves;

  const defaultTitles = {
    services: 'What we do',
    signature: 'How we work',
  };

  const defaultDescriptions = {
    services:
      'End-to-end production for brands that need content that converts. From concept to delivery, we handle it all.',
    signature:
      'We keep it simple, intentional, and focused on results. No fluff, no wasted frames—just content that performs.',
  };

  return (
    <section className="container">
      <RevealOnScroll>
        <div className="section__header">
          <h2 className="section__title">{title || defaultTitles[section]}</h2>
          <p className="section__desc">
            {description || defaultDescriptions[section]}
          </p>
        </div>
      </RevealOnScroll>

      <motion.div
        className="grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            badge={item.badge}
            title={item.title}
            body={item.body}
          />
        ))}
      </motion.div>
    </section>
  );
}

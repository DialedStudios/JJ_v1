'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { pricingTiers } from '@/lib/constants';

export function PricingGrid() {
  return (
    <section className="container">
      <RevealOnScroll>
        <div className="section__header">
          <h2 className="section__title">Pick the tempo. We keep it dialed.</h2>
          <p className="section__desc">
            Transparent pricing, no surprises. Every tier includes our signature
            attention to detail.
          </p>
        </div>
      </RevealOnScroll>

      <motion.div
        className="pricing-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {pricingTiers.map((tier, index) => (
          <motion.article
            key={tier.name}
            className={`card price-card ${tier.badge ? 'featured' : ''}`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h3 className="card__title">{tier.name}</h3>
              {tier.badge && <Badge>{tier.badge}</Badge>}
            </div>

            <div className="price">{tier.price}</div>

            <p className="card__body">{tier.description}</p>

            <ul className="feature-list">
              {tier.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <Button
              href="mailto:hello@dialedstudios.com"
              variant={tier.badge ? 'primary' : 'ghost'}
            >
              Get started
            </Button>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

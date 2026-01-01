'use client';

import { motion } from 'framer-motion';

const storySteps = [
  {
    number: '01',
    title: 'The Problem',
    content: 'Most agencies optimize for scope, not results. Brands get bloated timelines, inflated budgets, and content that looks great in a boardroom but dies on the feed.',
  },
  {
    number: '02',
    title: 'The Realization',
    content: 'We saw that the best-performing content comes from teams who understand both production craft and platform performance. Not one or the other—both.',
  },
  {
    number: '03',
    title: 'The Solution',
    content: 'Dialed Studios was built to be different. Social-first thinking from day one. Premium production without the agency bloat. Content engineered to convert.',
  },
];

export function OriginStory() {
  return (
    <section className="origin-story container">
      <motion.div
        className="origin-story__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="origin-story__label">Our Story</span>
        <h2 className="origin-story__title">
          Why we built
          <br />
          <em>Dialed Studios.</em>
        </h2>
      </motion.div>

      <div className="origin-story__steps">
        {storySteps.map((step, index) => (
          <motion.div
            key={step.number}
            className="origin-story__step"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="origin-story__step-number">{step.number}</div>
            <div className="origin-story__step-content">
              <h3 className="origin-story__step-title">{step.title}</h3>
              <p className="origin-story__step-text">{step.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

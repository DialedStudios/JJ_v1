'use client';

import { motion } from 'framer-motion';

const featuredProjects = [
  {
    id: 1,
    title: 'Nike Air Max Campaign',
    category: 'Product Commercial',
    thumbnail: '/images/clients/nike.jpg',
    credits: {
      director: 'Joseph Johnson',
      dp: 'Dialed Studios',
      production: 'Dialed Studios',
    },
  },
  {
    id: 2,
    title: 'Ferrari SF90 Launch',
    category: 'Automotive',
    thumbnail: '/images/clients/ferrari.png',
    credits: {
      director: 'Joseph Johnson',
      dp: 'Dialed Studios',
      production: 'Dialed Studios',
    },
  },
  {
    id: 3,
    title: 'Red Bull Athlete Series',
    category: 'Sports & Energy',
    thumbnail: '/images/clients/redbull.svg',
    credits: {
      director: 'Joseph Johnson',
      dp: 'Dialed Studios',
      production: 'Dialed Studios',
    },
  },
];

export function PortfolioShowcase() {
  return (
    <section className="portfolio-showcase container">
      <motion.div
        className="portfolio-showcase__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="portfolio-showcase__label">Featured Work</span>
        <h2 className="portfolio-showcase__title">
          Projects that
          <br />
          <em>move the needle.</em>
        </h2>
      </motion.div>

      <div className="portfolio-showcase__grid">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            className="portfolio-showcase__item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="portfolio-showcase__media">
              <img src={project.thumbnail} alt={project.title} />
              <div className="portfolio-showcase__overlay">
                <span className="portfolio-showcase__play">Play</span>
              </div>
            </div>

            <div className="portfolio-showcase__info">
              <span className="portfolio-showcase__category">{project.category}</span>
              <h3 className="portfolio-showcase__name">{project.title}</h3>

              <div className="portfolio-showcase__credits">
                <div className="portfolio-showcase__credit">
                  <span className="portfolio-showcase__credit-label">Director</span>
                  <span className="portfolio-showcase__credit-value">{project.credits.director}</span>
                </div>
                <div className="portfolio-showcase__credit">
                  <span className="portfolio-showcase__credit-label">DP</span>
                  <span className="portfolio-showcase__credit-value">{project.credits.dp}</span>
                </div>
                <div className="portfolio-showcase__credit">
                  <span className="portfolio-showcase__credit-label">Production</span>
                  <span className="portfolio-showcase__credit-value">{project.credits.production}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="portfolio-showcase__cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a href="/work" className="portfolio-showcase__link">
          View all projects <span>→</span>
        </a>
      </motion.div>
    </section>
  );
}

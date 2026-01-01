'use client';

import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Strategy',
    description: 'We align creative with business goals. Every project starts with understanding what moves the needle for your brand.',
  },
  {
    number: '02',
    title: 'Creative',
    description: 'Concepts that cut through the noise. We develop ideas built for the platforms where your audience lives.',
  },
  {
    number: '03',
    title: 'Production',
    description: 'Premium execution, efficient delivery. Our team handles everything from pre-production to final delivery.',
  },
  {
    number: '04',
    title: 'Post-Production',
    description: 'Edit, color, sound, and finishing that elevates the work. Platform-optimized exports ready to perform.',
  },
];

export function ServicesGrid() {
  return (
    <section className="services-grid container">
      <motion.div
        className="services-grid__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="services-grid__label">What We Do</span>
        <h2 className="services-grid__title">
          Full-service production
          <br />
          <em>from start to finish.</em>
        </h2>
      </motion.div>

      <div className="services-grid__items">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className="services-grid__item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="services-grid__number">{service.number}</span>
            <h3 className="services-grid__item-title">{service.title}</h3>
            <p className="services-grid__description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

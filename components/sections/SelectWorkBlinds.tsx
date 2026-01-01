'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  year: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Nike Air Max',
    category: 'Product Commercial',
    thumbnail: '/images/placeholder/project1.jpg',
    year: '2024',
  },
  {
    id: 2,
    title: 'Ferrari SF90',
    category: 'Automotive',
    thumbnail: '/images/placeholder/project2.jpg',
    year: '2024',
  },
  {
    id: 3,
    title: 'Red Bull Series',
    category: 'Sports & Energy',
    thumbnail: '/images/placeholder/project3.jpg',
    year: '2023',
  },
  {
    id: 4,
    title: 'Netflix Promo',
    category: 'Entertainment',
    thumbnail: '/images/placeholder/project4.jpg',
    year: '2023',
  },
  {
    id: 5,
    title: 'Porsche Heritage',
    category: 'Automotive',
    thumbnail: '/images/placeholder/project5.jpg',
    year: '2023',
  },
];

function BlindItem({ project, isExpanded, onHover }: {
  project: ProjectItem;
  isExpanded: boolean;
  onHover: () => void;
}) {
  return (
    <motion.div
      className="blind-item"
      onMouseEnter={onHover}
      animate={{
        flex: isExpanded ? 4 : 1,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className="blind-item__bg"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      />
      <div className="blind-item__overlay" />

      <motion.div
        className="blind-item__content"
        animate={{
          opacity: isExpanded ? 1 : 0.7,
        }}
      >
        <div className="blind-item__meta">
          <span className="blind-item__category">{project.category}</span>
          <span className="blind-item__year">{project.year}</span>
        </div>
        <h3 className="blind-item__title">{project.title}</h3>

        <motion.div
          className="blind-item__cta"
          animate={{
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 20,
          }}
          transition={{ duration: 0.3, delay: isExpanded ? 0.2 : 0 }}
        >
          <span>View Project</span>
          <span className="blind-item__arrow">→</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function SelectWorkBlinds() {
  const [expandedId, setExpandedId] = useState<number>(1);

  return (
    <section className="select-work">
      <div className="select-work__header container">
        <motion.span
          className="select-work__label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Work
        </motion.span>
        <motion.h2
          className="select-work__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Projects that
          <br />
          <em>define brands.</em>
        </motion.h2>
      </div>

      <div className="select-work__blinds">
        {projects.map((project) => (
          <BlindItem
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onHover={() => setExpandedId(project.id)}
          />
        ))}
      </div>

      <div className="select-work__footer container">
        <motion.a
          href="/work"
          className="select-work__view-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ x: 10 }}
        >
          View all work <span>→</span>
        </motion.a>
      </div>
    </section>
  );
}

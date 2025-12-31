'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { clientLogos } from '@/lib/constants';

export function ClientLogos() {
  // Duplicate logos for infinite scroll effect
  const allLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="clients">
      <div className="clients__header">
        <motion.p
          className="clients__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by industry leaders
        </motion.p>
      </div>

      <div className="clients__wrapper" style={{ overflow: 'hidden' }}>
        <motion.div
          className="clients__track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {allLogos.map((logo, index) => (
            <Image
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="clients__logo"
              style={{ objectFit: 'contain' }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

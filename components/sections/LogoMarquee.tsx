'use client';

import { motion } from 'framer-motion';
import { clientLogos } from '@/lib/constants';

export function LogoMarquee() {
  // Double the logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="logo-marquee">
      <div className="logo-marquee__wrapper">
        <motion.div
          className="logo-marquee__track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="logo-marquee__item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

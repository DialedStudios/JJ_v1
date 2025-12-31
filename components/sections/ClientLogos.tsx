'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { clientLogos } from '@/lib/constants';

function MagnifiedLogo({
  logo,
  index,
  mouseX
}: {
  logo: { src: string; alt: string };
  index: number;
  mouseX: any;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-200, 0, 200], [70, 110, 70]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className="clients__logo-wrapper"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={180}
        height={110}
        className="clients__logo"
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
    </motion.div>
  );
}

export function ClientLogos() {
  const mouseX = useMotionValue(Infinity);
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

      <motion.div
        className="clients__wrapper"
        style={{ overflow: 'hidden' }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <motion.div
          className="clients__track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {allLogos.map((logo, index) => (
            <MagnifiedLogo
              key={`${logo.alt}-${index}`}
              logo={logo}
              index={index}
              mouseX={mouseX}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

interface NewsletterCTAProps {
  headline?: string;
  copy?: string;
}

export function NewsletterCTA({
  headline = 'Stay Dialed.',
  copy = "Campaign breakdowns, production tips, and early access to open slots. Zero noise—only signal.",
}: NewsletterCTAProps) {
  return (
    <section className="container newsletter">
      <motion.h3
        className="newsletter__headline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {headline}
      </motion.h3>

      <motion.p
        className="newsletter__copy"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {copy}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <NewsletterForm />
      </motion.div>
    </section>
  );
}

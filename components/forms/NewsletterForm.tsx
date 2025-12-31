'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show toast notification
    setShowToast(true);
    setEmail('');

    // Hide toast after delay
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <form className="newsletter__form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@brand.com"
          required
          className="newsletter__input"
        />
        <Button type="submit">Join the list</Button>
      </form>

      <AnimatePresence>
        {showToast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            Got it. We&apos;ll keep you in the loop.
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { FounderBio } from '@/components/sections/FounderBio';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';
import { PulseAccent } from '@/components/animations/PulseAccent';

export default function HomePage() {
  return (
    <main>
      <PulseAccent />

      <Hero
        eyebrow="DIALED STUDIOS"
        heading="Digital experiences that feel inevitable."
        subheading="Apple-level clarity, centered layouts, and motion that whispers. We design and build brand-defining web moments for teams that care about every detail."
        primaryCta={{ label: 'See pricing', href: '/pricing' }}
        secondaryCta={{ label: 'Join the insider list', href: '/newsletter' }}
        stats={[
          {
            label: '72-hour',
            description: 'Launch windows for sites that need to ship yesterday.',
          },
          {
            label: 'Performance-first',
            description: 'Built to load fast, feel fast, and stay fast.',
          },
          {
            label: 'Apple-level copy',
            description: 'Crisp headlines that read like a keynote.',
          },
        ]}
      />

      <Features section="services" />

      <Features section="signature" />

      <FounderBio />

      <ClientLogos />

      <NewsletterCTA />
    </main>
  );
}

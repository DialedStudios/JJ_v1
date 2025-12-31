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
        eyebrow=""
        heading="We make products look legendary."
        subheading="Social campaigns and product commercials for DTC and e-commerce brands. Content that stops the scroll and moves the needle."
        primaryCta={{ label: 'See pricing', href: '/pricing' }}
        secondaryCta={{ label: 'Get in touch', href: 'mailto:hello@dialedstudios.com' }}
        stats={[
          {
            label: 'DTC-focused',
            description: 'Built for brands that sell direct and scale fast.',
          },
          {
            label: 'Platform-ready',
            description: 'Optimized for TikTok, Meta, YouTube, and beyond.',
          },
          {
            label: 'Conversion-driven',
            description: 'Every frame engineered to drive action.',
          },
        ]}
      />

      <ClientLogos />

      <Features section="services" />

      <Features section="signature" />

      <FounderBio />

      <NewsletterCTA />
    </main>
  );
}

import { Hero } from '@/components/sections/Hero';
import { PricingGrid } from '@/components/sections/PricingGrid';
import { Features } from '@/components/sections/Features';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';
import { PulseAccent } from '@/components/animations/PulseAccent';

export const metadata = {
  title: 'Pricing — Dialed Studios',
  description: 'Transparent pricing for social campaigns and product commercials. Content packages built for DTC brands.',
};

export default function PricingPage() {
  return (
    <main>
      <PulseAccent />

      <Hero
        eyebrow="PRICING"
        heading="Content packages that scale with you."
        subheading="Transparent pricing, no surprises. From single campaigns to ongoing partnerships—we've got a tier that fits."
        primaryCta={{ label: 'Get started', href: 'mailto:hello@dialedstudios.com' }}
        secondaryCta={{ label: 'View our work', href: '/' }}
      />

      <PricingGrid />

      <Features
        section="signature"
        title="Why Dialed"
        description="We're not just another production company. We're the team that obsesses over every frame so your product looks undeniable."
      />

      <NewsletterCTA
        headline="Still thinking?"
        copy="Join our list for production insights, campaign breakdowns, and early access to open slots."
      />
    </main>
  );
}

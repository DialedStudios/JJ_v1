import { Hero } from '@/components/sections/Hero';
import { PricingGrid } from '@/components/sections/PricingGrid';
import { Features } from '@/components/sections/Features';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';
import { PulseAccent } from '@/components/animations/PulseAccent';

export const metadata = {
  title: 'Pricing — Dialed Studios',
  description: 'Transparent pricing for brand-defining web experiences. From single-page launches to full-scale builds.',
};

export default function PricingPage() {
  return (
    <main>
      <PulseAccent />

      <Hero
        eyebrow="PRICING"
        heading="Pick the tempo. We keep it dialed."
        subheading="Transparent pricing, no surprises. Every tier includes our signature attention to detail and Apple-level craft."
        primaryCta={{ label: 'Get started', href: 'mailto:hello@dialedstudios.com' }}
        secondaryCta={{ label: 'See our work', href: '/' }}
      />

      <PricingGrid />

      <Features
        section="signature"
        title="Why Dialed"
        description="We're not just another agency. We're the team that obsesses over every pixel so you don't have to."
      />

      <NewsletterCTA
        headline="Still thinking?"
        copy="Join our newsletter for design insights, launch playbooks, and exclusive early access to new offerings."
      />
    </main>
  );
}

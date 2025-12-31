import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';
import { PulseAccent } from '@/components/animations/PulseAccent';

export const metadata = {
  title: 'Newsletter — Dialed Studios',
  description: 'Get launch notes, design breakdowns, and first dibs on new drops. Zero noise—only the signals.',
};

const newsletterFeatures = [
  {
    title: 'Launch playbook',
    body: 'Behind-the-scenes breakdowns of how we ship sites in 72 hours without cutting corners.',
  },
  {
    title: 'Motion recipes',
    body: 'Copy-paste code snippets for scroll animations, hover effects, and micro-interactions.',
  },
  {
    title: 'Signal over noise',
    body: 'Curated design inspiration, tool recommendations, and industry insights—no fluff.',
  },
];

export default function NewsletterPage() {
  return (
    <main>
      <PulseAccent />

      <Hero
        eyebrow="NEWSLETTER"
        heading="The Dialed Dispatch"
        subheading="Design breakdowns, launch playbooks, and early access—delivered to your inbox. Zero noise, only the signals that matter."
        primaryCta={{ label: 'Subscribe below', href: '#subscribe' }}
        secondaryCta={{ label: 'See pricing', href: '/pricing' }}
      />

      <section className="container">
        <div className="section__header">
          <h2 className="section__title">What you&apos;ll get</h2>
          <p className="section__desc">
            Every edition is crafted with the same care we put into our client work.
          </p>
        </div>
        <div className="grid">
          {newsletterFeatures.map((feature, index) => (
            <article key={index} className="card">
              <h3 className="card__title">{feature.title}</h3>
              <p className="card__body">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div id="subscribe">
        <NewsletterCTA
          headline="Join the list"
          copy="Get the Dialed Dispatch delivered every other week. Unsubscribe anytime."
        />
      </div>
    </main>
  );
}

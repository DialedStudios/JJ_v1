import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';
import { PulseAccent } from '@/components/animations/PulseAccent';

export const metadata = {
  title: 'Newsletter — Dialed Studios',
  description: 'Behind-the-scenes breakdowns, campaign insights, and first dibs on open production slots.',
};

const newsletterFeatures = [
  {
    title: 'Campaign breakdowns',
    body: 'Behind-the-scenes looks at how we concept, shoot, and deliver content that converts.',
  },
  {
    title: 'Production insights',
    body: 'Tips on lighting, gear, and workflows that make shoots efficient without sacrificing quality.',
  },
  {
    title: 'Early access',
    body: 'Be first to know when we have open slots and new service offerings.',
  },
];

export default function NewsletterPage() {
  return (
    <main>
      <PulseAccent />

      <Hero
        eyebrow="NEWSLETTER"
        heading="The Dialed Dispatch"
        subheading="Campaign breakdowns, production insights, and early access to open slots—delivered to your inbox. Zero noise, only signal."
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

import { TimezoneHero } from '@/components/sections/TimezoneHero';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { SelectWorkBlinds } from '@/components/sections/SelectWorkBlinds';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { OriginStory } from '@/components/sections/OriginStory';
import { TeamStats } from '@/components/sections/TeamStats';
import { FounderBio } from '@/components/sections/FounderBio';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';
import { PulseAccent } from '@/components/animations/PulseAccent';

export default function HomePage() {
  return (
    <main>
      <PulseAccent />

      {/* Jacob Media-style Timezone Hero */}
      <TimezoneHero />

      {/* Infinite scrolling logo marquee */}
      <LogoMarquee />

      {/* Select Work with blinds effect */}
      <SelectWorkBlinds />

      {/* Four-pillar services */}
      <ServicesGrid />

      {/* Origin story with three-step narrative */}
      <OriginStory />

      {/* Stats section with animated numbers */}
      <TeamStats />

      {/* Dock magnification logo carousel */}
      <ClientLogos />

      {/* Founder bio section */}
      <FounderBio />

      <NewsletterCTA />
    </main>
  );
}

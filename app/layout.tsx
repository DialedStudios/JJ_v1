import type { Metadata } from 'next';
import { gothamBlack, spaceGrotesk, inter, playfair } from '@/lib/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dialed Studios — Creative Non-Agency',
  description:
    'Social-first production for brands that move culture. From concept to delivery, we create content that converts.',
  keywords: ['product commercials', 'social campaigns', 'DTC', 'e-commerce', 'video production', 'content creation'],
  authors: [{ name: 'Dialed Studios' }],
  openGraph: {
    title: 'Dialed Studios — Creative Non-Agency',
    description: 'Social-first production for brands that move culture.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${gothamBlack.variable} ${spaceGrotesk.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

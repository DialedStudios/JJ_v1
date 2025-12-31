import type { Metadata } from 'next';
import { gothamBlack, spaceGrotesk, inter } from '@/lib/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dialed Studios — We make products look legendary',
  description:
    'Social campaigns and product commercials for DTC and e-commerce brands. Content that stops the scroll and moves the needle.',
  keywords: ['product commercials', 'social campaigns', 'DTC', 'e-commerce', 'video production', 'content creation'],
  authors: [{ name: 'Dialed Studios' }],
  openGraph: {
    title: 'Dialed Studios — We make products look legendary',
    description: 'Social campaigns and product commercials for DTC and e-commerce brands.',
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
      className={`${gothamBlack.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { gothamBlack, spaceGrotesk, inter } from '@/lib/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dialed Studios — Digital experiences, dialed in',
  description:
    'Apple-level clarity, centered layouts, and motion that whispers. We design and build brand-defining web moments for teams that care about every detail.',
  keywords: ['design studio', 'web design', 'brand identity', 'digital experiences'],
  authors: [{ name: 'Dialed Studios' }],
  openGraph: {
    title: 'Dialed Studios — Digital experiences, dialed in',
    description: 'We design and build brand-defining web moments for teams that care about every detail.',
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

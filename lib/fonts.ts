import localFont from 'next/font/local';
import { Space_Grotesk, Inter } from 'next/font/google';

// Gotham Black for hero headings
export const gothamBlack = localFont({
  src: '../app/fonts/GothamBlack.ttf',
  display: 'swap',
  variable: '--font-gotham',
  weight: '900',
});

// Space Grotesk for display/headings fallback
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

// Inter for body text
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

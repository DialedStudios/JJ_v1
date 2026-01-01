import localFont from 'next/font/local';
import { Space_Grotesk, Inter, Playfair_Display } from 'next/font/google';

// Gotham Black for hero headings
export const gothamBlack = localFont({
  src: '../app/fonts/GothamBlack.ttf',
  display: 'swap',
  variable: '--font-gotham',
  weight: '900',
});

// Playfair Display for editorial elegance (Jacob Media style)
export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
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

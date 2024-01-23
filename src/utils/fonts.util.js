import { Poppins, Lato, Montserrat, Sora, Inter } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['200', '400', '600', '800'],
  display: 'swap',
});

export const lato = Lato({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['700'],
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const sora = Sora({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['800'],
  display: 'swap',
});

export const inter = Inter({
  weight: ['900'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-inter',
  display: 'swap',
});

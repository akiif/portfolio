import { Poppins, Lato, Montserrat, Sora } from 'next/font/google';

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
  display: 'swap',
});

export const sora = Sora({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['800'],
  display: 'swap',
});

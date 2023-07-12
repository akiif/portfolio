import './globals.css';
import '@/assets/css/scrollbar.css';

// import global fonts
import { poppins } from '@/utils/fonts.util';

// import Default layout
import DefaultLayout from '@/layouts/DefaultLayout';

export const metadata = {
  title: 'Akif Mohammed',
  description: 'Personal Portfolio Website of Akif Mohammed',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}

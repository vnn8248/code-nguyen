import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import Header from './components/Header';

const noto_sans_jp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Bi Nguyen',
  description: "Bi Nguyen's online portfolio",
  keywords:
    'web development, javascript, next, vercel, react, tailwind, mdx, developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto_sans_jp.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

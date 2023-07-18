import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Bi Nguyen',
  description: "Bi Nguyen's online portfolio",
  keywords:
    'web development, javascript, next, vercel, react, tailwind, mdx, developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

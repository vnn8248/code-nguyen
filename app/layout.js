'use client';

import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useCallback, useEffect, useState } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/base16/dracula.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);

// export const metadata = {
//   title: 'Bi Nguyen',
//   description: "Bi Nguyen's online portfolio",
//   keywords:
//     'web development, javascript, next, vercel, react, tailwind, mdx, developer',
// };

export default function RootLayout({ children }) {
  let scrolled = false;
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event) => {
    const { scrollY } = window;

    setScrollY(scrollY);
  }, []);

  useEffect(() => {
    hljs.highlightAll();
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, []);

  if (scrollY > 0) {
    scrolled = true;
  } else {
    scrolled = false;
  }

  return (
    <html lang="en">
      <body>
        <Header scrolled={scrolled} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

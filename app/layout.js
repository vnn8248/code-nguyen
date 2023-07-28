import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import hljs from 'highlight.js';
// import javascript from 'highlight.js/lib/languages/javascript';
// import json from 'highlight.js/lib/languages/json';
// import 'highlight.js/styles/base16/dracula.css';

// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('json', json);

export const metadata = {
    title: 'Bi Nguyen',
    description: "Bi Nguyen's online portfolio",
    keywords: 'web development, javascript, next, vercel, react, tailwind, mdx, developer'
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

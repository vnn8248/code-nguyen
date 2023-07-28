'use client';
import { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/base16/dracula.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);

const provider = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default provider;

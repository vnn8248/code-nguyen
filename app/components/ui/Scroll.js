'use client';

import { useCallback, useEffect, useState } from 'react';
import Nav from '../Nav';

const Scroll = ({ children }) => {
    let scrolled = false;
    const [scrollY, setScrollY] = useState(0);

    const onScroll = useCallback((event) => {
        const { scrollY } = window;

        setScrollY(scrollY);
    }, []);

    useEffect(() => {
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
        <>
            <Nav scrolled={scrolled} />
        </>
    );
};

export default Scroll;

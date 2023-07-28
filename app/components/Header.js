import React from 'react';
import ScrolledNavBar from './ui/Scroll';

const Header = (props) => {
    return (
        <header className="fixed w-full p-0 top-0 right-0 left-0 z-[1000]">
            <ScrolledNavBar />
        </header>
    );
};

export default Header;

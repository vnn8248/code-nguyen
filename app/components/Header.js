import React from 'react';
import Link from 'next/link';

const Header = (props) => {
  return (
    <header className="fixed w-full p-0 top-0 right-0 left-0 z-[1000]">
      <nav className="mx-auto mt-8 flex justify-center items-center relative z-[100] max-w-screen-2xl">
        <ul
          className={`flex p-2.5 flex-row justify-center items-center list-none rounded-full transition-all duration-200 ease-linear ${
            props.scrolled ? 'faded' : 'bg-none'
          }`}
        >
          <li className="flex relative">
            <Link href="/" className="nav-link font-link">
              Work
            </Link>
          </li>
          <li className="flex relative">
            <Link href="/about" className="nav-link font-link">
              About
            </Link>
          </li>
          <li className="flex relative">
            <Link href="/personal" className="nav-link font-link">
              Play
            </Link>
          </li>
          <li className="flex relative">
            <Link href="/contact" className="nav-link font-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

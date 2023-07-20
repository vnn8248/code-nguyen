import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full">
      <nav className="container mx-auto mt-8 flex justify-center items-center relative z-50">
        <ul className="flex flex-row justify-center items-center list-none rounded-full">
          <li className="flex relative">
            <Link
              href="/"
              className="p-4 m-1.5 text-sm lg:text-xl rounded-full hover:bg-[#958ed2]"
            >
              Work
            </Link>
          </li>
          <li className="flex relative">
            <Link
              href="/about"
              className="p-4 m-1.5 text-sm lg:text-xl rounded-full"
            >
              About
            </Link>
          </li>
          <li className="flex relative">
            <Link
              href="/personal"
              className="p-4 m-1.5 text-sm lg:text-xl rounded-full"
            >
              Play
            </Link>
          </li>
          <li className="flex relative">
            <Link
              href="/contact"
              className="p-4 m-1.5 text-sm lg:text-xl rounded-full"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

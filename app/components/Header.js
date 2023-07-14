import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full">
      <nav className="container mx-auto mt-8 flex justify-center items-center relative z-50">
        <ul className="border-2 flex flex-row justify-center items-center list-none rounded-full">
          <li className="flex relative">
            <Link
              href="/"
              className="p-4 m-1.5 text-sm lg:text-xl text-[#468562] rounded-full border-2"
            >
              Work
            </Link>
          </li>
          <li className="flex relative">
            <Link
              href="/about"
              className="p-4 m-1.5 text-sm lg:text-xl text-[#468562] rounded-full border-2"
            >
              About
            </Link>
          </li>
          <li className="flex relative">
            <Link
              href="/play"
              className="p-4 m-1.5 text-sm lg:text-xl text-[#468562] rounded-full border-2"
            >
              Play
            </Link>
          </li>
          <li className="flex relative">
            <Link
              href="/contact"
              className="p-4 m-1.5 text-sm lg:text-xl text-[#468562] rounded-full border-2"
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

import React from 'react';
import Link from 'next/link';
import Music from './Music';

const Footer = () => {
  return (
    <footer className="grid grid-cols-24 w-full mx-auto max-w-screen-2xl relative z-20 py-16">
      <Music />
      <ul className="list social col-start-4 col-end-12 mt-10 text-sm md:col-start-17 md:col-end-20 md:mt-0">
        <li className="font-bold mb-3.5">Socials</li>
        <li className="p-0 m-0">
          <Link
            href="https://www.linkedin.com/in/vuquangnguyen1/"
            target="_blank"
            rel="nofollow noreferrer"
            className="cursor-pointer no-underline m-0 px-0 py-2.5 block bg-none"
          >
            LinkedIn
          </Link>
        </li>
        <li className="p-0 m-0">
          <Link
            href="https://github.com/vnn8248"
            target="_blank"
            rel="nofollow noreferrer"
            className="cursor-pointer no-underline m-0 px-0 py-2.5 block bg-none"
          >
            Github
          </Link>
        </li>
        <li className="p-0 m-0">
          <Link
            href="https://binguyen.substack.com/"
            target="_blank"
            rel="nofollow noreferrer"
            className="cursor-pointer no-underline m-0 px-0 py-2.5 block bg-none"
          >
            Substack
          </Link>
        </li>
      </ul>
      <ul className="list nav col-start-18 col-end-25 mt-10 text-sm md:col-start-20 md:col-end-23 md:mt-0">
        <li className="font-bold mb-3.5">Menu</li>
        <li className="p-0 m-0">
          <Link
            href="/"
            className="cursor-pointer no-underline m-0 px-0 py-2.5 block bg-none"
          >
            Work
          </Link>
        </li>
        <li className="p-0 m-0">
          <Link
            href="/about"
            className="cursor-pointer no-underline m-0 px-0 py-2.5 block bg-none"
          >
            About
          </Link>
        </li>
        <li>
          {' '}
          <Link
            href="/personal"
            className="cursor-pointer no-underline m-0 px-0 py-2.5 block bg-none"
          >
            Play
          </Link>
        </li>
        <li>
          {' '}
          <Link
            href="/contact"
            className="cursor-pointer no-underline m-0 px-0 py-2.5 block bg-none"
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

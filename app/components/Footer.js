import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="grid grid-cols-24 w-full mx-auto max-w-screen-2xl relative z-20 p-16">
      <div className="fun col-start-3 col-end-12">
        <div className="music flex items-center rounded-full overflow-hidden py-4 pl-5 pr-10">
          <div className="icon flex rounded-full opacity-50">
            <Image
              src={'/spotify.svg'}
              width={41}
              height={40}
              alt={'Spotify'}
            />
          </div>
          <div className="track-list flex flex-col overflow-hidden flex-1 ml-5">
            <div className="artist opacity-80 text-base">My Jam</div>
            <div className="song font-bold tracking-normal">
              <Link
                href="https://open.spotify.com/track/2db8VSxfFglwMPmzjbYMS0?si=122e41f795714b1f"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Betta Listen by De La Soul
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ul className="list social col-start-17 col-end-20">
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
      <ul className="list nav col-start-20 col-end-23">
        <li className="font-bold mb-3.5">Menu</li>
        <li className="p-0 m-0">
          <Link
            href="/"
            className="cursor-pointer no-underline m-0 px-0 py-2.5 block bg-none"
          >
            Projects
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
            href="/play"
            className="cursor-pointer no-underline m-0 px-0 py-2.5 block bg-none"
          >
            Play
          </Link>
        </li>
        <li>
          {' '}
          <Link
            href="/"
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

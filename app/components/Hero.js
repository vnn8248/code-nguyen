import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/me.jpg';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero container flex px-36 py-12 max-h-screen">
      <div className="container flex flex-col text-center">
        <h1 className="text-5xl font-bold leading-relaxed">
          <span>Hi, I'm Bi.</span>
          <span>A Software Engineer.</span>
        </h1>
        <h2 className="text-xl font-semibold leading-relaxed my-2"></h2>
        <h3>I'm passionate about creating experiences for others to enjoy.</h3>
        <div className="container flex mt-10 space-x-4">
          <button
            type="button"
            className="rounded-lg py-4 px-10 bg-[#b48e75] text-white"
          >
            <Link href="https://github.com/vnn8248">View My Github</Link>
          </button>
          <button
            type="button"
            className="rounded-lg py-4 px-10 border-[#b48e75] border-2 text-[#b48e75]"
          >
            <Link href="https://www.linkedin.com/in/vuquangnguyen1/">
              View My LinkedIn
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

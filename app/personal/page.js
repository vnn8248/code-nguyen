import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Personal Projects',
};

const PersonalPage = () => {
  return (
    <div className="content">
      <div className="text-7xl text-center pt-32 pb-12 lg:pt-48 lg:pb-12 font-bold tracking-tightest leading-tight">
        <h1 className="">Personal projects.</h1>
      </div>
      <div className="text-center px-12">
        <p>I'm passionate about creating things for others to enjoy.</p>
      </div>
      <div className="showcase-wrapper p-10">
        <div className="showcase grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 max-w-screen-2xl mx-auto my-20 md:gap-10">
          <Link
            href={''}
            className="col-span-4 md:col-span-2 rounded-xl faded cursor-pointer no-underline overflow-hidden relative transition-all ease-linear duration-300"
          >
            <div className="showcase-inner flex justify-start items-start relative h-full gap-3.5 p-6 md:p-10">
              <div className="details flex flex-1 flex-col gap-4">
                <div className="title font-bold flex relative">
                  <h4>Wire Box</h4>
                </div>
                <p className="description meta">
                  Turn hi-fi designs to lo-fi in one click - comes in nasty
                  pink.
                </p>
              </div>
              <div className="shot-holder h-full flex items-center">
                <div className="overflow-hidden rounded">
                  <figure className="relative">
                    <Image
                      src={'/spotify.svg'}
                      width={100}
                      height={100}
                      className=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={''}
            className="col-span-4 md:col-span-2 rounded-xl faded cursor-pointer no-underline overflow-hidden relative transition-all ease-linear duration-300"
          >
            <div className="showcase-inner flex justify-start items-start relative h-full gap-3.5 p-6 md:p-10">
              <div className="details flex flex-1 flex-col gap-4">
                <div className="title font-bold flex relative">
                  <h4>Wire Box</h4>
                </div>
                <p className="description meta">
                  Turn hi-fi designs to lo-fi in one click - comes in nasty
                  pink.
                </p>
              </div>
              <div className="shot-holder h-full flex items-center">
                <div className="overflow-hidden rounded">
                  <figure className="relative">
                    <Image
                      src={'/favicon.ico'}
                      width={100}
                      height={100}
                      className=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={''}
            className="col-span-4 md:col-span-2 rounded-xl faded cursor-pointer no-underline overflow-hidden relative transition-all ease-linear duration-300"
          >
            <div className="showcase-inner flex justify-start items-start relative h-full gap-3.5 p-6 md:p-10">
              <div className="details flex flex-1 flex-col gap-4">
                <div className="title font-bold flex relative">
                  <h4>Wire Box</h4>
                </div>
                <p className="description meta">
                  Turn hi-fi designs to lo-fi in one click - comes in nasty
                  pink.
                </p>
              </div>
              <div className="shot-holder h-full flex items-center">
                <div className="overflow-hidden rounded">
                  <figure className="relative">
                    <Image
                      src={'/favicon.ico'}
                      width={100}
                      height={100}
                      className=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={''}
            className="col-span-4 md:col-span-2 rounded-xl faded cursor-pointer no-underline overflow-hidden relative transition-all ease-linear duration-300"
          >
            <div className="showcase-inner flex justify-start items-start relative h-full gap-3.5 p-6 md:p-10">
              <div className="details flex flex-1 flex-col gap-4">
                <div className="title font-bold flex relative">
                  <h4>Wire Box</h4>
                </div>
                <p className="description meta">
                  Turn hi-fi designs to lo-fi in one click - comes in nasty
                  pink.
                </p>
              </div>
              <div className="shot-holder h-full flex items-center">
                <div className="overflow-hidden rounded">
                  <figure className="relative">
                    <Image
                      src={'/favicon.ico'}
                      width={100}
                      height={100}
                      className=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={''}
            className="col-span-4 md:col-span-2 rounded-xl faded cursor-pointer no-underline overflow-hidden relative transition-all ease-linear duration-300"
          >
            <div className="showcase-inner flex justify-start items-start relative h-full gap-3.5 p-6 md:p-10">
              <div className="details flex flex-1 flex-col gap-4">
                <div className="title font-bold flex relative">
                  <h4>Wire Box</h4>
                </div>
                <p className="description meta">
                  Turn hi-fi designs to lo-fi in one click - comes in nasty
                  pink.
                </p>
              </div>
              <div className="shot-holder h-full flex items-center">
                <div className="overflow-hidden rounded">
                  <figure className="relative">
                    <Image
                      src={'/favicon.ico'}
                      width={100}
                      height={100}
                      className=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Project = (props) => {
  return props.comingSoon ? (
    <div className="col-span-4 md:col-span-2 rounded-xl faded cursor-not-allowed no-underline overflow-hidden relative transition-all ease-linear duration-300">
      <h4 className="pl-4 bg-rose-400">Coming soon!</h4>
      <div className="showcase-inner flex justify-start items-start relative h-full gap-3.5 p-6 md:px-10 md:pb-10 md:pt-2">
        <div className="details flex flex-1 flex-col gap-4">
          <div className="title font-bold flex relative">
            <h4>{props.title}</h4>
          </div>
          <p className="description text-base">{props.description}</p>
        </div>
        <div className="shot-holder h-full flex items-center">
          <div className="overflow-hidden rounded">
            <figure className="relative">
              <Image src={props.src} width={100} height={100} className="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Link
      href={props.url}
      className="col-span-4 md:col-span-2 rounded-xl faded cursor-pointer no-underline overflow-hidden relative transition-all ease-linear duration-300"
      target="_blank"
    >
      <div className="showcase-inner flex justify-start items-start relative h-full gap-3.5 p-6 md:p-10">
        <div className="details flex flex-1 flex-col gap-4">
          <div className="title font-bold flex relative">
            <h4>{props.title}</h4>
          </div>
          <p className="description text-base">{props.description}</p>
        </div>
        <div className="shot-holder h-full flex items-center">
          <div className="overflow-hidden rounded">
            <figure className="relative">
              <Image src={props.src} width={100} height={100} className="" />
            </figure>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;

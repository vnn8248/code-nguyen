import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = (props) => {
  return (
    <div
      className={`border-2 ${props.start} ${props.end} rounded-3xl ${props.bg} text-slate-900`}
    >
      <Link
        href=""
        className="max-h-550 rounded-lg flex w-full relative cursor-pointer flex-col no-underline"
      >
        <div className="card-wrap flex flex-col w-full h-full relative overflow-hidden rounded-3xl py-10 px-16">
          <div className="info text-right flex flex-col z-30">
            <span className="uppercase tracking-widest font-medium text-base">
              {props.projectCompany}
            </span>
            <h2 className="font-bold">{props.projectName}</h2>
          </div>
          <div className="inner relative z-20 flex flex-1 items-end justify-center mt-10">
            <div className="image-holder mx-auto w-full max-w-screen-xl">
              <figure className="relative">
                <Image
                  src={props.imageSrc}
                  width={props.imageW}
                  height={props.imageH}
                  loading="lazy"
                  alt={props.imageAlt}
                  className="max-w-max rounded-xl relative z-20 opacity-100"
                ></Image>
              </figure>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

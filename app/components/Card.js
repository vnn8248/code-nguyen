import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = (props) => {
  let start;
  let end;
  let bg;
  let w;
  let h;

  // First project in grid
  if (props.position === 1) {
    bg = 'bg-[#40e2a1]';
    start = 1;
    end = 11;
    w = 810;
    h = 422;
  }

  // Second
  if (props.position === 2) {
    bg = 'bg-[#ff6666]';
    start = 12;
    end = 24;
    w = 1300;
    h = 600;
  }

  // Third
  if (props.position === 3) {
    bg = 'bg-[#7cb2e8]';
    start = 1;
    end = 14;
    w = 810;
    h = 422;
  }

  // Fourth
  if (props.position === 4) {
    bg = 'bg-[#ff69f8]';
    start = 15;
    end = 24;
    w = 1300;
    h = 600;
  }

  return (
    <div
      className={`border-2 col-start-${start} col-end-${end} rounded-3xl ${bg} text-slate-900`}
    >
      <Link
        href={`projects/${props.slug}`}
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
                  width={w}
                  height={h}
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

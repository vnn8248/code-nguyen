import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

const Travel = () => {
  let left = fs.readdirSync(path.join('public', 'travel', 'left'));
  let right = fs.readdirSync(path.join('public', 'travel', 'right'));

  left = left.map((file) => {
    let name = file.split('.')[0];

    return {
      name,
      path: file,
    };
  });

  right = right.map((file) => {
    let name = file.split('.')[0];

    return {
      name,
      path: file,
    };
  });

  left = left[Math.floor(Math.random() * left.length)];
  right = right[Math.floor(Math.random() * right.length)];

  return (
    <div className="pictures mx-auto my-10 gap-4 flex items-center justify-center md:my-16 md:px-16">
      <div className="left overflow-hidden relative md:rounded-2xl">
        <figure className="relative faded group">
          <h4 className="hidden group-hover:block absolute z-40 right-5 bottom-5 p-4 faded rounded-xl">
            {left.name}
          </h4>
          <Image
            className="pic w-full object-cover opacity-100 relative z-30 block rounded transition-all ease-in-out duration-200"
            src={`/travel/left/${left.path}`}
            width={4032}
            height={3024}
            alt={left.name}
            priority={true}
          />
        </figure>
      </div>
      <div className="right hidden md:mt-0 overflow-hidden md:rounded-2xl md:block">
        <figure className="relative faded group">
          <h4 className="hidden group-hover:block absolute z-40 right-5 bottom-5 p-4 faded rounded-xl">
            {right.name}
          </h4>
          <Image
            className="pic w-full object-cover opacity-100 relative z-30 block rounded transition-all ease-in-out duration-200"
            src={`/travel/right/${right.path}`}
            width={12752}
            height={3830}
            alt={right.name}
            loading="lazy"
          />
        </figure>
      </div>
    </div>
  );
};

export default Travel;

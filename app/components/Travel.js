import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import redRocks from '../../public/travel/right/red-rocks.jpg';
import howth from '../../public/travel/left/howth.jpg';

const Travel = () => {
  const left = fs.readdirSync(path.join('public' ,'travel', 'left'));
  const right = fs.readdirSync(path.join('public','travel', 'right'));

  let small = left[Math.floor(Math.random() * left.length)];
  let big = right[Math.floor(Math.random() * right.length)];

  return (
    <div className="pictures mx-auto my-10 gap-4 flex items-center justify-center md:my-16 md:px-16">
        <div className="left overflow-hidden md:rounded-2xl">
          <figure className="relative faded">
            <Image
              className="pic w-full object-cover opacity-100 relative z-30 block rounded transition-all ease-in-out duration-200"
              src={`/travel/left/${small}`}
              width={4032}
              height={3024}
              alt="Traveling around the world"
              priority={true}
            />
          </figure>
        </div>
        <div className="right hidden md:mt-0 overflow-hidden md:rounded-2xl md:block">
          <figure className="relative faded">
            <Image
              className="pic w-full object-cover opacity-100 relative z-30 block rounded transition-all ease-in-out duration-200"
              src={`/travel/right/${big}`}
              width={12752}
              height={3830}
              alt="Traveling around the world"
              loading='lazy'
            />
          </figure>
        </div>
      </div>
  )
}

export default Travel;
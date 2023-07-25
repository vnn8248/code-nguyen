import React from 'react';
import Image from 'next/image';

const Techs = (props) => {
  const techs = [];

  for (const tech in props) {
    techs.push({
      [tech]: props[tech],
    });
  }

  return (
    <div className="grid grid-cols-24 max-w-screen-2xl p-0 w-full mt-6 mb-24">
      <div className={`item ${techs.length < 4 ? 'col-start-5 col-end-21' : 'col-start-2 col-end-24'}  md:col-start-5 md:col-end-21 lg:pb-0`}>
        <div className="flex items-start justify-between md:pt-6">
          {techs.map((tech) => {
            let src;
            let alt;
            let w;
            let h;

            for (const t in tech) {
              alt = t;
              src = tech[t].src;
              w = tech[t].w;
              h = tech[t].h;
            }

            return (
              <div
                key={alt}
                className="flex flex-col justify-center items-center"
              >
                <h4 className="text-center font-bold text-sm md:text-base 2xl:text-2xl 2xl:mb-4">
                  {alt}
                </h4>
                <Image alt={alt} src={src} width={w} height={h} className='2xl:w-20 2xl:h-20' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Techs;

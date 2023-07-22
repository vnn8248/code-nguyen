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
    <div className="grid grid-cols-24 max-w-screen-2xl p-0 w-full mt-6">
      <div className="item col-start-2 col-end-24 md:col-start-4 md:col-end-22 lg:pb-0">
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
                <h4 className="text-center font-bold text-sm md:text-base">
                  {alt}
                </h4>
                <Image alt={alt} src={src} width={w} height={h} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Techs;

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
    <div className="grid grid-cols-24 max-w-screen-2xl p-0 w-full">
      <div className="item lg:col-start-4 lg:col-end-22 lg:pb-0">
        <div className="flex items-start justify-between pt-6">
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
              <div key={alt}>
                <h3 className="text-center">{alt}</h3>
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

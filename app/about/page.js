import Image from 'next/image';
import React from 'react';
import Techs from '../components/mdx/Techs';
import redRocks from '../../public/red-rocks.jpg';
import howth from '../../public/howth.jpg';

export const metadata = {
  title: 'About Bi Nguyen',
};

const AboutPage = () => {
  return (
    <div className="content">
      <h1 className="text-center pt-32 pb-12 lg:pt-48 lg:pb-24 font-bold tracking-tightest leading-tight">
        Bi Nguyễn.
      </h1>
      <div className="grid grid-cols-24 w-full mx-auto max-w-screen-2xl mb-10">
        <div className="me col-start-3 col-end-24 md:col-start-4 md:col-end-10 mt-3.5 relative">
          <div className="me-content relative">
            <div className="me-holder max-h-96 md:max-h-none overflow-hidden">
              <div className="block">
                <figure className="relative rounded-t-full">
                  <Image
                    src="/me.jpg"
                    className="w-full object-cover opacity-100 rounded-t-full"
                    width={384}
                    height={384}
                    loading="lazy"
                    alt="Photo of Bi"
                  />
                </figure>
              </div>
            </div>
            <div className="caption py-5 px-6 text-center bg-slate-500 text-white">
              Married at White Sands National Park, NM
            </div>
          </div>
        </div>
        <div className="blurb col-start-3 col-end-24 md:col-start-12 md:col-end-24 mt-10 md:mt-6">
          <h2 className="intro-h2 md:mt-6 md:mb-6 leading-tight">
            I'm a Software Engineer working remotely from Raleigh, NC.
          </h2>
          <p className="mt-3.5 md:mt-6 leading-relaxed">
            Over the past 10 years, I've worked in various areas along the
            software development lifecycle, including as a business analyst,
            product owner, and now, software engineer. I'm proud to have worn
            many hats.
          </p>
          <p className="mt-3.5 md:mt-6 leading-relaxed">
            These days, I focus on building K4's IoT knowledge base as a
            Software Engineer II.
          </p>
        </div>
      </div>
      <div className="container mx-auto md:mt-48 md:mb-12">
        <h2 className="intro-h2 text-center leading-tight">
          My favorite Techs to use
        </h2>
        <Techs
          node={{ src: '/spotify.svg', w: 50, h: 50 }}
          aws={{ src: '/spotify.svg', w: 50, h: 50 }}
          linux={{ src: '/spotify.svg', w: 50, h: 50 }}
          git={{ src: '/spotify.svg', w: 50, h: 50 }}
        />
      </div>
      <div className="container mx-auto md:mt-48 md:mb-12 px-80">
        <h2 className="intro-h2 leading-tight">
          Let's collaborate if you're commited to sustainability, education,
          equality, or carbon neutrality.
        </h2>
        <p className="mt-3.5 md:mt-6 leading-relaxed">
          I believe we should leave this Earth as good as or better than we
          found it for future generations; my goal is to contribute to those
          ideals in whatever way I can. If you feel the same, I'd love to talk.
        </p>
      </div>
      <div className="wrapper mx-16">
        <div className="faded grid w-full max-w-screen-2xl mx-auto grid-cols-24 relative gap-12 rounded-3xl py-24 my-10">
          <div className="col-start-3 col-end-24 md:col-start-4 md:col-end-13 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              01
            </div>
            <h3 className="font-bold">Build</h3>
            <p className="pt-0 mt-4 leading-relaxed">
              I sketch wireframes and make prototypes. Talking through tactile
              designs existing in the browser is worth its weight. Design tools
              only carry you so far; the rest should be realized with a link my
              team can rally around.
            </p>
          </div>
          <div className="col-start-3 col-end-24 md:col-start-14 md:col-end-24 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              02
            </div>
            <h3 className="font-bold">Build</h3>
            <p className="pt-0 mt-4 leading-relaxed">
              I sketch wireframes and make prototypes. Talking through tactile
              designs existing in the browser is worth its weight. Design tools
              only carry you so far; the rest should be realized with a link my
              team can rally around.
            </p>
          </div>
          <div className="col-start-3 col-end-24 md:col-start-4 md:col-end-13 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              03
            </div>
            <h3 className="font-bold">Build</h3>
            <p className="pt-0 mt-4 leading-relaxed">
              I sketch wireframes and make prototypes. Talking through tactile
              designs existing in the browser is worth its weight. Design tools
              only carry you so far; the rest should be realized with a link my
              team can rally around.
            </p>
          </div>
          <div className="col-start-3 col-end-24 md:col-start-14 md:col-end-24 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              04
            </div>
            <h3 className="font-bold">Build</h3>
            <p className="pt-0 mt-4 leading-relaxed">
              I sketch wireframes and make prototypes. Talking through tactile
              designs existing in the browser is worth its weight. Design tools
              only carry you so far; the rest should be realized with a link my
              team can rally around.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-screen-2xl md:mt-48 md:mb-12 px-80">
        <p className="pt-0 mt-4 leading-relaxed">
          Before I stepped into the world of product design, I was a web
          developer. One of my earliest jobs involved writing HTML emails, in a
          time before email linters. Lots of wishing, hoping, and finger
          crossing that your email arrived in a recipient's inbox in one piece.
        </p>
        <p className="pt-0 mt-4 leading-relaxed">
          Before I stepped into the world of product design, I was a web
          developer. One of my earliest jobs involved writing HTML emails, in a
          time before email linters. Lots of wishing, hoping, and finger
          crossing that your email arrived in a recipient's inbox in one piece.
        </p>
        <p className="pt-0 mt-4 leading-relaxed">
          Before I stepped into the world of product design, I was a web
          developer. One of my earliest jobs involved writing HTML emails, in a
          time before email linters. Lots of wishing, hoping, and finger
          crossing that your email arrived in a recipient's inbox in one piece.
        </p>
      </div>
      <div className="pictures mx-auto p-0 mb-16 md:px-16 gap-4 flex items-center justify-center">
        <div className="overflow-hidden md:rounded-2xl">
          <figure className="relative faded">
            <Image
              className="pic w-full object-cover opacity-100 relative z-30 block rounded transition-all ease-in-out duration-200"
              src={howth}
              width={500}
              height={500}
              loading="lazy"
              alt="Traveling around the world"
            />
          </figure>
        </div>
        <div className="mt-0 overflow-hidden md:rounded-2xl hidden md:block">
          <figure className="relative faded">
            <Image
              className="pic w-full object-cover opacity-100 relative z-30 block rounded transition-all ease-in-out duration-200"
              src={redRocks}
              width={500}
              height={500}
              loading="lazy"
              alt="Traveling around the world"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

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
      <h1 className="text-center pt-32 pb-12 lg:pt-48 lg:pb-12 font-bold tracking-tightest leading-tight">
        Bi Nguyễn.
      </h1>
      <div className="grid grid-cols-24 w-full mx-auto max-w-screen-2xl mb-10">
        <div className="me col-start-3 col-end-23 md:col-start-4 md:col-end-10 mt-3.5 relative">
          <div className="me-content relative">
            <div className="me-holder max-h-96 md:max-h-none overflow-hidden">
              <div className="block">
                <figure className="relative rounded-t-3xl">
                  <Image
                    src="/me.jpg"
                    className="w-full object-cover relative sm:bottom-48 md:bottom-0 opacity-100 rounded-t-3xl"
                    width={384}
                    height={384}
                    loading="lazy"
                    alt="Photo of Bi"
                  />
                </figure>
              </div>
            </div>
            <div className="caption py-5 px-6 text-center bg-slate-500 text-white text-xs">
              Married at White Sands National Park, NM
            </div>
          </div>
        </div>
        <div className="blurb col-start-3 col-end-24 md:col-start-12 md:col-end-24 mt-10 md:mt-6">
          <h2 className="intro-h2 md:mt-6 md:mb-6 leading-tight font-bold">
            I'm a Software Engineer working remotely from Raleigh, NC.
          </h2>
          <p className="mt-3.5 md:mt-6 leading-relaxed">
            Over the past 10 years, I've worked in various roles along the
            software development lifecycle. I have experience as a business
            analyst, product owner, and now, I've gone to the Dark Side; I'm in
            dev.
          </p>
          <p className="mt-3.5 md:mt-6 leading-relaxed">
            I'm proud to have worn many hats in my career. I've learned that
            there is always a human behind everything - even technology.
            Treating design, development, and support with that in mind is how
            I've learned to grow my career.
          </p>
        </div>
      </div>
      <div className="container my-24 mx-auto md:mt-48 md:mb-12">
        <h2 className="intro-h2 text-center leading-tight font-bold">
          My favorite Techs
        </h2>
        <Techs
          next={{ src: '/nextjs.svg', w: 50, h: 50 }}
          tailwind={{ src: '/tailwind.svg', w: 50, h: 50 }}
          node={{ src: '/nodejs-icon.svg', w: 50, h: 50 }}
          vercel={{ src: '/vercel.svg', w: 50, h: 50 }}
          mongoDB={{ src: '/mongodb.svg', w: 50, h: 50 }}
        />
      </div>
      <div className="container mx-auto md:my-32 px-8 md:px-80">
        <h2 className="intro-h2 leading-tight tracking-tight font-bold">
          Let's collaborate. If you're a diverse thinker, enjoy the arts, or if
          you have some good jokes, hit me up.
        </h2>
        <p className="mt-4 md:mt-6 leading-relaxed">
          I believe that compassion, love, and altruism are essential to
          acheiving inner peace.
        </p>
      </div>
      <div className="wrapper md:px-18">
        <div className="faded grid w-full max-w-screen-2xl mx-auto grid-cols-24 relative gap-y-8 md:gap-12 2xl:gap-16 md:rounded-3xl py-8 md:py-24 my-10">
          <div className="col-start-3 col-end-24 md:col-start-4 md:col-end-13 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              01
            </div>
            <h3 className="font-bold">User first</h3>
            <p className="pt-0 mt-4 leading-relaxed">
              The more I learn about technology, the more I try to learn about
              humans. I find human behavior and brain psychology endlessly
              fascinating. With all my work, I aim to keep users and teammates
              in mind.
            </p>
          </div>
          <div className="col-start-3 col-end-24 md:col-start-14 md:col-end-24 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              02
            </div>
            <h3 className="font-bold">Collaborate</h3>
            <p className="pt-0 mt-4 leading-relaxed">
              As humans, we desire connection. As workers, we crave a
              collaboration. I make as much effort as possible to create a safe,
              inclusive workspace for my colleagues and coworkers to ask
              questions and encourage feedback.
            </p>
          </div>
          <div className="col-start-3 col-end-24 md:col-start-4 md:col-end-13 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              03
            </div>
            <h3 className="font-bold">Learn</h3>
            <p className="pt-0 mt-4 leading-relaxed">
              <span className="flex mb-2 italic">
                "I have no special talent. I am only passionately curious." -
                Albert Einstein
              </span>
              I approach life as open-minded as possible. As a self-taught
              coder, one of the most important things I've learned along the way
              was how to communicate.
            </p>
          </div>
          <div className="col-start-3 col-end-24 md:col-start-14 md:col-end-24 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              04
            </div>
            <h3 className="font-bold">Teach</h3>
            <p className="pt-0 mt-4 leading-relaxed">
              <span className="flex mb-2 italic">
                "When you learn, teach. When you get, give." - Maya Angelou
              </span>
              I believe in mentorship.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-screen-2xl px-8 md:my-32 md:px-80">
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
      <div className="pictures mx-auto my-8 md:my-32 md:px-48 gap-4 flex items-center justify-center">
        <div className="left overflow-hidden md:rounded-2xl">
          <figure className="relative faded">
            <Image
              className="pic w-full object-cover opacity-100 relative z-30 block rounded transition-all ease-in-out duration-200"
              src={howth}
              width={300}
              height={300}
              loading="lazy"
              alt="Traveling around the world"
            />
          </figure>
        </div>
        <div className="right hidden md:mt-0 overflow-hidden md:rounded-2xl md:block">
          <figure className="relative faded">
            <Image
              className="pic w-full object-cover opacity-100 relative z-30 block rounded transition-all ease-in-out duration-200"
              src={redRocks}
              width={1020}
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

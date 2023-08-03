import Image from 'next/image';
import React from 'react';
import Techs from '../components/mdx/Techs';
import Travel from '../components/Travel';

export const metadata = {
  title: 'About Bi Nguyen',
};

const AboutPage = () => {
  return (
    <div className="content max-w-screen-2xl mx-auto">
      <h1 className="text-center pt-32 pb-12 font-bold tracking-tightest leading-tight md:pt-48 lg:pt-48 lg:pb-12 xl:pt-48">
        Bi Nguyễn.
      </h1>
      <div className="grid grid-cols-24 w-full mx-auto max-w-screen-2xl mb-10 2xl:mt-10">
        <div className="me mt-3.5 relative col-start-3 col-end-23 md:col-start-3 md:col-end-11 xl:col-start-4">
          <div className="me-content relative flex flex-col">
            <div className="me-holder max-h-96 overflow-hidden md:max-h-550 xl:max-h-none">
              <figure className="relative rounded-t-3xl">
                <Image
                  src="/me.jpg"
                  className="w-full object-cover relative sm:bottom-48 md:bottom-0 opacity-100 rounded-t-3xl"
                  width={3648}
                  height={5472}
                  priority={true}
                  alt="Photo of Bi"
                />
              </figure>
            </div>
            <div className="caption py-5 px-6 text-center bg-slate-500 text-white text-xs xl:text-base">
              Married at White Sands National Park, NM
            </div>
          </div>
        </div>
        <div className="blurb col-start-3 col-end-24 md:col-start-12 md:col-end-23 mt-10 md:mt-3.5 xl:col-end-22">
          <h2 className="leading-tight font-bold lg:text-4xl xl:text-5xl 2xl:text-6xl">
            I'm a Software Engineer working remotely from Raleigh, NC.
          </h2>
          <p className="mt-3.5 md:mt-6 leading-relaxed md:text-base lg:text-lg xl:mt-10 xl:leading-loose 2xl:text-xl 2xl:leading-relaxed">
            Over the past 10 years, I've worked in various roles along the
            software development lifecycle. I have experience as a business
            analyst, product owner, and now, I've gone to the Dark Side - I'm in
            dev.
          </p>
          <p className="mt-3.5 md:mt-6 leading-relaxed md:text-base lg:text-lg xl:mt-10 xl:leading-loose 2xl:text-xl 2xl:leading-relaxed">
            I'm proud to have worn many hats in my career. Throughout my journey
            I learned that there is always a human behind everything - even
            technology. Someone is using a product, someone has written that
            code, or someone is working with me in this moment. Treating design,
            development, and support with that in mind is how I've learned to
            grow as a person - not just as a software engineer.
          </p>
          <p className="mt-3.5 md:mt-6 leading-relaxed md:text-base lg:text-lg xl:mt-10 xl:leading-loose 2xl:text-xl 2xl:leading-relaxed">
            My goal is create meaningful relationships wherever I can - all
            while building some cool stuff along the way.
          </p>
        </div>
      </div>
      <div className="container my-24 lg:my-32 xl:my-48 mx-auto">
        <h2 className="intro-h2 text-center leading-tight font-bold">
          My favorite Techs to use
        </h2>
        <Techs
          next={{ src: '/icons/nextjs.svg', w: 50, h: 50, name: 'next' }}
          tailwind={{
            src: '/icons/tailwind.svg',
            w: 50,
            h: 50,
            name: 'tailwind',
          }}
          node={{ src: '/icons/nodejs-icon.svg', w: 50, h: 50, name: 'node' }}
          vercel={{ src: '/icons/vercel.svg', w: 50, h: 50, name: 'vercel' }}
          mongoDB={{ src: '/icons/mongodb.svg', w: 50, h: 50, name: 'mongoDB' }}
        />
      </div>
      <div className="container mx-auto px-16 md:px-32 lg:px-48 xl:px-96">
        <h2 className="intro-h2 leading-tight tracking-tight font-bold">
          If you're a diverse thinker, enjoy the arts, or if you have some good
          jokes, hit me up.
        </h2>
        <p className="mt-4 md:mt-6 leading-relaxed text-sm md:text-base lg:text-lg 2xl:text-xl">
          I enjoy meeting interesting people. The quirkier, the better. For me,
          a successful life will be defined by the work I've done and the people
          in my life. If you feel the same way, I'd love to talk.
        </p>
      </div>
      <div className="wrapper md:px-16">
        <div className="faded grid grid-cols-24 gap-y-8 w-full max-w-screen-2xl mx-auto my-10 py-8 relative md:rounded-3xl md:py-24 2xl:gap-16">
          <div className="col-start-3 col-end-24 lg:col-start-4 lg:col-end-11 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              01
            </div>
            <h3 className="font-bold">User first</h3>
            <p className="pt-0 mt-4 leading-relaxed text-sm md:text-base lg:text-lg 2xl:text-xl">
              The more I learn about technology, the more I try to learn about
              humans. Through that, my intuition for designing and developing
              products becomes user-centric.
            </p>
          </div>
          <div className="col-start-3 col-end-24 lg:col-start-13 lg:col-end-21 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              02
            </div>
            <h3 className="font-bold">Collaboration</h3>
            <p className="pt-0 mt-4 leading-relaxed text-sm md:text-base lg:text-lg 2xl:text-xl">
              The best projects I've worked on all had true teamwork. It was
              more than, "do your part and I'll do mine". It was more than just
              top-down economics. It was an inclusive and welcoming environment
              for ideas, learning, feedback, and most importantly, mistakes.
            </p>
          </div>
          <div className="col-start-3 col-end-24 lg:col-start-4 lg:col-end-11 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              03
            </div>
            <h3 className="font-bold">Learn</h3>
            <p className="pt-0 mt-4 leading-relaxed text-sm md:text-base lg:text-lg 2xl:text-xl">
              <span className="flex mb-2 italic">
                "I have no special talent. I am only passionately curious." -
                Albert Einstein
              </span>
              As a self-taught coder, one of the most important things I've
              learned along the way was how to be confident and curious at the
              same time. Imposter syndrome is a real thing. Embracing life-long
              learning is the cure.
            </p>
          </div>
          <div className="col-start-3 col-end-24 lg:col-start-13 lg:col-end-21 relative z-20">
            <div className="mb-4 md:mb-6 text-2xl md:text-5xl opacity-50">
              04
            </div>
            <h3 className="font-bold">Teach</h3>
            <p className="pt-0 mt-4 leading-relaxed text-sm md:text-base lg:text-lg 2xl:text-xl">
              <span className="flex mb-2 italic">
                "When you learn, teach. When you get, give." - Maya Angelou
              </span>
              I believe in mentorship. To be able to pass on knowledge in a
              meaningful way is a skill that I think is undervalued and
              underappreciated. This is something that I prioritize as highly as
              any other tech skill that I could learn.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-screen-2xl px-8 sm:px-16 sm:py-8 md:px-32 lg:px-48 xl:px-96">
        <p className="text-sm pt-0 leading-relaxed md:text-base lg:text-lg 2xl:text-xl">
          In a previous life, I was once a product owner. It gave me crucial
          skills in communication, organization, and planning. I get asked a lot
          about why I decided to switch to dev. Apparently, it's typical for
          someone to switch from dev to product but not the other way around.
        </p>
        <p className="text-sm pt-0 mt-6 leading-relaxed md:text-base md:mt-10 lg:text-lg 2xl:text-xl">
          I decided to learn how to code while I was doing my job as a product
          owner. I figured, at the least, it would help me empathize better with
          my dev teams. And, to be honest, I was slightly envious of the
          esoteric aura that clouded the developers. Little did I know, when I
          rendered my first 'Hello World', that I had walked into a whole new
          universe where the possibilities were endless.
        </p>
        <p className="text-sm pt-0 mt-6 leading-relaxed md:text-base md:mt-10 lg:text-lg 2xl:text-xl">
          When I'm back on Earth I enjoy chasing all my interests. I like
          writing at a good coffee shop, finding a local pickup soccer game,
          listening to good music, cooking, biking, reading graphic novels, and
          traveling to world.
        </p>
      </div>
      <Travel />
    </div>
  );
};

export default AboutPage;

import React from 'react';
import Project from '../components/Project';

export const metadata = {
  title: 'Personal Projects',
};

const PersonalPage = () => {
  return (
    <div className="content">
      <div className="text-7xl text-center pt-32 pb-12 md:pt-48 lg:pb-12 font-bold tracking-tightest leading-tight">
        <h1 className="">Personal projects.</h1>
      </div>
      <div className="text-left mx-auto px-12 md:px-16 lg:pl-32 lg:pr-44 lg:max-w-4xl relative">
        <p>
          When I'm not working, I'm most likely writing. I have a ridiculous
          amount of things I find interesting. These outlets are how I manage
          the chaos that is my brain.
        </p>
      </div>
      <div className="showcase-wrapper px-10 md:p-10">
        <div className="showcase grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 max-w-screen-2xl mx-auto my-20 gap-10">
          <Project
            title="Code Nguyen"
            src="/icons/avataaars.svg"
            description="My first ever portfolio! Cringe-worthy? Perhaps. But, it's always humbling to look back at where you started."
            url="https://www.codenguyen.com/"
            comingSoon={false}
          />
          <Project
            title="We Are The Schnguyenies"
            src="/projects/whitesands.png"
            description="Somehow I convinced my wife to let me build a custom website celebrating our marriage. She's the real MVP."
            url="https://www.wearetheschnguyenies.com/"
            comingSoon={false}
          />
          <Project
            title="Pickup At The Park"
            src="/icons/boots.svg"
            description="My Substack about The Beautiful Game. I write game reviews, nostalgia pieces, travel stories, and more."
            url="https://binguyen.substack.com/"
            comingSoon={false}
          />
          <Project
            title="Fear & Gluttony"
            src="/projects/gluttony.jpeg"
            description="Chasing the culinary dragon. How far will you go for good food?"
            url="https://fearandgluttony.substack.com/"
            comingSoon={false}
          />
          <Project
            title="Hip Hop Time Travelers"
            src="/icons/backpack.svg"
            description="My Substack about the greatest rabbit hole I ever fell down - 90's Hip Hop."
            url="https://fearandgluttony.substack.com/"
            comingSoon={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;

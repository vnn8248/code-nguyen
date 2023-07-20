import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Card from './components/Card';

const getProjects = () => {
  const projectsDir = 'projects';

  const files = fs.readdirSync(path.join(projectsDir));

  const projects = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(projectsDir, filename),
      'utf-8'
    );

    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return projects;
};

const HomePage = () => {
  const projects = getProjects();

  return (
    <div className="content relative w-full h-full z-10">
      <h1 className="pt-32 pb-12 pl-8 pr-0 md:pt-48 flex justify-left">
        <span className=" ">
          <span className="flex relative z-10 tracking-tightest">
            Hi. I'm Bi Nguyễn.
          </span>
          <span className="flex font-normal relative z-10">Developer,</span>
          <span className="flex font-normal relative z-10">Writer,</span>
          <span className="flex font-normal relative z-10">
            & Life-long Learner.
          </span>
        </span>
      </h1>
      <div className="px-8 relative">
        <p className="text-left">
          I love writing. Whether it's coding in Javascript or writing on{' '}
          <Link
            href="https://binguyen.substack.com/"
            className="font-bold text-[#ff6719] underline decoration-2"
          >
            Substack
          </Link>
          , the craft of communication is something that I am passionate about.
        </p>
        <p className="mt-8">
          Right now, I am a Software Engineer II at{' '}
          <Link
            href="https://www.k4connect.com/"
            className="font-bold text-[#ff6719] underline decoration-2"
          >
            K4 Connect
          </Link>{' '}
          focusing on creating human-centric experiences through IoT devices.
        </p>
        <p className="mt-8">Here are some projects that I'm proudest of:</p>
      </div>
      <div className="cards my-12 md:my-24 px-8">
        <div className="cards-content grid grid-cols-24 gap-y-24 max-w-screen-2xl mx-auto w-full">
          {projects.map((project) => {
            return (
              <Card
                projectName={project.meta.name}
                projectCompany={project.meta.company}
                imageSrc={project.meta.preview.image}
                imageAlt={project.meta.preview.imageAlt}
                position={project.meta.position}
                slug={project.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

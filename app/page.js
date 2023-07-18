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
  console.log(projects);

  return (
    <div className="content">
      <div className="text-7xl text-center pt-32 pb-12 lg:pt-48 lg:pb-12 font-bold tracking-tightest leading-tight">
        <h1 className="">Hi. I'm Bi Nguyễn.</h1>
        <h1 className="">A Software Engineer.</h1>
      </div>
      <div className="text-center px-12">
        <p>I'm passionate about creating things for others to enjoy.</p>
      </div>
      <div className="cards my-24 px-24">
        <div className="cards-content grid grid-cols-24 gap-y-16 max-w-screen-2xl mx-auto w-full">
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
          {/* <Card
            bg={'bg-[#40e2a1]'}
            projectName={'3.16'}
            projectCompany={'K4'}
            imageSrc={'/system-agent.svg'}
            imageW={810}
            imageH={422}
            imageAlt={'System Agent'}
            start={'col-start-1'}
            end={'col-end-11'}
          />
          <Card
            bg={'bg-[#ff6666]'}
            projectName={'IoT Devices'}
            projectCompany={'K4'}
            imageSrc={'/iot-devices.svg'}
            imageW={1300}
            imageH={600}
            imageAlt={'K4 IoT Devices'}
            start={'col-start-12'}
            end={'col-end-24'}
          />
          <Card
            bg={'bg-[#7cb2e8]'}
            projectName={'Cloud Mapping'}
            projectCompany={'K4'}
            imageSrc={'/cloud-mapping.svg'}
            imageW={1300}
            imageH={600}
            imageAlt={'Cloud Mapping'}
            start={'col-start-1'}
            end={'col-end-14'}
          />
          <Card
            bg={'bg-[#ff69f8]'}
            projectName={'Thingsboard migration'}
            projectCompany={'K4'}
            imageSrc={'/thingsboard-migration.svg'}
            imageW={810}
            imageH={422}
            imageAlt={'Thingsboard migration'}
            start={'col-start-15'}
            end={'col-end-24'}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

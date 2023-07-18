import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;

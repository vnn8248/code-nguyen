import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Card from './components/Card';

const getProjects = () => {
    const projectsDir = 'projects/done';

    const files = fs.readdirSync(path.join(projectsDir));

    const projects = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(projectsDir, filename), 'utf-8');

        const { data: frontMatter } = matter(fileContent);

        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
        };
    });

    return projects;
};

const getWIP = () => {
    const projectsDir = 'projects/in-progress';

    const files = fs.readdirSync(path.join(projectsDir));

    const projects = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(projectsDir, filename), 'utf-8');

        const { data: frontMatter } = matter(fileContent);

        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
        };
    });

    return projects;
};

const HomePage = () => {
    const projectsDone = getProjects();
    const projectsWIP = getWIP();

    return (
        <div className="content relative max-w-screen-2xl mx-auto w-full h-full z-10">
            <div className="pt-32 pb-12 px-6 flex flex-col text-center md:px-16 lg:pt-48 lg:px-32 xl:pb-24">
                <h1 className=" relative z-10 tracking-tightest">Hi. I'm Bi Nguyễn.</h1>
                <h2 className=" font-normal relative z-10">
                    Developer, Writer, & Life-Long Learner.
                </h2>
            </div>
            <div className="px-8 mx-auto md:px-16 lg:pl-32 lg:pr-44 lg:max-w-4xl relative">
                <p className="md:text-lg">
                    I love writing. Whether it's coding in Javascript or writing on{' '}
                    <Link
                        href="https://binguyen.substack.com/"
                        className="font-bold text-[#ff6719] underline decoration-2"
                    >
                        Substack
                    </Link>
                    , the craft of communication is something that I am passionate about.
                </p>
                <p className="mt-6 md:text-lg">
                    Right now, I am a Software Engineer II at{' '}
                    <Link
                        href="https://www.k4connect.com/"
                        className="font-bold text-[#ff6719] underline decoration-2"
                    >
                        K4 Connect
                    </Link>{' '}
                    focusing on creating human-centric experiences through IoT devices.
                </p>
                <h3 className="mt-6 font-bold">Here are the projects that I'm proudest of.</h3>
            </div>
            <div className="cards my-12 md:my-24 2xl:my-12 px-8">
                <div className="cards-content grid grid-cols-24 gap-y-24 max-w-screen-2xl mx-auto w-full">
                    {projectsDone.map((project) => {
                        return (
                            <Card
                                projectName={project.meta.name}
                                projectCompany={project.meta.company}
                                imageSrc={project.meta.preview.image}
                                imageAlt={project.meta.preview.imageAlt}
                                position={project.meta.position}
                                slug={project.slug}
                                key={project.meta.preview.imageAlt}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="px-8 mx-auto md:px-16 lg:pl-32 lg:pr-44 lg:mt-24 lg:max-w-4xl relative">
                <h3 className="font-bold">These are the projects I'm working on now.</h3>
            </div>
            <div className="cards my-12 md:my-24 2xl:mt-12 2xl:mb-24 px-8">
                <div className="cards-content grid grid-cols-24 gap-y-24 max-w-screen-2xl mx-auto w-full">
                    {projectsWIP.map((project) => {
                        return (
                            <Card
                                projectName={project.meta.name}
                                projectCompany={project.meta.company}
                                imageSrc={project.meta.preview.image}
                                imageAlt={project.meta.preview.imageAlt}
                                position={project.meta.position}
                                slug={project.slug}
                                key={project.meta.preview.imageAlt}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomePage;

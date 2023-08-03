import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ProjectMeta from '@/app/components/mdx/ProjectMeta';
import Techs from '@/app/components/mdx/Techs';
import Image from 'next/image';

export async function generateStaticParams() {
  const done = fs.readdirSync(path.join('projects', 'done'));
  const wip = fs.readdirSync(path.join('projects', 'in-progress'));
  const files = [...done, ...wip];

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

function getPost({ slug }) {
  let projectPath;
  if (fs.existsSync(path.join('projects', 'done', slug + '.mdx'))) {
    projectPath = 'done';
  } else if (
    fs.existsSync(path.join('projects', 'in-progress', slug + '.mdx'))
  ) {
    projectPath = 'in-progress';
  } else {
    return new Error('project does not exist', slug);
  }

  const markdownFile = fs.readFileSync(
    path.join('projects', projectPath, slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Post({ params }) {
  const props = getPost(params);

  return (
    <article className="prose max-w-screen-lg mx-auto prose-h1:text-center prose-h4:m-1 px-6 prose-ul:px-6 pt-32 pb-12 mb-0 sm:prose-h2:ml-16 sm:prose-p:mx-16 sm:prose-h3:text-center sm:prose-h3:mt-24 md:pt-48 md:prose-ul:pl-24 lg:pb-16 lg:prose-ul:pl-44 lg:prose-p:mx-32 lg:prose-h2:ml-32 lg:prose-h3:text-2xl">
      <h1 className="text-5xl text-center font-bold tracking-tighter leading-tight sm:text-7xl">
        {props.frontMatter.title}
      </h1>
      <MDXRemote
        source={props.content}
        components={{ ProjectMeta, Techs, Image }}
        lazy
      />
    </article>
  );
}

export async function generateMetadata({ params }) {
  const blog = getPost(params);

  return {
    title: `Bi Nguyen - ${blog.frontMatter.title}`,
    description: blog.frontMatter.description,
  };
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { MDXRemote } from 'next-mdx-remote/rsc';
import ProjectMeta from '@/app/components/mdx/ProjectMeta';
import Techs from '@/app/components/mdx/Techs';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('projects'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

function getPost({ slug }) {
  const markdownFile = fs.readFileSync(
    path.join('projects', slug + '.mdx'),
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
    <article className="container prose prose-stone prose-h1:text-center prose-table:w-full">
      <h1 className="text-7xl text-center pt-32 pb-12 lg:pt-48 lg:pb-16 font-bold tracking-tighter leading-tight">
        {props.frontMatter.title}
      </h1>
      <MDXRemote source={props.content} components={{ ProjectMeta, Techs }} />
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

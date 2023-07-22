import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ProjectMeta from '@/app/components/mdx/ProjectMeta';
import Techs from '@/app/components/mdx/Techs';
import Content from '@/app/components/mdx/Content';

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
    <article className="prose prose-h1:text-center prose-img:mx-auto px-6 pt-32 pb-12 mb-0 max-w-screen-2xl md:pt-48 lg:pb-16">
      <h1 className="text-5xl text-center font-bold tracking-tighter leading-tight sm:text-7xl">
        {props.frontMatter.title}
      </h1>
      <MDXRemote
        source={props.content}
        components={{ ProjectMeta, Techs, Content }}
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

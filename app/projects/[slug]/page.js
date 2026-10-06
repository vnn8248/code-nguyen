import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import ProjectMeta from "@/app/components/mdx/ProjectMeta";
import Techs from "@/app/components/mdx/Techs";
import Datawrapper from "@/app/components/mdx/Datawrapper";
import Image from "next/image";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const done = fs.readdirSync(path.join("projects", "done"));
  const wip = fs.readdirSync(path.join("projects", "in-progress"));
  const past = fs.readdirSync(path.join("projects", "past"));

  const files = [...done, ...wip, ...past];

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }) {
  let projectPath;
  if (fs.existsSync(path.join("projects", "done", slug + ".mdx"))) {
    projectPath = "done";
  } else if (
    fs.existsSync(path.join("projects", "in-progress", slug + ".mdx"))
  ) {
    projectPath = "in-progress";
  } else if (fs.existsSync(path.join("projects", "past", slug + ".mdx"))) {
    projectPath = "past";
  } else {
    return new Error("project does not exist", slug);
  }

  const markdownFile = fs.readFileSync(
    path.join("projects", projectPath, slug + ".mdx"),
    "utf-8",
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
    <article className="prose max-w-screen-lg mx-auto prose-h1:text-center prose-h4:m-1 px-6 prose-ul:px-6 prose-ol:px-6 prose-li:text-[clamp(1rem,0.8852rem+0.4898vw,1.375rem)] pt-32 pb-12 mb-0 sm:prose-h2:ml-16 sm:prose-p:mx-16 sm:prose-h3:text-center sm:prose-h3:mt-24 md:pt-48 md:prose-ul:pl-24 md:prose-ol:pl-24 lg:pb-16 lg:prose-ul:pl-44 lg:prose-ol:pl-44 lg:prose-p:mx-32 lg:prose-h2:ml-32 lg:prose-h3:text-2xl [&>h4]:mt-10 [&>h4]:mb-4 sm:[&>h4]:mx-16 lg:[&>h4]:mx-32 [&>h5]:mt-8 [&>h5]:mb-2 [&>h5]:text-lg [&>h5]:font-semibold sm:[&>h5]:mx-16 lg:[&>h5]:mx-32 prose-table:w-auto prose-table:mx-auto">
      <h1 className="text-5xl text-center font-bold tracking-tighter leading-tight sm:text-7xl">
        {props.frontMatter.title}
      </h1>
      <MDXRemote
        source={props.content}
        components={{ ProjectMeta, Techs, Image, Datawrapper }}
        options={{
          mdxOptions: { remarkPlugins: [remarkGfm] },
          // Posts pass JS values to components (e.g. team={[...]}), which
          // next-mdx-remote v6 blocks by default. Dangerous globals stay blocked.
          blockJS: false,
        }}
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

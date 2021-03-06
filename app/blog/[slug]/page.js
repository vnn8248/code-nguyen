import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('blog'));

    const paths = files.map((filename) => ({
        slug: filename.replace('.mdx', '')
    }));

    return paths;
}

function getPost({ slug }) {
    const markdownFile = fs.readFileSync(path.join('blog', slug + '.mdx'), 'utf-8');

    const { data: frontMatter, content } = matter(markdownFile);

    return {
        frontMatter,
        slug,
        content
    };
}

export async function generateMetadata({ params }) {
    const blog = getPost(params);

    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.description
    };
}

export default function BlogPost({ params }) {
    const props = getPost(params);

    return (
        <article className="prose max-w-screen-xl mx-auto prose-h1:text-center prose-h4:m-1 px-6 pt-32 pb-12 mb-0 sm:prose-h2:ml-16 sm:prose-p:mx-16 sm:prose-h3:text-center sm:prose-h3:mt-24 md:pt-48 lg:pb-16 lg:prose-p:mx-32 lg:prose-h2:ml-32 lg:prose-h3:text-2xl">
            <h1 className="text-5xl text-center font-bold tracking-tighter leading-tight sm:text-7xl">
                {props.frontMatter.title}
            </h1>
            <MDXRemote source={props.content} components={{}} lazy />
        </article>
    );
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Post from '../components/Post';

const getBlogs = () => {
    const blogDir = 'blog';

    const files = fs.readdirSync(path.join(blogDir));

    const blog = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');

        const { data: frontMatter } = matter(fileContent);

        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
        };
    });

    return blog;
};

const BlogPage = () => {
    const blog = getBlogs();

    return (
        <div className="content">
            <div className="text-7xl text-center pt-32 pb-12 md:pt-48 lg:pb-12 font-bold tracking-tightest leading-tight">
                <h1 className="">Blog</h1>
            </div>
            <div className="text-center px-12">
                <p>I like writing lol</p>
            </div>
            <div className="showcase-wrapper px-10 md:p-10">
                <div className="showcase grid grid-cols-3">
                    {blog.map((b) => {
                        return (
                            <Post
                                title={b.meta.title}
                                description={b.meta.description}
                                slug={b.slug}
                                src={b.meta.src}
                                key={b.slug}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;

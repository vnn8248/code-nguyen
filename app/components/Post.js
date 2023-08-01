import Link from 'next/link';
import Image from 'next/image';

const Post = ({ slug, title, description, src }) => {
    return (
        <Link
            href={`blog/${slug}`}
            className="col-start-2 rounded-xl faded cursor-pointer no-underline overflow-hidden relative transition-all ease-linear duration-300"
        >
            <div className="col-start-2 rounded-xl faded cursor-pointer no-underline overflow-hidden relative transition-all ease-linear duration-300">
                <div className="showcase-inner flex justify-start items-start relative h-full gap-3.5 p-6 md:p-10">
                    <div className="details flex flex-1 flex-col gap-4">
                        <div className="title font-bold flex relative">
                            <h4>{title}</h4>
                        </div>
                        <p className="description meta">{description}</p>
                    </div>
                    <div className="shot-holder h-full flex items-center">
                        <div className="overflow-hidden rounded">
                            <figure className="relative">
                                <Image src={src} width={100} height={100} className="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Post;

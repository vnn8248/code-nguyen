import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = (props) => {
    let start;
    let end;
    let bg;
    let w;
    let h;
    let text;

    // First project in grid
    if (props.position === 1) {
        bg = 'bg-[#40e2a1]';
        start = 'lg:col-start-1';
        end = 'lg:col-end-10';
        w = 810;
        h = 422;
    }

    // Second
    if (props.position === 2) {
        bg = 'bg-[#ff6666]';
        start = 'lg:col-start-11';
        end = 'lg:col-end-25';
        w = 1300;
        h = 600;
    }

    // Third
    if (props.position === 3) {
        bg = 'bg-[#7cb2e8]';
        start = 'lg:col-start-1';
        end = 'lg:col-end-15';
        w = 810;
        h = 422;
    }

    // Fourth
    if (props.position === 4) {
        bg = 'bg-[#ff69f8]';
        start = 'lg:col-start-16';
        end = 'lg:col-end-25';
        w = 1300;
        h = 600;
    }

    if (props.position === 5) {
        bg = 'bg-[#fcab36]';
        start = 'lg:col-start-1';
        end = 'lg:col-end-10';
        w = 810;
        h = 422;
    }

    if (props.position === 6) {
        bg = 'bg-[#665cbe]';
        start = 'lg:col-start-11';
        end = 'lg:col-end-25';
        w = 1300;
        h = 600;
        text = 'text-white';
    }

    return (
        <div className={`col-start-1 col-end-25 ${start} ${end} rounded-3xl text-slate-900`}>
            <Link
                href={`projects/${props.slug}`}
                className={`${bg} card  max-h-80 lg:max-h-550 rounded-3xl flex w-full relative cursor-pointer flex-col no-underline transition-all duration-500 bounce group sm:shadow-lg hover:sm:shadow-2xl hover:sm:translate-x-0 hover:sm:translate-y-[-3px]`}
            >
                <div className="card-wrap flex flex-col w-full h-full relative overflow-hidden rounded-3xl p-6 md:py-10 md:px-16">
                    <div className="info text-right flex flex-col z-30">
                        <span
                            className={`uppercase tracking-widest font-medium text-base ${
                                text ? text : ''
                            }`}
                        >
                            {props.projectCompany}
                        </span>
                        <h2 className={`font-bold ${text ? text : ''}`}>{props.projectName}</h2>
                    </div>
                    <div className="inner relative z-20 flex flex-1 items-end justify-center mt-10 group-hover:translate-x-0 group-hover:translate-y-4 transition-all duration-700 bounce">
                        <div className="image-holder mx-auto w-full max-w-screen-xl">
                            <figure className="relative">
                                <Image
                                    src={props.imageSrc}
                                    width={w}
                                    height={h}
                                    loading="lazy"
                                    alt={props.imageAlt}
                                    className="max-w-max rounded-xl relative z-20 opacity-100 transition-all duration-200 ease-in-out"
                                ></Image>
                            </figure>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;

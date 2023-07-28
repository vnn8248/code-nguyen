import React from 'react';
import PersonalProject from '../components/PersonalProject';

export const metadata = {
    title: 'Personal Projects'
};

const PersonalPage = () => {
    return (
        <div className="content">
            <div className="text-7xl text-center pt-32 pb-12 md:pt-48 lg:pb-12 font-bold tracking-tightest leading-tight">
                <h1 className="">Personal projects.</h1>
            </div>
            <div className="text-center px-12">
                <p>I'm passionate about creating things for others to enjoy.</p>
            </div>
            <div className="showcase-wrapper px-10 md:p-10">
                <div className="showcase grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 max-w-screen-2xl mx-auto my-20 gap-10">
                    <PersonalProject
                        title="Code Nguyen"
                        src="/icons/avataaars.svg"
                        description="My first portfolio!"
                        url="https://www.codenguyen.com/"
                        comingSoon={false}
                    />
                    <PersonalProject
                        title="We Are The Schnguyenies"
                        src="/projects/whitesands.png"
                        description="A custom website for my wife and I."
                        url="https://www.wearetheschnguyenies.com/"
                        comingSoon={false}
                    />
                    <PersonalProject
                        title="Pickup At The Park"
                        src="/icons/boots.svg"
                        description="My Substack about The Beautiful Game."
                        url="https://binguyen.substack.com/"
                        comingSoon={false}
                    />
                    <PersonalProject
                        title="Fear & Gluttony"
                        src="/projects/gluttony.jpeg"
                        description="My Substack about my food adventures."
                        url="https://fearandgluttony.substack.com/"
                        comingSoon={false}
                    />
                    <PersonalProject
                        title="Hip Hop Time Travelers"
                        src="/icons/backpack.svg"
                        description="My Substack about the greatest rabbit hole I've ever fell down - 90's Hip Hop."
                        url="https://fearandgluttony.substack.com/"
                        comingSoon={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalPage;

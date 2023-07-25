'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
});

const ProjectMeta = async (props) => {
  let hover = false;

  useEffect(() => {
      console.log(hover);
  }, [hover]);

  const handleHover = () => {
    hover = !hover
  };

  const users = await Promise.all(props.team.map(async (p) => {
    const user = await octokit.request(`GET /users/${p.user}`, {
      username: p.user,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    return user.data;
  }));



  return (
    <div className="grid p-0 mx-auto w-full grid-cols-24 max-w-screen-2xl">
      <div className="item col-start-1 col-end-25 md:col-start-3 md:col-end-23 lg:col-start-5 lg:col-end-22 lg:pb-0">
        <div className="overview pt-6 sm:flex sm:flex-row sm:justify-center">
          <div className="mb-5 mx-5 block text-sm md:inline-block lg:text-lg lg:mx-10">
            <div className="title mb-3.5 meta font-bold">Timeline</div>
            <div className="inner">{props.timeline}</div>
          </div>
          <div className="mb-5 mx-5 block text-sm md:inline-block lg:text-lg lg:mx-10">
            <div className="title mb-3.5 meta font-bold">Team</div>
            <div className="inner flex flex-row ">{users.map(i => {
              return (
                <div key={i.login}>
                  <div className={hover ? 'block' : 'hidden'}>
                    <h1>{i.login}</h1>
                  </div>
                  <Image 
                    src={i.avatar_url}
                    alt={i.login}
                    width={40}
                    height={40}
                    loading='lazy'
                    className='my-0 mr-2 rounded-full border-2'
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                  />
                </div>
              )
            })}</div>
          </div>
          <div className="mb-5 mx-5 block text-sm md:inline-block lg:text-lg lg:mx-10">
            <div className="title mb-3.5 meta font-bold">Role</div>
            <div className="inner">{props.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMeta;

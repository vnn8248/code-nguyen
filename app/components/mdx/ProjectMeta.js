import React from 'react';

const ProjectMeta = (props) => {
  return (
    <div className="grid p-0 mx-auto w-full grid-cols-24 max-w-screen-2xl">
      <div className="item col-start-1 col-end-25 md:col-start-3 md:col-end-23 lg:col-start-8 lg:col-end-19 lg:pb-0">
        <div className="overview pt-6 md:flex md:flex-row md:justify-center">
          <div className="mb-5 block md:inline-block mx-5">
            <div className="title text-sm mb-3.5 meta font-bold">Timeline</div>
            <div className="inner text-sm">{props.timeline}</div>
          </div>
          <div className="mb-5 block md:inline-block mx-5">
            <div className="title text-sm mb-3.5 meta font-bold">Team</div>
            <div className="inner text-sm">{props.team}</div>
          </div>
          <div className="mb-5 block md:inline-block mx-5">
            <div className="title text-sm mb-3.5 meta font-bold">Role</div>
            <div className="inner text-sm">{props.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMeta;

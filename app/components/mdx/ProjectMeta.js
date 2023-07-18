import React from 'react';

const ProjectMeta = (props) => {
  return (
    <div className="grid p-0 mx-auto w-full grid-cols-24 max-w-screen-2xl">
      <div className="item lg:col-start-8 lg:col-end-19 lg:pb-0">
        <div className="overview flex items-start justify-center pt-6">
          <div className="flex-1 mb-5">
            <div className="title text-sm mb-3.5 meta">Timeline</div>
            <div className="inner meta">{props.timeline}</div>
          </div>
          <div className="flex-1 mb-5">
            <div className="title text-sm mb-3.5 meta">Team</div>
            <div className="inner meta">{props.team}</div>
          </div>
          <div className="flex-1 mb-5">
            <div className="title text-sm mb-3.5 meta">Role</div>
            <div className="inner meta">{props.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMeta;

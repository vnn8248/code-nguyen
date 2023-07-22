import React from 'react';

const Content = (props) => {
  return (
    <div className="md:px-16">
      <h2>{props.heading}</h2>
      {props.paragraphs ? (
        props.paragraphs.map((p, i) => {
          return <p key={i}>{p}</p>;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Content;

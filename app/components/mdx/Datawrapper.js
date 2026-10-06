"use client";

import React, { useEffect } from "react";

// Embeds a Datawrapper chart. Replaces the HTML embed code that Datawrapper
// provides, which MDX can't compile, and keeps its auto-resizing behavior.
const Datawrapper = ({ id, version = 1, title, ariaLabel, height }) => {
  useEffect(() => {
    const resize = (e) => {
      const heights = e.data?.["datawrapper-height"];
      if (!heights || !heights[id]) return;

      const iframe = document.getElementById(`datawrapper-chart-${id}`);
      if (iframe && iframe.contentWindow === e.source) {
        iframe.style.height = `${heights[id]}px`;
      }
    };

    window.addEventListener("message", resize);
    return () => window.removeEventListener("message", resize);
  }, [id]);

  return (
    <iframe
      title={title}
      aria-label={ariaLabel}
      id={`datawrapper-chart-${id}`}
      src={`https://datawrapper.dwcdn.net/${id}/${version}/`}
      scrolling="no"
      frameBorder="0"
      style={{ width: 0, minWidth: "100%", border: "none" }}
      height={height}
      data-external="1"
      className="my-8"
    />
  );
};

export default Datawrapper;

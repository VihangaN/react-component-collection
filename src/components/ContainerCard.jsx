import React from "react";

export default function ContainerCard({
  title,
  component,
  slug,
  author,
  gh_handle,
}) {
  return (
    <div className="card-base">
        <div className="top-bar">
        <img src={`https://github.com/${gh_handle}.png`} alt="" />
        <div className="details"> {title} by <span className="handle">&nbsp;@{gh_handle} </span></div>
        </div>
        <div className="card_component">
            {component}
        </div>
     
     
    </div>
  );
}

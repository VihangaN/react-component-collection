import React from "react";
import { useNavigate } from "react-router-dom";


export default function ContainerCard({ title, slug, gh_handle }) {

    const navigate = useNavigate();
 
  return (
    <div className="card-base" onClick={()=>navigate(`${slug}-by-${gh_handle}`)}>
      <div className="top-bar">
        <img src={`https://github.com/${gh_handle}.png`} alt="" />
        <div className="details">
          <a href={`https://github.com/${gh_handle}`} target="_blank"><span className="handle">&nbsp;@{gh_handle} </span></a>
        </div>
      </div>
      <div className="card_title">{title}</div>
    </div>
  );
}

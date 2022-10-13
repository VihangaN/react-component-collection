import React from "react";

export default function Container({ children }) {
  return (
    <div className="container-base">
      <div className="container-left"> {children[0]}</div>
      <div className="container-right"> {children[1]}</div>
    </div>
  );
}

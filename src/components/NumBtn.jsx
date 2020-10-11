import React from "react";
import "./NumBtn.css"

export const NumBtn = props => (
  <div className="num-btn" onClick={() => props.handleClick(props.children)}>
    {props.children}
  </div>
);
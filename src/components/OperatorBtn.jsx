import React from "react";
import "./OperatorBtn.css"

export const OperatorBtn = props => (
  <div className="operator-btn" onClick={() => props.handleClick(props.children)}>
    {props.children}
  </div>
);
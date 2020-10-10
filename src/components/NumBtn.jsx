import React from "react";
import "./NumBtn.css"

const NumBtn = props => (
  <div classname = "num-btn">
    {props.children}
  </div>
);

export default NumBtn;
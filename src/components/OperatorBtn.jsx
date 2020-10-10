import React from "react";
import "./OperatorBtn.css"

const OperatorBtn = props => (
  <div classname="operator-btn">
    {props.children}
  </div>
);

export default OperatorBtn;
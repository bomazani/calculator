import React from "react";
import "./Button.css"

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

const Button = props => (
  <div 
    classname={`button ${
      isOperator(props.children) ? null : "operator"
    }`}
  >
    {props.children}
  </div>
);

export default Button;
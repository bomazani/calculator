import React from "react";
import "./EqualBtn.css"

export const EqualBtn = props => (
    <div className="equal-btn" onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
);

import React from "react";
import "./ZeroBtn.css"

export const ZeroBtn = props => (
    <div className="zero-btn" onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
);

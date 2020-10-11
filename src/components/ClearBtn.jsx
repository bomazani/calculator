import React from "react";
import "./ClearBtn.css"

export const ClearBtn = props => (
    <div className="clear-btn" onClick={() => props.handleClear(props.children)}>
        {props.children}
    </div>
);
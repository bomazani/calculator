import React from "react";
import "./BurgerMenu.css";

export const BurgerMenu = props => (
    <div className="burger-menu">
        {props.children}
    </div>
);
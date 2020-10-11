import React from "react";
import "./BurgerMenu.css";

export const BurgerMenu = props => (
    <div className="burger-menu">
        <div className="burger-icon">
            <div className="menu-icon">___</div>
            <div className="menu-icon">___</div>
            <div className="menu-icon">___</div>
        </div>

        <div className="calc-history">
            {props.children}
        </div>
    </div>
);
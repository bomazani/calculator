import React from "react";
import "./BurgerMenu.css";

import React, { Component } from 'react';
import './BurgerMenu.css';

const Nav = styled.nav`
`


const Navbar = () => {
    return (
        <div>
            <div className="logo">
                <ul>
                    <li>Home</li>
                    <li>Themes</li>
                    <li>History</li>
                </ul>
            </div>
        </div>
    )
}

// export const BurgerMenu = props => (
//     <div className="burger-menu">
//         <div className="burger-icon">
//             <div className="menu-icon">___</div>
//             <div className="menu-icon">___</div>
//             <div className="menu-icon">___</div>
//         </div>

//         <div className="calc-history">
//             {props.children}
//         </div>
//     </div>
// );

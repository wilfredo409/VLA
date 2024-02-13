import React from "react";
import {Link, NavLink} from "react-router-dom";

function BandejaMenu(){

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Us</NavLink>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default BandejaMenu;
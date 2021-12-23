import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu
} from "./NavElements.js";
import { IoLogoOctocat } from "react-icons/io";
import logo from '../img/transis-logo.png'


const Navbar = () => {

    return (
        <>
           <Nav>
            <NavLogo to="/">
            <img src={logo} alt="transis-logo" width="75" height="75"/>
            TRANSIS DIGITAL
            </NavLogo>
            <NavLink href="http://localhost:3006/" activestyle>
            Launch App
            </NavLink>
           </Nav> 
        </>
    );
};
export default Navbar;
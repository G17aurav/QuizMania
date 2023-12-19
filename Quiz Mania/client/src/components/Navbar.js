// import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo-no-background.png"
import "./Navbar.css"

const Navbar = ()=>{
    return(
        <div className="nav">
            <div className="">
                <img src={logo} alt="Quiz-Mania" id='logo'></img>
            </div>
            <div className='list'>
                <NavLink to="" className="items ">Home</NavLink>
                <NavLink to="/services" className="items">Services</NavLink>
                <NavLink to="/contactus" className="items">Contact Us</NavLink>
                <NavLink to="/login" className="items">Login</NavLink>
                <NavLink to="/register" className="items">Signup</NavLink>
               
            </div>
        </div>
    );
}

export default Navbar;
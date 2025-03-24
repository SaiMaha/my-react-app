import React from "react"
import { NavLink } from "react-router-dom"

const Navbar=()=>{
    return(
        <nav className="bg-[#0155A0] h-[70px] px-10">
            <ul className="flex gap-10 items-center h-full text-white">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
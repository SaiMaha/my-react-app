import React from "react"

const Navbar=()=>{
    return(
        <nav className="bg-[#0155A0] h-[70px] px-10">
            <ul className="flex gap-10 items-center h-full text-white">
                <li><a href="#">Home</a></li>
                <li><a href="./services">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
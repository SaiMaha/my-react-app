import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom';
const Profile = () => {
  return (
    <div className='flex'>
        <aside className='border-2 bg-[#fdba74] h-[300px] w-[20%]'>
            <ul>
                
                <li >
                <NavLink to={"/profile"} className='flex items-center gap-1'>
                    <span><CgProfile /></span>
                    <span>My Profile</span>
                </NavLink>
                </li>
                
                <li className='flex items-center gap-1'>
                <NavLink to={"setting"} className='flex items-center gap-1'>
                    <span><IoSettingsOutline /></span>
                    <span>Settings</span>
                </NavLink>
                </li>
                <NavLink to={"/"}>
                <li className='flex items-center gap-1'>
                    <span><MdLogout /></span>
                    <span>Log Out</span>
                </li>
                </NavLink>
            </ul>
        </aside>
        <aside className='border-2 bg-[#fcd34d] h-[300px] w-[80%]'>
            <Outlet/>
        </aside>
    </div>
  )
}

export default Profile
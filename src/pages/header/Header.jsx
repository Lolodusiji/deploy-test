import React, { useState } from 'react'
import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai';
import Calender from './Calender';
// import { BsFillPersonFill } from "react-icons/bs";
import {MdClose} from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi";

function Header({menu, settoggleSidebar, toggleSidebar, ...props }){

  
  return (
    <div className="header">
        <div className="logo">
            <img src="/imgs/SAVANNA.svg"/>
            {/* <div className="logo_name">savanna</div> */}
        </div>
        <Calender/>
        <div className="hamburger" onClick={()=>{settoggleSidebar(!toggleSidebar)}}>
       {toggleSidebar ? <MdClose id='ham-burger' color='white' size={24} cursor='pointer' display='none' /> : <GiHamburgerMenu id='ham-burger' color='white' size={24} cursor='pointer' display='none' />}
        </div>
        {menu == true &&
            <AiOutlineMenu color='white' size={24} onClick={()=>{props.active()}}/>
        }
    </div>
  )
}

export default Header
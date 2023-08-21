import React, { useState } from 'react'
import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai';
import Calender from './Calender';
// import { BsFillPersonFill } from "react-icons/bs";
// import {LiaTimesSolid} from "react-icon/lia";
import {GiHamburgerMenu} from "react-icons/gi";

function Header({menu, settoggleSidebar, toggleSidebar, ...props }){

  
  return (
    <div className="header">
        <div className="logo">
            <img src="/imgs/image 1508.png"/>
            <div className="logo_name">savanna</div>
        </div>
        <Calender/>
        <GiHamburgerMenu id='ham-burger' color='white' size={24} cursor='pointer' display='none' onClick={()=>{settoggleSidebar(!toggleSidebar)}}/>
        {menu == true &&
            <AiOutlineMenu color='white' size={24} onClick={()=>{props.active()}}/>
        }
    </div>
  )
}

export default Header
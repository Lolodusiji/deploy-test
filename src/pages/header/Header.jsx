import React, { useState } from 'react'
import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai';

function Header({menu,...props}) {
  
  return (
    <div className="header">
        <div className="logo">
            <img src="/imgs/image 1508.png"/>
            <div className="logo_name">savanna</div>
        </div>
        {menu == true &&
            <AiOutlineMenu color='white' size={24} onClick={()=>{props.active()}}/>
        }
    </div>
  )
}

export default Header
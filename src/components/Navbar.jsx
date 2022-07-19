import React from "react";
import { VscArrowSwap } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import avatar from "../assets/imgx.jpg";
import {BiRotateLeft } from "react-icons/bi";
import { NavLink as Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  const reloadPage = () => {
    window.location.reload(true)
  }
  return (
    <div className="navbar">
      <div className="avatar">
        <img src={avatar} alt="" />
        <div className="info">
        
                      Admin
          <h4 className="title"></h4>
          <h6 className="status">Robel</h6>
          
        </div>
      </div>
    
      <div className="quick">

  

  <button onClick={reloadPage}>
  Reload
    <BiRotateLeft  />
  </button>
 
</div>
     
      <div className="quick">

      <NavLink style={{ textDecoration: 'none' }} to='MTable' activeStyle>  

        <button>
          <VscArrowSwap />
          Quick Transactions
        </button>
        </NavLink>
      </div>
      <div className="navbar__info">
     
        <IoMdNotificationsOutline />
        <FiMail />
        <div className="search__bar">
          <input type="text" placeholder="Search" />
          <FaSearch />
        </div>
      </div>
    </div>
  );
}

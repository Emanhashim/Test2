import React from "react";
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiFillSetting, AiFillAppstore } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
export default function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    
  
   
    window.location.href = "/logina";}
  const links = [
    {
      title: "Dashboard",
      icon: SiGoogleanalytics,
    },
    {
      title: "Management ",
      icon: AiFillAppstore,
    },
    

    {
      title: "Transfer",
      icon: BiRocket,
    },
    {
      title: "Registration Form ",
      icon: BsCashStack,
    },

    {
      title: "Transactions",
      icon: FaWallet,
    },
    {title: "Settings",
    icon: AiFillSetting,
      
    },
    {
      title: "Logout",
      icon: FiLogOut,
    },
  ];
  return (
    <div className="sidebar">
      <div className="brand">
        <h2>
          Bazra<span>Motors</span>
        </h2>
      </div>
      <ul className="links">
        {links.slice(0,1).map((link) => {
          return (
            <li>
              <a href="/dash">
                {<link.icon />}
             
               { link.title}
              </a>
            </li>
            
            
          );
        })}
      </ul>
      <ul className="links">
        {links.slice(1,2).map((link) => {
          return (
            <li>
              <a href="/Mangemntx">
                {<link.icon />}
             
               { link.title}
              </a>
            </li>
            
            
          );
        })}
      </ul>
      <ul className="links">
        {links.slice(2,3).map((link) => {
          return (
            <li>
              <a href="amt">
                {<link.icon />}
             
               { link.title}
              </a>
            </li>
            
            
          );
        })}
      </ul>
      <ul className="links">
        {links.slice(3,4).map((link) => {
          return (
            <li>
              <a href="signup">
                {<link.icon />}
             
               { link.title}
              </a>
            </li>
            
            
          );
        })}
      </ul>
      <ul className="links">
        {links.slice(4,5).map((link) => {
          return (
            <li>
              <a href="tHistoryAm">
                {<link.icon />}
             
               { link.title}
              </a>
            </li>
            
            
          );
        })}
      </ul>
      <ul className="links">
        {links.slice(5,6).map((link) => {
          return (
            <li>
              <a href="logina">
                {<link.icon />}
             
               { link.title}
              </a>
            </li>
            
            
          );
        })}
      </ul>
      <ul className="links">
        {links.slice(6,7).map((link) => { 
          return (
            <li>
              <a onClick={handleLogout} >
                {<link.icon />}
                 
               { link.title}
                
              </a>
            </li>
            
            
          );
        })}
      </ul>
    </div>
  );
}
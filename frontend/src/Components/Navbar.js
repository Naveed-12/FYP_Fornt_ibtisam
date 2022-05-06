import React, { useEffect} from "react";
import "../Style/Navbar.css";
import { useHistory } from "react-router-dom";
import logo from '../images/Subtract.png';
import Logo from "./Logo.js";
export default function Navbar() {
  const history=useHistory();

  return (
    <div className="navbar_main_container bg-white pb-2 border-b-2">
      <Logo source={logo}/>
      <div className="navbar_container_items" id="nav">
        <ul className="navbar_container_items_ul flex justify-around text-lg ">
         <div className='flex navbar_links' style={{marginLeft:'25%'}}>
          <li onClick={()=>history.push('/')}  >Home</li>
          <li> <a target="_blank" href='/map' className='pl-16 '>Map</a></li>
          <li onClick={()=>history.push('/areaguides')} className='pl-16 ' style={{color:'#2666CF'}}>Area Guides</li>
          <li onClick={()=>history.push('/aboutus')} className='pl-16 '>About Us</li>
          </div>
         <div className="flex space-x-6 navbar_links" style={{marginLeft:'15%'}}>
         <li onClick={()=>history.push('/SignInform')} style={{color:'#2666CF'}} className=''>Register</li>
         <li>|</li>
          <li onClick={()=>history.push('/signin')} className=''>Log In</li>
         </div>
        </ul>

      </div>
    </div>
  );
}
import React, { useEffect} from "react";
import "../Style/Navbar.css";
import logo from "../images/Logo2.PNG";
import { useHistory } from "react-router-dom";
export default function Navbar() {
  const history=useHistory();

  return (
    <div className="navbar_main_container">
      <div className="navbar_container_logo">
        <span onClick={()=>history.push('/home')} style={{cursor:'pointer'}}>Property Ticket</span>
      </div>
      <div className="navbar_container_items" id="nav">
        <ul className="navbar_container_items_ul">
          <li onClick={()=>history.push('/home')}>Home</li>
          <li> <a target="_blank" href='/map'>Map</a></li>
          <li onClick={()=>history.push('/areaguides')} >Area Guides</li>
          <li onClick={()=>history.push('/aboutus')}>About Us</li>
          <li onClick={()=>history.push('/signin')}>Sign in</li>
          <li onClick={()=>history.push('/sigin')}>Sign out</li>
        </ul>

      </div>
    </div>
  );
}
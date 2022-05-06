import React from "react";
import Navbar from "./Navbar";
import logo1 from "../images/Subtract-1.png";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";
import AnyQuery from "./AnyQuery";
function Footer1() {
  const history = useHistory();
  return (
    <div className="flex justify-between" style={{background:'#2C3333',position:'relative',height:'400px'}}>
        <div>
      <Logo source={logo1} white='white'/>
      <ul className="navbar_container_items_ul space-y-3 text-lg flex flex-col text-black mt-10">
        <div className="flex navbar_links pl-16" style={{ marginLeft: "" }}>
          <li onClick={() => history.push("/home")}>Home</li>
          <li>
            {" "}
            <a target="_blank" href="/map" className="pl-28 ">
              Map
            </a>
          </li>
        </div>
        <div className="flex navbar_links">
          <li
            onClick={() => history.push("/areaguides")}
            className="pl-16 "
            style={{ color: "#2666CF" }}
          >
            Area Guides
          </li>
          <li onClick={() => history.push("/aboutus")} className="pl-14 ">
            About Us
          </li>
        </div>
        <div
          className="flex space-x-6 navbar_links"
          style={{ marginLeft: "" }}
        >
          <li
            onClick={() => history.push("/signup")}
            style={{ color: "#2666CF" }}
            className="pl-16"
          >
            Register
          </li>
          <li onClick={() => history.push("/signin")} className="pl-16">
            Log In
          </li>
        </div>
      </ul>
      </div>
      <AnyQuery/>
    </div>
  );
}

export default Footer1;

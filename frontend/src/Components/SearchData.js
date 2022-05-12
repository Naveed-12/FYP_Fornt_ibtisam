import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Style/searchdata.css";
import Navbar from "./Navbar";
import SearchDataContent from "./SearchDataContent";
import arrow from "../images/arrow-down.png";
import arrow1 from "../images/up-arrow.png";
import Footer from "./Footer";
import axios from "axios";
// import Header from './Header';
function SearchData(props) {
  const [City, Setcity] = useState();
  const [Sector, Setsector] = useState();
  const [Type, Settype] = useState();
  const [Size, Setsize] = useState();
  const [Price, Setprice] = useState();

  const [Properties, Setproperties] = useState([]);



  const { search } = useLocation();
  const parms = new URLSearchParams(search);
  const city = parms.get("city");
  // const area=parms.get('area');
  // const location=parms.get('location');
  const sector = parms.get("sector");
  const type = parms.get("type");
  const size = parms.get("size");
  const price = parms.get("price");
  // const id=parms.get('area');
  console.log(city, sector, size, type, price);
  const toggle_arrow = () => {
    document.getElementById("search_header").style.transition =
      "opacity 1s ease";
    document.getElementById("search_header").style.display = "flex";
    document.getElementById("search_header").style.justifyContent =
      "space-arround";
    document.getElementById("search_header").style.alignItems = "center";

    document.getElementById("arrow").style.display = "none";
    document.getElementById("arrow1").style.display = "flex";
    document.getElementById("arrow1").style.justifyContent = "center";
    document.getElementById("arrow1").style.alignItems = "center";
  };
  const toggle_arrow1 = () => {
    document.getElementById("search_header").style.display = "none";
    document.getElementById("arrow1").style.display = "none";
    document.getElementById("arrow").style.display = "flex";
    document.getElementById("arrow").style.justifyContent = "center";
    document.getElementById("arrow").style.alignItems = "center";
  };
  useEffect(() => {
    
    const getProperties = async()=>{
      const data = axios.get("http://localhost:5000/api/property/getproperties", {
      }).then(res =>{
        Setproperties(res.data)
        console.log("Properties are state :  ", Properties);
    })
  }
  getProperties()
  }, [])
  

  return (
    <div className="SeachData_main">
      <Navbar />
      <div className="arraw-down" id="arrow">
        <img src={arrow} onClick={toggle_arrow} />
      </div>
      <div className="arrow-up" style={{ display: "none" }} id="arrow1">
        <img src={arrow1} onClick={toggle_arrow1} />
      </div>
      <div
        className="Search_header"
        id="search_header"
        style={{ display: "none" }}
      >
        <form className="Search_header_form">
          <div>
            <select
              className="select_city"
              onChange={(e) => props.Setcity(e.target.value)}
            >
              <option value="" disabled selected>
                Select City
              </option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Islamabad</option>
            </select>
            <input type="text" disabled placeholder="Bahria Town" />
           
          </div>
          <div>
            <select
              className="select_type"
              onChange={(e) => props.Settype(e.target.value)}
            >
              <option value="" disabled selected>
                Select Type
              </option>
              <option value="House">House</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot">Plot</option>
            </select>
            <select
              className="select_size"
              onChange={(e) => props.Setsize(e.target.value)}
            >
              <option value="" disabled selected>
                Select Size
              </option>
              <option value="5 ">5 marla</option>
              <option value="10">10 marla</option>
            </select>
            <select
              className="select_price"
              onChange={(e) => props.Setprice(e.target.value)}
            >
            <option value="" disabled selected>
            Select Price
          </option>
          <option value="Rs 2.8 Crore">Rs 2.8 Crore</option>
          <option value="Rs 3 Crore">Rs 3 Crore</option>
          <option value="Rs 2.5 Crore">Rs 2.5 Crore</option>
          <option value="Rs 2 Crore">Rs 2 Crore</option>
          <option value="Rs 6 Crore">Rs 6 Crore</option>
          <option value="Rs 2.3 Crore">Rs 2.3 Crore</option>
          <option value="Rs 2.2 Crore">Rs 2.2 Crore</option>
          <option value="Rs 3.3 Crore">Rs 3.3 Crore</option>
          <option value="Rs 2.2 Crore">Rs 2.2 Crore</option>
        </select>
          </div>
          <a
            href={`/searchdata?city=${City}&sector=${Sector}&type=${Type}&size=${Size}&price=${Price}`}
          >
            Find
          </a>
        </form>
      </div>
      <div className="SearchDataContainer_box1">
      {
        Properties.map((property)=>(
            property.City === props.City&& property.Type === props.Type &&
            <SearchDataContent 
              property = {property}
              setSelectedProperty = {props.setSelectedProperty}
              Image = {property.image}
              City={property.City}
              Address = {property.Address}
              Area= {property.Area}
              Type={property.Type}
              Size = {property.land_size}
              Bedrooms = {property.Bedrooms}
              Baths = {property.Baths}
              Price = {property.Price}
            />
        ))
      }


      </div>
      <Footer />
    </div>
  );
}

export default SearchData;

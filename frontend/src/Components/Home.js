import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Style/Home.css";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Homebanner1 from "./Homebanner1";
import Homebanner2 from "./Homebanner2";
import Homebanner3 from "./Homebanner3";
import Footer1 from "./Footer1";
function Home() {
  const [City, Setcity] = useState();
  const [Sector, Setsector] = useState();
  const [Type, Settype] = useState();
  const [Size, Setsize] = useState();
  const [Price, Setprice] = useState();
  return (
    <React.Fragment>
      <Navbar />
      <div className="home-container flex" style={{ background: "#9DB4FB" }}>
        <div
          className="home-title bg-white"
          style={{ paddingTop: "8%", paddingLeft: "5%", width: "50%" }}
        >
          <h1 className="font-semibold" style={{ fontSize: "60px" }}>
            <p className="font-semibold">Diving</p>
            <p className="font-semibold"> into the future </p>of digital{" "}
            <p className="font-semibold">Real Estate.</p>
          </h1>
          <p className="text-2xl font-semibold mt-5">
            <p className="font-semibold">Search confidently</p> with your
            trusted source for<p className="font-semibold"> sale and rent.</p>
          </p>
        </div>
        <div style={{ paddingTop: "8%" }}>
          <img
            className="absolute right-0"
            style={{ minHeight: "93vh" }}
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
      </div>
      <div
        className="mt-32"
        style={{ width: "45%", minHeight: "135px", background: "#9DB4FB" }}
      ></div>

      <div className="home_search_container flex flex-col items-center justify-center">
        <h1 style={{fontFamily:'Inter, sans-serif',fontSize:'40px',color:'#d8f1a0'}} className='font-semibold'>Search Your Future Property</h1>
        <form className="homeSearch_form w-3/5 mx-auto  mt-12  flex flex-col justify-center items-center space-y-3">
          <div className="flex justify-around w-full">
            <select className="w-2/5 rounded h-10 p-1 focus:border-2 focus:border-slate-500 hover:cursor-pointer">
              <option disabled selected>
                Select Type
              </option>
              <option>Commercial</option>
              <option>House</option>
              <option>Plot</option>
            </select>
            <select className="w-2/5 h-10 rounded p-1 focus:border-2 focus:border-slate-500 hover:cursor-pointer">
              <option disabled selected>
                Select City
              </option>
              <option>Lahore</option>
              <option>Islamabad</option>
              <option>Karachi</option>
            </select>
          </div>

          <div className="flex justify-around w-full">
            <select className="w-2/5 h-10 rounded p-1 focus:border-2 focus:border-slate-500 hover:cursor-pointer">
              <option value="" disabled selected>
                Select Size
              </option>
              <option value="5 ">5 marla</option>
              <option value="10">10 marla</option>
              <option value="15">15 marla</option>
              <option value="1">1 kanal</option>
              <option value="1.5">1.5 kanal</option>
            </select>
            <input
              type="text"
              placeholder="Bahria Town"
              className="w-2/5 rounded p-1 focus:border-2 h-10 focus:border-slate-500 hover:cursor-pointer"
            />
          </div>
          <select className="select_price rounded p-1 focus:border-2 focus:border-slate-500 hover:cursor-pointer h-10">
            <option value="" disabled selected>
              Select Price
            </option>
            <option value="1,00,00,000">1,00,00,000</option>
            <option value="2,00,00,000">2,00,00,000</option>
            <option value="3,00,00,000">3,00,00,000</option>
            <option value="4,00,00,000">4,00,00,000</option>
            <option value="5,00,00,000">5,00,00,000</option>
            <option value="6,00,00,000">6,00,00,000</option>
            <option value="7,00,00,000">7,00,00,000</option>
            <option value="8,00,00,000">8,00,00,000</option>
            <option value="9,00,00,000">9,00,00,000</option>
            <option value="10,00,00,000">10,00,00,000</option>
          </select>
          <button className="border-2 home_search_button font-semibold border-slate-400 w-1/3 hover:border-[#D8F1A0] duration-300">
            {" "}
            <a
              className="Findbtn"
              href={`/searchdata?city=${City}&sector=${Sector}&type=${Type}&size=${Size}&price=${Price}`}
              style={{fontFamily:'Inter, sans-serif'}}
            >
              Search
            </a>
          </button>
        </form>
      </div>
      <Homebanner1/>
      <Homebanner2/>
      <Homebanner3/>
      <Footer1 />
      {/* <Footer /> */}
    </React.Fragment>
  );
}
export default Home;

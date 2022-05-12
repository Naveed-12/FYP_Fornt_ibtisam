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


function Home(props) {
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
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "40px",
            color: "#d8f1a0",
          }}
          className="font-semibold"
        >
          Search Your Future Property
        </h1>
        <form className="homeSearch_form w-3/5 mx-auto  mt-12  flex flex-col justify-center items-center space-y-3">
          <div className="flex justify-around w-full">
            <select
              onChange={(e) => props.Settype(e.target.value)}
              className="w-2/5 rounded h-10 p-1 focus:border-2 focus:border-slate-500 hover:cursor-pointer"
            >
              <option disabled selected>
                Select Type
              </option>
              <option>Commercial</option>
              <option>House</option>
              <option>Plot</option>
            </select>
            <select
              onChange={(e) => props.Setcity(e.target.value)}
              className="w-2/5 h-10 rounded p-1 focus:border-2 focus:border-slate-500 hover:cursor-pointer"
            >
              <option disabled selected>
                Select City
              </option>
              <option>Lahore</option>
              <option>Islamabad</option>
              <option>Karachi</option>
            </select>
          </div>

          <div className="flex justify-around w-full">
            <select
              onChange={(e) => props.Setsize(e.target.value)}
              className="w-2/5 h-10 rounded p-1 focus:border-2 focus:border-slate-500 hover:cursor-pointer"
            >
              <option value="" disabled selected>
                Select Size
              </option>
              <option value="5 marla">5 marla</option>
              <option value="10 marla">10 marla</option>
            </select>
            <input
              type="text"
              placeholder="Bahria Town"
              className="w-2/5 rounded p-1 focus:border-2 h-10 focus:border-slate-500 hover:cursor-pointer"
            />
          </div>
          <select
            onChange={(e) => props.Setprice(e.target.value)}
            className="select_price rounded p-1 focus:border-2 focus:border-slate-500 hover:cursor-pointer h-10"
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
          <Link to = "/searchdata">
          <button className="border-2 btnhover" style={{paddingLeft:"100px", paddingRight:"100px"}}
          >
            {" "}
             Search
           
          </button></Link>
        </form>
      </div>
      <Homebanner1 />
      <Homebanner2 />
      <Homebanner3 />
      <Footer1 />
      {/* <Footer /> */}
    </React.Fragment>
  );
}
export default Home;

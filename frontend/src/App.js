import Header from "./Components/Header";
import "./App.css";
import Dbody from "./Components/Dbody";
import SignIn from "./Components/SignIn";
import SignInform from "./Components/form";
import AdminLogin from "./Components/AdminSignin";
import "./firebase/firebase";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./Components/Map";
import logo from "./images/Subtract.png";
import Area_guide from "./Components/Area_guide";
import MapData from "./Components/MapData";
import Area_details from "./Components/Area_details";
import SearchData from "./Components/SearchData";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import Logo from "./Components/Logo";
import { useState } from "react";

function App() {
  const [City, Setcity] = useState("");
  const [Sector, Setsector] = useState("");
  const [Type, Settype] = useState("");
  const [Size, Setsize] = useState("");
  const [Price, Setprice] = useState("");
  const [SelectedProprty,setSelectedProperty] = useState();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              Setsector={Setsector}
              Setcity={Setcity}
              Settype={Settype}
              Setsize={Setsize}
              Setprice={Setprice}
            />
          </Route>
          <Route exact path="/SignInform">
            <SignInform />
          </Route>
          <Route exact path="/Dashboard">
            <Navbar />
            <Dbody />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/adminlogin">
            <AdminLogin />
          </Route>
          <Route exact path="/Map">
            <Map />
          </Route>
          <Route path="/areaguides">
            <Area_guide />
          </Route>
          <Route path="/area_detail">
            <Area_details />
          </Route>
          <Route path="/mapdata">
            <MapData SelectedProprty = {SelectedProprty}/>
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/searchdata">
            <SearchData
              setSelectedProperty = {setSelectedProperty}
              Setcity={Setcity}
              City={City}
              Settype={Settype}
              Type={Type}
              Setsize ={Setsize}
              Size = {Size}
              Setprice = {Setprice}
              Price = {Price}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

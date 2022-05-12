import React from "react";
import "../Style/searchdata.css";
import img1 from "../images/bahria.jpg";
import bed from "../images/bedroom.png";
import bath from "../images/bathroom.png";
import kit from "../images/kitchen.png";
import arrow from "../images/right-arrow.png";
import { useHistory } from "react-router-dom";
function SearchDataContent(props) {
  const history = useHistory();
  return (
    <div className="search_data_container">
      <div className="seacrh_data_box">
        <div className="seacrh_data_box_content">
          <img src={props.Image} />
        </div>
        <div className="seacrh_data_box_content1">
          <span className="pkr">PKR</span>
          <span className="price">{props.Price}</span>
          <h3>{props.Address}</h3>
          <div className="seacrh_data_box_content1_logos">
            <div>
              <p>{props.Size}</p>
            </div>
            <div>
              <img src={bed} />
              <p>{props.Bedrooms} bed</p>
            </div>
            <div>
              <img src={bath} />
              <p>{props.Baths} bath</p>
            </div>
            <div>
              <img src={kit} />
              <p>1 kitchen</p>
            </div>
          </div>
          <p className="seacrh_data_box_content1_disc">
            Marla Luxurious Bungalow for Sale in DHA Lahore Property Overview 3
            Master Bedrooms with branded attached bathrooms. Designed walls and
            ceiling. All baths are equipped with imported Grohe fitting.{" "}
          </p>
          <div>
          <div>
              City:{props.City}
              
            </div>
          </div>
          <img
            src={arrow}
            className="arrow"
            onClick={() => {
              props.setSelectedProperty(props.property)
              history.push("/mapdata")}}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchDataContent;

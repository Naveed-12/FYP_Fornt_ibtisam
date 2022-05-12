import House_header from "./House_header"
import '../Style/MapData.css'
import House_icons from "./House_icons"
import House_img from "./House_img"
import House_details from "./House_details"
import Call from "./Call"
import { useLocation } from "react-router-dom"
import Footer from "./Footer"
import { useEffect } from "react"
function MapData(props) {
    const {search}=useLocation();
    const parms=new URLSearchParams(search);
    const id=parms.get('House_id');
    console.log(id);
    useEffect(() => {
        console.log("Selected Data : ", props.SelectedProprty)
      
    }, [])
    
    return (
        <div>
        <div className="mapdata_container">
            <House_header SelectedProprty = {props.SelectedProprty}/>
            <div className="border-bottom"></div>
            <House_icons SelectedProprty = {props.SelectedProprty}/>
            <House_img SelectedProprty = {props.SelectedProprty}/>
            <House_details SelectedProprty = {props.SelectedProprty}/>
            <Call/>
        </div>
        <Footer/>
        </div>
    )
}

export default MapData

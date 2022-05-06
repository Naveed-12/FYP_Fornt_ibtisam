function House_details() {
    return (
        <div className="house_details">
            <div className='house_detail_heading'><h2>Property Deatils</h2></div>
            <div className='house_detail_boxes_container'>
                <div className='house_detail_box1'>
                    <div className='box1'><span style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Type</span ><span style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>House</span></div>
                    <div className='box1'><span style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Area Sqr</span> <span style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>10 Maral</span></div>
                    <div className='box1'><span style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Fully Furnished</span></div>
                </div>
                <div className='box2'>
                    <span style={{fontSize:'20px'}}>Accessibilities</span>
                    <ul>
                        <li style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Water</li>
                        <li style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Gas</li>
                        <li style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Electricity</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default House_details

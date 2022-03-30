import React from 'react'
import '../Style/Footer.css'
import { useHistory } from 'react-router-dom'
export default function Footer() {
  const history=useHistory();
  return (
    <div className='footer_container'>
      {/* <footer>
        <div className="footer">
          <p className = "para6">Contact Us</p>
          <p className = "align"><i className="bi bi-geo-alt align"></i>  Wahdat Road, lahore</p>
          <p className = "align"><i className="bi bi-envelope align"></i>  naveesagheer101@gmail.com</p>
          <p className = "align"><i className="bi bi-telephone align"></i>0334-4138323</p>
          </div>
          </footer> */}
          <div className='footer_top'>
      <h2>Property Ticket</h2>
      <p style={{fontSize:'14px'}}>Property Ticket is a name that has been making news across oceans, on the cover of international papers & magazines for its construction marvels which is why we are the most preferred investment destination not only for Pakistanis but also in the eyes of expats as well as foreign investors. It is no surprise that we have won 10 accolades at the International Property Awards under various categories for our projects.</p>
      <div className='footer_icons'><i className="bi bi-facebook" style={{ fontSize: "30px", cursor: "pointer",color:'white' }}></i>
      <i class="bi bi-instagram ms-3" style={{ fontSize: "30px", cursor: "pointer",color:'white' }}></i>
      <i class="bi bi-twitter ms-3" style={{ fontSize: "30px", cursor: "pointer" ,color:'white'}}></i>
      <i class="bi bi-linkedin ms-3"style={{ fontSize: "30px", cursor: "pointer" ,color:'white'}}></i></div>
      </div>
      <div className='footer_bottom' style={{marginTop:'10px'}}>
        <div className='d-flex'style={{marginTop:'10px'}}><p className='copy_right'style={{fontSize:'14px'}}>Copyright @2022</p><span className='copy_right_name'>PropertyTicket</span></div>
        <ul className='footer_bottom_li'style={{marginTop:'10px'}}>
          <li style={{fontSize:'14px'}}onClick={()=>history.push('/')}>Home</li>
          <li> <a target="_blank" href='/map'>Map</a></li>
          <li style={{fontSize:'14px'}} onClick={()=>history.push('/areaguides')}>Areaguide</li>
          <li style={{fontSize:'14px'}} onClick={()=>history.push('/aboutus')}>Aboutus</li>
        </ul>
      </div>
    </div>
  )
}

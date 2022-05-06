import React from 'react'
import logo from '../images/Subtract.png';

function Logo({source,white}) {
  return (
    <React.Fragment>
         <div className="pt-8 pl-8">
      <div className="navbar_container_logo flex">
        <img src={source} width={35}/>
        <div className='logo_text'>
          <p className="text-3xl pl-1" style={{color:'#2666CF'}}>PROPERTY</p>
          <p className="text-3xl pl-1" style={{color:`${white}`}}>Ticket</p>
        </div>
      </div>
      <p className="inter text-sm" style={{color:`${white}`}}>Payment is in your hand</p>
      </div>
    </React.Fragment>
  )
}

export default Logo
import React from 'react'
import '../Style/Home.css'
function Homebanner3() {
  return (
    <div className='homebanner3_container flex justify-between  'style={{marginBottom:'200px'}}>
       <div > <img src='https://images.unsplash.com/photo-1611095564350-2cbe940a8d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'/></div>

        <div className='hombanner3-title'>
            <h1 className='font-semibold'>Smart <br/>Contract</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nulla a tempus amet nam amet integer ut nunc.</p>
        </div>
    </div>
  )
}

export default Homebanner3
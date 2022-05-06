import React from 'react'

function AnyQuery() {
  return (
    <div className='anyquery_container space-y-3 p-3 mb-4 rounded'style={{background:'#F1F2F5',width:'700px',height:'400px',position:'absolute',right:'50px',top:'-70px',boxShadow:'0 0 3px 0 black'}}>
        <div className='flex justify-between'>
            <input type='text' placeholder='Full Name' className='rounded w-2/3 h-12 pl-4' style={{background:'#DADADA',outline:'none'}}/>
            <p style={{fontFamily:'Inter, sans-serif'}}>Have Any Questions?<br/><b style={{fontFamily:'Inter, sans-serif'}}>Contact Us</b></p>
        </div>
        <input type='text' placeholder='Full Name' className='rounded w-2/3 h-12 pl-4'style={{background:'#DADADA',outline:'none'}}/><br/>
        <textarea cols='80' rows='6'style={{background:'#DADADA',outline:'none'}} className='pl-4 rounded' placeholder='Message'/>
        <button className='text-white font-semibold py-2 rounded' style={{background:'#2666cf',width:'30%',float:'right',fontFamily:'Inter, sans-serif'}}>Submit</button>
    </div>
  )
}

export default AnyQuery
import imag1 from '../images/DHA.png'
import imag2 from '../images/bahria.jpg'
import imag3 from '../images/al-jalil-garden.jpg'
import slide1 from '../images/imag3.jpg'
import DHAkarachi from '../images/dha-karachi.jpg'
import bahriaKarachi from '../images/bahrai-karachi.jpg'
import DHAcity from '../images/dha-city.png'
import eighteen from '../images/eighteen.jpg'
import smartcity from '../images/smartcity.jpg'
import DHAislamabad from '../images/dha-islamabad.jpg'
import Navbar from './Navbar'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import React from 'react'
import Footer from './Footer'
import Areas from './Areas';
function Area_guide() {

  const fadeImages = [
    {
      url: slide1,
    },
    {
      url: imag2,
    },
    {
      url: smartcity,
    },
    {
      url: imag3,
    },
    {
      url: imag1,

    }
  ];
  return (

    <React.Fragment>
        {/* <Nav/>  */}
        <Navbar/>
    <div className="slide-container" style={{width:'93%',margin:'auto',marginTop:'5px'}}>
        <Fade transitionDuration={1500} duration={1000} indicators={true} arrows={false}>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.url} className='areaguide_img' alt=''/>
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <h1 className='explore_heading'>Explore Pakistan</h1>
            <Areas img1={imag1}  title1='DHA Defense Lahore' img2={imag2} title2='Bahria Town Lahore' img3={imag3}  title3='Al Jalil Garden' location='lahore'/>
            <Areas img1={DHAkarachi}  title1='DHA Defense Karachi' img2={bahriaKarachi} title2='Bahria Town Karachi' img3={DHAcity}  title3='Gulshan-e-Iqbal Town Karachi' location='karachi'/>
            <Areas img1={eighteen}  title1='Bahria Town Islamabad' img2={smartcity} title2='Gulberg Greens Islamabad' img3={DHAislamabad}  title3='DHA Defence Islamabad' location='islamabad'/>
    <Footer/>
            </React.Fragment>
  )
}

export default Area_guide

import React from 'react'
import { useLocation } from 'react-router-dom';
import data from '../Area_detail.json'
import '../Style/Area_details.css'
import Navbar from './Navbar';
import { Fade } from 'react-slideshow-image';
import slide1 from '../images/imag3.jpg'
import imag2 from '../images/bahria.jpg'
import smartcity from '../images/smartcity.jpg'
import imag3 from '../images/al-jalil-garden.jpg'
import Footer from './Footer';
function Area_details(props) {
  const { search } = useLocation();
  const parms = new URLSearchParams(search);
  const title = parms.get('title1');

  const info = data.Data;
  const obj = info.find(item => item.location == title);
  const desc = obj;
  console.log(desc.images1);

  const fadeImages = [
    {
      url: desc.image1,
    },
    {
      url: desc.image2,
    },
    {
      url: desc.image3,
    }
  ];

  return (
    <>
      <Navbar />
      <div className='area_detail_container'style={{marginBottom:'15px'}}>
        <h1 className='area_detail_title'style={{fontSize:'25px'}}>{desc?.location}</h1>
        <div className='area_detail_fade'>
          {/* <img style={{ border: '1px solid red', height: '300px', width: '300px' }} src={desc.images1} /> */}
          <Fade transitionDuration={1500} duration={1000} indicators={true} arrows={false}>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  {console.log(fadeImage.url)}
                  <img src={fadeImage.url} className='areadetail_img' alt='' />
                </div>
              </div>
            ))}

          </Fade>
        </div>
        <div className='areadetail_content'>
          <h1 className='questions'>{desc?.title}</h1>
          <p>{desc?.title_explanation}
          </p>
          <p className='questions'>{desc?.query1}</p>
          <p>
            {desc?.query1_explain}
          </p>
          <p className='questions'>{desc?.query2}</p>
          <p>
            {desc?.query2_explanation}
          </p>
          <p className='questions'>{desc?.query3}</p>
          <p>
            {desc?.query3_explanation}
          </p>
          {/* <p>When talking about shopping centres, residents of DHA, Lahore cherish extreme convenience, as the area is home to several dedicated commercial zones operational in numerous localities. Each phase has a comprehensively planned commercial district that nestles itself in various restaurants, financial institutions, and a plethora of local as well as national and international branded outlets. Not only this, the society neighbours several attractions and recreational avenues. In this regard, residents of DHA Defence Lahore can visit Passion Art Gallery in Sector J (Phase 1), enjoy their time at the Defence Raya Golf Resort & Club, which is located in Sector M, DHA Phase 6, and go for gaming at Transfinity VR (Phase 3), and Big Town Gaming Zone in Sector H (Phase 1). All in all, DHA Defence is a lavish community ideal for those who want to cherish every moment of their life.</p> */}
        </div>
      </div>
      <Footer/>
    </>
   
  )
}

export default Area_details

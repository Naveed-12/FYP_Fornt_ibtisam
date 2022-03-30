import React from 'react'
import abdullah from '../images/abdullah.jpg'
import ibtisam from '../images/i1.png'
import naveed from '../images/naveed.jpeg'

import './About.css'
import Navbar from './Navbar'
export default function About() {
    return (
        <>
        <Navbar/>
        <div style={{background:'linear-gradient(180deg, #EAF7FF 0%, #E5F4FF 95.31%)'}}>
            <div className="container about_us_container" style={{background:'linear-gradient(180deg, #EAF7FF 0%, #E5F4FF 95.31%)'}}>
                <div className="row p-md-2 p-3">
                    <div className="col-12 my-2">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 col-12">
                                <img src={abdullah} alt="" className='img-fluid' style={{borderRadius:'3px'}} />
                            </div>
                            <div className="col-md-6 col-12 mt-md-0 mt-3">
                                <div className='pt-about'>
                                    <h3 className="text-uppercase">Founder & chairman</h3>
                                    <p className="mt-3" style={{ color: "#7a4b40", fontWeight: "600"}}>
                                        A Man Larger Than Life & A Legend <p style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>For All Times to Come Abdullah Saeed <p style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>The Force & Vision Behind Property Ticket</p></p>
                                    </p>
                                    <p>"Property Ticket is not a business anymore. Its my passion. So, from the platform of Property Ticket, we as a team, strive to deliver everything we deliver at international standard of quality!"</p>
                                    <i className="bi bi-facebook" style={{ fontSize: "30px", cursor: "pointer" }}></i>
                                    <i class="bi bi-instagram ms-3" style={{ fontSize: "30px", cursor: "pointer" }}></i>
                                    <i class="bi bi-twitter ms-3" style={{ fontSize: "30px", cursor: "pointer" }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='d-md-none mt-2' />
                    <div className="col-12 my-2">
                        <div className="row">
                            <div className="col-md-8 col-12">
                                <h3 style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Message from CE</h3>
                                <p className='mt-2' style={{fontSize:'14px',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>We have created awareness amongst the masses as to what real luxury living is according to international standards. No one can stop us from fulfilling our pure ambitions for “The Land of the Pure”. As I look at the growth & achievements of Property Ticket over the past decade, I am extremely proud of what we have achieved and excited about an even more promising future. Property Ticket has successfully transitioned into Asia's largest private property developer and has maintained the title through continuously introducing new dimensions to real estate & luxury living in Pakistan and gained our customers trust every step of the way.</p>
                                <p style={{ fontStyle: "italic" }}>Ibtisam Akram  <p style={{ fontStyle: "italic" }}>Chief Executive, Property Ticket</p></p>
                                <i className="bi bi-facebook" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                                <i class="bi bi-instagram ms-3" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                            </div>
                            <div className="col-md-4 col-12 mt-2">
                                <img src={ibtisam} alt="" className='img-fluid' style={{borderRadius:'3px'}}/>
                            </div>
                        </div>
                    </div>
                    <hr className='d-md-none mt-2' />
                    <div className="col-12 text-center mt-2">
                        <figure>
                            <blockquote className="">
                                <p style={{fontSize:'16px',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Property Ticket is a name that has been making news across oceans, on the cover of international papers & magazines for its construction marvels which is why we are the most preferred investment destination not only for Pakistanis but also in the eyes of expats as well as foreign investors. It is no surprise that we have won 10 accolades at the International Property Awards under various categories for our projects.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">Naveed Ahmad</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="row my-2 d-lg-block d-none">
                    <div className="col-12 ">
                        <h3 className='text-center'> Our Team</h3>
                        <div className="row">
                            <div className="col-4">
                                <div className="row d-flex align-items-center">
                                    <div className="col-9 text-end mt-5">
                                        <p className='' style={{fontSize: "20px", fontWeight: "600"}}>1000+ Members</p>
                                    </div>
                                    <div className="col-3 text-end">
                                        <i class="bi bi-person-fill" style={{ fontSize: "90px" }}></i>

                                    </div>
                                </div>
                            </div>
                            <div className="col-4 position-relative mt-4">
                                <img className="pt-img-1" src={abdullah} alt="" style={{ borderRadius: "50%", width: "100px" }} />
                                <img className="pt-img-2" src={ibtisam} alt="" style={{ borderRadius: "50%", width: "90px" }} />
                                <img className="pt-img-3" src={naveed} alt="" style={{ borderRadius: "50%", width: "70px" }} />
                            </div>
                            <div className="col-4 mt-5">
                                <i className="bi bi-facebook" style={{ fontSize: "30px", cursor: "pointer" }}></i>
                                <i class="bi bi-instagram ms-3" style={{ fontSize: "30px", cursor: "pointer" }}></i>
                                <i class="bi bi-twitter ms-3" style={{ fontSize: "30px", cursor: "pointer" }}></i>
                                {/* <div className='mt-2'>
                                    <button className='btn btn-outline-dark text-start'>Contact Us</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
import React from 'react'
import logo from "../../assets/images/img/tesla-logo-png-20.png"
import logo1 from "../../assets/images/img/modelx11.png"
import logo2 from "../../assets/images/img/modelx111.jpg"
import logo3 from "../../assets/images/img/modelx1111.jpg"
import logo4 from "../../assets/images/img/modelx11111.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Col,Row } from 'reactstrap';
import './custemorder.css';
import {Link } from 'react-router-dom';

const CustomOrderY = () => {
  return (
    <>
    <Row>
    <Col lg={12}>
            <header className="header" style={{top:'20px'}}>
            <Link className="header__left" to={"/"} >
            <img className="header__logo" src={logo} alt="" />
            </Link>
        </header>
        </Col>
    </Row>
        <Row >
            <Col className='pt-5' lg={8}>
        <Carousel className='pt-5 m-2' >
                <div>
                    <img src={logo1} />
                </div>
                <div>
                    <img src={logo2} />
                </div>
                <div>
                    <img src={logo3} />
                </div>
                <div>
                    <img src={logo4} />
                </div>
            </Carousel></Col>
            <Col lg={4}>
            <div className="container">
            <div className="iphone">
              <div className="wrapper">
              <div className="title-bar">
                <div className="close"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 64 64"><path d="M28.9 31.8L0.6 60.1c-0.8 0.8-0.8 2.1 0 2.8 0.4 0.4 0.9 0.6 1.4 0.6 0.5 0 1-0.2 1.4-0.6l28.5-28.5 28.5 28.5c0.4 0.4 0.9 0.6 1.4 0.6 0.5 0 1-0.2 1.4-0.6 0.8-0.8 0.8-2.1 0-2.8L35.1 31.8 63.4 3.4c0.8-0.8 0.8-2.1 0-2.8 -0.8-0.8-2.1-0.8-2.8 0L32 29.2 3.4 0.6c-0.8-0.8-2.1-0.8-2.8 0 -0.8 0.8-0.8 2.1 0 2.8L28.9 31.8z" fill="#7B7C86"/></svg></div>
                <div className="title">Model Y</div>
              </div>
                <div className="trans-wrapper">
              <div className="trans-summary">
                <div className="trans-item">
                  <div className="trans-label ">
                    
                  </div>
                  <div>
                    <div className="amount" id="dollar">$</div>
                   <div className="amount" id="amount">112,590</div>
                  </div>
                </div>
                 <div className="trans-item">
                  <div className="trans-label">
                    
                  </div>
                  <div className="trans-value">
                    351mi
                    Range (est.)
                    149mph
                    Top Speed
                    3.8sec
                    0-60 mph
                  </div>
                </div>
                 <div className="trans-item">
                  <div className="trans-label">
                    
                  </div>
                  <div className="trans-value">
                    Costs above include potential incentives and gas savings of $8,400.
                  </div>
                </div>
                 <div className="trans-item">
                  <div className="trans-label">
                    
                  </div>
                  <div className="trans-value">
                    Dual Motor All-Wheel Drive
                  </div>
                </div>
                 <div className="trans-item">
                  <div className="trans-label">
                    
                  </div>
                  <div className="trans-value">
                    Est. Delivery: Mar - Jun 2023
                  </div>
                </div>
                 <div className="trans-item">
                  <div className="trans-label">
                    
                  </div>
                  <div className="trans-value">
                    Delivery ZIP Code: 34375
                  </div>
                </div>
                 </div>
                <div className="btn-wrapper">
                   <button id="continue-btn" className="next ripple" >Continue </button></div>
            
                </div>
              </div>
              <div className="final-order-summary">
            <div className="order-summary-row">
              <span>To</span>
              <span>Laure Norbert</span>
            </div>
            <div className="order-summary-row">
              <span>From</span>
              <span>Peter Smith account</span>
            </div>
            <div className="order-summary-row">
              <span>Payer Reference
          </span>
              <span>59467898</span>
            </div>
            </div>
             <div className="success">
               <div className="checkmark">
                 <div className="icon icon--order-success svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                      <g fill="none" stroke="#A19FA7" stroke-width="2">
                        <circle cx="36" cy="36" r="35" className='deneme'></circle>
                        <path d="M17.417,37.778l9.93,9.909l25.444-25.393" className='deneme1' ></path>
                      </g>
                    </svg>
                  </div>
               </div>
               <div className="success-msg">
                 <div className="success-title">Payment Successful</div>
                 <div className="success-text">You sucessfully paid 250 USD to Laure Robert </div>
               </div>
              </div>
              
              <div className="done">
                 <a href="#" target="_blank">More</a>
               </div>
          </div>
          
          </div>
                </Col>
        </Row>
            
        
    </>
  )
}

export default CustomOrderY
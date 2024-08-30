"use client"

import React from 'react';
import CountUp from 'react-countup';
import './stylesheet.css';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faSourcetree } from '@fortawesome/free-brands-svg-icons';



function Pricing() {
  return (
    <>
      <div className="container p-5 ">
        <div className="row pl-5 ">
          <div className="col-lg-6 col-md-5 col-sm-5 pl-3 ">
            <p style={{ color: '#9984D4' }} > Pricing </p>
            <h2 style={{ fontWeight: 'bolder', color: '#502E83', fontSize: '35px' }} >Harness the Power of <span style={{ color: '#9984D4', fontWeight: 'bold' }} >Advanced AI Solutions </span> to Deliver Superior Technology, <span style={{ color: '#9984D4' }} >On-Time and Within Budget</span>.</h2>
            <p style={{ color: '#230C33', paddingRight: '30px' }} >We've been committed to providing custom, high-quality services designed to help your business innovate, grow, and excel. Let us be your partner in bringing cutting-edge technology to life.</p>
            <h3 style={{ color: '#592E83', fontWeight: 'bold' }}>Explore Our Success Stories</h3>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-5">
                <div className="count-value" >
                  <CountUp end={75} duration={3.75} style={{ fontWeight: 'bold' }} />
                  <span className="plus-sign" style={{ marginLeft: '5px', fontSize: '24px' }}>+</span>
                </div>
                <p><strong>Happy Clients</strong></p>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5">
                <div className="count-value">
                  <CountUp end={100} duration={3.75} style={{ fontWeight: 'bold' }} />
                  <span className="plus-sign" style={{ marginLeft: '5px', fontSize: '24px' }}>+</span>
                </div>
                <p><strong>Projects Delivered</strong></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-5">
            <div className="secondside">
              <div className="row p-3 justify-content-evenly ">
                <div className="col-lg-5 col-md-5 col-sm-5  ">
                  <p style={{ color: '#230C33' }} >Starting from <span style={{ color: '#592E83', fontWeight: 'bolder', fontSize: '40px' }} > <br /> $20/hr</span> </p>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 pt-3 ">
                  <Link href='/contact' className='btn-contact' style={{ paddingTop: '25px', paddingBottom: '25px', paddingLeft: '40px', paddingRight: '40px', fontWeight: 'bolder' }}  > Contact Us </Link>
                </div>
              </div>
              <div className="row p-5 ">
                <div className="col-lg-12 cpl-md-12 col-sm-12 pb-2" style={{ borderBottom: '1px solid gray' }} >
                  <h6 style={{ color: '#230C33' }} >
                    The future of software development is here. Our team utilizes cutting-edge AI technologies to streamline your projects, enhancing efficiency and driving growth. With our expertise, we don't just meet expectations, we exceed them, delivering results that move your business forward. <br /> <br />
                    Take advantage of a complimentary 2-week trial to see how our solutions can elevate your project. <br /> <br />
                    We're so confident in our ability to deliver value that if you're not satisfied, we'll keep working until you are, at no extra cost.
                  </h6>
                </div>
              </div>
              <div className="row pr-5 pl-5 pb-2 justify-content-evenly ">
                <div className="col-lg-3 col-md-4 col-sm-4 p-2 text-center ">
                  <FontAwesomeIcon icon={faPeopleGroup} className='secondsideicon' />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 p-2 ">
                  <h4 style={{ color: '#230C33', fontWeight: 'bold' }} >Dedicated Teams</h4>
                  <h6 style={{ color: '#230C33' }} >Accelerate your projects with a fully integrated and dedicated team, ready to augment your existing development process.</h6>
                </div>
              </div>
              <div className="row pr-5 pl-5 pb-2 pt-2 justify-content-evenly ">
                <div className="col-lg-3 col-md-4 col-sm-4 p-2 text-center ">
                  <FontAwesomeIcon icon={faClipboardUser} className='secondsideicon' />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 p-2 ">
                  <h4 style={{ color: '#230C33', fontWeight: 'bold' }} >Staff Augmentation</h4>
                  <h6 style={{ color: '#230C33' }} >Enhance your team with our experts, saving you time and resources on recruitment and training.</h6>
                </div>
              </div>
              <div className="row pr-5 pl-5 pb-2 pt-2 justify-content-evenly ">
                <div className="col-lg-3 col-md-4 col-sm-4 p-2 text-center ">
                  <FontAwesomeIcon icon={faSourcetree} className='secondsideicon' />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 p-2 ">
                  <h4 style={{ color: '#230C33', fontWeight: 'bold' }} >Software Outsourcing</h4>
                  <h6 style={{ color: '#230C33' }} >Leave the complete software development process to us, from start to finish.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing;

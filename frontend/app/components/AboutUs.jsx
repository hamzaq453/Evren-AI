'use client';
import React from 'react'
import './stylesheet.css'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile, faFileCode, faClock } from '@fortawesome/free-regular-svg-icons';
import CountUp from 'react-countup';


const AboutUs = () => {
  return (
    <>
      {/* <!-- ======= About Us Section ======= --> */}
      <section id="about" className="about">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2 className='text-black text-[22px] font-medium'>About Us</h2>
          </div>

          <div className="row content text-center ">
            <div className="col-lg-12 " data-aos="fade-up" data-aos-delay="150">
              <h4 className='bg-gradient-to-b from-gray-400 to-primaryy bg-clip-text text-transparent  text-[30px] font-semibold'>Unlock Your Potential with Evren AI!</h4>
              <p className="container pr-5 mr-5 pl-5 ml-5 col-lg-10 align-content-center text-black" >
                Founded to democratize AI, Evren AI empowers businesses and individuals with cutting-edge, user-friendly tools. Discover how our innovative solutions can help you achieve your goals. Click to learn more and join the AI revolution!
              </p>
              <Link href="/about" className="btn-learn-more no-underline">Learn More</Link>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End About Us Section --> */}

      <section id="counts" className="counts">
        <div className="container">

          <div className="row">
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
              <Image
                src="/homepage/counts-img-svg (1).png"
                alt="Counts Image"
                className="img-fluid"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>

            <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <div className="count-value">
                        <FontAwesomeIcon icon={faFaceSmile} />
                        <CountUp end={75} duration={3.75} />
                        <span className="plus-sign" style={{ marginLeft: '5px', fontSize: '24px' }}>+</span>
                      </div>
                      <p><strong>Happy Clients</strong></p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <div className="count-value p-2 ">
                        <FontAwesomeIcon icon={faFileCode} />
                        <CountUp end={100} duration={3.75} />
                        <span className="plus-sign" style={{ marginLeft: '5px', fontSize: '24px' }}>+</span>
                      </div>
                      <p><strong>Projects</strong></p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <div className="count-value">
                        <FontAwesomeIcon icon={faClock} />
                        <CountUp end={5} duration={3.75} />
                        <span className="plus-sign" style={{ marginLeft: '5px', fontSize: '24px' }}>+</span>
                      </div>
                      <p><strong>Years of experience</strong></p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <div className="count-value">
                        <FontAwesomeIcon icon={faAward} />
                        <CountUp end={5} duration={3.75} />
                      </div>
                      <p><strong>Awards</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs;

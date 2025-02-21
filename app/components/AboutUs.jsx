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
          <div className="text-center space-y-4" data-aos="fade-up">
            {/* Eyebrow text */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primaryy/10 to-secondaryy/10 text-primaryy text-lg font-semibold">
              About Us
            </span>
            
            {/* Main heading with gradient */}
            <h2 className="text-4xl font-bold mb-8 large:text-3xl middle:text-2xl">
              Unlock Your Potential with{" "}
              <span className="bg-gradient-to-r from-primaryy to-secondaryy bg-clip-text text-transparent">
                Evren AI
              </span>
            </h2>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed middle:text-base">
              Founded to democratize AI, we empower businesses and individuals with cutting-edge, 
              user-friendly tools. Discover how our innovative solutions can help you achieve your goals 
              and join the AI revolution!
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primaryy to-secondaryy text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
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
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto' }}
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

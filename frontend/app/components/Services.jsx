import React from 'react';
import './stylesheet.css';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEyeLowVision,
  faCogs,
  faCubes,
  faHeadset,
  faRobot,
  faCode,
  faChartLine,
  faPuzzlePiece
} from '@fortawesome/free-solid-svg-icons';


function Services() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-evenly ">
          <div className="col-md-6 mt-2  col-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <FontAwesomeIcon icon={faCogs} className='fonticon' />
              </div>
              <h4 className="title">
                <Link className='title_a' href="/Service1">AI Process Automation</Link>
              </h4>
              <p className="description text-left ">
                Streamline and Optimize Your Business Operations with Intelligent Automation.
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-2  col-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
                <FontAwesomeIcon icon={faEyeLowVision} className='fonticon' />
              </div>
              <h4 className="title">
                <Link className='title_a' href="/Service2">Computer Vision</Link>
              </h4>
              <p className="description text-left ">
                Transform Visual Data into Powerful Insights with AI-Powered Computer Vision
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-2  col-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon">
                <FontAwesomeIcon icon={faCubes} className='fonticon' />
              </div>
              <h4 className="title">
                <Link className='title_a' href="/Service3"> Machine & Deep Learning Solutions</Link>
              </h4>
              <p className="description text-left ">
                Empower Your Business with Advanced Machine and Deep Learning Technologies
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5  justify-content-evenly ">
          <div className="col-md-6 mt-2  col-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <FontAwesomeIcon icon={faHeadset} className='fonticon' />
              </div>
              <h4 className="title">
                <Link className='title_a' href="/Service4">Chatbots</Link>
              </h4>
              <p className="description text-left ">
                Enhance Customer Engagement with Intelligent AI Chatbots
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-2  col-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className='fonticon' />
              </div>
              <h4 className="title">
                <Link className='title_a' href="/service5">AI Agents</Link>
              </h4>
              <p className="description text-left ">
                Empower Your Operations with Autonomous AI Agents
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-2  col-lg-4 d-flex align-items-stretch">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <FontAwesomeIcon icon={faCode} className='fonticon' />
              </div>
              <h4 className="title">
                <Link className='title_a' href="Service6"> Software Development</Link>
              </h4>
              <p className="description text-left ">
                Crafting Innovative Web and Mobile Solutions for Your Business
              </p>
            </div>
          </div>
          <div className="row mt-5 justify-content-evenly ">
            <div className="col-md-6 mt-2  col-lg-4 d-flex align-items-stretch">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <FontAwesomeIcon icon={faPuzzlePiece} className='fonticon' />
                </div>
                <h4 className="title">
                  <Link className='title_a' href="/Service7">Generative AI</Link>
                </h4>
                <p className="description text-left ">
                  Unleash Creativity and Innovation with AI-Generated Content
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-2  col-lg-4 d-flex align-items-stretch">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <FontAwesomeIcon icon={faChartLine} className='fonticon' />
                </div>
                <h4 className="title">
                  <Link className='title_a' href="/Service8"> AI Research and Development</Link>
                </h4>
                <p className="description text-left ">
                  Drive Innovation with Cutting-Edge AI Research and Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;

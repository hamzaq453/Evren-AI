import React from "react";
import Image from "next/image";
import './stylesheet.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <>
      <div className=" row bg-[#E6D6FA] text-white grid grid-cols-4 gap-5 p-5 mr-0 ml-0 m-0 large:grid-cols-2 middle:grid-cols-1 middle:text-center">
        <div className=" col-lg-3 aboutus flex gap-6 text-left flex-col ">
          <div>
            <Image width={200} height={475} quality={70} priority={true} src="/homelogo.png" alt="EvrenAi logo" />
          </div>
          <div className="text-sm" style={{ color: 'black' }} >
            Evren AI isn't just another automation tool. We partner with you to
            understand your unique challenges and deliver custom AI solutions
            that drive game-changing results. Boost efficiency, slash costs, and
            unlock new possibilities, all while feeling confident in a trusted
            partner..
          </div>
        </div>
        <div className=" col-lg-3 services flex flex-col gap-5">
          <div>
            <span className="font-bold text-base" style={{ color: '#FF9100' }} >Services</span>
            <div className="w-10 h-1 rounded-sm bg-[#592E83] mt-1 middle:absolute middle:left-[44%]"></div>
            <div className="text-sm text-justify mt-3 ">
              <p className="m-0" >
                <a href="#" className="btn">
                  - Custom AI Solution Development
                </a>
              </p>
              <p className="m-0" >
                <a href="#" className="btn">
                  - AI-Based Security Solutions
                </a>
              </p>
              <p className="m-0" >
                <a href="#" className="btn">
                  - Research and Development in AI
                </a>
              </p>
              <p className="m-0" >
                <a href="#" className="btn">
                  - AI in Healthcare
                </a>
              </p>
              <p className="m-0" >
                <a href="#" className="btn  "  >
                  - Advanced analysis and Data Science
                </a>
              </p>
              <p>
                <a href="#" className="btn">
                  - Business Process Automation
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className=" col-lg-2 quicklinks flex flex-col gap-5">
          <div>
            <span className="font-bold text-base" style={{ color: '#FF9100' }} >Quick Links</span>
            <div className="w-10 h-1 rounded-sm bg-[#592E83] mt-1 middle:absolute middle:left-[42%]"></div>

            <div className="text-sm mt-3">
              <p className="m-0" ><a href="" className="btn" >Home</a></p>
              <p className="m-0" ><a href="" className="btn" >About us</a></p>
              <p className="m-0" ><a href="" className="btn" >Project</a></p>
              <p className="m-0" ><a href="" className="btn" >Blog</a></p>
            </div>
          </div>
        </div>
        <div className=" col-lg-2 contactinfo flex flex-col gap-5">
          <div>
            <span className="font-bold text-base" style={{ color: '#FF9100' }} >Contact Info</span>
            <div className="w-10 h-1 rounded-sm bg-[#592E83] mt-1 middle:absolute middle:left-[42%]"></div>
            <div className="text-sm mt-3 " style={{ color: 'black' }} >
              <p>Email: evrenai@gmail.com</p>
              <p>Phone: +1 123-456-7890</p>
            </div>
            <div style={{ color: 'black' }} >
              <h6  >
                <a href="#" className="btn" > <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px' }} /> </a>
                <a href="#" className="btn" > <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px' }} /> </a>
                <a href="#" className="btn" > <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: '30px' }} /> </a>
              </h6>

            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#E6D6FA] w-full mb-0  ">
        <p className="mx-auto text-center">&copy; {new Date().getFullYear()} Evren AI All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;

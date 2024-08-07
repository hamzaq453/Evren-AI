import React from "react";
import Image from "next/image";


const Footer = () => {
  return (
    <>
      <div className="bg-black text-white grid grid-cols-4 gap-10 p-10 large:grid-cols-2 middle:grid-cols-1 middle:text-center">
        <div className="aboutus flex gap-6 text-left flex-col ">
          <div>
          <Image width={200} height={475} quality={70} priority={true} src="/homelogo.png" alt="EvrenAi logo" />
          </div>
          <div className="text-sm">
            Evren AI isn't just another automation tool. We partner with you to
            understand your unique challenges and deliver custom AI solutions
            that drive game-changing results. Boost efficiency, slash costs, and
            unlock new possibilities, all while feeling confident in a trusted
            partner..
          </div>
        </div>
        <div className="services flex flex-col gap-5">
            <div>
            <span className="font-bold text-base">Services</span>
            <div className="w-10 h-1 rounded-sm bg-primary mt-1 middle:absolute middle:left-[44%]"></div>
            </div>
          <ul className="text-sm">
            <li>
              <a href="#">
                - Custom AI Solution Development
              </a>
            </li>
            <li>
              <a href="#">
                - AI-Based Security Solutions
              </a>
            </li>
            <li>
              <a href="#">
                - Research and Development in AI
              </a>
            </li>
            <li>
              <a href="#">
                - AI in Healthcare
              </a>
            </li>
            <li>
              <a href="#">
                - Advanced Analytics and Data Science
              </a>
            </li>
            <li>
              <a href="#">
                - Business Process Automation
              </a>
            </li>
          </ul>
        </div>
        <div className="quicklinks flex flex-col gap-5">
            <div>
            <span className="font-bold text-base">Quick Links</span>
            <div className="w-10 h-1 rounded-sm bg-primary mt-1 middle:absolute middle:left-[42%]"></div>
            </div>
            <ul className="text-sm">
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div className="contactinfo flex flex-col gap-5">
            <div>
            <span className="font-bold text-base">Contact Info</span>
            <div className="w-10 h-1 rounded-sm bg-primary mt-1 middle:absolute middle:left-[42%]"></div>
            </div>
            <ul className="text-sm">
                <li>Email: evrenai@gmail.com</li>
                <li>Phone: +1 123-456-7890</li>
            </ul>
            <ul>
                <li>Linkedin</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
        </div>
      </div>
      <div className=" bg-slate-400 w-full">
        <p className="mx-auto text-center">&copy; {new Date().getFullYear()} Evren AI All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;

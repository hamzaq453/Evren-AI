"use client";

import React, { useState } from "react";
import "../servicestyle.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faIndustry,
  faSuitcaseMedical,
  faClipboardList,
  faDatabase,
  faCog,
  faVial,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Faq from "@/app/components/Faq";

function ComputerVision() {
  const processes = [
    {
      name: "Requirement Gathering",
      icon: faClipboardList,
      color: "#3498db",
      description: "Understanding client requirements and goals",
    },
    {
      name: "Data Collection",
      icon: faDatabase,
      color: "#2ecc71",
      description: "Collecting and preparing data for the model",
    },
    {
      name: "Model Development",
      icon: faCog,
      color: "#f1c40f",
      description: "Building and training the model",
    },
    {
      name: "Testing",
      icon: faVial,
      color: "#e67e22",
      description: "Validating model performance and accuracy",
    },
    {
      name: "Deployment",
      icon: faRocket,
      color: "#e74c3c",
      description: "Deploying the model into production",
    },
  ];

  const [isOpen, setisOpen] = useState(false);

  const faqs = [
    {
      question: "What types of tasks can computer vision automate?",
      answer:
        "Computer vision can automate tasks such as quality control inspections, object detection, facial recognition, visual search, and even autonomous vehicle navigation.",
    },
    {
      question: "How accurate is computer vision compared to human inspection?",
      answer:
        "Computer vision systems can achieve higher accuracy levels than humans in tasks such as defect detection, especially when dealing with large volumes of data or subtle differences that might be missed by the human eye.",
    },
    {
      question: "Can computer vision be applied to real-time video feeds?",
      answer:
        "Yes, our solutions can process real-time video feeds, providing instant analysis and actionable insights for tasks like security monitoring and traffic management.",
    },
  ];

  return (
    <>
      <div className="herobg p-5 ">
        <h1 className="heading1">Computer Vision</h1>
        <p className="paragraph">
          Transform Visual Data into Powerful Insights with AI-Powered Computer
          Vision
        </p>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-8">
            <h1 className="text-primaryy font-semibold text-center ">
              Service Description
            </h1>
            <p className="text-center my-4">
              Our Computer Vision service leverages advanced AI to interpret and
              analyze visual data, enabling your business to gain valuable
              insights from images and videos. <br /> <br /> Whether it is
              automating quality control on production lines, enhancing security
              with real-time surveillance, or improving customer experience
              through visual search, our computer vision solutions are designed
              to meet the specific needs of your industry. <br />
              <br /> With our expertise, you can harness the power of AI to
              transform how your business processes and utilizes visual
              information.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-6 col-md-5 col-sm-5 pl-3 pr-3 ">
            <Image
              src="/ComputerV.jpg"
              width={500}
              height={300}
              alt="Side Image"
              className="sideimg"
            />
          </div>
          <div className="col-lg-5 col-md-4 col-sm-4 p-3 align-items-center ">
            <ul>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Object Detection{" "}
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Facial Recognition
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Real-Time Video Analysis
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Quality Control Automation
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} className="fonticon2" />
                Image Classification
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Visual Search and Augmented Reality
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-10">
            <h2 className="mb-[30px] text-4xl mt-[45px] text-primaryy">
              Benefits
            </h2>
           <ul className="list-outside list-disc marker:text-2xl text-justify marker:text-secondaryy"> 
           <li>
              <strong>Enhanced Accuracy in Visual Tasks: </strong> Automate
              visual inspections and analyses with higher accuracy and
              consistency than manual processes.{" "}
            </li>
            <li>
              <strong>Real-Time Processing: </strong> Analyze live video feeds
              or images in real-time, enabling immediate responses to detected
              issues or events.
            </li>
            <li>
              <strong>Automation of Labor-Intensive Tasks:</strong> Reduce the
              need for human labor in tasks such as quality control, security
              monitoring, and data entry.{" "}
            </li>
            <li>
              <strong>Scalability:</strong> Easily scale up your computer vision
              applications to handle increasing amounts of visual data as your
              business grows.{" "}
            </li>
            <li>
              <strong>Improved Safety and Security:</strong> Enhance security by
              using computer vision for tasks such as facial recognition and
              anomaly detection in real-time.{" "}
            </li>
            <li>
              <strong>Cost Efficiency:</strong> Lower operational costs by
              automating tasks that require significant human resources, such as
              visual inspections in manufacturing.
            </li>
            <li>
              <strong>Innovative Customer Experiences:</strong> Implement
              features like visual search and augmented reality to provide
              customers with cutting-edge experiences.
            </li>
            <li>
              <strong>Data-Driven Insights:</strong> Extract valuable insights
              from visual data that can be used to improve products, services,
              and business strategies.
            </li>
           </ul>
          </div>
        </div>
      </div>

      <div className="ai-process-section">
        <h2 className="h2s2">The Process</h2>
        <div className="hexagon-containers2">
          {processes.map((process, index) => (
            <div
              className="hexagons2"
              key={index}
              style={{ "--color": process.color }}
            >
              <div className="hexagon-contents2">
                <FontAwesomeIcon icon={process.icon} className="icons2" />
                <h3 className="h3s2">{process.name}</h3>
                <p className="ps2">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row m-0 ">
        <div className="col-lg-12 col-md-10 col-sm-10 p-5">
          <div className="container p-5 ">
            <h1 className="application_h">Industry Applications </h1>
            <div className="row m-0 justify-content-center ">
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faIndustry} className="divicon" />
                <h4 className=" div_h">Manufacturing</h4>
                <p>
                  {" "}
                  Automate quality control with real-time defect detection on
                  production lines.
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faCircleInfo} className="divicon" />
                <h4 className=" div_h">Retail</h4>
                <p>
                  Enhance customer experience with visual search and augmented
                  reality applications.
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faSuitcaseMedical} className="divicon" />
                <h4 className=" div_h">Healthcare</h4>
                <p>Improve diagnostic accuracy with medical image analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[20px] middle:pt-[10px]  px-0 flex relative gap-[20px] justify-center items-start inc:py-[30px]">
        <div className="flex max-w-[82vw] mx-auto items-center relative gap-20 maxlarge:max-w-[93vw] inc:flex-col middle:gap-[15px]">
          <div className="animate-upAndDown inc:w-[60%] inc:mt-11 middle:mt-7 middle:w-[80%] small:w-[90%]">
            <Image
              priority={true}
              quality={80}
              width={700}
              height={1000}
              src="/FaqImage.png"
              alt=" Frequently Asked Questions"
            />
          </div>
          <div class="w-[700px] pl-[50px] text-left flex flex-col gap-3 inc:w-[500px] inc:p-0 middle:w-[350px] small:w-[300px]">
            {faqs.map((faq, index) => (
              <Faq key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ComputerVision;

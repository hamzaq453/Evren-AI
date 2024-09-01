"use client";

import React, { useState } from "react";
import "../servicestyle.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcaseMedical,
  faCoins,
  faComment,
  faPencilRuler,
  faCode,
  faVial,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Faq from "@/app/components/Faq";

function softwareDevelopment() {
  const processes = [
    {
      name: "Consultation",
      icon: faComment,
      color: "#3498db",
      description: "Discussing project requirements and goals",
    },
    {
      name: "Design",
      icon: faPencilRuler,
      color: "#2ecc71",
      description: "Creating the design and architecture",
    },
    {
      name: "Development",
      icon: faCode,
      color: "#f1c40f",
      description: "Building the project according to the design",
    },
    {
      name: "Testing",
      icon: faVial,
      color: "#e67e22",
      description: "Ensuring the project works as intended",
    },
    {
      name: "Deployment",
      icon: faRocket,
      color: "#e74c3c",
      description: "Launching the project into production",
    },
  ];

  const [isOpen, setisOpen] = useState(false);

  const faqs = [
    {
      question: "What technologies do you use for software development?",
      answer:
        "We use a wide range of technologies depending on the project requirements, including but not limited to Python, JavaScript, React, Angular, Swift, Kotlin, and more. Our team is skilled in both front-end and back-end development, ensuring a comprehensive solution.",
    },
    {
      question: "How long does it take to develop a custom software solution?",
      answer:
        "The timeline varies based on the complexity of the project. A basic website might take a few weeks, while a more complex application could take several months. We provide a detailed timeline after the initial consultation.",
    },
    {
      question: "Can you integrate the software with our existing systems?",
      answer:
        "Yes, we specialize in integrating new software solutions with existing systems, ensuring that everything works seamlessly together.",
    },
  ];

  return (
    <>
      <div className="herobg p-5 ">
        <h1 className="heading1">
          Software Development
        </h1>
        <p className="paragraph">
          Crafting Innovative Web and Mobile Solutions for Your Business
        </p>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-8">
            <h1 className="text-primaryy font-semibold text-center  ">
              Service Description
            </h1>
            <p className="text-center mt-4">
              Our Software Development service encompasses both web and mobile
              app development, offering tailor-made solutions that drive
              business success. <br /> <br /> Whether you need a responsive
              website, a robust web application, or a user-friendly mobile app,
              our team of expert developers is here to bring your vision to
              life. <br /> <br /> We focus on creating intuitive, scalable, and
              secure software solutions that meet the unique needs of your
              business and your customers.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-5 col-md-4 col-md-4 p-3 ">
            <Image
              src="/Software Dev.jpg"
              width={500}
              height={300}
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
                Custom Web Development
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Mobile App Development
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                User Experience (UX) Design
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Backend and Frontend Integration
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                API Development and Integration
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                E-commerce Solutions
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
                <strong>Custom Solutions: </strong> Get software that is
                specifically designed to meet your business’s unique needs,
                ensuring it supports your goals and workflows.{" "}
              </li>
              <li>
                <strong>User-Friendly Design:</strong> Prioritize user
                experience with intuitive, easy-to-use interfaces that enhance
                customer satisfaction and engagement.
              </li>
              <li>
                <strong>Scalability:</strong> Build software that can grow with
                your business, accommodating increased traffic, users, and data
                without performance issues.{" "}
              </li>
              <li>
                <strong>Integration with Existing Systems:</strong> Ensure
                seamless integration with your current IT infrastructure,
                maximizing the utility of your new software.{" "}
              </li>
              <li>
                <strong>Enhanced Security:</strong> Protect your business and
                customer data with robust security features designed to prevent
                breaches and unauthorized access{" "}
              </li>
              <li>
                <strong>IFaster Time-to-Market:</strong> Accelerate development
                timelines with agile methodologies, getting your product to
                market faster
              </li>
              <li>
                <strong>Ongoing Support and Maintenance:</strong> Benefit from
                continuous support and updates to keep your software running
                smoothly and efficiently.
              </li>
              <li>
                <strong>Cross-Platform Compatibility:</strong> Ensure your
                software works seamlessly across different devices and
                platforms, providing a consistent experience for all users.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="process-section">
        <div className="row ">
          <div className="col-lg-12 col-md-10 col-sm-10">
            <h2>Our Process</h2>
            <div className="hexagon-container">
              {processes.map((process, index) => (
                <div
                  className="hexagon"
                  key={index}
                  style={{ "--color": process.color }}
                >
                  <div className="hexagon-content">
                    <FontAwesomeIcon icon={process.icon} className="iconp" />
                    <h3>{process.name}</h3>
                    <p className="pp">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row m-0 ">
        <div className="col-lg-12 col-md-10 col-sm-10 p-5">
          <div className="container p-5 ">
            <h1 className="application_h">Industry Applications </h1>
            <div className="row m-0 justify-content-center ">
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faEnvelope} className="divicon" />
                <h4 className=" div_h">E-commerce</h4>
                <p>
                  Build scalable online stores with seamless checkout
                  experiences.
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faSuitcaseMedical} className="divicon" />
                <h4 className=" div_h">Healthcare</h4>
                <p>Develop patient management systems and telemedicine apps.</p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faCoins} className="divicon" />
                <h4 className=" div_h">Finance</h4>
                <p>
                  Create secure financial platforms for transactions and
                  customer management.
                </p>
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

export default softwareDevelopment;

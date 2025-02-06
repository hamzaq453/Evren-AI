"use client";

import React, { useState } from "react";
import "../servicestyle.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcaseMedical,
  faBuildingColumns,
  faDrawPolygon,
  faVial,
  faRocket,
  faClipboardList,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Faq from "@/app/components/Faq";

function Chatbots() {
  const processes = [
    {
      name: "Needs Assessment",
      icon: faClipboardList,
      color: "#3498db",
      description: "Understanding client requirements and goals",
    },
    {
      name: "Bot Design",
      icon: faDrawPolygon,
      color: "#2ecc71",
      description: "Creating the bot architecture and visual design",
    },
    {
      name: "Development",
      icon: faCode,
      color: "#f1c40f",
      description: "Programming and bringing the bot to life",
    },
    {
      name: "Testing",
      icon: faVial,
      color: "#e67e22",
      description: "Ensuring the bot functions as expected",
    },
    {
      name: "Deployment",
      icon: faRocket,
      color: "#e74c3c",
      description: "Launching the bot into production",
    },
  ];

  const [isOpen, setisOpen] = useState(false);

  const faqs = [
    {
      question: "How customizable are the chatbots?",
      answer:
        "Our chatbots are highly customizable, from their conversational tone and responses to the specific tasks they perform. We work with you to ensure the chatbot aligns with your brand and meets your business needs.",
    },
    {
      question: "Can the chatbot handle complex customer inquiries?",
      answer:
        "Yes, our chatbots are equipped with advanced natural language processing capabilities, allowing them to handle both simple and complex inquiries. For more complex issues, the chatbot can seamlessly hand off the conversation to a human agent",
    },
    {
      question: "What platforms can the chatbots be deployed on?",
      answer:
        "Our chatbots can be deployed across various platforms, including websites, mobile apps, social media, and messaging apps like WhatsApp and Facebook Messenger.",
    },
  ];

  return (
    <>
      <div className="herobg p-5 ">
        <h1 className="heading1">Chatbots</h1>
        <p className="paragraph">
          Enhance Customer Engagement with Intelligent AI Chatbots
        </p>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-8">
            <h1 className="text-primaryy font-semibold text-center ">
              Service Description
            </h1>
            <p className="text-center mt-4 ">
              {" "}
              Our Chatbots service provides businesses with AI-powered virtual
              assistants that can engage with customers 24/7. <br /> <br />{" "}
              These chatbots are designed to handle a wide range of tasks, from
              answering common customer inquiries to guiding users through
              complex transactions. <br /> <br /> By automating customer
              interactions, your business can provide faster, more efficient
              service while freeing up human agents to handle more complex
              issues.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-5 col-md-4 col-md-4 p-3 ">
            <Image
              src="/Chatbots.jpg"
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
                Customer Inquiry Handling
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Transactional Assistance
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                FAQ Automation
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Multi-Platform Deployment
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Natural Language Understanding
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Conversational AI Development
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-10">
            <h2 className="mb-[30px] text-4xl mt-[30px] text-primaryy">
              Benefits
            </h2>
            <ul className="list-outside list-disc marker:text-2xl text-justify marker:text-secondaryy">
              <li>
                <strong>24/7 Customer Support: </strong> Provide round-the-clock
                assistance to customers, ensuring they can get help whenever
                they need it, without requiring a human agent to be available.{" "}
              </li>
              <li>
                <strong>Cost-Effective Customer Service:</strong> Reduce the
                need for a large customer service team by automating responses
                to common inquiries and tasks.{" "}
              </li>
              <li>
                <strong>Improved Response Times:</strong> Chatbots can instantly
                respond to customer queries, improving overall satisfaction and
                reducing wait times
              </li>
              <li>
                <strong>Scalability:</strong> Easily handle increasing numbers
                of customer interactions without a corresponding increase in
                costs or staffing needs.{" "}
              </li>
              <li>
                <strong>Personalized Interactions:</strong> Use AI to tailor
                responses based on customer history and preferences, creating a
                more personalized experience.{" "}
              </li>
              <li>
                <strong>Multi-Platform Integration:</strong> Deploy chatbots
                across various platforms, including websites, social media, and
                messaging apps, to reach customers wherever they are.
              </li>
              <li>
                <strong>Data Collection and Analysis:</strong> Gather valuable
                data from customer interactions that can be used to improve
                products, services, and customer support.
              </li>
              <li>
                <strong>Consistency in Messaging:</strong> Ensure that all
                customers receive consistent, accurate information, regardless
                of when or where they interact with the chatbot.
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
                <FontAwesomeIcon icon={faEnvelope} className="divicon" />
                <h4 className=" div_h">E-commerce</h4>
                <p>
                  Assist customers with product inquiries, order tracking, and
                  returns.
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faSuitcaseMedical} className="divicon" />
                <h4 className=" div_h">Healthcare</h4>
                <p>
                  Improve diagnostics, patient outcomes, and treatment plans
                  with machine learning models and medical image analysis.
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faBuildingColumns} className="divicon" />
                <h4 className=" div_h">Banking</h4>
                <p>
                  Provide instant answers to customer questions and assist with
                  basic transactions.
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

export default Chatbots;

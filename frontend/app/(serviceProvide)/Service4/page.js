"use client";

import React, { useState } from "react";
import "../servicestyle.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faSuitcaseMedical,
  faCoins,
  faDrawPolygon,
  faClipboardList,
  faRocket,
  faCode,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Faq from "@/app/components/Faq";

function ai_Agents() {
  const processes = [
    {
      name: "Requirement Analysis",
      icon: faClipboardList,
      color: "#3498db",
      description: "Understanding client requirements and goals",
    },
    {
      name: "Agent Design",
      icon: faDrawPolygon,
      color: "#2ecc71",
      description: "Creating the agent`s architecture and visual design",
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
      question: "What tasks can AI agents handle?",
      answer:
        "AI agents can handle a wide range of tasks, including system monitoring, process management, data analysis, and decision-making. They are designed to be flexible and can be adapted to your specific business needs.",
    },
    {
      question: "Do AI agents require constant supervision?",
      answer:
        "No, AI agents are designed to operate autonomously, making decisions and managing tasks without needing constant human supervision. However, they can be monitored and adjusted as necessary to ensure optimal performance.",
    },
    {
      question: "Can AI agents integrate with existing systems?",
      answer:
        "Yes, our AI agents can be integrated with your existing IT infrastructure, allowing them to work seamlessly alongside your current systems and processes.",
    },
  ];

  return (
    <>
      <div className="herobg p-5 ">
        <h1 className="heading1">AI Agents</h1>
        <p className="paragraph">
          Empower Your Operations with Autonomous AI Agents
        </p>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-8">
            <h1 className="text-primaryy font-semibold text-center ">
              Service Description
            </h1>
            <p className="text-center mt-4">
              {" "}
              Our AI Agents service delivers intelligent, autonomous agents that
              can perform complex tasks independently. <br /> <br /> These AI
              agents are designed to handle a variety of operations, from
              monitoring systems and managing workflows to making data-driven
              decisions. <br /> <br /> By deploying AI agents, your business can
              operate more efficiently, reduce manual intervention, and enhance
              decision-making processes across the board.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-5 col-md-4 col-md-4 p-3 ">
            <Image
              src="/AI Agents.jpg"
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
                System Monitoring
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Workflow Management
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Autonomous Decision-Making
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Data-Driven Operations
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Predictive Maintenance
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Real-Time Analytics and Alerts
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
                <strong>Autonomous Operation: </strong> AI agents can
                independently manage tasks, reducing the need for constant human
                oversight and intervention.{" "}
              </li>
              <li>
                <strong>Increased Operational Efficiency:</strong> Streamline
                processes by automating complex tasks, such as system monitoring
                and workflow management.{" "}
              </li>
              <li>
                <strong>Real-Time Decision Making:</strong> AI agents can
                analyze data and make decisions in real-time, leading to faster
                and more accurate responses.
              </li>
              <li>
                <strong>Scalability:</strong> Easily deploy additional AI agents
                as your business grows, without significant increases in cost or
                complexity.{" "}
              </li>
              <li>
                <strong>Enhanced Data Analysis:</strong> Use AI agents to
                continuously monitor and analyze data, identifying patterns and
                trends that might otherwise go unnoticed.{" "}
              </li>
              <li>
                <strong>Improved Resource Allocation:</strong> Free up human
                resources to focus on strategic initiatives by delegating
                routine tasks to AI agents.
              </li>
              <li>
                <strong>Cost Savings:</strong> Reduce operational costs by
                automating tasks that would otherwise require human labor.
              </li>
              <li>
                <strong>Adaptability:</strong>AI agents can learn and adapt over
                time, improving their effectiveness and efficiency as they
                process more data and experience more scenarios.
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
                <p>Monitor transactions for fraud detection and compliance.</p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faSuitcaseMedical} className="divicon" />
                <h4 className=" div_h">Healthcare</h4>
                <p>
                  Automate patient data management and appointment scheduling.
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faCoins} className="divicon" />
                <h4 className=" div_h">Finance</h4>
                <p>Manage production lines and optimize resource allocation.</p>
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

export default ai_Agents;

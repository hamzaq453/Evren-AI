"use client";
import React, { useState } from "react";
import "../servicestyle.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faSuitcaseMedical,
  faCoins,
  faSearch,
  faPencilRuler,
  faCogs,
  faChartLine,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Faq from "../../components/Faq";

function AIProcessAutomation() {
  const processes = [
    {
      name: "Discovery",
      icon: faSearch,
      color: "#3498db",
      description: "Research and understand user needs",
    },
    {
      name: "Design",
      icon: faPencilRuler,
      color: "#2ecc71",
      description: "Wireframing, prototyping, and visual design",
    },
    {
      name: "Implementation",
      icon: faCogs,
      color: "#f1c40f",
      description: "Bringing the design to life",
    },
    {
      name: "Optimization",
      icon: faChartLine,
      color: "#e67e22",
      description: "Testing, refining, and improving performance",
    },
    {
      name: "Support",
      icon: faHeadset,
      color: "#e74c3c",
      description: "Ongoing assistance and maintenance",
    },
  ];

  const [isOpen, setisOpen] = useState(false);

  const faqs = [
    {
      question: "What types of processes can be automated?",
      answer:
        "We can automate a wide range of processes, including data entry, document processing, supply chain management, customer service workflows, and more. Our solutions are flexible and can be customized to fit the unique needs of your business.",
    },
    {
      question: "How long does it take to implement AI Process Automation?",
      answer:
        "The implementation timeline varies depending on the complexity of the processes being automated. However, most projects can be completed within a few weeks to a few months, from initial discovery to full deployment.",
    },
    {
      question: "Will automation replace my employees?",
      answer:
        "AI Process Automation is designed to augment your workforce, not replace it. By automating repetitive tasks, your employees can focus on higher-value work that requires human creativity, problem-solving, and interpersonal skills.",
    },
  ];
  return (
    <>
      <div className="herobg p-5 ">
        <h1 className="heading1">AI Process Automation</h1>
        <p className="paragraph">
          Streamline and Optimize Your Business Operations with Intelligent
          Automation
        </p>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-8">
            <h1 className="text-primaryy font-semibold text-center p-2">
              Service Description
            </h1>
            <p className="text-center mt-3 ">
              {" "}
              Our AI Process Automation service is designed to transform your
              business operations by automating repetitive, time-consuming tasks
              using advanced artificial intelligence. <br /> <br/> Whether it's
              automating document processing, streamlining workflows, or
              optimizing supply chain management, our AI solutions help reduce
              operational costs, increase productivity, and improve accuracy.{" "}
              <br /><br/> By integrating AI into your processes, your business can
              achieve greater efficiency and scalability, allowing your team to
              focus on more strategic initiatives.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-5 col-md-4 col-md-4 p-3 ">
            <Image
              src="/AI Process Automation (1).jpg"
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
                Task Automation
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Workflow Optimization
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Data Entry Automation
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Supply Chain Management Automation
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Document Processing Automation
              </li>
              <li className="listitems pt-5 ">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="fonticon2"
                />{" "}
                Automated Reporting and Analytics
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-10">
            <h2 className="mb-[30px] text-4xl mt-[45px] text-primaryy">Benefits</h2>
            <ul className="list-outside list-disc marker:text-2xl text-justify marker:text-secondaryy">
              <li>
                <strong>Increased Efficiency:</strong> Automate repetitive
                tasks, significantly reducing the time required to complete
                processes and allowing your team to focus on more strategic
                activities.{" "}
              </li>
              <li>
                <strong>Cost Reduction:</strong> Lower operational costs by
                automating labor-intensive tasks, reducing the need for manual
                intervention and minimizing human errors.{" "}
              </li>
              <li>
                <strong>Enhanced Accuracy:</strong> Improve the consistency and
                accuracy of tasks such as data entry, calculations, and
                reporting by minimizing human error.{" "}
              </li>
              <li>
                <strong>Scalability:</strong> Easily scale your operations
                without proportionally increasing costs, as automated systems
                can handle increased workloads effortlessly.{" "}
              </li>
              <li>
                <strong>Improved Compliance:</strong> Ensure regulatory
                compliance by automating documentation and reporting processes,
                reducing the risk of non-compliance.{" "}
              </li>
              <li>
                <strong>Faster Time-to-Market:</strong> Accelerate business
                processes, leading to quicker product development and faster
                response times to market demands.
              </li>
              <li>
                <strong>Resource Optimization:</strong> Free up valuable human
                resources to focus on higher-value tasks, leading to more
                innovation and better use of talent.
              </li>
              <li>
                <strong>Data-Driven Insights:</strong> Automation can integrate
                with analytics to provide real-time data insights, helping you
                make informed decisions faster.
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
            <h1 className="application_h p-3">Industry Applications </h1>
            <div className="row m-0 justify-content-evenly ">
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faIndustry} className="divicon" />
                <h4 className="div_h">Manufacturing</h4>
                <p>
                  Automate assembly line tasks to reduce downtime and increase
                  output.
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3  ">
                <FontAwesomeIcon icon={faSuitcaseMedical} className="divicon" />
                <h4 className="div_h">Healthcare</h4>
                <p>
                  Streamline patient data management and administrative
                  processes, freeing up medical staff to focus on patient care.
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                <FontAwesomeIcon icon={faCoins} className="divicon" />
                <h4 className=" div_h">Finance</h4>
                <p>
                  Automate transactional processes, such as invoice processing
                  and compliance reporting, to improve accuracy and efficiency.
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

export default AIProcessAutomation;

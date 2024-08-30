"use client"

import React, { useState } from 'react';
import '../servicestyle.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faRobot, faSuitcaseMedical , faSearch, faDraftingCompass , faCode , faVial , faWrench } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Faq from '@/app/components/Faq';

function aiResearchandDevelopment() {

  const processes = [
    { name: 'Exploration', icon: faSearch, color: '#3498db', description: 'Investigating and gathering insights' },
    { name: 'Research Design', icon: faDraftingCompass, color: '#2ecc71', description: 'Structuring the research and planning' },
    { name: 'Development', icon: faCode, color: '#f1c40f', description: 'Creating the project based on the design' },
    { name: 'Testing', icon: faVial, color: '#e67e22', description: 'Ensuring everything functions as intended' },
    { name: 'Implementation', icon: faWrench, color: '#e74c3c', description: 'Applying the solution in a real-world setting' },
  ];

  const [isOpen , setisOpen] = useState(false);

  const faqs = [
    {
      question:'What types of AI research do you specialize in?',
      answer:'We specialize in a broad range of AI research areas, including machine learning, deep learning, natural language processing, computer vision, and more. Our team can tailor research efforts to meet your specific needs.',
    },
    {
      question:'How long do R&D projects typically take?',
      answer:'The duration of an R&D project depends on the scope and complexity of the research. Projects can range from a few months to over a year. We provide a detailed timeline during the project planning phase.',
    },
    {
      question:'Can we collaborate on research with your team?',
      answer:'Yes, collaboration is a key part of our R&D process. We work closely with your team to ensure the research aligns with your business goals and that the outcomes are practical and actionable.',
    },
  ];
  
  return (
    <>
      <div className='herobg p-5 '>
          <h1 className='heading1' >AI R&D (Research and Development)</h1>
          <p className='paragraph' >Drive Innovation with Cutting-Edge AI Research and Development</p>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-8">
            <h1 className='head2 text-center p-3 ' >Service Description</h1>
            <p className='text-center' >Our AI Research and Development (R&D) service is designed for businesses looking to explore the frontiers of AI technology. <br /> We work with you to develop innovative solutions that address specific challenges, pushing the boundaries of what AI can achieve. <br /> Whether you're interested in developing new algorithms, exploring AI applications in a novel field, or conducting groundbreaking research, our R&D team has the expertise to bring your vision to life.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-5 col-md-4 col-md-4 p-3 ">
              <Image src="/AI Research.jpg" width={500} height={300} className="sideimg" />
            </div>
            <div className="col-lg-5 col-md-4 col-sm-4 p-3 align-items-center ">
              <ul>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> AI Algorithm Development </li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> New Application Exploration</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Custom AI Research</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Industry-Specific AI Solutions</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Proof of Concept Development</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Advanced Prototyping and Testing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container p-5 ">
          <div className="row m-0">
            <div className="col-lg-12 col-md-10 col-sm-10">
              <h2 className='head2 text-left ' >Benefits</h2>
              <p>
                <strong>
                Cutting-Edge Innovation: 
                </strong>
                Stay ahead of industry trends by developing new AI technologies and applications that give you a competitive edge.
              </p>
              <p>
                <strong>
                Tailored Research Solutions:
                </strong>
                Conduct research that is specifically aligned with your business needs and objectives, ensuring relevant and actionable outcomes.
              </p>
              <p>
                <strong>
                Collaboration with Experts:
                </strong>
                Work closely with AI researchers and experts to explore new ideas, test hypotheses, and develop innovative solutions.
              </p>
              <p>
                <strong>
                Prototyping and Testing:
                </strong>  
                Develop and test new AI models, algorithms, and applications in a controlled environment before deploying them in real-world scenarios. 
              </p>
              <p>
                <strong>
                Breakthrough Discoveries:
                </strong> 
                Achieve significant advancements in AI that can transform your industry, opening up new opportunities for growth and success.
              </p>
              <p>
                <strong>
                Risk Management:
                </strong>
                Mitigate risks by exploring the potential impacts and challenges of new AI technologies before full-scale implementation.
              </p>
              <p>
                <strong>
                Intellectual Property Development:
                </strong> 
                Develop proprietary AI technologies that can be patented, providing a competitive advantage and potential revenue streams.
              </p>
              <p>
                <strong>
                Long-Term Strategic Advantage:
                </strong> 
                Position your business as a leader in AI by investing in continuous research and development, ensuring you remain at the forefront of innovation.
              </p>
            </div>
          </div>
        </div>


            
              <div className="process-section">
                <div className="row ">
                  <div className="col-lg-12 col-md-10 col-sm-10">
                    <h2>Our Process</h2>
                    <div className="hexagon-container">
                      {processes.map((process, index) => (
                        <div className="hexagon" key={index} style={{ '--color': process.color }}>
                          <div className="hexagon-content">
                            <FontAwesomeIcon icon={process.icon} className="iconp" />
                            <h3>{process.name}</h3>
                            <p className='pp' >{process.description}</p>
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
              <h1 className='application_h' >Industry Applications </h1>
              <div className="row m-0 justify-content-center ">
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faSuitcaseMedical} className='divicon' />
                  <h4 className=' div_h' >Healthcare</h4>
                  <p > Develop new diagnostic tools and treatment plans using AI.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faRobot} className='divicon' />
                  <h4 className=' div_h' >Automotive</h4>
                  <p>Explore AI applications in autonomous driving and smart mobility.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faCoins} className='divicon' />
                  <h4 className=' div_h' >Finance</h4>
                  <p >Innovate in areas like algorithmic trading and fraud detection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0 mb-5 justify-content-evenly ">
          <div className="col-lg-5 col-md-5 col-sm-5">
            <div className="py-[70px] middle:pt-[10px]  px-0 flex relative gap-[20px] justify-center items-start">
              <div className="flex max-w-[82vw] mx-auto items-center relative gap-20 maxlarge:max-w-[93vw] large:flex-col middle:gap-[15px]">
                <div className="animate-upAndDown large:w-[60%] large:mt-11 middle:mt-7 middle:w-[80%] small:w-[90%]">
                  <Image
                    priority={true}
                    quality={80}
                    width={700}
                    height={1000}
                    src="/faq-concept.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 pt-5 pr-5 ">
              <div class="w-[700px] pl-[50px] pt-[120px] pr-[100px]  text-left  flex flex-col gap-3 large:w-[500px] large:p-0 middle:w-[350px] small:w-[300px]">
                {faqs.map((faq, index) => (
                  <Faq key={index} question={faq.question} answer={faq.answer} style={{padding:'200px'}} />
                ))}
              </div>
            </div>
          </div>

    </>
  )
}

export default aiResearchandDevelopment;

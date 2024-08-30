"use client"

import React, { useState } from 'react';
import '../servicestyle.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcaseMedical , faCoins , faCircleInfo , faRobot , faShield, faMusic , faDatabase, faBrain, faVial, faRocket, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Faq from '../../components/Faq';

function machineDeepLearningSolutions() {

  const processes = [
    { name: 'Data Collection', icon: faDatabase, color: '#3498db', description: 'Gather and prepare relevant datasets' },
    { name: 'Model Development', icon: faBrain, color: '#2ecc71', description: 'Design and train AI/ML models' },
    { name: 'Testing', icon: faVial, color: '#f1c40f', description: 'Evaluate model performance and accuracy' },
    { name: 'Deployment', icon: faRocket, color: '#e67e22', description: 'Integrate model into production environment' },
    { name: 'Continuous Learning', icon: faSyncAlt, color: '#e74c3c', description: 'Refine and update models with new data' },
  ];

  const [isOpen , setisOpen] = useState(false);

  const faqs = [
    {
      question:'What is the difference between machine learning and deep learning?',
      answer:'Machine learning involves algorithms that learn from data to make predictions or decisions, while deep learning is a subset of machine learning that uses neural networks with multiple layers (hence "deep") to process large and complex datasets, such as images or speech.'
    },
    {
      question:'How much data is needed for machine and deep learning?',
      answer:'Machine learning can work with smaller datasets, while deep learning typically requires large amounts of data to train effectively, especially for tasks like image or speech recognition. However, techniques like transfer learning can be used to achieve good results with less data.'
    },
    {
      question:'How accurate are the predictions?',
      answer:'The accuracy of predictions depends on the quality of the data and the complexity of the model. We aim to achieve high accuracy through rigorous testing and continuous model refinement.'
    },
    {
      question:'Can models be customized for specific industries?',
      answer:'Absolutely. Our machine and deep learning models are customized to meet the specific needs of various industries, including finance, healthcare, retail, and more.'
    },
    {
      question:'Can these models integrate with existing systems?',
      answer:'Yes, our models are designed to integrate seamlessly with your existing IT infrastructure, ensuring they work in harmony with your current systems and processes.'
    },
    {
      question:'How do machine and deep learning models improve over time?',
      answer:'These models improve as they are exposed to more data, continuously learning and adapting to new patterns, which enhances their accuracy and effectiveness over time.'
    },
  ];

  return (
    <>
      <div className='herobg p-5 ' >
          <h1 className='heading1' >Machine & Deep Learning Solutions</h1>
          <p className='paragraph' >Streamline and Optimize Your Business Operations with Intelligent Automation</p>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-8">
            <h1 className='head2 text-center ' >Service Description</h1>
            <p className='text-center' >  Our Machine & Deep Learning Solutions service offers businesses cutting-edge AI technologies that leverage both machine learning and deep learning to solve complex challenges. <br /> Whether you need predictive modeling, data classification, image recognition, or natural language processing, our tailored solutions are designed to meet your specific needs. By harnessing the power of these AI technologies, your business can gain deeper insights, automate decision-making, and drive innovation across a wide range of applications.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-5 col-md-4 col-md-4 p-3 ">
              <Image src="/Machine & Deep Learning Solutions.jpg" width={500} height={300} className="sideimg" />
            </div>
            <div className="col-lg-5 col-md-4 col-sm-4 p-3 align-items-center ">
              <ul>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Predictive Modeling</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Data Classification</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Custom Algorithm Development</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Recommendation Systems</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Image and Speech Recognition</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Natural Language Processing (NLP)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container p-5 ">
          <div className="row m-0">
            <div className="col-lg-12 col-md-10 col-sm-10">
              <h2 className='head2' >Benefits</h2>
              <p><strong>Enhanced Predictive Capabilities: </strong> Accurately forecast market trends, customer behavior, and business outcomes using advanced predictive modeling techniques. </p>
              <p><strong>Superior Accuracy in Complex Tasks:</strong>  Achieve higher accuracy in tasks like image recognition, speech processing, and data classification, where traditional methods may fall short. </p>
              <p><strong>Customizable Solutions:</strong> Tailor machine and deep learning models to your specific business needs, ensuring they address unique challenges and deliver actionable insights. </p>
              <p><strong>Increased Efficiency:</strong> Automate data analysis and decision-making processes, significantly reducing the time and resources required for complex tasks </p>
              <p><strong>Scalability:</strong> Develop models that can grow and adapt as your business evolves, handling larger datasets and more complex queries over time. </p>
              <p><strong>Continuous Improvement:</strong>  Both machine and deep learning models improve over time as they are exposed to more data, leading to better performance and more accurate predictions.</p>
              <p><strong>Competitive Advantage:</strong>  Stay ahead of competitors by leveraging advanced AI techniques to optimize operations, enhance decision-making, and innovate in your industry.</p>
              <p><strong>Cost Savings:</strong> Reduce the need for extensive manual analysis and lower operational costs by automating complex data processing tasks.</p>
            </div>
          </div>
        </div>
       
        <div className="ai-process-section">
          <h2 className='h2s2' >AI Development Process</h2>
          <div className="hexagon-containers2">
            {processes.map((process, index) => (
              <div className="hexagons2" key={index} style={{ '--color': process.color }}>
                <div className="hexagon-contents2">
                  <FontAwesomeIcon icon={process.icon} className="icons2" />
                  <h3 className='h3s2' >{process.name}</h3>
                  <p className='ps2' >{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row m-0 ">
          <div className="col-lg-12 col-md-10 col-sm-10 p-5">
            <div className="container p-5 ">
              <h1 className='application_h p-3 ' >Industry Applications </h1>
              <div className="row m-0 justify-content-center ">
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faCircleInfo} className='divicon' />
                  <h4 className=' div_h' >Retail</h4>
                  <p >Optimize demand forecasting, inventory management, and personalized recommendations with AI-powered models.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faSuitcaseMedical} className='divicon' />
                  <h4 className=' div_h' >Healthcare</h4>
                  <p>Improve diagnostics, patient outcomes, and treatment plans with machine learning models and medical image analysis.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faCoins} className='divicon' />
                  <h4 className='div_h' >Finance</h4>
                  <p >Enhance risk assessment, fraud detection, and credit scoring with predictive modeling and deep learning algorithms.</p>
                </div>
              </div>
              <div className="row mt-5 m-0 justify-content-center ">
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faRobot} className='divicon' />
                  <h4 className=' div_h' >Automotive</h4>
                  <p >Develop autonomous driving systems with real-time object detection and deep learning algorithms.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faShield} className='divicon' />
                  <h4 className=' div_h' >Security</h4>
                  <p> Implement facial recognition, anomaly detection, and predictive analytics for enhanced security measures.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faMusic} className='divicon' />
                  <h4 className=' div_h' >Media & Entertainment</h4>
                  <p >Use NLP and deep learning to improve content recommendations, audience segmentation, and personalized media experiences</p>
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
              <div class="w-[700px] pl-[50px] pr-[50px] text-left  flex flex-col gap-3 large:w-[500px] large:p-0 middle:w-[350px] small:w-[300px]">
                {faqs.map((faq, index) => (
                  <Faq key={index} question={faq.question} answer={faq.answer} style={{padding:'200px'}} />
                ))}
              </div>
            </div>
          </div>
    </>
  )
}

export default machineDeepLearningSolutions;

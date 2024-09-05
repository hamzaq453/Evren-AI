"use client"

import React, { useState } from 'react';
import '../servicestyle.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassChart, faMusic, faPencil , faLightbulb, faDatabase, faCog, faSyncAlt, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Faq from '@/app/components/Faq';

function GenerativeAI() {

  const processes = [
    { name: 'Concept Development', icon: faLightbulb, color: '#3498db', description: 'Formulating and refining the initial concept' },
    { name: 'Data Preparation', icon: faDatabase, color: '#2ecc71', description: 'Collecting and preparing data for training' },
    { name: 'Model Training', icon: faCog, color: '#f1c40f', description: 'Training the model using prepared data' },
    { name: 'Iteration', icon: faSyncAlt, color: '#e67e22', description: 'Refining and improving the model through iterations' },
    { name: 'Deployment', icon: faRocket, color: '#e74c3c', description: 'Deploying the model into production' },
  ];
  
  const [isOpen, setisOpen] = useState(false);

  const faqs =[
    {
      question:'What types of content can Generative AI create?',
      answer:'Generative AI can create a wide range of content, including text (articles, poetry), images (artwork, designs), music, and even video. The possibilities are limited only by your imagination.',
    },
    {
      question:'Can Generative AI be customized to fit our brand`s style?',
      answer:'Yes, Generative AI models can be trained on your specific data and guidelines to produce content that aligns with your brand is style and voice.',
    },
    {
      question:'Is Generative AI suitable for all industries?',
      answer:'Generative AI has applications across various industries, including marketing, entertainment, design, and even product development. We can tailor the solutions to fit your industry-specific needs.',
    },
  ];

  return (
    <>
      <div className='herobg p-5 '>
          <h1 className='heading1' >Generative AI</h1>
          <p className='paragraph' >Unleash Creativity and Innovation with AI-Generated Content</p>
      </div>
      <div className="container p-5 ">
        <div className="row m-0">
          <div className="col-lg-12 col-md-10 col-sm-8">
            <h1 className='text-primaryy font-semibold text-center ' >Service Description</h1>
            <p className='text-center mt-4' >Our Generative AI service empowers businesses to create unique content, designs, and solutions using advanced artificial intelligence. <br /><br />  From generating text and images to creating music and video content, Generative AI opens up new possibilities for creativity and innovation. <br /> <br />  Whether you are looking to automate content creation, develop new product designs, or explore AI-generated art, our Generative AI solutions can help you push the boundaries of what is possible.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-5 col-md-4 col-md-4 p-3 ">
              <Image src="/Gen ai 2.jpg" width={500} height={300} alt="Side Image" className="sideimg" />
            </div>
            <div className="col-lg-5 col-md-4 col-sm-4 p-3 align-items-center ">
              <ul>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Content Generation (Text, Images, Music) </li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Design Automation</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Creative Process Automation</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> AI-Generated Art and Media</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' />Synthetic Data Creation</li>
                <li className='listitems pt-5 ' > <FontAwesomeIcon icon={faCircleCheck} className='fonticon2' /> Personalized Content Creation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container p-5 ">
          <div className="row m-0">
            <div className="col-lg-12 col-md-10 col-sm-10">
              <h2 className='mb-[30px] text-4xl mt-[45px] text-primaryy' >Benefits</h2>
              <ul className='className="list-outside list-disc marker:text-2xl text-justify marker:text-secondaryy"'>
              <li>
                <strong>
                  Creative Process Automation: 
                </strong> 
                  Automate the generation of content, designs, and other creative outputs, saving time and reducing the workload on creative teams.
              </li>
              <li>
                <strong>
                Unlimited Creative Potential: 
                </strong> 
                Explore new ideas and concepts that would be difficult or time-consuming to develop manually, pushing the boundaries of creativity.
              </li>
              <li>
                <strong>
                Personalization at Scale:
                </strong> 
                Generate personalized content for individual customers or audiences on a large scale, enhancing engagement and satisfaction. 
              </li>
              <li>
                <strong>
                Cost-Effective Content Creation:
                </strong>  
                Reduce the cost of producing high-quality content by leveraging AI to generate text, images, and other media. 
              </li>
              <li>
                <strong>
                Rapid Prototyping:
                </strong> 
                Quickly generate and iterate on design concepts, allowing for faster experimentation and innovation. 
              </li>
              <li>
                <strong>
                Customization:
                </strong> 
                Tailor AI-generated outputs to align with your brand is voice, style, and guidelines, ensuring consistency across all content.
              </li>
              <li>
                <strong>
                Increased Efficiency:
                </strong>  
                Produce large volumes of creative content in a fraction of the time it would take manually, enabling faster project completion.
              </li>
              <li>
                <strong>
                Enhanced Creativity and Innovation: 
                </strong>  
                Use AI as a tool to inspire new ideas and approaches, leading to more innovative products, campaigns, and designs.
              </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ai-process-section">
          <h2 className='h2s2' >The Process</h2>
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
              <h1 className='application_h' >Industry Applications </h1>
              <div className="row m-0 justify-content-center ">
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faMagnifyingGlassChart} className='divicon' />
                  <h4 className=' div_h' >Marketing</h4>
                  <p > Automate the creation of personalized content and ads.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faMusic} className='divicon' />
                  <h4 className=' div_h' >Entertainment</h4>
                  <p>Generate music, video content, and scripts for creative projects.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 industry_div p-5 m-3 ">
                  <FontAwesomeIcon icon={faPencil} className='divicon' />
                  <h4 className=' div_h' >Design</h4>
                  <p >Explore innovative product designs and architectural concepts.</p>
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
  )
}

export default GenerativeAI;

import React from 'react';
import Image from 'next/image';
import './stylesheet.css'

const Whyus = () => {
  return (
    <>
      <div className="container whyusdiv ">
        <div className="row justify-content-center">
          <div className="col-lg-5 m-3 ">
            <div className="container ml-md-auto ">
              <h3 class=" ml-0 mt-6 text-[#592E83] font-bold">Tailored Solutions</h3>
              <p class="ml-0 mb-0 font-normal text-sm leading-relaxed tracking-wide text-black small:text-xs p-2 text-justify ">
                We don't believe in one-size-fits-all AI. We collaborate with you to understand your specific needs and craft custom solutions that address them precisely.
              </p>
            </div>
          </div>
          <div className="col-lg-5 m-3 ">
            <Image src='/homepage/whyus/tailered Solution.png' priority={true} width={100} height={50} className='whyusimg rounded mx-auto d-block ' />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 m-3 ">
            <Image src='/homepage/whyus/human centered approach.png' priority={true} width={100} height={50} className='whyusimg rounded mx-auto d-block ' />
          </div>
          <div className="col-lg-5 m-3 ">
            <div className="container ml-md-auto ">
              <h3 class=" ml-0 mt-6 text-[#592E83] font-bold">Human-Centered Approach</h3>
              <p class="ml-0 mb-0 font-normal text-sm leading-relaxed tracking-wide text-black small:text-xs p-2 text-justify ">
                AI is powerful, but it's most effective when paired with human expertise. We blend cutting-edge technology with a human touch, ensuring your AI journey is smooth and successful.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 m-3 ">
            <div className="container ml-md-auto ">
              <h3 class=" ml-0 mt-6 text-[#592E83] font-bold">Proven Results</h3>
              <p class="ml-0 mb-0 font-normal text-sm leading-relaxed tracking-wide text-black small:text-xs p-2 text-justify ">
                We're not just about promises, we deliver. Our track record speaks for itself, with measurable results in increased efficiency, cost reduction, and growth for our clients.
              </p>
            </div>
          </div>
          <div className="col-lg-5 m-3 ">
            <Image src='/homepage/whyus/results (1).png' priority={true} width={100} height={50} className='whyusimg rounded mx-auto d-block ' />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 m-3 ">
            <Image src='/homepage/whyus/flexibility.png' priority={true} width={100} height={50} className='whyusimg rounded mx-auto d-block ' />
          </div>
          <div className="col-lg-5 m-3 ">
            <div className="container ml-md-auto ">
              <h3 class=" ml-0 mt-6 text-[#592E83] font-bold">Scalable and Flexible</h3>
              <p class="ml-0 mb-0 font-normal text-sm leading-relaxed tracking-wide text-black small:text-xs p-2 text-justify ">
                Whether you're a small startup or a large enterprise, we have solutions that adapt to your size and evolve with your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 m-3 ">
            <div className="container ml-md-auto ">
              <h3 class=" ml-0 mt-6 text-[#592E83] font-bold">Trust and Transparency</h3>
              <p class="ml-0 mb-0 font-normal text-sm leading-relaxed tracking-wide text-black small:text-xs p-2 text-justify ">
                We understand your data is your lifeblood. We prioritize security and transparency, ensuring your data is safe with us and you're always in control.
              </p>
            </div>
          </div>
          <div className="col-lg-5 m-3 ">
            <Image src='/homepage/whyus/trust (1).png' priority={true} width={100} height={50} className='whyusimg rounded mx-auto d-block ' />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 m-3 ">
            <Image src='/homepage/whyus/expert.png' priority={true} width={100} height={50} className='whyusimg rounded mx-auto d-block ' />
          </div>
          <div className="col-lg-5 m-3 ">
            <div className="container ml-md-auto ">
              <h3 class=" ml-0 mt-6 text-[#592E83] font-bold">Expert Team</h3>
              <p class="ml-0 mb-0 font-normal text-sm leading-relaxed tracking-wide text-black small:text-xs p-2 text-justify ">
                Our team is made up of passionate AI professionals with extensive experience in various industries. We're constantly learning and innovating to bring you the best possible solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 m-3 ">
            <div className="container ml-md-auto ">
              <h3 class=" ml-0 mt-6 text-[#592E83] font-bold">Ongoing Support</h3>
              <p class="ml-0 mb-0 font-normal text-sm leading-relaxed tracking-wide text-black small:text-xs p-2 text-justify ">
                We don't stop at implementation. We offer ongoing support and optimization to ensure your AI solutions continue to deliver value over time.
              </p>
            </div>
          </div>
          <div className="col-lg-5 m-3 ">
            <Image src='/homepage/whyus/support (1).png' priority={true} width={100} height={50} className='whyusimg rounded mx-auto d-block ' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Whyus

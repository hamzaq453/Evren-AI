import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Streamlining Recruitment with AI for Justin | Success Stories",
  description:
    "In the highly competitive recruitment landscape, Justin partnered with Evren AI to revolutionize the hiring process. The Resume Ranking System we developed automates the screening and ranking of resumes, transforming traditional hiring workflows into efficient, bias-free, and highly accurate operations. This system leverages advanced AI and NLP technologies to ensure that only the most qualified candidates are identified, drastically reducing time-to-hire and improving overall recruitment outcomes.",
};
const page = () => {
  return (
    <>
      {/* hero section start  */}
      <div className="py-[70px] px-0 flex relative gap-[20px] large:gap-0 justify-center items-center small:py-[50px]">
        <div className="flex max-w-[82vw] mx-auto items-center relative maxlarge:max-w-[90vw] inc:flex-col small:max-w-[100vw]">
          <div className="w-[90%] pr-[70px] text-left flex flex-col gap-1 maxlarge:pr-[100px] inc:text-center inc:pr-0">
            <h2 className="font-black text-primaryy text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl">
              Streamlining{" "}
              <span className="text-secondaryy">Recruitment with AI</span> for
              Justin
            </h2>
            <p className="text-base my-3 middle:text-sm small:text-xs text-justify">
              In the highly competitive recruitment landscape, Justin partnered
              with Evren AI to revolutionize the hiring process. The Resume
              Ranking System we developed automates the screening and ranking of
              resumes, transforming traditional hiring workflows into efficient,
              bias-free, and highly accurate operations. This system leverages
              advanced AI and NLP technologies to ensure that only the most
              qualified candidates are identified, drastically reducing
              time-to-hire and improving overall recruitment outcomes.
            </p>
            <div>
              <Image src="/divider.jpg" width={100} height={50} alt="" />
            </div>
            <div className="mt-4">
              <div className="">
                <div className="flex gap-24 middle:gap-10 text-lg text-gray-500 middle:text-base small:text-sm">
                  <div className="">
                    Industry :{" "}
                    <span className="font-bold text-black">
                      Recruitment & HR
                    </span>
                  </div>
                  <div>
                    Location :{" "}
                    <span className="font-bold text-black">Norway</span>
                  </div>
                </div>
                <div className="mt-3 text-lg text-gray-500 middle:text-base small:text-sm ">
                  <div className="inc:text-left">
                    Technology Used :{" "}
                    <div className="my-2 flex flex-wrap">
                      <div className="text-xs text-white border-2 p-3 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        Cloud Computing
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        NLP
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        AI
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        Machine Learning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inc:mt-8 animate-upAndDown w-[80%] inc:w-[60%] large:mt-11 middle:w-[80%] object-cover">
            <Image
              priority={true}
              quality={80}
              width={700}
              height={1000}
              src="/casestudy/casestudy4/main4.png"
              alt="Streamlining Recruitment with AI for Justin"
            />
          </div>
        </div>
        <div class="seperation"></div>
      </div>
      {/* hero section end  */}
      {/* the challenge section start */}
      <div className="py-[70px] px-0 flex relative gap-[20px] inc:gap-0 justify-center  items-center small:py-12 bg-white inc:py-20">
        <div className="flex max-w-[82vw] mx-auto items-center gap-5 relative maxlarge:max-w-[90vw] inc:flex-col small:max-w-[100vw]">
          <div className="w-[60%] middle:w-[80%]">
            <div className="flex gap-5">
              <div className=" transition duration-300 transform rounded hover:-translate-y-2">
                <Image
                  priority={true}
                  quality={80}
                  width={700}
                  height={435}
                  src="/casestudy/casestudy4/first.jpg"
                  alt=""
                  className="rounded-2xl"
                />
              </div>
              <div className="pt-14 transition duration-300 transform rounded hover:-translate-y-2">
                {" "}
                <Image
                  priority={true}
                  quality={80}
                  width={700}
                  height={435}
                  src="/casestudy/casestudy4/second.jpg"
                  alt=""
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="w-[60%] text-left flex flex-col gap-1 maxlarge:pr-0 inc:text-left  ml-[50px] inc:ml-0 inc:w-[85%] middle:w-[90%]">
            <h2 className="font-black text-primaryy text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl tracking-wide inc:text-center">
              Key Challenges and Objectives to Overcome
            </h2>
            <ul className="mt-4 flex flex-col gap-2 list-inside list-disc marker:text-secondaryy marker:text-2xl text-justify middle:text-sm small:text-xs p-0">
              <li className="font-bold">
                Labor-Intensive Resume Screening :{" "}
                <span className="font-light">
                  {" "}
                  Justin faced the challenge of manually reviewing large volumes
                  of resumes, a process that was time-consuming and prone to
                  human error.
                </span>
              </li>
              <li className="font-bold">
                Potential for Bias :{" "}
                <span className="font-light">
                  The traditional resume screening process was susceptible to
                  unconscious bias, which could impact diversity and inclusivity
                  in hiring.
                </span>
              </li>
              <li className="font-bold">
                Matching Candidates Accurately :
                <span className="font-light">
                  {" "}
                  Ensuring that candidates&apos; qualifications and skills aligned
                  precisely with job requirements was a persistent challenge,
                  often leading to extended hiring timelines and missed
                  opportunities.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* the challenge section end */}
      {/* testnomial section start */}
      <div class="p-5 sm:w-[50%] w-[90%] mx-auto text-center mb-7">
        <div class="bg-gray-200 p-8 rounded-xl shadow-xl drop-shadow-xl mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="block w-7 h-7 fill-brandclr text-gray-400 mb-4"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6 text-xs sm:text-base">
            The Resume Ranking System developed by Evren AI has revolutionized
            our hiring process. It’s faster, more accurate, and has eliminated
            bias from our recruitment efforts. We’ve seen tremendous
            improvements in our ability to attract and retain top talent, all
            thanks to Evren AI’s innovative solution.
          </p>
          <a class="inline-flex items-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-semibold text-secondaryy text-sm sm:text-base">
                — Justin
              </span>
            </span>
          </a>
        </div>
      </div>
      {/* testnomial section end */}
      {/* approach section start  */}
      <div className="py-[70px] px-0 flex relative gap-[20px] inc:gap-0 justify-center items-center small:py-[50px]">
        <div className="flex max-w-[82vw] mx-auto  items-center relative maxlarge:max-w-[90vw] inc:flex-col small:max-w-[100vw]">
          <div className="w-[60%] pr-[50px] text-left flex flex-col gap-1 maxlarge:pr-[100px] large:text-center inc:pr-0 inc:w-[85%] middle:w-[90%]">
            <h2 className="font-black text-primaryy text-4xl pr-55 large:text-3xl middle:text-2xl small:text-xl tracking-wide">
              Evren AI&apos;s Strategic Approach
            </h2>
            <ul className="mt-4 flex flex-col gap-2 list-inside list-disc marker:text-secondaryy marker:text-2xl text-justify middle:text-sm small:text-xs p-0">
              <li className="font-bold">
                Automated Resume Parsing :{" "}
                <span className="font-light">
                  {" "}
                  We implemented a robust resume parsing system that
                  automatically extracts key information from resumes, including
                  personal details, educational background, work experience, and
                  skills.
                </span>
              </li>
              <li className="font-bold">
                Customizable Ranking Algorithm :{" "}
                <span className="font-light">
                  The system features a sophisticated ranking algorithm that
                  evaluates candidates based on customizable criteria such as
                  skills, experience, education, and certifications, ensuring a
                  perfect match for the job specifications.
                </span>
              </li>
              <li className="font-bold">
                Integration and Scalability :
                <span className="font-light">
                  {" "}
                  The Resume Ranking System seamlessly integrates with existing
                  applicant tracking systems (ATS) and is scalable to handle
                  high volumes of resumes without compromising performance.
                </span>
              </li>
              <li className="font-bold">
                Bias-Free Recruitment :
                <span className="font-light">
                  {" "}
                  By automating the screening and ranking process, the system
                  minimizes unconscious bias, promoting diversity and
                  inclusivity in the recruitment process.
                </span>
              </li>
            </ul>
            <div></div>
          </div>
          <div className=" animate-upAndDown w-[45%] inc:mt-14 middle:w-[70%] object-cover">
            <Image
              priority={true}
              quality={80}
              width={700}
              height={435}
              src="/casestudy/casestudy4/third.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* approach section end */}
      {/* result section start */}
      <div>
        <div className="mx-auto text-center text-5xl font-bold my-7 tracking-wide text-primaryy inc:text-4xl middle:text-3xl ">
          The Results
        </div>
        <div className=" w-full py-9 my-16 mx-auto  text-center small:py-5 middle:my-7">
          <div className="grid grid-cols-4 place-content-center gap-0 maxlarge:grid-cols-2 maxlarge:gap-10 justify-center place-items-center middle:grid-cols-1">
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[300px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[7px] w-[235px] h-[285px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    Accelerated Hiring Process
                  </h1>
                  <p className="text-base small:text-sm">
                    The implementation led to a significant reduction in
                    screening time, enabling Justin to make quicker hiring
                    decisions and secure top talent faster.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-[#CAA8F5] opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class=" lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[300px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[7px] w-[235px] h-[285px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg">
                    Enhanced Matching Accuracy
                  </h1>
                  <p className="text-base small:text-sm">
                    The system&apos;s ranking algorithm improved the alignment
                    between job requirements and candidate qualifications,
                    leading to better hiring outcomes.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-secondaryy opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class=" lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[300px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[7px] w-[235px] h-[285px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg">
                    Scalable Recruitment Solution
                  </h1>
                  <p className="text-base small:text-sm">
                    The system efficiently handled an increase in application
                    volume, ensuring that performance remained consistent even
                    during peak recruitment periods.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-brandclr opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class=" lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[300px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[7px] w-[235px] h-[285px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg">
                    Promoted Diversity and Inclusivity
                  </h1>
                  <p className="text-base small:text-sm">
                    By reducing bias in the hiring process, the Resume Ranking
                    System helped Justin build a more diverse and inclusive
                    workforce.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-primaryy opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* result section end */}{" "}

      {/* other projects section start  */}
      <div>
        <div className="grid place-content-center py-20 large:py-14 middle:py-10 w-full text-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 large:text-3xl middle:text-xl text-primaryy">
              Discover our most recent projects.
            </h1>
            <p className="text-lg large:text-lg middle:mx-3 text-center middle:text-sm mx-3">
              Evren AI supports clients across the globe in adopting
              cutting-edge technology to transform customer interactions.
            </p>
          </div>
        </div>
        <div className="my-10 mx-10 grid grid-cols-2 gap-7 large:grid-cols-1 large:mx-16 place-content-center middle:mx-5 ">
          <Link href="/casestudy/casestudy1">
            <div className=" p-5 rounded-xl bg-slate-100 middle:p-3 h-full">
              <div className="w-[100%] overflow-hidden">
                <Image
                  priority={true}
                  quality={80}
                  width={735}
                  height={435}
                  src="/casestudy/casestudy1/AIChatbots.png"
                  className="-z-50 rounded-xl transition duration-300   transform hover:scale-[1.1]"
                  alt="Transforming Healthcare with AI Chatbots for Mechapal"
                />
              </div>
              <div className="mt-4 text-black">
                <h1 className="text-2xl font-bold middle:text-lg">
                Transforming Healthcare with AI Chatbots for Mechapal
                </h1>
                <p className="mt-2 middle:text-sm">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione atque, vitae officiis porro dicta sit.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/casestudy/casestudy2">
            <div className=" p-5 rounded-xl bg-slate-100 middle:p-3 h-full">
              <div className="w-[100%] overflow-hidden">
                <Image
                  priority={true}
                  quality={80}
                  width={735}
                  height={435}
                  src="/casestudy/casestudy2/main2.jpg"
                  className="-z-50 rounded-xl transition duration-300   transform hover:scale-[1.1]"
                  alt="Enhancing Construction Site Safety and Efficiency with AI"
                />
              </div>
              <div className="mt-4 text-black">
                <h1 className="text-2xl font-bold middle:text-lg">
                Enhancing Construction Site Safety and Efficiency with AI
                </h1>
                <p className="mt-2 middle:text-sm">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione atque, vitae officiis porro dicta sit.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/casestudy/casestudy3">
            <div className=" p-5 rounded-xl bg-slate-100 middle:p-3 h-full">
              <div className="w-[100%] overflow-hidden">
                <Image
                  priority={true}
                  quality={80}
                  width={735}
                  height={435}
                  src="/casestudy/casestudy3/main3.png"
                  className="-z-50 rounded-xl transition duration-300   transform hover:scale-[1.1]"
                  alt="Elevating Home Safety with AI Technology for Chris"
                />
              </div>
              <div className="mt-4 text-black">
                <h1 className="text-2xl font-bold middle:text-lg">
                Elevating Home Safety with AI Technology for Chris
                </h1>
                <p className="mt-2 middle:text-sm">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione atque, vitae officiis porro dicta sit.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/casestudy/casestudy5">
            <div className=" p-5 rounded-xl bg-slate-100 middle:p-3 h-full">
              <div className="w-[100%] overflow-hidden">
                <Image
                  priority={true}
                  quality={80}
                  width={735}
                  height={435}
                  src="/casestudy/casestudy5/main5.png"
                  className="-z-50 rounded-xl transition duration-300   transform hover:scale-[1.1]"
                  alt="Transforming Business Operations with AI Agents for Zenith Enterprises"
                />
              </div>
              <div className="mt-4 text-black">
                <h1 className="text-2xl font-bold middle:text-lg">
                  Transforming Business Operations with AI Agents for Zenith
                  Enterprises
                </h1>
                <p className="mt-2 middle:text-sm">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione atque, vitae officiis porro dicta sit.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* other projects section end */}
    </>
  );
};

export default page;

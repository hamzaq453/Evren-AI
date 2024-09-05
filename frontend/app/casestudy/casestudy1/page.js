import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Evren AI",
  description:
    "Our agency partnered with Mechapal to develop two cutting-edge AI chatbots: an AI Dietitian and an AI Psychiatrist. Utilizing the latest GraphRAG technique from unstructured data, combined with advanced AI agents, we created intelligent, responsive, and user-friendly chatbots designed to meet the diverse needs of health-conscious individuals.",
};
const page = () => {
  return (
    <>
      {/* hero section start  */}
      <div className="py-[70px] px-0 flex relative gap-[20px] large:gap-0 justify-center items-center small:py-[50px]">
        <div className="flex max-w-[82vw] mx-auto items-center relative maxlarge:max-w-[90vw] inc:flex-col small:max-w-[100vw]">
          <div className="w-[90%] pr-[70px] text-left flex flex-col gap-1 maxlarge:pr-[100px] inc:text-center inc:pr-0">
            <h2 className="font-black text-primaryy text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl">
              Transforming{" "}
              <span className="text-secondaryy">
                Healthcare with AI Chatbots
              </span>{" "}
              for Mechapal
            </h2>
            <p className="text-base my-3 middle:text-sm small:text-xs text-justify">
              Our agency partnered with Mechapal to develop two cutting-edge AI
              chatbots: an AI Dietitian and an AI Psychiatrist. Utilizing the
              latest GraphRAG technique from unstructured data, combined with
              advanced AI agents, we created intelligent, responsive, and
              user-friendly chatbots designed to meet the diverse needs of
              health-conscious individuals.
            </p>
            <div>
              <Image src="/divider.jpg" width={100} height={50} alt="" />
            </div>
            <div className="mt-4">
              <div className="">
                <div className="flex gap-24 middle:gap-10 text-lg text-gray-500 middle:text-base small:text-sm">
                  <div className="">
                    Industry :{" "}
                    <span className="font-bold text-black">Health Care</span>
                  </div>
                  <div>
                    Location :{" "}
                    <span className="font-bold text-black">United States</span>
                  </div>
                </div>
                <div className="mt-3 text-lg text-gray-500 middle:text-base small:text-sm ">
                  <div className="inc:text-left">
                    Technology Used :{" "}
                    <div className="my-2 flex flex-wrap">
                      <div className="text-xs text-white border-2 p-3 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        GraphRAG Technique
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        NLP
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        AI Agents
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        Machine Learning Algorithms
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        OpenAI
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        Data Analytics Tools
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondaryy rounded-3xl mx-2 mb-2 small:mx-1">
                        Cloud Computing Infrastructure
                      </div>{" "}
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
              src="/casestudy/casestudy1/AIChatbots.png"
              alt="Transforming Healthcare with AI Chatbots for Mechapal"
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
            <div className="flex">
              <div className=" transition duration-300 transform rounded hover:-translate-y-2">
                <Image
                  priority={true}
                  quality={80}
                  width={700}
                  height={435}
                  src="/casestudy/casestudy1/health 2.png"
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
                  src="/casestudy/casestudy1/health.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-[60%] text-left flex flex-col gap-1 maxlarge:pr-0 inc:text-left  ml-[50px] inc:ml-0 inc:w-[85%] middle:w-[90%]">
            <h2 className="font-black text-primaryy text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl tracking-wide inc:text-center">
              Key Challenges and Objectives to Overcome
            </h2>
            <ul className="mt-4 flex flex-col gap-2 list-inside list-disc marker:text-secondaryy marker:text-2xl text-justify middle:text-sm small:text-xs p-0">
              <li className="font-bold ">
                Handling Unstructured Health Data :{" "}
                <span className="font-light">
                  {" "}
                  Mechapal needed a solution to process vast amounts of
                  unstructured health data effectively, ensuring accurate and
                  personalized responses for users.
                </span>
              </li>
              <li className="font-bold">
                Ensuring Empathetic Interactions :{" "}
                <span className="font-light">
                  The AI needed to handle sensitive mental health and dietary
                  information with a high degree of empathy and understanding.
                </span>
              </li>
              <li className="font-bold">
                Delivering Real-Time Consultations :
                <span className="font-light">
                  {" "}
                  Mechapal required the AI chatbots to provide users with
                  real-time, context-aware consultations tailored to individual
                  health needs.
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
            The AI Dietitian and AI Psychiatrist chatbots developed by the Evren
            AI have taken our healthcare services to the next level. Their
            innovative approach using GraphRAG and AI Agents has enabled us to
            provide personalized, real-time consultations to our clients. The
            improvements in user satisfaction and engagement have been
            remarkable. We are extremely pleased with the partnership and the
            results!
          </p>
          <a class="inline-flex items-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-semibold text-secondaryy text-sm sm:text-base">
                Mechapal’s CEO
              </span>
              <span class="text-gray-500 text-xs sm:text-sm">Mechapal</span>
            </span>
          </a>
        </div>
      </div>
      {/* testnomial section end */}
      {/* approach section start  */}
      <div className="py-[70px] px-0 flex relative gap-[20px] inc:gap-0 justify-center items-center small:py-[50px]">
        <div className="flex max-w-[82vw] mx-auto  items-center relative maxlarge:max-w-[90vw] inc:flex-col small:max-w-[100vw]">
          <div className="w-[80%] pr-[50px] text-left flex flex-col gap-1 maxlarge:pr-[100px] large:text-center inc:pr-0 inc:w-[85%] middle:w-[90%]">
            <h2 className="font-black text-primaryy text-4xl pr-55 large:text-3xl middle:text-2xl small:text-xl tracking-wide">
              Evren AI&apos;s Strategic Approach
            </h2>
            <ul className="mt-4 flex flex-col gap-2 list-inside list-disc marker:text-secondaryy marker:text-2xl text-justify middle:text-sm small:text-xs p-0">
              <li className="font-bold">
                GraphRAG Technique Integration :{" "}
                <span className="font-light">
                  {" "}
                  We implemented the latest GraphRAG technique to process
                  unstructured data, ensuring the chatbots could generate
                  meaningful and accurate health advice.
                </span>
              </li>
              <li className="font-bold">
                Advanced AI Agents :{" "}
                <span className="font-light">
                  We integrated sophisticated AI Agents, enhancing the chatbots&apos;
                  ability to engage in complex, personalized dialogues with
                  users.
                </span>
              </li>
              <li className="font-bold">
                Healthcare-Focused AI Design :
                <span className="font-light">
                  {" "}
                  Both chatbots were designed with a healthcare professional
                  persona, ensuring interactions were empathetic and reliable.
                </span>
              </li>
              <li className="font-bold">
                Secure and Efficient Deployment :
                <span className="font-light">
                  {" "}
                  The chatbots were securely deployed, ensuring that users’ data
                  was handled with the utmost confidentiality.
                </span>
              </li>
            </ul>
            <div></div>
          </div>
          <div className=" animate-upAndDown w-[30%] inc:mt-14 middle:w-[70%] object-cover">
            <Image
              priority={true}
              quality={80}
              width={700}
              height={435}
              src="/casestudy/casestudy1/third.png"
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
              <div class="my-7 relative w-[250px] h-64 rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[5px] w-[235px] h-[240px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    Increased User Engagement
                  </h1>
                  <p className="text-base small:text-sm">
                    A 40% boost in user interaction with the AI-powered health
                    services.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-[#CAA8F5] opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class=" lg:w-[63]">
              <div class="my-7 relative w-[250px] h-64 rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[5px] w-[235px] h-[240px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg">
                    Enhanced Client Satisfaction
                  </h1>
                  <p className="text-base small:text-sm">
                    Client satisfaction scores improved by 35%, reflecting the
                    value of personalized, AI-driven consultations.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-secondaryy opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class=" lg:w-[63] ">
              <div class="my-7 relative w-[250px] h-64 rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[5px] w-[235px] h-[240px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    Efficiency Gains
                  </h1>
                  <p className="text-base small:text-sm">
                    The time required for health consultations was reduced by
                    50%, allowing Mechapal to serve more clients effectively.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-brandclr opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class=" lg:w-[63]">
              <div class="my-7 relative w-[250px] h-64 rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[5px] w-[235px] h-[240px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg">
                    Scalable AI Solutions
                  </h1>
                  <p className="text-base small:text-sm">
                    The chatbots&apos; success demonstrated the scalability of AI
                    solutions in the healthcare industry, opening doors for
                    future innovations.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-primaryy opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* result section end */}
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
                  AI-driven monitoring boosts construction site safety and streamlines operations in real-time.
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
                  AI-enhanced home safety with proactive hazard detection and remote caregiving.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/casestudy/casestudy4">
            <div className=" p-5 rounded-xl bg-slate-100 middle:p-3 h-full">
              <div className="w-[100%] overflow-hidden">
                <Image
                  priority={true}
                  quality={80}
                  width={735}
                  height={435}
                  src="/casestudy/casestudy4/main4.png"
                  className="-z-50 rounded-xl transition duration-300   transform hover:scale-[1.1]"
                  alt="Streamlining Recruitment with AI for Justin"
                />
              </div>
              <div className="mt-4 text-black">
                <h1 className="text-2xl font-bold middle:text-lg">
                  Streamlining Recruitment with AI for Justin
                </h1>
                <p className="mt-2 middle:text-sm">
                  {" "}
                  AI automates resume screening, accelerating hiring and eliminating bias.
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
                  AI automates tasks, boosting productivity and reducing costs for scalable growth.
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

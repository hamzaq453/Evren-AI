import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Elevating Home Safety with AI Technology for Chris | Success Stories",
  description:
    "As concerns for home safety reach new heights, Chris partnered with Evren AI to develop Smart Home, an advanced AI-powered system designed to safeguard households. This project leverages the latest in artificial intelligence and computer vision to create a proactive safety net, specifically targeting the protection of children and seniors. Smart Home transforms traditional home monitoring by providing real-time hazard detection and remote caregiving capabilities.",
};
const page = () => {
  return (
    <>
      {/* hero section start  */}
      <div className="py-[70px] px-0 flex relative gap-[20px] large:gap-0 justify-center items-center small:py-[50px]">
        <div className="flex max-w-[82vw] mx-auto items-center relative maxlarge:max-w-[90vw] inc:flex-col small:max-w-[100vw]">
          <div className="w-[90%] pr-[70px] text-left flex flex-col gap-1 maxlarge:pr-[100px] inc:text-center inc:pr-0">
            <h2 className="font-black text-primary text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl">
              Elevating <span className="text-secondary">Home Safety</span> with
              AI Technology for Chris
            </h2>
            <p className="text-base my-3 middle:text-sm small:text-xs text-justify">
              As concerns for home safety reach new heights, Chris partnered
              with Evren AI to develop Smart Home, an advanced AI-powered system
              designed to safeguard households. This project leverages the
              latest in artificial intelligence and computer vision to create a
              proactive safety net, specifically targeting the protection of
              children and seniors. Smart Home transforms traditional home
              monitoring by providing real-time hazard detection and remote
              caregiving capabilities.
            </p>
            <div>
              <img src="/divider.jpg" alt="" />
            </div>
            <div className="mt-4">
              <div className="">
                <div className="flex gap-24 middle:gap-10 text-lg text-gray-500 middle:text-base small:text-sm">
                  <div className="">
                    Industry :{" "}
                    <span className="font-bold text-black">Home Security</span>
                  </div>
                  <div>
                    Location :{" "}
                    <span className="font-bold text-black">Scotland</span>
                  </div>
                </div>
                <div className="mt-3 text-lg text-gray-500 middle:text-base small:text-sm ">
                  <div className="inc:text-left">
                    Technology Used :{" "}
                    <div className="my-2 flex flex-wrap">
                      <div className="text-xs text-white border-2 p-3 bg-secondary rounded-3xl mx-2 mb-2 small:mx-1">
                        NVIDIA Jetson Xavier
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondary rounded-3xl mx-2 mb-2 small:mx-1">
                        DeepStream SDK
                      </div>
                      <div className="text-xs text-white p-3 border-2 bg-secondary rounded-3xl mx-2 mb-2 small:mx-1">
                        SOTA AI Models
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inc:mt-8 animate-upAndDown w-[90%] inc:w-[60%] large:mt-11 middle:w-[80%] object-cover">
            <Image
              priority={true}
              quality={80}
              width={700}
              height={1000}
              src="/casestudy/casestudy3/main3.png"
              alt=""
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
                  src="/casestudy/casestudy3/first.jpg"
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
                  src="/casestudy/casestudy3/second.jpg"
                  alt=""
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="w-[60%] text-left flex flex-col gap-1 maxlarge:pr-0 inc:text-left  ml-[50px] inc:ml-0 inc:w-[85%] middle:w-[90%]">
            <h2 className="font-black text-primary text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl tracking-wide inc:text-center">
              Key Challenges and Objectives to Overcome
            </h2>
            <ul className="mt-4 flex flex-col gap-2 list-inside list-disc marker:text-secondary marker:text-2xl text-justify middle:text-sm small:text-xs">
              <li className="font-bold">
                Rising Safety Concerns :{" "}
                <span className="font-light">
                  {" "}
                  Chris needed a solution to address the increasing incidents of
                  preventable injuries and unintentional falls within homes,
                  especially among children and seniors.
                </span>
              </li>
              <li className="font-bold">
                Limitations of Traditional Systems :{" "}
                <span className="font-light">
                  Existing home monitoring systems were reactive and often
                  failed to detect potential hazards in real-time, leaving homes
                  vulnerable to avoidable accidents.
                </span>
              </li>
              <li className="font-bold">
                Need for Proactive Monitoring :
                <span className="font-light">
                  {" "}
                  Chris sought a system that could offer real-time hazard
                  detection and enable remote caregiving to ensure the safety
                  and well-being of household members.
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
            Smart home has transformed the way we ensure safety at home. The
            AI-driven hazard detection and remote monitoring capabilities give
            us peace of mind, knowing our loved ones are protected. The team
            delivered an exceptional product that has become an indispensable
            part of our daily lives.
          </p>
          <a class="inline-flex items-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-semibold text-secondary text-sm sm:text-base">
                — Chris
              </span>
            </span>
          </a>
        </div>
      </div>
      {/* testnomial section end */}
      {/* approach section start  */}
      <div className="py-[70px] px-0 flex relative gap-[20px] inc:gap-0 justify-center items-center small:py-[50px]">
        <div className="flex max-w-[82vw] mx-auto  items-center relative maxlarge:max-w-[90vw] inc:flex-col small:max-w-[100vw]">
          <div className="w-[70%] pr-[50px] text-left flex flex-col gap-1 maxlarge:pr-[100px] large:text-center inc:pr-0 inc:w-[85%] middle:w-[90%]">
            <h2 className="font-black text-primary text-4xl pr-55 large:text-3xl middle:text-2xl small:text-xl tracking-wide">
              Evren AI's Strategic Approach
            </h2>
            <ul className="mt-4 flex flex-col gap-2 list-inside list-disc marker:text-secondary marker:text-2xl text-justify middle:text-sm small:text-xs">
              <li className="font-bold">
                AI-Driven Hazard Detection :{" "}
                <span className="font-light">
                  {" "}
                  We developed a Smart Home System, utilizing advanced AI and
                  computer vision to automatically identify and alert users of
                  potential risks in the home environment, preventing accidents
                  before they happen.
                </span>
              </li>
              <li className="font-bold">
                Multi-Action Recognition :{" "}
                <span className="font-light">
                  Smart home's intelligent algorithms recognize a wide range of
                  critical actions and behaviors, providing comprehensive
                  coverage tailored to the specific safety needs of children and
                  seniors.
                </span>
              </li>
              <li className="font-bold">
                Remote Caregiving Capabilities :
                <span className="font-light">
                  {" "}
                  The system allows family members and caregivers to monitor and
                  intervene remotely, ensuring the safety of loved ones from any
                  location, providing peace of mind.
                </span>
              </li>
              <li className="font-bold">
                Seamless Integration & Personalization :
                <span className="font-light">
                  {" "}
                  The smart home integrates effortlessly with existing household
                  camera systems and offers customizable settings, allowing
                  users to tailor the system to their specific safety
                  preferences.
                </span>
              </li>
            </ul>
            <div></div>
          </div>
          <div className=" animate-upAndDown w-[50%] inc:mt-14 middle:w-[70%] object-cover">
            <Image
              priority={true}
              quality={80}
              width={700}
              height={435}
              src="/casestudy/casestudy3/third.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* approach section end */}
      {/* result section start */}
      <div>
        <div className="mx-auto text-center text-5xl font-bold my-7 tracking-wide text-primary inc:text-4xl middle:text-3xl ">
          The Results
        </div>
        <div className=" w-full py-9 my-16 mx-auto  text-center small:py-5 middle:my-7">
          <div className="grid grid-cols-4 place-content-center gap-0 maxlarge:grid-cols-2 maxlarge:gap-10 justify-center place-items-center middle:grid-cols-1">
            <div class="lg:w-[63]">
              <div class="relative w-[250px] h-[300px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[7px] w-[235px] h-[285px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    Enhanced Household Safety
                  </h1>
                  <p className="text-base small:text-sm">
                    The implementation of Smart Home led to a significant
                    reduction in preventable injuries, providing Chris with a
                    reliable safety solution for vulnerable household members.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-[#CAA8F5] opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class=" lg:w-[63]">
              <div class="relative w-[250px] h-[300px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[7px] w-[235px] h-[285px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg">
                    Operational Efficiency
                  </h1>
                  <p className="text-base small:text-sm">
                    Smart home minimized the need for constant manual
                    monitoring, allowing Chris to allocate resources more
                    effectively and focus on other critical aspects of home
                    management.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-secondary opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class=" lg:w-[63]">
              <div class="relative w-[250px] h-[300px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[7px] w-[235px] h-[285px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg">
                    Scalable and Future-Ready
                  </h1>
                  <p className="text-base small:text-sm">
                    The system's compatibility with existing technologies and
                    its adaptability to evolving safety needs ensured that the
                    Smart Home remains a sustainable, long-term solution.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-brandclr opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class=" lg:w-[63]">
              <div class="relative w-[250px] h-[300px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class="absolute top-[5px] left-[7px] w-[235px] h-[285px] z-20 bg-white/95 backdrop-blur-[24px] rounded-lg overflow-hidden outline outline-2 outline-white grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg">
                    Valuable Data Insights
                  </h1>
                  <p className="text-base small:text-sm">
                    The smart home provided Chris with actionable insights into
                    household safety trends, enabling informed decisions to
                    continuously improve safety protocols.
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-primary opacity-100 blur-[12px] animate-blob-bounce"></div>
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
            <h1 className="text-4xl font-bold mb-4 large:text-3xl middle:text-xl text-primary">
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
                  alt=""
                />
              </div>
              <div className="mt-4">
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
                  alt=""
                />
              </div>
              <div className="mt-4">
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
                  alt=""
                />
              </div>
              <div className="mt-4">
                <h1 className="text-2xl font-bold middle:text-lg">
                  Streamlining Recruitment with AI for Justin
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
                  alt=""
                />
              </div>
              <div className="mt-4">
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

import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { FaUserTie, FaCode, FaRobot, FaVideo, FaBrain, FaLaptopCode } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

export const metadata = {
  title: "Evren AI",
  description: `Evren AI was founded by individuals who believe in AI's potential.
              Our journey started with a simple question: how can we make AI
              accessible and beneficial to all? Driven by this mission, we
              created AI tools that empower businesses and individuals to
              achieve their goals, bridging the gap between potential and AI
              capabilities.`,
};
const Page = () => {
  return (
    <div>
      {/* about start  */}
      <div className="py-[70px] px-0 flex relative gap-[20px] inc:gap-0 justify-center  items-center small:py-[20px] bg-white inc:py-[10px]">
        <div className="flex max-w-[82vw] mx-auto items-center relative maxlarge:max-w-[90vw] inc:flex-col small:max-w-[100vw]">
          <div className="animate-upAndDown w-[90%] inc:w-[60%] inc:mt-11 middle:w-[80%]">
            <Image
              priority={true}
              quality={80}
              width={700}
              height={1000}
              src="/about/aboutimage.jpg"
              alt="About us image"
            />
          </div>
          <div className="w-[70%] middle:w-[85%] text-left flex flex-col gap-1 maxlarge:pr-0 inc:text-left  ml-[50px] inc:ml-0">
            <h2 className="font-black text-primaryy text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl">
              About Evren AI:{" "}
              <span className="text-3xl font-bold middle:text-xl small:text-lg text-secondaryy">
                Your AI Companion, for Tomorrow
              </span>
            </h2>
            <p className="text-base my-3 middle:text-sm small:text-xs text-justify">
              Evren AI was founded by individuals who believe in AI&apos;s potential.
              Our journey started with a simple question: how can we make AI
              accessible and beneficial to all? Driven by this mission, we
              provide AI services that empower businesses and individuals to
              achieve their goals, bridging the gap between potential and AI
              capabilities.
            </p>
            <div>
              <Image src="/divider.jpg" width={150}
              height={150} alt="divider" />
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex middle:flex-col middle:text-center gap-4  justify-center place-items-center">
                <div className="w-[100px] middle:w-[50px]">
                  <Image src="/about/svg/team.svg" width={50} height={50} alt="our expert staff" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-[#592E83]">
                    Our Expert Staff
                  </div>
                  <div className="text-[13.5px] mt-1">
                    The Evren AI team combines AI expertise with creativity and
                    problem-solving, fostering an innovative work environment
                    through diverse skills and backgrounds.
                  </div>
                </div>
              </div>
              <div className="flex  middle:flex-col middle:text-center gap-4 justify-center place-items-center">
                <div className="w-[100px] middle:w-[50px]">
                  <Image src="/about/svg/classreward.svg" width={50} height={50} alt="our mission" />
                </div>

                <div>
                  <div className="font-semibold text-lg text-[#592E83]">
                    Our Core Mission
                  </div>
                  <div className="text-[13.5px] mt-1">
                    At Evren AI, our goal is to make AI accessible to all by
                    creating user-friendly tools. We believe AI should empower
                    everyone, not just tech giants, to achieve their goals.
                  </div>
                </div>
              </div>
              <div className="flex  middle:flex-col middle:text-center gap-4 justify-center place-items-center">
                <div className="w-[100px] middle:w-[50px]">
                  <Image src="/about/svg/reward.svg" width={50} height={50} alt="our approach" />
                </div>

                <div>
                  <div className="font-semibold text-lg text-[#592E83]">
                    Our Approach
                  </div>
                  <div className="text-[13.5px] mt-1">
                    We develop AI solutions by closely collaborating with our
                    clients, listening to their needs, and creating customized
                    solutions that align with their objectives.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end  */}

      {/* ceo section start  */}

      <div className="py-[120px] px-0 flex relative gap-[20px] inc:gap-0 justify-center  items-center small:py-[30px] bg-white inc:py-[100px]">
        <div className="flex gap-24 maxlarge:gap-16 max-w-[82vw] mx-auto items-center relative maxlarge:max-w-[90vw] inc:flex-col small:max-w-[100vw]">
          <div className=" w-[50%] inc:mt-11 middle:w-[70%] overflow-hidden transition duration-300 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <Image
              priority={true}
              quality={80}
              width={700}
              height={1000}
              src="/about/teammembers/CEO.png"
              alt="About us image"
            />
          </div>
          <div className="w-[50%] middle:w-[85%] inc:w-[70%] text-left flex flex-col gap-1 maxlarge:pr-0 inc:text-left  ml-[50px] inc:ml-0">
            <h2 className="font-black text-primaryy text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl tracking-wide">
              WELCOME TO <span className=" text-secondaryy">Evren AI</span>
            </h2>
            <p className="text-lg my-3 middle:text-sm small:text-xs text-justify">

              <span className="text-primaryy font-bold text-2xl">&quot; </span>
              I am proud to lead a team at <b>Evren AI</b>, passionate about driving
              the boundaries in artificial intelligence and automation. It is our
              mission to empower businesses to achieve unparalleled efficiency,
              innovation, and growth through the deployment of cutting edge
              technologies.At <b>Evren AI</b>, we hold a firm belief in the
              transformative power of AI, not merely to enhance operations, but
              to unveil new opportunities that once lay beyond the realm of
              imagination. Each solution we craft is tailored to our client,s
              distinct needs, guaranteeing that we not only fulfill but surpass
              their expectations.
              <br></br><br></br>
              I invite you to explore our website and
              discover how we can partner with you to drive success in the
              digital age. Together, we can achieve great things. We are
              grateful for your presence on this journey with us.
              <span className="text-primaryy font-bold text-2xl">&quot; </span>
            </p>
            <div>
              <h1 className="text-xl font-semibold text-primaryy middle:text-lg small:text-base">
                Tariq Mehmood
              </h1>
              <span className="text-primaryy middle:text-sm">
                CEO, Evren AI
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ceo section end */}

      {/* team start  */}
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-secondaryy uppercase rounded-full bg-teal-accent-400">
                Core Team
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-xl font-bold leading-none tracking-tight text-primaryy sm:text-4xl md:mx-auto">
              <span className="relative inline-block text-secondaryy">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-[#592E83]">Welcome</span>
              </span>{" "}
              our talented team of professionals
            </h2>
            <p className="text-sm text-gray-700 md:text-lg">
              Our team at Evren AI blends AI expertise with creativity, working
              together to develop innovative solutions that empower our clients
              and drive success.
            </p>
          </div>
          <div className="grid gap-8 place-items-center sm:grid-cols-2 lg:grid-cols-4">
            {/* Template for all team member cards - update this section */}
            <div className="w-[280px] bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
              <div className="h-[160px] w-full relative bg-gradient-to-br from-primaryy/20 to-secondaryy/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primaryy to-secondaryy flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                  <FaUserTie className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-white/50 via-white/70 to-transparent backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primaryy mb-2">TARIQ MEHMOOD</h3>
                <p className="text-gray-600 text-lg font-sans mb-3">CEO</p>
              </div>
            </div>

            {/* Update all other team member cards with the same structure */}
            <div className="w-[280px] bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
              <div className="h-[160px] w-full relative bg-gradient-to-br from-primaryy/20 to-secondaryy/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primaryy to-secondaryy flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                  <FaRobot className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-white/50 via-white/70 to-transparent backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primaryy mb-2">HASSAN ALI</h3>
                <p className="text-gray-600 text-lg font-sans mb-3">CTO</p>
              </div>
            </div>

            <div className="w-[280px] bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
              <div className="h-[160px] w-full relative bg-gradient-to-br from-primaryy/20 to-secondaryy/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primaryy to-secondaryy flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                  <MdEngineering className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-white/50 via-white/70 to-transparent backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primaryy mb-2">MOAZZAM ALI</h3>
                <p className="text-gray-600 text-lg font-sans mb-3">SENIOR AI CONSULTANT</p>
              </div>
            </div>

            <div className="w-[280px] bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
              <div className="h-[160px] w-full relative bg-gradient-to-br from-primaryy/20 to-secondaryy/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primaryy to-secondaryy flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                  <FaBrain className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-white/50 via-white/70 to-transparent backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primaryy mb-2">ZULQARNAIN</h3>
                <p className="text-gray-600 text-lg font-sans mb-3">AI ENGINEER</p>
              </div>
            </div>

            <div className="w-[280px] bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
              <div className="h-[160px] w-full relative bg-gradient-to-br from-primaryy/20 to-secondaryy/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primaryy to-secondaryy flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                  <FaLaptopCode className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-white/50 via-white/70 to-transparent backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primaryy mb-2">SABAHAT FATIMA</h3>
                <p className="text-gray-600 text-lg font-sans mb-3">FULL STACK DEVELOPER</p>
              </div>
            </div>

            <div className="w-[280px] bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
              <div className="h-[160px] w-full relative bg-gradient-to-br from-primaryy/20 to-secondaryy/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primaryy to-secondaryy flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                  <FaCode className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-white/50 via-white/70 to-transparent backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primaryy mb-2">MUHAMMAD BILAL</h3>
                <p className="text-gray-600 text-lg font-sans mb-3">LEAD AI ENGINEER</p>
              </div>
            </div>

            <div className="w-[280px] bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
              <div className="h-[160px] w-full relative bg-gradient-to-br from-primaryy/20 to-secondaryy/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primaryy to-secondaryy flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                  <FaBrain className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-white/50 via-white/70 to-transparent backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primaryy mb-2">HAMZA QURESHI</h3>
                <p className="text-gray-600 text-lg font-sans mb-3">SENIOR AI ENGINEER</p>
              </div>
            </div>

            <div className="w-[280px] bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
              <div className="h-[160px] w-full relative bg-gradient-to-br from-primaryy/20 to-secondaryy/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primaryy to-secondaryy flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                  <BsPersonWorkspace className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-5 bg-gradient-to-br from-white/50 via-white/70 to-transparent backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primaryy mb-2">DR. INAMULLAH</h3>
                <p className="text-gray-600 text-lg font-normal font-medium mb-3">AI/ML ENGINEER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team end  */}
    </div>
  );
};

export default Page;

import React from "react";
import Testnomial from "../components/Testnomial";
import Button from "../components/Button";
import Image from "next/image";
import Contactform from "../components/Contactform";
import Teammember from "../components/Teammember";
const Page = () => {
  const team = [
    {
      names: "TARIQ MEHMOOD",
      image: "/manager.jpeg",
      position: "CEO/CTO",
    },
    {
      names: "HASSAN ALI",
      image: "/coo.jpeg",
      position: "COO & ML/AI ENGINEER",
    },
    {
      names: "MOAZZAM ALI",
      image: "/team-1.jpeg",
      position: "SENIOR AI ENGINEER",
    },
    {
      names: "Dr. MUHAMMAD AZHAR",
      image: "/team-2.jpeg",
      position: "SENIOR AI ENGINEER",
    },
    {
      names: "DOCTOR INAMULLAH",
      image: "/team-3.jpeg",
      position: "ML & AI ENGINEER",
    },
    {
      names: "ZULQARNAIN",
      image: "/team-2.jpeg",
      position: "AI ENGINEER",
    },
    {
      names: "SABAHAT FATIMA",
      image: "/team-4.jpeg",
      position: "FULL STACK DEVELOPER",
    },
    {
      names: "ATIKA QASIM",
      image: "/team-4.jpeg",
      position: "FULL STACK DEVELOPER",
    },
  ];
  return (
    <div>
      {/* about start  */}
      <div className="py-[70px] px-0 flex relative gap-[20px] large:gap-0 justify-center items-center small:py-[50px] bg-white">
        <div className="flex max-w-[82vw] mx-auto items-center relative maxlarge:max-w-[90vw] large:flex-col small:max-w-[100vw]">
          <div className="animate-upAndDown w-[90%] large:w-[60%] large:mt-11 middle:w-[70%]">
            <Image
              priority={true}
              quality={80}
              width={1000}
              height={2000}
              src="/aboutimage.jpg"
              alt=""
            />
          </div>
          <div className="w-[70%] text-left flex flex-col gap-1 maxlarge:pr-[100px] large:text-center large:pr-0 ml-[50px]">
            <h2 className="font-black text-[#592E83] text-4xl pr-55 large:text-3xl middle:text-2xl small:text-xl">
              About Evren AI:{" "}
              <span className="text-3xl font-bold">
                Your AI Companion, for Tomorrow
              </span>
            </h2>
            <p className="text-base my-3 middle:text-sm small:text-xs">
              Evren AI was founded by individuals who believe in AI's potential.
              Our journey started with a simple question: how can we make AI
              accessible and beneficial to all? Driven by this mission, we
              created AI tools that empower businesses and individuals to
              achieve their goals, bridging the gap between potential and AI
              capabilities.
            </p>
            <div>
              <img src="/divider.jpg" alt="" />
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex gap-4  justify-center place-items-center">
                <div className="w-[100px]">
                  <img src="/team.svg" alt="" />
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
              <div className="flex gap-4 justify-center place-items-center">
                <div className="w-[100px]">
                  <img src="/classreward.svg" alt="" />
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
              <div className="flex gap-4 justify-center place-items-center">
                <div className="w-[100px]">
                  <img src="/reward.svg" alt="" />
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

      {/* team start  */}
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-secondary uppercase rounded-full bg-teal-accent-400">
                Core Team
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#592E83] sm:text-4xl md:mx-auto">
              <span className="relative inline-block text-secondary">
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
            <p className="text-base text-gray-700 md:text-lg">
              Our team at Evren AI blends AI expertise with creativity, working
              together to develop innovative solutions that empower our clients
              and drive success.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((team, index) => (
              <Teammember
                key={index}
                names={team.names}
                image={team.image}
                position={team.position}
              />
            ))}
          </div>
        </div>
      </div>
      {/* team end  */}

      {/* acheivments start  */}
      <div className="bg-[#E6D6FA] w-full px-20 py-9 my-16 mx-auto text-center">
        <div className="grid grid-cols-4 gap-9">
          <div className="bg-white py-5 px-6 flex flex-col gap-1 content-center text-center w-[250px] justify-center relative">
            <span className="text-4xl font-bold">
              75<sup>+</sup>
            </span>
            <span className="text-[23px] font-semibold">Happy Clients</span>
            <div className="h-[7px] rounded-md bg-[#592E83] w-[40%] absolute bottom-[7px] left-[28%] "></div>
          </div>
          <div className="bg-white py-5 px-6 flex flex-col gap-1 text-center w-[250px] relative">
            <span className="text-4xl font-bold">
              5<sup>+</sup>
              <span className="text-3xl font-medium">year</span>
            </span>
            <span className="text-[23px] font-semibold">Experience</span>
            <div className="h-[7px] rounded-md bg-[#592E83] w-[40%] absolute  bottom-[7px] left-[28%] "></div>
          </div>
          <div className="bg-white py-5 px-6 flex flex-col gap-1 text-center w-[250px] relative">
            <span className="text-4xl font-bold">4</span>
            <span className="text-[23px] font-semibold">Our Awards</span>
            <div
              className="h-[7px] rounded-md bg-[#592E83] w-[40%] absolute
    bottom-[7px] left-[28%] "
            ></div>
          </div>
          <div className="bg-white py-5 px-6 flex flex-col gap-1 text-center w-[250px] relative">
            <span className="text-4xl font-bold">
              100<sup>+</sup>
            </span>
            <span className="text-[23px] font-semibold">Finished Projects</span>
            <div className="h-[7px] rounded-md bg-[#592E83] w-[40%] absolute bottom-[7px] left-[28%] "></div>
          </div>
        </div>
      </div>
      {/* acheivments end  */}

      {/* Testmonial start  */}
      <div className="bg-white py-20 middle:py-10">
        <Testnomial />
      </div>
      {/* Testmonial end  */}

      {/* ContactForm Start  */}
      <div className="bg-white py-[70px] px-0 flex relative gap-[20px] justify-center items-center large:py-[40px]">
        <div className="flex max-w-[82vw] mx-auto items-center relative maxlarge:max-w-[92vw] large:flex-col">
          <div className=" w-[50%] pr-[64px] text-left flex flex-col gap-7 large:pr-0 large:text-center large:gap-5 large:w-[70%] large:mb-6 middle:w-[90%]">
            <h2 className="font-black text-4xl text-[#592E83] large:text-3xl middle:text-2xl">
              Start your project with evrenai.
            </h2>
            <span className="large:text-base middle:text-sm ">
              Fill out the form, and tell us more about your business
              goals.We'll get back to you within 1 working day.{" "}
            </span>
            <p className="text-base font-extrabold  large:text-sm middle:text-xs">
              Would you rather directly get in touch ? We always have a time for
              a call or email!
            </p>
          </div>
          <div className="w-[40%] bg-white  p-10 rounded-3xl ml-32 flex flex-col gap-5 text-center shadow-xl drop-shadow-lg large:ml-0 large:p-4 large:w-[60%] middle:w-[75%] small:w-[90%]">
            <Contactform />
          </div>
        </div>
      </div>
      {/* Contactform end  */}
    </div>
  );
};

export default Page;

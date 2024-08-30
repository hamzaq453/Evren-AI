import React from "react";
// import Testnomial from "../components/Testnomial";
import Button from "../components/Button";
import Image from "next/image";
import Teammember from "../components/Teammember";

export const metadata = {
  title: "About EvrenAI | Innovators in AI Solutions",
  description: `Evren AI was founded by individuals who believe in AI's potential.
              Our journey started with a simple question: how can we make AI
              accessible and beneficial to all? Driven by this mission, we
              created AI tools that empower businesses and individuals to
              achieve their goals, bridging the gap between potential and AI
              capabilities.`,
};
const Page = () => {
  const team = [
    {
      names: "TARIQ MEHMOOD",
      image: "/about/teammembers/CEO.png",
      position: "CEO/CTO",
    },
    {
      names: "HASSAN ALI",
      image: "/about/teammembers/coo.jpeg",
      position: "COO & ML/AI ENGINEER",
    },
    {
      names: "MOAZZAM ALI",
      image: "/about/teammembers/team-1.jpeg",
      position: "Senior AI Consultant",
    },
    {
      names: "Dr. MUHAMMAD AZHAR",
      image: "/about/teammembers/team-2.jpeg",
      position: "SENIOR AI ENGINEER",
    },
    {
      names: "DOCTOR INAMULLAH",
      image: "/about/teammembers/team-3.jpeg",
      position: "ML & AI ENGINEER",
    },
    {
      names: "ZULQARNAIN",
      image: "/about/teammembers/team-2.jpeg",
      position: "AI ENGINEER",
    },
    {
      names: "SABAHAT FATIMA",
      image: "/about/teammembers/team-4.jpeg",
      position: "FULL STACK DEVELOPER",
    },
    {
      names: "ATIKA QASIM",
      image: "/about/teammembers/team-4.jpeg",
      position: "FULL STACK DEVELOPER",
    },
  ];

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
            <h2 className="font-black text-primary text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl">
              About Evren AI:{" "}
              <span className="text-3xl font-bold middle:text-xl small:text-lg text-secondary">
                Your AI Companion, for Tomorrow
              </span>
            </h2>
            <p className="text-base my-3 middle:text-sm small:text-xs text-justify">
              Evren AI was founded by individuals who believe in AI's potential.
              Our journey started with a simple question: how can we make AI
              accessible and beneficial to all? Driven by this mission, we
              created AI tools that empower businesses and individuals to
              achieve their goals, bridging the gap between potential and AI
              capabilities.
            </p>
            <div>
              <img src="/divider.jpg" alt="divider" />
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex middle:flex-col middle:text-center gap-4  justify-center place-items-center">
                <div className="w-[100px] middle:w-[50px]">
                  <img src="/about/svg/team.svg" alt="our expert staff" />
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
                  <img src="/about/svg/classreward.svg" alt="our mission" />
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
                  <img src="/about/svg/reward.svg" alt="our approach" />
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
            <h2 className="font-black text-primary text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl tracking-wide">
              WELCOME TO{" "}
              <span className=" text-secondary">
                Evren AI
              </span>
            </h2>
            <p className="text-base my-3 middle:text-sm small:text-xs text-justify">
              <span className="text-ternary font-bold text-2xl">" </span>
              I am proud to lead a team at <b>Evren AI</b>, passionate about driving
              the boundaries in artificial intelligence and automation. It's our
              mission to empower businesses to achieve unparalleled efficiency,
              innovation, and growth through the deployment of cutting edge
              technologies.At <b>Evren AI</b>, we hold a firm belief in the
              transformative power of AI, not merely to enhance operations, but
              to unveil new opportunities that once lay beyond the realm of
              imagination. Each solution we craft is tailored to our client's
              distinct needs, guaranteeing that we not only fulfill but surpass
              their expectations.
              <br></br><br></br>
              I invite you to explore our website and
              discover how we can partner with you to drive success in the
              digital age. Together, we can achieve great things. We are
              grateful for your presence on this journey with us.
              <span className="text-ternary font-bold text-2xl">" </span>
            </p>
            <div>
            <h1 className="text-xl font-semibold text-primary middle:text-lg small:text-base">Tariq Mehmood</h1>
            <span className="text-secondary middle:text-sm">CEO, Evren AI</span>
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
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-secondary uppercase rounded-full bg-teal-accent-400">
                Core Team
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
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
            <p className="text-sm text-gray-700 md:text-lg">
              Our team at Evren AI blends AI expertise with creativity, working
              together to develop innovative solutions that empower our clients
              and drive success.
            </p>
          </div>
          <div className="grid gap-10 place-items-center sm:grid-cols-2 lg:grid-cols-4">
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
      <div className="bg-secondary w-full px-12 py-9 my-16 mx-auto  text-center maxlarge:px-10">
        <div className="grid grid-cols-4 gap-[75px] inc:grid-cols-2 justify-center place-items-center middle:grid-cols-1">
          <div className="bg-white py-5 px-6 flex flex-col gap-1 content-center text-center w-[250px] justify-center relative maxlarge:w-[220px] inc:w-[230px] maxlarge:px-3">
            <span className="text-4xl font-bold">
              75<sup>+</sup>
            </span>
            <span className="text-[23px] font-semibold">Happy Clients</span>
            <div className="h-[7px] rounded-md bg-[#592E83] w-[40%] absolute bottom-[7px] left-[28%] "></div>
          </div>
          <div className="bg-white py-5 px-6 flex flex-col gap-1 text-center w-[250px] relative maxlarge:w-[220px] inc:w-[230px] maxlarge:px-3">
            <span className="text-4xl font-bold">
              5<sup>+</sup>
              <span className="text-3xl font-medium">year</span>
            </span>
            <span className="text-[23px] font-semibold">Experience</span>
            <div className="h-[7px] rounded-md bg-[#592E83] w-[40%] absolute  bottom-[7px] left-[28%] "></div>
          </div>
          <div className="bg-white py-5 px-6 flex flex-col gap-1 text-center w-[250px] relative maxlarge:w-[220px] inc:w-[230px] maxlarge:px-3">
            <span className="text-4xl font-bold">4</span>
            <span className="text-[23px] font-semibold">Our Awards</span>
            <div
              className="h-[7px] rounded-md bg-[#592E83] w-[40%] absolute
    bottom-[7px] left-[28%] "
            ></div>
          </div>
          <div className="bg-white py-5 px-6 flex flex-col gap-1 text-center w-[250px] relative maxlarge:w-[220px] inc:w-[230px] maxlarge:px-3">
            <span className="text-4xl font-bold">
              100<sup>+</sup>
            </span>
            <span className="text-[23px] font-semibold">Projects Done</span>
            <div className="h-[7px] rounded-md bg-primary w-[40%] absolute bottom-[7px] left-[28%] "></div>
          </div>
        </div>
      </div>
      {/* acheivments end  */}
    </div>
  );
};

export default Page;

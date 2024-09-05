import React from "react";
// import Testnomial from "../components/Testnomial";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

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
  const team = [
    {
      names: "TARIQ MEHMOOD",
      image: "/about/teammembers/CEO.png",
      position: "CEO",
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
    {
      names: "AFRAH FATIMA",
      image: "/about/teammembers/team-4.jpeg",
      position: "SENIOR UI/UX  DESIGNER",
    },
    {
      names: "HAMNA HAMEED",
      image: "/about/teammembers/team-4.jpeg",
      position: "SENIOR VIDEO EDITOR",
    },
    {
      names: "MUHAMMAD AHTSHAM",
      image: "/about/teammembers/team-3.jpeg",
      position: "VIDEO EDITOR & DOP",
    },
    {
      names: "MUHAMMAD ATEEQ",
      image: "/about/teammembers/team-2.jpeg",
      position: "SENIOR SOCIAL MEDIA STRATEGIST ",
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
            <h2 className="font-black text-primaryy text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl tracking-wide">
              WELCOME TO{" "}
              <span className=" text-secondaryy">
                Evren AI
              </span>
            </h2>
            <p className="text-base my-3 middle:text-sm small:text-xs text-justify">
              <span className="text-primaryy font-bold text-2xl">&quot; </span>
              I am proud to lead a team at <b>Evren AI</b>, passionate about driving
              the boundaries in artificial intelligence and automation. It is our
              mission to empower businesses to achieve unparalleled efficiency,
              innovation, and growth through the deployment of cutting edge
              technologies.At <b>Evren AI</b>, we hold a firm belief in the
              transformative power of AI, not merely to enhance operations, but
              to unveil new opportunities that once lay beyond the realm of
              imagination. Each solution we craft is tailored to our client&apos;s
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
            <h1 className="text-xl font-semibold text-primaryy middle:text-lg small:text-base">Tariq Mehmood</h1>
            <span className="text-secondaryy middle:text-sm">CEO, Evren AI</span>
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
          <div className="grid gap-10 place-items-center sm:grid-cols-2 lg:grid-cols-4">
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    TARIQ MEHMOOD
                  </h1>
                  <p className="text-base small:text-sm">CEO</p>
                  <div className="flex justify-center">
                    {" "}
                    <Link
                      href="https://www.linkedin.com/in/tariq-evrenai/"
                      target="_blank"
                    >
                      <button class="w-9 h-9 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300 outline-none focus:outline-none">
                        <svg
                          class="fill-primaryy relative z-10 transition-all duration-300 group-hover:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 72 72"
                          fill="none"
                        >
                          <path
                            d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                            fill=""
                          />
                        </svg>
                        <div class="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-primaryy opacity-50 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    HASSAN ALI
                  </h1>
                  <p className="text-base small:text-sm">
                    CTO & ML/AI ENGINEER
                  </p>
                  <div className="flex justify-center">
                    {" "}
                    <Link
                      href="https://www.linkedin.com/in/harryali"
                      target="_blank"
                    >
                      <button class="w-9 h-9 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300 outline-none focus:outline-none">
                        <svg
                          class="fill-primaryy relative z-10 transition-all duration-300 group-hover:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 72 72"
                          fill="none"
                        >
                          <path
                            d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                            fill=""
                          />
                        </svg>
                        <div class="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-secondaryy opacity-50 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    MOAZZAM ALI
                  </h1>
                  <p className="text-base small:text-sm">
                    Senior AI Consultant
                  </p>
                  <div className="flex justify-center">
                    {" "}
                    <Link
                      href="https://www.linkedin.com/in/meermoazzam/"
                      target="_blank"
                    >
                      <button class="w-9 h-9 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300 outline-none focus:outline-none">
                        <svg
                          class="fill-primaryy relative z-10 transition-all duration-300 group-hover:fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 72 72"
                          fill="none"
                        >
                          <path
                            d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                            fill=""
                          />
                        </svg>
                        <div class="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-brandclr opacity-50 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>

            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    Dr. MUHAMMAD AZHAR
                  </h1>
                  <p className="text-base small:text-sm">SENIOR AI ENGINEER</p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-custom-purple opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    ATIKA QASIM
                  </h1>
                  <p className="text-base small:text-sm">
                    FULL STACK DEVELOPER
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-brandclr opacity-50 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                  MUHAMMAD ATEEQ
                  </h1>
                  <p className="text-base small:text-sm">SENIOR SOCIAL MEDIA STRATEGIST</p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-ternary opacity-100 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    ZULQARNAIN
                  </h1>
                  <p className="text-base small:text-sm">AI ENGINEER</p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-secondaryy opacity-50 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    SABAHAT FATIMA
                  </h1>
                  <p className="text-base small:text-sm">
                    FULL STACK DEVELOPER
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-primaryy opacity-50 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    AFRAH FATIMA
                  </h1>
                  <p className="text-base small:text-sm">
                    SENIOR UI/UX  DESIGNER
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-primaryy opacity-50 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    HAMNA HAMEED
                  </h1>
                  <p className="text-base small:text-sm">SENIOR VIDEO EDITOR</p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-secondaryy opacity-50 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    DOCTOR INAMULLAH
                  </h1>
                  <p className="text-base small:text-sm">
                    ML & AI ENGINEER
                  </p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-brandclr opacity-50 blur-[12px] animate-blob-bounce"></div>
              </div>
            </div>
            <div class="lg:w-[63]">
              <div class="my-7 relative w-[250px] h-[250px] rounded-xl z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                <div class=" absolute top-[6px] left-[7px] w-[235px] h-[238px] z-20 backdrop-blur-[24px] rounded-lg overflow-hidden  grid place-content-center text-center px-3">
                  <h1 className="text-xl font-bold mb-4 small:text-lg ">
                    MUHAMMAD AHTSHAM
                  </h1>
                  <p className="text-base small:text-sm">VIDEO EDITOR & DOP</p>
                </div>
                <div class="absolute z-10 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-ternary opacity-100 blur-[12px] animate-blob-bounce"></div>
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

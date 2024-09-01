import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Success Stories | Evren AI",
  description:`Discover how we've helped businesses across industries harness the power of AI. Our case studies showcase real-world applications of our solutions, highlighting the challenges faced, strategies implemented, and the transformative results achieved. See how EvrenAI's tailored AI strategies have empowered companies to optimize processes, enhance customer experiences, and drive innovation.`,
}
const page = () => {
  return (
    <>
      <div className="grid place-content-center py-20 large:py-14 middle:py-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 large:text-4xl middle:text-3xl">
            Case Studies
          </h1>
          <span className="text-xl large:text-lg middle:mx-3 text-center middle:text-base">
            Explore some of the transformative journeys of Devsinc's global
            clients.
          </span>
        </div>
      </div>
      <div className="bg-[#FFFFFF] pt-[30px]  pb-20 px-20 maxlarge:px-12 middle:px-7 flex relative gap-[20px] justify-center items-center m-0  small:px-5 ">
        <div className="flex w-full mx-auto items-center relative flex-col gap-3 ">
          <div className=" grid grid-cols-1 gap-14">
            <Link href="/casestudy/casestudy1">
              <div className="bg-secondaryy pr-16 pl-12 rounded-[60px] min-h-[370px] flex justify-center gap-9 maxlarge:gap-0 tracking-wide items-center maxlarge:pr-12 maxlarge:pl-7 inc:pt-14 inc:text-center inc:px-12 inc:gap-10 inc:flex-col middle:px-8 middle:pb-6 small:pt-10 small:rounded-2xl small:px-5">
                <div className="w-[600px] inc:w-auto mr-10 text-white inc:mr-0 ">
                  <h1 className="text-3xl font-bold mb-3 middle:text-2xl small:text-xl ">
                    Transforming Healthcare with AI Chatbots for Mechapal
                  </h1>
                  <span className="text-base middle:text-sm small:text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione atque, vitae officiis porro dicta sit.
                  </span>
                </div>
                <div className="flex justify-end flex-col h-full ">
                  <div className="w-[100%]  mt-[60px] large:mt-0 overflow-hidden">
                    <Image
                      priority={true}
                      quality={80}
                      width={735}
                      height={435}
                      src="/casestudy/casestudy1/AIChatbots.png"
                      className="-z-50 rounded-3xl transition duration-300   transform hover:scale-[1.1] overflow-hidden"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/casestudy/casestudy2">
              <div className="bg-secondaryy pr-16 pl-12 rounded-[60px] min-h-[370px] flex justify-center gap-9 maxlarge:gap-0 tracking-wide items-center maxlarge:pr-12 maxlarge:pl-7 inc:pt-14 inc:text-center inc:px-12 inc:gap-10 inc:flex-col middle:px-8 middle:pb-6 small:pt-10 small:rounded-2xl small:px-5">
                <div className=" mr-10 w-[600px] inc:w-auto text-white inc:mr-0 ">
                  <h1 className="text-3xl font-bold mb-3 middle:text-2xl small:text-xl">
                  Enhancing Construction Site Safety and Efficiency with AI
                  </h1>
                  <span className="text-base middle:text-sm small:text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione atque, vitae officiis porro dicta sit.
                  </span>
                </div>
                <div className="flex justify-end flex-col h-full">
                  <div className="w-[100%]  mt-[60px] large:mt-0 overflow-hidden">
                    <Image
                      priority={true}
                      quality={80}
                      width={735}
                      height={435}
                      src="/casestudy/casestudy2/main2.jpg"
                      className="-z-50 rounded-3xl transition duration-300   transform hover:scale-[1.1] overflow-hidden"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/casestudy/casestudy3">
              <div className="bg-secondaryy pr-16 pl-12 rounded-[60px] min-h-[370px] flex justify-center gap-9 maxlarge:gap-0 tracking-wide items-center maxlarge:pr-12 maxlarge:pl-7 inc:pt-14 inc:text-center inc:px-12 inc:gap-10 inc:flex-col middle:px-8 middle:pb-6 small:pt-10 small:rounded-2xl small:px-5">
                <div className=" mr-10 w-[600px] inc:w-auto text-white inc:mr-0 ">
                  <h1 className="text-3xl font-bold mb-3 middle:text-2xl small:text-xl ">
                  Elevating Home Safety with AI Technology for Chris
                  </h1>
                  <span className="text-base middle:text-sm small:text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione atque, vitae officiis porro dicta sit.
                  </span>
                </div>
                <div className="flex justify-end flex-col h-full">
                  <div className="w-[100%]  mt-[60px] large:mt-0 overflow-hidden">
                    <Image
                      priority={true}
                      quality={80}
                      width={735}
                      height={435}
                      src="/casestudy/casestudy3/main3.png"
                      className="-z-50 rounded-3xl transition duration-300   transform hover:scale-[1.1] overflow-hidden"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/casestudy/casestudy4">
              <div className="bg-secondaryy pr-16 pl-12 rounded-[60px] min-h-[370px] flex justify-center gap-9 maxlarge:gap-0 tracking-wide items-center maxlarge:pr-12 maxlarge:pl-7 inc:pt-14 inc:text-center inc:px-12 inc:gap-10 inc:flex-col middle:px-8 middle:pb-6 small:pt-10 small:rounded-2xl small:px-5">
                <div className=" mr-10 w-[600px] inc:w-auto text-white inc:mr-0 ">
                  <h1 className="text-3xl font-bold mb-3 middle:text-2xl small:text-xl">
                  Streamlining Recruitment with AI for Justin
                  </h1>
                  <span className="text-base middle:text-sm small:text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione atque, vitae officiis porro dicta sit.
                  </span>
                </div>
                <div className="flex justify-end flex-col h-full">
                  <div className="w-[100%]  mt-[60px] large:mt-0 overflow-hidden">
                    <Image
                      priority={true}
                      quality={80}
                      width={735}
                      height={435}
                      src="/casestudy/casestudy4/main4.png"
                      className="-z-50 rounded-3xl transition duration-300   transform hover:scale-[1.1] overflow-hidden"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/casestudy/casestudy5">
              <div className="bg-secondaryy pr-16 pl-12 rounded-[60px] min-h-[370px] flex justify-center gap-9 maxlarge:gap-0 tracking-wide items-center maxlarge:pr-12 maxlarge:pl-7 inc:pt-14 inc:text-center inc:px-12 inc:gap-10 inc:flex-col middle:px-8 middle:pb-6 small:pt-10 small:rounded-2xl small:px-5">
                <div className=" mr-10 w-[600px] inc:w-auto text-white inc:mr-0">
                  <h1 className="text-3xl font-bold mb-3 middle:text-2xl small:text-xl">
                  Transforming Business Operations with AI Agents for Zenith Enterprises
                  </h1>
                  <span className="text-base middle:text-sm small:text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione atque, vitae officiis porro dicta sit.
                  </span>
                </div>
                <div className="flex justify-end flex-col h-full ">
                  <div className="w-[100%]  mt-[60px] large:mt-0 overflow-hidden">
                    <Image
                      priority={true}
                      quality={80}
                      width={735}
                      height={435}
                      src="/casestudy/casestudy5/main5.png"
                      className="-z-50 rounded-3xl transition duration-300   transform hover:scale-[1.1] overflow-hidden"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="py-[70px] px-0 flex relative gap-[20px] inc:gap-0 justify-center items-center small:py-[50px]">
      <div className="flex max-w-[82vw] mx-auto items-center relative maxlarge:max-w-[90vw] inc:flex-col small:max-w-[100vw]">
        <div className="w-[80%] pr-[50px] text-left flex flex-col gap-1 maxlarge:pr-[100px] inc:text-center inc:pr-0 inc:gap-0">
          <span className="text-black font-extrabold text-xl inc:text-lg middle:text-base">
            Ditch the Manual, Embrace the Future
          </span>
          <h2 className="font-black text-primaryy text-4xl pr-55 inc:text-3xl middle:text-2xl small:text-xl">
            Evren AI Transforms, How You Do Business
          </h2>
          <p className="text-base my-3 middle:text-sm small:text-xs text-justify inc:text-center inc:my-0 ">
            Evren AI is not just another automation tool. We partner with you
            to understand your unique challenges and deliver custom AI
            solutions that drive game-changing results. Boost efficiency,
            slash costs, and unlock new possibilities, all while feeling
            confident in a trusted partner.
          </p>
          <div>
            <Link
              href="https://calendly.com/hassan-ali-ai/business-with-the-power-of-ai?month=2024-08&date=2024-08-30"
              target="_blank"
            >
              <Button content="Book a Call" />
            </Link>
          </div>
        </div>
        <div className=" animate-upAndDown w-[90%] inc:w-[60%] inc:mt-11 middle:w-[70%] object-cover">
          <Image
            priority={true}
            quality={80}
            width={700}
            height={1000}
            src="/homepage/homeimage2.png"
            alt="homepage image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero; 
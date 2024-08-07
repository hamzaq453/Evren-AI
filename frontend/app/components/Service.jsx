import React from "react";

const Service = ({heading,description}) => {
  return (
    <>
      <div className="bg-slate-200 max-w-[26vw] maxlarge:max-w-[30vw] large:max-w-[45vw] middle:max-w-[85vw] middle:p-4  mx-auto p-10 text-left transition-transform ease-in-out duration-300 transform hover:scale-105 shadow-xl drop-shadow-lg rounded-xl ">
        <h1 className="font-bold text-[19px] middle:text-[16px]">{heading}</h1>
        <p className="text-[15px] mt-2 middle:text-[13px]">
          {description}
        </p>
        <div className="mt-4">
          <a href="/" className="text-primary font-medium hover:font-semibold middle:text-sm">
            Learn more
          </a>
          <span className="pl-2 font-bold text-primary">&gt;</span>
        </div>
      </div>
    </>
  );
};

export default Service;

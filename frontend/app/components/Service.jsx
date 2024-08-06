import React from "react";

const Service = ({heading,description}) => {
  return (
    <>
      <div className="bg-slate-200 max-w-[26vw] mx-auto p-10 text-left transition-transform ease-in-out duration-300 transform hover:scale-105 shadow-xl drop-shadow-lg rounded-xl">
        <h1 className="font-bold text-[19px]">{heading}</h1>
        <p className="text-[15px] mt-2">
          {description}
        </p>
        <div className="mt-4">
          <a href="/" className="text-primary font-medium hover:font-semibold">
            Learn more
          </a>
          <span className="pl-2 font-bold text-primary">&gt;</span>
        </div>
      </div>
    </>
  );
};

export default Service;

import React from "react";
import Button from "./Button";
const Contactform = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-[#592E83] middle:text-2xl small:text-xl">
          Contact Us
        </h1>
        <span className="text-slate-400 text-xm small:text-xs">
          Let's Call you Back!
        </span>
      </div>
      <form action=" " className="mt-3 flex flex-col gap-5">
        <input
          className=" p-3 rounded-2xl shadow-custom-inset outline-none middle:text-sm "
          type="text"
          placeholder="Name"
        />
        <input
          className=" p-3 rounded-2xl shadow-custom-inset outline-none middle:text-sm"
          type="email"
          placeholder="Email"
        />
        <input
          className=" p-3 rounded-2xl shadow-custom-inset outline-none middle:text-sm"
          type="text"
          placeholder="Phone Number"
        />
        <textarea
          className=" p-3 rounded-2xl shadow-custom-inset  outline-none middle:text-sm "
          placeholder="Message"
          rows="4"
        ></textarea>
        <div>
          <Button content="Send message" />
        </div>
      </form>
    </div>
  );
};

export default Contactform;

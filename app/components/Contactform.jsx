"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contactform = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0j1q7se', 'template_wlk4agt', form.current, 'KJHaI7pph6bYXPPHw')
      .then(
        () => {
          setAlert({
            show: true,
            message: 'Thank you for contacting us. We have noted down your information and will get back to you very soon. Meanwhile, find more about us and how we can help you achieve your goal.',
            type: 'success',
          });
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          setAlert({
            show: true,
            message: `Failed to send your message. ${error.text}`,
            type: 'danger',
          });
        }
      );
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-80 bg-[#E6D6FA] py-20">
      <div className="w-[750px] bg-white py-5  rounded-3xl shadow">
        <div className="text-center mb-5">
          <h1 className="font-bold text-[#592E83] text-[40px] middle:text-[30px]" >
            Contact Us
          </h1>
          <span className="text-slate-400 text-base middle:text-sm">Let&apos;s Call you Back!</span>
        </div>

        {alert.show && (
          <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            {alert.message}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setAlert({ ...alert, show: false })}
            ></button>
          </div>
        )}

        <div className="row justify-content-center inc:px-10 middle:px-4">
          <div className="col-lg-10">
            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-4">
              <input
                className="p-3 middle:text-sm rounded-pill shadow-sm border-1 focus:outline-none focus:border-secondaryy"
                type="text"
                name="from_name"
                placeholder="Name"
                required
              />
              <input
                className="p-3 middle:text-sm rounded-pill shadow-sm border-1 focus:outline-none focus:border-secondaryy"
                type="email"
                name="from_email"
                placeholder="Email"
                required
              />
              <input
                className="p-3 middle:text-sm rounded-pill shadow-sm border-1 focus:outline-none focus:border-secondaryy"
                type="text"
                name="from_Phone"
                placeholder="Phone Number"
                required
              />
              <textarea
                className="p-3 middle:text-sm rounded-3 shadow-sm border-1 focus:outline-none focus:border-secondaryy"
                placeholder="Message"
                name="message"
                rows="4"
                required
              ></textarea>
              <div className="d-flex justify-content-center">
                <input
                  type="submit"
                  value="Send Message"
                  className="duration-300 transform hover:scale-105 text-[14px] font-medium bg-[#592E83] text-white border-none py-[12px] px-[20px] rounded-[40px] cursor-pointer tracking-wide transition-transform ease-in active:scale-[0.9] focus:outline-none hover:bg-secondaryy sm:text-[15px] sm:py-[12px] sm:px-[25px]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;

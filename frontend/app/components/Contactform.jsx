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
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-[#E6D6FA]">
      <div className="col-lg-8 col-md-10 col-sm-12 bg-white p-5 rounded shadow">
        <div className="text-center mb-5">
          <h1 className="font-bold text-[#592E83]" style={{ fontSize: '35px' }}>
            Contact Us
          </h1>
          <span className="text-slate-400 text-sm">Let's Call you Back!</span>
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

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-4">
              <input
                className="p-3 rounded-pill shadow-sm border-0"
                type="text"
                name="from_name"
                placeholder="Name"
                required
              />
              <input
                className="p-3 rounded-pill shadow-sm border-0"
                type="email"
                name="from_email"
                placeholder="Email"
                required
              />
              <input
                className="p-3 rounded-pill shadow-sm border-0"
                type="text"
                name="from_Phone"
                placeholder="Phone Number"
              />
              <textarea
                className="p-3 rounded-3 shadow-sm border-0"
                placeholder="Message"
                name="message"
                rows="4"
                required
              ></textarea>
              <div className="d-flex justify-content-center">
                <input
                  type="submit"
                  value="Send Message"
                  className="duration-300 transform hover:scale-105 text-[14px] font-medium bg-[#592E83] text-white border-none py-[12px] px-[20px] rounded-[40px] cursor-pointer tracking-wide transition-transform ease-in active:scale-[0.9] focus:outline-none hover:bg-secondary sm:text-[15px] sm:py-[12px] sm:px-[25px]"
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

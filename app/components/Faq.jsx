// components/Faq.js
"use client"
import { useState } from 'react';

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-2xl border-gray-200 px-4 pt-2 pb-1 shadow-xl drop-shadow-lg small:py-2 small:px-3">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex justify-between items-center small:gap-4 "
      >
        <h3 className="text-base font-bold text-gray-900 hover:text-secondaryy middle:text-sm ">{question}</h3>
        <div>
        <svg
          className={`w-6 h-6 middle:w-5 middle:h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        </div>
      </div>
      {isOpen && (
        <p className="mt-2 text-sm middle:text-xs text-gray-700">{answer}</p>
      )}
    </div>
  );
};

export default Faq;

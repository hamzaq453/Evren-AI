'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CompanyClients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalLogos = 6; // Number of unique logos

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalLogos);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const logos = [
    { src: "/homepage/companyclients/cybervista.png", alt: "cybervista" },
    { src: "/homepage/companyclients/dylanstours.png", alt: "dylanstours" },
    { src: "/homepage/companyclients/ecopulse.png", alt: "ecopulse" },
    { src: "/homepage/companyclients/hypernova.png", alt: "hypernova" },
    { src: "/homepage/companyclients/luminatech.png", alt: "luminatech" },
    { src: "/homepage/companyclients/verifiedx.png", alt: "verifiedx" }
  ];

  const renderLogo = (logo, index, isOriginal = true) => (
    <div className="flex min-w-[180px] items-center justify-center" key={`${index}-${isOriginal}`}>
      <Image 
        src={logo.src}
        width={180}
        height={90}
        alt={logo.alt}
        className={`w-full h-auto transition-all duration-700 
          ${activeIndex === index ? 'grayscale-0' : 'grayscale'}`}
      />
    </div>
  );

  return (
    <section className="py-2 bg-gray-100">
      <div className="container mx-auto">
        <div className="max-w-[100%] mx-auto overflow-hidden">
          <div className="flex animate-[slide_20s_linear_infinite] space-x-16 -ml-4">
            {/* First set */}
            {logos.map((logo, index) => renderLogo(logo, index))}
            
            {/* Duplicate sets for smooth loop */}
            {[1, 2, 3].map((set) => (
              <React.Fragment key={set}>
                {logos.map((logo, index) => renderLogo(logo, index, false))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyClients;
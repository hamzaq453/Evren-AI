import React from 'react';
import Image from 'next/image';

const CompanyClients = () => {
  return (
    <section className="py-2 bg-gray-100">
      <div className="container mx-auto">
        {/* Reduced container width and padding */}
        <div className="max-w-[100%] mx-auto overflow-hidden">
          {/* Added negative margin to hide the transition jump */}
          <div className="flex animate-[slide_20s_linear_infinite] space-x-16 -ml-4">
            {/* First set of logos */}
            <div className="flex min-w-[180px] items-center justify-center">
              <Image 
                src="/homepage/companyclients/cybervista.png" 
                width={180} 
                height={90} 
                alt="cybervista" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex min-w-[180px] items-center justify-center">
              <Image 
                src="/homepage/companyclients/dylanstours.png" 
                width={180} 
                height={90} 
                alt="dylanstours" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex min-w-[180px] items-center justify-center">
              <Image 
                src="/homepage/companyclients/ecopulse.png" 
                width={180} 
                height={90} 
                alt="ecopulse" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex min-w-[180px] items-center justify-center">
              <Image 
                src="/homepage/companyclients/hypernova.png" 
                width={180} 
                height={90} 
                alt="hypernova" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex min-w-[180px] items-center justify-center">
              <Image 
                src="/homepage/companyclients/luminatech.png" 
                width={180} 
                height={90} 
                alt="luminatech" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex min-w-[180px] items-center justify-center">
              <Image 
                src="/homepage/companyclients/verifiedx.png" 
                width={180} 
                height={90} 
                alt="verifiedx" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Add a third set of logos to ensure smoother transition */}
            {/* This ensures there's always content visible during the loop */}
            {[1, 2, 3].map((set) => (
              <>
                <div className="flex min-w-[180px] items-center justify-center">
                  <Image 
                    src="/homepage/companyclients/cybervista.png" 
                    width={180} 
                    height={90} 
                    alt="cybervista" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex min-w-[180px] items-center justify-center">
                  <Image 
                    src="/homepage/companyclients/dylanstours.png" 
                    width={180} 
                    height={90} 
                    alt="dylanstours" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex min-w-[180px] items-center justify-center">
                  <Image 
                    src="/homepage/companyclients/ecopulse.png" 
                    width={180} 
                    height={90} 
                    alt="ecopulse" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex min-w-[180px] items-center justify-center">
                  <Image 
                    src="/homepage/companyclients/hypernova.png" 
                    width={180} 
                    height={90} 
                    alt="hypernova" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex min-w-[180px] items-center justify-center">
                  <Image 
                    src="/homepage/companyclients/luminatech.png" 
                    width={180} 
                    height={90} 
                    alt="luminatech" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex min-w-[180px] items-center justify-center">
                  <Image 
                    src="/homepage/companyclients/verifiedx.png" 
                    width={180} 
                    height={90} 
                    alt="verifiedx" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyClients;
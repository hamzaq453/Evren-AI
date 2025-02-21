import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import Services from "./components/Services";
import Pricing from "./components/pricing";
import Faq from "./components/Faq";
import Timeline from "./components/Timeline";
import Whyus from "./components/Whyus";
import Testnomial from "./components/Testnomial";
import CompanyClients from "./components/Compnayclints";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  const faqs = [
    {
      question: "What is Evren AI?",
      answer:
        "Evren AI is your AI partner, empowering businesses of all sizes with customized AI solutions that automate tasks, optimize processes, and unlock growth potential. We bring together cutting-edge technology and a human-centered approach to deliver data-driven insights and tailored AI strategies that help you achieve your unique business goals.",
    },
    {
      question: "How much does Evren AI cost?",
      answer:
        "Our pricing varies depending on the specific services you need and the scope of your project. We offer flexible plans to suit your budget and ensure you get the best value for your investment. Please contact us for a free consultation and personalized quote.",
    },
    {
      question: "What kind of data does Evren AI need to work?",
      answer:
        "The type of data depends on the specific AI solution you choose. We can work with various data sources, including structured data from your business systems, unstructured data like text and images, and even real-time data streams. We prioritize data security and privacy and ensure your data is always under your control.",
    },
    {
      question: "How long does it take to get started with Evren AI?",
      answer:
        "Our implementation process is fast and efficient. We can tailor it to your specific needs and timeline, typically onboarding new clients within days.",
    },
    {
      question: "Is Evren AI safe and secure?",
      answer:
        "Data security and privacy are top priorities for us. We employ robust security measures and adhere to the highest industry standards to protect your data. We also provide full transparency and control over your data, ensuring you are always in the loop.",
    },
    {
      question: "How do I know if Evren AI is right for my business?",
      answer:
        "We offer a free consultation to discuss your specific needs and challenges. We well work with you to understand your goals and recommend the best AI solutions to help you achieve them. There's no obligation, and you can get valuable insights on how AI can benefit your business.",
    },
    {
      question: "How can Evren AI help my business?",
      answer: `Evren AI can help your business in many ways, from automating repetitive tasks to gaining deeper insights from your data. We offer a variety of solutions ,including
       AI-powered automation
      , Advanced analytics and data science
      , Custom AI solutions
      , AI in healthcare
      and AI-based security solutions.
 `,
    },
  ];
  return (
    <>
      {/* hero section */}
      <Hero />

      <div className="pt-4 pb-14">
        <CompanyClients />
      </div>
      <AboutUs />

      {/* service section start */}

      <div className="bg-[#FFFFFF] py-[110px] px-0 flex relative gap-[20px] justify-center items-center m-0 large:py-[50px]">
        <div className="flex w-full mx-auto items-center relative flex-col gap-3 ">
          <h2 className='text-[#592E83] font-semibold' style={{ fontSize: '20px' }}>
            Our Services
          </h2>
          <h1 className="font-black text-secondaryy text-[25px] large:text-[27px] middle:text-[18px] pb-5 ">
            Unleashing the Power of Data
          </h1>

          <Services />
        </div>
      </div>

      {/* service section end*/}

      <Pricing />

      {/* Process section start*/}
      <div className="pt-24">
        <div className="px-0 flex relative gap-[20px] justify-center items-center middle:pt-[60px]">
          <div className="flex max-w-[82vw] mx-auto items-center relative flex-col gap-3">
            <span className='text-[#592E83] font-semibold' style={{ fontSize: '20px' }}>
              Our Process
            </span>
            <h2 className="font-black text-secondaryy text-[25px] large:text-[27px] middle:text-[18px] pb-5 ">
              How We Work?
            </h2>
          </div>
        </div>
        <div>
          <Timeline />
        </div>
        <div className="mx-auto text-center mt-5 ">
          <Link
            href="/contact"
            
          >
            <Button content="Let's work together" />
          </Link>
        </div>
      </div>
      {/* Process section end*/}

      {/* Why us section start*/}

      <div className="m-0">
        <div class="relative mx-auto max-w-5xl text-center pt-5 mt-14 middle:pt-10">
          <h2 className='text-[#592E83] font-semibold' style={{ fontSize: '20px' }}>
            Why choose us
          </h2>
          <h2 className="font-black text-secondaryy text-[25px] large:text-[27px] middle:text-[18px] p-1 ">
            Your Success is Our Priority
          </h2>
          <p class="mx-auto my-4 w-[90%] text-gray-800 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400 large:text-base middle:text-sm small:text-xs middle:max-w-lg small:max-w-sm middle:my-2 text-center pb-5 ">
            Your success is at the heart of everything we do. We work closely
            with you to understand your objectives and challenges, offering
            strategic guidance and support to help you thrive in your industry.
          </p>
        </div>
        <div>
          <section
            id="features"
            class="relative block px-6 py-10 md:py-20 md:px-10 bg-[#E6D6FA]"
          >
            <Whyus />

            <div class="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
            <div class="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
          </section>
        </div>
      </div>

      {/* Why us section end*/}

      {/* Testnomial section start */}

      <div className="bg-white py-20 middle:py-10">
        <Testnomial />
      </div>

      {/* Testnomial section end */}

      {/* Faq section start*/}

      <div>
        <div className=" pt-[110px] px-0 flex relative gap-[20px] justify-center items-center inc:pt-[60px]">
          <div className="flex max-w-[82vw] mx-auto items-center relative flex-col gap-3 ">
            <span className="text-black font-extrabold text-[22px] inc:text-[19px] middle:text-[16px]">
              Frequently Asked Questions
            </span>
            <h2 className="font-black  bg-gradient-to-b from-gray-400 to-primaryy bg-clip-text text-transparent text-[32px] inc:text-[27px] middle:text-[18px] text-center">
              Ready to Unlock Your Potential?
            </h2>
          </div>
        </div>
        <div className="py-[70px] middle:pt-[10px]  px-0 flex relative gap-[20px] justify-center items-start inc:py-[30px]">
          <div className="flex max-w-[82vw] mx-auto items-center relative gap-20 maxlarge:max-w-[93vw] inc:flex-col middle:gap-[15px]">
            <div className="animate-upAndDown inc:w-[60%] inc:mt-11 middle:mt-7 middle:w-[80%] small:w-[90%]">
              <Image
                priority={true}
                quality={80}
                width={700}
                height={1000}
                src="/FaqImage.png"
                alt=" Frequently Asked Questions"
              />
            </div>
            <div class="w-[700px] pl-[50px] text-left flex flex-col gap-3 inc:w-[500px] inc:p-0 middle:w-[350px] small:w-[300px]">
              {faqs.map((faq, index) => (
                <Faq key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Faq section end*/}
    </>
  );
}

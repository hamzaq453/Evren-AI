import Image from "next/image";
import Button from "./components/Button";
import Service from "./components/Service";
import Faq from "./components/Faq";
import Timeline from "./components/Timeline";
import Whyus from "./components/Whyus";
import Testnomial from "./components/Testnomial";
export default function Home() {
  const service = [
    {
      heading: "Custom AI Solution",
      description:
        "Craft your perfect AI tool. Build bespoke AI solutions that fit your unique needs and goals perfectly.",
    },
    {
      heading: "AI-Based Security Solutions",
      description:
        "Fortify your defenses. Detect threats, prevent breaches, and sleep soundly with AI security",
    },
    {
      heading: "AI Research Development ",
      description:
        "Push the boundaries. Be at the forefront of innovation with collaborative AI research. ",
    },
    {
      heading: "AI in Healthcare",
      description:
        "Revolutionize patient care. Optimize diagnosis, automate tasks, and deliver personalized treatments.",
    },
    {
      heading: "Analytics and Data Science",
      description:
        "Unlock hidden insights. Extract actionable intelligence from your data and power smarter decisions. ",
    },
    {
      heading: "Business Process Automation ",
      description:
        "Work smarter, not harder. Free your team from tedious tasks and boost efficiency with AI automation.",
    },
  ];
  const faqs = [
    {
      question: "What is Evren AI?",
      answer:
        "Evren AI is your AI partner, empowering businesses of all sizes with customized AI solutions that automate tasks, optimize processes, and unlock growth potential. We bring together cutting-edge technology and a human-centered approach to deliver data-driven insights and tailored AI strategies that help you achieve your unique business goals.",
    },
    {
      question: " How much does Evren AI cost?",
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
        "Our implementation process is fast and efficient. We can tailor it to your specific needs and timeline, typically onboarding new clients within weeks.",
    },
    {
      question: "Is Evren AI safe and secure?",
      answer:
        "Data security and privacy are top priorities for us. We employ robust security measures and adhere to the highest industry standards to protect your data. We also provide full transparency and control over your data, ensuring you are always in the loop.",
    },
    {
      question: "How do I know if Evren AI is right for my business?",
      answer:
        "We offer a free consultation to discuss your specific needs and challenges. We'll work with you to understand your goals and recommend the best AI solutions to help you achieve them. There's no obligation, and you can get valuable insights on how AI can benefit your business.",
    },
    {
      question: "How can Evren AI help my business?",
      answer: `Evren AI can help your business in many ways, from automating repetitive tasks to gaining deeper insights from your data. We offer a variety of solutions ,including
      - AI-powered automation
      - Advanced analytics and data science
      - Custom AI solutions
      - AI in healthcare
      - AI-based security solutions.
 `,
    },
  ];

  return (
    <>
      {/* hero section start start */}

      <div className="py-[70px] px-0 flex relative gap-[20px] justify-center items-center">
        <div className="flex max-w-[82vw] mx-auto items-center relative">
          <div className="w-[80%] pr-[180px] text-left flex flex-col gap-1">
            <span className="text-black font-extrabold text-xl">
              Ditch the Manual, Embrace the Future
            </span>
            <h2 className="font-black text-primary text-4xl pr-55">
              Evren AI Transforms How You Do Business.
            </h2>
            <p className="text-base my-3 ">
              Evren AI isn't just another automation tool. We partner with you
              to understand your unique challenges and deliver custom AI
              solutions that drive game-changing results. Boost efficiency,
              slash costs, and unlock new possibilities, all while feeling
              confident in a trusted partner.
            </p>
            <Button content="Book a call" />
          </div>
          <div className="animate-upAndDown">
            <Image
              priority={true}
              quality={80}
              width={700}
              height={1000}
              src="/homeimage.png"
              alt=""
            />
          </div>
        </div>
        <div class="seperation"></div>
      </div>

      {/* hero section start end */}


      {/* service section start */}

      <div className="bg-[#FFFFFF] py-[110px] px-0 flex relative gap-[20px] justify-center items-center">
        <div className="flex max-w-[82vw] mx-auto items-center relative flex-col gap-3">
          <span className="text-primary font-bold text-[22px] ">
            Our Services
          </span>
          <h1 className="text-[32px] font-extrabold">
            Unleashing the Power of Data
          </h1>
          <div className="mt-[60px] grid grid-cols-2 gap-12">
            {service.map((service, index) => (
              <Service
                key={index}
                heading={service.heading}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* service section end*/}


      {/* Process section start*/}
      <div>
        <div className=" pt-[110px] px-0 flex relative gap-[20px] justify-center items-center">
          <div className="flex max-w-[82vw] mx-auto items-center relative flex-col gap-3">
            <span className="text-primary font-extrabold text-[22px]">
              Our Process
            </span>
            <h2 className="font-black text-black text-[32px]">How We Work?</h2>
          </div>
        </div>
        <div>
          <Timeline />
        </div>
        <div className="mx-auto text-center">
          <Button content="Lets's work together" />
        </div>
      </div>
      {/* Process section end*/}


      {/* Why us section start*/}

      <div className="bg-white">
        <div class="relative mx-auto max-w-5xl text-center pt-20 mt-14">
          <span class="text-black my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 class="block w-full bg-gradient-to-b from-gray-400 to-primary bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Your Product Delivery Partner
          </h2>
          <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            Our templates allow for maximum customization. No technical skills
            required – our intuitive design tools let you get the job done
            easily.
          </p>
        </div>
        <div>
          <Whyus />
        </div>
      </div>

      {/* Why us section end*/}

      {/* Testnomial section start */}

      <div className="bg-white py-20">
        <Testnomial />
      </div>

      {/* Testnomial section end */}

      {/* Faq section start*/}

      <div>
        <div className=" pt-[110px] px-0 flex relative gap-[20px] justify-center items-center">
          <div className="flex max-w-[82vw] mx-auto items-center relative flex-col gap-3">
            <span className="text-primary font-extrabold text-[22px]">
              Frequently Asked Questions
            </span>
            <h2 className="font-black text-black text-[32px]">
              Ready to Unlock Your Potential?
            </h2>
          </div>
        </div>
        <div className="py-[70px] px-0 flex relative gap-[20px] justify-center items-start">
          <div className="flex max-w-[82vw] mx-auto items-center relative gap-20">
            <div className="animate-upAndDown">
              <Image
                priority={true}
                quality={80}
                width={700}
                height={1000}
                src="/faqImage.png"
                alt=""
              />
            </div>
            <div class="w-[700px] pl-[50px] text-left flex flex-col gap-3">
              {faqs.map((faq, index) => (
                <Faq key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Faq section end*/}

      {/* Contact section start*/}

      <div className="bg-white py-[70px] px-0 flex relative gap-[20px] justify-center items-center">
        <div className="flex max-w-[82vw] mx-auto items-center relative">
          <div className=" w-[50%] pr-[64px] text-left flex flex-col gap-7">
            <h2 className="font-black text-4xl">
              Start your project with evrenai.
            </h2>
            <span>
              Fill out the form, and tell us more about your business
              goals.We'll get back to you within 1 working day.{" "}
            </span>
            <p className="text-base font-extrabold text-primary">
              Would you rather directly get in touch ? We always have a time for
              a call or email!
            </p>
          </div>
          <div className="w-[40%] bg-white  p-10 rounded-3xl ml-32 flex flex-col gap-5 text-center shadow-xl drop-shadow-lg">
            <h1 className="font-extrabold text-3xl text-primary">Details</h1>
            <form action=" " className="flex flex-col gap-5">
              <input
                className=" p-3 rounded-2xl shadow-custom-inset outline-none"
                type="text"
                placeholder="Name"
              />
              <input
                className=" p-3 rounded-2xl shadow-custom-inset outline-none"
                type="email"
                placeholder="Email"
              />
              <input
                className=" p-3 rounded-2xl shadow-custom-inset outline-none "
                type="text"
                placeholder="Phone Number"
              />
              <textarea
                className=" p-3 rounded-2xl shadow-custom-inset  outline-none "
                placeholder="Message"
                rows="4"
              ></textarea>
              <Button content="Send message" />
            </form>
          </div>
        </div>
      </div>

      {/* Contact section end*/}
    </>
  );
}

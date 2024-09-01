import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "EvrenAI Blog | AI Trends and Tips",
  description: `Explore insights, trends, and expert opinions on the latest in artificial intelligence. Our blog covers everything from cutting-edge AI technologies and industry innovations to practical tips for integrating AI into your business. Stay informed and inspired as we delve into how AI is transforming industries, driving growth, and shaping the future.`,
};
const page = () => {
  return (
    <div className="bg-[#FFFFFF] py-[60px] px-0 flex relative gap-[20px] justify-center items-center m-0 large:py-[50px]">
      <div className="flex w-full mx-auto items-center relative flex-col gap-1 ">
        <h1 className="bg-gradient-to-b from-gray-400 to-primaryy bg-clip-text font-bold text-transparent text-[32px] large:text-[30px] middle:text-[23px]">
          Our Blog
        </h1>
        <p className="mx-auto my-4 w-[75%] bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400 large:text-base middle:text-sm small:text-xs middle:max-w-lg small:max-w-sm middle:my-2 ">
          "Welcome to our blog, where we explore the latest trends and insights
          in AI. Discover valuable perspectives and expert opinions to help you
          stay ahead and harness the power of artificial intelligence."
        </p>
        <div>
          <section class="text-gray-600 body-font">
            <div class=" px-5 py-3 mx-auto">
              <div className="row m-0">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div class="flex flex-wrap -m-4">
                    <div class="p-2 mb-8 lg:w-1/3 md:w-1/2">
                      <div class="min-h-[590px] small:min-h-[520px] max-h-[640px] bg-ternary bg-opacity-75 p-4 rounded-lg overflow-hidden text-center relative transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl pb-3">
                        <div className="w-full">
                          <Image
                            priority={true}
                            quality={80}
                            width={730}
                            height={435}
                            src="/blog/chatbot.jpg"
                            className="rounded-lg"
                            alt="Chatbot"
                          />
                        </div>
                        <h1 class="title-font sm:text-2xl text-xl font-semibold text-gray-900 my-3 small:text-[15px]">
                          How AI Chatbots Are Transforming Businesses in the Digital
                          Age?
                        </h1>
                        <p class="leading-relaxed mb-9 text-[15px] small:text-[13px]">
                          A chatbot is an AI-powered software application designed
                          to simulate conversation with users through text or voice.
                          It can perform tasks, answer questions, and provide
                          information, often used in customer service, marketing,
                          and automated support.
                        </p>
                        <div className="mb-8 small:mb-0">
                          <Link class=" text-center" href="/blog/firstblog">
                            <Button content="Learn More" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="p-2 mb-8 lg:w-1/3 md:w-1/2">
                      <div class="min-h-[590px] small:min-h-[520px] max-h-[640px] bg-ternary bg-opacity-75 p-4 rounded-lg overflow-hidden text-center relative transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl pb-3">
                        <div className="w-full">
                          <Image
                            priority={true}
                            quality={80}
                            width={730}
                            height={435}
                            src="/blog/customerservice.jpg"
                            className="rounded-lg"
                            alt="The Transformative Impact of AI on Modern Customer Service"
                          />
                        </div>
                        <h1 class="title-font sm:text-2xl text-xl font-semibold text-gray-900 my-3 small:text-[17px]">
                          The Transformative Impact of AI on Modern Customer Service
                        </h1>
                        <p class="leading-relaxed mb-9 text-[15px] small:text-[13px]">
                          AI is transforming customer service by making interactions
                          faster, more personalized, and most efficient. This post
                          explores, how AI is changing customer connections, its
                          benefits, and future the trends, offerings the valuable insights
                          for business owners and AI enthusiasts alike.
                        </p>
                        <div className="mb-9 small:mb-0">
                          <a class=" text-center">
                            <Button content="Learn More" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="p-2 mb-8 lg:w-1/3 md:w-1/2 ">
                      <div class="min-h-[590px] small:min-h-[500px] max-h-[640px] bg-ternary bg-opacity-75 p-4 rounded-lg overflow-hidden text-center relative transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl pb-3">
                        <div className="w-full">
                          <Image
                            priority={true}
                            quality={80}
                            width={730}
                            height={435}
                            src="/blog/mlvsdl.png"
                            className="rounded-lg"
                            alt="Machine Learning vs. Deep Learning"
                          />
                        </div>
                        <h1 class="title-font sm:text-2xl text-xl font-semibold text-gray-900 my-3 small:text-[17px]">
                          Machine Learning vs. <br />  Deep Learning
                        </h1>
                        <p class="leading-relaxed mb-9 text-[15px] small:text-[13px] mt-[40px] middle:mt-0">
                          Machine learning uses algorithms to learn from data, often
                          needing manual feature extraction. Deep learning is a type
                          of ML that uses neural networks to automatically learn
                          from complex, unstructured data, requiring more resources
                        </p>
                        <div className="mb-8 small:mb-0">
                          <a class=" text-center">
                            <Button content="Learn More" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;

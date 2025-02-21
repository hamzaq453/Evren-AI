import React from "react";
import Image from "next/image";
import Faq from "@/app/components/Faq";
import Link from "next/link";
export const metadata = {
  title: "EvrenAI",
  description: `Explore how AI chatbots are reshaping the digital business landscape by enhancing customer interactions, streamlining operations, and driving growth. Discover the key benefits, real-world examples, and future potential of chatbots in transforming how businesses engage with their customers in the digital age.`,
};

const page = () => {
  const faqs = [
    {
      question: "What is the main difference between machine learning and deep learning?",
      answer:
        "Machine learning is a broader concept that includes training algorithms on data to make predictions, while deep learning is a subset that uses neural networks to process large amounts of unstructured data.",
    },
    {
      question: "Which one is better: machine learning or deep learning?",
      answer:
        "Neither is inherently better; it depends on the task. Machine learning is suitable for structured data and simpler tasks, while deep learning excels with unstructured data and complex problems.",
    },
    {
      question: "Do machine learning and deep learning require large datasets?",
      answer:
        "Deep learning requires large datasets to perform well, whereas machine learning can work with smaller datasets, though performance improves with more data.",
    },
    {
      question: "Is deep learning more accurate than machine learning?",
      answer:
        "Deep learning can achieve higher accuracy, especially with large datasets, but it also requires more computational resources and longer training times.",
    },
    {
      question: "Can deep learning be used for all machine learning tasks?",
      answer:
        "While deep learning is powerful, it's not always the best choice, especially for tasks with limited data or where model interpretability is important.",
    },
    {
      question: "How are machine learning and deep learning used together?",
      answer:
        "Machine learning can be used to preprocess data or make initial predictions, which are then refined by deep learning models for more complex tasks.",
    },
  ];
  return (
    <>
      {/* Hero section with parallax effect */}
      <div 
        className="main w-full h-[450px] grid place-content-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("/purplebg1.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="text-center relative z-10 max-w-4xl mx-auto px-4">
          <div className="mb-6 text-white/80 uppercase tracking-wider font-medium">AI & Technology</div>
          <h1 className="text-4xl sm:text-5xl font-bold middle:text-3xl small:text-2xl mx-5 text-white leading-tight">
            <span className="text-primaryy font-extrabold">Machine Learning vs. Deep Learning</span>
          </h1>
          <div className="mt-6 flex items-center justify-center gap-4 text-white/80">
            <span>By Evren AI Team</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>

      {/* Main content with enhanced layout */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main article */}
          <div className="lg:w-2/3">
            {/* Featured image with enhanced presentation */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
              <Image
                priority={true}
                quality={100}
                width={1200}
                height={675}
                src="/blog/mlvsdl.png"
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                alt="ML vs DL"
              />
            </div>

            {/* Article content with improved typography */}
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primaryy mb-8">
                Introduction
              </h2>
              <p className="text-justify my-3 text-[#230C33] ">
              In the realm of artificial intelligence (AI), two terms often come up, Machine Learning (ML) and Deep Learning (DL). While these technologies are related, they serve different purposes and operate in distinct ways. <br /> As AI continues to advance, understanding the differences between machine learning and deep learning is crucial for businesses and individuals looking to leverage these powerful tools.
            </p>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Related articles */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-bold text-primaryy mb-6 text-xl">Related Articles</h4>
              <div className="space-y-6">
                <a href="/blog/firstblog" className="block group">
                  <div className="font-medium text-blue-800 group-hover:text-primaryy transition-colors text-lg">
                    How AI Chatbots Are Transforming Businesses in the Digital Age?
                  </div>
                  <div className="text-sm text-gray-600 mt-2">5 min read</div>
                </a>
                <a href="/blog/secondblog" className="block group">
                  <div className="font-medium text-blue-800 group-hover:text-primaryy transition-colors text-lg">
                    The Transformative Impact of AI on Modern Customer Service
                  </div>
                  <div className="text-sm text-gray-600 mt-2">5 min read</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section start */}
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

      {/* faq section end  */}
    </>
  );
};

export default page;

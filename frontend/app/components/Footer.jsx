import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./stylesheet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="contant py-10">
        <div className="row m-0 ">
          <div className="col-lg-12 col-md-10 col-sm-10 p-5 text-center ">
            <h1
              style={{
                color: "#FFFFFF",
                fontSize: "50px",
                fontWeight: "bolder",
              }}
            >
              Discover Your AI Advantage, <br />
              Schedule a Free Consultation!
            </h1>
            <p className="p-5  " style={{ color: "#FFFFFF" }}>
              Book a free consultation with our AI experts and discover how our
              automation and software development solutions <br /> can elevate
              your business. Let's explore your needs and tailor a strategy to
              drive growth and efficiency.
            </p>
            <Link
              href="/contact"
              className="btn-contact pb-3 pt-3 pl-5 pr-5 m-2 "
            >
              {" "}
              Book Free consultion Call Now{" "}
            </Link>
          </div>
        </div>
      </div>



      <div className="bg-ternary text-white grid grid-cols-4 gap-10 p-10 large:grid-cols-2 middle:grid-cols-1 middle:text-center">
        <div className="aboutus flex gap-6 text-left flex-col text-black">
          <div>
            <Image
              width={200}
              height={475}
              quality={70}
              priority={true}
              src="/homelogo.png"
              alt="EvrenAi logo"
            />
          </div>
          <div className="text-sm" style={{ color: "black" }}>
            Evren AI isn't just another automation tool. We partner with you to
            understand your unique challenges and deliver custom AI solutions
            that drive game-changing results. Boost efficiency, slash costs, and
            unlock new possibilities, all while feeling confident in a trusted
            partner..
          </div>
        </div>
        <div className="services flex flex-col gap-5 text-black">
          <div>
            <span className="font-bold text-base">Services</span>
            <div className="w-10 h-1 rounded-sm bg-primaryy mt-1 middle:absolute middle:left-[44%]"></div>
            <ul className="text-sm p-[0] m-[0]  mt-[15px] ">
              <li className="hover:text-secondaryy">
                <a href="#">- Custom AI Solution Development</a>
              </li>
              <li className="hover:text-secondaryy">
                <a href="#">- AI-Based Security Solutions</a>
              </li>
              <li className="hover:text-secondaryy">
                <a href="#">- Research and Development in AI</a>
              </li>
              <li className="hover:text-secondaryy">
                <a href="#">- AI in Healthcare</a>
              </li>
              <li className="hover:text-secondaryy">
                <a href="#">- Advanced Analytics and Data Science</a>
              </li>
              <li className="hover:text-secondaryy">
                <a href="#">- Business Process Automation</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="quicklinks flex flex-col gap-5 text-black">
          <div>
            <span className="font-bold text-base">Quick Links</span>
            <div className="w-10 h-1 rounded-sm bg-primaryy mt-1 middle:absolute middle:left-[42%]"></div>
            <ul className="text-sm p-[0] m-[0] mt-[15px] ">
              <li className="hover:text-secondaryy">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-secondaryy">
                <a href="/about">About us</a>
              </li>
              <li className="hover:text-secondaryy">
                <a href="/casestudy">Case Studies</a>
              </li>
              <li className="hover:text-secondaryy">
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactinfo flex flex-col gap-5 text-black">
          <div>
            <span className="font-bold text-base ">Contact Info</span>
            <div className="w-10 h-1 rounded-sm bg-primaryy mt-1 middle:absolute middle:left-[42%]"></div>

            <ul className="text-sm p-[0] m-[0] mt-[15px] ">
              <li>Email: evrenai@gmail.com</li>
              <li>Phone: +1 123-456-7890</li>
              <div class=" h-auto flex gap-4 flex-wrap middle:justify-center p-[15px] m-[0]  ">
                {/* facebook */}
                <a href="">
                  <button class="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300 outline-none">
                    <svg
                      class="relative z-10 fill-primaryy transition-all duration-300 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 72 72"
                      fill="none"
                    >
                      <path
                        d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                        fill=""
                      />
                    </svg>
                    <div class="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </button>
                </a>

                {/* thread */}
                <a href="">
                  <button class="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white shadow-md shadow-gray-200 group transition-all duration-300 outline-none">
                    <svg
                      class="fill-primaryy z-10 transition-all duration-300 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 72 72"
                      fill="none"
                    >
                      <path
                        d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
                        fill=""
                      />
                    </svg>
                    <div class="absolute top-full left-0 w-full h-full rounded-full bg-black z-0 transition-all duration-500 group-hover:top-0"></div>
                  </button>
                </a>

                {/* linkedin */}

                <a href="">
                  <button class="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300 outline-none">
                    <svg
                      class="fill-primaryy relative z-10 transition-all duration-300 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 72 72"
                      fill="none"
                    >
                      <path
                        d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                        fill=""
                      />
                    </svg>
                    <div class="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
                  </button>
                </a>

                {/* gmail */}

                <a href="">
                  <button class="w-10 h-10 flex relative overflow-hidden items-center justify-center rounded-full bg-white shadow-md bg-opacity-0 shadow-gray-200 group transition-all duration-500 outline-none">
                    <svg
                      class="fill-primaryy relative z-10 transition-all duration-300 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 54 41"
                      fill="none"
                    >
                      <path
                        class=""
                        d="M4.00654 40.1236H12.4893V19.5227L0.371094 10.4341V36.4881C0.371094 38.4997 2.00099 40.1236 4.00654 40.1236Z"
                        fill=""
                      />
                      <path
                        class=""
                        d="M41.5732 40.1236H50.056C52.0676 40.1236 53.6914 38.4937 53.6914 36.4881V10.4341L41.5732 19.5227"
                        fill=""
                      />
                      <path
                        class=""
                        d="M41.5732 3.7693V19.5229L53.6914 10.4343V5.58702C53.6914 1.09118 48.5594 -1.47181 44.9663 1.22448"
                        fill=""
                      />
                      <path
                        class=""
                        d="M12.4893 19.5227V3.76904L27.0311 14.6754L41.5729 3.76904V19.5227L27.0311 30.429"
                        fill=""
                      />
                      <path
                        class=""
                        d="M0.371094 5.58702V10.4343L12.4893 19.5229V3.7693L9.09617 1.22448C5.49708 -1.47181 0.371094 1.09118 0.371094 5.58702Z"
                        fill=""
                      />
                    </svg>
                    <div class="absolute top-full left-0 w-full h-full rounded-full bg-red-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </button>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-ternary border-t-2 p-1 w-full">
        <p className="mx-auto text-center">
          &copy; {new Date().getFullYear()} Evren AI All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

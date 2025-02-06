"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "../components/Review";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';

// import './styles.css';
import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  const review = [
    {
      names: "Diana Garcia",
      comment:
        "Our traditional phone lines were overwhelmed with customer inquiries. Evren AI's human-like inbound chatbot answered calls 24/7, resolved simple issues instantly, and qualified leads for our sales team. We saw a 30% reduction in call wait times and a 15% increase in qualified leads. It's a game-changer!",
      designation: "Customer Service Manager",
      platform: "E-commerce Platform",
    },
    {
      names: "Mark Davis",
      comment:
        "Cold calling was always a drag for our sales reps. Evren AI's outbound chatbot pre-qualified leads and engaged prospects in natural conversation, setting up successful meetings for our reps. Now, our reps only talk to genuinely interested prospects, which has boosted their conversion rate by 50%. They are thrilled, and our sales are skyrocketing!",
      designation: "VP of Sales",
      platform: "Software Company",
    },
    {
      names: "Robat William",
      comment:
        "Evren AI's advanced vision system transforms construction sites, ensuring PPE compliance and tracking project progress seamlessly. A vital ally, enhancing safety and efficiency at Cyber Vista.",
      designation: "Cybersecurity Instructor",
      platform: "Software Company",
    },
    {
      names: "Harry Williams",
      comment:
        "Evren AI's facial recognition enhances security measures, providing remarkable accuracy and efficiency. Its seamless integration and reliable performance are invaluable for strengthening our security.",
      designation: "Lead Software Engineer",
      platform: "Nova Tech Solutions",
    },
    {
      names: "Jessica Jenkins",
      comment:
        "Implementing Evren AI's recommendation system boosted customer engagement. Intelligent algorithms analyze preferences, providing personalized suggestions that connect with our diverse customer base. Evren AI's engine not only increases sales but also enhances a personalized shopping experience, elevating our online retail success.",
      designation: "Digital Marketing Manager",
      platform: "Weebly eCommerce",
    },
  ];
  return (
    <>
      <div>
        <div className="mx-auto text-center mb-9 middle:mb-5">
          <span className="text-black font-bold text-[22px] large:text-[19px] middle:text-[16px]">
            Testnomials
          </span>
          <h2 className="font-black  bg-gradient-to-b from-gray-400 to-primaryy bg-clip-text text-transparent text-[32px] large:text-[27px] middle:text-[18px]">
            What our customer say?
          </h2>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {review.map((item, index) => (
              <SwiperSlide key={""} >
                <Review
                  comment={item.comment}
                  names={item.names}
                  designation={item.designation}
                  platform={item.platform}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

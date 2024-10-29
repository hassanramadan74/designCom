import Slider from "react-slick"; // Import Slider from react-slick
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
import { useTranslation } from "react-i18next";

// Testimonials data with English and Arabic translations
const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=1",
    text: "The creativity and attention to detail in the design process truly transformed our project. It was a pleasure to collaborate with such a talented team.",
    textAr:
      "الإبداع والاهتمام بالتفاصيل في عملية التصميم فعلاً حولت مشروعنا. كان من دواعي سروري التعاون مع فريق موهوب كهذا.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Alex",
    designation: "Developer",
    img: "https://i.pravatar.cc/300?img=2",
    text: "Working with this team has been an incredible experience. Their technical expertise and support made the development process seamless and efficient.",
    textAr:
      "التعامل مع هذا الفريق كان تجربة لا تصدق. خبرتهم الفنية ودعمهم جعلت عملية التطوير سلسة وفعالة.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "George",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    text: "The project management was top-notch. They ensured that every aspect was handled with care, resulting in a successful outcome that exceeded our expectations.",
    textAr:
      "إدارة المشروع كانت على أعلى مستوى. تأكدوا من التعامل مع كل جانب بعناية، مما أدى إلى نتيجة ناجحة فاقت توقعاتنا.",
    delay: 0.6,
  },
  // Additional testimonials...
];

// Slider settings with responsive breakpoints
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

const Testimonial = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar"; // Check if the language is Arabic

  return (
    <>
      {/* Inline CSS for slick dots */}
      <style>
        {`
          .slick-dots li button:before {
            color: white; /* Set dots to white */
            font-size: 12px; /* Adjust the size of the dots */
            margin-top: 10px;
          }
          .slick-dots li.slick-active button:before {
            color: white; /* Keep active dot white */
          }
          .slick-dots li button:hover:before {
            color: white; /* Dots remain white on hover */
          }
        `}
      </style>

      <div className="py-14" dir={isArabic ? "rtl" : "ltr"}>
        {/* heading title */}
        <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-serif text-[#930000]"
          >
            {isArabic ? "كلمات من عملائنا" : "Words from our customers"}
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm max-w-[350px] mx-auto"
          >
            {isArabic
              ? "حقق منزل أحلامك بمساعدة تصميم فردي ومنتجات مختارة بعناية."
              : "Bring your dream home to life with one-on-one design help & hand-picked products."}
          </motion.p>
        </div>

        {/* Testimonial slider */}
        <div className="bg-black p-12">
          <div className="container">
            <Slider {...sliderSettings}>
              {TestimonialData.map((card) => (
                <motion.div
                  variants={SlideLeft(card.delay)}
                  initial="initial"
                  whileInView="animate"
                  key={card.id}
                  className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-[#930000] duration-300 w-full sm:w-full md:w-[50%] lg:w-[33%]"
                >
                  {/* Upper section */}
                  <div className="flex flex-row items-center gap-3">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-[60px] rounded-full"
                    />
                    <div>
                      <p className="text-sm font-bold ">{card.name}</p>
                      <p className="text-gray-400 text-xs ">
                        {card.designation}
                      </p>
                      <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  {/* Bottom section */}
                  <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                    <p className="text-sm text-gray-300 duration-300">
                      {isArabic ? card.textAr : card.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

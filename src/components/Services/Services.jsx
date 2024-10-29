import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    translatedTitle: "مرافق فاخرة",
    description:
      "Experience the finest in comfort and elegance with our premium facilities, designed to offer unparalleled luxury.",
    translatedDescription:
      "اختبر أرقى مستويات الراحة والأناقة مع مرافقنا الفاخرة المصممة لتقديم رفاهية لا مثيل لها.",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    translatedTitle: "منتجات عالية الجودة",
    description:
      "We provide top-tier products crafted with precision and care, ensuring the highest quality standards.",
    translatedDescription:
      "نقدم منتجات عالية الجودة تم تصميمها بعناية ودقة، لضمان أعلى معايير الجودة.",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    translatedTitle: "أسعار مناسبة",
    description:
      "Enjoy exceptional services and products at competitive prices without compromising on quality.",
    translatedDescription:
      "استمتع بخدمات ومنتجات استثنائية بأسعار تنافسية دون المساومة على الجودة.",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];

const Services = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar"; // Check if the language is Arabic

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <div className="container py-20">
        {/* Heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif text-[#930000]"
          >
            {isArabic ? "ماذا نقدم" : "What we provide"}
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-gray-500 text-sm"
          >
            {isArabic
              ? "حقق حلمك المنزلي بمساعدة فردية وتصاميم منتقاة بعناية."
              : "Bring your dream home to life with one-on-one design help & hand-picked products"}
          </motion.p>
        </div>
        {/* Card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView={"animate"}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-[#930000] hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
              >
                <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-serif">
                  {isArabic ? card.translatedTitle : card.title}
                </p>
                <p className="text-gray-400 text-xs">
                  {isArabic ? card.translatedDescription : card.description}
                </p>
                <Link
                  to={card.link}
                  className="inline-block border-b border-black"
                >
                  {isArabic ? "اعرف المزيد" : "Learn More"}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

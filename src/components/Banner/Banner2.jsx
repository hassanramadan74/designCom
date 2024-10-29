import Banner1 from "../../assets/Photo-3.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { useTranslation } from "react-i18next";

const Banner2 = () => {
  const {  i18n } = useTranslation();
  const isArabic = i18n.language === "ar"; // Check if the language is Arabic

  return (
    <div>
      <div className="container py-14" dir={isArabic ? "rtl" : "ltr"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif text-[#930000]"
            >
              {isArabic ? "طريقة بسيطة لصنع منتج أنيق" : "Simple way to make stylish Product"}
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm leading-7"
            >
              {isArabic 
                ? "يبدأ إنشاء منتج أنيق بفهم جمهورك واحتياجاته. من خلال دمج التصميم المبتكر مع المواد عالية الجودة والميزات سهلة الاستخدام، نصنع منتجات لا تبدو جيدة فحسب، بل تؤدي أداءً متميزًا."
                : "Creating a stylish product starts with understanding your audience and their needs. By blending innovative design with quality materials and user-friendly features, we craft products that not only look good but also perform exceptionally well."
              }
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif text-[#930000]">15</p>
                <p className="text-gray-500 text-sm">
                  {isArabic ? "سنوات من الخبرة" : "Years of Experience"}
                </p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif text-[#930000]">350</p>
                <p className="text-gray-500 text-sm">
                  {isArabic ? "عملاء سعداء" : "Happy Clients"}
                </p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif text-[#930000]">34</p>
                <p className="text-gray-500 text-sm">
                  {isArabic ? "جوائز محققة" : "Award Gained"}
                </p>
              </div>
            </motion.div>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </motion.button>
            </div>
          </div>
          
          {/* Image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: isArabic ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;

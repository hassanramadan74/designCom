import HeroPng from "../../assets/Photo-1.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const {  i18n } = useTranslation();
  const isArabic = i18n.language === "ar"; // Check if language is Arabic

  return (
    <>
      <div className="container" dir={isArabic ? "rtl" : "ltr"}>
        <div className={`grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10 ${isArabic ? "md:pl-8 xl:pl-52 text-right" : "md:pr-8 xl:pr-52 text-left"}`}>
          
          {/* Text section */}
          <div className={`flex flex-col justify-center gap-7 text-center ${isArabic ? "md:text-right" : "md:text-left"} pt-20 md:pt-0 px-10`}>
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-serif text-[#930000]"
            >
              {isArabic ? "حلول الإعلام الرقمي المبتكرة" : "Innovative Digital Media Solutions"}
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-gray-500 leading-7"
            >
              {isArabic 
                ? "حقق حلمك بمساعدة تصميم فردية ومنتجات مختارة وفقاً لأسلوبك ومساحتك وميزانيتك."
                : "Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget."
              }
            </motion.p>
            <div className={`flex ${isArabic ? "space-x-reverse space-x-4" : "space-x-4"}`}>
              <motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                {isArabic ? "ابدأ الآن" : "Get Started"}
              </motion.button>
              <motion.button
                variants={SlideUp(1.1)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase"
              >
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </motion.button>
            </div>
          </div>
          
          {/* Images section */}
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{ x: isArabic ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={HeroPng}
              alt=""
              className="w-[80%] md:w-[700px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

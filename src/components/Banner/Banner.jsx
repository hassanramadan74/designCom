import Banner1 from "../../assets/Photo-2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar"; // Check if language is Arabic

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: isArabic ? 100 : -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif text-[#930000]"
            >
              {isArabic
                ? "نؤمن بأن الفريق يجعل أي مشروع أفضل"
                : "We Believe that a team makes any project better"}
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm leading-7"
            >
              {isArabic
                ? "التعاون هو مفتاح النجاح. يعمل فريقنا المخصص بشكل وثيق مع العملاء لضمان أن كل مشروع يثري بتنوع وجهات النظر والخبرة الجماعية، مما يؤدي إلى نتائج رائعة."
                : "Collaboration is the key to success. Our dedicated team works closely with clients, ensuring that every project is enriched with diverse perspectives and collective expertise, resulting in outstanding outcomes."}
            </motion.p>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                {isArabic ? "اكتشف الآن" : "Discover Now"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

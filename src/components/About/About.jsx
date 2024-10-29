import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import about from "../../assets/abtt.jpg";
import { useTranslation } from "react-i18next"; // Import useTranslation

const About = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar"; // Check if the current language is Arabic

  return (
    <>
      <div className="container py-14">
        <div className="space-y-5 xl:max-w-[500px] mx-auto">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-serif text-center text-[#930000]"
          >
            {isArabic ? "نحن DesignCom" : "We Are DesignCom"}
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm leading-7 text-center"
          >
            {isArabic
              ? "DesignCom هي وكالة إبداعية تحقق الأفكار من خلال حلول مبتكرة، تجمع بين التصميم والتكنولوجيا لتقديم نتائج مميزة."
              : "DesignCom is a creative agency that brings ideas to life through innovative solutions, blending design and technology to deliver outstanding results."}
          </motion.p>
          <div className="flex justify-center">
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn bg-[#930000] text-white shadow-[5px_5px_0px_0px_#6c6c6c] px-12"
            >
              {isArabic ? "استفسار" : "ENQUIRE"}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="container py-14">
        <motion.div
          variants={SlideUp(0.6)}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto"
        >
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[60px] font-extra-light">15</p>
            <p className="font-bold text-[#930000]">
              {isArabic ? "سنوات من الخبرة" : "Years of Experience"}
            </p>
            <p className="text-center">
              {isArabic
                ? "أكثر من عقد من تقديم حلول إبداعية ورقمية متميزة للعملاء في جميع أنحاء العالم."
                : "Over a decade of delivering top-notch creative and digital solutions for clients worldwide."}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[60px] font-extra-light">350</p>
            <p className="font-bold text-[#930000]">
              {isArabic ? "عملاء سعداء" : "Happy Clients"}
            </p>
            <p className="text-center">
              {isArabic
                ? "نفخر ببناء علاقات دائمة مع العملاء الراضين في مختلف الصناعات."
                : "We pride ourselves on building lasting relationships with satisfied clients across various industries."}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[60px] font-extra-light">34</p>
            <p className="font-bold text-[#930000]">
              {isArabic ? "جوائز مكتسبة" : "Awards Gained"}
            </p>
            <p className="text-center">
              {isArabic
                ? "لقد تم التعرف على عملنا المبتكر من خلال العديد من الجوائز للابداع والتميز."
                : "Our innovative work has been recognized with numerous awards for creativity and excellence."}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[60px] font-extra-light">23</p>
            <p className="font-bold text-[#930000]">
              {isArabic ? "مواقع مكتملة" : "Completed Websites"}
            </p>
            <p className="text-center">
              {isArabic
                ? "لقد قمنا بتسليم أكثر من 20 موقعًا مذهلاً، تم تصميمها لتلبية احتياجات العملاء الفريدة."
                : "We have successfully delivered over 20 stunning websites, each tailored to meet unique client needs."}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="h-[80vh] py-10">
        <img
          src={about}
          alt={isArabic ? "فريق" : "team"} // Change alt text based on language
          className="h-full w-full shadow-[10px_10px_20px_rgba(147,0,0,0.3)]"
        />
      </div>

      <div className="container py-10">
        <div className="flex justify-center items-center flex-col">
          <div className="space-y-6">
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-sens text-center font-light leading-relaxed mb-8"
            >
              {isArabic
                ? "تحدث الجمال مع الكود، وليس من قبيل الصدفة. نحن نستخدم أدوات إبداعية، والكود، ومعرفة قوية بالعلامة التجارية على الإنترنت لبناء حلول أنيقة لعملائنا."
                : "Beauty happens with code, not by chance. We employ creative tools, code, and solid online branding knowledge to build elegant solutions for our clients."}
            </motion.p>
            <p className="text-center font-semibold">
              {isArabic
                ? "فريقنا ملتزم بدمج التصميم الإبداعي مع التكنولوجيا المتطورة، مما يضمن تميز كل مشروع."
                : "Our team is dedicated to blending creative design with cutting-edge technology, ensuring that every project stands out."}
            </p>
            <div className="flex justify-center">
              <motion.button
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-[#930000] text-white shadow-[5px_5px_0px_0px_#6c6c6c] px-12"
              >
                {isArabic ? "تعرف على فريقنا" : "MEET OUR TEAM"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5DADA]">
        <div className="container py-16">
          <div>
            <p className="text-5xl font-sens text-center font-light mb-10 text-[#930000]">
              {isArabic
                ? "ما المختلف عندما تعمل معنا؟"
                : "What's different when you work with us?"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 space-y-6">
                <p>
                  {isArabic
                    ? "العمل مع DesignCom يعني الحصول على حلول مخصصة مصممة لتلبية احتياجات عملك الفريدة. نركز على صياغة استراتيجيات إبداعية تتماشى مع صوت علامتك التجارية وأهدافك."
                    : "Working with DesignCom means receiving personalized solutions tailored to your unique business needs. We focus on crafting creative strategies that align with your brand's voice and goals."}
                </p>
                <p>
                  {isArabic
                    ? "تسمح لنا الخبرة العميقة لفريقنا في الصناعة بالتنقل في التحديات المعقدة وتقديم حلول مبتكرة، مما يضمن أن تظل أعمالك متقدمة على المنافسة."
                    : "Our team’s deep industry experience allows us to navigate complex challenges and deliver innovative solutions, ensuring your business remains ahead of the competition."}
                </p>
                <p>
                  {isArabic
                    ? "نحن لسنا مجرد مطورين - نحن شركاءك في بناء علامة تجارية تزدهر في العالم الرقمي."
                    : "We’re not just developers—we’re your partners in building a brand that thrives in the digital world."}
                </p>
              </div>
              <div className="px-4 space-y-6">
                <p>
                  {isArabic
                    ? "كل مشروع نقوم به هو رحلة نبدأها معًا، حيث نفهم رؤيتك ونعمل بجد لتحقيقها."
                    : "Every project we undertake is a journey we embark on together, where we understand your vision and work hard to bring it to life."}
                </p>
                <p>
                  {isArabic
                    ? "دعونا نساعدكم في تحقيق أهدافكم وزيادة نموكم الرقمي من خلال استراتيجياتنا المصممة خصيصًا."
                    : "Let us help you achieve your goals and boost your digital growth through our tailored strategies."}
                </p>
                <p>
                  {isArabic
                    ? "إنه وقت الإبداع، ولنعمل معًا لنصنع شيئًا رائعًا."
                    : "It's time to get creative, and let’s work together to create something amazing."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-14">
      <div>
        <h1 className="font-light font-sans text-5xl mb-8 text-center text-[#930000]">
          {isArabic ? "عمليتنا" : "Our process"}
        </h1>
        <p className="text-center font-semibold mb-20">
          {isArabic
            ? "في DesignCom، نتبع عملية استراتيجية تضمن تنفيذ كل مشروع بشكل مثالي، من الفكرة إلى الإكمال."
            : "At DesignCom, we follow a strategic process that ensures every project is executed flawlessly, from concept to completion."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Project Initiation */}
          <div className="bg-[#EAE9E8]">
            <div className="bg-[#930000] flex justify-center flex-col items-center p-2">
              <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
              </div>
              <h2 className="font-light text-lg text-white">
                {isArabic ? "بدء المشروع" : "Project Initiation"}
              </h2>
            </div>
            <div className="p-6">
              <ul className="list-disc p-4">
                {isArabic ? (
                  <>
                    <li>استشارة العملاء</li>
                    <li>عصف ذهني للمشروع</li>
                    <li>تخطيط النطاق والجدول الزمني</li>
                    <li>مفاهيم التصميم الأولية</li>
                  </>
                ) : (
                  <>
                    <li>Client consultation</li>
                    <li>Project brainstorming</li>
                    <li>Scope and timeline planning</li>
                    <li>Initial design concepts</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Design & Development */}
          <div className="bg-[#EAE9E8]">
            <div className="bg-[#930000] flex justify-center flex-col items-center p-2">
              <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
              </div>
              <h2 className="font-light text-lg text-white">
                {isArabic ? "التصميم والتطوير" : "Design & Development"}
              </h2>
            </div>
            <div className="p-6">
              <ul className="list-disc p-4">
                {isArabic ? (
                  <>
                    <li>تصميم تجربة المستخدم</li>
                    <li>تطوير الويب المستجيب</li>
                    <li>البرمجة الأمامية والخلفية</li>
                    <li>ضمان الجودة</li>
                  </>
                ) : (
                  <>
                    <li>User experience design</li>
                    <li>Responsive web development</li>
                    <li>Front-end and back-end coding</li>
                    <li>Quality assurance</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Testing */}
          <div className="bg-[#EAE9E8]">
            <div className="bg-[#930000] flex justify-center flex-col items-center p-2">
              <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
              </div>
              <h2 className="font-light text-lg text-white">
                {isArabic ? "اختبار" : "Testing"}
              </h2>
            </div>
            <div className="p-6">
              <ul className="list-disc p-4">
                {isArabic ? (
                  <>
                    <li>اختبار الوظائف الشاملة</li>
                    <li>تحقق من تجربة المستخدم</li>
                    <li>تحسين الأداء</li>
                    <li>اختبار عبر المنصات</li>
                  </>
                ) : (
                  <>
                    <li>Comprehensive functionality testing</li>
                    <li>User experience validation</li>
                    <li>Performance optimization</li>
                    <li>Cross-platform testing</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Launch */}
          <div className="bg-[#EAE9E8]">
            <div className="bg-[#930000] flex justify-center flex-col items-center p-2">
              <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
              </div>
              <h2 className="font-light text-lg text-white">
                {isArabic ? "إطلاق" : "Launch"}
              </h2>
            </div>
            <div className="p-6">
              <ul className="list-disc p-4">
                {isArabic ? (
                  <>
                    <li>فحوصات ضمان الجودة النهائية</li>
                    <li>موافقة العميل</li>
                    <li>الإطلاق على جميع المنصات</li>
                    <li>الدعم بعد الإطلاق</li>
                  </>
                ) : (
                  <>
                    <li>Final quality assurance checks</li>
                    <li>Client approval</li>
                    <li>Launch on all platforms</li>
                    <li>Post-launch support</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default About;

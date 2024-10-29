import { useTranslation } from "react-i18next"; // Import useTranslation

const Service = () => {
  const { i18n } = useTranslation(); // Initialize the translation hook
  const isArabic = i18n.language === "ar"; // Check if the current language is Arabic

  return (
    <>
      <div className="bg-[url('./assets/about-without-text.png')] bg-cover bg-center min-h-[70vh] w-full flex items-center" dir="ltr">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-xl">
            <h1 className="text-[#930000] font-sans text-2xl md:text-3xl lg:text-4xl tracking-wider leading-normal font-bold mb-4 md:mb-6" dir={isArabic ? "rtl" : "ltr"}>
              {isArabic
                ? "نأخذ عملك إلى المستوى التالي"
                : "WE'LL TAKE YOUR BUSINESS TO THE NEXT LEVEL"}
            </h1>
            <p className="text-[#930000] font-sans text-sm md:text-base" dir={isArabic ? "rtl" : "ltr"}>
              {isArabic
                ? "يضمن إدارة الوسائط تنسيقًا سلسًا عبر المنصات. من تنظيم الأصول إلى تتبع الأداء، يزيد من الكفاءة في تسليم المحتوى الرقمي."
                : "Media management ensures seamless coordination across platforms. From organizing assets to tracking performance, it maximizes efficiency for digital content delivery."}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="bg-[#930000] text-lime-50 w-full lg:w-[70%] min-h-[28rem] p-6 sm:py-8 sm:px-8 md:py-6 md:px-12 flex flex-col justify-center items-center">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-wider mb-4 text-center sm:text-left">
                {isArabic ? "خدماتنا" : "OUR SERVICES"}
              </h2>
              <p className="text-sm sm:text-base leading-normal mb-8 text-center sm:text-left">
                {isArabic
                  ? "تشمل إدارة الوسائط الإشراف على إنشاء وتخزين وتوزيع الأصول الرقمية. الإدارة الفعالة للوسائط هي مفتاح لتحسين سير العمل، وتعزيز التعاون، وضمان أن المحتوى متاح للأشخاص المناسبين في الوقت المناسب. من تنسيق الحملات التسويقية إلى تنظيم مكتبات المحتوى الكبيرة، يعمل مدراء الوسائط على تبسيط العمليات."
                  : "Media management involves overseeing the creation, storage, and distribution of digital assets. Effective media management is key for optimizing workflows, enhancing collaboration, and ensuring that content is accessible to the right people at the right time. From curating marketing campaigns to organizing vast content libraries, media managers streamline operations."}
              </p>
              <div className="flex justify-center sm:justify-start">
                <button className="bg-[#fff] text-black py-2 px-6 sm:px-8 md:px-10 text-sm sm:text-base transition-colors duration-300">
                  {isArabic ? "ابدأ الآن" : "Get Started"}
                </button>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-bullhorn mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  {isArabic ? "التخطيط الإعلامي" : "MEDIA PLANNING"}
                </h2>
                <p className="text-gray-500 text-center">
                  {isArabic
                    ? "تطوير استراتيجية لضمان وصول محتواك إلى الجمهور المناسب، في الوقت المناسب، عبر منصات متعددة."
                    : "Developing a strategy to ensure your content reaches the right audience, at the right time, across various platforms."}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-chart-line mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  {isArabic ? "تحليل الأداء" : "PERFORMANCE ANALYSIS"}
                </h2>
                <p className="text-gray-500 text-center">
                  {isArabic
                    ? "مراقبة وتحسين الحملات الإعلامية لتحقيق أقصى قدر من التفاعل والعائد على الاستثمار."
                    : "Monitoring and optimizing media campaigns to achieve maximum engagement and return on investment."}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-users mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  {isArabic ? "استهداف الجمهور" : "AUDIENCE TARGETING"}
                </h2>
                <p className="text-gray-500 text-center">
                  {isArabic
                    ? "تحديد والوصول إلى قطاعات الجمهور المناسبة لتعزيز التفاعل ورؤية العلامة التجارية."
                    : "Identifying and reaching the right audience segments to enhance engagement and brand visibility."}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-lightbulb mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  {isArabic ? "إنشاء المحتوى" : "CONTENT CREATION"}
                </h2>
                <p className="text-gray-500 text-center">
                  {isArabic
                    ? "صياغة محتوى مخصص يتناغم مع جمهورك ويتماشى مع أهداف صوت علامتك التجارية."
                    : "Crafting tailored content that resonates with your audience and aligns with your brand's goals and voice."}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-share-alt mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  {isArabic ? "استراتيجية التوزيع" : "DISTRIBUTION STRATEGY"}
                </h2>
                <p className="text-gray-500 text-center">
                  {isArabic
                    ? "تنفيذ خطة توزيع عبر القنوات لتحقيق أقصى قدر من الوصول والتأثير لمحتواك."
                    : "Implementing a cross-channel distribution plan to maximize the reach and impact of your content."}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-cogs mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  {isArabic ? "الاندماج التقني" : "TECHNICAL INTEGRATION"}
                </h2>
                <p className="text-gray-500 text-center">
                  {isArabic
                    ? "ضمان دمج جميع الجوانب الفنية، مثل التتبع والتحليلات، للحصول على رؤى دقيقة للبيانات."
                    : "Ensuring all technical aspects, such as tracking and analytics, are seamlessly integrated for accurate data insights."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[url('./assets/desk.avif')] bg-cover bg-center min-h-[65vh] w-full">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="pt-24 container relative z-10">
          <h2 className="text-lime-50 text-3xl tracking-widest text-center mb-16">
            {isArabic ? "عملية العلامة التجارية" : "TRADEMARK PROCESS"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mx-auto">
            <div className="bg-[#E6E7E9] px-10 py-14 text-center" id="firstDev">
              <i className="fa-solid fa-gift mb-8 text-center text-4xl text-[#930000]"></i>
              <h2 className="text-black font-sans text-center font-bold mb-4">
                {isArabic ? "التنقيب" : "RESEARCH"}
              </h2>
              <p className="text-gray-600 text-center">
                {isArabic
                  ? "إجراء أبحاث شاملة لفهم متطلبات مشروعك وأهدافه."
                  : "Conducting thorough research to understand your project requirements and goals."}
              </p>
            </div>
            <div className="bg-[#E6E7E9] px-10 py-14 text-center" id="secondDev">
              <i className="fa-solid fa-pencil-alt mb-8 text-center text-4xl text-[#930000]"></i>
              <h2 className="text-black font-sans text-center font-bold mb-4">
                {isArabic ? "التصميم" : "DESIGN"}
              </h2>
              <p className="text-gray-600 text-center">
                {isArabic
                  ? "إنشاء تصميمات مبدئية تعكس هوية العلامة التجارية."
                  : "Creating initial designs that reflect the brand identity."}
              </p>
            </div>
            <div className="bg-[#E6E7E9] px-10 py-14 text-center" id="thirdDev">
              <i className="fa-solid fa-cogs mb-8 text-center text-4xl text-[#930000]"></i>
              <h2 className="text-black font-sans text-center font-bold mb-4">
                {isArabic ? "التطوير" : "DEVELOPMENT"}
              </h2>
              <p className="text-gray-600 text-center">
                {isArabic
                  ? "بناء الحلول المطلوبة وفقًا للمواصفات المعتمدة."
                  : "Building the required solutions according to approved specifications."}
              </p>
            </div>
            <div className="bg-[#E6E7E9] px-10 py-14 text-center" id="fourthDev">
              <i className="fa-solid fa-check-circle mb-8 text-center text-4xl text-[#930000]"></i>
              <h2 className="text-black font-sans text-center font-bold mb-4">
                {isArabic ? "التسليم" : "DELIVERY"}
              </h2>
              <p className="text-gray-600 text-center">
                {isArabic
                  ? "تسليم المشروع النهائي مع ضمان رضا العميل."
                  : "Delivering the final project while ensuring client satisfaction."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

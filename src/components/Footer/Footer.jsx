import Logo from "../../assets/designcom-logo.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar"; // Check if the language is Arabic

  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-24" />
            </div>
            <p className="hover:text-[#930000] transition-all duration-300">
              {isArabic ? "جريتر نويدا، أوتار براديش، الهند" : "Greater Noida, Uttar Pradesh, India"}
            </p>
            <p className="hover:text-[#930000] transition-all duration-300">
              {isArabic ? "جميع الحقوق محفوظة TCJ © 2024" : "@ 2024 TCJ All rights reserved"}
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">
                {isArabic ? "معلومات عنا" : "About us"}
              </h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">
                    {isArabic ? "قصتنا" : "Our Story"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">
                    {isArabic ? "المصمم" : "Designer"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">
                    {isArabic ? "الحرفية" : "Craftsmanship"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">
                    {isArabic ? "الاستدامة" : "Sustainability"}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">
                {isArabic ? "الدعم" : "Support"}
              </h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">
                    {isArabic ? "الأسئلة الشائعة" : "FAQ's"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">
                    {isArabic ? "الشحن والإرجاع" : "Shipping & Returns"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">
                    {isArabic ? "دليل العناية" : "Care Guide"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">
                    {isArabic ? "الضمان" : "Guarantee"}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">
              {isArabic ? "تواصل معنا" : "Contact us"}
            </h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#" className="hover:text-[#930000] transition-all duration-300">
                  {isArabic ? "+91 123456789" : "+91 123456789"}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a
                  href="mailto:contact.thecodingjourney@gmail.com"
                  className="hover:text-[#930000] transition-all duration-300"
                >
                  {isArabic ? "بريد إلكتروني" : "Email"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <p className="text-center text-sm font-semibold border-t-2 pt-5 mt-5 hover:text-[#930000] transition-all duration-300">
          {isArabic ? "جميع الحقوق محفوظة © 2024 designCom" : "© 2024 designCom All rights reserved"}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

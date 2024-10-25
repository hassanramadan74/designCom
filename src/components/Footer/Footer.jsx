import Logo from "../../assets/designcom-logo.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-24" />
            </div>
            <p className="hover:text-[#930000] transition-all duration-300">Greater Noida, Uttar Pradesh, India</p>
            <p className="hover:text-[#930000] transition-all duration-300">@ 2024 TCJ All rights reserved</p>
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold ">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="# " className="hover:text-[#930000] transition-all duration-300">Our Story</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">Designer</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">Craftmanship</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">FAQ&apos;s</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">Care Guide</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#930000] transition-all duration-300">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#" className="hover:text-[#930000] transition-all duration-300">+91 123456789</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:contact.thecodingjourney@gmail.com" className="hover:text-[#930000] transition-all duration-300">Email</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold  border-t-2 pt-5 mt-5 hover:text-[#930000] transition-all duration-300">
          &copy; 2024 designCom All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

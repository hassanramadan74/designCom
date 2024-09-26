import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import about from "../../assets/abtt.jpg";
const About = () => {
  return (
    <>
      <div className="container py-14">
        <div className="space-y-5  xl:max-w-[500px] mx-auto">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-serif text-center"
          >
            We Are DesignCom
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm leading-7 text-center"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            earum accusantium tempore nam aliquid{" "}
          </motion.p>
          <div className="flex justify-center">
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] px-12"
            >
              ENQUIRE
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
            <p className=" font-bold">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[60px] font-extra-light ">350</p>
            <p className=" font-bold">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[60px] font-extra-light">34</p>
            <p className=" font-bold">Award Gained</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[60px] font-extra-light">23</p>
            <p className=" font-bold">completed website</p>
          </div>
        </motion.div>
      </div>
      <div className=" h-[80vh] py-10">
        <img src={about} alt="team" className="h-full w-full" />
      </div>
      <div className="container py-10">
        <div className="flex justify-center items-center flex-col ">
          <div className="space-y-6">
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-sens text-center font-light leading-relaxed mb-8"
            >
              Beauty happens with code not by chance. We <br /> employ creative
              tools, code and solid online <br /> branding knowledge to build an
              elegant <br /> solutions for our clients.
            </motion.p>
            <p className="text-center font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error{" "}
              <br /> cumque similique asperiores harum iure illum laudantium
              quis laboriosam totam id.
            </p>
            <div className="flex justify-center">
              <motion.button
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] px-12"
              >
                MEET OUR TEAM
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D0D8DA]">
        <div className="container py-16">
          <div>
            <p className="text-5xl font-sens text-center font-light mb-10">
              What&apos;s different when you work with us?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 space-y-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus pariatur dolore sed maxime a modi magnam dignissimos,
                  non aliquid amet! Est natus nemo ea dolor totam dolorum
                  perspiciatis aperiam aspernatur officia animi aliquid sint
                  maxime ipsum facere ipsam possimus voluptatibus, consequatur
                  voluptas. Hic totam eos minima laboriosam eligendi velit
                  soluta!
                </p>
                <p>
                  Lorem ipsum dolor si non aliquid amet! Est natus nemo ea dolor
                  totam dolorum perspiciatis aperiam aspernatur officia animi
                  aliquid sint maxime ipsum facere ipsam possimus voluptatibus,
                  consequatur voluptas. Hic totam eos minima laboriosam eligendi
                  velit soluta!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  necessitatibus fuga nam ab consequuntur error! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Sunt
                  necessitatibus fuga nam ab consequuntur error!
                </p>
              </div>
              <div className="px-4">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, rem?
                </p>
                <ul className="space-y-4 list-disc px-6 mb-4">
                  <li>
                    Lorem ipsum dolor sit amet. vLorem ipsum dolor sit amet.
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nesciunt nostrum debitis nulla quaerat ratione non!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quia.
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit neque, illo, molestiae quidem consequuntur sequi
                  praesentium nemo magnam repellendus mollitia veniam, soluta
                  eaque modi similique!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-14">
        <div>
          <h1 className="font-light font-sans text-5xl mb-8 text-center">
            {" "}
            Our process
          </h1>
          <p className="text-center font-semibold mb-20">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            hic itaque! Cupiditate in architecto nemo, nostrum ut delectus!
            Quia, possimus! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#EAE9E8] ">
              <div className="bg-black flex justify-center flex-col items-center p-2">
                <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                  <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                </div>
                <h2 className="font-light text-lg text-white">
                  Project intiation
                </h2>
              </div>
              <div className="p-6">
                <ul className="list-disc p-4">
                  <li>Restaurant gathering</li>
                  <li>Panel Review</li>
                  <li>Project Plan</li>
                  <li>power series</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#EAE9E8] mt-16 md:mt-0">
              <div className="bg-black flex justify-center flex-col items-center p-2">
                <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                  <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                </div>
                <h2 className="font-light text-lg text-white">
                  Project intiation
                </h2>
              </div>
              <div className="p-6">
                <ul className="list-disc p-4">
                  <li>Restaurant gathering</li>
                  <li>Panel Review</li>
                  <li>Project Plan</li>
                  <li>power series</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#EAE9E8] mt-16 md:mt-0">
              <div className="bg-black flex justify-center flex-col items-center p-2">
                <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                  <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                </div>
                <h2 className="font-light text-lg text-white">
                  Project intiation
                </h2>
              </div>
              <div className="p-6">
                <ul className="list-disc p-4">
                  <li>Restaurant gathering</li>
                  <li>Panel Review</li>
                  <li>Project Plan</li>
                  <li>power series</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#EAE9E8] mt-16 md:mt-0">
              <div className="bg-black flex justify-center flex-col items-center p-2">
                <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                  <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                </div>
                <h2 className="font-light text-lg text-white">
                  Project intiation
                </h2>
              </div>
              <div className="p-6">
                <ul className="list-disc p-4">
                  <li>Restaurant gathering</li>
                  <li>Panel Review</li>
                  <li>Project Plan</li>
                  <li>power series</li>
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

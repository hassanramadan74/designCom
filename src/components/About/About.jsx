import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import about from "../../assets/abtt.jpg";

const About = () => {
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
            We Are DesignCom
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm leading-7 text-center"
          >
            DesignCom is a creative agency that brings ideas to life through innovative solutions, blending design and technology to deliver outstanding results.
          </motion.p>
          <div className="flex justify-center">
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn bg-[#930000] text-white shadow-[5px_5px_0px_0px_#6c6c6c] px-12"
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
            <p className="font-bold text-[#930000]">Years of Experience</p>
            <p className="text-center">
              Over a decade of delivering top-notch creative and digital solutions for clients worldwide.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[60px] font-extra-light">350</p>
            <p className="font-bold text-[#930000]">Happy Clients</p>
            <p className="text-center">
              We pride ourselves on building lasting relationships with satisfied clients across various industries.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[60px] font-extra-light">34</p>
            <p className="font-bold text-[#930000]">Awards Gained</p>
            <p className="text-center">
              Our innovative work has been recognized with numerous awards for creativity and excellence.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[60px] font-extra-light">23</p>
            <p className="font-bold text-[#930000]">Completed Websites</p>
            <p className="text-center">
              We have successfully delivered over 20 stunning websites, each tailored to meet unique client needs.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="h-[80vh] py-10">
        <img
          src={about}
          alt="team"
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
              Beauty happens with code, not by chance. We <br /> employ creative
              tools, code, and solid online <br /> branding knowledge to build
              elegant <br /> solutions for our clients.
            </motion.p>
            <p className="text-center font-semibold">
              Our team is dedicated to blending creative design with cutting-edge technology, ensuring that every project stands out.
            </p>
            <div className="flex justify-center">
              <motion.button
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-[#930000] text-white shadow-[5px_5px_0px_0px_#6c6c6c] px-12"
              >
                MEET OUR TEAM
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5DADA]">
        <div className="container py-16">
          <div>
            <p className="text-5xl font-sens text-center font-light mb-10 text-[#930000]">
              What&apos;s different when you work with us?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 space-y-6">
                <p>
                  Working with DesignCom means receiving personalized solutions tailored to your unique business needs. We focus on crafting creative strategies that align with your brand's voice and goals.
                </p>
                <p>
                  Our team’s deep industry experience allows us to navigate complex challenges and deliver innovative solutions, ensuring your business remains ahead of the competition.
                </p>
                <p>
                  We’re not just developers—we’re your partners in building a brand that thrives in the digital world.
                </p>
              </div>
              <div className="px-4">
                <p className="mb-4">
                  Why choose us? We blend strategy with creativity to ensure that your business grows with a solid foundation.
                </p>
                <ul className="space-y-4 list-disc px-6 mb-4">
                  <li>Custom-tailored solutions for every client.</li>
                  <li>
                    A focus on long-term growth and sustainable digital success.
                  </li>
                  <li>
                    An experienced team with a deep understanding of design and technology.
                  </li>
                </ul>
                <p>
                  Our approach revolves around innovative design, technical expertise, and close collaboration with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-14">
        <div>
          <h1 className="font-light font-sans text-5xl mb-8 text-center text-[#930000]">
            Our process
          </h1>
          <p className="text-center font-semibold mb-20">
            At DesignCom, we follow a strategic process that ensures every project is executed flawlessly, from concept to completion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#EAE9E8]">
              <div className="bg-[#930000] flex justify-center flex-col items-center p-2">
                <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                  <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                </div>
                <h2 className="font-light text-lg text-white">
                  Project Initiation
                </h2>
              </div>
              <div className="p-6">
                <ul className="list-disc p-4">
                  <li>Client consultation</li>
                  <li>Project brainstorming</li>
                  <li>Scope and timeline planning</li>
                  <li>Initial design concepts</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#EAE9E8]">
              <div className="bg-[#930000] flex justify-center flex-col items-center p-2">
                <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                  <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                </div>
                <h2 className="font-light text-lg text-white">
                  Design & Development
                </h2>
              </div>
              <div className="p-6">
                <ul className="list-disc p-4">
                  <li>User experience design</li>
                  <li>Responsive web development</li>
                  <li>Front-end and back-end coding</li>
                  <li>Quality assurance</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#EAE9E8]">
              <div className="bg-[#930000] flex justify-center flex-col items-center p-2">
                <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                  <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                </div>
                <h2 className="font-light text-lg text-white">Testing</h2>
              </div>
              <div className="p-6">
                <ul className="list-disc p-4">
                  <li>Comprehensive functionality testing</li>
                  <li>User experience validation</li>
                  <li>Performance optimization</li>
                  <li>Cross-platform testing</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#EAE9E8]">
              <div className="bg-[#930000] flex justify-center flex-col items-center p-2">
                <div className="w-1/4 flex justify-center items-center p-6 bg-yellow-500 border-white border-4 rounded-full relative top-[-50px]">
                  <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
                </div>
                <h2 className="font-light text-lg text-white">Launch</h2>
              </div>
              <div className="p-6">
                <ul className="list-disc p-4">
                  <li>Final quality assurance checks</li>
                  <li>Client approval</li>
                  <li>Launch on all platforms</li>
                  <li>Post-launch support</li>
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

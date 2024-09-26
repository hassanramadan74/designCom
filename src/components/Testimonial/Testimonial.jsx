
import Slider from "react-slick"; // Import Slider from react-slick
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";

// Testimonials data
const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=1",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Alex",
    designation: "Developer",
    img: "https://i.pravatar.cc/300?img=2",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "George",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.6,
  },
  {
    id: 2,
    name: "Alexaa",
    designation: "Developer",
    img: "https://i.pravatar.cc/300?img=2",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.4,
  },
  {
    id: 1,
    name: "John Doeee",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=1",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.2,
  },
  {
    id: 3,
    name: "Georgeooo",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.6,
  },
];

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true, // You can set arrows to true or false as per your requirement
  autoplay: true, // Enable auto sliding
  autoplaySpeed: 3000, // 3 seconds
};

const Testimonial = () => {
  return (
    <>
      {/* Inline CSS for slick dots */}
      <style>
        {`
          .slick-dots li button:before {
            color: white; /* Set dots to white */
            font-size: 12px; /* Adjust the size of the dots */
            margin-top:10px
          }
          .slick-dots li.slick-active button:before {
            color: white; /* Keep active dot white */
          }
          .slick-dots li button:hover:before {
            color: white; /* Dots remain white on hover */
          }
        `}
      </style>

      <div className="py-14">
        {/* heading title */}
        <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-serif"
          >
            Words from our customers
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm max-w-[350px] mx-auto"
          >
            Bring your dream home to life with one-on-one design help & hand-picked products.
          </motion.p>
        </div>

        {/* Testimonial slider */}
        <div className="bg-black p-12">
          <div className="container">
            <Slider {...sliderSettings}>
              {TestimonialData.map((card) => (
                <motion.div
                  variants={SlideLeft(card.delay)}
                  initial="initial"
                  whileInView="animate"
                  key={card.id}
                  className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300 "
                >
                  {/* Upper section */}
                  <div className="flex flex-row items-center gap-3">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-[60px] rounded-full"
                    />
                    <div>
                      <p className="text-sm font-bold group-hover:text-black">
                        {card.name}
                      </p>
                      <p className="text-gray-400 text-xs group-hover:text-black">
                        {card.designation}
                      </p>
                      <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  {/* Bottom section */}
                  <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                    <p className="text-sm text-gray-300 group-hover:text-black duration-300">
                      {card.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

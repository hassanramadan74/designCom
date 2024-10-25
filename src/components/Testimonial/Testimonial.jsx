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
    text: "The creativity and attention to detail in the design process truly transformed our project. It was a pleasure to collaborate with such a talented team.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Alex",
    designation: "Developer",
    img: "https://i.pravatar.cc/300?img=2",
    text: "Working with this team has been an incredible experience. Their technical expertise and support made the development process seamless and efficient.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "George",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    text: "The project management was top-notch. They ensured that every aspect was handled with care, resulting in a successful outcome that exceeded our expectations.",
    delay: 0.6,
  },
  // Additional testimonials...
];


// Slider settings with responsive breakpoints
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Default is 3 slides
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // Screens below 1024px width
      settings: {
        slidesToShow: 2, // Show 2 slides for tablet
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768, // Screens below 768px width
      settings: {
        slidesToShow: 1, // Show 1 slide for mobile
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // Screens below 640px width (small screens)
      settings: {
        slidesToShow: 1, // Always show 1 slide on very small devices
        slidesToScroll: 1,
        arrows: false, // Optionally hide arrows for very small screens
        dots: true, // Dots can still be visible
      },
    },
  ],
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
            margin-top:10px;
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
            className="text-4xl font-bold font-serif text-[#930000]"
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
          <div className="container ">
            <Slider {...sliderSettings}>
              {TestimonialData.map((card) => (
                <motion.div
                  variants={SlideLeft(card.delay)}
                  initial="initial"
                  whileInView="animate"
                  key={card.id}
                  className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-[#930000] duration-300 w-full sm:w-full md:w-[50%] lg:w-[33%] " // Added mx-3 for space between slides
                >
                  {/* Upper section */}
                  <div className="flex flex-row items-center gap-3">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="w-[60px] rounded-full"
                    />
                    <div>
                      <p className="text-sm font-bold ">
                        {card.name}
                      </p>
                      <p className="text-gray-400 text-xs ">
                        {card.designation}
                      </p>
                      <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  {/* Bottom section */}
                  <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                    <p className="text-sm text-gray-300  duration-300">
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

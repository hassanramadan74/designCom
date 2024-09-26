const Service = () => {
  return (
    <>
      <div className="bg-[url('./assets/services.avif')] bg-cover bg-center min-h-[70vh] w-full flex items-center">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-xl">
            <h1 className="text-lime-50 font-sans text-2xl md:text-3xl lg:text-4xl tracking-wider leading-normal font-bold mb-4 md:mb-6">
              WE&apos;LL TAKE YOUR <br className="hidden md:inline" /> BUSINESS
              TO THE <br className="hidden md:inline" /> NEXT LEVEL
            </h1>
            <p className="text-lime-50 font-sans text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore{" "}
              <br className="hidden md:inline" /> voluptatem eligendi quo, odit
              adipisci nisi quidem accusantium
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="bg-black text-lime-50 w-full lg:w-[70%] min-h-[28rem] p-6 sm:py-8 sm:px-8 md:py-6 md:px-12  flex flex-col justify-center items-center ">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-wider mb-4 text-center sm:text-left">
                OUR SERVICES
              </h2>
              <p className="text-sm sm:text-base leading-normal mb-8 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Laborum est
                to itaque maxime! Repudiandae facere nisi quibusdam placeat
                maxime eaque! placeat maxime eaque!
              </p>
              <div className="flex justify-center sm:justify-start">
                <button className="bg-[#76A5A6] py-2 px-6 sm:px-8 md:px-10 text-sm sm:text-base hover:bg-[#5a8081] transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-gift mb-4 text-center text-3xl"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  BUSINESS STRATEGY
                </h2>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-gift mb-4 text-center text-3xl"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  BUSINESS STRATEGY
                </h2>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-gift mb-4 text-center text-3xl"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  BUSINESS STRATEGY
                </h2>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-gift mb-4 text-center text-3xl"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  BUSINESS STRATEGY
                </h2>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-gift mb-4 text-center text-3xl"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  BUSINESS STRATEGY
                </h2>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-gift mb-4 text-center text-3xl"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  BUSINESS STRATEGY
                </h2>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labor
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
            {" "}
            TRADEMARK PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mx-auto">
            <div className="bg-[#E6E7E9] px-10 py-14 text-center" id="firstDev">
              <i className="fa-solid fa-gift mb-8 text-center text-4xl"></i>
              <h2 className="text-black font-sans text-center font-bold mb-4">
                EXECUTION & <br /> ANALYSIS
              </h2>
              <p className="text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem illum velit, laudantium dolorem deserunt quae ratione
                maxime quidem voluptate aspernatur tempore commodi perferendis
                vel optio, enim impedit eos soluta. Mollitia?
              </p>
            </div>
            <div className="bg-[#25323E] px-10 py-12 text-center" id="firstDev">
              <i className="fa-brands fa-apple mb-8 text-center text-4xl"></i>
              <h2 className="text-white font-sans text-center font-bold mb-4">
                MAPPING & <br /> PLANNING
              </h2>
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem illum velit, laudantium dolorem deserunt quae ratione
                maxime quidem voluptate aspernatur tempore commodi perferendis
                vel optio, enim impedit eos soluta. Mollitia?
              </p>
            </div>
            <div className="bg-[#76A5A6] px-10 py-12 text-center" id="firstDev">
              <i className="fa-solid fa-bomb mb-8 text-center text-4xl"></i>
              <h2 className="text-white font-sans text-center font-bold mb-4">
                MARKET <br /> RESEARCH
              </h2>
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem illum velit, laudantium dolorem deserunt quae ratione
                maxime quidem voluptate aspernatur tempore commodi perferendis
                vel optio, enim impedit eos soluta. Mollitia?
              </p>
            </div>
            <div className="bg-[#d4e765] px-10 py-12 text-center" id="firstDev">
              <i className="fa-solid fa-face-smile mb-8 text-center text-4xl"></i>
              <h2 className="text-white font-sans text-center font-bold mb-4">
                CREATIVE <br /> MARKETING
              </h2>
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem illum velit, laudantium dolorem deserunt quae ratione
                maxime quidem voluptate aspernatur tempore commodi perferendis
                vel optio, enim impedit eos soluta. Mollitia?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

const Service = () => {
  return (
    <>
      <div className="bg-[url('./assets/about-without-text.png')] bg-cover bg-center min-h-[70vh] w-full flex items-center">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-xl">
            <h1 className="text-[#930000] font-sans text-2xl md:text-3xl lg:text-4xl tracking-wider leading-normal font-bold mb-4 md:mb-6">
              WE&apos;LL TAKE YOUR <br className="hidden md:inline" /> BUSINESS
              TO THE <br className="hidden md:inline" /> NEXT LEVEL
            </h1>
            <p className="text-[#930000] font-sans text-sm md:text-base">
              Media management ensures seamless coordination across platforms.{" "}
              <br className="hidden md:inline" /> From organizing assets to
              tracking performance, it maximizes efficiency for digital content
              delivery.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="bg-[#930000] text-lime-50 w-full lg:w-[70%] min-h-[28rem] p-6 sm:py-8 sm:px-8 md:py-6 md:px-12  flex flex-col justify-center items-center ">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-wider mb-4 text-center sm:text-left">
                OUR SERVICES
              </h2>
              <p className="text-sm sm:text-base leading-normal mb-8 text-center sm:text-left">
                Media management involves overseeing the creation, storage, and
                distribution of digital assets. Effective media management is
                key for optimizing workflows, enhancing collaboration, and
                ensuring that content is accessible to the right people at the
                right time. From curating marketing campaigns to organizing vast
                content libraries, media managers streamline operations.
              </p>
              <div className="flex justify-center sm:justify-start">
                <button className="bg-[#fff] text-black py-2 px-6 sm:px-8 md:px-10 text-sm sm:text-base  transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-bullhorn mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  MEDIA PLANNING
                </h2>
                <p className="text-gray-500 text-center">
                  Developing a strategy to ensure your content reaches the right
                  audience, at the right time, across various platforms.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-chart-line mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  PERFORMANCE ANALYSIS
                </h2>
                <p className="text-gray-500 text-center">
                  Monitoring and optimizing media campaigns to achieve maximum
                  engagement and return on investment.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-users mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  AUDIENCE TARGETING
                </h2>
                <p className="text-gray-500 text-center">
                  Identifying and reaching the right audience segments to
                  enhance engagement and brand visibility.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-lightbulb mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  CONTENT CREATION
                </h2>
                <p className="text-gray-500 text-center">
                  Crafting tailored content that resonates with your audience
                  and aligns with your brand's goals and voice.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-share-alt mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  DISTRIBUTION STRATEGY
                </h2>
                <p className="text-gray-500 text-center">
                  Implementing a cross-channel distribution plan to maximize the
                  reach and impact of your content.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8">
                <i className="fa-solid fa-cogs mb-4 text-center text-3xl text-[#930000]"></i>
                <h2 className="text-black font-sans text-center font-bold">
                  TECHNICAL INTEGRATION
                </h2>
                <p className="text-gray-500 text-center">
                  Ensuring all technical aspects, such as tracking and
                  analytics, are seamlessly integrated for accurate data
                  insights.
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
              <i className="fa-solid fa-gift mb-8 text-center text-4xl text-[#930000]"></i>
              <h2 className="text-black font-sans text-center font-bold mb-4">
                EXECUTION & <br /> ANALYSIS
              </h2>
              <p className="text-gray-500 text-center">
                From implementing media strategies to analyzing their
                effectiveness, we ensure seamless execution while continuously
                assessing performance metrics to refine the approach for optimal
                results.
              </p>
            </div>
            <div className="bg-[#25323E] px-10 py-12 text-center" id="firstDev">
              <i className="fa-brands fa-apple mb-8 text-center text-4xl text-[#930000]"></i>
              <h2 className="text-white font-sans text-center font-bold mb-4">
                MAPPING & <br /> PLANNING
              </h2>
              <p className="text-white text-center">
                We develop comprehensive media plans, mapping out the best
                strategies and platforms to ensure that your message reaches the
                right audience at the right time.
              </p>
            </div>
            <div className="bg-[#76A5A6] px-10 py-12 text-center" id="firstDev">
              <i className="fa-solid fa-bomb mb-8 text-center text-4xl text-[#930000]"></i>
              <h2 className="text-white font-sans text-center font-bold mb-4">
                MARKET <br /> RESEARCH
              </h2>
              <p className="text-white text-center">
                In-depth research is the foundation of successful campaigns. We
                analyze market trends, audience behavior, and competitors to
                guide your media management strategy.
              </p>
            </div>
            <div className="bg-black px-10 py-12 text-center" id="firstDev">
              <i className="fa-solid fa-face-smile mb-8 text-center text-4xl text-[#930000]"></i>
              <h2 className="text-white font-sans text-center font-bold mb-4">
                CREATIVE <br /> MARKETING
              </h2>
              <p className="text-white text-center">
                Innovative and compelling creative campaigns are our specialty.
                We combine strategy with creativity to captivate your audience
                and drive engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

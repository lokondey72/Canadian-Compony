import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="lg:flex gap-5 my-20 lg:my-40 mx-4">
          <div className="lg:w-5/12 flex items-center gap-5 mb-5 lg:mb-0">
            <div className="rounded-lg overflow-hidden mt-28">
              <img
                className="w-full"
                src="/About_us_img_1.png"
                alt="About_us_img_1"
              />
            </div>
            <div className="rounded-lg overflow-hidden mb-5">
              <img
                className="w-full"
                src="/About_us_img_2.png"
                alt="About_us_img_2"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-12 h-[2px] border-b-4 border-black border-dotted"></div>
            <div className="mt-5">
              <h3 className="my-5 text-4xl text-brand font-inter font-bold">
                Best Moving Company with more than 10 years Experience
              </h3>
              <p className="text-sm text-brand font-inter">
                Lorem ipsum dolor sit amet consectetur adipiscing elit velit
                justo, egestas morbi accumsan pretium leo et iaculis a sociis,
                lectus condimentum eleifend dictumst netus nisi faucibus dis. In
                id magnis integer imperdiet turpis vel curae libero, dapibus
                conubia nulla inceptos curabitur accumsan litora, commodo
                natoque praesent fames aenean vehicula sociis.
              </p>
              <p className="my-5 text-sm text-brand font-inter">
                Condimentum eleifend dictumst netus nisi faucibus dis. In id
                magnis integer imperdiet turpis vel curae libero, dapibus
                conubia nulla inceptos curabitur accumsan litora, commodo
                natoque praesent fames aenean vehicula sociis.
              </p>
              <button className="rounded-2xl font-bold font-inter gap-3 py-2 px-5 text-white bg-brand">
                <Link to="#" className="flex items-center gap-4">
                  <span>check rates</span>
                  <IoIosArrowForward className="font-bold font-inter" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop
        className="w-3 h-3 mb-10 pl-[6px] rounded-full"
        smooth
        color="#ff0000"
      />
    </>
  );
};

export default AboutUs;

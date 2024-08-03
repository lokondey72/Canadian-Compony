import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="w-full bg-center bg-no-repeat bg-cover bg-Banner_bg">
        <div className="container">
          <div className="lg:flex justify-between items-center mx-4 pt-32 lg:pt-52 pb-32">
            <div className="mb-10 lg:m-0">
              <h2 className="text-4xl text-white font-bold font-inter">
                Check Your Visa Stutas
              </h2>
              <p className="sm:w-[520px] my-10 text-base text-white font-inter">
                We help people to check your Finger.We handle all the hassale to
                submitting douments.
              </p>
              <Link to="/contact">
                <button className="text-base text-white font-inter rounded-lg px-9 py-4 bg-red-600">
                  Contact Us
                </button>
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-lg p-6">
                <h2 className="pb-5 text-3xl text-black text-center font-bold font-inter">
                  Check Your Visa Stutas
                </h2>
                <div className="w-full lg:w-[480px] py-3 px-3 flex items-center rounded-3xl border border-red-500">
                  <input
                    className="w-full pl-2"
                    type="text"
                    placeholder="Enter Your Registration Number"
                  />
                  <IoSearchSharp className="text-xl cursor-pointer text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

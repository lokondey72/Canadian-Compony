import { FaPersonSnowboarding, FaMapLocation } from "react-icons/fa6";
import { FaCommentDollar, FaBusinessTime } from "react-icons/fa";

const AboutOurCompony = () => {
  return (
    <>
      <div className="container">
        <div className="lg:flex my-16 mx-4">
          <div className="mr-5 mb-10 lg:mb-0">
            <h2 className="text-4xl text-red-600 font-bold font-inter">
              About Our Company
            </h2>
            <div className="sm:w-[500px] lg:w-[670px] my-5">
              <img
                className="w-full"
                src="about_our_compony.png"
                alt="about_our_compony"
              />
            </div>
            <h4 className="sm:[500px] lg:w-[670px] mb-5 text-3xl text-red-600 font-bold font-inter">
              Finest And Strongest Law Firm Win The World, One Philosophy
            </h4>
            <p className="sm:w-[500px] lg:w-[680px] text-balance text-base font-inter">
              Every Single one of our financial advisors receives rigorous
              training in Joe Gentleman’s philoso- phy, which is based on
              academic research (including that of a Nobel laureate in
              Economics) and Behavioral Finance who loves pursues or desire
              obtain pain of itself.
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-5">
              <div className="p-5 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                <FaPersonSnowboarding />
              </div>
              <div>
                <h4 className="text-lg">Advisors</h4>
                <p className="text-sm text-secendry">Smart and Hard Workers</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="p-5 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                <FaCommentDollar />
              </div>
              <div>
                <h4 className="text-lg">Loan Processed</h4>
                <p className="text-sm text-secendry">
                  100 % Customer Satisfaction
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="p-5 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                <FaBusinessTime />
              </div>
              <div>
                <h4 className="text-lg">Advisors</h4>
                <p className="text-sm text-secendry">Smart and Hard Workers</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="p-5 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                <FaMapLocation />
              </div>
              <div>
                <h4 className="text-lg">Locations</h4>
                <p className="text-sm text-secendry">
                  Find Us All Over The World
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurCompony;

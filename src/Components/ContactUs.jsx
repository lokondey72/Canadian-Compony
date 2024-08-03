import { FaFacebook, FaTwitter, FaYoutube, FaDigg } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="container">
        <div className="my-20 mx-4">
          <div className="lg:flex gap-5 mt-10">
            <div className="w-1/2 mb-5 lg:mb-0">
              <div className="w-12 h-[2px] border-b-4 border-black border-dotted"></div>
              <h3 className="w-[300px] sm:w-96 mt-5 text-4xl text-brand font-bold font-inter">
                Have Any Questions? Let’s Start to Talk
              </h3>
              <p className="w-[300px] sm:w-full my-8 text-sm font-inter text-brand">
                Nascetur sed cursus habitasse eleifend montes torquent porta
                natoque, dis sollicitudin lobortis ad dignissim mauris netus,
                fermentum
              </p>
              <ul className="flex gap-2 text-white">
                <li>
                  <Link to="#" className="p-2 bg-brand rounded-full">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="p-2 bg-brand rounded-full">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="p-2 bg-brand rounded-full">
                    <FaYoutube />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="p-2 bg-brand rounded-full">
                    <FaDigg />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <div className="sm:flex gap-5">
                <input
                  className="w-80 px-5 py-3 mb-4 sm:mb-0 bg-forth"
                  type="text"
                  placeholder="Your Email"
                />
                <input
                  className="w-80 px-5 py-3 bg-forth"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="sm:flex gap-5 my-4">
                <input
                  className="w-80 px-5 py-3 mb-4 sm:mb-0 bg-forth"
                  type="text"
                  placeholder="Phone Number"
                />
                <input
                  className="w-80 px-5 py-3 bg-forth"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="flex flex-col items-center ml-36 sm:ml-0">
                <textarea
                  className="w-80 sm:w-[650px] h-32 lg:mr-20 bg-forth"
                  name="comment"
                  id=""
                ></textarea>
                <Link to="#" className="my-5">
                  <button className="text-base text-white font-inter rounded-lg px-9 py-4 bg-red-600">
                    Send A Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

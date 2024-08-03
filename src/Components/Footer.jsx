import { IoIosArrowForward } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaPhoneVolume,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaTumblr,
  FaWeixin,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-red-600 pt-16">
        <div className="container">
          <div className="lg:flex gap-12 mx-4">
            <div className="mb-5 lg:mb-0">
              <p className="w-full lg:w-72 text-white">
                Hazze. is a versatile wp theme with modern creative design. Made
                as an ultimate toolbox of content elements, styles & features,
                it helps people to build impressive high-performant.
              </p>
            </div>
            <div className="w-72 text-white">
              <h5 className="text-lg font-inter font-bold mb-5">
                USEFUL LINKS
              </h5>
              <ul>
                <li className="border-b">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    General Information For Users
                  </Link>
                </li>
                <li className="border-b my-2">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Interactive Fairy Tales
                  </Link>
                </li>
                <li className="border-b">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Everyday Mathematics Links
                  </Link>
                </li>
                <li className="border-b my-2">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Basic Knowledge and Experience
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Official Storybook Maker Website
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-48 my-5 lg:my-0 text-white">
              <h5 className="text-lg uppercase font-inter font-bold mb-5">
                Quick Link
              </h5>
              <ul>
                <li className="border-b">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Knowledge Base
                  </Link>
                </li>
                <li className="border-b my-2">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Hire An Expert
                  </Link>
                </li>
                <li className="border-b">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    FAQ
                  </Link>
                </li>
                <li className="border-b my-2">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:w-80 text-white">
              <h5 className="text-lg uppercase font-inter font-bold mb-5">
                Contact Us
              </h5>
              <ul>
                <li className="border-b">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <FaPhoneVolume />
                    </span>
                    +123456789
                  </Link>
                </li>
                <li className="border-b my-2">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <HiOutlineMail />
                    </span>
                    mudassar@gmail.com
                  </Link>
                </li>
                <li className="border-b">
                  <Link className="flex items-center gap-2" to="#">
                    <span>
                      <BsCalendarDate />
                    </span>
                    Mon.-Fri : 10-20 Sun : 12-16
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-8 mt-10 border-t">
            <div className="lg:flex justify-between gap-5 mx-4">
              <div>
                <p className="text-white">2019 © Copyrights mcstarters</p>
              </div>
              <div className="my-5 lg:my-0">
                <ul className="flex gap-5 text-white">
                  <li>
                    <Link className="hover:text-gray-300" to="#">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300" to="#">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300" to="#">
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex gap-2 text-white">
                  <li>
                    <Link
                      to="#"
                      className="p-2 bg-thered rounded-full hover:border"
                    >
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="p-2 bg-thered rounded-full hover:border"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="p-2 bg-thered rounded-full hover:border"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="p-2 bg-thered rounded-full hover:border"
                    >
                      <FaPinterest />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="p-2 bg-thered rounded-full hover:border"
                    >
                      <FaTumblr />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="p-2 bg-thered rounded-full hover:border"
                    >
                      <FaWeixin />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="p-2 bg-thered rounded-full hover:border"
                    >
                      <FaLinkedin />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

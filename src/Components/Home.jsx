import AboutOurCompony from "../Pages/AboutOurCompony";
import Banner from "../Pages/Banner";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutOurCompony />
      <div className="App">
        <ScrollToTop
          className="w-3 h-3 mb-10 pl-[6px] rounded-full"
          smooth
          color="#ff0000"
        />
      </div>
    </>
  );
};

export default Home;

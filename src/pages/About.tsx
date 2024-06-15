import CarIcon from "../assets/card1.png"; // Import your car icon
import AboutImage from "../assets/about-main.jpg"; // Import your about image
import AboutPlan from "../components/AboutPlan";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-fit absolute top-36 left-6 md:left-20 z-30 mb-10">
        <h1 className="text-4xl font-bold">About</h1>
        <br />
        <p className="text-lg font-semibold">Home/About</p>
      </div>
      <div className="container-div relative mt-96 p-4 mr-0 w-full flex justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start w-full">
          {/* Image Div */}
          <div className="w-full md:w-1/2 p-4 flex-shrink-0">
            <div className="h-full flex items-center">
              <img
                src={AboutImage}
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description Div */}
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center md:items-start text-center md:text-left mx-2 md:mx-4 lg:mx-10">
            <p className="text-xl font-semibold mb-4">About Company</p>
            <h1 className="text-3xl lg:text-4xl mb-4 font-bold leading-tight">
              You start the engine and your adventure begins
            </h1>
            <p className="text-base lg:text-lg mb-2 leading-tight">
              Our company thrives on innovation and excellence. We believe in
              pushing boundaries and setting new standards. Our dedicated team
              works tirelessly to deliver top-notch services and products. We
              value our customers and strive to exceed their expectations. Our
              commitment to quality and customer satisfaction is unwavering.
            </p>

            {/* Icons Div */}
            <div className="flex flex-col ssm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <div className="flex flex-col items-center">
                <img
                  src={CarIcon}
                  alt="Car Types"
                  className="w-24 h-auto mb-2"
                />
                <p className="text-2xl font-bold">20</p>
                <p className="text-lg">Car Types</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={CarIcon}
                  alt="Rental Outlets"
                  className="w-24 h-auto mb-2"
                />
                <p className="text-2xl font-bold">85</p>
                <p className="text-lg">Rental Outlets</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={CarIcon}
                  alt="Repair Shop"
                  className="w-24 h-auto mb-2"
                />
                <p className="text-2xl font-bold">75</p>
                <p className="text-lg">Repair Shop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutPlan />
      <Footer />
    </>
  );
};

export default About;

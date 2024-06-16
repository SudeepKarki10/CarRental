import Main_img from "../../public/assets/hero4.png";

interface VehicleDetailsProps {
  searchFormRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<VehicleDetailsProps> = ({ searchFormRef }) => {
  function handleClick() {
    if (searchFormRef.current) {
      searchFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="flex bg-grey-50">
      <div className="flex items-start justify-center text-center mb-10 w-full md:w-3/5 md:text-start md:h-full mt-0 md:mt-10 pt-5 md:ml-20 md:mr-0 ">
        <div className="px-10 md:px-0">
          <h5 className="text-lg font-extrabold text-black mb-2">
            Plan your trip now
          </h5>
          <h1 className=" text-3xl ssm:text-5xl lg:text-6xl md:text-4xl  text-black font-bold mb-3 leading-relaxed">
            Save <span className="text-orange-600">big</span> with our <br />
            car rental
          </h1>
          <p className="text-grey mb-8 mt-8 px-3">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="btn-container flex flex-cols gap-3 md:justify-start md:items-start items-center justify-center">
            <button
              className="btn border-amber-700 p-3 rounded-sm bg-[#FF4D00] text-lg font-bold text-white flex flex-cols justify-center items-center gap-2  w-1/2 sm:w-max"
              onClick={handleClick}
            >
              Book Ride
              <span className="material-symbols-outlined items-center text-center ">
                check_circle
              </span>
            </button>
            <button className="btn  border-grey-700 p-3 rounded-sm bg-[#1d1d1d] text-lg font-bold text-white flex flex-cols justify-center items-center gap-2  w-1/2 sm:w-max">
              Learn More{" "}
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-full grid place-items-center text-center relative h-full ">
        <img
          src={Main_img}
          alt=""
          className="w-full h-full mt-20 md:block hidden object-contain  z-10"
        />
      </div>
    </div>
  );
};

export default Hero;

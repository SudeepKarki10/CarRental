import AppImg from "../assets/App.png";

const GetOurApp = () => {
  return (
    <div className="bg-zinc-50">
      <div className="wrapper flex flex-col md:flex-row items-center md:items-start my-10 ssm:my-20 mx-18 ">
        <div className="left flex flex-col justify-center items-center md:items-start w-full md:w-3/5 my-4 py-8 px-10">
          <p className="md:text-left text-3xl md:text-4xl font-base mb-4">
            Download our app now
          </p>
          <p className="md:text-left text-lg md:text-xl font-base mb-4">
            Book cars easily with a few taps. Enjoy flexible rental options,
            competitive prices, and a wide range of vehicles. Conveniently
            manage your bookings and get 24/7 customer support.
          </p>

          <div className="flex gap-4 items-center justify-center md:justify-start mt-10 w-full flex-wrap">
            <button className="bg-gray-950 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-900 focus:outline-none w-full sm:w-1/2 ssm:w-4/12">
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-white mb-1">GET IT ON</span>
                <span className="title-font font-medium text-white">
                  Google Play
                </span>
              </span>
            </button>
            <button className="bg-gray-950 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-900 focus:outline-none w-full sm:w-1/2  ssm:w-4/12">
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-white mb-1">Download on the</span>
                <span className="title-font font-medium text-white">
                  App Store
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/5 hidden md:flex items-end justify-end">
          <img src={AppImg} alt="App" />
        </div>
      </div>
    </div>
  );
};

export default GetOurApp;

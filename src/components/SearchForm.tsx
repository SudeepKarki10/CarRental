const SearchForm = () => {
  const cars = [
    "Tata Nexon",
    "Maruti Suzuki Swift",
    "Hyundai Creta",
    "Toyota Hilux",
    "Mahindra Scorpio",
  ];

  const pickups: string[] = [
    "Koteshwor",
    "Baneshwor",
    "Bhaktapur",
    "Lalitput",
    "Patan",
  ];
  return (
    <div className="Booking-Form bg-grey-100 py-10">
      <form
        action=""
        className="bg-white mx-5 md:mx-20 grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3 gap-4 ssm:gap-10 shadow-lg p-10"
      >
        <div className="col-span-1 ssm:col-span-2 lg:col-span-1 font-bold text-base">
          <span className="material-symbols-outlined inline-block align-bottom">
            airport_shuttle
          </span>
          <label className="inline-block text-center">
            Select your car type
          </label>
          <select className="block w-full text-base font-bold transition duration-75 rounded-sm shadow-sm h-12 mt-1 ssm:mt-3 border-1 border-grey-400 bg-none text-black-50 opacity-50">
            {cars.map((car, index) => (
              <option
                value={car}
                key={index}
                className="text-sm font-semibold text-gray-800 hover:bg-blue-200 hover:text-blue-800 opacity-55"
              >
                {car}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-1 ssm:col-span-2 lg:col-span-1 font-bold text-base">
          <span className="material-symbols-outlined inline-block align-bottom">
            location_on
          </span>
          <label className="inline-block text-center">Pick-up</label>
          <select className="block w-full text-base font-bold transition duration-75 rounded-sm shadow-sm h-12 mt-1 ssm:mt-3 border-1 border-grey-400 bg-none text-black-50 opacity-50">
            {pickups.map((pickup, index) => (
              <option
                value={pickup}
                key={index}
                className="text-sm font-semibold text-gray-800 hover:bg-blue-200 hover:text-blue-800 opacity-55"
              >
                {pickup}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-1 ssm:col-span-2 lg:col-span-1 font-bold text-base">
          <span className="material-symbols-outlined inline-block align-bottom">
            location_on
          </span>
          <label className="inline-block text-center">Drop-off</label>
          <select className="inline-block w-full text-base font-bold transition duration-75 rounded-sm shadow-sm h-12 mt-1 ssm:mt-3 border-1 border-grey-400 bg-none text-black-50 opacity-50">
            {pickups.map((pickup, index) => (
              <option
                value={pickup}
                key={index}
                className="text-sm font-semibold text-gray-800 hover:bg-blue-200 hover:text-blue-800 opacity-55"
              >
                {pickup}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-1 ssm:col-span-2 lg:col-span-1 font-bold text-base">
          <span className="material-symbols-outlined inline-block align-bottom">
            calendar_month
          </span>
          <label className="inline-block text-center">Pick-up</label>
          <input
            type="date"
            className="block w-full text-sm font-bold transition duration-75 rounded-sm shadow-sm h-12 mt-3 border-1 border-grey-400 bg-none text-grey-400   text-gray-800 opacity-50"
          />
        </div>

        <div className="col-span-1 ssm:col-span-2 lg:col-span-1 font-bold text-base h-fit">
          <span className="material-symbols-outlined inline-block align-bottom">
            calendar_month
          </span>
          <label className="inline-block text-center">Drop-off</label>
          <input
            type="date"
            className="block w-full text-sm font-bold transition duration-75 rounded-sm shadow-sm h-12 mt-3 border-1 border-grey-400 bg-none text-grey-400 opacity-50  text-gray-800 "
          />
        </div>

        <div className="col-span-1 ssm:col-span-2 lg:col-span-1 font-bold text-base">
          <button className=" bg-[#FF4D30] w-full h-12 mt-1 lg:mt-9 border-1 border-grey-400 text-grey-400  text-white">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

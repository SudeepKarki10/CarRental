import { useState } from "react";
import ReservationForm from "./ReservationForm";

const SearchForm = () => {
  const cars = [
    "Tata Nexon",
    "Maruti Suzuki Swift",
    "Hyundai Creta",
    "Toyota Hilux",
    "Mahindra Scorpio",
  ];

  const pickups = ["Koteshwor", "Baneshwor", "Bhaktapur", "Lalitput", "Patan"];

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<String>("");
  const [formData, setFormData] = useState({
    carType: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
  });

  function handleSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    //handle validation of each field
    try {
      if (
        formData.carType === "" ||
        formData.pickupLocation === "" ||
        formData.dropoffLocation === "" ||
        formData.pickupDate === "" ||
        formData.dropoffDate === ""
      ) {
        throw new Error("All fields must be filled");
      }
      setMessage("");
      setIsOpen(true);
    } catch (error) {
      const errorMessage = (error as Error).message || "Unknown error";
      setMessage(errorMessage);
    }
    console.log(formData); // You can use this data as needed
  }

  return (
    <div className="Booking-Form bg-grey-100 py-10">
      {message ? (
        <div className=" mx-5 md:mx-20 md:mr-20 h-12 rounded-md bg-green-400 flex justify-start items-center">
          <p className="text-lg text-zinc-600 font-semibold block">{message}</p>
        </div>
      ) : (
        <></>
      )}
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
          <select
            name="carType"
            value={formData.carType}
            onChange={(e) =>
              setFormData({ ...formData, carType: e.target.value })
            }
            className="block w-full text-base font-bold transition duration-75 rounded-sm shadow-sm h-12 mt-1 ssm:mt-3 border-1 border-grey-400 bg-none text-black-50 opacity-50"
          >
            <option value="" disabled>
              Select a car
            </option>
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
          <select
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={(e) =>
              setFormData({ ...formData, pickupLocation: e.target.value })
            }
            className="block w-full text-base font-bold transition duration-75 rounded-sm shadow-sm h-12 mt-1 ssm:mt-3 border-1 border-grey-400 bg-none text-black-50 opacity-50"
          >
            <option value="" disabled>
              Select a location
            </option>
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
          <select
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={(e) =>
              setFormData({ ...formData, dropoffLocation: e.target.value })
            }
            className="inline-block w-full text-base font-bold transition duration-75 rounded-sm shadow-sm h-12 mt-1 ssm:mt-3 border-1 border-grey-400 bg-none text-black-50 opacity-50"
          >
            <option value="" disabled>
              Select a location
            </option>
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
            name="pickupDate"
            value={formData.pickupDate}
            onChange={(e) =>
              setFormData({ ...formData, pickupDate: e.target.value })
            }
            className="block w-full text-sm font-bold transition duration-75 rounded-sm shadow-sm h-12 mt-3 border-1 border-grey-400 bg-none text-grey-400 text-gray-800 opacity-50"
          />
        </div>

        <div className="col-span-1 ssm:col-span-2 lg:col-span-1 font-bold text-base h-fit">
          <span className="material-symbols-outlined inline-block align-bottom">
            calendar_month
          </span>
          <label className="inline-block text-center">Drop-off</label>
          <input
            type="date"
            name="dropoffDate"
            value={formData.dropoffDate}
            onChange={(e) =>
              setFormData({ ...formData, dropoffDate: e.target.value })
            }
            className="block w-full text-sm font-bold transition duration-75 rounded-sm shadow-sm h-12 mt-3 border-1 border-grey-400 bg-none text-grey-400 opacity-50 text-gray-800"
          />
        </div>

        <div className="col-span-1 ssm:col-span-2 lg:col-span-1 font-bold text-base">
          <button
            className="bg-[#FF4D30] w-full h-12 mt-1 lg:mt-9 border-1 border-grey-400 text-grey-400 text-white"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSearch(e)
            }
          >
            Search
          </button>
        </div>
      </form>
      <ReservationForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formData={formData}
        setMessage={setMessage}
      />
    </div>
  );
};

export default SearchForm;

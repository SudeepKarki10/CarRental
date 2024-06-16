import React, { useState, useEffect } from "react";

interface CarProperty {
  name: string;
  value: string;
}

interface Car {
  name: string;
  properties: CarProperty[];
  image: string;
}

type ReservationFormProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  formData: {
    carType: string;
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    dropoffDate: string;
  };
  setMessage: (message: string) => void;
};

const ReservationForm: React.FC<ReservationFormProps> = ({
  isOpen,
  setIsOpen,
  formData,
  setMessage,
}) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    subscribe: false,
  });

  const initialInfo = userInfo;

  const [cars, setCars] = useState<Car[]>([]);
  const [carImage, setCarImage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4050/cars");
        const data: Car[] = await response.json();
        setCars(data);

        console.log(data);

        const selectedCar = data.find((car) => car.name === formData.carType);
        console.log(selectedCar?.image);
        if (selectedCar) {
          setCarImage(selectedCar.image);
          console.log(carImage);
        } else {
          setCarImage("");
        }

        // setCarImage(
        //   cars.map((car) => (car.name === formData.carType ? carImage : ""));
        // );
        // Set the first car as the selected car initially
        console.log(cars);
        if (data.length == 0) {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      if (
        userInfo.address === "" ||
        userInfo.age === "" ||
        userInfo.city === "" ||
        userInfo.email === "" ||
        userInfo.firstName === "" ||
        userInfo.lastName === "" ||
        userInfo.phoneNumber === "" ||
        userInfo.zipCode === ""
      ) {
        setIsOpen(false);
        throw new Error("All field in the Reservation must be filled.");
      } else {
        setIsOpen(false);
        setUserInfo(initialInfo);
        throw new Error("Check your email to confirm an order.");
      }
    } catch (error) {
      const errorMessage = (error as Error).message || "Unknown error";
      setMessage(errorMessage);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed top-5 left-0 w-full h-full flex flex-col justify-center items-center bg-transparent z-50 px-4 md:px-40 ">
      <div className="modal-content p-1  bg-zinc-100 max-h-[80vh] overflow-y-auto w-full border-3 border-orange-100 ">
        <div className="form-heading relative bg-orange-700 h-15">
          <button
            className="text-3xl text-center font-bold cursor-pointer text-white  rounded absolute top-0 right-0"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <h1 className="text-3xl font-extrabold mx-10  text-white">
            COMPLETE RESERVATION{" "}
          </h1>
        </div>

        <div className="form-Subheading relative bg-red-50 h-15">
          <h2 className="text-2xl font-extrabold mb-4 mx-10 mt-5 text-orange-700">
            <span className="material-symbols-outlined">info</span>Upon
            completing this reservation enquiry, you will receive:
          </h2>
          <p className="mb-4 mx-10 text-lg font-bold text-gray-500">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-0 md:gap-3 mt-10 bg-white">
            <div className="searchformInfo w-full md:w-6/12 h-max flex flex-col items-center justify-center md:items-start gap-1 md:gap-5 p-4 font-xl text mx-auto ">
              <div>
                <p className="text-xl font-bold text-orange-600">
                  Locations & Date
                </p>
              </div>
              <div className="flex   items-center justify-center md:justify-start mb-2 w-full text-base">
                <span className="material-symbols-outlined">location_on</span>
                <p className="text-gray-700">
                  Pick-Up Date & Time: <br /> {formData.pickupDate}
                  <p className="border border-black inline">/ --:-- --</p>
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start mb-2 w-full">
                <span className="material-symbols-outlined">location_on</span>
                <p className="text-gray-700">
                  Drop-Off Date & Time: <br />
                  {formData.dropoffDate}
                  <p className="border border-black inline">/ --:-- --</p>
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start mb-2 w-full">
                <span className="material-symbols-outlined">location_on</span>
                <p className="text-gray-700">
                  Pick-Up Location: {formData.pickupLocation}
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start mb-2 w-full">
                <span className="material-symbols-outlined">location_on</span>
                <p className="text-gray-700">
                  Drop-Off Location: {formData.dropoffLocation}
                </p>
              </div>
            </div>

            <div className="image w-full md:w-6/12 flex flex-col items-center md:items-start mx-auto">
              <div>
                <p className="font-bold text-xl inline">Car: </p>
                <p className="text-orange-600 inline font-2xl font-bold">
                  {formData.carType}
                </p>
              </div>
              <img src={carImage} alt="" className="w-full md:w-auto" />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Personal Information</h3>
            <label>
              First Name *
              <input
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
                required
              />
            </label>
            <label>
              Last Name *
              <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
                required
              />
            </label>
            <label>
              Phone Number *
              <input
                type="number"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
                required
              />
            </label>
            <label>
              Age *
              <input
                type="number"
                name="age"
                value={userInfo.age}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
                required
              />
            </label>
            <label>
              Email *
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
                required
              />
            </label>
            <label>
              Address *
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
                required
              />
            </label>
            <label>
              City *
              <input
                type="text"
                name="city"
                value={userInfo.city}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
                required
              />
            </label>
            <label>
              Zip Code *
              <input
                type="text"
                name="zipCode"
                value={userInfo.zipCode}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
                required
              />
            </label>
            <label className="block mt-4">
              <input
                type="checkbox"
                name="subscribe"
                checked={userInfo.subscribe}
                onChange={handleChange}
              />
              Please send me latest news and updates
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded mt-4"
            onClick={(e) => handleSubmit(e)}
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;

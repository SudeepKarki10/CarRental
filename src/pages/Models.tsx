import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PagesBanner from "../components/PagesBanner";
import { useNavigate } from "react-router-dom";

interface CarProperty {
  name: string;
  value: string;
}

interface Car {
  name: string;
  properties: CarProperty[];
  image: string;
  id: string;
}

const Models = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4050/cars");
        const data: Car[] = await response.json();
        setCars(data);

        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-start w-fit absolute top-36 left-6 md:left-20 z-30 mb-10">
        <h1 className="text-4xl font-bold">Models</h1>
        <br />
        <p className="text-lg font-semibold">Home/Models</p>
      </div>

      <div className="container-div relative mt-96 mb-20">
        <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 md:px-20 py-10">
          {cars.map((car) => (
            <div
              key={car.id}
              className="card border rounded-lg shadow-lg overflow-hidden"
            >
              <div className="card-image">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="card-content p-4">
                <div className="Rating">
                  <div className="flex items-center ml-0">
                    <svg
                      className="w-4 h-4 text-orange-600 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-orange-600 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-orange-600 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-orange-600 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 ms-1 text-white- dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between mb-6 mt-4 ">
                  <span className="text-2xl font-bold">{car.name}</span>
                  <span className="text-xl font-bold">
                    {`$
                    ${
                      car.properties.find((prop) => prop.name === "Price")
                        ?.value
                    }
                    per day`}
                  </span>
                </div>

                <div className="flex justify-between mb-6 text-xl text-gray-600 font-semibold">
                  <span>
                    {car.properties.find((prop) => prop.name === "Mark")?.value}
                  </span>
                  <span>
                    {
                      car.properties.find((prop) => prop.name === "Doors")
                        ?.value
                    }
                  </span>
                </div>
                <div className="flex justify-between mb-6 text-xl text-gray-600 font-semibold">
                  <span>
                    {
                      car.properties.find(
                        (prop) => prop.name === "Transmission"
                      )?.value
                    }
                  </span>
                  <span>
                    {car.properties.find((prop) => prop.name === "Fuel")?.value}
                  </span>
                </div>
                <hr className="h-2 text-orange-600 border-1 border-orange-200" />
                <button
                  className="mt-4 w-full bg-orange-600 text-white  text-xl font-extrabold py-2 rounded"
                  onClick={() => navigate("/home")}
                >
                  Book Ride
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PagesBanner />
      <Footer />
    </>
  );
};

export default Models;

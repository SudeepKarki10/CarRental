import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentCheckout from "../components/PaymentCheckout";

interface Reservation {
  carName: string;
  pricePerDay: number;
  bookingDate: string;
  dropoffDate: string;
  image: string;
}

const Cart = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [forceUpdate, setForceUpdate] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedReservations = localStorage.getItem("reservations");
    if (storedReservations) {
      setReservations(JSON.parse(storedReservations));
      console.log("Reservations loaded from local storage", storedReservations);
    }
  }, [forceUpdate]);

  const handleDelete = (indexToDelete: number) => {
    try {
      // Remove item from array
      const updatedReservations = reservations.filter(
        (_, index) => index !== indexToDelete
      );

      // Update localStorage
      localStorage.setItem("reservations", JSON.stringify(updatedReservations));

      // Update state
      setReservations(updatedReservations);
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  if (reservations.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Reservations Found</h2>
          <button
            onClick={() => navigate("/")}
            className="bg-[#FF4D30] text-white px-6 py-2 rounded hover:bg-[#FF4D30]/90 transition-colors duration-200"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {reservations.map((reservation, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300 relative border border-gray-100"
            >
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-4 left-4 text-red-500 hover:text-red-700 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/5 relative">
                  <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <img
                      src={reservation.image}
                      alt={reservation.carName}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
                <div className="w-full md:w-3/5 space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {reservation.carName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">
                        Booking Date
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {new Date(reservation.bookingDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">
                        Drop-off Date
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {new Date(reservation.dropoffDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">
                        Price Per Day
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        ${reservation.pricePerDay}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">
                        Total Days
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {Math.ceil(
                          (new Date(reservation.dropoffDate).getTime() -
                            new Date(reservation.bookingDate).getTime()) /
                            (1000 * 60 * 60 * 24)
                        )}{" "}
                        days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <PaymentCheckout reservations={reservations} />
        </div>
      </div>
    </div>
  );
};

export default Cart;

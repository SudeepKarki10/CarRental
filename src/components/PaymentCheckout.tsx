import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Reservation {
  carName: string;
  pricePerDay: number;
  bookingDate: string;
  dropoffDate: string;
}

interface PaymentCheckoutProps {
  reservations: Reservation[];
}

const VAT_RATE = 0.05; // 5%
const TAX_RATE = 0.1; // 10%

const PaymentCheckout = ({ reservations }: PaymentCheckoutProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    // let sum = 0;

    console.log(
      "Price per day of every reservation is : ",
      reservations.map((reservation) => reservation.pricePerDay)
    );
  });

  const calculateDays = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const calculateSubtotal = () => {
    return reservations.reduce((total, reservation) => {
      const days = calculateDays(
        reservation.bookingDate,
        reservation.dropoffDate
      );
      return total + reservation.pricePerDay * days;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const vat = subtotal * VAT_RATE;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + vat + tax;

  const handlePayment = () => {
    // TODO: Implement payment gateway integration
    navigate("/payment-success");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>VAT (5%)</span>
          <span>${vat.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-[#FF4D30] text-white py-3 rounded hover:bg-[#e04f38] transition-colors"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentCheckout;

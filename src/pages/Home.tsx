import { useRef, useState } from "react";
import SearchForm from "../components/SearchForm";
import AboutPlan from "../components/AboutPlan";
import HomeBanner from "../components/HomeBanner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/TestimonialsComponent";
import Hero from "../components/Hero";
import GetOurApp from "../components/GetOurApp";
import Footer from "../components/Footer";
import Vehicledetails from "../components/VehicleDetails";

const Home = () => {
  const searchFormRef = useRef<HTMLDivElement>(null);
  const [selectedCar, setSelectedCar] = useState("");

  const handleCarSelect = (car: string) => {
    setSelectedCar(car);
    searchFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero searchFormRef={searchFormRef} />
      <SearchForm ref={searchFormRef} selectedCar={selectedCar} />
      <AboutPlan />
      <Vehicledetails
        searchFormRef={searchFormRef}
        onReserve={handleCarSelect}
      />
      <HomeBanner />
      <ChooseUs searchFormRef={searchFormRef} />
      <Testimonials />
      <GetOurApp />
      <Footer />
    </>
  );
};

export default Home;

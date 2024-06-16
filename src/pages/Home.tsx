import { useRef } from "react";
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

  return (
    <>
      <Hero searchFormRef={searchFormRef} />
      <div ref={searchFormRef}>
        <SearchForm />
      </div>
      <AboutPlan />
      <Vehicledetails searchFormRef={searchFormRef} />
      <HomeBanner />
      <ChooseUs searchFormRef={searchFormRef} />
      <Testimonials />
      <GetOurApp />
      <Footer />
    </>
  );
};

export default Home;

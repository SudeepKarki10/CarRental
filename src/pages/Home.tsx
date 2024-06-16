import SearchForm from "../components/SearchForm";
import AboutPlan from "../components/AboutPlan";
import VehicleDetails from "../components/VehicleDetails";
import HomeBanner from "../components/HomeBanner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/TestimonialsComponent";
import Hero from "../components/Hero";
import GetOurApp from "../components/GetOurApp";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchForm />
      <AboutPlan />
      <VehicleDetails />
      <HomeBanner />
      <ChooseUs />
      <Testimonials />
      <GetOurApp />
      <Footer />
    </>
  );
};

export default Home;

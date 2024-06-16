import Footer from "../components/Footer";
import PagesBanner from "../components/PagesBanner";
import Testimonial from "../components/TestimonialsComponent";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start w-fit absolute top-36 left-6 md:left-20 z-30 mb-10">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <br />
        <p className="text-lg font-semibold">Home/Testimonials</p>
      </div>

      <div className="container-div relative mt-96 ">
        <Testimonial />
      </div>

      <PagesBanner />
      <Footer />
    </>
  );
};

export default Testimonials;

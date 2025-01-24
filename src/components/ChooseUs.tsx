import BannerImg from "../../public/assets/chooseus.png";
import Img1 from "../../public/assets/chooseus1.png";
import Img2 from "../../public/assets/chooseus2.png";
import Img3 from "../../public/assets/chooseus3.png";

interface VehicleDetailsProps {
  searchFormRef: React.RefObject<HTMLDivElement>;
}

const ChooseUs: React.FC<VehicleDetailsProps> = ({ searchFormRef }) => {
  function handleClick() {
    if (searchFormRef.current) {
      searchFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="flex flex-col">
      <div className="image m-4 lg:m-10">
        <img src={BannerImg} alt="" className="w-full" />
      </div>
      <div className="content flex flex-col lg:flex-row m-4 lg:m-10 px-4 lg:px-20 gap-24 ">
        <div className="left-container flex flex-col justify-center items-center lg:justify-start lg:items-start w-full lg:w-3/5  text-center lg:text-start gap-2 px-2 ssm:px-20 lg:px-0">
          <p className="text-xl font-bold ">Why Choose Us?</p>
          <h2 className="text-5xl font-bold">
            Best valued deals you will ever find
          </h2>
          <p className="text-lg text-zinc-600 py-5">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button
            className="bg-orange-600 text-white py-2 px-4 text-xl font-bold mt-3 rounded-md "
            onClick={handleClick}
          >
            Find Details
          </button>
        </div>

        <div className="right-container w-full lg:w-2/5  px-2 ssm:px-20 lg:px-0">
          <div className="card flex flex-col justify-center items-center ssm:justify-start ssm:items-start ssm:flex-row w-full gap-4 text-center ssm:text-start mb-10">
            <div className="card-image w-1/3 ssm:w-1/5 lg:w-3/5 ">
              <img src={Img1} alt="" className="w-full" />
            </div>
            <div className="card-info">
              <h3 className="text-2xl font-extrabold">Cross Country Drive</h3>
              <p className="text-lg font-base text-zinc-700">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-center items-center ssm:justify-start ssm:items-start ssm:flex-row w-full gap-4 text-center ssm:text-start mb-10">
            <div className="card-image w-1/3 ssm:w-1/5 lg:w-3/5 ">
              <img src={Img2} alt="" className="w-full" />
            </div>
            <div className="card-info">
              <h3 className="text-2xl font-extrabold">All Inclusive Pricing</h3>
              <p className="text-lg font-base text-zinc-700">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-center items-center ssm:justify-start ssm:items-start ssm:flex-row w-full gap-4 text-center ssm:text-start mb-10">
            <div className="card-image w-1/3 ssm:w-1/5 lg:w-3/5 ">
              <img src={Img3} alt="" className="w-full" />
            </div>
            <div className="card-info">
              <h3 className="text-2xl font-extrabold">No Hidden Charges</h3>
              <p className="text-lg font-base text-zinc-700">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

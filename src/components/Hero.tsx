import Main_img from "../assets/hero1.png";

const Hero = () => {
  return (
    <div className="flex bg-grey-50">
      <section className="flex items-start justify-center text-center mb-10 w-full md:w-3/5 md:text-start md:h-full mx-0 mt-20 pt-5 md:ml-20 md:mr-0 ">
        <div>
          <h5 className="text-lg font-extrabold text-black mb-2">
            Plan your trip now
          </h5>
          <h1 className="lg:text-6xl md:text-4xl text-5xl text-black font-bold mb-3 leading-relaxed">
            Save <span className="text-orange-600">big</span> with our <br />
            car rental
          </h1>
          <p className="text-grey mb-8 mt-8">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="btn-container flex flex-cols gap-3 md:justify-start md:items-start items-center justify-center">
            <button className="btn border-amber-700 p-3 rounded-sm bg-[#FF4D00] text-lg font-bold text-white flex flex-cols justify-center items-center gap-2  w-max">
              Book Ride
              <span className="material-symbols-outlined items-center text-center ">
                check_circle
              </span>
            </button>
            <button className="btn  border-grey-700 p-3 rounded-sm bg-[#1d1d1d] text-lg font-bold text-white flex flex-cols justify-center items-center gap-2  w-max">
              Learn More{" "}
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      <div className="md:w-full grid place-items-center text-center relative h-full ">
        <img
          src={Main_img}
          alt=""
          className="w-full h-full mt-10 md:block hidden object-contain  z-10"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          className="absolute top-0 right-0 w-full h-full z-0"
        >
          <g
            transform="
          rotate(331 960 540) 
          translate(-707.0433374075683 -397.7118772917572)
          scale(1.736503476466217)
        "
          >
            <rect width="1920" height="1080" fill="rgb(255, 255, 255)"></rect>
            <g transform="translate(0, 0)">
              <path
                fill="rgb(255, 247, 243)"
                fill-opacity="1"
                d="M0,529.415L53.333,525.113C106.667,520.81,213.333,512.206,320,510.872C426.667,509.538,533.333,515.475,640,516.142C746.667,516.81,853.333,512.208,960,454.775C1066.667,397.341,1173.333,287.075,1280,277.762C1386.667,268.45,1493.333,360.091,1600,332.004C1706.667,303.917,1813.333,156.103,1866.667,82.196L1920,8.289L1920,1080L1866.667,1080C1813.333,1080,1706.667,1080,1600,1080C1493.333,1080,1386.667,1080,1280,1080C1173.333,1080,1066.667,1080,960,1080C853.333,1080,746.667,1080,640,1080C533.333,1080,426.667,1080,320,1080C213.333,1080,106.667,1080,53.333,1080L0,1080Z"
              ></path>
            </g>
            <g transform="translate(0, 540)">
              <path
                fill="rgb(255, 238, 230)"
                fill-opacity="1"
                d="M0,401.435L53.333,368.553C106.667,335.67,213.333,269.905,320,209.033C426.667,148.161,533.333,92.183,640,121.078C746.667,149.974,853.333,263.743,960,284.257C1066.667,304.771,1173.333,232.03,1280,195.621C1386.667,159.212,1493.333,159.135,1600,211.911C1706.667,264.687,1813.333,370.316,1866.667,423.13L1920,475.944L1920,540L1866.667,540C1813.333,540,1706.667,540,1600,540C1493.333,540,1386.667,540,1280,540C1173.333,540,1066.667,540,960,540C853.333,540,746.667,540,640,540C533.333,540,426.667,540,320,540C213.333,540,106.667,540,53.333,540L0,540Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

// import Main_img from "/assets/hero4.png";

// interface HeroProps {
//   searchFormRef: React.RefObject<HTMLDivElement>;
// }

// const Hero: React.FC<HeroProps> = ({ searchFormRef }) => {
//   const handleScrollToForm = () => {
//     if (searchFormRef.current) {
//       searchFormRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="flex bg-grey-50">
//       <div className="flex items-start justify-center text-center mb-10 w-full md:w-3/5 md:text-start md:h-full mt-0 md:mt-10 pt-5 md:ml-20 md:mr-0 ">
//         <div className="px-10 md:px-0 mt-10">
//           <h5 className="text-lg font-extrabold text-black mb-2 animated-headers">
//             Plan your trip now
//           </h5>
//           <h1 className=" text-3xl ssm:text-5xl lg:text-6xl md:text-4xl  text-black font-bold mb-3 leading-relaxed animated-headers">
//             Save <span className="text-orange-600">big</span> with our <br />
//             car rental
//           </h1>
//           <p className="text-grey mb-8 mt-8 px-3 animated-headers">
//             Rent the car of your dreams. Unbeatable prices, unlimited miles,
//             flexible pick-up options and much more.
//           </p>
//           <div className="btn-container flex flex-cols gap-3 md:justify-start md:items-start items-center justify-center">
//             <button
//               className="btn border-amber-700 p-3 rounded-sm bg-[#FF4D00] text-lg font-bold text-white flex flex-cols justify-center items-center gap-2  w-1/2 sm:w-max"
//               onClick={handleScrollToForm}
//             >
//               Book Ride
//               <span className="material-symbols-outlined items-center text-center ">
//                 check_circle
//               </span>
//             </button>
//             <button className="btn  border-grey-700 p-3 rounded-sm bg-[#1d1d1d] text-lg font-bold text-white flex flex-cols justify-center items-center gap-2  w-1/2 sm:w-max">
//               Learn More{" "}
//               <span className="material-symbols-outlined">chevron_right</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="md:w-full grid place-items-center text-center relative h-full ">
//         <img
//           src={Main_img}
//           alt=""
//           className="car-heroimage w-full h-full mt-20 md:block hidden object-contain  z-10"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Main_img from "/assets/hero4.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

interface HeroProps {
  searchFormRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ searchFormRef }) => {
  const handleScrollToForm = () => {
    if (searchFormRef.current) {
      searchFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(() => {
    gsap.from(".animated-headers", {
      x: 100,
      y: -20,
      duration: 1, // Increased duration for smoother effect
      delay: 0,
      opacity: 0,
      stagger: 0.5, // Adjusted stagger for smoother sequence
      ease: "power2.out", // Smooth easing function
    });

    // Car image animation
    gsap.from(".car-heroimage", {
      x: 200, // Start position from right
      duration: 1.5,
      opacity: 0,
      scale: 0.5, // Start scale
      ease: "power2.out", // Smooth easing
      delay: 0.3, // Slight delay after headers start
    });

    gsap.from(".btn", {
      x: 100, // Start position from right
      duration: 1,
      opacity: 0,
      stagger: 0.5, // Stagger the animation for each button
      ease: "power2.out", // Smooth easing
      delay: 0.5, // Delay to start after other animations
    });
  });

  return (
    <div className="flex bg-grey-50">
      <div className="flex items-start justify-center text-center mb-10 w-full md:w-3/5 md:text-start md:h-full mt-0 md:mt-10 pt-5 md:ml-20 md:mr-0 ">
        <div className="px-10 md:px-0 mt-10">
          <h5 className="text-lg font-extrabold text-black mb-2 animated-headers">
            Plan your trip now
          </h5>
          <h1 className=" text-3xl ssm:text-5xl lg:text-6xl md:text-4xl  text-black font-bold mb-3 leading-relaxed animated-headers">
            Save <span className="text-orange-600">big</span> with our <br />
            car rental
          </h1>
          <p className="text-grey mb-8 mt-8 px-3 animated-headers">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="btn-container flex flex-cols gap-3 md:justify-start md:items-start items-center justify-center ">
            <button
              className="btn border-amber-700 p-3 rounded-sm bg-[#FF4D00] text-lg font-bold text-white flex flex-cols justify-center items-center gap-2  w-1/2 sm:w-max"
              onClick={handleScrollToForm}
            >
              Book Ride
              <span className="material-symbols-outlined items-center text-center ">
                check_circle
              </span>
            </button>
            <button className="btn  border-grey-700 p-3 rounded-sm bg-[#1d1d1d] text-lg font-bold text-white flex flex-cols justify-center items-center gap-2  w-1/2 sm:w-max">
              Learn More{" "}
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-full grid place-items-center text-center relative h-full ">
        <img
          src={Main_img}
          alt=""
          className="car-heroimage w-full h-full mt-20 md:block hidden object-contain  z-10"
        />
      </div>
    </div>
  );
};

export default Hero;

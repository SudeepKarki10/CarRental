import Card1 from "/assets/card1.png";
import Card2 from "/assets/card2.png";
import Card3 from "/assets/card3.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutPlan = () => {
  useGSAP(() => {
    gsap.from(".animated-div", {
      x: 150,
      duration: 0.5,
      delay: 0.1,
      opacity: 0,
      ease: "power2.out", // Smooth easing
      stagger: 0.3, // Stagger the animation for each card
      scrollTrigger: {
        trigger: ".animated-div",
        scroller: "body", // Set the scroller to the body
        start: "top 60%",
      },
    });
  });

  return (
    <div className="mt-20 mb-20">
      <div className="heading grid place-items-center">
        <h5 className="font-bold text-xl md:text-2xl mb-5">
          Plan your trip now
        </h5>
        <h2 className="font-extrabold text-2xl text-center sm:text-3xl md:text-5xl ">
          Quick & easy car rental
        </h2>
      </div>

      <div className="container-wrapper grid grid-cols-1 gap-4 ssm:grid-cols-2 lg:grid-cols-3 mx:0 my-5 sm:mx-20 sm:my-20">
        <div className="card flex flex-col col-span-1 justify-center items-center text-center mx-10  animated-div">
          <img src={Card1} alt="" />
          <h2>Select Car</h2>
          <p className="text-center">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>

        <div className="card flex flex-col col-span-1 justify-center items-center text-center mx-10 animated-div">
          <img src={Card2} alt="" />
          <h2>Contact Operator</h2>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>

        <div className="card flex flex-col col-span-1 justify-center items-center text-center mx-10 animated-div">
          <img src={Card3} alt="" />
          <h2>Let's Drive</h2>
          <p>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPlan;

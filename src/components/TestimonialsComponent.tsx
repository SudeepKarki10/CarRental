import Testimon1 from "../assets/testimonial1.png";
import Testimon2 from "../assets/testimonial2.png";

const Testimonials = () => {
  return (
    <section className=" bg-zinc-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-2xl ssm:text-3xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 mb-8 lg:mb-12 lg:grid-cols-2 ">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-400 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <p className="my-4 text-2xl">
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-12 h-9 rounded-full"
                src={Testimon1}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left text-lg">
                <div>Beth Amor</div>
                <div className="text-base font-light text-gray-500 dark:text-gray-400">
                  Kathmandu
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-400 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <p className="my-4 text-2xl">
                "The car was in great condition and made our trip even better.
                Highly recommend for this car rental website!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-12 h-9 rounded-full"
                src={Testimon2}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left text-lg">
                <div>Pravab Sitaula</div>
                <div className="text-base font-light text-gray-500 dark:text-gray-400">
                  Bhaktapur
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

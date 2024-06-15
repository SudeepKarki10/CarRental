const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-12 gap-8 py-14 px-2 lg:px-8 lg:grid-cols-8">
          <div className="mb-0 col-span-full lg:col-span-3 flex flex-col items-center lg:items-start">
            <h4 className="text-3xl font-bold  text-gray-900  mb-7">
              CAR <span className="text-zinc-800 font-normal">Rental</span>
            </h4>
            <p className="text-gray-500 text-lg lg:max-w-xs text-center lg:text-left mb-4">
              We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <p className="text-black text-lg lg:max-w-xs text-center font-bold lg:text-left mb-4">
              <span className="inline-block mr-2">📞</span> (123) -456-789
            </p>
            <p className="text-black text-lg lg:max-w-xs text-center lg:text-left mb-4 font-bold">
              <span className="inline-block mr-2">📧</span> carrental@gmail.com
            </p>
            <p className="text-gray-500 text-lg lg:max-w-xs text-center lg:text-left">
              Developed by Sudeep Karki
            </p>
          </div>

          <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2 text-zinc-900">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              Get In Touch
            </h4>
            <ul className="text-black text-lg transition-all duration-500 overflow-x-hidden">
              <li className="mb-6">support@carrental.com</li>
              <li className="mb-6">+91 945 658 3256</li>
              <li>Kathmandu, Nepal.</li>
            </ul>
          </div>

          <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:order-last sm:col-span-4 md:col-span-4 lg:order-none lg:col-span-1">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Navigate</h4>
            <ul className="text-zinc-900 transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-zinc-900 hover:text-gray-800"
                >
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-zinc-900 hover:text-gray-800"
                >
                  About
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-zinc-900 hover:text-gray-800"
                >
                  Model
                </a>
              </li>
              <li className="sm:mb-6">
                <a
                  href="javascript:;"
                  className="text-zinc-900 hover:text-gray-800"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2">
            <h4 className="text-2xl  text-center text-gray-900 font-bold mb-4 lg:text-left ">
              SUBSCRIPTION
            </h4>

            <p className="text-lg text-zinc-600 mb-4">
              Subscribe your Email address for latest news & updates.
            </p>
            <div className="flex flex-col items-center lg:items-start">
              <input
                type="text"
                className="w-full h-12 border border-gray-300 rounded-lg py-1 px-5 shadow-sm text-gray-800 mb-5 text-center lg:text-left placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                placeholder="Your email here.."
              />
              <button
                type="submit"
                className="h-11 py-2 px-6 bg-orange-600 transition-all duration-500 shadow-md rounded-lg text-sm text-white font-semibold w-full hover:bg-orange-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

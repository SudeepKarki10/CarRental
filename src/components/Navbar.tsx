import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // State to manage active link
  const [hamIsOpen, setHamIsOpen] = useState<boolean>(true);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); // State to manage sidebar open/close

  const menuItems = ["Home", "About", "Models", "Testimonials", "Contact"];

  function handleSidebarToggle() {
    setHamIsOpen((prev) => !prev);
    setSidebarOpen((prev) => !prev);
  }

  return (
    <div className="flex flex-wrap justify-between items-center h-20 md:mx-4 mx-5">
      <div>
        <img src={Logo} alt="carrental" className="w-32  md:ml-20 ml-0" />
      </div>

      <div className="lists hidden md:flex md:flex-wrap">
        <ul className="flex justify-center items-center flex-rows gap-4 list-none">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`text-sm font-bold opacity-90 rounded-lg px-2 py-1 w-contain cursor-pointer ${
                activeIndex === index
                  ? "bg-orange-600 text-white"
                  : "hover:text-white hover:bg-orange-400"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center flex-rows gap-4">
        <button className="w-contain px-2 py-1 border-1 rounded-md hover:bg-zinc-700 bg-zinc-900 text-white font-bold text-sm xs:hidden md:flex md:mr-20">
          Get started
        </button>
      </div>

      <div className="flex md:hidden">
        <button
          className="relative group"
          onClick={() => {
            handleSidebarToggle();
          }}
        >
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] ring-0 black-300 hover:ring-8 group-focus:ring-2 ring-opacity-30 shadow-sm">
            <div className="flex flex-col justify-between w-[20px] h-[20px] origin-center overflow-hidden">
              {hamIsOpen ? (
                <>
                  <div className="bg-black h-[2px] w-7 origin-left"></div>
                  <div className="bg-black h-[2px] w-7 rounded"></div>
                  <div className="bg-black h-[2px] w-7 origin-left"></div>
                </>
              ) : (
                <>
                  <div className="absolute bg-black h-[2px] w-5 transform rotate-45 origin-center delay-300"></div>
                  <div className="absolute bg-black h-[2px] w-5 transform -rotate-45 origin-center"></div>
                </>
              )}
            </div>
          </div>
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="md:hidden absolute top-14 right-0 bg-zinc-100 z-50 w-5/12 h-full mx-0">
          <div className="flex flex-col justify-start items-center h-full">
            <ul className="flex flex-col gap-4 list-none ">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="text-xl font-bold opacity-80 rounded-xl p-2 hover:text-white hover:bg-orange-600 cursor-pointer"
                  onClick={() => {
                    setActiveIndex(index);
                    setSidebarOpen(false);
                    setHamIsOpen(true); // Close sidebar when menu item is clicked
                  }}
                >
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
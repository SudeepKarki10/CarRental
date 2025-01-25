import PageBanner from "/assets/PageBanner.jpg";

const PagesBanner = () => {
  return (
    <div className="relative p-8 bg-zinc-800 text-white h-max ssm:h-60 flex justify-center items-center md:justify-start flex-col md:flex-row gap-4 pl-12 md:pl-32 ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${PageBanner})`,
        }}
      ></div>
      <div className="relative z-10 w-full flex flex-col md:flex-row gap-10">
        <h2 className="text-3xl font-extrabold">
          Book a car by getting in touch with us
        </h2>
        <h3 className="text-orange-700 text-3xl font-extrabold">
          <span className="material-symbols-outlined">call</span>
          (+977) 98000000000
        </h3>
      </div>
    </div>
  );
};

export default PagesBanner;

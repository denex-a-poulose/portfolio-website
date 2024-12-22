import Bannericon from "./Bannericon";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-white min-h-screen flex flex-col justify-center items-start py-16 md:py-36">
        <p className="text-xl mb-2 pt-10">Hey,</p>
        <h1 className="text-4xl md:text-7xl font-[450]">
          I am <span className="text-gray-400">Denex A Poulose</span>, <br /> a
          Full-Stack Developer passionate about creating impactful{" "}
          <span className="text-gray-400">solutions</span>.
        </h1>
        {/* Download Button */}
        <div className="mt-12 mb-16">
          <button className=" border px-4 py-2 rounded-full  inline-block border-white text-white  hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in">
            Download CV
          </button>
        </div>

        {/* tools icons */}
        <Bannericon />
      </div>
    </div>
  );
};

export default Banner;

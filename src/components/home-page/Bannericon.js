import Image from "next/image";

const Bannericon = () => {
  const icons = [
    "/assets/img/icon8.png",
    "/assets/img/icon3.png",
    "/assets/img/icon5.png",
    "/assets/img/icon2.png",
    "/assets/img/icon4.svg",
    "/assets/img/icon6.png",
    "/assets/img/icon7.png",
    "/assets/img/icon1.png",
  ];
  return (
    <div className="overflow-hidden w-full">
      <div className="flex items-center space-x-16 animate-marquee">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="group flex-shrink-0 transform transition-all duration-300 hover:scale-105"
          >
            <Image
              width={600}
              height={600}
              src={icon}
              alt="tool-icons"
              className="w-12 h-12 mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bannericon;

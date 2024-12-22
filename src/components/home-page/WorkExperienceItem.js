const WorkExperienceItem = ({ date, title, workType, description }) => {
  return (
    <div className="space-y-6 text-gray-100">
      {/* Date */}
      <p className="text-lg text-gray-400 mt-8">{date}</p>

      {/* Title and Work Type */}
      <h3 className="text-2xl sm:text-4xl lg:text-5xl text-white font-semibold">
        {title}, <span className="font-normal text-gray-400">{workType}</span>
      </h3>

      {/* Description and Button */}
      <div className="group flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0">
        {/* Description */}
        <div className="sm:max-w-2xl">
          <p className="text-[#ABABB5] font-medium pb-6">{description}</p>
        </div>

        {/* Button */}
        <div className="ml-0 sm:ml-4 hidden group-hover:flex  transition duration-300 ease-in-out">
          <button className="bg-black text-white rounded-full px-6 py-3 sm:py-4 hover:bg-white hover:text-black border border-transparent hover:border-black transition duration-300 ease-in-out">
            Visit Link
          </button>
        </div>
      </div>
      {/* /////////// */}

      <div className="h-[1px] bg-white mt-14" />
    </div>
  );
};

export default WorkExperienceItem;

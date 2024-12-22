import WorkExperienceItem from "./WorkExperienceItem";

const experiences = [
  {
    date: "2019 - Current",
    title: "Full Stack Developer",
    workType: "Freelancer",
    description: `Worked on various open-source projects and collaborated with clients to deliver high-quality web applications. Designed and developed numerous websites with a focus on responsive design, scalability, and performance optimization. Leveraged technologies like Python, JavaScript, and modern frameworks to create user-friendly interfaces and robust back-end systems. Consistently delivered innovative solutions, enhancing user experiences and meeting diverse client needs.`,
  },
];

const WorkExprience = () => {
  return (
    <div className=" py-28 max-w-screen-xl mx-auto space-y-6" id="experience">
      <div className="flex flex-wrap gap-3 items-center mb-16 text-gray-100">
        <p className="font-bold text-xl">01</p>
        <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">
          Work Experience
        </h2>
        <h2></h2>
      </div>

      <div>
        {experiences.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            date={experience.date}
            title={experience.title}
            workType={experience.workType}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExprience;

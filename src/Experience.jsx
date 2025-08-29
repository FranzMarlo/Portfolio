import { motion as Motion } from "framer-motion";
export default function Experience() {
  const experiences = [
    {
      role: "Capstone Project – SCES Online Learning Platform",
      company: "Academic Project",
      period: "January 2024- January 2025",
      description:
        "Developed a complete e-learning platform using HTML, CSS, JavaScript, and PHP. Built features for quizzes, analytics, and performance prediction.",
    },
    {
      role: "QA Tester Intern",
      company: "Batangas State University - TNEU ICT Central",
      period: "February 2025 – May 2025",
      description:
        "Performed functional, regression, and usability testing for api, web and mobile applications to ensure compliance with business requirements of the project.",
    },
  ];

  return (
    <section
      id="Experience"
      className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 py-6 px-4 sm:py-8 sm:px-6 md:py-10"
    >
      <div className="w-1/2 sm:min-w-130 md:min-w-150 lg:min-w-200 min-w-65 mx-auto border-b border-gray-200"></div>
      <Motion.h2
        className="text-2xl lg:text-4xl md:text-3xl font-bold font-poppins text-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        Experience
      </Motion.h2>

      <Motion.div
        className="relative max-w-3xl w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        <div className="absolute top-0 left-3 bottom-0 border-l-2 border-gray-400"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-12 mb-10">
            <div className="absolute left-0 top-2 w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 border-2 border-gray-600 rounded-full"></div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100">
              {exp.role}
            </h3>
            <p className="text-gray-400 text-sm sm:text-lg md:text-xl">
              {exp.company}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm  md:text-lg mb-3">
              {exp.period}
            </p>
            <p className="text-gray-300 text-xs sm:text-sm  md:text-lg">
              {exp.description}
            </p>
          </div>
        ))}
      </Motion.div>
    </section>
  );
}

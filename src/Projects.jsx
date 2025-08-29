import SCES from "./assets/sces.png";
import FlutterQuiz from "./assets/flutterquiz.jpg";
import { motion as Motion } from "framer-motion";
export default function Projects() {
  const projects = [
    {
      title: "SCES Online Learning Platform",
      description:
        "An IT Capstone Project developed with HTML, CSS, Javascript and PHP.",
      link: "https://github.com/FranzMarlo/SCES-Online-Learning-Platform",
      image: SCES,
    },
    {
      title: "Flutter Quiz App",
      description: "A simple IT application project developed with Flutter.",
      link: "https://github.com/FranzMarlo/Flutter-Quiz-App",
      image: FlutterQuiz,
    },
  ];

  return (
    <section
      id="Projects"
      className="font-poppins flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 py-6 px-4 sm:py-8 sm:px-6 md:py-10"
    >
      <div className="w-1/2 sm:min-w-130 md:min-w-150 lg:min-w-200 min-w-65 mx-auto border-b border-gray-200"></div>
      <Motion.h2
        className="text-2xl lg:text-4xl md:text-3xl font-bold font-poppins text-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        My Projects
      </Motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl w-full">
        {projects.map((project, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }} // start left & invisible
            whileInView={{ opacity: 1, x: 0 }} // move to place when in view
            viewport={{ amount: 0.25 }} // trigger when 25% visible, only once
            transition={{
              duration: 0.6, // how long each animation takes
              delay: index * 0.12, // stagger left->right by index
              ease: "easeOut",
            }}
            className="bg-neutral-950 border border-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 flex-grow text-sm sm:text-lg md:text-xl">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center text-sm mt-4 px-4 py-2 font-semibold bg-neutral-900 text-gray-200 rounded-lg hover:bg-neutral-800 transition-colors text-center gap-2 sm:text-lg md:text-xl"
              >
                View Project
                <svg
                  className="w-8 h-8 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

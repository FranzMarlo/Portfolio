import { motion as Motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 py-6 px-4 sm:py-8 sm:px-6 md:py-10 m-3"
    >
      <div className="w-1/2 sm:min-w-130 md:min-w-150 lg:min-w-200 min-w-65 mx-auto border-b border-gray-200"></div>
      <Motion.h2
        className="text-2xl lg:text-4xl md:text-3xl font-bold font-poppins text-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        About Me
      </Motion.h2>
      <Motion.p
        className="text-justify text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        I'm Franz Marlo, an aspiring Web Developer and a fresh graduate with a
        passion for creating modern, responsive, and user-friendly websites. I
        enjoy working with front-end technologies like HTML, CSS, JavaScript,
        React, and Tailwind CSS, while also having experience in backend
        development with PHP, and databases.
      </Motion.p>
      <Motion.p
        className="text-justify text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        As a recent graduate, I’m eager to apply my knowledge to real-world
        projects, continuously learn new technologies, and collaborate with
        teams to build impactful digital solutions. My goal is to grow as a
        developer and contribute to meaningful projects that improve user
        experiences.
      </Motion.p>
      <Motion.p
        className="text-justify text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        Open to opportunities where I can learn, innovate, and make a difference
        in the tech industry
      </Motion.p>
    </section>
  );
}

import profileIcon from "./assets/profile.jpg";
import Carousel from "./Carousel";
import resumeFile from "./assets/Franz-Marlo-Andal-Resume.pdf";
import { motion as Motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 m-4 font-poppins"
    >
      <div className="h-10 md:h-25"></div>
      <Motion.img
        src={profileIcon}
        alt="franz profile icon"
        className="w-40 h-40 rounded-2xl object-cover border border-gray-800 hover:shadow-[0_0_12px_4px_rgba(229,229,229,0.2)] transition-shadow duration-300 md:w-45 md:h-45 lg:w-50 lg:h-50"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      />
      <Motion.div
        className="flex flex-col gap-1 justify-center items-center max-w-3xl md:gap-4 sm:gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        <h1 className="font-poppins text-gray-200 text-2xl font-semibold text-center md:text-4xl lg:text-5xl">
          Hi, I'm Franz Marlo!
        </h1>
        <h1 className="font-poppins text-gray-200 text-2xl font-semibold text-center md:text-4xl lg:text-5xl">
          QA Tester & Web Developer
        </h1>
        <h3 className="font-poppins text-gray-300 text-sm text-center md:text-xl lg:text-2xl sm:text-lg">
          A Bachelor of Science in Information Technology Major in Business
          Analyics Fresh Graduate From Batangas State University - TNEU.
        </h3>
      </Motion.div>
      <Motion.div
        className="flex flex-row justify-center items-center gap-2 sm:gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        <a
          href="#Contact"
          className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm bg-gray-200 text-black font-semibold hover:bg-gray-400 cursor-pointer shadow-[0_0_12px_4px_rgba(229,229,229,0.2)] transition-shadow duration-300
          md:px-6 md:py-4 md:text-xl sm:px-5 sm:py-3 sm:text-lg"
        >
          Let's Connect
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-black"
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
              strokeWidth="2"
              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
        </a>
        <a
          href={resumeFile}
          download="Franz_Marlo_Resume.pdf"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-neutral-950 text-white font-semibold hover:bg-neutral-900 cursor-pointer shadow-[0_0_12px_4px_rgba(229,229,229,0.2)] transition-shadow duration-300
          md:px-6 md:py-4 md:text-xl sm:px-5 sm:py-3 sm:text-lg"
        >
          View Resume
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
              d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
            />
          </svg>
        </a>
      </Motion.div>
      <Carousel />
    </section>
  );
}

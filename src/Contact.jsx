import profileImage from "./assets/profile.jpg";
import resumeFile from "./assets/Franz-Marlo-Andal-Resume.pdf";
import { motion as Motion } from "framer-motion";
export default function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 bg-neutral-950 py-6 px-4 sm:py-8 sm:px-6 md:py-10 m-4"
    >
      <div className="w-1/2 sm:min-w-130 md:min-w-150 lg:min-w-200 min-w-65 mx-auto border-b border-gray-200"></div>
      <Motion.h2
        className="text-2xl lg:text-4xl md:text-3xl font-bold font-poppins text-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        Contact Me
      </Motion.h2>
      <Motion.h2
        className="text-gray-400 max-w-2xl text-center text-sm sm:text-lg md:text-xl mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        Let’s connect! You can reach me through my email or social platforms
        below.
      </Motion.h2>

      <Motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
      >
        <div className="relative group">
          <img
            src={profileImage}
            alt="Profile"
            className="w-44 h-60 sm:w-64 sm:h-80 md:w-64 md:h-80 object-cover rounded-2xl shadow-lg border border-gray-800 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
            <span className="text-white text-lg font-semibold mb-4">
              Franz Marlo Andal
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/franz-marlo-andal-780795282/",
                "_blank"
              )
            }
            className="group flex flex-row gap-2 justify-center items-center cursor-pointer bg-neutral-900 text-gray-200 rounded-lg hover:bg-neutral-800 transition-all duration-300 ease-in-out 
             transform hover:scale-105 hover:shadow-lg font-bold text-sm sm:text-lg px-6 py-3"
          >
            <span className="group-hover:hidden">LinkedIn</span>

            <span className="hidden group-hover:inline">Franz Marlo Andal</span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clip-rule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/FranzMarlo", "_blank")
            }
            className="group flex flex-row gap-2 justify-center items-center cursor-pointer bg-neutral-900 text-gray-200 rounded-lg hover:bg-neutral-800 transition-all duration-300 ease-in-out 
             transform hover:scale-105 hover:shadow-lg font-bold text-sm sm:text-lg px-6 py-3"
          >
            <span className="group-hover:hidden">Github</span>

            <span className="hidden group-hover:inline">FranzMarlo</span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              (window.location.href = "mailto:andalfranzb@gmail.com")
            }
            className="group flex flex-row gap-2 justify-center items-center cursor-pointer bg-neutral-900 text-gray-200 rounded-lg hover:bg-neutral-800 transition-all duration-300 ease-in-out 
             transform hover:scale-105 hover:shadow-lg font-bold text-sm sm:text-lg px-6 py-3"
          >
            <span className="group-hover:hidden">Email</span>

            <span className="hidden group-hover:inline">
              andalfranzb@gmail.com
            </span>
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
                strokeWidth="2"
                d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>
          </button>
          <a
            href={resumeFile}
            download="Franz_Marlo_Resume.pdf"
            className="group flex flex-row gap-2 justify-center items-center cursor-pointer bg-neutral-900 text-gray-200 rounded-lg hover:bg-neutral-800 transition-all duration-300 ease-in-out 
             transform hover:scale-105 hover:shadow-lg font-bold text-sm sm:text-lg px-6 py-3"
          >
            <span className="group-hover:hidden">Resume</span>

            <span className="hidden group-hover:inline">Download Resume</span>
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
        </div>
      </Motion.div>
    </section>
  );
}

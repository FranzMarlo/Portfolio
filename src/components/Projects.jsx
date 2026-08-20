import {featured, other} from "../data/projects";
import { motion as Motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../animations";

function ProjectVisual({ project, compact = false }) {
  if (project.image)
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        className={`w-full object-cover ${compact ? "h-36" : "h-56 sm:h-64"}`}
      />
    );
  return (
    <div
      className={`relative overflow-hidden bg-[#171715] ${compact ? "h-36" : "h-56 sm:h-64"}`}
      aria-hidden="true"
    >
      <div className="absolute inset-7 border border-[#3b3a35] rounded-xl" />
      <div className="absolute top-1/2 left-[18%] right-[18%] h-px bg-[#d8ff69] rotate-[-8deg]" />
      <div className="absolute top-[40%] left-[28%] size-3 rounded-full bg-[#d8ff69] shadow-[0_0_25px_#d8ff69]" />
      <span className="absolute bottom-7 left-8 font-mono text-xs tracking-widest text-[#77766f]">
        {project.visual === "route"
          ? "ROUTE / BOOK / NAVIGATE"
          : "READ / REFLECT / SHARE"}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="Projects" className="section bg-[#0d0d0c]">
      <Motion.div className="site-shell" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
        <Motion.p variants={fadeUp} className="eyebrow">Selected work / 01</Motion.p>
        <Motion.h2 variants={fadeUp} className="section-title">
          Systems built around real workflows—not just screens.
        </Motion.h2>
        <Motion.p variants={fadeUp} className="muted max-w-2xl mt-5 leading-relaxed">
          A selection of full-stack, academic, and independent work spanning
          bookings, inventory, education, and content management.
        </Motion.p>
        <Motion.div variants={stagger} className="grid lg:grid-cols-2 gap-5 mt-12">
          {featured.map((project, index) => (
            <Motion.article variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.22 }} className="card overflow-hidden group" key={project.title}>
              <ProjectVisual project={project} />
              <div className="p-6 sm:p-8">
                <div className="flex justify-between gap-4">
                  <p className="eyebrow">
                    0{index + 1} · {project.type}
                  </p>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="text-[#aaa9a4] hover:text-[#d8ff69]"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-4">
                  {project.title}
                </h3>
                <p className="muted leading-relaxed mt-3">
                  {project.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[#c7c6c0]">
                  {project.features.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#d8ff69]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.article>
          ))}
        </Motion.div>
        <Motion.div variants={fadeUp} className="flex items-end justify-between gap-4 mt-20 mb-7">
          <div>
            <p className="eyebrow">Other projects</p>
            <h3 className="text-2xl sm:text-3xl font-semibold mt-3">
              Smaller builds & experiments
            </h3>
          </div>
          <a
            href="https://github.com/FranzMarlo"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block muted hover:text-white"
          >
            All repositories ↗
          </a>
        </Motion.div>
        <Motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {other.map((project) => (
            <Motion.article variants={fadeUp} whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card overflow-hidden" key={project.title}>
              <ProjectVisual project={project} compact />
              <div className="p-5">
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p className="muted text-sm leading-relaxed mt-2">
                  {project.description}
                </p>
                <p className="font-mono text-xs text-[#d8ff69] mt-4">
                  {project.stack}
                </p>
                {project.repo && (
                  <a
                    className="inline-block mt-4 text-sm text-[#c7c6c0] hover:text-white"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository ↗
                  </a>
                )}
              </div>
            </Motion.article>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}

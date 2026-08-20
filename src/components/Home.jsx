import profileImage from "../assets/images/profile.jpg";
import resumeFile from "../assets/file/Franz_Marlo_B._Andal_Resume.pdf";
import { motion as Motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";

export default function Home() {
  return (
    <section
      id="Home"
      className="site-shell min-h-screen flex items-center pt-28 pb-16"
    >
      <div className="grid lg:grid-cols-[1fr_360px] gap-14 lg:gap-20 items-center w-full">
        <Motion.div variants={stagger} initial="hidden" animate="visible">
          <Motion.p variants={fadeUp} className="eyebrow mb-7">Batangas City · Open to opportunities</Motion.p>
          <Motion.h1 variants={fadeUp} className="text-[clamp(3.2rem,9vw,7.6rem)] leading-[.88] tracking-[-.07em] font-semibold text-[#f4f3ef]">
            Franz Marlo
            <br />
            <span className="text-[#77766f]">Andal.</span>
          </Motion.h1>
          <Motion.p variants={fadeUp} className="mt-8 text-xl sm:text-2xl font-medium text-[#d2d1cc]">
            Junior Web Developer <span className="text-[#66655f]">/</span> QA
            Tester
          </Motion.p>
          <Motion.p variants={fadeUp} className="muted mt-5 max-w-2xl text-base sm:text-lg leading-relaxed">
            I build responsive, database-driven web applications with React and
            Laravel, backed by hands-on experience in software testing and
            quality assurance.
          </Motion.p>
          <Motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-9">
            <a className="button-primary" href="#Projects">
              View selected work <span aria-hidden="true">↘</span>
            </a>
            <a
              className="button-secondary"
              href={resumeFile}
              download="Franz-Marlo-Andal-Resume-2026.pdf"
            >
              Download resume
            </a>
          </Motion.div>
        </Motion.div>
        <Motion.div initial={{ opacity: 0, scale: 0.96, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative max-w-[360px] mx-auto lg:mx-0">
          <div
            className="absolute -inset-4 border border-[#262624] rounded-[2rem] rotate-3"
            aria-hidden="true"
          />
          <img
            src={profileImage}
            alt="Franz Marlo Andal"
            className="relative aspect-[4/5] w-full object-cover object-top rounded-[1.5rem] grayscale border border-[#363633]"
            fetchPriority="high"
          />
          <div className="absolute -bottom-5 -left-2 sm:-left-5 card px-4 py-3 font-mono text-xs text-[#b9b8b2]">
            <span className="text-[#d8ff69]">●</span> Available for junior roles
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

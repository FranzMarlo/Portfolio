import resumeFile from "../assets/file/Franz_Marlo_B._Andal_Resume.pdf";
import { motion as Motion } from "framer-motion";
import { fadeUp, viewport } from "../animations";

export default function Contact() {
  return (
    <section id="Contact" className="section">
      <div className="site-shell">
        <Motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="card p-7 sm:p-12 lg:p-16 relative overflow-hidden">
          <div
            className="absolute -right-20 -top-20 size-72 rounded-full border border-[#292927]"
            aria-hidden="true"
          />
          <p className="eyebrow">Contact / 06</p>
          <h2 className="section-title relative">
            Have a junior role or a useful system to build?
          </h2>
          <p className="muted text-lg mt-5 max-w-2xl leading-relaxed relative">
            I’m currently exploring junior web development, software
            development, QA, and application support opportunities. The easiest
            way to reach me is by email.
          </p>
          <div className="flex flex-wrap gap-3 mt-9 relative">
            <a className="button-primary" href="mailto:andalfranzb@gmail.com">
              andalfranzb@gmail.com
            </a>
            <a
              className="button-secondary"
              href="https://www.linkedin.com/in/franz-marlo-andal-780795282/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="button-secondary"
              href="https://github.com/FranzMarlo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="button-secondary"
              href={resumeFile}
              download="Franz-Marlo-Andal-Resume-2026.pdf"
            >
              Resume ↓
            </a>
          </div>
          <p className="font-mono text-xs text-[#77766f] mt-8">
            Tabangao Ambulong, Batangas City, Batangas, Philippines
          </p>
        </Motion.div>
      </div>
    </section>
  );
}

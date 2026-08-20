import { motion as Motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../animations";

export default function About() {
  return (
    <section id="About" className="section">
      <Motion.div className="site-shell grid lg:grid-cols-[.72fr_1.28fr] gap-10 lg:gap-24" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
        <Motion.div variants={fadeUp}>
          <p className="eyebrow">Profile / 02</p>
          <h2 className="section-title">
            Development with a QA point of view.
          </h2>
        </Motion.div>
        <Motion.div variants={fadeUp} className="space-y-6 text-lg sm:text-xl leading-relaxed text-[#c2c1bb]">
          <p>
            I’m an Information Technology graduate from Batangas State
            University, where I specialized in Business Analytics. I enjoy
            turning detailed processes—bookings, stock movements, school
            records—into clear web applications.
          </p>
          <p>
            My current work centers on React, TypeScript, Laravel, and MySQL.
            Experience testing web, mobile, and API projects also shapes how I
            build: I pay attention to edge cases, data accuracy, and whether a
            feature behaves as expected outside the happy path.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="card p-5">
              <p className="eyebrow">Education</p>
              <h3 className="font-semibold mt-3">BS Information Technology</h3>
              <p className="muted text-sm mt-1">
                Business Analytics · 2021–2025
              </p>
              <p className="muted text-sm">Batangas State University – TNEU</p>
            </div>
            <div className="card p-5">
              <p className="eyebrow">Foundation</p>
              <h3 className="font-semibold mt-3">ICT — TVL Track</h3>
              <p className="muted text-sm mt-1">2019–2021</p>
              <p className="muted text-sm">AICS Batangas</p>
            </div>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
}

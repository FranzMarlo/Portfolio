import { skills } from "../data/skills";
import { motion as Motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../animations";
export default function Skills() {
  return (
    <section id="Skills" className="section border-y border-[#222220]">
      <Motion.div className="site-shell" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
        <Motion.p variants={fadeUp} className="eyebrow">Capabilities / 03</Motion.p>
        <Motion.h2 variants={fadeUp} className="section-title">
          A practical stack for building and checking real systems.
        </Motion.h2>
        <Motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#292927] border border-[#292927] rounded-2xl overflow-hidden mt-12">
          {skills.map(([title, skills]) => (
            <Motion.article variants={fadeUp} whileHover={{ y: -3 }} key={title} className="bg-[#0d0d0c] p-6 sm:p-8">
              <h3 className="text-lg font-semibold mb-5">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </Motion.article>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}

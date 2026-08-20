import {roles} from "../data/experience";
import { motion as Motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../animations";

export default function Experience() {
  return (
    <section id="Experience" className="section">
      <Motion.div className="site-shell" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
        <Motion.p variants={fadeUp} className="eyebrow">Experience / 04</Motion.p>
        <Motion.h2 variants={fadeUp} className="section-title">
          From testing software to building complete web systems.
        </Motion.h2>
        <Motion.div variants={stagger} className="mt-14 border-t border-[#292927]">
          {roles.map((item, index) => (
            <Motion.article
              variants={fadeUp}
              key={item.role}
              className="grid md:grid-cols-[70px_1fr_1.45fr] gap-4 md:gap-8 py-8 border-b border-[#292927]"
            >
              <span className="font-mono text-xs text-[#d8ff69]">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="muted text-sm mt-1">{item.place}</p>
                <p className="font-mono text-xs text-[#77766f] mt-3">
                  {item.period}
                </p>
              </div>
              <p className="muted leading-relaxed">{item.text}</p>
            </Motion.article>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}

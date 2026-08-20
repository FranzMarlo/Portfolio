import {items} from "../data/certificates";
import { motion as Motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../animations";

export default function Certifications() {
  return (
    <section
      id="Certifications"
      className="section bg-[#0d0d0c] border-y border-[#222220]"
    >
      <Motion.div className="site-shell" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
        <Motion.p variants={fadeUp} className="eyebrow">Credentials / 05</Motion.p>
        <Motion.h2 variants={fadeUp} className="section-title">
          A broader foundation in networks and cloud.
        </Motion.h2>
        <Motion.div variants={stagger} className="grid md:grid-cols-3 gap-4 mt-12">
          {items.map((item, index) => (
            <Motion.article
              variants={fadeUp}
              whileHover={{ y: -4 }}
              key={item.name}
              className="card p-6 sm:p-8 min-h-56 flex flex-col"
            >
              <div className="flex justify-between">
                <span className="font-mono text-xs text-[#77766f]">
                  CERT / 0{index + 1}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={item.link}
                  className="text-xs font-mono"
                >
                  View ↗
                </a>
              </div>

              <h3 className="text-xl font-semibold leading-snug mt-6">
                {item.name}
              </h3>
              <div className="mt-auto pt-7">
                <p className="text-sm text-[#c4c3bd]">{item.issuer}</p>
                <p className="muted text-xs mt-1">{item.year}</p>
              </div>
            </Motion.article>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}

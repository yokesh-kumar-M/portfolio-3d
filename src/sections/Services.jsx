import { motion } from "framer-motion";
import { services, getIconByTech } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
});

const Services = () => {
  return (
    <section id="services" className="section-page relative overflow-hidden" style={{ background: "transparent" }}>
      <div className="absolute inset-0 z-0 backdrop-blur-[1px] opacity-10 pointer-events-none" />

      <div className="container-wide">
        <motion.div {...fade()} className="mb-6">
          <span className="label-overline">Expertise</span>
        </motion.div>
        <motion.h2 {...fade(0.05)} className="heading-section mb-14" style={{ color: "var(--text)" }}>
          What I <span style={{ color: "var(--accent)" }}>specialise in.</span>
        </motion.h2>

        {/* Service rows — editorial layout with images */}
        <div className="space-y-0">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              {...fade(i * 0.08)}
              className="group py-8 md:py-12 flex flex-col md:flex-row items-start gap-6 md:gap-10 cursor-default transition-all duration-500 hover:translate-x-3"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {/* Number */}
              <span
                className="text-3xl md:text-5xl font-serif font-bold shrink-0 transition-colors duration-500"
                style={{ color: "var(--border-h)", width: "60px" }}
              >
                0{i + 1}
              </span>

              {/* Image */}
              <div className="shrink-0 overflow-hidden rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 w-full md:w-[160px] h-[140px] md:h-[100px]"
              >
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{svc.icon}</span>
                  <h3
                    className="text-xl font-bold transition-colors duration-400"
                    style={{ color: "var(--text)" }}
                  >
                    {svc.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <p
                  className="text-[15px] leading-relaxed mb-5 max-w-lg"
                  style={{ color: "var(--text-s)" }}
                >
                  {svc.description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {svc.tools.map((t) => {
                    const iconUrl = getIconByTech(t);
                    return (
                      <span key={t} className="pill flex items-center gap-2">
                        {iconUrl && <img src={iconUrl} alt={t} className="w-3.5 h-3.5 object-contain" />}
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

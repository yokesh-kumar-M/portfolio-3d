import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { certifications } from "../data/portfolioData";
import { CheckCircle, Calendar } from "lucide-react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
});

/* Each certification — clean horizontal layout, logo + text */
const CertEntry = ({ cert, index, isSmall = false }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      {...fade(0.1 + index * 0.1)}
      className={`grid grid-cols-1 ${isSmall ? "" : "lg:grid-cols-[120px_1fr]"} gap-6 lg:gap-10 pb-12 mb-12`}
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      {/* Left — Logo Container */}
      <div className="flex justify-start lg:justify-center">
        <div
          className="rounded-xl overflow-hidden flex items-center justify-center group relative shadow-2xl"
          style={{
            width: isSmall ? "80px" : "120px",
            height: isSmall ? "80px" : "120px",
            padding: "8px",
            background: "white", // White background for official badges (usually look best on white)
            border: "2px solid var(--accent)",
            boxShadow: "0 0 20px rgba(184, 134, 11, 0.15)"
          }}
        >
          {cert.badge && !imgError ? (
            <img
              src={cert.badge}
              alt={cert.org}
              className="object-contain transition-transform duration-500 group-hover:scale-110"
              style={{ width: "100%", height: "100%" }}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-mono leading-tight tracking-tighter text-black/50">{cert.org}</span>
              <span className="text-[8px] font-mono text-black/30">CREDENTIAL</span>
            </div>
          )}
        </div>
      </div>

      {/* Right — Content */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-3 flex-wrap">
          <span className="text-xs font-mono font-bold tracking-wider uppercase bg-[var(--accent)] text-white px-2 py-0.5 rounded" style={{ fontSize: '10px' }}>
            {cert.org}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "var(--text-m)" }}>
            <Calendar size={12} />
            {cert.year}
          </span>
        </div>

        <h3 className={`font-serif font-bold mb-4 ${isSmall ? "text-xl" : "text-2xl md:text-3xl"}`} style={{ color: "var(--text)" }}>
          {cert.name}
        </h3>

        <p className="text-[14px] leading-relaxed mb-6 max-w-2xl" style={{ color: "var(--text-s)" }}>
          {cert.description}
        </p>

        <div className={`grid grid-cols-1 ${cert.topics.length > 5 ? "sm:grid-cols-2" : ""} gap-x-8 gap-y-2`}>
          {cert.topics.map((topic) => (
            <div key={topic} className="flex items-center gap-2.5 py-0.5">
              <CheckCircle size={13} className="shrink-0" style={{ color: "var(--accent)" }} />
              <span className="text-[13px]" style={{ color: "var(--text-s)" }}>{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const featured = certifications.filter(c => c.featured);
  const others = certifications.filter(c => !c.featured);

  return (
    <section id="certifications" className="section-page relative overflow-hidden" style={{ background: "transparent" }}>
      <div className="container-wide">
        <motion.div {...fade()} className="mb-6">
          <span className="label-overline">Credentials</span>
        </motion.div>
        <motion.h2 {...fade(0.05)} className="heading-section mb-16" style={{ color: "var(--text)" }}>
          Verified <span style={{ color: "var(--accent)" }}>Credentials.</span>
        </motion.h2>

        {/* Featured Showcase (CEH & ISC2 CC) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 mb-20">
          {featured.map((cert, i) => (
            <div key={cert.name} className="flex flex-col">
              <CertEntry cert={cert} index={i} isSmall={true} />
            </div>
          ))}
        </div>

        {/* Further Achievements */}
        {others.length > 0 && (
          <div className="pt-16 border-t border-[var(--border)]">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] mb-12" style={{ color: "var(--text-m)" }}>Additional Accreditations</h4>
            {others.map((cert, i) => (
              <CertEntry key={cert.name} cert={cert} index={featured.length + i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;

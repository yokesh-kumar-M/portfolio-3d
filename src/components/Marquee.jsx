import { motion } from "framer-motion";

/*
 * Infinite scrolling marquee — CSS-driven for performance.
 */

const Marquee = ({ words, reverse = false, speed = 30 }) => {
  const items = [...words, ...words]; // duplicate for seamless loop

  return (
    <div
      className="overflow-hidden py-8 select-none relative"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <motion.div
        className="marquee-track"
        animate={{ x: reverse ? [0, "-50%"] : ["-50%", 0] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {items.map((word, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span
              className="text-2xl md:text-3xl font-serif font-bold tracking-tight"
              style={{ color: "var(--text-m)", opacity: 0.4 }}
            >
              {word}
            </span>
            <span
              className="text-lg"
              style={{ color: "var(--accent)", opacity: 0.3 }}
            >
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;

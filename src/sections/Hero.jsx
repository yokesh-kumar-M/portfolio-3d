import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, ChevronRight } from "lucide-react";
import profileImg from "../assets/me.png";

/* Live clock — shows visitor's local time */
const LiveClock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono text-[11px] tabular-nums" style={{ color: "var(--text-m)" }}>
      {time}
    </span>
  );
};

const TypeWriter = ({ words }) => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 28 : 60;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length === word.length)
          setTimeout(() => setDeleting(true), 2400);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setIdx((p) => (p + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words]);

  return (
    <span>
      {text}
      <span
        className="inline-block w-[2px] h-[0.85em] ml-0.5"
        style={{
          background: "var(--accent)",
          animation: "pulse-soft 1s ease-in-out infinite",
        }}
      />
    </span>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="section-page relative overflow-hidden"
      style={{ padding: 0, minHeight: "100vh", background: "transparent" }}
    >
      <motion.div style={{ y, opacity }} className="h-full">
        {/* Background Accent Glow (Subtle) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] pointer-events-none blur-[120px]"
          style={{ background: "var(--accent)" }}
        />

        <div className="container-wide relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-screen py-32">
          {/* Text side */}
          <div className="flex-1 max-w-2xl">
            {/* Status bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="flex items-center gap-4 mb-10 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "#22c55e",
                    animation: "pulse-soft 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="label-overline"
                  style={{ fontSize: "11px", letterSpacing: "0.2em" }}
                >
                  Available for opportunities
                </span>
              </div>
              <span style={{ color: "var(--border-h)" }}>·</span>
              <LiveClock />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-hero mb-8"
            >
              <span style={{ color: "var(--text)" }}>I'm </span>
              <span style={{ color: "var(--accent)" }}>Yokesh Kumar M</span>
              <br />
              <span
                style={{ color: "var(--text-m)" }}
                className="text-[clamp(1.4rem,4vw,2.8rem)]"
              >
                <TypeWriter words={personalInfo.roles} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg leading-relaxed mb-12 max-w-lg"
              style={{ color: "var(--text-s)" }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-main">
                Let's Connect
                <ChevronRight size={16} />
              </a>
              <a href="#projects" className="btn-outline">
                View My Work
              </a>
            </motion.div>
          </div>

          {/* Photo — embedded, no card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0"
          >
            <div
              className="absolute inset-0 blur-3xl opacity-25 rounded-full scale-110"
              style={{ background: "var(--accent)" }}
            />
            <img
              src={profileImg}
              alt={personalInfo.name}
              className="relative object-cover rounded-[2rem] img-fade-bottom"
              style={{ width: "240px", height: "280px" }}
            />
            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -left-4 md:-left-8 px-5 py-2.5 rounded-full"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  B.Tech CSE @ LPU
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-[10px] font-mono tracking-[0.25em] uppercase"
            style={{ color: "var(--text-m)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} style={{ color: "var(--text-m)" }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};


export default Hero;

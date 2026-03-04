import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    const dotCount = window.innerWidth < 768 ? 25 : 50;
    const dots = Array.from({ length: dotCount }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.2 + 0.4,
    }));

    let id;
    const draw = () => {
      ctx.fillStyle = "rgba(10,10,15,0.12)";
      ctx.fillRect(0, 0, c.width, c.height);
      dots.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,168,56,${0.1 + (progress / 100) * 0.3})`;
        ctx.fill();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(id);
  }, [progress]);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          setTimeout(onComplete, 600);
          return 100;
        }
        return p + 2;
      });
    }, 28);
    return () => clearInterval(t);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "#0A0A0F" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />

      <div className="relative z-10 flex flex-col items-center gap-10">
        <motion.img
          src="/custom_logo.png"
          alt="Logo"
          className="object-contain rounded-xl"
          style={{ width: "48px", height: "48px", filter: "drop-shadow(0 0 24px rgba(232,168,56,0.25))" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-center"
        >
          <h1 className="font-serif text-2xl font-bold text-white tracking-tight">
            Yokesh Kumar M
          </h1>
          <p className="text-xs mt-2 font-mono" style={{ color: "#E8A838" }}>
            Cybersecurity Engineer
          </p>
        </motion.div>

        <div className="w-48">
          <div
            className="h-[2px] w-full rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #E8A838, #B8860B)" }}
            />
          </div>
          <div className="flex justify-end mt-2">
            <span className="text-[10px] font-mono" style={{ color: "#E8A838" }}>
              {Math.min(100, Math.round(progress))}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

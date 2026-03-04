import { motion } from "framer-motion";
import { projects, getIconByTech } from "../data/portfolioData";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, delay: d, ease: [0.16, 1, 0.3, 1] },
});

const Projects = () => {
  return (
    <section id="projects" className="section-page relative overflow-hidden" style={{ background: "transparent" }}>
      <div className="absolute inset-0 z-0 backdrop-blur-[1px] opacity-10 pointer-events-none" />

      <div className="container-wide">
        <motion.div {...fade()} className="mb-6">
          <span className="label-overline">Projects</span>
        </motion.div>
        <motion.h2
          {...fade(0.05)}
          className="heading-section mb-14"
          style={{ color: "var(--text)" }}
        >
          Built for <span style={{ color: "var(--accent)" }}>security.</span>
        </motion.h2>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fade(i * 0.1)}
              className="group"
            >
              {/* Two column: image + content */}
              <div
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
              >
                {/* Project image */}
                <div className="w-full lg:w-[45%] shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ height: "220px" }}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[10px] font-mono font-bold px-3 py-1 rounded-full"
                      style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                    >
                      {project.date}
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-m)" }}>
                      {project.subtitle}
                    </span>
                  </div>

                  <h3
                    className="text-3xl font-serif font-bold mb-5"
                    style={{ color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-[15px] leading-[1.9] mb-8 max-w-lg"
                    style={{ color: "var(--text-s)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {project.tech.map((t) => {
                      const iconUrl = getIconByTech(t);
                      return (
                        <span key={t} className="pill flex items-center gap-2">
                          {iconUrl && <img src={iconUrl} alt={t} className="w-3.5 h-3.5 object-contain" />}
                          {t}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline !py-3 !px-6 !text-[13px]"
                    >
                      <Github size={15} />
                      Source
                      <ArrowUpRight size={13} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-main !py-3 !px-6 !text-[13px]"
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Separator */}
              {i < projects.length - 1 && (
                <div className="divider mt-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

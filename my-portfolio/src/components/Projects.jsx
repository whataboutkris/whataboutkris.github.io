import { motion } from "motion/react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f4f8ff] px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-orange-500">
            Work
          </p>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Selected projects
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[260px] overflow-hidden bg-slate-200">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative h-full w-full bg-gradient-to-br from-[#dfeeff] via-[#edf5ff] to-[#fff0e8]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.24),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%)]" />
                      <div className="absolute bottom-6 left-6 rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 backdrop-blur-sm">
                        Visual preview
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-600">
                      Project
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-700"
                      >
                        GitHub →
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                      >
                        Live demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
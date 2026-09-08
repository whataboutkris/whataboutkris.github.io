import { motion } from "motion/react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
          Work
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Selected projects
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
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
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:underline"
                >
                  GitHub →
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white"
                >
                  Live demo →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
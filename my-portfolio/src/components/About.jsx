import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
            About
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            A little about me
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I'm a developer interested in building useful products and
            solving interesting problems. I enjoy working across the
            frontend, learning new technologies, and turning ideas into
            polished experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["React", "JavaScript", "TypeScript", "Node.js", "Git", "UI/UX"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
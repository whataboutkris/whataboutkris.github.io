import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Hello, I'm 
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Kris.
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-400">
            I'm a tennis-enthusiast and developer who builds thoughtful, accessible, and
            high-performance web experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
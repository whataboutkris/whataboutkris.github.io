import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-16">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Let's build something.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Have a project, opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>

          <a
            href="mailto:you@example.com"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            Email me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
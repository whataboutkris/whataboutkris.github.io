import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f8fbff] px-6 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl"
      >
        <div className="relative mx-auto flex max-w-4xl flex-col items-center overflow-hidden rounded-[2rem] border border-[#7d88ff]/40 bg-gradient-to-br from-[#626dfc] via-[#4f5fe8] to-[#3d4adb] p-8 text-center shadow-[0_24px_80px_rgba(98,109,252,0.28)] sm:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),transparent_42%)]" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <p className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#eef1ff]">
              Contact
            </p>

            <h2 className="contact-heading max-w-2xl text-white">
              Come chat with me!
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base text-[#edf0ff]/90 sm:text-lg">
              I’m a developer interested in web
              development, client-facing design work, and software engineering
              opportunities.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="mailto:kristianlosenara@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-[#4f5fe8]"
              >
                Email me
              </a>

              <span className="text-sm font-medium text-[#edf0ff]/85">
                (Open to internships, freelance work, and full-time roles)
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-[#f4f8ff] px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-widest text-orange-500">
            About
          </p>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            A little about me
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I am a professional tennis coach and recent Computer Science graduate. I have experience with web development, client-facing design work, and software engineering. Currently, I am spending my time working for a tennis non-profit organization called the 40 Love Foundation!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["JavaScript", "HTML/CSS", "Python", "C++", "Arduino", "SEO", "Wix", "Canva"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
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
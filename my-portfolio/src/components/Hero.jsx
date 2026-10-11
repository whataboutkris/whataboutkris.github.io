
import { motion } from "motion/react";
import heroImage from "../assets/hero.png";
import TerminalText from "./TerminalText";

export default function Hero() {
  return (
    <section className="flex min-h-[76vh] items-center justify-center bg-[#b1c5fa] px-6 py-12 text-slate-900">
      <div className="mx-auto w-full max-w-5xl">

        {/* Main Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Portrait Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.5 }}
            className="relative mx-auto w-full max-w-[360px] order-1 lg:order-1"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-200/70 via-sky-200/70 to-indigo-200/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-full border border-slate-200 bg-white/80 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm">
              <img
                src={heroImage}
                alt="Kris portrait"
                className="aspect-square w-full rounded-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Typing Animation */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-2">

            {/* Hello, I'm Kris */}
            <div>
              <p className="mb-4 font-mono text-xl uppercase tracking-[0.25em] text-orange-600">
                <TerminalText
                  text="Hello, I'm"
                  speed={70}
                  delay={700}
                  showCursor={false}
                  className="text-black"
                />
              </p>

              <h1>
                <TerminalText
                  text="Kris."
                  speed={150}
                  delay={1600}
                  showCursor={true}
                  className="text-5xl text-black font-bold tracking-tight sm:text-6xl lg:text-7xl"
                />
              </h1>
            </div>

            {/* Description and Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.5 }}
            >
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                I'm a tennis-enthusiast and developer who builds thoughtful,
                accessible, and high-performance web experiences.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="#projects"
                  className="rounded-full bg-orange-500 px-6 py-3 font-medium text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
                >
                  View my work
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-800 transition hover:bg-slate-100"
                >
                  Get in touch
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
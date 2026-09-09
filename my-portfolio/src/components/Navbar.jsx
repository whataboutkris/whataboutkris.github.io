import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-bold tracking-tight text-slate-900"
        >
          {"{ Kristian Losenara }"}
        </a>

        <div className="hidden gap-6 text-sm text-slate-600 sm:flex">
          <a href="#about" className="transition hover:text-slate-900">
            About
          </a>

          <a href="#projects" className="transition hover:text-slate-900">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-slate-900">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
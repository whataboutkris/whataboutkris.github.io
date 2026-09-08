import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-bold tracking-tight"
        >
          YourName.
        </a>

        <div className="hidden gap-6 text-sm text-zinc-400 sm:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
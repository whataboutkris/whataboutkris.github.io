export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>© 2026 Your Name</p>

        <div className="flex gap-5">
          <a
            href="https://github.com/yourusername"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yourusername"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
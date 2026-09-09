export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f4f8ff] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 text-sm text-slate-600 sm:flex-row">
        <p>© 2026 Kris.</p>

        <div className="flex gap-5">
          <a
            href="https://github.com/whataboutkris?tab=repositories"
            className="hover:text-slate-900"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kristian-losenara-9628481a6/"
            className="hover:text-slate-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}